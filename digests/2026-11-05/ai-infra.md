# AI 基础设施日报 2026-11-05

> 生成时间: 2026-11-05 02:43 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate this carefully, maintaining all formatting, tables, headings, and technical terms while making it read naturally in Chinese technical writing style.

Let me go through section by section.
</think>


# AI 推理基础设施 — 跨项目摘要
**日期：** 2026-11-05 | **覆盖范围：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全貌

本轮摘要揭示了一个处于快速组合演进而非整合收敛阶段的基础设施栈。服务层（vLLM、SGLang）正围绕 Blackwell（SM120）和 ROCm 支持形成基础能力基线，同时在投机解码策略上走向分化——vLLM 的 DSpark 在 DeepSeek-V4 上处于损坏状态，而 SGLang 则在深化其 AMD MTP 流水线。llama.cpp 持续主导本地/边缘运行时赛道，v0.9.0 带来了 OCP FP8 和通用批处理张量 API，标志着其已具备多序列服务能力。Ollama 的关注重点已从单纯的模型支持转向算子层面的问题（显存预测精度、MCP 协议回归、MLX 上 YaRN 缩放正确性），表明产品正在进入管理边界情况的成熟期，而非功能扩张期。LiteLLM 承受着最多的下游压力——76 个 open issues 且与 v1.108.0 版本同期出现了三个并发回归——同时在大力构建多汇审计与管控平面。Unsloth 占据一个独特的细分领域：微调与训练而非推理服务，但其 v0.1.915-beta 版本和 CUDA Graph 解码工作表明，训练工具与推理部署之间的边界正在模糊化。

---

## 2. 活跃度对比

| 项目 | Issues（open / 活跃中） | PRs 合并（近 24 小时） | Release（近 24 小时） | 发布节奏 |
|---------|----------------------|------------------------|----------------------|-----------------|
| **vLLM** | 2 个值得关注；约 5 个活跃追踪 | 约 6 个 | 无 | 约双周 |
| **SGLang** | 约 76 个总计；15+ 个在追踪 | 约 30+ 个 | 无 | 约每周 |
| **llama.cpp** | 约 10+ 个追踪中 | 约 15 次提交 + 5 个 PR | **v0.9.0** | 约每月 |
| **Ollama** | 约 15+ 个追踪中 | 约 10 个 | 无 | 约每月 |
| **LiteLLM** | **76 个总计** | 约 500 个总计；约 10+ 个今日 | **v1.108.0**，v1.107.0-rc.3，v1.106.7 | 约每日（RC 通道） |
| **Unsloth** | 约 15+ 个追踪中 | 约 10 个 | **v0.1.915-beta** | 约每周 |

**观察：**
- **LiteLLM** 的 issue 量遥遥领先，反映出其作为网关层需要承接来自 Anthropic、Azure、Bedrock、Vertex 以及数十家第三方 API 的复杂上游波动。v1.108.0 版本引入的 MCP 关键回归将立即影响 Open WebUI 部署。
- **SGLang** 在服务引擎中 PR 活跃度最高，30+ 个合并 PR 涉及 AMD DSA、NPU 扩散模型、多模态 CUDA VMM 和调度器控制，表明其在年底前正加速推动异构硬件支持。
- **llama.cpp** 和 **Unsloth** 是今日仅有的两个有正式 tag 版本发布的项目，说明两者均处于发布质量里程碑而非持续集成冲刺阶段。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4 / V4.1-Flash** | ⚠️ DSpark 损坏 | — | — | — | 经 API | — |
| **Qwen3.8 Flash Next** | — | 进行中 | — | ✅ v0.1.915-beta | 经 API | — |
| **Qwen3（0.5B–72B）** | ✅ `--reasoning-parser qwen3` | ✅ 追踪中 | — | ✅ YaRN 已修复 | 经 API | — |
| **Apple Silicon / MLX** | — | ✅ RFC #32321 | — | ✅ YaRN + CUDA 设备检查 | — | — |
| **Meta MobileMoE** | — | — | ✅ QAT + base + SFT | — | 经 API | — |
| **Muse Spark** | — | ✅ 进行中（发布日支持） | — | — | — | — |
| **Ascend NPU W4A8 MoE** | — | ✅ PR #43739 开放中 | — | — | — | — |
| **Intel 下一代 Xeon（CBB）** | — | ✅ PR #45717 已合并 | — | — | — | — |
| **Ripple 65B** | — | — | ✅ 新架构 | — | 经 API | — |
| **Nemotron-H（Mamba2 混合）** | — | — | ✅ RoPE/FFN 已修复 | — | 经 API | — |
| **DeepSeek-V4 Vision** | — | ✅ OOM 修复（已关闭） | — | — | 经 API | — |
| **GLM-5.3-Flash** | — | ✅ 追踪 #45373 | — | — | 经 API | — |
| **drama-3 TTS** | — | — | ✅ 新架构 | — | 经 API | — |
| **YuE2 / Stable Audio 3 Medium** | — | — | — | — | — | ✅ v0.1.915-beta |
| **OLMoE 系列** | — | ✅ 已加入 registry | — | — | 经 API | — |

**覆盖度赢家：LiteLLM**（通过统一 API 可触及所有模型），但 **Unsloth 和 SGLang** 在前沿模型深度上领先。llama.cpp 在非 Transformer 架构（语音合成、Mamba2 混合、MoE 变体）覆盖上保持最强实力。Ollama 的 MLX YaRN 修复填补了本地 Apple Silicon 长上下文 Qwen3 变体长达六个月的空白。

---

## 4. 性能前沿

优化工作集中在四个不同方向，各项目在不同向量上各自领先：

### KV Cache 与内存管理
| 项目 | 重点 | 详情 |
|---------|-------|--------|
| **vLLM** | 投机解码正确性 | DSpark 草稿接受率为 0%，因 `packed_modules_mapping` bug；Blackwell 自适应验证不可靠 |
| **SGLang** | Agentic KV Cache 可编程策略 | PR #46542 引入分层 KV Cache，支持工具等待前缀识别 |
| **llama.cpp** | 批处理张量复制 API | v0.9.0 通用批处理张量运算消除了统一 KV Cache 的逐序列暂存拷贝 |
| **Ollama** | 显存预测精度 | 混合模型（Qwen3.5/3.8、Qwen3-Next）多算了 4–8 倍；`keep_alive=-1` 下 runner 驱逐行为 |
| **Unsloth** | RAG 摄入批处理 | 单文件路径出现 48 倍回归（约 99 ms vs 约 2.07 ms/chunk 批处理） |

### Kernel 与后端优化
| 项目 | 目标 | 详情 |
|---------|--------|--------|
| **SGLang** | AMD MI355X MoE Kernel | ROCm 上 MTP 拒绝采样跳过；DSA DCP prefill 路由；aiter 解码工作区消除 |
| **llama.cpp** | Vulkan Flash Attention | Tile 形状自动推导（Intel BMG 修复）；Prefill 专用 Intel shader；OpenCL GQA + head size 256 |
| **vLLM** | Blackwell SM120 Triton vs cuBLAS | Batch-invariant 模式路由 bug；MXFP4 MoE Kernel 正确性 |
| **Unsloth** | CUDA Graph Decode | T4 上 GPU 利用率提升约 50%；约 1070–1430 kernels/step（带 LoRA） |

### 量化
| 项目 | 格式 | 详情 |
|---------|--------|--------|
| **llama.cpp** | OCP FP8 E4M3 | v0.9.0；批处理张量复制支持量化 Cache |
| **vLLM** | MXFP4、NVFP4 | Blackwell MoE Kernel；Muse-Glimmer NVFP4 量化修复 |
| **SGLang** | W4A8 Ascend MoE | PR #43739；预量化 ModelSlim checkpoint 支持 |
| **Unsloth** | MXFP8/BF16 混合 | Qwen3.8 Flash Next：QSA 投影用 BF16，dense/control 用 MXFP8 |

### 分布式 / 分解架构
| 项目 | 特性 | 详情 |
|---------|--------|--------|
| **vLLM** | P/D 分解 | KV 完整性 bug #61160 和 #61229；NixlConnector 前缀缓存不安全 |
| **SGLang** | PD 分解断路器 | #31206：断路开启时将 prefill 发往 decode；Qwen EAGLE 回退后数据损坏 #48356 |

**关键结论：** KV Cache 创新正以互不兼容的抽象在各项目间分化。SGLang 的可编程策略、llama.cpp 的批处理张量 API 和 vLLM 的投机草稿策略代表了解决同一问题的三种不同理念。选型一个推理引擎，同时也是在选择一种 KV Cache 编程模型。

---

## 5. 层级定位

六个项目占据不同的垂直层级，直接竞争有限但边界摩擦在增加：

