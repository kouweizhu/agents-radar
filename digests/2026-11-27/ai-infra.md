# AI 基础设施日报 2026-11-27

> 生成时间: 2026-11-27 04:29 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the text while keeping the markdown structure
2. Keep all technical terms, code references, issue numbers, URLs, etc. in their original form
3. Use natural technical Chinese, not literal word-for-word translation
4. Preserve tables, lists, headings, etc.
5. Output ONLY the translation, no preamble

Let me translate section by section:

Title and header info stays similar but translated.

Let me go through this carefully, maintaining the exact markdown structure.

Key things to remember:
- Headings in Chinese
- Tables with proper alignment (using :---, :---:, ---:)
- Lists
- Bold/italic preserved
- Horizontal rules (---)
- Code spans and blocks preserved
- Emoji preserved
- Issue/PR references, version numbers, URLs stay in original

Let me translate now.
</think>


# AI 基础设施生态跨项目报告
**发布日期：** 2026-11-27 | **受众：** 基础设施工程师与技术决策者

---

## 1. 生态概览

AI 推理基础设施层正在经历同步的碎片化与整合。vLLM 和 SGLang 正在向基于 Rust 的服务流水线收敛，共同关注 PD 分离与多节点 NUMA 调度；而 llama.cpp 和 Ollama 正在深化其硬件覆盖范围，从 CUDA、HIP、Metal、Vulkan 延伸至 Intel XPU 和高通 Hexagon 等新兴目标。训练/微调层（Unsloth）正在推进 AMD int8 基训练和 FP8 融合内核，而网关层（LiteLLM）则正在以集成覆盖面为代价管理不断扩展的提供商矩阵。今天最值得关注的趋势是 **DeepSeek V4.1 的采纳速度** —— 它在 24 小时内相继登陆 vLLM 和 SGLang，这表明前沿模型支持已不再是一个礼节性功能，而是真正的竞争差异化因素。

---

## 2. 活跃度对比

| 项目 | 层级 | 代码仓库 | Issues（开放，24h 内） | PRs（24h 内） | Releases（24h 内） |
|---------|-------|------------|---------------------|-----------|----------------|
| **vLLM** | 服务引擎 | `vllm-project/vllm` | ~10 个高活跃 | ~15 | 无 |
| **SGLang** | 服务引擎 | `sgl-project/sglang` | 18 | ~20 | 无 |
| **llama.cpp** | 本地运行时 | `ggml-org/llama.cpp` | 24 | ~25 | **v1.1.0** |
| **Ollama** | 本地运行时 | `ollama/ollama` | 24 | 24 | **v0.40.19-rc0** |
| **LiteLLM** | LLM 网关 | `BerriAI/litellm` | ~10 | ~20 | **v1.113.0-dev.1**，**v1.108.19 (LTS)** |
| **Unsloth** | 微调 | `unslothai/unsloth` | 24 | ~30 | 无 |

**观察：**

- llama.cpp 和 Unsloth 的活跃度均处于高位，各自累计 PR 数达到约 275 个 —— llama.cpp 来自广泛的后端多样化，Unsloth 则来自跨多个模型家族的微调功能迭代。
- SGLang 的 CI 不稳定性（5 个 broken + 18 个 flaky 测试，Issue #42752）值得持续关注：这表明代码迭代快速但测试覆盖不足，属于项目向生产级可靠性过渡期的典型特征。
- vLLM 的 Rust 前端默认切换（Issue #68784）是六项目中影响最深远的上线前变更，会波及所有基于 Python 的集成。

---

## 3. 模型支持竞速

下表追踪了过去 24–48 小时内各项目是否为新架构提供了生产级支持。

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅ Rust 前端编码，GPU 同步修复 | ✅ PP prefill，不均匀分区 | ❌ 尚未支持 | ❌ 尚未支持 | 通过 OpenAI 兼容 | ❌ 尚未支持 |
| **DeepSeek V4.1 VL** | ✅ GPU 同步修复 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | 通过 OpenAI 兼容 | ❌ 尚未支持 |
| **Inkling 2（基础版）** | ❌ 尚未支持 | ❌ 尚未支持 | ✅ v1.1.0 | ❌ 尚未支持 | 通过 Ollama | ❌ 尚未支持 |
| **Inkling 2 Mini** | ❌ 尚未支持 | ❌ 尚未支持 | ✅ DFlash2，CUDA fuses | ✅ CUDA 后端（NVFP4/MXFP8） | 通过 Ollama | ❌ 尚未支持 |
| **Inkling 2 DSpark** | ❌ 尚未支持 | ❌ 尚未支持 | ✅ v1.1.0 | ❌ 尚未支持 | 通过 Ollama | ❌ 尚未支持 |
| **Qwen4Exp (3.8-flash-next)** | ✅ DeepGEMM FP8 QSA | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | 通过 Bedrock | ❌ 尚未支持 |
| **Muse Spark LoRA** | ✅ Packed attention 投影 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 |
| **MRV2 PCP LoRA** | ✅ Attention/lm_head/routed-expert | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 |
| **Intel XPU** | ❌ 尚未支持 | RFC 阶段 | ❌ 尚未支持 | Build 选项（CANN） | 通过 OpenAI 兼容 | ❌ 尚未支持 |
| **AMD gfx950 / MI355X** | 活跃中（Issue #59575） | ❌ 尚未支持 | ✅ HIP CDNA 修复 | ❌ 尚未支持 | 通过 Bedrock | ✅ ROCm W8A8 opt-in |
| **Qualcomm Hexagon** | ❌ 尚未支持 | ❌ 尚未支持 | ✅ INT HMX 修复 | ❌ 尚未支持 | ❌ 尚未支持 | ❌ 尚未支持 |
| **NVIDIA GB10 (SM12x)** | ❌ 尚未支持 | 活跃 bring-up | ❌ 尚未支持 | ❌ 尚未支持 | 通过 Ollama | ❌ 尚未支持 |

**领先者：llama.cpp** — 新模型支持发布速度远超其他项目。在 v1.1.0 中以 DFlash2、CUDA fuses 及 Vulkan/Metal 后端一次性发布了整个 Inkling 2 系列（基础版、Mini、DSpark）。

**紧随其后：vLLM** — 在前沿模型优化上最为激进（Qwen4Exp 的 DeepGEMM FP8，DeepSeek V4.1 的 Rust 前端），但尚未落地 Inkling 2 支持。

**Ollama** 面向终端用户的生产可用路径最为成熟（`ollama run`），但 DeepSeek V4.1 VL 支持比 vLLM 晚约一个发布周期。

---

## 4. 性能前沿

优化工作集中在整个生态的五个方向：

### 4.1 KV 缓存与内存卸载
| 项目 | 举措 | 阶段 |
|---------|-----------|-------|
| vLLM | 请求级 KV 升级（Issue #66782），TP 复制区域去重（PR #69920） | 活跃 |
| vLLM | Mooncake KV 后端抽象，支持 TENT（PR #64486） | 活跃 |
| SGLang | 统一内存：KV + 滑动窗口 + 循环状态共用单一 arena（Issue #49944） | RFC |
| SGLang | KV-indexer RwLock 读锁饥饿修复（Issue #52575） | Bug |
| llama.cpp | KV 缓存持久化功能（Issue #17107，已关闭） | 已发布 |
| Ollama | MLX 前缀缓存内存泄漏修复（Issue #19891） | Bug |

**生态信号：** 内存管理是首要优化目标。vLLM 和 SGLang 正在独立重新设计 KV 架构 —— vLLM 通过卸载连接器，SGLang 通过统一内存 arena。这两种方案最终需要互操作性标准。

### 4.2 量化
| 项目 | 举措 | 阶段 |
|---------|-----------|-------|
| vLLM | 在 NVIDIA 上用 Humming 替换 Marlin（Issue #65560） | 规划中 |
| vLLM | FP8 SiLU fuse，配合 group-128 分块量化（PR #69778） | 已合并 |
| llama.cpp | FP8/NVFP4 scale 支持移入 GGML（PR #28898，#29791） | 进行中 |
| Unsloth | ROCm 上 W8A8 int8 LoRA 训练（PR #19850） | Opt-in |
| Unsloth | MiniMax-H3-Image int8 CUTLASS 竞态修复（PR #19879） | 已合并 |
| Ollama | MLX int4 仿射量化 embed/lm_head（PR #19928） | 已合并 |

**生态信号：** 量化正在从推理时向训练时延伸（Unsloth W8A8 LoRA）。vLLM 的 Marlin→Humming 迁移是所有项目中影响最深远的上线前变更 —— 将改变每台 Hopper 和 Blackwell 部署的内核调度。

### 4.3 分布式服务与调度
| 项目 | 举措 | 阶段 |
|---------|-----------|-------|
| SGLang | SRPF（最短剩余 Prefill 优先），含饥饿老化机制（PR #58420） | RFC |
| SGLang | PD 分离：前向完成时按 stage 输出 KV chunk（PR #50958） | 活跃 |
| SGLang | FlashInfer 批次无关 BF16 GEMM，提升可复现性（PR #51618） | 活跃 |
| SGLang | 张量并行延迟：FlashInfer PcieIpcAllGather（Issue #65359） | 活跃 |
| vLLM | MultiprocExecutor NUMA 绑定竞态修复（PR #69978） | 已合并 |
| vLLM | SRPF 调度 RFC（关联 PR #58420） | RFC |
| Unsloth | offload_layers 微批次逐层执行（PR #19808） | 已合并 |

**生态信号：** vLLM 和 SGLang 正在独立实现 SRPF 调度。这是一个跨项目复用代码（例如通过共享调度库）将惠及整个生态的典型场景。

### 4.4 内核融合
| 项目 | 举措 | 阶段 |
|---------|-----------|-------|
| vLLM | SiLU-and-mul 与 FP8 group-128 量化融合（PR #69778） | 已合并 |
| llama.cpp | 融合 SSM_conv + silu + 去冗余 copy（PR #33081） | 已合并 |
| llama.cpp | CUDA fuse Inkling 2 短 conv、depth mix、loop controller（PR #33073） | 已合并 |
| Unsloth | LoRA 折叠入 denoiser 权重：渲染速度提升 18%（PR #19868） | Opt-in |
| SGLang | LLaDA QK norm + RoPE 融合（PR #53484） | 活跃 |