```
┌─────────────────────────────────────────────────────────────────────┐
│  应用 / Agent 层                                                     │
│  （Open WebUI、自定义 UI、Claude Code、工具调用工作流）              │
├─────────────────────────────────────────────────────────────────────┤
│  网关 / 抽象层                                                       │
│  LiteLLM ─── 统一 API 平面 + 管控平面 + 审计                         │
│  （多提供者路由、预算、观测）                                         │
├─────────────────────────────────────────────────────────────────────┤
│  服务引擎层                                                          │
│  vLLM ─────── 生产级推理；投机解码；P/D 分解                         │
│  SGLang ──── 调度器核心；多模态；Agentic KV Cache                    │
├─────────────────────────────────────────────────────────────────────┤
│  本地 / 边缘运行时层                                                  │
│  llama.cpp ── 可移植 CPU/GPU/NPU/Vulkan/OpenCL/Metal/WebGPU         │
│  Ollama ──── 终端用户桌面；MLX/YaRN；MCP 协议                        │
├─────────────────────────────────────────────────────────────────────┤
│  训练 / 微调层                                                       │
│  Unsloth ─── 微调；CUDA Graph；RAG；多 LoRA；语音                    │
└─────────────────────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 核心差异化因素 |
|-------|----------|------------------------|
| **网关** | LiteLLM | 提供商抽象广度；管控平面；预算管理 |
| **服务（生产级）** | vLLM、SGLang | 吞吐、硬件支持、分布式服务 |
| **服务（本地）** | llama.cpp、Ollama | 可移植性、易用性、MLX 支持 |
| **训练/微调** | Unsloth | 内存效率、多 LoRA、CUDA Graph Decode |

**边界张力：**
- **llama.cpp → Ollama**：llama.cpp 提供运行时引擎；Ollama 在其上封装了用户体验、MCP 协议层。今日 Ollama 的 llama.cpp 升级（b12111）和 MLX 稳定性修复体现了这层依赖关系。
- **LiteLLM → vLLM/SGLang**：LiteLLM 可以将请求代理至 vLLM 或 SGLang 作为后端，但目前大多数使用场景是直连提供商 API（Anthropic、OpenAI、Azure）。管控平面的建设表明 LiteLLM 正向上游移动，目标是 fleet 编排。
- **Unsloth → llama.cpp/Ollama**：Unsloth 产出的微调 GGUF 检查点流入 llama.cpp 和 Ollama。今日多 LoRA 分页修复和 CUDA Graph Decode 工作将直接提升下游运行时的推理质量。

---

## 6. 趋势信号

### 🔴 关键趋势

1. **投机解码在生产环境下全面不稳定。**
   vLLM（DSpark，DeepSeek-V4 上接受率为 0%）和 SGLang（Qwen EAGLE 回退后 PD 数据损坏）在投机路径上均存在活跃的正确性 bug。依赖投机加速的应用应暂时禁用该特性或严密监控接受率。两边的修复时间表均不明确。

2. **MCP 协议回归已开始波及终端产品。**
   LiteLLM v1.108.0 破坏了旧版订阅监听器的 MCP `tools/list`，直接影响了 Open WebUI。这是连续第二个周期出现 LiteLLM 发布引入面向下游的协议回归。使用 LiteLLM 作为 MCP 服务器的团队应在升级后验证 MCP 工具发现功能。

3. **KV Cache 内存计量在混合架构上系统性错误。**
   Ollama 对递归/SSM 模型（Qwen3.5、Qwen3.8、Qwen3-Next）的 KV Cache 多算了 4–8 倍。SGLang 的调度器混合 prefill 工作也在解决类似问题。目前没有任何项目为 Mamba2 混合、Qwen-Next 和 MoE 架构发布过正确的内存模型。在任何多租户部署中这都将导致 OOM 驱逐。

### 🟠 中期信号

4. **Apple Silicon 正在成为一等推理目标。**
   SGLang 的 MLX RFC、Ollama 的 MLX YaRN + CUDA 设备验证，以及 llama.cpp 的 Metal 改进（v0.9.0 移除了 `unary-cast-constexpr` patch 依赖）共同表明 Apple Silicon 推理正从社区Hack走向正式支持层。预计 2027 年 Q1 前将出现生产级 M4 Ultra 部署。

5. **量化格式正在沿厂商特定路线分化。**
   OCP FP8 E4M3（llama.cpp）、MXFP4/NVFP4（vLLM/SGLang）、W4A8 Ascend（SGLang）和 MXFP8/BF16 混合（Unsloth）代表同一基础架构的四种不兼容量化方案。应用开发者无法在引擎间互换量化格式。模型中心运营商应预期用户对跨引擎兼容性的咨询量将上升。

6. **管控平面和审计基础设施正在成为基础能力。**
   LiteLLM 的 OCSF 事件、Splunk HEC、Sentinel 和 S3 Object Lock 汇点；SGLang 的调度器资源控制；vLLM 的 VLLM_LORA_SHRINK_USE_MULTICTA 标志——均反映了一个从"能否服务这个模型"转向"能否大规模治理和审计这个模型"的转变。企业采购方应将此纳入评估体系。

7. **训练与服务边界正在模糊。**
   Unsloth 的 CUDA Graph Decode 优化、多 LoRA 服务和 RAG 摄入工具使其定位为推理相邻平台。Ollama 的微调预览和 vLLM 的 LoRA shrink 工作表明两个服务引擎都在吸收训练衍生的技术。对于构建端到端 ML 管线的团队，评估是否仍值得维护独立的训练和服务工具链正当其时。

### ⚪ 观察列表

8. **Blackwell（SM120）稳定性仍有疑问。** vLLM 存在活跃的路由 bug 和不可靠的块大小；SGLang 正在调查 DeepSeek-V4 Prefill 性能与 vLLM/marlin 之间的 2–7K tok/s 差距。面向 B100/B200/5090 硬件的应用应保留 CUDA 回退路径。

9. **SGLang CI 健康度正在下滑。** 177 条评论的追踪 issue 涉及不稳定测试，当前存在活跃的基础设施故障。尖端分支在接下来 2–4 周可能有较高的不稳定性。

10. **llama.cpp 的 XDNA 后端请求**（37 条评论，39 👍）表明社区对 Intel NPU 加速有强烈需求。若该功能落地，将极大扩展 llama.cpp 的边缘硬件覆盖范围。

---

**面向基础设施工程师和技术决策者的核心结论：**

> 推理栈整体健康但动荡。服务引擎（vLLM、SGLang）正围绕 Blackwell 和 AMD ROCm 支持收敛，同时在投机路径上与正确性 bug 搏斗。本地运行时（llama.cpp、Ollama）正在深化 Apple Silicon 和边缘支持。网关层（LiteLLM）正以规模化方式承接提供商复杂度，同时引入波及终端产品的回归。微调工具（Unsloth）正在向推理级性能靠拢。团队应：(1) 在当前 bug 周期解决前避免在生产环境使用投机解码，(2) 任何 LiteLLM 升级后验证 MCP 协议行为，(3) 构建架构感知的 KV Cache 内存计量，而非依赖引擎估算值，(4) 持续跟踪 Apple Silicon 和管控平面赛道，这些决策将影响 2027 年的架构选型。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>用户要求将一段英文技术报告翻译成简体中文。让我仔细分析原文并翻译。

这段文字包含：
1. 一个表格行（Medium优先级，关于Triton路由bug）
2. 一个标题"6. What This Means for Application Developers"
3. 多个列表项，关于不同场景下的建议

关键术语和上下文：
- DeepSeek-V4, DeepSeek-V4.1-Flash - 模型名，不翻译
- speculative decoding - 推测解码
- DSpark draft models - 模型/功能名，不翻译
- packed_modules_mapping - 代码/配置标识符，不翻译
- Blackwell (SM120) - 硬件平台名称
- enable_adaptive_verification - 配置选项，不翻译
- v0.32.x - 版本号，不翻译
- AMD MI355X (ROCm) - 硬件/软件平台
- Qwen3.8, MiniMax-M3.1 MoE - 模型名
- batch-invariant mode - 技术术语
- Hopper/Blackwell - NVIDIA GPU架构
- cuBLAS, Triton - 库名/框架名
- routing bug - 路由bug
- LoRA - 技术名，不翻译
- Multi-CTA shrink - 技术功能名
- VLLM_LORA_SHRINK_USE_MULTICTA - 环境变量，不翻译
- H20 - 硬件平台
- NixlConnector, P/D disaggregation - 技术/功能名
- KV integrity - 技术术语
- cross-request contamination - 技术问题描述


- premature block release - 技术问题描述
- automatic prefix caching - 技术功能

现在进行翻译，确保技术准确性，同时保持中文技术文档的自然风格。需要确保保留所有关键术语和上下文信息，使用恰当的中文技术表达方式。
</think>


| 🟡 Medium | **Batch-invariant 模式错误路由至 Triton** | `#65569` — 在 Hopper/Blackwell 架构上，Triton 矩阵乘法覆盖触发异常，而 cuBLAS 结果正确 | Open | — |

## 6. 这对应用开发者意味着什么

**如果你运行的是 DeepSeek-V4 或 DeepSeek-V4.1-Flash：**
- 立即验证你的推测解码接受率。由于缺少 `packed_modules_mapping`（#65618），DSpark draft 模型当前接受率为 0%。在修复上线之前，考虑禁用 DSpark 或使用 v0.31.1。
- 在 Blackwell（SM120）硬件上，勿启用 `enable_adaptive_verification`，也不要期待 v0.32.x 的块大小能可靠运行。

**如果你运行的是 AMD MI355X（ROCm）：**
- Qwen3.8 和 MiniMax-M3.1 MoE 内核正在推进重要的性能优化。请关注每日构建版本中的 ROCm 性能回归问题。

**如果你在 Hopper 或 Blackwell 上使用 batch-invariant 模式：**
- 路由 bug（#65569）可能导致工作负载被发送至 Triton，而实际使用 cuBLAS 会更快。请关注修复进展。

**如果你使用 LoRA 配合大尺寸适配器：**
- Multi-CTA shrink（#64502）正在落地；在 H20 上设置 `VLLM_LORA_SHRINK_USE_MULTICTA=1` 以降低内存压力。

**如果你使用 NixlConnector 或 P/D  disaggregation：**
- 两个关键 bug 影响 KV 完整性：跨请求污染（#61160）和远程读取期间的提前块释放（#61229）。在这两个问题解决之前，避免在生产环境中将 NixlConnector 与自动前缀缓存一起使用。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate a GitHub digest/technical report from English to Simplified Chinese. Let me carefully translate this while:

1. Preserving all Markdown structure (headings, tables, lists, blockquotes, etc.)
2. Keeping URLs, code references, issue/PR numbers intact
3. Using natural technical Chinese
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me go through section by section:

**Title:** SGLang Digest — 2026-11-05 → SGLang 技术周报 — 2026-11-05

Actually, let me think about the tone. This is a developer newsletter digest, so I should use:
- Technical but readable Chinese
- Preserve the emoji severity indicators
- Keep tables with their formatting
- Natural sentence structure

Let me translate section by section:

**Section 1: Today's Highlights**
CI 健康状况仍然是最受关注的问题：issue **#42752** 已积累 177 条评论，持续追踪 PR babysitting 工作流中的不稳定测试和基础设施故障。优化方面，MambaPool OOM 修复（**#47984**）于今日合并，解决了混合 GDN 模型（如 GLM-5.3-Flash）在并行准入期间导致的 CUDA 内存峰值问题。一项关于迁移至共享 `api.v1` 后端 API 的新 RFC（**#45816**）标志着重大的统一推进。

Let me continue translating carefully, maintaining the technical register and natural Chinese flow:

**Section 2: Releases & Breaking Changes**
- "No new releases in the last 24h" → 过去 24 小时无新版本发布
- "Migration note" → 迁移说明
- "Migration note: The api.v1 migration RFC (#45816) is open and tracking progress across three workstreams: Generate schema coverage (#45164), sgl-processor migration (#46031, #46432), and router migration (#45808). 

Teams integrating custom backends should monitor this effort as it unifies the generation API surface." → 迁移说明：`api.v1` 迁移 RFC（**#45816**）已开放，跨三个工作流跟踪进度：生成 Schema 覆盖率（**#45164**）、sgl-processor 迁移（**#46031**、**#46432**）和路由器迁移（**#45808**）。集成自定义后端的团队应密切关注此工作，因为它统一了生成 API 接口。

**Section 3: New Model & Hardware Support**
This section tracks emerging model and hardware support including Apple Silicon with MLX support via RFC and early implementation, as well as additional model integrations currently in development. | 状态 | 备注 |
| 平台 | 备注 |

**4. 性能与优化**

| 类别 | 工作 | 详情 |
| 内存 — MambaPool | **已修复** | **#47984** 将 `MambaPool.copy_from` 的时序状态拷贝分块处理，避免在单个调度步骤中处理多个检查点的 COW 时出现内存溢出。通过修复 **#47916** 解决了内存管理问题。 |
| 内存 — 多模态 | PR 进行中 | **#48507** 对每个 GPU 的 CUDA VMM 特征拷贝设置上限，并在 pinned 主机内存中分阶段处理溢出。 |
| 内存 — 分词器崩溃转储 | PR 进行中 | **#48508** 将崩溃转储的请求历史序列化以绕过循环 GC 扫描，从而在负载下降低开销。 |
| AMD — MTP 拒绝采样 | PR 进行中（**#48090**） | 在 ROCm 上对 EAGLE/NEXTN 验证跳过词汇表级别的排序（`--speculative-eagle-topk 1`），避免每个草稿 token 进行昂贵的密集 softmax 操作。 |
| AMD — DSA DCP 前填充 | PR 进行中（**#48505**） | 根据线字节数路由 DSA DCP 前填充，以选择最优的全归约策略。 |
| AMD — aiter 解码工作区 | PR 进行中（**#47911**） | 在 `vectorized_5d` KV 布局上跳过未使用的解码工作区分配，节省 `max_bs * num_heads * ceil(context_len / 256) * (head_dim + 2) * 4` 字节。 |
| AMD — DSA 解码图变体 | PR 进行中（**#48302**） | 统一 attention-DP rank 间的解码图变体，避免空闲 rank 上的稀疏变体选择。 |
| GLM-5.3-Flash on Hopper | 跟踪 issue **#45373** | 针对 SM90 的 Q4 内核优化路线图，与 **#37813** 中的更广泛 Blackwell 工作相关。 |
| Qwen3.8-Flash-Next on MI355X | 跟踪 issue **#44304** | MI355X（gfx950）上 MoE + QSA + MXFP4 变体的性能优化跟踪。 |
| DeepSeek-V4 on SM120 | 调查中（**#33422**） | 在 4× RTX PRO 6000（TP=4）上报告约 2–7K tok/s 前填充性能，对比 vLLM/marlin 的约 12.5K；内核覆盖率在 **#19637**、**#30272** 中追踪。 |
| 调度器混合前填充 | PR 进行中（**#47308**） | 添加资源控制以防止长前填充在短等待请求被服务前消耗输入预算，即

使分块预算有名义上的余量。 |

**5. 稳定性与回归**

按严重程度和参与度排序：

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **🔴 严重 — CI** | **#42752** — `PR Test Base` / `PR Test Extra` 运行中的不稳定测试和 CI 基础设施故障 | OPEN（177 条评论） | — |
| **🔴 严重 — 正确性** | **#31206** — sgl-router PD：打开断路器分派到解码，产生永久性伪死前填充 | OPEN（8 条评论） | — |
| **🔴 严重 — 正确性** | **#48356** — Qwen EAGLE PD 回滚后解码产生损坏输出 | OPEN（3 条评论） | — |
| **🟠 高 — OOM** | **#48411** — SPR Xeon 在 KV 分配期间 OOM-killed（`sglang-spr08/18/19`） | OPEN（3 条评论） | — |
| **🟠 高 — 内存** | **#36941** — GB10 长前填充（>40k tokens）耗尽统一内存，静默杀死 worker rank | OPEN（6 条评论） | — |
| **🟠 高 — 内存** | **#38074** — NVFP4 MoE Marlin 回退每层泄漏约 0.66 GiB → ≤48GB 卡上 OOM | CLOSED（不活跃） | — |
| **🟠 高 — OOM** | **#37931** — DeepSeek-V4-Flash-Vision-Exp 调度器在 FP8→FP4 权重转换期间 OOM-killed | CLOSED（不活跃） | — |
| **🟡 中 — 正确性** | **#41449** — DSpark + TP：语法约束请求导致所有 rank 死锁（集体自旋） | OPEN（2 条评论） | — |
| **🟡 中 — 正确性** | **#48172** — `--tool-call-parser` 自动检测在 Qwen2.5-0.5B、Qwen3 2507、Ling-mini-2.0 上失败 | OPEN（2 条评论） | — |
| **🟡 中 — 性能** | **#48196** — Wan VAE 解码时间在 `5090-sm*` runner 上自 2026-10-17 起激增 2–10× | OPEN（3 条评论） | — |
| **🟡 中 — 性能** | **#48311** — 扩散性能检查取决于 runner，作业内重试无法修复慢速主机 | OPEN（2 条评论） | — |
| **🟡 中 — 回归** | **#48460** — 导入 sglang 会覆盖 `triton.next_power_of_2`，破坏其他 Triton 内核 | OPEN（1 条评论） | — |
| **🟢 低 — 正确性** | **#34259** — Kimi-K3 跨提示推理泄漏 | CLOSED（不活跃） | — |

**6. 这对应用开发者意味着什么**

1. **Apple Silicon 即将到来。** MLX 路径 RFC（**#32321**）表明 SGLang 正在为 M 系列 Mac 上的本地服务奠定基础——这与本地开发和边缘推理工作流相关。

2. **API 整合即将进行。** `api.v1` 迁移（**#45816**）将重塑生成接口。定制路由器或处理器集成应计划在近期进行 Schema 更改。

3. **Agentic KV 缓存控制即将推出。** PR **#46542** 引入了可编程 KV 缓存策略和组合式分层——支持识别工具等待前缀和跨层状态恢复。这直接有益于多轮 agent 工作负载。

4. **多模态特征传输存在内存回归修复待处理。** 如果运行使用 `--mm-feature-transport cuda_vmm` 的图像繁重工作负载，请关注 **#48507**（限制 GPU 驻留副本）和 **#48507**（在 pinned 主机内存中分阶段溢出）。

5. **AMD 上的投机解码更快。** MTP 拒绝采样优化（**#48090**）消除了 HIP 上词汇表级别的 softmax——在 MI300X/MI355X 上运行 EAGLE/NEXTN 草稿时，预期验证延迟显著降低。

6. **关注 CI 信号。** 不稳定测试的活跃追踪（**#42752**）表明夜间构建和前沿分支可能具有更高的不稳定性——在生产集成的 CI/CD 规划中考虑这一点。
</think>


# SGLang 技术周报 — 2026-11-05

## 1. 今日要闻

CI 健康状况仍然是最受关注的问题：issue **#42752** 已积累 177 条评论，持续追踪 PR babysitting 工作流中的 flaky 测试和基础设施故障。优化方面，MambaPool OOM 修复（**#47984**）于今日合并，解决了混合 GDN 模型（如 GLM-5.3-Flash）在并行准入期间导致的 CUDA 内存峰值问题。一项关于迁移至共享 `api.v1` 后端 API 的新 RFC（**#45816**）标志着 sgl-processor 与 sgl-router 之间的重大统一推进。

## 2. 版本发布与变更

| 项目 | 详情 | 参考 |
|------|---------|-----------|
| **过去 24 小时无新版本发布** | — | — |

**迁移说明：** `api.v1` 迁移 RFC（**#45816**）已开放，跨三个工作流跟踪进度：生成 Schema 覆盖率（**#45164**）、sgl-processor 迁移（**#46031**、**#46432**）和 router 迁移（**#45808**）。集成自定义后端的团队应密切关注此项工作，因为它将统一整个生成 API 接口层。

## 3. 新模型与硬件支持