### 4.5 投机解码
| 项目 | 举措 | 阶段 |
|---------|-----------|-------|
| llama.cpp | Inkling-2-Mini 的 DFlash2 支持（PR #33109） | 已合并 |
| llama.cpp | DFlash 投机解码拆分为独立 draft 方法（v1.1.0） | 已发布 |
| llama.cpp | **严重：** 混合模型上投机解码速度下降 2.2–2.4×（Issue #32776） | Bug |
| SGLang | NGRAM 投机解码器支持（PR #53094） | 活跃 |
| Unsloth | LoRA 折叠加速（PR #19868） | Opt-in |

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│                    Agent / 应用层                                 │
│              （工具调用、护栏、MCP、多模态）                         │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                      LLM 网关层                                   │
│     LiteLLM ─── 100+ 提供商的统一 API，路由，缓存                  │
│  OpenWebUI、LangChain 等 ─── 面向消费者的集成                       │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                      服务引擎层                                   │
│                                                                  │
│   vLLM ────────────── 生产级，TP/PP，Rust 前端                    │
│   SGLang ──────────── Ratelimiters，Radix注意力，MCP server       │
│                                                                  │
│      （两者均涉及：PD 分离、KV 卸载、多节点调度）                   │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                      本地运行时层                                 │
│                                                                  │
│  llama.cpp ───────────── 多后端：CUDA HIP Metal Vulkan            │
│                         SYCL Hexagon Cann ──── 最广硬件覆盖       │
│                                                                  │
│  Ollama ─────────────── 终端用户部署，Docker-first，               │
│                         跨平台，API 层面更简洁                     │
└───────────────────────────┬─────────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────┐
│                     训练 / 微调层                                 │
│                                                                  │
│  Unsloth ────────────── 微调速度提升 2×，AMD int8/FP8             │
│                         Studio：Compare、Translate、CSV 导入       │
└─────────────────────────────────────────────────────────────────┘
```

**各层核心差异：**

- **服务引擎（vLLM，SGLang）：** 正在向 Rust 原生服务路径收敛，共同关注 PD 分离与多节点 NUMA 调度。SGLang 在开发者体验上领先（ratelimiters、MCP server、流式输出）；vLLM 在量化内核广度上领先。
- **本地运行时（llama.cpp，Ollama）：** llama.cpp 是可移植推理内核 —— 哪里都能跑，新模型上线最快。Ollama 是消费品：opinionated、Docker-first、更难嵌入但更容易部署。两者的关系是 Ollama 依赖 llama.cpp 提供内核质量。
- **LLM 网关（LiteLLM）：** 以集成覆盖面换取提供商复杂性管理。Prisma 弃用（Issue #9753）和 OpenAI Evals 关停（Issue #47212）表明，该层的依赖管理是真实的生产运营风险。
- **微调（Unsloth）：** 定位在训练世界与服务世界之间。其 Studio 产品正日益成为面向消费者的应用（Translate、Compare、CSV 导入），而核心库面向追求最高训练吞吐的工程师。

---

## 6. 趋势信号

### 6.1 Rust 前端默认切换即将来临（vLLM，SGLang）
vLLM（Issue #68784）和 SGLang（Rust 路由核心，PR #54788）都在转向 Rust 原生服务路径。这是两个项目中最具影响力的 breaking change。**行动：** 在默认切换之前，审查所有 Python 特定行为 —— 流式输出的边缘情况、同时包含工具和 `response_format` 时的 `tool_choice="auto"`、视频占位符等。

### 6.2 Marlin→Humming 量化迁移（vLLM）
用 Humming 内核替换 Marlin 的计划（Issue #65560）将改变每台 Hopper 和 Blackwell 部署上的量化行为。对于依赖特定 GEMM 性能特征的生产系统，这是一个高风险迁移。**行动：** 立即开始建立 INT4/INT8 GPTQ/AWQ 工作负载的性能基准。

### 6.3 DeepSeek V4.1 高速度采纳
DeepSeek V4.1 VL 支持在关键 bug 修复后 24 小时内登陆 vLLM。这是整个生态中观察到的最快前沿模型采纳周期。它表明 vLLM 团队与 deepseek 有专门的合作关系，或者拥有极快的硬件访问渠道。**行动：** 如果你部署 DeepSeek 模型，vLLM 目前是最成熟的选项。SGLang 和 Ollama 晚一个发布周期。

### 6.4 多后端碎片化加速
llama.cpp 现在支持 CUDA、HIP（CDNA + RDNA）、Metal、Vulkan、SYCL、Cann（昇腾 NPU）和 Hexagon —— 七个不同后端。Intel XPU 在 SGLang 中处于 RFC 阶段。这种扩散造成测试矩阵爆炸和后端特定 bug，在 CI 中难以捕获。**行动：** 如果跨多个硬件代际部署，在目标硬件上而非仅在 CI 中验证，并锁定推理运行时版本。

### 6.5 投机解码在 Bug 中成熟
llama.cpp 将 DFlash 拆分为独立 draft 方法（v1.1.0），SGLang 添加了 NGRAM 支持，但 llama.cpp 在混合模型上有 2.2–2.4× 的性能回退（Issue #32776）仍未解决。**行动：** 不要假设投机解码能提升混合架构的吞吐量。在你的特定模型和硬件组合上进行基准测试。

### 6.6 内存估算可靠性缺口
Ollama 的 NUMA 绑定竞态（PR #69978）、Unsloth 的 `estimate-memory` 忽略 MoE expert offload（Issue #19795），以及 llama.cpp 在 Inkling-2-Mini 上的 7.2–7.8 GB CUDA0 缓冲区泄漏（Issue #32910），都有一个共同根源：内存估算逻辑跟不上模型架构的复杂性。随着 MoE、循环状态和多模态缓存的叠加，内存估算器需要架构感知能力，而非仅做参数计数。**行动：** 部署新架构时，在生产使用前用实际 VRAM 消耗量验证估算值。

### 6.7 LiteLLM 依赖面风险
两个并发事件 —— Prisma Python 客户端弃用（Issue #9753）和 OpenAI Evals API 关停（11 月 30 日，Issue #47212）—— 突显了 LiteLLM 广泛的提供商矩阵在维护面上造成的代价，可能以生产事故的形式显现。**行动：** 在生产环境中锁定 LiteLLM 版本，将 `lts` 标签作为你的升级节奏。关注 Issue #9753 的 Prisma 迁移时间表。

### 6.8 SGLang 1.0 即将到来 —— 兼容性策略
SGLang 1.0 追踪器（Issue #50045）表明 1.x 版本将引入明确的 breaking change 和升级说明。这与 vLLM Rust 前端默认切换并列为即将到来的生态两大兼容性边界。**行动：** 在 1.0 发布前开始审查 SGLang 配置中的静默覆盖行为。

---

*跨项目分析数据来源：vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 的 GitHub 数据 —— 2026-11-27。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>用户要求将一篇关于 vLLM 项目的英文技术报告翻译成简体中文。让我仔细分析原文并提供高质量的中文翻译。

关键要求：
1. 只输出翻译，不添加任何解释或前言
2. 保留 Markdown 结构（标题、表格、列表、块引用、粗体/斜体、水平线、emoji）
3. 保持 URL、链接目标、代码片段、数字和日期不变
4. 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符
5. Issue/PR 引用保持原样
6. 使用自然的技术中文，符合中文开发者通讯的语域

让我逐段翻译：

**标题**: vLLM Project Digest — 2026-11-27
→ vLLM 项目日报 — 2026-11-27

**Section 1**: Today's Highlights
→ 今日要闻

**内容**: 
- intense activity → 高度活跃
- inference infrastructure hardening → 推理基础设施加固
- maturing rapidly → 快速成熟
- unblock multi-node deployments → 解除多节点部署的阻塞
- coalescing around → 围绕...形成共识
- signaling a new baseline → 标志着新的基准

**Section 2**: Releases & Breaking Changes
→ 发布与重大变更

表格内容：
- No new releases → 无新版本发布
- Upcoming: Rust frontend as default → 即将到来：Rust 前端成为默认选项


- vllm serve → vllm serve（保持原样）
- planned soon → 近期计划
- Python-specific APIs → Python 专用 API
- feature parity → 功能对等

**Section 3**: New Model & Hardware Support
→ 新模型与硬件支持

表格中各行需要准确翻译技术术语和状态描述，确保技术准确性。

DeepSeek V4.1 获得 Rust 前端编码支持，Inkling 2 在多节点 A100 场景下优化，Qwen3.8-Flash-Next 借助 DeepGEMM 实现显著性能提升，AMD gfx950/MI355X 针对 MXFP4 MoE 进行优化。

Intel XPU 支持 DSpark，Muse Spark LoRA 和 MRV2 PCP LoRA 集成了注意力投影和 LoRA 功能。

性能优化涵盖 FP8 内核融合、Tensor Parallel 延迟改进、LoRA 内核早期退出机制、KV 卸载内存优化以及调度策略改进。

还包括 Mooncake KV 后端和量化配置指标的支持。

稳定性与回归测试部分记录了关键问题，如 K2.6 的输出异常、NVFP4 编译冲突，以及多个高优先级的多节点饥饿和死锁问题。

此外还有 Qwen3.6 MoE 检查点格式问题，以及 NUMA 绑定竞态条件和多模态缓存错误的中等优先级修复。

应用开发者需要关注 Rust 前端的即将采用，确保 Python 特定行为的兼容性，并评估量化基准的变化。

DeepSeek V4.1 在 Rust 上的生产就绪性需要验证，多节点运营商应关注 NUMA 修复，而 KV 卸载的强化包括文件系统层完整性提案和 TP 复制 KV 区域去重。
</think>


# vLLM 项目日报 — 2026-11-27

## 1. 今日要闻

vLLM 项目今日围绕推理基础设施加固展现出极高的活跃度。DeepSeek V4.1 在 Rust 前端的支持正快速成熟（PR #70271 解决了 Python/Rust 渲染器之间的特殊 token 拼写一致性问题），同时关键的多节点 NUMA 绑定竞态问题已拆分为 PR #69978 以解除阻塞。社区还围绕用 Humming 替代传统 Marlin 量化内核形成了共识（Issue #65560），这将为 Hopper/Blackwell 架构上的 INT4/INT8 GPTQ/AWQ 和 FP8 量化设定新的性能基线。

## 2. 发布与重大变更

| 项目 | 详情 |
|------|---------|
| **无新版本** | 过去 24 小时内无版本发布。 |
| **即将到来：Rust 前端成为默认** | Issue #68784 追踪切换 `vllm serve` 默认使用 Rust 前端前的剩余阻塞项。当前标记为"近期计划"。使用 Python 专用 API 的工程师应在升级前验证功能对等性。 |

## 3. 新模型与硬件支持

| 模型 / 架构 | 状态 | 链接 |
|---------------------|--------|-------|
| **DeepSeek V4.1** | Rust 前端编码一致性已落地（PR #70271）；V4.1 VL 图像输入的 GPU 同步 bugfix 已合并（PR #70067）。 | [PR #70271](https://github.com/vllm-project/vllm/pull/70271), [PR #70067](https://github.com/vllm-project/vllm/pull/70067) |
| **Inkling 2** | 多节点 A100 配方（TP8）已合并（PR #69960）；SM8x 解码内核针对 Ampere/Ada 已合并（PR #70269）—— SM80/SM86 上的低-M 投影，SM86 上的融合路由器。 | [PR #69960](https://github.com/vllm-project/vllm/pull/69960), [PR #70269](https://github.com/vllm-project/vllm/pull/70269) |
| **Qwen3.8-Flash-Next (Qwen4Exp)** | DeepGEMM 集成用于 SM100 系列 GPU 上的 FP8 QSA prefill 评分：**1.9×** 评分加速，在批次查询行数 ≥512 时选择阶段 **1.07–1.42×** 加速。 | [PR #67740](https://github.com/vllm-project/vllm/pull/67740) |
| **AMD gfx950 / MI355X** | 性能优化追踪（Issue #59575），目标包括 MXFP4 MoE 和 QuerySparse Attention。 | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Intel XPU** | Intel GPU 上的 DSpark 批分片顺序采样已启用（PR #68598）。 | [PR #68598](https://github.com/vllm-project/vllm/pull/68598) |
| **Muse Spark LoRA** | Packed attention projections 支持已合并（PR #70094）。 | [PR #70094](https://github.com/vllm-project/vllm/pull/70094) |
| **MRV2 PCP LoRA** | 新增 PCP 专用路径上的 attention-only、lm_head 和 routed-expert LoRA（PR #69221）。 | [PR #69221](https://github.com/vllm-project/vllm/pull/69221) |

## 4. 性能与优化

| 类别 | 工作项 | 详情 | 链接 |
|----------|------|---------|-------|
| **FP8 内核融合** | SiLU-and-mul 与 group-128 FP8 输入量化融合，用于 CUTLASS block-FP8 linear | 解锁此前在 CUDA 上从未触发的 `silu_and_mul_per_block_quant` 路径。 | [PR #69778](https://github.com/vllm-project/vllm/pull/69778) |
| **Tensor-parallel 延迟** | FlashInfer `PcieIpcAllGatherWorkspace` 集成到 `CudaCommunicator.all_gather` | 针对 DeepSeek-V4.1-Flash 的多次小型 TP all-gather（Engram、compressor、drafter）优化。 | [Issue #65359](https://github.com/vllm-project/vllm/issues/65359) |
| **LoRA 内核** | 基于每个 adapter rank 的 Triton Punica shrink/expand 早期退出 | 减少稀疏 adapter 配置下的不必要计算。 | [PR #69809](https://github.com/vllm-project/vllm/pull/69809) |
| **KV offload 内存** | `SimpleCPUOffloadConnector` 对 TP 复制的 KV 区域只存储一份 | 可选 `share_replicated_regions` 标志（例如 MiniMax-M3 索引缓存场景）。 | [PR #69920](https://github.com/vllm-project/vllm/pull/69920) |
| **调度** | 最短剩余 Prefill 优先（SRPF）+ 饥饿老化 | 针对 v1 engine 的 RFC 实现；缓解长 prompt（7k+ tokens）造成的 HoL 阻塞。 | [PR #58420](https://github.com/vllm-project/vllm/pull/58420) |
| **Mooncake KV 后端** | KV 传输的后端接口抽象，TENT 支持 | 将 MooncakeConnector 与传输引擎 API 解耦。 | [PR #64486](https://github.com/vllm-project/vllm/pull/64486) |
| **量化配置指标** | 对树外量化配置提供 `get_weight_byte_size()` | 使自定义格式能准确估算 MFU/MBU。 | [PR #65143](https://github.com/vllm-project/vllm/pull/65143) |

## 5. 稳定性与回归

| 严重度 | Issue | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| **🔴 严重** | #42426 | Kimi-K2.6 reasoning 字段间歇性输出 `!!!!!!!!!!`（content 为 null）。已在 v0.20.0 修复后关闭。 | N/A（已解决） |
| **🔴 严重** | #48234 | NVFP4 + DFlash + torch.compile 在 Blackwell SM120 上 `torch::jit::invokeOperatorFromPython`（transpose）SIGSEGV。已关闭，标记为 stale。 | N/A（已关闭） |
| **🟠 高** | #54919 | Qwen3.8-Flash-Next 长 prefill 周期性地使 2 节点 DGX Spark TP2 上的活跃 decode 饥饿 3–7 分钟。 | 暂无 |
| **🟠 高** | #48568 | GLM-5.2 MTP 在 AMD MI300X 上死锁（RCCL 无 peer 传输）。 | 暂无 |
| **🟠 高** | #68336 | Qwen3.6 MoE CT INT4 checkpoint 将 `shared_expert_gate` 存为 packed INT4，但 vLLM 期望 float `weight`。 | 暂无 |
| **🟡 中** | #69978 | NUMA 绑定竞态：`MultiprocExecutor` 在 NUMA 系统上 `configure_subprocess` 完成前启动 worker。 | [PR #69978](https://github.com/vllm-project/vllm/pull/69978) |
| **🟡 中** | #70067 | `DeepseekV4VLEncoderCudaGraphMixin._build_image_span` 中的 `GPU<->CPU sync detected`。 | [PR #70067](https://github.com/vllm-project/vllm/pull/70067) |
| **🟡 中** | #69392 | 预渲染特征项的缓存状态漂移导致 MultiModalCacheMissError。 | [PR #69392](https://github.com/vllm-project/vllm/pull/69392) |
| **🟡 中** | #70270 | 多模态 fallback 重新编码意外改变了特殊 token。 | [PR #70270](https://github.com/vllm-project/vllm/pull/70270) |

## 6. 对应用开发者的影响

**Rust 前端采用即将来临。** 团队应审查 Python 特定行为（流式输出、`tool_choice="auto"` 同时存在 tools 和 `response_format`、视频占位符）与 Rust 前端的一致性。Issue #66858 追踪了 Python/Rust 在该组合上的持续分歧。建议在切换默认配置前在 staging 环境使用 `--frontend=rust` 进行测试。

**量化基线即将改变。** 计划中用 Humming 替换 Marlin（Issue #65560）将改变 Hopper 和 Blackwell 上的内核调度。如果你运行 INT4/INT8 GPTQ/AWQ 或 FP8 量化模型，预期会有不同的性能表现，并应在升级后验证精度回归。

**DeepSeek V4.1 在 Rust 上已可用于生产。** 特殊 token 处理现已在 Python 和 Rust 渲染器间保持一致。如果你使用 DeepSeek-V4.1 VL 的图像输入，应用 PR #70067 以避免 GPU 同步错误。

**多节点运营商：关注 NUMA 修复。** PR #69978 解决了一个在 NUMA 系统上可能导致静默正确性问题的微妙竞态条件。在扩展到多节点前应用此修复。

**KV offload 正在加固。** 文件系统层现已提出完整性提案（Issue #54363），且 TP 复制 KV 区域去重（PR #69920）降低了特定架构的 host 内存压力。在运行带 offloading 的多 TP 工作负载时评估这些标志。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate an English technical report (SGLang Daily Digest) into Simplified Chinese. I need to:

1. Translate all the text while preserving the Markdown structure exactly
2. Keep URLs, numbers, dates, issue/PR references, code blocks, etc. verbatim
3. Keep technical terms and project names in English
4. Use natural technical Chinese suitable for a Chinese developer newsletter
5. Output ONLY the translation, no preamble or explanation
6. No markdown fences around the output

Let me carefully translate this digest while maintaining the structure and technical accuracy.

Key sections:
1. Today's Highlights
2. Releases & Breaking Changes
3. New Model & Hardware Support
4. Performance & Optimization
5. Stability & Regressions (with subsections for Critical and Moderate)
6. What This Means for Application Developers

I'll translate each section carefully, maintaining the technical register and natural Chinese flow.
</think>


# SGLang 每日简报 — 2026-11-27

## 1. 今日要点

SGLang 项目当前在三条战线上并行推进：**1.0 稳定版发布**路线图逐渐清晰，将明确兼容性策略和升级说明；同时 **Unified Memory** 架构（统一 GPU 内存池，供 KV Cache、滑窗和循环状态共用）持续成熟。在运维层面，CI 可靠性仍是一个痛点——项目正在追踪 5 个持续失败和 18 个不稳定测试，并配备了专门的 `/sglang-pr-babysit` Claude Code 监控工作流。

## 2. 发布与破坏性变更

过去 24 小时内无新版本发布。不过，SGLang 1.0 发布追踪帖（#50045）已明确释放信号：1.x 系列将引入相对 0.5.x 的**破坏性变更**，届时将提供明确的升级说明。目前存在静默覆盖的配置项将改为显式报错，并指出冲突的配置项名称。

- **SGLang 1.0 发布追踪**: [#50045](https://github.com/sgl-project/sglang/issues/50045)

## 3. 新模型与硬件支持

**Intel XPU 后端（RFC 阶段）**
一份新 RFC 提出通过 *Lookahead Expert Scheduling (LES)* 和基于 SSD 的内存层级来启用 Intel XPU 支持，使集成 GPU 能够运行单卡 MoE 卸载场景。该提案基于现有的 paged-experts 基础设施，利用 host 端 pinned memory 来管理 expert 常驻。

- **RFC: Intel XPU + LES + iGPU SSD 分层**: [#46520](https://github.com/sgl-project/sglang/issues/46520)

**Inkling-2 / SM12x (GB10) 早期验证**
SymbAI DGX Spark 实验室提交了一份 bug 报告，记录了 Inkling-2-Small（384 个 routed experts，EP > 1）在 SM12x 硬件上遇到的共享内存分配失败，表明 NVIDIA GB10 的硬件适配正在积极推进中。

- **Inkling-2 在 SM12x 上的 shm 问题**: [#53439](https://github.com/sgl-project/sglang/issues/53439)

## 4. 性能与优化

**DeepSeek-V4.1 PP Prefill 支持（已合并）**
PR #53409 为 DeepSeek-V4.1 添加了完整的流水线并行 PD prefill 支持，包括不均匀层划分、mHC 状态传递、稀疏选择以及跨 PP 阶段的候选块交接。

- **DeepSeek-V4.1 PP 支持**: [#53409](https://github.com/sgl-project/sglang/pull/53409)

**Disagg Prefill KV 分块发送（进行中）**
PR #50958 将 PD disaggregation 改为在每个 PP 阶段的前向计算完成时立即发送该阶段的最后一个 KV chunk，而非等待结果沿 PP 环形拓扑传播。从而消除了 `pp_size - 1` 个 micro-batch 的延迟。

- **Disagg: 前向完成时即发送各阶段 KV chunk**: [#50958](https://github.com/sgl-project/sglang/pull/50958)

**FlashInfer 批次无关 BF16 GEMM（进行中）**
PR #51618 将确定性 BF16 GEMM 通过 FlashInfer 0.7.4 的 `mm_bf16` 接口并设置 `batch_invariant=True` 来执行，确保无论批次组成如何均产生相同的比特输出——这是可复现推理的先决条件。

- **批次无关确定性 GEMM**: [#51618](https://github.com/sgl-project/sglang/pull/51618)

**LLaDA QK Norm + RoPE 融合（进行中）**
PR #53484 将 QK 归一化和 RoPE 直接融合到 `LLaDAImageAttention` 中 packed projection 之后，从而在每次前向传播中消除了三次独立的 tensor `.unflatten()` 和 `.contiguous()` 调用。

- **LLaDA 中融合 QK norm+RoPE**: [#53484](https://github.com/sgl-project/sglang/pull/53484)

**Elastic EP 缩减（已合并）**
PR #33111 新增了在服务运行期间通过 Mooncake 的 `deactivate_ranks` 退役 live Expert Parallelism rank 的能力，补全了弹性能力三角（扩缩容与故障恢复）中的最后一块拼图。

- **Elastic EP 运行时缩减**: [#33111](https://github.com/sgl-project/sglang/pull/33111)

## 5. 稳定性与回归问题

### 严重

**不稳定测试 / CI 基础设施（活跃）**
Issue #42752 追踪 NVIDIA `PR Test Base` 和 `PR Test Extra` 运行中的持续失败，并配有专门的 Claude Code 监控工作流。截至报告时，CI 统计面板显示 `main` 分支上有 5 个持续失败和 18 个不稳定测试。此外，PR #53471 报告 `check-changes` 脚本对新的 2-GPU GB300 测试进行了错误的分片，导致原本正常的 PR 产生虚假的失败。

- **CI 不稳定测试追踪**: [#42752](https://github.com/sgl-project/sglang/issues/42752)
- **check-changes 分片计算错误**: [#53471](https://github.com/sgl-project/sglang/issues/53471)
- **CI 失败追踪**: [#17050](https://github.com/sgl-project/sglang/issues/17050)

**流式 Token 丢失 Bug（已修复/沉寂）**
Bug #41236 记录了当 `LimitedCapacityDict` 在 > 65,536 个并发状态时逐出某个 detokenizer 状态时，流式输出中最多可能静默丢失 5 个 token。Issue 状态为沉寂；在部署高并发生产负载前请确认此修复已上线。

- **逐出时的流式 token 丢失**: [#41236](https://github.com/sgl-project/sglang/issues/41236)

### 中等

**工具调用检测器中的正则回溯灾难**
Issue #52090 报告 `/parse_function_call` 在 async handler 中同步执行基于正则的工具调用检测。在 `re.DOTALL` 模式下，嵌套量词配合 `.*` 通配符的模式在大约 167 字节的特殊构造输入下会导致灾难性回溯，有效阻塞事件循环并卡死所有其他请求。

- **工具调用检测器中的灾难性正则**: [#52090](https://github.com/sgl-project/sglang/issues/52090)

**共享 /dev/shm 上 TP 启动挂起**
Issue #53309 记录了当多个 Tensor Parallel rank 各自运行在独立的 Kubernetes Pod 中但共享宿主 `/dev/shm` 时，两个 rank 均会在 `Init parallel begin` 处挂起。影响 K8s 1.26.5 上的 SGLang v0.5.23。

- **共享 /dev/shm 上的 TP 挂起**: [#53309](https://github.com/sgl-project/sglang/issues/53309)

**KV-Indexer RwLock 读锁饥饿**
Bug #52575 报告 `sgl-kv-indexer` 中的前缀查询持有单个 `RwLock` 读锁来扫描整个 radix 树，导致 KV apply 操作在查询期间持续饥饿。

- **KV-indexer 读锁饥饿**: [#52575](https://github.com/sgl-project/sglang/issues/52575)

**Gumbel Watermark int32 溢出**
Bug #53154 报告 Gumbel watermark 初始化在处理多模态 padding token ID 时发生 int32 溢出，可能破坏多模态推理中的 watermark 状态。

- **Gumbel watermark 溢出**: [#53154](https://github.com/sgl-project/sglang/issues/53154)

## 6. 对应用开发者的实际影响

**高并发生产环境的部署者**：流式 token 丢失 bug（#41236）会影响超过 65,536 个并发 detokenizer 状态的任何部署。请监控 `SGLANG_DETOKENIZER_MAX_STATES`，并在修复上线后考虑升级——静默的 token 丢失在生产环境中极难察觉。

**使用 Tool Calling 的用户**：如果你的应用调用了 `/parse_function_call`，请注意恶意构造或意外复杂的输入可能阻塞整个服务器的事件循环。在补丁发布前，请对 tool call 输入进行限流或清洗，并监控 tool call 端点的异常延迟。

**Kubernetes TP 部署场景**：/dev/shm 共享问题意味着在同一个节点上以独立 Pod 运行 SGLang TP rank 时需要谨慎的 volume 隔离。确保每个 Pod 拥有独立的 `emptyDir` volume 挂载到 `/dev/shm` 或显式设置 `shmSize`。

**DeepSeek-V4.1 用户**：新的 PP prefill 支持（#53409）解锁了 DeepSeek-V4.1 的多阶段 prefill 流水线拓扑。如果你当前仅使用 TP 运行 DeepSeek-V4.1，这为 prefill 密集型负载开辟了额外的部署模式。

**Physical AI / Diffusion 实践者**：新的路线图 issue（#53203）表明项目有意将 SGLang Diffusion、`miles_diffusion` 和 `miles` 统一为视觉-语言-动作策略及世界模型的服务栈。早期使用者应密切关注此处以获取统一的 API 接口。

**1.0 升级规划**：当前使用 0.5.x 的团队应开始阅读 1.0 追踪帖（#50045）中的升级说明。从静默配置覆盖到显式报错的转变意味着现有的错误配置将在启动时暴露为失败，而非静默降级。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the entire technical digest from English to Simplified Chinese. I need to:

1. Translate all the headings, body text, and table content
2. Keep all Markdown formatting intact
3. Keep all code spans, URLs, version numbers, issue/PR numbers, file paths as-is
4. Use natural technical Chinese suitable for a Chinese developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Heading**: llama.cpp Digest — 2026-11-27
→ llama.cpp 摘要 — 2026-11-27

**Highlights section**: "Today's Highlights"
→ 今日要点

**Releases & Breaking Changes**: "Releases & Breaking Changes"
→ 版本发布与破坏性变更

**New Model & Hardware Support**: "New Model & Hardware Support"
→ 新模型与硬件支持

**Performance & Optimization**: "Performance & Optimization"
→ 性能与优化

**Stability & Regressions**: "Stability & Regressions"
→ 稳定性与回归问题

**What This Means for Application Developers**: "What This Means for Application Developers"
→ 对应用开发者的影响

Let me go through each section carefully:

---

# llama.cpp 摘要 — 2026-11-27

## 今日要点

llama.cpp v1.1.0 正式发布，带来了 Inkling 2 系列（base、Mini、DSpark）、Domyn Edge 4B、Zaya1 8B、RAON-1-mini 以及 Hy4 的 Flash Attention 支持，同时废弃了旧的 `llama_batch` API 并迁移至 `llama_batch_ext`。此外，DFlash 投机解码也拆分为独立的 draft 方法。过去 24 小时内，CUDA+HIP Flash Attention 已支持 indexed bias，SSM_conv+silu 融合内核也已上线，Vulkan FP8 矩阵乘支持的工作仍在推进中。


---

## 版本发布与破坏性变更

v1.1.0 引入了多个模型支持，包括 Inkling 2 系列、Domyn Edge 4B、Zaya1 8B、RAON-1-mini 和 Hy4。同时，DFlash 投机解码被拆分为独立的草稿方法，TTS 也得到增强。`llama_batch_ext` API 已正式迁移，旧版 `llama_batch` API 被废弃。

## 新模型与硬件支持

Inkling 2 系列新增了多个变体，其中 DFlash2 已支持 Mini 版本，CUDA 也为短卷积、深度混合、循环控制器、L2 裁剪等模块添加了融合优化。Domyn Edge 4B、Zaya1 8B、RAON-1-mini 和 Hy4 也获得支持。硬件方面，HIP/CDNA 架构在多个代际上进行了 bf16 MFMA 优化，CUDA 和 HIP 的 Flash Attention 也新增了 indexed bias 支持。

OpenCL 优化了 Adreno A850 的 MoE int8 bin 内核，Vulkan 修复了 Windows 驱动对 RDNA1 架构的识别问题，Haiku 平台的构建支持也已完善。量化格式方面，GGML 正逐步引入 FP8/NVFP4 的量化尺度支持，Vulkan FP8 和缩放矩阵乘的工作仍在推进中。

## 性能与优化

SSM_conv + silu 融合方案已在 CPU 上实现，通过消除注意力输出投影前的冗余内存操作来提升性能。CUDA 融合模块也在持续优化中。

Inkling 2 的短卷积、深度混合、循环控制器、L2 裁剪和situ链已集成到 CUDA 实现中。Unicode分词优化通过消除冗余的UTF-8转换减少了开销。CUDA常量V加载长度的修复进一步优化了512头注意力，避免了堆栈帧分配并解决了相关问题。Metal的f32累加修复确保了mul_mat中GGML_PREC_F32的正确处理。

对于RWKV6/7等多令牌场景，通过消除图状态复制步骤来加速令牌输出。HIP在RDNA3上的F32 GEMM分割K实现为未调优的gfx1101/1102/1103/115x解锁了Inkling-2-Mini的前缀预测能力。Hexagon的INT HMX修复纠正了FA P量化和矩阵乘激活量化，从而修复了Llama-3.2-1B上的IQ9问题。Vulkan的紧凑偏差FA为Inkling 2 Mini提供支持。跨CPU/CUDA/Vulkan的一致NaN处理_ARGSORT也在进行中。

发现了几个关键问题需要立即关注：Speculative decoding在CUDA上对Qwen3.5 hybrid造成2.2-2.4倍性能下降；Inkling-2-Mini的CUDA0缓冲区请求大小固定在7.2-7.8 GB无法调整；使用`--moe-cache-mib`参数会导致Inkling-2-Mini崩溃；多GPU环境下每次跨设备张量复制都调用`cudaGetDeviceProperties`导致8倍减速；Qwen 3.8 27B的`convert_hf_to_gguf.py`报告的张量数量不匹配（770 vs 866）；RAON-1-mini的预期张量数量存在差异。

SYCL解码在Xe3（Panther Lake）上出现挂起，需要设置`GGML_SYCL_USE_ASYNC_MEM_OP=0`来解决。Intel Arc B系列在长上下文和RAG场景下存在Vulkan输出损坏，MoE缓存对循环inkling2模型的共享专家权重进行3次存储，`--cache-ram -1`参数未生效，统一的二进制文件`--bash-completion`功能存在错误。

已解决的关键问题包括：SM_60质量损失（FP32计算被静默转换为FP16）、AMD RADV上MTP的DeviceLost问题、CUDA编译时UI资产验证失败。

对开发者而言，v1.1.0版本标志着`llama_batch` API的废弃，需要规划向`llama_batch_ext`的迁移以支持生产级推理工作负载。Inkling 2系列现支持DFlash2，可提升投机解码性能，但使用`--moe-cache-mib`时存在活跃问题需注意。

Unicode分词优化消除了冗余UTF-8转换，在非ASCII文本处理场景中可带来显著延迟改进。混合架构如Qwen3.5配合CUDA投机解码时性能下降2.2-2.4倍，需监控接受率并考虑回退标准解码。Intel Xe3 Panther Lake系统上设置`GGML_SYCL_USE_ASYNC_MEM_OP=0`可避免解码挂起。多GPU张量覆盖需谨慎处理，跨设备张量复制存在未缓存驱动调用导致的8倍性能回归。

Vulkan FP8矩阵乘支持即将推出，AMD GPU用户需等待后端实现就绪。

摘要数据源自2026-11-27的GitHub提交记录。
</think>


# llama.cpp 摘要 — 2026-11-27

## 今日要点

llama.cpp v1.1.0 正式发布，带来了 Inkling 2 系列（base、Mini、DSpark）、Domyn Edge 4B、Zaya1 8B、RAON-1-mini 以及 Hy4 的 Flash Attention 支持，同时废弃了旧的 `llama_batch` API 并迁移至 `llama_batch_ext`。此外，DFlash 投机解码也拆分为独立的 draft 方法。过去 24 小时内，CUDA+HIP Flash Attention 已支持 indexed bias，SSM_conv+silu 融合内核也已上线，Vulkan FP8 矩阵乘支持的工作仍在推进中。

---

## 版本发布与破坏性变更

| 变更 | 描述 | 链接 |
|--------|-------------|------|
| **v1.1.0 发布** | Inkling 2 系列、Domyn Edge 4B、Zaya1 8B、RAON-1-mini、Hy4 Flash 支持；DFlash 投机解码拆分为独立的 draft 方法；TTS 增强 | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0) |
| **`llama_batch_ext` API 迁移** | 旧版 `llama_batch` API 已废弃；项目应迁移至 `llama_batch_ext` | [PR #33086](https://github.com/ggml-org/llama.cpp/pull/33086) |

---

## 新模型与硬件支持

### 新模型
| 模型 | 变体 | 说明 |
|-------|---------|-------|
| Inkling 2 | Base、Mini、DSpark | 新增 DFlash2 支持（Mini 版本）；CUDA 融合短卷积、depth mix、loop controller、L2 clip、situ 链 | [PR #33060](https://github.com/ggml-org/llama.cpp/pull/33060)、[PR #33073](https://github.com/ggml-org/llama.cpp/pull/33073) |
| Domyn Edge | 4B | v1.1.0 新增 |
| Zaya1 | 8B | v1.1.0 新增 |
| RAON-1-mini | — | v1.1.0 新增 |
| Hy4 | Flash | v1.1.0 新增 |

### 硬件与后端更新
| 后端 | 更新内容 | PR |
|---------|--------|-----|
| **HIP/CDNA** | 修复 CDNA 的 bf16 MFMA 操作数向量类型（gfx908、gfx90a、gfx942、gfx950）；LLVM 23 兼容性 | [PR #33086](https://github.com/ggml-org/llama.cpp/pull/33086) |
| **CUDA/HIP** | Flash Attention indexed bias 移植到重构后的加载器；bias 格式为 F32 | [PR #33063](https://github.com/ggml-org/llama.cpp/pull/33063) |
| **OpenCL** | Adreno A850 的 MoE int8 bin 内核 | [PR #33069](https://github.com/ggml-org/llama.cpp/pull/33069) |
| **Vulkan** | 修复 Windows 驱动对 RDNA1 架构的误识别 | [PR #33123](https://github.com/ggml-org/llama.cpp/pull/33123) |
| **Haiku** | 构建支持（预处理器/CMake 修复） | [PR #33168](https://github.com/ggml-org/llama.cpp/pull/33168) |

### 量化与格式
- **FP8/NVFP4**：量化 scale 正在迁移至 GGML，统一到后端 epilogue MUL；Vulkan FP8 和 scaled matmul 支持进行中 | [PR #28898](https://github.com/ggml-org/llama.cpp/pull/28898)、[PR #29791](https://github.com/ggml-org/llama.cpp/pull/29791)

---

## 性能与优化

### 已合并（24 小时内）
| 优化 | 后端 | 效果 |
|--------------|---------|--------|
| 融合 SSM_conv + silu + 消除冗余复制 | CPU | 在 attention 输出投影前消除不必要的内存读写 | [PR #33081](https://github.com/ggml-org/llama.cpp/pull/33081) |
| CUDA 融合：Inkling 2 短卷积、depth mix、loop controller、L2 clip、situ 链 | CUDA | 降低 Inkling 2 系列的 kernel launch 开销 |
| Unicode 分词优化 | 全部 | 消除两次冗余 UTF-8 转换和逐字节字符串拷贝 | [PR #33164](https://github.com/ggml-org/llama.cpp/pull/33164) |
| CUDA 常量 V 加载长度 | CUDA | 512 头 f16 attention 减少堆栈帧；修复 #32871 | [PR #33161](https://github.com/ggml-org/llama.cpp/pull/33161) |
| Metal f32 累加修复 | Metal | `GGML_PREC_F32` 现在在 mul_mat 中正确生效；请求 f32 累加时避免使用 MMA/MM kernel | [PR #33093](https://github.com/ggml-org/llama.cpp/pull/33093) |

### 进行中
| 优化 | 后端 | 详情 |
|--------------|---------|---------|
| 图状态复制消除 | RWKV6/7、多 token | 移除状态复制步骤；加速 token 输出 | [PR #30139](https://github.com/ggml-org/llama.cpp/pull/30139) |
| HIP split-K F32 GEMM | HIP（RDNA3） | 解锁未调优 gfx1101/1102/1103/115x 上 Inkling-2-Mini 的 prefill | [PR #33167](https://github.com/ggml-org/llama.cpp/pull/33167) |
| Hexagon INT HMX 修复 | Hexagon | 修正 FA P 量化和 matmul 激活量化；修复 Llama-3.2-1B 上的 IQ9 问题 | [PR #33166](https://github.com/ggml-org/llama.cpp/pull/33166) |
| Vulkan FA compact bias | Vulkan | Inkling 2 Mini 支持 | [PR #32898](https://github.com/ggml-org/llama.cpp/pull/32898) |
| Argsort NaN 处理一致性 | CPU/CUDA/Vulkan | 跨后端行为统一 | [PR #32408](https://github.com/ggml-org/llama.cpp/pull/32408) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 临时方案 / 修复方式 |
|----------|-------|--------|-------------------|
| **🔴 严重** | 投机解码在 Qwen3.5 hybrid + CUDA 上慢 2.2–2.4 倍 | OPEN | [Issue #32776](https://github.com/ggml-org/llama.cpp/issues/32776) |
| **🔴 严重** | Inkling-2-Mini：无论 `-ngl 0` 如何设置，CUDA0 均请求 7.2–7.8 GB 缓冲 | OPEN | [Issue #32910](https://github.com/ggml-org/llama.cpp/issues/32910) |
| **🔴 严重** | Inkling-2-Mini 使用 `--moe-cache-mib` 崩溃 | OPEN | [Issue #33101](https://github.com/ggml-org/llama.cpp/issues/33101) |
| **🟠 高** | 多 GPU：`cudaGetDeviceProperties` 每个 tensor 调用一次（交叉设备拷贝慢 8 倍） | OPEN | [Issue #33132](https://github.com/ggml-org/llama.cpp/issues/33132) |
| **🟠 高** | `convert_hf_to_gguf.py` 对 Qwen 3.8 27B 报告错误 tensor 数量（770 vs 866） | OPEN | [Issue #32918](https://github.com/ggml-org/llama.cpp/issues/32918) |
| **🟠 高** | RAON-1-mini：tensor 数量错误（预期 736，实际 731） | OPEN | [Issue #33099](https://github.com/ggml-org/llama.cpp/issues/33099) |
| **🟠 高** | SYCL decode 在 Xe3（Panther Lake）上挂起 | OPEN | 设置 `GGML_SYCL_USE_ASYNC_MEM_OP=0` | [Issue #31547](https://github.com/ggml-org/llama.cpp/issues/31547) |
| **🟡 中** | Intel Arc B 系列长上下文 / RAG 场景 Vulkan 输出损坏持续存在 | OPEN | [Issue #31828](https://github.com/ggml-org/llama.cpp/issues/31828) |
| **🟡 中** | MoE 缓存在循环 inkling2 模型上存储共享 expert 权重 3 次 | OPEN | [Issue #32744](https://github.com/ggml-org/llama.cpp/issues/32744) |
| **🟡 中** | `--cache-ram -1` 未生效；token 上限仍为 `n_ctx` | OPEN | [Issue #29324](https://github.com/ggml-org/llama.cpp/issues/29324) |
| **🟢 低** | 统一二进制 `--bash-completion` 行为不正确 | OPEN | [Issue #33083](https://github.com/ggml-org/llama.cpp/issues/33083) |

### 已修复 / 已关闭
| 问题 | 结论 |
|-------|------------|
| SM_60 质量损失（FP32 运算被静默以 FP16 执行） | 已关闭，修复已合并到各 fork | [Issue #25593](https://github.com/ggml-org/llama.cpp/issues/25593) |
| AMD RADV 上 MTP prompt 阶段 DeviceLost | 已关闭 | [Issue #27306](https://github.com/ggml-org/llama.cpp/issues/27306) |
| 编译错误：CUDA 下 UI asset 验证失败 | 已关闭 | [Issue #32780](https://github.com/ggml-org/llama.cpp/issues/32780) |

---

## 对应用开发者的影响

1. **v1.1.0 迁移**：如果你正在使用 `llama_batch`，请开始规划向 `llama_batch_ext` 的迁移。旧版 API 已废弃，后续版本将移除。新的 API 为生产级推理工作负载提供了更好的批处理能力。

2. **Inkling 2 系列**：Inkling-2-Mini 现已支持 DFlash2，使用这些模型可期待通过投机解码获得更快的推理速度。但注意，使用 `--moe-cache-mib` 存在导致崩溃的活跃 bug——在修复上线前请避免使用该参数。

3. **Unicode 分词优化**：分词路径的优化消除了冗余的 UTF-8 转换。如果你正在处理非 ASCII 文本（多语言、含特殊字符的代码），预计在所有后端上都能获得可观的延迟改善。

4. **混合架构上的投机解码**：在 CUDA 上对 Qwen3.5 等混合架构使用投机解码时，性能可能比预期慢 2.2–2.4 倍。请监控 acceptance rate，并考虑暂时回退到标准解码直到问题解决。

5. **Intel Xe3 上的 SYCL**：在 Panther Lake 系统上运行时，设置 `GGML_SYCL_USE_ASYNC_MEM_OP=0` 以避免 decode 挂起。

6. **多 GPU + tensor override**：在多 GPU 环境下运行时，避免使用 `-ot`/`--override-tensor` 参数——未缓存的驱动调用会导致 8 倍性能回退。

7. **Vulkan 上的 FP8**：Vulkan FP8 matmul 支持正在推进中。如果你需要在 AMD GPU 上通过 Vulkan 运行 FP8 推理，该功能即将上线，届时需要针对后端进行相应实现。

---

*摘要数据来源于 ggml-org/llama.cpp（2026-11-27）*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report about Ollama into Simplified Chinese. I need to:

1. Translate all the English text to natural Simplified Chinese
2. Keep all Markdown structure exactly the same (headings, tables, lists, etc.)
3. Preserve all URLs, link targets, code spans, numbers, dates verbatim
4. Keep issue/PR references like #12345 as-is
5. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
6. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me go through this carefully section by section.

**Title and intro:**
"Today's Highlights" → "今日要点"
"Ollama v0.40.19-rc0 landed with targeted backend fixes for Inkling-2 and the MLX runner, while a critical SSE error propagation PR (#19936) is open to address mid-stream failures silently returning HTTP 200 across Metal/GPU decode OOMs and JSON-schema grammar exceptions. High-severity issues cluster around CUDA dual-GPU device selection (#19921), DGX Spark system stability regressions (#19927), and an unpatched CVE report (#19771) requiring immediate attention." → This needs to be translated naturally.

**Releases & Breaking Changes:**
Table with version info needs translation. Breaking changes section.

**New Model & Hardware Support:**
Two tables with model and backend info. Some items like "Inkling-2 Mini" need to stay as-is.

**Performance & Optimization:**
Table with performance improvements.

**Stability & Regressions:**
Multiple subsections with tables. Critical issues, notable bugs, resolved issues.

**What This Means for Application Developers:**
Six numbered points with guidance.

Let me translate this properly with natural Chinese technical language:

- "Highlights" → 要点/亮点
- "digest" → 技术周报/简报
- "released" → 发布
- "targeted backend fixes" → 有针对性的后端修复


- "critical" → 关键/严重
- "SSE error propagation" → SSE 错误传播
- "mid-stream failures" → 流式传输中途失败
- "silently returning HTTP 200" → 静默返回 HTTP 200
- "Metal/GPU decode OOMs" → Metal/GPU 解码 OOM
- "JSON-schema grammar exceptions" → JSON Schema 语法异常
- "High-severity issues" → 高危问题
- "cluster around" → 集中在
- "device selection" → 设备选择
- "system stability regressions" → 系统稳定性回退
- "unpatched CVE" → 未修复的 CVE 漏洞
- "requiring immediate attention" → 需要立即处理

For tables, I need to translate the headers and descriptions but keep URLs, version numbers, issue numbers, and identifiers as-is.

Now I need to identify the technical terminology:
- "llama.cpp" stays as-is
- "Inkling-2" stays as-is
- "MLX runner" stays as-is
- "Engram" stays as-is
- "GGML_ASSERT" stays as-is
- "DGX Spark" stays as-is
- "WePocketModel/WePM" stays as-is
- "PPLX Decider" stays as-is
- "v4 chunked decision protocol" → v4 分块决策协议
- "qwen3-coder" stays as-is
- "NVFP4 activation" → NVFP4 激活
- "SM120/121 kernels" stays as-is
- "MXFP8" stays as-is
- "BF16 tensor cores" → BF16 张量核
- "qmm_sm80" stays as-is
- "int4 affine quantized" → int4 仿射量化
- "per-group BF16 scale/bias" → 每组 BF16 缩放/偏移
- "CANN" stays as-is
- "Ascend NPUs" → 昇腾 NPU
- "VRAM accounting" → VRAM 统计
- "GPU splitting" → GPU 分片
- "draft/MoE memory attribution" → draft/MoE 内存归属
- "opt-in" → 可选
- "per-request token metrics" → 单请求 token 指标
- "JSONL" stays as-is
- "capacity planning" → 容量规划
- "HTTP 500" stays as-is
- "tokenizer" → 分词器
- "Cloud beam tool_calls regression" → Cloud beam tool_calls 回退
- "FunctionGemma" stays as-is
- "escaped end_function_call" → 转义 end_function_call
- "nameless calls" → 无名调用
- "CUDA dual-GPU" stays as-is
- "RTX 5090/RTX 4090" stays as-is
- "CPU-only inference" → CPU 推理
- "MLX prefix-cache" → MLX 前缀缓存
- "paged-out snapshots" → 分页快照
- "per-layer 8-bit overrides" → 每层 8 位覆盖
- "quantized_matmul" stays as-is
- "document blocks" → 文档块

Now for the Chinese translation:

**Ollama 技术周报 — 2026-11-27**

**今日要点**

Ollama v0.40.19-rc0 发布了，包含 Inkling-2 和 MLX runner 的有针对性后端修复，同时一项关键 SSE 错误传播 PR (#19936) 已开放，旨在解决流式传输中途 Metal/GPU 解码 OOM 和 JSON Schema 语法异常静默返回 HTTP 200 的问题。高危问题集中在 CUDA 双 GPU 设备选择 (#19921)、DGX Spark 系统稳定性回退 (#19927) 和需要立即处理的未修复 CVE 报告 (#19771)。

**版本与破坏性变更**

v0.40.19-rc0 版本包含 Inkling-2 短历史优化、草稿建议和对话快照 (#19881)；MLX runner 压缩 Engram 历史缓冲区 (#19913)。llama.cpp 从 b12651 升级到 b12701 解决了 DGX Spark 上长时间 Inkling-2-mini 对话的 GGML_ASSERT(s2 <= uint32_t::max()) 问题。安装脚本不验证 GPU 架构，导致 10 系列或更旧显卡系统驱动下载失败 (#19933)。

**新增模型与硬件支持**

新支持模型包括腾讯 WePocketModel (WePM) 多模态 (2B/4B) 和 PPLX Decider v1.3 MLX runner 支持（v4 分块决策协议），qwen3-coder 工具调用解析器现在接受缺少 <tool_call> 开头的调用。后端更新包括 Inkling-2 Mini CUDA 新后端支持 NVFP4 激活（4-over-6）和 SM120/121 内核。

MLX (mlx-community) 实现 int4 仿射量化的 embed_tokens 和 lm_head 支持（U32 打包，每组 BF16 缩放/偏移）。CANN (Ascend NPUs) 提供 ggml-cann 构建选项和设备发现功能。

**性能与优化**

Inkling-2 通过优化短历史、草稿建议和对话快照降低多轮推理延迟。MLX Engram 缓冲区压缩减少 Apple Silicon 内存占用。VRAM 统计和 GPU 分片修复改善混合专家模型的内存报告准确性。

新增可选单请求 token 指标日志功能（OLLAMA_LOG_METRICS=1），记录至 ~/.ollama/logs/metrics.jsonl，便于调试和容量规划。

**稳定性与回退**

流式 SSE 错误处理修复进行中。Metal/GPU OOM 和 JSON-schema 语法失败现已正确传播错误状态，不再静默返回空 200 响应。

修复了包含 [img- 子串的图片对话分词问题。修复了 /v1/messages 中 document 块被静默丢弃的问题。

DGX Spark 系统不稳定性仍未解决，0.34.4 到 0.40.18 版本升级导致冻结，多个模型受影响。高危 CVE 漏洞待修复。Windows RTX 5090 工具调用在 tokenize 端点失败。

CUDA 双 GPU 配置中，CUDA_VISIBLE_DEVICES 仅设为 RTX 5090 会强制 RTX 4090 使用 CPU 推理。MLX 前缀缓存存在内存泄漏，长提示词导致累积增长。

每层 8 位量化覆盖在导入时被忽略，造成量化矩阵乘法形状不匹配。云端 beam 模型工具调用回归，工具数组有效但返回空 tool_calls。FunctionGemma 解析器在处理转义函数调用时行为异常。

Inkling-2-mini 的 OOM 问题已在 DGX Spark 上通过更新 llama.cpp 至 b12701 解决。下载按钮的 UX 问题已修复。

部署 DGX Spark 和双 GPU CUDA 主机需谨慎，v0.40.x 系列存在已知回归，建议暂时保持在 0.34.4 或等待稳定性修复。

流式错误目前会静默返回 HTTP 200 状态码，需主动验证 SSE 响应中的 error 字段和 content 字段是否为空。Metal/GPU OOM 和 JSON-schema 失败场景需要特别关注。

包含 `[img-` 字面量的文本会破坏分词，应在发送给视觉模型前进行清理或转义。文档块支持尚未完善，`/v1/messages` 端点会静默丢弃 document 块，应改用 text 块。

新增的推理遥测功能可通过 `OLLAMA_LOG_METRICS=1` 启用，记录每请求的 token 计数和延迟数据到 JSONL 文件，便于容量规划和 SLA 监控。

Inkling-2 Mini 现已在 NVIDIA GPU 上支持 NVFP4 和 MXFP8 快速路径，适用于生产环境。

需要注意的是 Inkling-2 Mini 的 CUDA 后端为新功能，应持续关注潜在问题。
</think>


# Ollama 技术周报 — 2026-11-27

## 今日要点

Ollama v0.40.19-rc0 发布，包含 Inkling-2 和 MLX runner 的有针对性后端修复，同时一项关键 SSE 错误传播 PR (#19936) 已开放，旨在解决流式传输中途 Metal/GPU 解码 OOM 和 JSON Schema 语法异常静默返回 HTTP 200 的问题。高危问题集中在 CUDA 双 GPU 设备选择 (#19921)、DGX Spark 系统稳定性回退 (#19927) 和需要立即处理的未修复 CVE 报告 (#19771)。

---

## 版本与破坏性变更

| 版本 | 变更摘要 | PR/链接 |
|---------|----------------|---------|
| **v0.40.19-rc0** | Inkling-2：短历史优化、草稿提案和对话快照 (#19881)；MLX runner：压缩 Engram 历史缓冲区 (#19913) | [PR #19881](https://github.com/ollama/ollama/pull/19881), [PR #19913](https://github.com/ollama/ollama/pull/19913) |
| **llama.cpp b12651 → b12701** | 解决 DGX Spark 上长时 Inkling-2-mini 对话期间的 `GGML_ASSERT(s2 <= uint32_t::max())` | [PR #19916](https://github.com/ollama/ollama/pull/19916) |

**破坏性变更：** 本次发布无 API 变更。但安装脚本在下载 NVIDIA 驱动前未验证 GPU 架构，会导致 10 系列或更旧显卡系统上的驱动下载失败（[#19933](https://github.com/ollama/ollama/issues/19933)）。

---

## 新增模型与硬件支持

### 新增模型支持
| 模型 | 详情 | 状态 |
|-------|---------|-----------|
| **Tencent WePocketModel (WePM)** | 多模态 (2B/4B)；支持文本、图片、embeddings、结构化决策 | 功能请求：[Issue #19920](https://github.com/ollama/ollama/issues/19920) |
| **PPLX Decider v1.3** | MLX runner 支持，v4 分块决策协议 | PR 进行中：[Issue #19734](https://github.com/ollama/ollama/pull/19734) |
| **qwen3-coder 工具调用** | 解析器现已接受缺少 `<tool_call>` 开头的调用 | [PR #19764](https://github.com/ollama/ollama/pull/19764) |

### 后端与量化更新
| 后端 | 变更 | 参考 |
|---------|--------|-----------|
| **CUDA (Inkling-2 Mini)** | 新 CUDA 后端：NVFP4 激活（4-over-6）+ SM120/121 内核，MXFP8 expert gather 通过 BF16 张量核（qmm_sm80） | [PR #19909](https://github.com/ollama/ollama/pull/19909) |
| **MLX (mlx-community)** | int4 仿射量化的 `embed_tokens` 和 `lm_head` 支持（U32 打包，每组 BF16 scale/bias） | [PR #19928](https://github.com/ollama/ollama/pull/19928) |
| **CANN (Ascend NPUs)** | `ggml-cann` 构建选项 + 设备发现 | [PR #19732](https://github.com/ollama/ollama/pull/19732) |

---

## 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **Inkling-2 短历史** | 优化草稿提案和对话快照 | 降低多轮推理延迟 | [PR #19881](https://github.com/ollama/ollama/pull/19881) |
| **MLX Engram 缓冲区** | 历史缓冲区压缩 | Apple Silicon 内存占用降低 | [PR #19913](https://github.com/ollama/ollama/pull/19913) |
| **VRAM 统计 / GPU 分片** | 移植上游 draft/MoE 内存归属修复 | 混合专家模型 VRAM 报告准确 | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| **单请求 token 指标** | 新增可选指标日志（`OLLAMA_LOG_METRICS=1`）输出至 JSONL | 调试和容量规划 | [PR #19869](https://github.com/ollama/ollama/pull/19869) |

---

## 稳定性与回退

### 严重（修复 PR 待合并）
| 问题 | 严重性 | 描述 | 修复 |
|-------|----------|-------------|-----|
| 流式 SSE 错误 → HTTP 200 | **P0** | Metal/GPU OOM 和 JSON-schema 语法失败返回空 200 而非错误 | [PR #19936](https://github.com/ollama/ollama/pull/19936)（开放中） |
| `/api/chat` + 图片 + `[img-` 字面量 | **P0** | 分词器拒绝包含 `arr[img-1]` 模式的 prompt；绕过真实标记 | [PR #19912](https://github.com/ollama/ollama/pull/19912)（开放中） |
| `/v1/messages` 文档块静默丢弃 | **P1** | `text/plain document` 内容从未到达模型 prompt | [PR #19926](https://github.com/ollama/ollama/pull/19926)（开放中） |

### 严重（尚无修复）
| 问题 | 严重性 | 描述 | 链接 |
|-------|----------|-------------|------|
| DGX Spark 系统不稳定 | **P0** | 从 0.34.4 升级到 0.40.18 后系统冻结；影响多个模型，非仅 Inkling | [Issue #19927](https://github.com/ollama/ollama/issues/19927) |
| 高危 CVE 漏洞 | **P0** | ollama 二进制文件中存在未指明漏洞 | [Issue #19771](https://github.com/ollama/ollama/issues/19771) |
| Windows RTX 5090 工具调用断开 | **P1** | `/tokenize` 期间返回 HTTP 500，影响 Muse Glimmer 30B 和 Qwen 系列 | [Issue #19439](https://github.com/ollama/ollama/issues/19439) |

### 值得关注的问题
| 问题 | 描述 | 链接 |
|-------|-------------|------|
| CUDA 双 GPU 回退 | `CUDA_VISIBLE_DEVICES` 仅设为 RTX 5090 时，RTX 4090+5090 主机上强制 CPU 推理 | [Issue #19921](https://github.com/ollama/ollama/issues/19921) |
| MLX 前缀缓存内存泄漏 | 每种不同 prompt 约增长 0.6 GiB；分页快照从未被驱逐（qwen3.8-flash-next） | [Issue #19891](https://github.com/ollama/ollama/issues/19891) |
| MLX 量化导入 | 每层 8 位覆盖在导入时被忽略；quantized_matmul 形状不匹配 | [Issue #18789](https://github.com/ollama/ollama/issues/18789) |
| Cloud `beam` tool_calls 回退 | 自 11 月 19-20 日起，beam 模型即使 tools 数组有效也返回空 tool_calls | [Issue #19804](https://github.com/ollama/ollama/issues/19804) |
| FunctionGemma 解析器转义问题 | `<escape>` 引用的字符串内的 `<end_function_call>` 被错误分割，产生无名称调用 | [Issue #19935](https://github.com/ollama/ollama/issues/19935) |

### 已解决（已关闭 Issues）
| 问题 | 摘要 | 解决方案 |
|-------|---------|------------|
| Inkling-2-mini DGX Spark OOM | 机器无响应，需硬重启 | 升级 llama.cpp 至 b12701（[PR #19916](https://github.com/ollama/ollama/pull/19916)） |
| 长时 Inkling-2-mini 对话 GGML_ASSERT | `s2 <= uint32_t::max()` 崩溃 | 同上 |
| 下载箭头 UX | 点击箭头但不开始下载 | [PR #19932](https://github.com/ollama/ollama/pull/19932) |

---

## 对应用开发者的建议

1. **在 DGX Spark 和双 GPU CUDA 主机上部署需谨慎** — v0.40.x 系列引入了影响这些环境的回退。若您在 DGX Spark 上，建议暂定在 0.34.4 或等待稳定性修复后再升级（[#19927](https://github.com/ollama/ollama/issues/19927)）。

2. **在 Metal/GPU OOM 或语法密集型请求中检查响应** — 在 PR #19936 合并前，流式中途错误（Metal 解码 OOM、JSON-schema 失败）会静默返回 HTTP 200 且响应体为空。请添加显式响应验证：在 SSE payload 中检查 `"error"` 并在使用响应前验证 `content` 非空。

3. **避免在 vision 模型 prompt 中出现 `[img-` 字面量** — 任何匹配 `arr[img-1]` 模式的文本都会破坏分词。如您的应用向 vision 模型发送代码片段，请先清理用户输入或转义括号。

4. **文档块支持尚未可用** — `/v1/messages` 会静默丢弃 `document` 块。在 [PR #19926](https://github.com/ollama/ollama/pull/19926) 合并前，请使用 `text` 块作为变通方案。

5. **新增推理遥测功能** — 启用 `OLLAMA_LOG_METRICS=1` 可记录每请求 token 计数、延迟和吞吐量到 `~/.ollama/logs/metrics.jsonl`。这对于容量规划和 SLA 监控非常有用，无需外部 APM。

6. **Inkling-2 Mini 现已支持 CUDA** — NVIDIA 独立 GPU 上的 NVFP4 和 MXFP8 快速路径使 Inkling-2 Mini 可用于生产。请留意新后端中的 CUDA 特定 bug（[PR #19909](https://github.com/ollama/ollama/pull/19909)）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate the content into natural, fluent Simplified Chinese
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Keep technical terms, version numbers, file paths, issue numbers, URLs as-is
4. Use technical Chinese register appropriate for a Chinese developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me carefully translate this piece by piece, maintaining the structure and making it read naturally in Chinese.
</think>


# LiteLLM Digest — 2026-11-27

## 1. 今日要点

LiteLLM 团队今日发布了开发版（v1.113.0-dev.1）并同步推出新的 LTS 补丁版本（v1.108.19），两个版本的 Docker 镜像均已支持 cosign 签名验证。Issue 方面，一个高关注度的 Prisma 弃用通知（#9753）预示着团队计划迁移出 Prisma Python 客户端——这对于使用数据库后端状态自托管 proxy 的用户值得关注。同时，OpenAI Evals API 将于 **2026 年 11 月 30 日** 关闭（#47212），届时 `litellm/llms/openai/evals/transformation.py` 若不处理将导致调用失败。

## 2. Releases 与重大变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| **v1.113.0-dev.1** | 开发版 | 最新开发构建；通过 `ghcr.io/berriai/litellm:v1.113.0-dev.1` 获取 |
| **v1.108.19** | LTS | 最新 LTS 补丁；`ghcr.io/berriai/litellm:lts` 现已指向此版本 |

**Docker 镜像签名验证**（两个版本均适用）：
```bash
cosign verify \
  --certificate-identity https://github.com/BerriAI/project-releaser/.github/workflows/release.yml@refs/heads/main \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com \
  ghcr.io/berriai/litellm:v1.113.0-dev.1
```

**即将到来的 Breaking Change**：OpenAI 将于 **2026 年 11 月 30 日** 关闭 Evals API（#47212）。`litellm/llms/openai/evals/transformation.py` 文件中的 `/v1/evals` 调用（第 66、70、105 行）将受影响。现有 evals 在 10 月 31 日后转为只读。目前尚无关联的修复 PR——使用 LiteLLM evals 集成的团队应提前规划迁移方案。

## 3. 新模型与硬件支持

| 供应商/模型 | 状态 | 详情 |
|----------------|--------|---------|
| **Inference.net** | **新增供应商** | PR #54787 新增供应商集成，包含成本映射行。Function calling 标记从 Inference.net 文档获取。价格数据来源于 2026-11-26 的 `/v1/models` 端点。 |

今日无新增原生模型支持或硬件后端（CUDA/ROCm/Metal）。Prisma 弃用通知（#9753）预示着数据库供应商后续将发生变化，可能影响自托管部署。

## 4. 性能与优化

**Rust Router Core 工作（进行中）**：
- **#54788** — 将核心 crate 的日志系统从 host 调用迁移至 `tracing`。影响 `router-core` 和 `callbacks-model-capacity`（中等风险，与 `python-bridge` 关联）。目前尚无延迟数据。
- **#54791** — 将 Bedrock 基础模型计算移至 `router-core` 执行，不再询问 host。减少 Bedrock 部署的跨进程往返开销。

**Responses 流修复（已合并）**：
- **#54789** / **#54790**（LTS）— 停止已取消的后台响应并释放只读流，不再依赖 Python 循环回收器。#54752 之后有三个集成测试在 main 分支变红；此补丁修复了内存泄漏问题。

**不稳定测试确定性改造（进行中）**：
- **#54785** — 目标将 21 个单元测试改造为确定性测试。25 个待处理的不稳定测试中仍有 5 个未解决，其中 2 个可能是真实的产品 bug。自定义代码忙轮询上限从 2 秒提升至 15 秒，以适应 CI 环境波动。

## 5. 稳定性与回归问题

按严重程度和评论活跃度排序：

| 严重程度 | Issue | 影响范围 | 是否有修复 PR |
|----------|-------|---------|---------|
| **高** | **#53716** — 通过 OpenWebUI 使用 Azure AI 时触发 `ContextWindowExceededError`，尽管使用默认参数 | 影响使用 LiteLLM Proxy + OpenWebUI 路由至 Azure AI 模型的生产环境 | 暂无关联 PR |
| **中** | **#54763** — 在只读的 `validate_environment`/`supports_response_schema` 中触发 OAuth 设备登录，涉及 `chatgpt/` 和 `github_copilot/` | 非交互式脚本产生意外副作用 | 暂无关联 PR |
| **中** | **#47579** — Presidio guardrail 在 HTTP 请求期间持有锁，将所有 analyzer/anonymizer 调用序列化 | 并发使用 guardrail 时吞吐量骤降 | 暂无关联 PR |
| **中** | **#35383** — MCP 有状态会话限额按 API key 而非用户分桶；共享 key 导致所有用户共用一个 100 会话限制 | 多租户部署意外触发会话限额 | 暂无关联 PR |
| **中** | **#54715** — 冷启动嵌入缓存构建期间，`/mcp/proxy search_tools` 因网关硬编码 30 秒超时返回 504 | 大型 MCP 工具目录（~412 个工具，11 个服务器）搜索失败 | 暂无关联 PR |
| **低** | **#54561** — Bedrock Converse 重写工具 schema；跨 Bedrock 与 Vertex 迁移对话时签名 thinking 失败 | 跨供应商 Claude 路由因未签名工具 schema 中断 | 暂无关联 PR |
| **低** | **#54707** — Swagger 文档页面加载时浏览器卡顿 9–10 秒，展开操作卡顿 6.6–7.4 秒 | 开发者体验下降 | 暂无关联 PR |

**近期关闭（批量清理过期 Issue）** — 今日批量关闭了多个 `stale` 标签的 Issue（#29998、#37222、#37469、#37846–37873、#38494、#42223、#35410）。值得关注的已关闭 bug：

- **#29998** — Anthropic cache TTL 拆解在 Chat Completions usage 中保留（功能已上线）
- **#37222** — OAuth2 `client_credentials` MCP 服务器运行时未收到凭证（bug 已修复）
- **#37873** — `stream_chunk_builder` 在通过 Bedrock guardrails 处理 `nvidia_nim` 流式响应时崩溃（bug 已修复）

## 6. 对应用开发者的影响

**立即行动项**：
1. **排查 evals 使用情况** — 若使用 LiteLLM 的 evals 集成，OpenAI API 于 11 月 30 日关闭将导致功能不可用。请关注 #47212 获取最新进展。
2. **审视 Prisma 依赖** — 弃用通知（#9753）预示数据库供应商即将变更。请关注后续迁移指南。
3. **升级 LTS 镜像** — 若您自托管，请拉取 `ghcr.io/berriai/litellm:lts` 以获取 v1.108.19（包含流式内存泄漏修复）。

**已知生产环境风险**：
- **通过 OpenWebUI 使用 Azure AI**（#53716）：若经 LiteLLM 路由至 Azure AI 模型时遇到 `ContextWindowExceededError`，这已是确认的 bug，暂无修复方案。可尝试调整 `max_tokens` 或 `context_window` 参数作为临时规避。
- **MCP 多租户部署**（#35383）：若用户间共享 API key 使用 MCP 工具，将过早触发 100 会话限制。建议按用户隔离 key。

**基础设施注意事项**：
- Rust router core 重构（#54788、#54791）正在进行中。上线后 Bedrock 路由延迟应有所改善，日志行为也可能发生变化——请更新依赖日志格式的自定义遥测方案。
- OAuth 设备登录回归（#54763）意味着调用消费者模型的 `validate_environment()` 现已产生交互副作用。请审查在非交互环境（CI、后台任务）中调用此方法的脚本。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the technical tone and structure.

Key terms to handle:
- "digest" - 技术简报
- "releases" - 发布版本
- "breaking changes" - 破坏性变更
- "PR" - PR (pull request, keep as is)
- "issues" - issues (issue, keep as-is or use 问题)
- "offload_layers" - 保持原样
- "micro-batches" - 微批次
- "layer-by-layer" - 逐层
- "W8A8 int8 LoRA training" - W8A8 int8 LoRA 训练
- "ROCm" - 保持原样
- "FP8" - 保持原样
- "FBGEMM" - 保持原样
- "cuBLASLt" - 保持原样
- "CUTLASS" - 保持原样
- "CUBLAS" - 保持原样
- "llama.cpp" - 保持原样


- "ModelScope" - 保持原样 (this is a Chinese platform name)
- "Triton" - 保持原样
- "FlashInfer" - 保持原样
- "ptxas-blackwell" - 保持原样
- "cuBLASLt" - 保持原样
- "cuBLAS" - 保持原样

I'll focus on translating the technical content with precision, ensuring the Chinese version maintains the original's technical nuance and structure. The goal is to create a natural, technically accurate translation that feels like an original Chinese developer newsletter.

I'll carefully map out the Chinese technical terminology, maintaining the original document's intent while making it linguistically authentic for Chinese developers.

I'll translate the core text section by section, preserving the technical precision and linguistic flow.
</think>


# Unsloth 技术简报 — 2026-11-27

## 1. 今日要闻

Unsloth 本次提交了围绕内存管理与训练效率的重大后端优化，包括 `offload_layers` 的逐层微批次执行，以及 ROCm 平台可选的 W8A8 int8 LoRA 训练。Studio 则修复了 CSV 导入处理、Compare 模式下的模型恢复以及 Translate 的语言检测问题，同时一项新的 ModelScope 映射 PR 扩大了自动中文镜像解析的覆盖范围。

## 2. 发布版本与破坏性变更

过去 24 小时内无新版本发布。以下变更正在等待合并，预计将在下一个 beta 版本中落地：

| PR | 变更 | 影响 |
|---|---|---|
| [#19850](https://github.com/unslothai/unsloth/pull/19850) | ROCm 平台可选启用 W8A8 int8 LoRA 训练（`UNSLOTH_DIFFUSION_ROCM_W8A8_TRAIN=1`） | 解锁了之前 ROCm 版本的限制；在 gfx1151 上支持 int8 基座训练 |
| [#19811](https://github.com/unslothai/unsloth/pull/19811) | CSV 导入器现在将 `developer` 行映射为 system 消息；无表头 CSV 不再静默丢弃开头的 developer 行 | 现有工作流中聊天导入行为将发生变化 |
| [#19847](https://github.com/unslothai/unsloth/pull/19847) | Compare 面板重新打开时恢复原始模型，而非重置右侧面板 | 影响 Compare 会话的连续性 |

## 3. 新模型与硬件支持

| PR | 新增内容 | 说明 |
|---|---|---|
| [#19883](https://github.com/unslothai/unsloth/pull/19883) | ModelScope 映射从 18 个手动条目扩展为动态 org 映射（`zai-org/GLM-5.3 → ZhipuAI/GLM-5.3`、`nvidia/* → nv-community/*` 等） | 减少手动配置镜像的工作量 |
| [#19773](https://github.com/unslothai/unsloth/pull/19773) | Translate 功能现使用腾讯文档化 prompt 仅指定目标语言，修复了源语言误检测时法译法的输出问题 | 修复 #19759 |
| [#19770](https://github.com/unslothai/unsloth/pull/19770) | MLX Apple Silicon：修复 tier 510 启动竞态及 LFM3 chat 因空 `vision_config` 导致的崩溃 | 修复 #19749 |
| [#19750](https://github.com/unslothai/unsloth/pull/19750) | 功能请求：支持 PrismML PQ2_0/PTQ1_0 GGUF 类型 142/143 的 llama.cpp | 尚未合并 |

**硬件相关内存修复：**

| PR | 平台 | 修复内容 |
|---|---|---|
| [#19551](https://github.com/unslothai/unsloth/pull/19551) | Linux AMD Strix Halo（gfx1151、HIP） | 不再将 GPU 内存上限限制为 `MemAvailable`；正确计算 APU 上 BIOS 预留空间 |
| [#19881](https://github.com/unslothai/unsloth/pull/19881) | Windows 集成 NVIDIA RTX Spark（ARM64） | 将 diffusion 内存规划器信用绑定到 Windows 系统提交电荷（约 58 GiB vs 此前报告的 109.5 GiB） |
| [#19768](https://github.com/unslothai/unsloth/issues/19768) | Windows Strix Halo | BIOS UMA 预留缩减 Windows 可见 RAM 时，GPU 可用内存被低估 |

## 4. 性能与优化

| PR | 领域 | 变更 | 量化影响 |
|---|---|---|---|
| [#19808](https://github.com/unslothai/unsloth/pull/19808) | `offload_layers` + 梯度累积 | 微批次现逐层运行，而非每步将交换层复制 `2N` 次 | 减少 `gradient_accumulation_steps > 1` 时主机与设备间的带宽占用；取决于 unsloth-zoo 层主序窗口 |
| [#19868](https://github.com/unslothai/unsloth/pull/19868) | Studio 图像扩散 | 每次加载可选将 diffusion LoRA 折叠入去噪器权重 | DGX Spark 中位渲染：**3.145s → 2.559s**（约 18% 加速）；默认关闭以保证精度 |
| [#19880](https://github.com/unslothai/unsloth/pull/19880) | MiniMax-H3-Image | `UNSLOTH_H3_IMAGE_BATCHED=1` 下启用真实批处理前向传播；此前默认的顺序锁步模式已被替代 | 默认关闭；部分 shape 下有收益，部分 shape 下反而更慢 |
| [#19879](https://github.com/unslothai/unsloth/pull/19879) | MiniMax-H3-Image int8 | 配对检查 CUTLASS 竞态，使用 `paired_cost_us` 重新计时 | RTX 6000 Ada 2048×2048 约 5% 的减速已修复 |
| [#19865](https://github.com/unslothai/unsloth/pull/19865) | FP8 训练 | FBGEMM 块 FP8 探测改为惰性在本地 rank 对应显卡执行，而非在 import 时在 GPU 0 上执行 | 修复 torchrun 多 GPU 场景下的正确性问题 |
| [#19861](https://github.com/unslothai/unsloth/pull/19861) | Torch 配置 | `fix_dynamo_config_thread_visibility` 将 Inductor 配置镜像到进程级默认值，供 autograd worker 使用 | 修复 torch 2.12+ 的 ContextVar 隔离问题 |
| [#19871](https://github.com/unslothai/unsloth/pull/19871) | RTX 5090（sm_120）FP8 | 将 torch 2.10 中 cuBLASLt 拒绝行主序的情况视为内核缺失 | 启用 tensorwise 回退路径 |
| [#19882](https://github.com/unslothai/unsloth/pull/19882) | Studio + FlashInfer 0.7.3 | 当 CUDA 13 toolkit 在 PATH 中时，保留 Triton 自带的 `ptxas-blackwell` | 防止 Blackwell 路径性能退化 |

## 5. 稳定性与回归问题

| Issue | 严重程度 | 概述 | 状态 |
|---|---|---|---|
| [#19759](https://github.com/unslothai/unsloth/issues/19759) | **高** | Translate 在 detect 模式未开启时返回源语言而非目标语言 | 修复 PR [#19773](https://github.com/unslothai/unsloth/pull/19773) 已提交 |
| [#19810](https://github.com/unslothai/unsloth/issues/19810) | **中** | CSV 聊天导入将 `developer` 行映射为 user，并丢弃无表头 CSV 开头的 developer 行 | 修复 PR [#19811](https://github.com/unslothai/unsloth/pull/19811) 已提交 |
| [#19749](https://github.com/unslothai/unsloth/issues/19749) | **中** | MLX Apple Silicon：tier 510 上的 `_ModuleLock` 死锁 + LFM3 上的 `LanguageModelOutput` TypeError | 修复 PR [#19770](https://github.com/unslothai/unsloth/pull/19770) 已提交 |
| [#19834](https://github.com/unslothai/unsloth/issues/19834) | **中** | 合并 adapter 后的输出质量反而比运行时动态加载 adapter 更差（疑似 MLX FP32 向下转换问题） | 待解决，尚无修复 PR |
| [#19515](https://github.com/unslothai/unsloth/issues/19515) | **中** | Studio 中 Nemotron-3.5-transcribe-30B 无法使用张量并行（2×RTX 5060 Ti 16GB） | 待解决 |
| [#19795](https://github.com/unslothai/unsloth/issues/19795) | **低-中** | `estimate-memory` 忽略 `-ot` / `n_cpu_moe` MoE expert offload 参数，产生虚假的"超出 GPU 内存"警告 | 待解决 |
| [#19660](https://github.com/unslothai/unsloth/issues/19660) | **低** | Linux Python 3.13 上 Studio venv 中 `import torch; import pyarrow` 导致 SIGSEGV (139) 退出 | 已关闭 |
| [#19876](https://github.com/unslothai/unsloth/issues/19876) | **低** | 远程 MCP GitHub 服务器：大尺寸 `create_or_update_file` 请求偶发报头不匹配 | 待解决 |
| [#19853](https://github.com/unslothai/unsloth/issues/19853) | **低** | 有效命令因沙箱限制失败（桌面应用） | 待解决 |

**已关闭（今日解决）：**
- [#19660](https://github.com/unslothai/unsloth/issues/19660) — torch/pyarrow SIGSEGV
- [#19550](https://github.com/unslothai/unsloth/issues/19550) — LaTeX 聊天渲染中 KaTeX `<` 问题

## 6. 对应用开发者的影响

**面向 Studio 桌面端/网页端用户：** CSV 导入修复（#19811）将改变行为——如果您有脚本导出 developer 角色的行，请审查导入管道。Compare 模型恢复修复（#19847）提升了多模型评估工作流的会话可靠性。

**面向微调工作负载：** `offload_layers` 微批次优化（#19808）在使用梯度累积与层卸载时透明生效。新增的 ROCm W8A8 可选功能（#19850）首次在 AMD GPU 上支持 int8 基座训练。

**面向 Apple Silicon MLX 用户：** tier 510 启动竞态修复（#19770）解决了加载时的偶发崩溃；修复合并后请及时更新。

**面向多 GPU torchrun 用户：** FBGEMM 惰性探测修复（#19865）和 torch 配置线程镜像（#19861）解决了分布式 FP8 和 torch ≥2.12 autotune 场景下的静默正确性问题。

**面向中国区部署：** ModelScope 映射扩展（#19883）不再需要手动重映射越来越多的 org（ZhipuAI、nv-community 等）。

**面向图像生成用户：** LoRA 折叠加速（#19868）可作为每次会话的可选开启项，在优先考虑吞吐量而非保留融合权重以便后续交换时使用。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*