| 模型 / 架构 | 状态 | 备注 |
|---------------------|--------|-------|
| **Apple Silicon（MLX）** | RFC + 早期实现 | 路线图 issue **#32321**；Torch 主导的 SRT 路径，导出 whole-model MLX 分区；实现 PR **#36164** |
| **Muse Spark** | 进行中（Day-0 支持） | 跟踪器 **#44678**；依赖 DeepGEMM 补丁 **sgl-project/DeepGEMM#104** |
| **Ascend NPU — W4A8 MoE** | PR 进行中（**#43739**） | Ascend MoE expert 在线 W4A8 量化；支持预量化 ModelSlim checkpoint |
| **Intel 下一代 Xeon（CBB 模式）** | PR 已合并（**#45717**） | 扩展 CPU 核心绑定，覆盖下一代 Xeon 的计算构建块拓扑 |

## 4. 性能与优化

| 类别 | 工作项 | 详情 |
|----------|------|---------|
| **内存 — MambaPool** | **已修复** | **#47984** 将 `MambaPool.copy_from` 的时序状态拷贝分块处理，避免在单个调度步骤中处理多个 checkpoint 的 radix COW 时 OOM。修复了 **#47916**。 |
| **内存 — 多模态** | PR 进行中 | **#48507** 限制每个 GPU 的 CUDA VMM 特征拷贝量，并将溢出部分暂存于 pinned 主机内存中，用于图像请求队列繁重的场景。 |
| **内存 — tokenizer 崩溃转储** | PR 进行中 | **#48508** 将崩溃转储的请求历史序列化，以绕过循环 GC 扫描，降低高负载下的开销。 |
| **AMD — MTP 拒绝采样** | PR 进行中（**#48090**） | 在 ROCm 上对 EAGLE/NEXTN verify 阶段跳过词汇表级排序（`--speculative-eagle-topk 1`），避免每个 draft token 进行昂贵的全词表密集 softmax。 |
| **AMD — DSA DCP prefill** | PR 进行中（**#48505**） | 按线字节数路由 DSA DCP prefill，选择最优的全归约策略（owned path vs. gathered path）。 |
| **AMD — aiter decode workspace** | PR 进行中（**#47911**） | 在 `vectorized_5d` KV 布局上跳过未使用的 decode workspace 分配，节省 `max_bs * num_heads * ceil(context_len / 256) * (head_dim + 2) * 4` 字节。 |
| **AMD — DSA decode graph variants** | PR 进行中（**#48302**） | 统一 attention-DP rank 间的 decode graph 变体，避免空闲 rank 上的稀疏变体选择开销。 |
| **GLM-5.3-Flash on Hopper** | 跟踪 issue **#45373** | 面向 SM90 的 Q4 内核优化路线图；与 **#37813** 中的更广泛 Blackwell 工作相关联。 |
| **Qwen3.8-Flash-Next on MI355X** | 跟踪 issue **#44304** | gfx950 / MI355X 上 MoE + QSA + MXFP4 变体的性能优化跟踪。 |
| **DeepSeek-V4 on SM120** | 调查中（**#33422**） | 在 4× RTX PRO 6000（TP=4）上 prefill 约 2–7K tok/s，而 vLLM/marlin 约 12.5K；内核覆盖率在 **#19637**、**#30272** 中追踪。 |
| **Scheduler 混合 prefill** | PR 进行中（**#47308**） | 新增资源控制，防止长 prefill 在短等待请求被服务前耗尽输入预算，即使分块预算名义上有余量。 |

## 5. 稳定性与回归

按严重程度和参与度排序：

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **🔴 严重 — CI** | **#42752** — `PR Test Base` / `PR Test Extra` 运行中的 flaky 测试和 CI 基础设施故障 | OPEN（177 条评论） | — |
| **🔴 严重 — 正确性** | **#31206** — sgl-router PD：断路器开启时分派到 decode，产生永久性 fake-dead prefill | OPEN（8 条评论） | — |
| **🔴 严重 — 正确性** | **#48356** — Qwen EAGLE PD retraction 后 decode 输出损坏 | OPEN（3 条评论） | — |
| **🟠 高 — OOM** | **#48411** — SPR Xeon 在 KV 分配期间 OOM-kill（`sglang-spr08/18/19`） | OPEN（3 条评论） | — |
| **🟠 高 — 内存** | **#36941** — GB10 长 prefill（>40k tokens）耗尽统一内存，静默杀死 worker rank | OPEN（6 条评论） | — |
| **🟠 高 — 内存** | **#38074** — NVFP4 MoE Marlin 回退每层泄漏约 0.66 GiB → ≤48GB 卡上 OOM | CLOSED（不活跃） | — |
| **🟠 高 — OOM** | **#37931** — DeepSeek-V4-Flash-Vision-Exp scheduler 在 FP8→FP4 权重转换期间 OOM-kill | CLOSED（不活跃） | — |
| **🟡 中 — 正确性** | **#41449** — DSpark + TP：语法约束请求导致所有 rank 死锁（collective spin） | OPEN（2 条评论） | — |
| **🟡 中 — 正确性** | **#48172** — `--tool-call-parser` 自动检测在 Qwen2.5-0.5B、Qwen3 2507、Ling-mini-2.0 上失败 | OPEN（2 条评论） | — |
| **🟡 中 — 性能** | **#48196** — Wan VAE decode 时间在 `5090-sm*` runner 上自 2026-10-17 起激增 2–10× | OPEN（3 条评论） | — |
| **🟡 中 — 性能** | **#48311** — Diffusion 性能检查依赖 runner，作业内重试无法修复慢速宿主机 | OPEN（2 条评论） | — |
| **🟡 中 — 回归** | **#48460** — 导入 sglang 覆盖 `triton.next_power_of_2`，破坏其他 Triton kernel | OPEN（1 条评论） | — |
| **🟢 低 — 正确性** | **#34259** — Kimi-K3 跨提示推理泄漏 | CLOSED（不活跃） | — |

## 6. 对应用开发者的意义

1. **Apple Silicon 即将到来。** MLX 路径 RFC（**#32321**）表明 SGLang 正在为 M 系列 Mac 原生 Serving 铺路——这对本地开发和边缘推理工作流有直接意义。

2. **API 统一即将落地。** `api.v1` 迁移（**#45816**）将重塑生成接口层。定制 router 或 processor 集成应提前规划近期的 schema 变更。

3. **Agentic KV 缓存控制即将上线。** PR **#46542** 引入了可编程 KV 缓存策略和组合式分层——支持识别工具等待前缀和跨层状态恢复，直接利好多轮 agent 工作流。

4. **多模态特征传输存在内存回归修复待合入。** 如果运行使用 `--mm-feature-transport cuda_vmm` 的图像密集工作负载，请关注 **#48507**（限制 GPU 驻留拷贝）和 **#48507**（在 pinned 主机内存中暂存溢出数据）。

5. **AMD 上的投机解码更快了。** MTP 拒绝采样优化（**#48090**）消除了 HIP 上的全词表 softmax——在 MI300X/MI355X 上使用 EAGLE/NEXTN draft 时，verify 延迟将显著降低。

6. **关注 CI 信号。** Flaky 测试的持续活跃追踪（**#42752**）表明夜间构建和前沿分支可能有较高的不稳定风险——在生产集成的 CI/CD 规划中请将此纳入考量。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me work through this carefully, maintaining the structure and using natural technical Chinese.

Key things to preserve:
- All URLs, commit hashes, PR numbers
- Table structure
- Heading hierarchy
- Bold/italic formatting
- Horizontal rules
- The overall structure

Let me translate section by section:
</think>


# llama.cpp Digest — 2026-11-05

## 1. 今日要点

v0.9.0 版本今日发布，引入了 OCP FP8 E4M3 量化方案、新增 `flash_attn_ext_rows` 算子以高效处理多序列 KV 缓存，以及通用批量张量拷贝 API。OpenCL 解码性能通过扩展 GQA 配置（head size 256）下的 flash attention 支持获得了显著提升，同时 drama-3 TTS 架构也加入了支持列表。

---

## 2. 版本发布与破坏性变更

| 版本 | Commit | 主要变更 |
|---------|--------|-------------|
| **v0.9.0** | b12110 | OCP FP8 E4M3 量化；`flash_attn_ext_rows` 算子；批量张量拷贝 API；Clover、Limite、Metis-1.6、Mistral Large 4 架构 |

**迁移注意事项：**
- 量化标签匹配逻辑已修正，`:F16` 不再会误匹配 `BF16` 文件，同时 `:Q4_XS` 与 `IQ4_XS` 的歧义问题也已解决。如果你依赖特定的量化文件名模式，升级后请验证模型加载行为。([b12100](https://github.com/ggml-org/llama.cpp/commit/b12100))

---

## 3. 新模型与硬件支持

**新架构支持：**
- **Meta MobileMoE** — 支持 Base、SFT 和 QAT 权重；QAT 权重转换保留打包的 INT4 权重和训练好的缩放因子。([PR #31706](https://github.com/ggml-org/llama.cpp/pull/31706))
- **Ripple** (ricursiveAI) — 65B 稠密模型，Apache-2.0 许可证。([PR #31692](https://github.com/ggml-org/llama.cpp/pull/31692))
- **drama-3 TTS** — 新增语音合成模型支持。([b12116](https://github.com/ggml-org/llama.cpp/commit/b12116))
- **Nemotron-H** (Mamba2-hybrid) — 修复 RoPE 和 FFN 激活函数问题，确保 logits 输出正确。([PR #31703](https://github.com/ggml-org/llama.cpp/pull/31703))

**后端改进：**
- **OpenCL**：支持 GQA 2 和 6，head size 256；Q4_K gate + GLU 内核的工作组利用率提升。([b12118](https://github.com/ggml-org/llama.cpp/commit/b12118))
- **WebGPU**：批量张量 API（`get_tensor_n`、`set_tensor_n`）及 F32 MEAN 运算上线。([PR #31473](https://github.com/ggml-org/llama.cpp/pull/31473), [PR #31591](https://github.com/ggml-org/llama.cpp/pull/31591))

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **OpenCL 解码** | 提升工作组利用率 | Q4_K gate + GLU 内核优化；GQA 配置（head size 256）现可利用 flash attention。([b12118](https://github.com/ggml-org/llama.cpp/commit/b12118)) |
| **GGUF 写入** | 消除中间拷贝 | 设备端张量直接写入文件，跳过临时 vector 暂存步骤。([b12101](https://github.com/ggml-org/llama.cpp/commit/b12101)) |
| **Vulkan FA** | 自动推导 tile shape | Cooperative matrix flash attention 改为查询设备能力，不再硬编码 16×16×16，避免 Intel BMG 静默回退到 FA_SCALAR。([PR #30351](https://github.com/ggml-org/llama.cpp/pull/30351)) |
| **Vulkan prefill** | 新 Intel FA 内核 | 为支持的 Intel 平台 LLM 工作负载提供专用的 prefill flash attention shader。([PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357)) |
| **HIP** | 启用 fast-math | ROCm 后端 fast-math 选项统一整合并稳定化。([PR #31625](https://github.com/ggml-org/llama.cpp/pull/31625)) |
| **CUDA** | 架构对齐修复 | `get_mmvq_mmid_max_batch` 改用最高编译架构而非运行时算力，防止内核启动边界不匹配。([PR #31679](https://github.com/ggml-org/llama.cpp/pull/31679)) |

---

## 5. 稳定性与回归问题

**活跃问题（按活跃度/严重程度）：**

| Issue | 后端 | 状态 | 严重程度 | 备注 |
|-------|---------|--------|----------|-------|
| [#21725](https://github.com/ggml-org/llama.cpp/issues/21725) — XDNA 后端功能请求 | 通用 | OPEN | 功能增强 | 37 条评论；社区对 XDNA NPU 支持需求强烈 |
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) — vk::DeviceLostError (RADV Strix Halo) | Vulkan | CLOSED | 高 | 已沉寂；疑似驱动/内核交互问题 |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) — SYCL `--fit` 内存溢出 | SYCL | OPEN | 高 | Arc B70；多 GPU 内存统计不完整 |
| [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) — FA→SCALAR 回退导致 O(N²) 性能下降 | Vulkan/ANV | OPEN | 高 | Arc B580；长序列时设备丢失 |
| [#30018](https://github.com/ggml-org/llama.cpp/issues/30018) — Gemma 4 解码 -5% 回归 | Vulkan | OPEN | 中 | 已二分至 commit 0bb496db；Arc B580 |
| [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) — vk::Queue::submit DeviceLost | Vulkan | OPEN | 高 | Linux 上的 RX 7900 XTX |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) — Gemma 4 + MTP abort | HIP/ROCm | OPEN | 高 | Gemma-4-31B + MTP + --mmproj；AMD AI PRO R9700 |
| [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) — MTP draft 阶段 CUDA 非法内存访问 | CUDA | OPEN | 高 | RTX 4060 Ti；KV 缓存回滚后触发 |
| [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) — KHR_coopmat 非确定性 | Vulkan | OPEN | 严重 | Arc Pro B70 (BMG G31)；每次运行结果不一致 |

**今日修复：**
- Server 实时模式改为发送错误事件，而非异常时崩溃。([b12119](https://github.com/ggml-org/llama.cpp/commit/b12119))
- GGML 张量视图边界计算现正确考虑 stride，防止重叠行张量越界访问。([b12102](https://github.com/ggml-org/llama.cpp/commit/b12102))
- 设备端 KV 缓存状态拷贝大小针对量化缓存进行了修正。([PR #30541](https://github.com/ggml-org/llama.cpp/pull/30541))

---

## 6. 对应用开发者的建议

**核心要点：**

1. **如果使用 FP8 模型或多序列推理，请升级到 v0.9.0。** 新的 `flash_attn_ext_rows` 算子直接提升统一 KV 缓存效率；OCP FP8 E4M3 支持解锁了新的量化工作流。

2. **验证量化标签匹配行为。** 如果模型文件名包含重叠子字符串（例如同时包含 `*F16*` 和 `*BF16*`），修正后的匹配逻辑可能导致文件选择结果改变。首次运行时审计模型加载日志。

3. **Intel Arc B580/B70 上的 Vulkan 用户需充分测试。** 多个活跃问题涉及 flash attention 静默回退到 SCALAR、cooperative matrix 非确定性以及长序列解码性能衰减。如对可靠性要求高，建议在这些问题稳定前使用 CPU 或 CUDA 回退方案。

4. **OpenCL 用户应在 GQA 模型（head size 256，如 Llama 3.1 70B 系列）上测试，预期会有明显的解码加速。** 用你的具体量化格式验证。

5. **新模型支持**：MobileMoE 和 Ripple 为边缘/移动端（MobileMoE）和大规模部署（Ripple 65B）场景增加了选择。相关转换工具已在上述 PR 中提供。

6. **SYCL 多 GPU 用户**：Intel Arc 多 GPU 环境下 `--fit` 的内存统计问题仍未解决。跨多卡运行时密切关注内存使用情况。

---

*数据来源：github.com/ggml-org/llama.cpp — 2026-11-05*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama technical digest from English to Simplified Chinese. I need to:
1. Translate all the content to natural, fluent Simplified Chinese
2. Preserve all formatting (headings, tables, lists, etc.)
3. Keep technical terms, URLs, issue numbers, project names in their original form
4. Use the register of a Chinese developer newsletter

Let me carefully translate this section by section.

Title: Ollama Digest — 2026-11-05 → Ollama 技术速报 — 2026年11月5日

Let me translate each section carefully.
</think>


# Ollama 技术速报 — 2026年11月5日

## 1. 今日要闻

今日 MLX runner 修复力度显著，包括 Qwen3/Qwen3.5 的 YaRN rope-scaling 能力补全以及 CUDA 设备验证修复。在模板层，`{{ .Function }}` 渲染的单行 bug 导致工具定义输出 Go 结构体而非 JSON，目前已有修复 PR。Cloud 用户需注意 `/api/usage` 会话百分比回归问题，以及 `deepseek-v4-pro` 存在未公开的 `max_tokens` 上限。

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|------|------|
| **llama.cpp 升级至 b12111** | 移除了 metal unary-cast-constexpr 补丁（已被上游修复替代）。 | [#19530](https://github.com/ollama/ollama/pull/19530) |

过去 24 小时内无新的 Ollama 版本 tag。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|------|------|
| **Qwen3.8 Flash Next 内存高效变体** | MLX PR 在 QSA 投影和非专家 MTP 路径上保留 BF16；对 dense/control 权重使用 MXFP8量化。以 `qwen3.8-flash-next:125b-a6b-nvfp4` 和 `:125b-mlx` 发布。 | [#18078](https://github.com/ollama/ollama/pull/18078) |
| **AutoTrust text/vision 模型登陆 MLX** | 通过 creation、prompt encoding 和 API 路由添加。测试候选：`./ollama pull dhiltgen/autotrust-jev`。 | [#19399](https://github.com/ollama/ollama/pull/19399) |
| **Qwen3 / Qwen3.5 的 MLX YaRN scaling** | 识别两种 config schema 中的显式 RoPE scaling 元数据；对 text 和 mRoPE 应用 YaRN 频率和幅度缩放。**关闭** #18262 和 #19129。 | [#19231](https://github.com/ollama/ollama/pull/19231) |
| **MLX CUDA：不支持 GPU 架构拒绝启动** | MLX runner 现调用 `cuda.get_arch_list()`（来自上游 `ml-explore/mlx#4761` 的合并），在推理中途失败前干净退出。 | [#19521](https://github.com/ollama/ollama/pull/19521) |
| **WSL2：NVIDIA RTX Spark N1X 笔记本全 GPU 内存支持** | 修复检测逻辑，使 Ollama 正确使用全部 80 GB 专用 GPU 内存，而非限制在 WSL2 客户机 RAM 以内。 | [#19520](https://github.com/ollama/ollama/pull/19520) |

---

## 4. 性能与优化

| 项目 | 详情 | 链接 |
|------|------|------|
| **MLX decision model 长请求边界** | 允许更长的 state/schema 输入，同时在 runner 加载前限制总 prompt 扩展量。为超尺寸 MLX 请求添加回归测试。 | [#19408](https://github.com/ollama/ollama/pull/19408) |
| **VRAM 预测对混合 KV cache 多算 4–8×** | `llama_server.go` 中 `PredictServerVRAM` 将 recurrent/SSM-block 模型（Qwen3.5/3.8、Qwen3-Next）一律按 f16 计费，无论 `OLLAMA_KV_CACHE_TYPE` 如何设置，导致 runner 过早被逐出。尚无修复 PR。 | [#19463](https://github.com/ollama/ollama/issues/19463) |
| **OpenAI 流式 flush 修复** | SSE chunk 向 UI 客户端（Chatbox、OpenWebUI）的推送存在延迟；修复确保数据流完整flush至客户端。 | [#17027](https://github.com/ollama/ollama/pull/17027) |
| **macOS Metal GPU 内存文档更新** | 新增文档说明统一内存分配上限及 Apple Silicon 上调高上限的方法。 | [#19527](https://github.com/ollama/ollama/pull/19527) |

---

## 5. 稳定性与回归

> 按预估用户影响排序。"修复 PR 已提交" 表示问题关联的 PR 或独立提交的 PR 在近 24 小时内已提出。

| 严重级别 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| 🔴 严重 | **Qwen2.5-Coder 和 Qwen3 原生工具调用失效** — 模型生成格式错误的 function call，随后被静默丢弃 | 待处理 | [#19524](https://github.com/ollama/ollama/issues/19524) |
| 🔴 严重 | **`{{ .Function }}` 输出 Go 结构体而非 JSON** — qwen2.5 模板中工具名称在每次请求中均被破坏 | **修复 PR 已提交** | [#19529](https://github.com/ollama/ollama/issues/19529) → [#19534](https://github.com/ollama/ollama/pull/19534) |
| 🔴 严重 | **CUDA v13 语法约束生成触发 Xid 79 崩溃**（GPU 脱离总线）；相同请求在 v12 下正常运行 | 待处理 | [#17026](https://github.com/ollama/ollama/issues/17026) |
| 🔴 严重 | **Windows RTX 5090 工具调用过程中 runner 断开连接** — HTTP 500 /tokenize，间歇性出现 | 待处理 | [#19439](https://github.com/ollama/ollama/issues/19439) |
| 🟠 高危 | **Cloud `/api/usage` 回归** — 会话/周使用量百分比字段不再返回，仅保留请求计数桶 | 待处理 | [#19511](https://github.com/ollama/ollama/issues/19511) |
| 🟠 高危 | **Responses API 静默截断超尺寸输入** — 在关闭截断时（Bonsai 27B，v0.40.13–0.40.14）仍然截断 | 待处理 | [#19492](https://github.com/ollama/ollama/issues/19492) |
| 🟠 高危 | **`deepseek-v4-pro` 拒绝 `max_tokens > 65536`** — 模型实际支持约 384 k 输出 | 待处理（仅 Cloud） | [#19517](https://github.com/ollama/ollama/issues/19517) |
| 🟡 中等 | **Qwen2.5-VL 视觉推理 HTTP 500** — vision encoder 在 NVIDIA GPU 上运行时"token 重复超限"；回退 CPU 可正常工作 | 待处理 | [#19483](https://github.com/ollama/ollama/issues/19483) |
| 🟡 中等 | **WSL2 GPU 内存上限** — VRAM 充足时 Ollama 仅将模型部分卸载至 GPU | 修复 PR 已提交 | [#19519](https://github.com/ollama/ollama/issues/19519) → [#19520](https://github.com/ollama/ollama/pull/19520) |
| 🟡 中等 | **OpenAI Responses API 中 compaction 工具输出与 Call-ID 不匹配** — 后续 compaction 因"function output has no matching call" 失败 | 待处理 | [#19532](https://github.com/ollama/ollama/pull/19532) |
| 🟡 中等 | **安装包体积膨胀** — CUDA v13 增量使包体积增大；已提议按 GPU 类型拆分发包器 | 待处理 | [#12268](https://github.com/ollama/ollama/issues/12268)，[#19512](https://github.com/ollama/ollama/issues/19512) |
| ⚪ 提示 | **通过 `/api/me` 获取 Cloud 使用量统计** 功能请求（93 👍）— 尚未实现 | 待处理 | [#12532](https://github.com/ollama/ollama/issues/12532) |
| ⚪ 提示 | **拉取模型时 TLS 握手超时长期未解**（自 2024 年 4 月起） | 待处理 | [#3504](https://github.com/ollama/ollama/issues/3504) |

---

## 6. 应用开发者需要关注的事项

1. **若你在 Qwen2.5-Coder 或 Qwen3 上运行工具调用工作流**：请暂缓生产部署，等待 `{{ .Function }}` 模板修复 (#19534) 合入 — 当前每个请求中的 function 定义都会被破坏。

2. **若你在 CUDA v13 下使用语法约束输出（`format: json`）**：建议切换至 `cuda_v12` 或 CPU 推理以保障稳定性；v13 会在长生成任务中触发 Xid 79 GPU 总线错误。

3. **若你接入 Ollama Cloud 的 `/api/usage` 端点**：响应 schema 已变更 — 会话和周百分比字段缺失。请更新依赖这些字段的解析逻辑。

4. **若你在 Windows RTX 5090 或 WSL2 NVIDIA Spark N1X 硬件上运行 Ollama**：当前已知问题影响 GPU 内存利用率和多步工具调用对话中的 runner 稳定性。请留意 `/tokenize` 上的 HTTP 500 响应。

5. **若你管理混合 recurrent/SSM 模型（Qwen3.5/3.8、Qwen3-Next）**：VRAM 预测器对 KV cache 多算 4–8×。若你接近 80 % 内存阈值，即使设置了 `keep_alive=-1`，runner 也可能被意外逐出。请密切监控 `ollama ps`，或临时显式设置 `OLLAMA_KV_CACHE_TYPE`。

6. **若你构建 Apple Silicon 部署**：新的 Metal 内存文档 (#19527) 阐明了统一内存分配上限 — 在为 24–64 GB Mac 规划模型规模前值得一读。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Simplified Chinese. I need to follow the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the technical accuracy and natural Chinese expression.

Key terms to translate consistently:
- LiteLLM - keep as-is
- Docker images - Docker 镜像
- streaming - 流式传输 / 流式
- usage data - 用量数据
- cost tracking - 成本追踪
- breaking changes - 破坏性变更
- regression - 回归问题 / 降级
- provider - 提供商
- model - 模型
- budget - 预算
- guardrails - 安全护栏
- MCP - MCP (keep)
- SDK - SDK (keep)
- Open WebUI - Open WebUI (keep)
- commit - 提交
- PR - PR (keep)
- issue - Issue (keep)
- merge - 合并
- fix - 修复
- crash - 崩溃
- blocking - 阻塞
- latency - 延迟
- tokens - token (keep as technical term)
- cached_tokens - cached_tokens (keep)
- reasoning - 推理 / 思考
- thinking block - 思考块
- tool call - 工具调用
- system message - 系统消息
- budget window - 预算周期
- spend counter - 支出计数器
- cold spend counter - 冷支出计数器


- canary - 探针 / 监控指标
- OCSF - OCSF (keep)
- WORM storage - 一次性写入多次读取存储
- Zscaler AI Guard - Zscaler AI Guard (keep)
- OpenTelemetry - OpenTelemetry (keep)
- SSE keepalive - SSE 保活
- prompt caching - 提示词缓存
- cloud - 云端
- edge case - 边界情况
- multi-turn conversation - 多轮对话
- headless CI - 无头 CI

I'll carefully translate the digest, maintaining technical accuracy and natural Chinese expression while preserving all markdown structures and technical details.
</think>


# LiteLLM 每日摘要 — 2026-11-05

---

## 1. 今日要闻

LiteLLM v1.108.0 作为新版稳定版发布，Docker 镜像通过 cosign 完整签名。今天大量 **流式传输与成本追踪 Bug** 得到修复——包括客户端提前断开时的用量数据丢失和缓存 token 错误计费——与此同时，控制平面审计流水线迎来了三条 PR，引入 OCSF 事件、Splunk HEC / Sentinel 接收器以及 S3 Object Lock WORM 存储。开放 Issue 方面，v1.108.0 引入了一个回归问题：MCP `tools/list` 在旧版订阅监听器上会阻塞 18–50 秒。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|------|
| [v1.108.0](https://github.com/BerriAI/litellm/releases/tag/v1.108.0) | **稳定版** | Docker 镜像使用来自提交 `e82a3c6` 的密钥进行 cosign 签名。 |
| [v1.107.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.3) | RC | 基于 `f9778e9` 构建（合并 PR #50129）。PyPI 上发布为 `1.107.0rc3`，Docker 上为 `v1.107.0-rc.3`。 |
| [v1.106.7](https://github.com/BerriAI/litellm/releases/tag/v1.106.7) | 稳定版 | 使用相同的 cosign 密钥。验证命令：`cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c6/cosign.pub ghcr.io/berriai/litellm:v1.106.7` |

**升级注意：** v1.108.0 携带了 **回归问题**，影响那些发送带有 2026 年前协议版本的 `notifications/initialized` 的 MCP 客户端（例如 Open WebUI 和 Python `mcp` SDK `ClientSession`）。详见 §5。

---

## 3. 新模型与硬件支持

过去 24 小时内未新增模型家族、硬件后端或量化格式。不过两个 Issue 指向提供商覆盖范围的变化：

- **Cloudflare Workers AI** — Issue [#21115](https://github.com/BerriAI/litellm/issues/21115)（已关闭）指出 Cloudflare 提供商实现已过时，需要更新以支持 Cloudflare 扩展的 API（文生图、文字转语音、更多模型）。尚无 PR 合并。
- **QwenCloud 迁移路径** — 功能请求 [#36150](https://github.com/BerriAI/litellm/issues/36150)（已关闭）请求为国际开发者提供从旧版 DashScope 提供商迁移到 QwenCloud 的官方路径。

---

## 4. 性能与优化

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#49815](https://github.com/BerriAI/litellm/pull/49815) | **Claude 成本映射填充** — 当模型不在成本映射中时，从家族基线回填缺失的能力字段（上下文窗口、支持的功能）。 | 模型不在成本映射中时，路由/选择更准确。 |
| [#47676](https://github.com/BerriAI/litellm/pull/47676) | **冷支出计数器修复** — 支出计数器变冷后恰好到达的请求，之前会重复累加客户的全部支出。现在每个进程仅累加一次。 | 突发流量下防止虚假的 422 预算拒绝。 |
| [#50098](https://github.com/BerriAI/litellm/pull/50098) | **`lite logout` 在无头/CI 环境下** — 在没有 OS 密钥链的机器上（`LITELLM_CLI_DISABLE_KEYRING=1`），现在始终删除 `token.json`。 | 消除 CI 中的「仍处于登录状态」假象。 |
| [#50139](https://github.com/BerriAI/litellm/pull/50139) | **Zscaler AI Guard** — 现在仅扫描最后一个用户轮次，而非将完整对话展平成一个字符串进行扫描。 | 降低安全护栏延迟，防止系统提示词触发误报。 |

**控制平面技术栈**（PR #49656–#49662、#49657–#49659）：跨集群用量聚合扇出、控制平面 → 数据面 W3C 追踪传播、OCSF 审计事件模式——对单次调用延迟无影响，但实现了规模化可观测性。

---

## 5. 稳定性与回归问题

### 🔴 高严重性

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) | **v1.108.0 回归：MCP `tools/list` 阻塞 18–50 秒** — 在使用 2026 年前协议发送 `notifications/initialized` 的旧版订阅监听器上触发。影响 Open WebUI 和 Python `mcp` SDK `ClientSession`。引入于 v1.108.0（从 v1.106.6 升级）。 | **开放** — 尚无修复 PR。 |
| [#14457](https://github.com/BerriAI/litellm/issues/14457) | **客户端提前断开时用量数据丢失** — 流式请求在提供商发送最终用量块之前终止，导致所有 token 追踪丢失，产生计费缺口和统计数据不准确。 | **已关闭** — 修复已合并？检查关联 PR。 |
| [#49179](https://github.com/BerriAI/litellm/issues/49179) | **`/key/update` 丢弃进行中请求的成本** — 从 `LiteLLM_BudgetWindowSpend` 中丢失（但 `LiteLLM_SpendLogs` 和 key 的 `spend` 列中未丢失）。 | **已关闭** — 修复待验证。 |

### 🟠 中等严重性

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#49795](https://github.com/BerriAI/litellm/issues/49795) | **纯推理前缀翻转 `sent_first_chunk`** — 高努力值模型在思考中途失败时报告 `is_pre_first_chunk=False`，即使客户端未收到任何内容，也丢失了流中回退。 | **开放** |
| [#36168](https://github.com/BerriAI/litellm/issues/36168) | **最终块包含非空 `choices` 时流式传输丢失上游 `usage`** — `cached_tokens` 丢失，成本按全额输入计费。是 #28735 的镜像问题。 | **已关闭** |
| [#36083](https://github.com/BerriAI/litellm/issues/36083) | **v1.95.0+ 流式传输用量丢失 `cached_tokens`** — 流式重组期间丢失，导致缓存输入被全额计费。 | **已关闭** |
| [#48773](https://github.com/BerriAI/litellm/issues/48773) | **Azure Responses 桥接重复工具调用参数** — 在 `/v1/chat/completions` 流式传输中，完整 JSON 发送后再次逐段发送。 | **已关闭** |
| [#50024](https://github.com/BerriAI/litellm/issues/50024) | **Azure Messages 转 Responses 绕路丢失加密推理** — 从恢复的工具调用历史中丢失。是 #40451 / LIT-7419 的后续。 | **开放** |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | **Bedrock Converse 向非 Anthropic GLM 模型重放 `reasoningText.signature`** 导致 Bad Request。 | **开放** |
| [#48637](https://github.com/BerriAI/litellm/issues/48637) | **Databricks 纯工具响应导致 `resolve_reasoning_and_content` 抛出 `KeyError: 'content'`**。 | **开放** |
| [#34732](https://github.com/BerriAI/litellm/issues/34732) | **并发请求绕过 `max_budget_per_session`** — 会话预算检查不会为进行中的调用预留容量。 | **开放** |

### 🟡 较低严重性（正确性值得关注）

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#30765](https://github.com/BerriAI/litellm/issues/30765) | `/v1/messages` 流式传输在 Claude Code 的 `thinking` → `text` 块转换后丢失第一个 `text_delta`。 | **已关闭** |
| [#36917](https://github.com/BerriAI/litellm/issues/36917) | Anthropic `/v1/messages` 静默丢弃 `messages[]` 中的 `role: "system"` 消息。 | **已关闭** |
| [#48384](https://github.com/BerriAI/litellm/issues/48384) | Anthropic `server_tool_use`（网页搜索）作为待处理 `tool_call` 返回到 `/v1/chat/completions`，导致 Agent 陷入循环。 | **开放** |
| [#47046](https://github.com/BerriAI/litellm/issues/47046) | Vertex/Gemini 上下文缓存当 `cache_control` 不在首条消息时会对对话重新排序；`modify_params` 也会丢弃 `system_instruction`。 | **开放** |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | `/v1/messages` 发送到 Vertex Claude 时，`messages` 在 `system`/`tools` 之前发送，导致工具循环轮次中出现提示词缓存未命中。 | **开放** |
| [#49038](https://github.com/BerriAI/litellm/issues/49038) | **Interactions 规范探针变红** — 针对 Google 线上规范的定期 OpenAPI 合规性测试失败。 | **开放** |
| [#48719](https://github.com/BerriAI/litellm/issues/48719) | `OpenTelemetry.set_attributes` 在响应对象（如 `DecisionsResponse`、MCP `CallToolResult`、列表）上调用 `.get()`，而这些对象不支持该方法。 | **开放** |
| [#49711](https://github.com/BerriAI/litellm/issues/49711) | SSE keepalive 将流提交为 200，因此后续上游失败永远不会通知到 Anthropic 客户端。 | **开放** |

---

## 6. 对应用开发者的影响

1. **如果你使用 v1.106.6 或更早版本，并且使用 Open WebUI 或 Python `mcp` SDK：** **暂勿升级到 v1.108.0。** 等待 [#50065](https://github.com/BerriAI/litellm/issues/50065) 的补丁或应用本地修复。MCP `tools/list` 将挂起 18–50 秒。

2. **如果你按预算周期追踪支出：** 在 [#49179](https://github.com/BerriAI/litellm/issues/49179) 的修复后，验证 `/key/update` 进行中请求的支出现在是否正确计数。如果你有受影响时段的日志，请对比 `LiteLLM_BudgetWindowSpend` 与 `LiteLLM_SpendLogs`。

3. **如果你使用带 token 缓存的流式传输（Azure、Vertex、Bedrock）：** 缓存 token 追踪 Bug（[#36168](https://github.com/BerriAI/litellm/issues/36168)、[#36083](https://github.com/BerriAI/litellm/issues/36083)）已关闭——升级到修复提交后，验证你的计费对账单显示正确的 `cached_tokens`。

4. **如果你使用 Anthropic `/v1/messages` 配合 Claude Code 或 DeepSeek：** 多个关于思考块转换（[#30765](https://github.com/BerriAI/litellm/issues/30765)）、缺失 `reasoning_content`（[#31439](https://github.com/BerriAI/litellm/issues/31439)）和丢弃系统消息（[#36917](https://github.com/BerriAI/litellm/issues/36917)）的边界问题已修复。在部署前使用长思考多轮对话进行测试。

5. **如果你使用安全护栏：** [#49295](https://github.com/BerriAI/litellm/pull/49295) 中的修复现在对不可路由的模型名跳过预调用安全护栏，防止对输入错误时发送供应商调用。同时，Zscaler AI Guard 现在仅扫描最新用户轮次（[#50139](https://github.com/BerriAI/litellm/pull/50139)）——审查任何依赖扫描完整对话的安全护栏逻辑。

6. **如果你在无头 CI 中运行 LiteLLM：** `lite logout` 现在可以在没有 OS 密钥链的情况下正常工作（[#50098](https://github.com/BerriAI/litellm/pull/50098)）。

7. **如果你使用 Vertex Claude 配合提示词缓存：** `/v1/messages` 体顺序 Bug（[#50070](https://github.com/BerriAI/litellm/issues/50070)）可能导致工具循环轮次中的缓存未命中——升级后在 Vertex 上监控你的提示词 token 成本。

---

*数据来源于 `BerriAI/litellm` GitHub 仓库 — 2026-11-05*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest from English to Simplified Chinese. I need to:

1. Translate all the text content to Simplified Chinese
2. Keep all Markdown structure intact (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates, version tags, issue/PR references as-is
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this while maintaining the technical accuracy and natural Chinese flow.

Key terms to consider:
- "Unsloth Digest" → "Unsloth 技术周报" or keep as "Unsloth Digest"
- "regression" → "回归问题" or "性能回退"
- "breaking changes" → "破坏性变更"
- "landed" → "已合并" or "已发布"
- "issue" → "Issue" (keep as-is for GitHub context)
- "pull request" → "PR" (keep as-is)
- "PRs" → "PR" (keep as-is)
- "Closed" → "已关闭"
- Various technical terms should be kept or translated naturally

Let me translate section by section:
</think>


# Unsloth Digest — 2026-11-05

## 1. 今日要闻

**v0.1.915-beta** 正式发布，带来 Qwen3.8-Flash-Next 支持、精致的 Glass 主题（现已 Beta）、Composer 位置滑块以及内置浏览器的文件交互功能。该版本还降低了空闲内存占用，并加快了 MLX 加载和 FP8 推理速度，同时修复了切换 GGUF 模型时聊天上下文丢失的问题。与此同时，一个关键的性能回归问题浮出水面——RAG 嵌入在单文件路径下运行约 99 ms/块，而批处理模式下仅需 2.07 ms，慢了约 48 倍，这可能会影响语料库索引流程。

## 2. 版本发布与破坏性变更

| 版本 | 组件 | 更新内容 | 链接 |
|---------|-----------|------------|------|
| **v0.1.915-beta** | Desktop/Studio | 支持 Qwen3.8-Flash-Next；Glass 主题（Beta）；Composer 位置滑块；内置浏览器文件交互；降低空闲内存占用；切换 GGUF 模型时保留聊天上下文；加快 MLX 加载和 FP8 推理 | [Release notes](https://github.com/unslothai/unsloth/releases) |

**PyTorch extras 现已可用：** Issue [#16520](https://github.com/unslothai/unsloth/issues/16520)（已关闭）确认 `cu130-2130` 和 `cu130-2140` extras 已发布至 PyPI。

**本周期无破坏性迁移** 报告。

---

## 3. 新模型与硬件支持

| 模型 / 系列 | 类型 | 说明 | 链接 |
|----------------|------|-------|------|
| **Qwen3.8-Flash-Next** | LLM | v0.1.915-beta 中新增支持 | [#16520](https://github.com/unslothai/unsloth/issues/16520) |
| **YuE2、Stable Audio 3 Medium、MiDashengLM-Gen** | 音频/音乐 | 模型大小现根据实际峰值测量推导；选择器中显示预估大小 | [#16726](https://github.com/unslothai/unsloth/pull/16726) |
| **Anima、Chroma1-HD、MOSS-Image** | 图像（单 `.safetensors` 文件） | Studio 现支持加载这些 ComfyUI 单文件格式 | [#16710](https://github.com/unslothai/unsloth/pull/16710) |
| **Krea 2 int4** | 图像 | 新增单文件 int4 支持；接受 ComfyUI 文本编码器和 VAE 文件 | [#16710](https://github.com/unslothai/unsloth/pull/16710) |
| **OLMoE 系列** | MoE | 已添加至能力注册表，用于 tensor-parallel 验证 | [#16709](https://github.com/unslothai/unsloth/pull/16709) |
| **Qwen-Image-2.1-GGUF** | 多模态 GGUF | 编辑/参考模式中的 bug 已修复 | [#16375](https://github.com/unslothai/unsloth/issues/16375)（已关闭） |

**能力注册表修复：** PR [#16709](https://github.com/unslothai/unsloth/pull/16709) 修正了注册表中与实际代码行为不一致的三处位置，包括在 `tp_native` 无法分片时错误拒绝 tensor parallel，以及补全了全部 zoo MoE 系列。

---

## 4. 性能与优化

### 已合并（过去 24 小时内）

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **音频模型内存估算** | 模型列表现基于实测峰值而非通用启发式算法推导大小 | YuE2、Stable Audio 3 Medium、MiDashengLM-Gen 在 10 GB 显卡上现显示正确大小 | [#16628](https://github.com/unslothai/unsloth/pull/16628)（已关闭） |
| **S3 JSON Lines 解析** | 仅按 LF 分割；Unicode 分隔符（U+0085、U+2028、U+2029）不再导致记录损坏 | 包含 Unicode 的训练集语料转录不再引发训练中止 | [#16725](https://github.com/unslothai/unsloth/pull/16725)、[#16723](https://github.com/unslothai/unsloth/pull/16723) |
| **嵌入模型下载竞态** | Studio 现等待进行中的嵌入模型下载完成，而非直接失败 | 模型传输并发时进行 RAG 索引不再导致 failed-files 列表损坏 | [#16722](https://github.com/unslothai/unsloth/pull/16722) |
| **流水线并行 MoE 辅助损失** | 路由辅助损失现按梯度累积步数加权，适用于 `UNSLOTH_PP_SIZE=2` | PP 并行 + `gradient_accumulation_steps > 1` 训练 MoE 模型时，辅助损失现与单卡目标一致 | [#16708](https://github.com/unslothai/unsloth/pull/16708) |

### 进行中（开放 PR）

| 领域 | 变更 | 目标指标 | 链接 |
|------|--------|---------------|------|
| **CUDA Graphs 解码** | 在普通 `model.generate()` 中默认启用，附带内存释放和 eager 后备机制 | T4 上 GPU 利用率从 30–75 ms/步的部分占用提升约 50%；LoRA 场景下从约 675 kernels/步增加到约 1070–1430 | [#16691](https://github.com/unslothai/unsloth/pull/16691) |
| **RAG 摄入批处理** | 跨文档批量嵌入，而非逐文档处理 | 小文件语料库从约 99 ms/块降至约 2.07 ms/块（约 48 倍加速） | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **HunyuanVideo-1.5 fp8 后备日志** | 当托管 fp8 不可获取时，报告 dense bf16 编码器 | 准确记录实际使用的编码方案 | [#16724](https://github.com/unslothai/unsloth/pull/16724) |

---

## 5. 稳定性与回归问题

**严重（存在修复 PR）**

| 问题 | 严重性 | 描述 | 修复方案 | 链接 |
|-------|----------|-------------|-----|------|
| **S3 音频 JSONL Unicode 异常中止** | 🔴 高 | 当语料转录包含 U+0085、U+2028 或 U+2029 时训练中止 | PR [#16725](https://github.com/unslothai/unsloth/pull/16725) 及 [#16723](https://github.com/unslothai/unsloth/pull/16723) | [#16721](https://github.com/unslothai/unsloth/issues/16721) |
| **嵌入模型下载期间的 RAG 索引** | 🔴 高 | 所有文件均报 `EmbeddingModelDownloadRequiredError`；failed-files 列表损坏 | PR [#16722](https://github.com/unslothai/unsloth/pull/16722) | [#16714](https://github.com/unslothai/unsloth/issues/16714) |
| **`search_conversation` 工具消失** | 🔴 高 | 归档嵌入器失败后工具消失（第三次出现） | PR [#16718](https://github.com/unslothai/unsloth/pull/16718) | [#16706](https://github.com/unslothai/unsloth/issues/16706)、[#16700](https://github.com/unslothai/unsloth/issues/16700) |
| **Multi-LoRA 分页跳过任务** | 🟡 中 | 当 Multi-LoRA 批次顺序启动时，微调列表可能跳过某个任务 | PR [#16633](https://github.com/unslothai/unsloth/pull/16633) | [#16720](https://github.com/unslothai/unsloth/issues/16720) |

**已报告（尚无修复 PR）**

| 问题 | 严重性 | 描述 | 链接 |
|-------|----------|-------------|------|
| **RAG 摄入性能回归** | 🔴 高 | 单文件路径下约 99 ms/块 vs 批处理 2.07 ms/块；典型语料库慢 48 倍 | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **长对话界面卡顿** | 🟡 中 | 回归问题：延长聊天导致 Web 和桌面端界面卡顿 | [#16603](https://github.com/unslothai/unsloth/issues/16603) |
| **AppImage 界面卡顿** | 🟡 中 | Studio AppImage 界面非常卡顿 | [#15999](https://github.com/unslothai/unsloth/issues/15999) |
| **gemma-4-thinking 模板 bug** | 🟡 中 | 聊天模板移除了推理内容 | [#16699](https://github.com/unslothai/unsloth/issues/16699) |
| **`web_search` 始终返回空结果** | 🟡 中 | DuckDuckGo `ddgs` 请求缺少 `Accept` 头；Yandex 未在允许列表中 | [#16664](https://github.com/unslothai/unsloth/issues/16664) |
| **更新至 v0.1.914-beta 卡住** | 🟡 中 | Windows 11 更新无法完成 | [#16573](https://github.com/unslothai/unsloth/issues/16573)（已关闭） |
| **首次加载主题闪烁** | 🟢 低 | 应用存储的深色主题前有 150 ms 浅色主题闪烁 | [#16614](https://github.com/unslothai/unsloth/issues/16614)（已关闭） |
| **Homebrew cask 缺失** | 🟢 低 | `brew install --cask unsloth` 失败；无 Cask 存在 | [#16672](https://github.com/unslothai/unsloth/issues/16672) |

---

## 6. 对应用开发者的意义

**部署与可靠性**
- **RAG 流水线存在风险**，直到 [#16715](https://github.com/unslothai/unsloth/issues/16715) 合并上线。如果你在索引小文件语料库（笔记、Wiki、文档），预期吞吐量将慢约 48 倍，大型语料库甚至可能 OOM。建议手动批处理或暂缓索引，待修复合并后再处理。
- **S3 音频训练现已安全**——对于包含 Unicode 换行/段落分隔符的数据集，上个周期的解析回归问题已由 [#16725](https://github.com/unslothai/unsloth/pull/16725) 解决。
- **嵌入模型下载不再破坏索引状态**——PR [#16722](https://github.com/unslothai/unsloth/pull/16722) 消除了并发传输期间的误报 `EmbeddingModelDownloadRequiredError` 级联。

**集成与用户体验**
- **新增 CLI 模型选择：** PR [#16635](https://github.com/unslothai/unsloth/pull/16635) 让 `unsloth start` 在无已加载模型时交互式选择设备模型，消除了无头代理场景下手动指定 `--model` 的需求。
- **`/skills` 和 `/context` 命令** 正在落地（[#16717](https://github.com/unslothai/unsloth/pull/16717)、[#13929](https://github.com/unslothai/unsloth/pull/13929)）——两者均在 Composer 中、模型门控之前处理，因此无需加载模型即可使用。
- **远程 Provider 现支持自定义 Header**——通过 [#14811](https://github.com/unslothai/unsloth/issues/14811)（已关闭）实现，可用于 LiteLLM 追踪 Header 和特性路由。
- **Studio 推理路径中的 `chat_template_kwargs` 过滤** 现保留任意键（如 `verification`）——如果你依赖 Sage-A1.5 等模型的扩展 kwargs，升级后请验证这些键是否保留。

**性能路线图**
- **CUDA Graph 解码**（[#16691](https://github.com/unslothai/unsloth/pull/16691)）即将合并，将显著提升使用普通 `generate()` 的 NVIDIA GPU 模型解码吞吐量。请留意自定义解码循环的回归风险。
- **Multi-LoRA 批处理分页** 修复（[#16633](https://github.com/unslothai/unsloth/pull/16633)）确保被取消的任务在分页列表中可见——请更新任何轮询微调队列的仪表盘逻辑。

**行动项**
1. **锁定 v0.1.914-beta**——如果你在 Windows 上且依赖自动更新，v0.1.915-beta 的升级路径看起来正常，但上一个版本的更新程序存在确认的卡死 bug。
2. **审查 RAG 摄入代码中的并发嵌入下载**——一旦 [#16722](https://github.com/unslothai/unsloth/pull/16722) 合并，行为将从"快速失败"变为"等待重试"。
3. **升级后测试 Unicode 密集型 S3 清单**——[#16725](https://github.com/unslothai/unsloth/pull/16725) 中的修复改变了 JSON Lines 分割语义，请务必验证。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*