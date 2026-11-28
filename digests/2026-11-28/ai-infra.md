# AI 基础设施日报 2026-11-28

> 生成时间: 2026-11-28 04:09 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Use natural technical Chinese register
3. Keep all project names, URLs, version numbers, issue references as-is
4. Preserve tables, lists, headings, etc.

Let me go through this carefully and translate it.
</think>


# AI 基础设施生态 — 每日对比报告
**日期：** 2026-11-28 | **范围：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全景

2026 年 11 月 28 日的 AI 推理基础设施版图中，各项目呈现出一条清晰的分化主线：**生产级推理引擎**围绕 Blackwell/SM120 性能展开激烈竞争（vLLM 和 SGLang 都在针对 RTX 5090 和 Inkling 2 落地定向内核优化），而**开发者可及性层**项目则在扩展模型覆盖范围和集成面（Ollama 收紧 API 正确性，LiteLLM 深耕多供应商路由，Unsloth 补全训练环节）。与此同时，llama.cpp 持续扮演底层运行时基座的角色，以惊人的速度在 CUDA、Vulkan、HIP 和 Metal 等多后端上吸收硬件级 bug 修复。**量化格式多样化**是贯穿所有项目的共同向量——NVFP4、MXFP8、FP8、NF4、GGUF 变体正在各层同步井喷，所有六个项目都在竞相应对由此带来的集成复杂性。

---

## 2. 活跃度对比

| 项目 | Issues（活跃） | PRs / Commits（24h） | Releases（24h） | 1.0 / 稳定性标记 |
|---------|----------------|---------------------|----------------|----------------------|
| **vLLM** | ~30 条显示（高） | ~20 PRs（高） | 无 | Q4 2026 路线图进行中；Rust 前端即将默认启用 |
| **SGLang** | 32 条（中等） | 40 条（非常高） | 无 | SGLang 1.0 定位为稳定性版本 [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **llama.cpp** | 8 条 issues 显示（低） | 12 次提交（中等） | 无 | 无正式稳定性版本策略；滚动 master |
| **Ollama** | 32 条（中等） | 40 条（非常高） | 无 | 0.40.18 stable；DGX Spark 回归问题进行中 |
| **LiteLLM** | 48 条（中-高） | 472 总计 / ~20 条显示（最高） | **v1.108.20 LTS** | LTS 轨道现已正式确立 |
| **Unsloth** | ~12 条显示（低） | ~20 PRs（中等） | 无 | 无正式版本号；Desktop 为 beta 通道 |

**核心观察：** LiteLLM 的 PR 体量反映了其网关/路由定位——每新增一个供应商特性几乎都会对应产生一个 PR。SGLang 和 Ollama 均显示 40 条 PR，与 LiteLLM 单项目 PR 量持平，说明推理服务层和开发者工具层正以同等的并发强度推进开发。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 / Inkling 2 Mini** | ✅ SM120 MXFP8、融合内核 | ✅ Inkling-2-Small on GB10 | ✅ Inkling 2 Mini GGUFs | ✅ Inkling-2-mini（DGX Spark OOM 已记录） | 通过 API 路由 | ✅ Inkling 2 GGUFs、LoRA 训练 |
| **DeepSeek-V4.1-Flash** | ✅ SM120（但 CUDA graphs 损坏） | ✅ FlashInfer MegaMoE SM120 | 通过上游 llama.cpp | — | 通过 API 路由 | — |
| **Qwen3.5 / Qwen3.6** | ✅ NVFP4、LoRA MoE rank 控制 | — | ✅ Qwen3.5 融合 GGUF 张量 | — | 通过 API 路由 | 通过上游 llama.cpp |
| **Hunyuan-V4 / Wan 2.2 / MiniMax-H3** | — | — | 通过上游 llama.cpp | — | 通过 API 路由 | ✅ 实时去噪预览 |
| **Qwen-Image-2.1** | — | — | 通过上游 llama.cpp | — | — | ✅ 每行 batch 布局（提速 2.12×） |
| **Claude on AWS Bedrock Mantle** | 通过 vLLM 后端 | 通过 SGLang 后端 | 通过 llama.cpp 后端 | 通过 API 路由 | 🔄 进行中 [#54946](https://github.com/BerriAI/litellm/pull/54946) | — |
| **SM120 / Blackwell（RTX 5090）** | ✅ 一等公民，活跃内核工作 | ✅ FlashInfer MegaMoE 支持 | 🟡 CUDA graphs 卡死——已有变通方案 | — | 通过供应商路由 | — |
| **Apple Silicon（MLX）** | — | — | 通过 llama.cpp Metal 后端 | ✅ MLX runner，历史 eviction 控制 | 通过 API 路由 | ✅ torch 2.14.1、DSpark |
| **Ascend NPU（C8）** | — | ✅ INT8/FP8 KPool 索引缓存 | — | — | 通过 API 路由 | — |

**覆盖广度之冠：** llama.cpp — 其多后端架构（CUDA、HIP、Vulkan、Metal、Sycl、CPU、Zdnn）使其成为几乎所有上游项目的执行引擎。

**速度之冠：** vLLM — 对 Blackwell 和 Inkling 2 的内核级新支持密度最高，最新的硬件优先获得一等公民待遇，速度领先任何竞争对手。

**集成广度之冠：** LiteLLM — 唯一一个可在单一代理实例中跨 AWS Bedrock、Azure、Vertex、Anthropic、OpenAI、Ollama、Replicate 所有供应商类型路由的项目。

---

## 4. 性能前沿

各项目优化工作的集中方向：

| 前沿领域 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------|------|--------|-----------|--------|---------|---------|
| **KV Cache** | KV Offload RFC、block resume 调度器、KV Connector 异步轮询 | HiCache NIXL Tier-3、Engram CXL dev-dax 持久化（188 GiB）、Mooncake 租约优化 | 图内递归状态原地读取 | MLX 历史 eviction 控制、持久化缓存 | Token 计数精度（函数名 + 参数） | GGUF KV GPU 共享权重 |
| **量化** | NVFP4 仿真（SM89 前）、MXFP8 分块缩放 E4M3 MMA、DeepGEMM FP8 修复 | MXFP4 CUTLASS 预处理、Ascend INT8/FP8 KPool | NVFP4 MMQ y_scale 过度读取、按专家粒度的 FP8 量化 scale 支持 | — | Anthropic 缓存费用双重计算已修复 | 无需 bitsandbytes 的 4-bit QLoRA、BF16 GGUF 零拷贝 |
| **批处理 / 调度** | Batch 不变性 RFC、上下文感知稀疏 draft head、spec decode 的 TP 配置 | Pre-fill 延迟器（跳过空闲 CPU all-gathers）、DP-attention TP-MoE padding | — | MLX batch DFlash2 提案 | — | — |
| **内核 / GPU 计算** | 融合 GDN MTP（16-token 验证）、融合 up-proj + gate/blend（SM120）、Inkling 2 prefill GEMM | Hunyuan-V4 集群 CUDA 内核（SM90）、FlashInfer MegaMoE SM120 | Vulkan coopmat2 GDN、subgroup pool1d、IQ 网格表从 storage buffer 读取 | — | Stream chunk 元数据注入 | Qwen-Image-2.1 每行 RoPE、Portable resume DTensor |
| **分布式服务** | Data Parallel 协调器超时、MoE 的 LoRA 独立 slot rank、NCCL 通信器生命周期 | 分布式 KVCache 路线图（已关闭，22 👍） | 多后端 MoE expert 路由 | — | MCP OAuth 生命周期、密钥级权限 | 原生 FSDP2 MoE expert 栈 |
| **内存管理** | PCIe IPC workspace 大小、MFU 权重字节计算 | 统一 Radix Cache 链接器（运行时 attach/detach） | CUDA 设备类型缓存（消除每次调用约 1ms 开销）、Windows 内存上限 | MLX runner RAM 目标、macOS 内核内存上报 | — | DTensor optimizer 恢复时留在 host、Windows CUDA 提交上限 |

**最密集方向：** KV cache 优化横跨三大推理引擎（vLLM、SGLang、llama.cpp）及 Ollama 的 MLX runner，反映了 2026 年时代背景下内存带宽——而非算力——才是推理的主要瓶颈这一现实。

**最具突破性：** SGLang 的 Engram CXL dev-dax 持久化，为 DeepSeek-V4.1 的 188 GiB 静态表提供支持。这是 disaggregated Engram memory 首次在生产路径上落地，有望在 GPU HBM 无法容纳完整模型的配置上运行 DeepSeek-V4.1。

**最紧迫修复簇：** llama.cpp 的 CUDA/HIP >65,535 token 修复（[`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823)）和设备类型缓存（[`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819)），分别解决了两类不同维度的失效：长上下文场景下的静默质量下降，以及每次调用中的固定性能损耗。

---

## 5. 分层定位

```
┌─────────────────────────────────────────────────────────────────┐
│  训练 / 微调                                                    │
│  Unsloth ── LoRA/QLoRA、FSDP2、GGUF 训练、torch 2.14.1          │
├─────────────────────────────────────────────────────────────────┤
│  本地运行时                                                     │
│  llama.cpp ── 多后端推理引擎（CPU/GPU/NPU/MLX）                 │
│  Ollama ── 面向开发者的本地部署（MLX、CUDA）                     │
├─────────────────────────────────────────────────────────────────┤
│  推理服务引擎                                                   │
│  vLLM ── 生产级、PagedAttention、张量并行                       │
│  SGLang ── Radix cache、DSL、Andrea spec decode、HiCache        │
├─────────────────────────────────────────────────────────────────┤
│  网关 / 路由 / 编排层                                           │
│  LiteLLM ── 多供应商代理、成本追踪、MCP OAuth                   │
└─────────────────────────────────────────────────────────────────┘
```

**定位核心观察：**

- **llama.cpp 是通用的底层基座。** 本次摘要中提到的所有项目要么运行在 llama.cpp 之上（Ollama、Unsloth 的 GGUF 路径），要么与其竞争（vLLM、SGLang 在 GPU 服务场景）。其多后端策略使其成为硬件多样性与应用可移植性之间的桥梁。

- **vLLM 和 SGLang 正在向生产场景收敛。** 两个项目都在积极开发 speculative decoding、KV offloading 和分布式服务特性。差异化空间正在收窄：vLLM 在 Blackwell 内核深度上领先；SGLang 在 DSL 调度表达力和 HiCache 存储集成上领先。

- **Ollama 处于开发者可及性层**，但并非生产意义上的推理引擎。它的价值在于低门槛本地部署（单二进制、MLX 原生）以及其网关角色（连接 LiteLLM 访问云端模型）。0.40.18 中出现的 DGX Spark 回归问题印证了一个事实：快速的功能迭代速度是以回归测试深度为代价的。

- **LiteLLM 是唯一在编排层运作的项目**，在单一代理实例中提供跨供应商的统一成本追踪、密钥管理和模型路由。其 MCP OAuth 生命周期工作表明，企业对 MCP 工具集成到多供应商网关的需求正在增长。

- **Unsloth 是推理栈的训练对应层。** FSDP2 MoE 支持、原生 GGUF LoRA 训练、无需 bitsandbytes 的 4-bit QLoRA，加上对 Inkling 2 GGUF 的推理和训练双重支持，使其成为模型生命周期中微调环节的最快落地路径——这是 vLLM/SGLang 完全不涉及的领域。

---

## 6. 趋势信号

### 给基础设施工程师和技术决策者的建议

| 信号 | 证据 | 影响 |
|--------|----------|-------------|
| **Blackwell / SM120 是所有 GPU 推理引擎的首要优化目标** | vLLM：MXFP8 + 融合 prefill 内核；SGLang：FlashInfer MegaMoE；llama.cpp：CUDA graphs 工作中 | 若你正在评估推理用 GPU 刷新周期，RTX 5090 / Blackwell 工作站应进入候选清单。笔记本级 SM120 上的 CUDA graphs 在 llama.cpp 中仍不稳定；服务器级 SM120 可靠性更高。 |
| **量化格式泛滥正在制造集成债务** | NVFP4、MXFP8、MXFP4、FP8、NF4、GGUF Q4/Q5/Q6_K、IQ1/2/3 及其按张量/按通道/按专家变体同时出现在所有项目中 | 混用不同版本间的量化格式时，预期会出现兼容性问题。在生产环境中锁定你的模型-引擎版本配对。NVFP4 在 SM89 前硬件上的仿真和 MXFP4 CUTLASS 预处理假设（GPT-OSS 硬编码）是集成脆弱性的早期信号。 |
| **长上下文推理（>65k tokens）正在成为一等生产级需求** | llama.cpp 修复 >65,535 token ADD_ID 崩溃；vLLM batch 不变性 RFC；SGLang Engram 内存系统支持 188 GiB KV cache；Ollama MLX 前缀缓存 eviction | 基于长上下文工作流（RAG、agent 记忆、文档理解）构建的应用，应针对 >128k token 工作负载验证引擎版本和配置。如果你当前版本在 llama.cpp 修复之前，需重新测试。 |
| **安全与健壮性加固正在加速** | SGLang：`/parse_function_call` 中的 regex DoS（阻塞事件循环）；Ollama：`max_tokens: 0` 导致静默生成、类型错误的 API 选项返回 500；LiteLLM：MCP OAuth 违反 RFC 9207、密钥类型权限缺口 | 所有面向网关的项目都在接收同时改变错误行为的补丁。谨慎升级 Ollama ≥0.40.18：类型错误的选项返回 HTTP 400 更安全，但将 500 视为重试信号的客户端代码行为将发生变化。 |
| **MoE + LoRA 正从实验走向生产** | vLLM MoE 专家的 LoRA 独立 slot rank；Unsloth FSDP2 MoE expert 栈；llama.cpp 跨后端 moe-cache 支持 | 如果你在用适配器服务 MoE 模型，相关工具链现已收敛到稳定支持。验证你的 LoRA 适配器 rank 与 `--max-expert-lora-rank`（vLLM）或等价设置的一致性——按专家 rank 差异化现已得到支持。 |
| **多后端硬件多样性正在向更小的目标集合收敛** | llama.cpp：CUDA + HIP + Vulkan + Metal + SYCL + CPU + Zdnn；SGLang：CUDA + Ascend NPU；Ollama：CUDA + MLX；Unsloth：CUDA + MLX + AMD ROCm | 生态正在收敛到 CUDA + Metal（Apple）+ 一个 NPU 后端（Ascend 或 AMD ROCm）作为最小可行多后端覆盖。若你正在为新部署评估硬件，这四条路径代表了大多数开源支持所在的方向。 |
| **SGLang 1.0 和 vLLM Rust 前端默认切换即将到来** | SGLang 1.0 定位为稳定性版本，含明确的配置错误策略；vLLM Rust 前端追踪 issue 表明默认切换即将发生 | 两项变更都将影响配置和 CLI 行为。如果你当前依赖 vLLM Python CLI 或 SGLang YAML 配置，请在这些变更进入 stable 分支前，用 `main` 分支运行集成测试。SGLang 1.0 兼容性策略（一旦发布）应成为你的升级检查清单。 |
| **训练层和服务层正通过 GGUF 紧密耦合** | Unsloth 在 GGUF 模型上训练，导出可被 Ollama 和 llama.cpp 消费的 LoRA 适配器；vLLM 和 SGLang 均支持 GGUF 推理 | llama.cpp → Ollama/Unsloth → 微调 → 回滚部署至 vLLM/SGLang 这条 GGUF 路径正在成为事实上的模型可移植性标准。组织应将 GGUF 作为模型制品管线的标准格式，以获得整个生态的最大灵活性。 |

---

*跨项目对比报告基于 2026-11-28 日 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 的 GitHub 活动摘要生成。所有 GitHub issue 和 PR 引用均采用标准 `github.com/{org}/{repo}/{issue,pr}/<number>` 格式。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this English technical digest about vLLM into Simplified Chinese. I need to:

1. Translate all the text while preserving the Markdown structure exactly
2. Keep URLs, issue/PR numbers, code spans, project names, etc. as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**1. Today's Highlights**

vLLM 的开发继续加速 Blackwell/SM120 优化，两个新 PR 落地用于 Inkling 2 Mini on RTX 5090 — 原生 MXFP8 prefill experts 和融合的 up-projection/blend 内核实现了可测量的 TTFT 提升。与此同时，batch invariance RFC (#27433) 获得 107 条评论，社区正逐步达成确定性服务语义的共识，而 Rust 前端迁移跟踪 (#68784) 预示着 `vllm serve` 即将切换为默认路径。

**2. Releases & Breaking Changes**

| Item | Description | Links |
|------|-------------|-------|
| No releases | 过去 24 小时内无标签发布 | — |

**Notable Config Changes:**
- 通过 [PR #68635](https://github.com/vllm-project/vllm/pull/68635) 新增 `--data-parallel-coordinator-timeout`，用于 Data Parallel SERVE-1 迁移控制
- 通过 [PR #70286](https://github.com/vllm-project/vllm/pull/70286) 新增 `--max-expert-lora-rank`，支持 MoE experts 与 dense layers 的独立 LoRA buffer 大小调整

**3. New Model & Hardware Support**

| Model / Hardware | Detail | Source |
|------------------|--------|--------|
| **SM120 / Blackwell** (RTX PRO 6000, RTX 5090) | 持续增强一级支持；Inkling 2 优化 PR 活跃中 | [PR #70465](https://github.com/vllm-project/vllm/pull/70465

), [PR #70466](https://github.com/vllm-project/vllm/pull/70466), [PR #70334](https://github.com/vllm-project/vllm/pull/70334) |
| **Inkling 2 Mini** (SM120) | 针对最后 4 个 expert 层使用原生 MXFP8，通过 block-scaled E4M3 MMA 实现 | [PR #70465](https://github.com/vllm-project/vllm/pull/70465), [PR #70466](https://github.com/vllm-project/vllm/pull/70466) |
| **NVFP4 emulation** | 修正编译兼容性

Inkling 2 Mini 通过原生 MXFP8 和 block-scaled E4M3 多核矩阵累加优化最后 4 个专家层。NVFP4 仿真也解决了编译问题。

AMD ROCm 平台上 gx 架构的优化工作也在推进中。

针对 MI355X 和 Qwen3.8-Flash-Next 的性能优化正在进行，重点关注 SM120 推理引擎的性能提升。通过融合 GDN 多令牌预测验证窗口和 MXFP8 优化，实现了显著的性能改进，特别是在 RTX 5090 上的首次请求 TTFT 指标。

融合 up-projection 和 gate/blend 操作进一步降低了 FP32 写入开销，提升了 per-token RMSNorm 计算效率。通过 PDL 流水线技术优化了 SM120 MoE 调度，显著降低了跨 Triton 内核的执行延迟。

上下文感知的稀疏语言模型头实现了张量并行 speculative decoding，突破了传统方法的并行化限制。在 KV 内存管理方面，通过精细化调整 FlashInfer PCIe IPC 工作空间配置，有效解决了分布式场景下的内存分配问题。

自定义量化方法现在能够精确报告内存带宽利用率，提升了系统资源调度准确性。异步调度策略通过轮询传输结果，显著降低了端到端步骤延迟，增强了工作流流畅性。

硬件性能挑战主要集中在 Blackwell/SM120 平台上。使用 `--enforce-eager` 选项时，DeepSeek-V4.1-Flash 解码吞吐量严重下降，CUDA graphs 无法正常工作。Inkling 2 的 prefix caching 机制导致批次中相同提示的运行结果存在不确定性。同时，HTTP 500 KeyError 错误暗示渲染器存在潜在问题。

Triton FP32 到 FP8 转换过程中出现双重舍入，影响了 KV 缓存精度。大型到小型请求形状转换时，引擎会出现明显卡顿。GLM5.2-nvfp4 在思考阶段偶尔输出异常符号，`triton_w4a16_gemm` 断言失败，表明底层算法存在技术缺陷。

DeepSeek-V4稀疏 SWA 仅在特定版本支持 flashinfer 参数，多项问题已得到解决。性能优化重点关注 RTX 5090 作为主要推理平台的重要性，batch invariance 接近生产就绪状态，Rust 前端即将成为默认选项。

MoE 与 LoRA 现在支持按专家层级定义 rank 上限，为多租户和上下文密集型 agentic 系统提供更灵活的 KV 卸载请求级别控制。DeepSeek-V4.1 在 Blackwell 架构上存在已知性能回归问题。

消化单从 github.com/vllm-project/vllm 收集的 2026-11-28 活动数据，通过标准 GitHub 链接格式提供项目信息。所有链接保持原始格式，确保信息传递的精确性和可追溯性。
</think>


# vLLM 速报 — 2026-11-28

## 1. 今日要点

vLLM 的 Blackwell/SM120 优化工作持续提速，两个新 PR 落地用于 Inkling 2 Mini on RTX 5090 — 原生 MXFP8 prefill experts 和融合 up-projection/blend 内核实现了可测量的 TTFT 提升。与此同时，batch invariance RFC (#27433) 获得 107 条评论，社区正逐步就确定性服务语义达成共识，而 Rust 前端迁移跟踪 (#68784) 预示着 `vllm serve` 即将切换为默认路径。

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| 无发布 | 过去 24 小时内无标签发布 | — |

**重要配置变更：**
- 通过 [PR #68635](https://github.com/vllm-project/vllm/pull/68635) 新增 `--data-parallel-coordinator-timeout`，用于 Data Parallel SERVE-1 迁移控制
- 通过 [PR #70286](https://github.com/vllm-project/vllm/pull/70286) 新增 `--max-expert-lora-rank`，支持 MoE experts 与 dense layers 的独立 LoRA buffer 大小调整

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | 来源 |
|------------------|--------|--------|
| **SM120 / Blackwell** (RTX PRO 6000, RTX 5090) | 持续增强一级支持；Inkling 2 优化 PR 活跃中 | [PR #70465](https://github.com/vllm-project/vllm/pull/70465), [PR #70466](https://github.com/vllm-project/vllm/pull/70466), [PR #70334](https://github.com/vllm-project/vllm/pull/70334) |
| **Inkling 2 Mini** (SM120) | 最后 4 个 expert 层启用原生 MXFP8（128 行 tile 的 block-scaled E4M3 MMA）；融合 up-projection + gate/blend | [PR #70465](https://github.com/vllm-project/vllm/pull/70465), [PR #70466](https://github.com/vllm-project/vllm/pull/70466) |
| **NVFP4 emulation** | 修复在缺乏 `float8e4nv` 硬件类型的 pre-SM89 GPU（Ampere A100）上的编译问题 | [PR #70464](https://github.com/vllm-project/vllm/pull/70464) |
| **gfx950 / MI355X** (AMD ROCm) | Qwen3.8-Flash-Next 性能优化跟踪 | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. 性能与优化

| 类别 | 变更 | 影响 | 链接 |
|----------|--------|--------|-------|
| **Inkling 2 decode** | 融合 GDN MTP verify window 从 9 → 16 tokens | 消除 block-16 DFlash/DSpine drafter 对 Triton delta-rule fallback 的依赖 | [PR #70253](https://github.com/vllm-project/vllm/pull/70253) |
| **Inkling 2 prefill** | SM120 最后 4 个 expert 层启用 MXFP8（128 行 tile） | RTX 5090 上单请求 TTFT 提升（具体数值见 PR） | [PR #70465](https://github.com/vllm-project/vllm/pull/70465) |
| **Inkling 2 prefill** | SM120 融合 up-projection + gate/blend | 减少 FP32 回写流量；per-token RMSNorm 效率提升 | [PR #70466](https://github.com/vllm-project/vllm/pull/70466) |
| **MoE / 低延迟 GEMM** | SM120 MoE 分块策略、跨 Triton 内核的 PDL 流水线 | 已关闭 [PR #70334](https://github.com/vllm-project/vllm/pull/70334) — 已合并 | [PR #70334](https://github.com/vllm-project/vllm/pull/70334) |
| **Spec decode drafter** | 上下文感知的稀疏 LM head，支持 TP > 1 | 解锁 tensor-parallel speculative decoding 场景 | [PR #70255](https://github.com/vllm-project/vllm/pull/70255) |
| **KV 内存估算** | 在 KV profiling 前预留 FlashInfer PCIe IPC workspace | 修复分布式场景下 KV cache 估算不足问题；修复 #67521 | [PR #68138](https://github.com/vllm-project/vllm/pull/68138) |
| **量化指标** | `QuantizationConfig.get_weight_byte_size()` 用于 MFU 估算器 | 自定义量化方法现可准确上报内存带宽利用率 | [PR #65143](https://github.com/vllm-project/vllm/pull/65143) |
| **KV 传输延迟** | Worker 等待下一个 RPC 期间轮询 `get_transfer_results()` | 降低 KV connector 异步调度场景的端到端 step 延迟 | [PR #69701](https://github.com/vllm-project/vllm/pull/69701) |

## 5. 稳定性与回归

按运维影响排序：

| 严重程度 | 问题 | 描述 | 应对 / 修复 |
|----------|-------|-------------|------------------|
| 🔴 **高** | **#56892** | DeepSeek-V4.1-Flash on SM120：启用 `--enforce-eager` 时 decode 吞吐极低；CUDA graphs 不可用 | 等待 SM120 graph capture 修复 |
| 🔴 **高** | **#70043** | Inkling 2：同一 batch 内相同 prompt 的多次执行结果在启用 prefix caching 时不一致 | 处理中；影响确定性保证 |
| 🟠 **中** | **#70385** | `chat_template_kwargs["tools"]` 覆盖服务端构建的 tools → HTTP 500 KeyError（DeepSeek renderers） | 2026-11-27 提交 |
| 🟠 **中** | **#69199** | Triton FP32→FP8 (e4m3) 在 SM89 (L4 Ada) 上双重舍入：KV cache 值偏差一个 e4m3 步长 | 影响 NVFP4 emulation 精度 |
| 🟠 **中** | **#47458** | 大小请求 shape 切换时引擎级 stall ~17.5s（NVFP4/b12x） | Qwen3.6-35B-NVFP4 可复现 |
| 🟡 **低** | **#47367** | GLM5.2-nvfp4 thinking 阶段偶发输出 `!` | **已关闭** — 可能已解决 |
| 🟡 **低** | **#47159** | `triton_w4a16_gemm` 在 GPTQ 模型上 assert 失败 | **已关闭** — 可能已解决 |
| 🟡 **低** | **#48054** | DeepSeek-V4 sparse-SWA 仅在 0.6.14 版本传递 flashinfer kwargs，但 pin 版本为 0.6.13 | **已关闭** — 可能已解决 |

**今日合并的修复 PR：**
- [PR #49928](https://github.com/vllm-project/vllm/pull/49928)：`torch.compile` + piecewise CUDAGraph 场景下 DeepGEMM FP8 quant 崩溃（TMA scales 相关）
- [PR #52753](https://github.com/vllm-project/vllm/pull/52753)：静态 per-group 量化下错误的 FP8 quant 融合
- [PR #64335](https://github.com/vllm-project/vllm/pull/64335)：weight-transfer 引擎重新初始化时销毁旧的 NCCL communicator

## 6. 对应用开发者的影响

| 要点 | 详情 |
|----------|--------|
| **Blackwell/RTX 5090 现为 vLLM 一级目标** | Inkling 2 Mini 在 SM120 上享有原生 MXFP8 和融合内核收益。若您在 RTX 5090 或 Blackwell 工作站上部署，请用 `main` 分支测试 — 性能改进每天都在落地。 |
| **Batch invariance 接近生产就绪** | RFC (#27433, 107 comments) 表明确定性服务的社区意愿强烈。需要可复现输出的 RL/agentic 工作负载应密切跟踪此方向。 |
| **Rust 前端即将成为默认** | [Issue #68784](https://github.com/vllm-project/vllm/issues/68784) 显示基于 Rust 的 `vllm serve` 路径将切换为默认。在正式合入前，请验证您的 serving 配置。 |
| **MoE + LoRA 现支持按 expert 限制 rank 上限** | [PR #70286](https://github.com/vllm-project/vllm/pull/70286) 引入了 `--max-expert-lora-rank`，在 MoE adapter rank 需求混合的场景下减少内存开销。 |
| **KV offload 即将获得请求级别控制** | [RFC #66782](https://github.com/vllm-project/vllm/issues/66782) 提出了更细粒度的 KV promotion/pinning 策略 — 若您正在构建多租户或上下文密集型 agentic 系统，此功能值得关注。 |
| **DeepSeek-V4.1 on Blackwell 存在已知回归** | 若您在 SM120 上禁用 CUDA graphs 调试 DeepSeek-V4.1-Flash，请预期吞吐显著下降。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 的修复进展。 |

---

*本速报数据来源于 2026-11-28 的 github.com/vllm-project/vllm 活动记录。所有 issue/PR 链接采用标准格式：`https://github.com/vllm-project/vllm/{issue,pr}/<number>`。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the technical accuracy and natural Chinese flow.

---

# SGLang Digest — 2026-11-28

## 1. 今日要点

SGLang 项目正加强生产环境稳定性工作，为计划中的 **1.0 稳定版发布**（Issue [#50045](https://github.com/sgl-project/sglang/issues/50045)）做准备。同时，DeepSeek-V4.1 的庞大 **Engram 内存系统**（约 188 GiB 静态 FP8 表）现已支持 file-backed 和 CXL dev-dax 存储（[PR #53686](https://github.com/sgl-project/sglang/pull/53686)）。与此同时，`/parse_function_call` 中的正则表达式 DoS 向量（[Issue #52090](https://github.com/sgl-project/sglang/issues/52090)）以及对格式错误的 `/generate` 请求进行类型检查时导致服务器崩溃的漏洞（[Issue #41466](https://github.com/sgl-project/sglang/issues/41466)，已关闭）都需要关注。

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|--------|------|
| **过去 24 小时内无新版本** | — | — |
| **SGLang 1.0 规划** | 明确为稳定性版本：静默配置变更 → 命名错误，明确 1.x 系列的兼容性策略。从 0.5.x 升级可能需要修改。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

## 3. 新模型与硬件支持

DeepSeek-V4.1 Engram 表现在支持 file 和 CXL dev-dax 后端存储，解决了 188.8 GiB Engram 内存的 GPU HBM 加载问题。FlashInfer MegaMoE SM120 在 NVIDIA SM120（Blackwell）上为 DeepSeek-V4-Flash 提供 Prefill 支持，Hunyuan-V4 Flash 则通过 FlashAttention 和 Flash Decoding 优化了 SM90 上的推理性能。

Qwen3.6-27B 在 NPU 上的 16k 性能 OOM 和 GPQA W8A8 精度漂移问题已修复，Ascend C8 INT8/FP8 KPool 索引缓存也得到启用，支持 GLM-5.3-Flash 的量化 KV 索引缓存。

## 4. 性能与优化

Prefill 调度器在启用 `--enable-prefill-delayer` 时跳过空闲 CPU all-gathers 并停止持有预填充传递。HiCache NIXL Tier-3 的修复包括 O_DIRECT 存储路径的 bug 修复和缺失的存储带宽指标。Mooncake Mamba 租约仅在 Mooncake 查找时租用最深的 Mamba 状态，避免跨页面状态的冗余读取租约。

对于 DP-attention TP-MoE 填充，空闲 DP 等级的填充行被路由到无专家，消除 NVIDIA CUDA 上空闲 DP 等级的虚构解码步骤。LoRA GPU 权重快照延迟并固定 GPU 权重的未合并快照，减少分层卸载下的主机克隆。KDA varlen 预填充通过 torch.compile 消除导致 Dynamo 特化失败的主机同步。

此外，MiMo-Audio 分词器的因果滑动窗口注意力、统一的 Radix Cache 链接器对空闲服务器的外部链接器运行时附加/分离支持，以及解码追踪重放中保留真实 logprob 评估的确定性令牌序列重放都得到了改进。

## 5. 稳定性与回归问题

按估计严重程度排序：

| 严重程度 | 问题 | 描述 | 状态 | 链接 |
|----------|-------|-------------|--------|------|
| 🔴 **严重 / DoS** | 正则表达式灾难性回溯 | `/parse_function_call` 在 `re.DOTALL` 下使用嵌套量词 + `.*` 的正则表达式；约 167 字节的精心构造输入会阻塞事件循环。目前尚无修复 PR。 | OPEN | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| 🔴 **严重** | Gemma-4 mm 非 RGB 图像崩溃 | 来自 CDN 的单个灰度/RGBA 图像会崩溃视觉模块并杀死调度器，丢弃所有进行中的请求。涉及两个叠加的 bug。 | CLOSED | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| 🟠 **高** | `/generate` 字段类型不匹配崩溃 | 一个请求中的错误类型字段会导致服务器宕机；现在会返回错误而非崩溃。 | CLOSED（修复已合并） | [#41466](https://github.com/sgl-project/sglang/issues/41466) |
| 🟠 **高** | `top_k`、`logprobs`、`n` 无上限 | 这些参数没有上限；单个请求即可对服务器发起 DoS 攻击。 | CLOSED | [#41482](https://github.com/sgl-project/sglang/issues/41482) |
| 🟠 **高** | `session_params` 类型错误崩溃 | 错误类型的 `session_params` 会导致服务器崩溃。 | CLOSED | [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| 🟡 **中** | Inkling-2-Small on SM12x (GB10) | 当 EP > 1 时，`route_metadata` 对 >~2,750 个 ID 路由请求的共享内存超过 GB10 提供的量；影响 EP > 1 的 MoE。 | OPEN | [#53439](https://github.com/sgl-project/sglang/issues/53439) |
| 🟡 **中** | `sgl-kv-indexer` RwLock 饥饿 | 前缀查询在整个扫描期间持有单个 RwLock 读锁，导致应用操作饥饿。 | OPEN | [#52575](https://github.com/sgl-project/sglang/issues/52575) |
| 🟡 **中** | `response_format.schema` 返回 500 | 格式错误的遗留 JSON schema 返回 HTTP 500 而非 400。 | OPEN | [#53447](https://github.com/sgl-project/sglang/issues/53447) |
| 🟡 **中** | Jet-Nemotron/JetVLM 统一内存 | `--enable-unified-memory` 永不回写线性注意力状态。 | OPEN | [#53615](https://github.com/sgl-project/sglang/issues/53615) |
| 🟡 **中** | mxfp4 CUTLASS 预处理假设 GPT-OSS | 硬编码 GPT-OSS 成对 w13 行和 SwiGLU 标量；破坏 SM120 上的其他 MoE 形状。 | OPEN | [#53571](https://github.com/sgl-project/sglang/issues/53571) |
| 🔵 **CI / 基础设施** | Flaky tests (NVIDIA PR CI) | 通过 `/sglang-pr-babysit` 工作流追踪；5 个 broken，26 个 flaky，927 个最近在 scheduled CI 中修复。 | OPEN | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

## 6. 对应用开发者的启示

| 注意事项 | 详情 |
|----------|--------|
| **关注 1.0 升级摩擦** | SGLang 1.0（计划中）将把静默配置变更为显式错误，并正式制定兼容性策略。如果您使用的是 0.5.x，请尽早测试您的 serving 配置。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **审查 `/parse_function_call` 输入** | 工具调用检测中的正则表达式 DoS 是远程事件循环阻塞风险。在补丁发布前，请将用户控制的 `tool_call`/`name` 字段视为不可信输入。 | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| **验证 API 请求格式** | 最近的类型检查修复意味着格式错误的 `/generate` 或 `session_params` 载荷现在会返回错误而非导致进程崩溃——这一行为变更值得在 API 客户端中注意。 | [#41466](https://github.com/sgl-project/sglang/issues/41466), [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| **Engram + CXL 开启新的内存配置** | DeepSeek-V4.1 部署现在可以将 188 GiB Engram 表卸载到 CXL dev-dax 而非 GPU HBM，可能使更大模型适配给定 GPU 数量。 | [PR #53686](https://github.com/sgl-project/sglang/pull/53686) |
| **图像输入：规范化为 RGB** | Gemma-4 用户应在发送前将图像预处理为 RGB；来自上游 CDN 的非 RGB 图像可能导致 serving pod 崩溃。 | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| **需要 fastokens ≥ 0.3.5** | fastokens 0.3.3–0.3.4 中的 GIL/锁顺序反转会导致 `--tokenizer-backend fastokens` 下 HTTP 服务器死锁。请确保依赖项锁定 `fastokens>=0.3.5`。 | [PR #51428](https://github.com/sgl-project/sglang/pull/51428) |
| **FlashInfer 0.7.5.post1 已发布** | 包含 trtllm-gen batched-GEMM 回归的关键修复；如果您使用的是 < 0.7.5.post1，请更新。 | [PR #51964](https://github.com/sgl-project/sglang/pull/51964) |
</think>


# SGLang Digest — 2026-11-28

## 1. 今日要点

SGLang 项目正加强生产环境稳定性工作，为计划中的 **1.0 稳定版发布**（Issue [#50045](https://github.com/sgl-project/sglang/issues/50045)）做准备。同时，DeepSeek-V4.1 的庞大 **Engram 内存系统**（约 188 GiB 静态 FP8 表）现已支持 file-backed 和 CXL dev-dax 存储（[PR #53686](https://github.com/sgl-project/sglang/pull/53686)）。与此同时，`/parse_function_call` 中的正则表达式 DoS 向量（[Issue #52090](https://github.com/sgl-project/sglang/issues/52090)）以及对格式错误的 `/generate` 请求进行类型检查时导致服务器崩溃的漏洞（[Issue #41466](https://github.com/sgl-project/sglang/issues/41466)，已关闭）都需要关注。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|--------|------|
| **过去 24 小时内无新版本** | — | — |
| **SGLang 1.0 规划** | 明确为稳定性版本：静默配置变更 → 命名错误，明确 1.x 系列的兼容性策略。从 0.5.x 升级可能需要修改。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 变更 | 链接 |
|-----------------|--------|------|
| **DeepSeek-V4.1 Engram 表** | 新后端：使用 file 或 CXL dev-dax 设备存储约 188.8 GiB Engram 内存（layer 1 和 layer 14）。无需将静态 FP8 表加载到 GPU HBM 中。 | [PR #53686](https://github.com/sgl-project/sglang/pull/53686) |
| **FlashInfer MegaMoE SM120** | 通过 FlashInfer 的 cake MegaMoE 后端为 NVIDIA SM120（Blackwell）上的 DeepSeek-V4-Flash 提供 Prefill 支持。 | [PR #44359](https://github.com/sgl-project/sglang/pull/44359) |
| **Hunyuan-V4 Flash (SM90)** | 在 SM90 上为小 batch iHC post + pre + RMSNorm 启用 Cluster CUDA kernel，减少延迟受限的 decode/DFly-verify 路径上的 L2 流量。 | [PR #53685](https://github.com/sgl-project/sglang/pull/53685) |
| **Qwen3.6-27B on NPU** | 修复 NPU nightly 流程中的 16k 性能 OOM 和 GPQA W8A8 精度漂移问题。 | [PR #53543](https://github.com/sgl-project/sglang/pull/53543) |
| **Ascend C8 INT8/FP8 KPool 索引缓存** | 在 Ascend 上启用量化 KV 索引缓存（INT8 per-row FP16 scales, FP8 per-row FP32 + Hadamard rotation），用于 GLM-5.3-Flash。 | [PR #53662](https://github.com/sgl-project/sglang/pull/53662) |

---

## 4. 性能与优化

| 领域 | 描述 | 链接 |
|------|-------------|------|
| **Prefill 调度器** | 在 `--enable-prefill-delayer` 下跳过空闲 CPU all-gathers 并停止持有 prefill pass 回退（无 attention DP）。移植自 #52182。 | [PR #52466](https://github.com/sgl-project/sglang/pull/52466) |
| **HiCache NIXL Tier-3** | Bug 修复 + L3 存储路径（O_DIRECT 等）的缺失存储带宽指标。 | [PR #39550](https://github.com/sgl-project/sglang/pull/39550) |
| **Mooncake Mamba 租约** | 在 Mooncake 查找时仅租约最深层的 Mamba 状态；避免跨 page 状态的冗余读取租约。 | [PR #53586](https://github.com/sgl-project/sglang/pull/53586) |
| **DP-attention TP-MoE 填充** | 将 TP-MoE gather 的填充行路由到无 expert，消除空闲 DP rank 在 NVIDIA CUDA 上的虚构 decode 步骤。 | [PR #48072](https://github.com/sgl-project/sglang/pull/48072) |
| **LoRA GPU 权重快照** | 延迟并固定 GPU 权重的 unmerge 快照；减少 layerwise offload 下的主机克隆开销。 | [PR #52585](https://github.com/sgl-project/sglang/pull/52585) |
| **KDA varlen prefill under torch.compile** | 消除 varlen KDA prefill 中导致 Dynamo 特化失败的主机同步。 | [PR #53610](https://github.com/sgl-project/sglang/pull/53610) |
| **MiMo-Audio tokenizer** | 修复 audio tokenizer 中的因果滑动窗口注意力。 | [PR #33198](https://github.com/sgl-project/sglang/pull/33198) |
| **统一 Radix Cache linker** | 支持在空闲服务器运行时动态 attach/detach 外部 linkers。 | [PR #44526](https://github.com/sgl-project/sglang/pull/44526) |
| **解码追踪回放** | 添加对普通（非 speculative）解码的确定性 token 序列回放，保留真实 logprob 评估。 | [PR #52435](https://github.com/sgl-project/sglang/pull/52435) |

---

## 5. 稳定性与回归问题

按估计严重程度排序：

| 严重程度 | 问题 | 描述 | 状态 | 链接 |
|----------|-------|-------------|--------|------|
| 🔴 **严重 / DoS** | 正则表达式灾难性回溯 | `/parse_function_call` 在 `re.DOTALL` 下使用嵌套量词 + `.*` 的正则表达式；约 167 字节的精心构造输入会阻塞事件循环。目前尚无修复 PR。 | OPEN | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| 🔴 **严重** | Gemma-4 mm 非 RGB 图像崩溃 | 来自 CDN 的单个灰度/RGBA 图像会崩溃视觉塔并杀死调度器，丢弃所有进行中的请求。两个 bug 叠加。 | CLOSED | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| 🟠 **高** | `/generate` 字段类型不匹配崩溃 | 一个请求中的错误类型字段会导致服务器宕机；现在会返回错误而非崩溃。 | CLOSED（修复已合并） | [#41466](https://github.com/sgl-project/sglang/issues/41466) |
| 🟠 **高** | `top_k`、`logprobs`、`n` 无上限 | 这些参数没有上限；单个请求即可对服务器发起 DoS 攻击。 | CLOSED | [#41482](https://github.com/sgl-project/sglang/issues/41482) |
| 🟠 **高** | `session_params` 类型错误崩溃 | 错误类型的 `session_params` 会导致服务器崩溃。 | CLOSED | [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| 🟡 **中** | Inkling-2-Small on SM12x (GB10) | 当 EP > 1 时，`route_metadata` 对 >~2,750 个 ID 路由请求的共享内存超过 GB10 提供的量；影响 EP > 1 的 MoE。 | OPEN | [#53439](https://github.com/sgl-project/sglang/issues/53439) |
| 🟡 **中** | `sgl-kv-indexer` RwLock 饥饿 | 前缀查询在整个扫描期间持有单个 RwLock 读锁，导致 apply 操作饥饿。 | OPEN | [#52575](https://github.com/sgl-project/sglang/issues/52575) |
| 🟡 **中** | `response_format.schema` 返回 500 | 格式错误的 legacy JSON schema 返回 HTTP 500 而非 400。 | OPEN | [#53447](https://github.com/sgl-project/sglang/issues/53447) |
| 🟡 **中** | Jet-Nemotron/JetVLM 统一内存 | `--enable-unified-memory` 永不回写线性注意力状态。 | OPEN | [#53615](https://github.com/sgl-project/sglang/issues/53615) |
| 🟡 **中** | mxfp4 CUTLASS 预处理假设 GPT-OSS | 硬编码 GPT-OSS 成对 w13 行和 SwiGLU 标量；破坏 SM120 上的其他 MoE 形状。 | OPEN | [#53571](https://github.com/sgl-project/sglang/issues/53571) |
| 🔵 **CI / 基础设施** | Flaky tests (NVIDIA PR CI) | 通过 `/sglang-pr-babysit` 工作流追踪；5 个 broken，26 个 flaky，927 个最近在 scheduled CI 中修复。 | OPEN | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. 对应用开发者的启示

| 注意事项 | 详情 |
|----------|--------|
| **关注 1.0 升级摩擦** | SGLang 1.0（计划中）将把静默配置变更为显式错误，并正式制定兼容性策略。如果您使用的是 0.5.x，请尽早测试您的 serving 配置。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |
| **审查 `/parse_function_call` 输入** | 工具调用检测中的正则表达式 DoS 是远程事件循环阻塞风险。在补丁发布前，请将用户控制的 `tool_call`/`name` 字段视为不可信输入。 | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| **验证 API 请求格式** | 最近的类型检查修复意味着格式错误的 `/generate` 或 `session_params` 载荷现在会返回错误而非导致进程崩溃——这一行为变更值得在 API 客户端中注意。 | [#41466](https://github.com/sgl-project/sglang/issues/41466), [#41467](https://github.com/sgl-project/sglang/issues/41467) |
| **Engram + CXL 开启新的内存配置** | DeepSeek-V4.1 部署现在可以将 188 GiB Engram 表卸载到 CXL dev-dax 而非 GPU HBM，可能使更大模型适配给定 GPU 数量。 | [PR #53686](https://github.com/sgl-project/sglang/pull/53686) |
| **图像输入：规范化为 RGB** | Gemma-4 用户应在发送前将图像预处理为 RGB；来自上游 CDN 的非 RGB 图像可能导致 serving pod 崩溃。 | [#26751](https://github.com/sgl-project/sglang/issues/26751) |
| **需要 fastokens ≥ 0.3.5** | fastokens 0.3.3–0.3.4 中的 GIL/锁顺序反转会导致 `--tokenizer-backend fastokens` 下 HTTP 服务器死锁。请确保依赖项锁定 `fastokens>=0.3.5`。 | [PR #51428](https://github.com/sgl-project/sglang/pull/51428) |
| **FlashInfer 0.7.5.post1 可用** | 包含 trtllm-gen batched-GEMM 回归的关键修复；如果您使用的是 < 0.7.5.post1，请更新。 | [PR #51964](https://github.com/sgl-project/sglang/pull/51964) |

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report about llama.cpp into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title and Header**
"llama.cpp Daily Digest — 2026-11-28" → "llama.cpp 每日动态 — 2026-11-28"

**Today's Highlights**
Translate naturally:
- "critical fixes" → "关键修复"
- "large-context inference scenarios" → "长上下文推理场景"
- "long-standing CUDA/HIP bug" → "长期存在的 CUDA/HIP bug"
- "ADD_ID kernel failures" → "ADD_ID 内核执行失败"
- "more than 65,535 tokens" → "超过 65,535 个 token"
- "Performance work continued" → "性能优化工作持续推进"
- "Vulkan backend" → "Vulkan 后端"
- "cooperative matrix GDN optimizations" → "协作矩阵 GDN 优化"
- "device-type caching improvement" → "设备类型缓存改进"
- "multi-GPU scheduling overhead" → "多 GPU 调度开销"

**Releases & Breaking Changes**
Table header:
- "Commit" → "提交"
- "Description" → "描述"
- "Impact" → "影响"

Descriptions:
- "CUDA/HIP: fix ADD_ID launch for >65,535 tokens" → "CUDA/HIP：修复 ADD_ID 在超过 65,535 token 时启动失败"
- "gridDim.y was capped at 65,535, causing 'invalid configuration argument' errors in long-context scenarios" → "gridDim.y 被限制在 65,535，导致长上下文场景下出现 'invalid configuration argument' 错误"

I'm continuing the translation of the next commit's description and impact statement. The focus remains on precise technical language while maintaining the original meaning and structure.

The next thinking describes a CUDA optimization where device type is cached at initialization, eliminating per-call overhead from `cudaGetDeviceProperties`. This reduces performance impact for multi-GPU tensor override scenarios by approximately 0.7-1 ms per call. The developer confirms no breaking API changes or deprecations exist.

The translation continues with a description of new model and hardware support. SenseNova Loop architecture support has been merged, expanding the project's compatibility. A pull request introduces per-tensor scaling for fp8 and nvfp4 quantization formats. Additionally, a tokenizer fix for Falcon-h1 addresses whitespace-punctuation handling in pre-tokenization.

The performance section highlights recent optimizations. Vulkan backend improvements focus on GDN cooperative matrix handling, including refactoring split and store callbacks, with potential store vectorization benefits. Graph scheduling optimizations are planned for in-place recurrent state reading.

A key focus is multi-GPU scheduling, with a MoE cache now supporting experts selected across different backends, addressing layer-split model complexities. Metal backend work involves checking all fused nodes for concurrency, ensuring correct multi-output fused group handling. Several Vulkan and SYCL implementation PRs are in progress, targeting storage buffer optimizations, pool operations, and graphics pipeline improvements.

The stability section highlights critical issues. A high-severity problem involves Multi-Token Prediction (MTP) with Qwen3.6 27B model, causing repeated token output after extended sessions on specific hardware configurations. A CUDA graphs hang on the RTX 5090 Laptop with compute capability sm_120 requires a workaround using environment variable `GGML_CUDA_DISABLE_GRAPHS`.

Additional issues include non-deterministic log probability calculations on SYCL integrated GPUs with MoE models, and potential output corruption scenarios on Intel Arc B-series GPUs during complex inference tasks.

The next thinking appears to be cut off, suggesting an ongoing investigation into performance and reliability challenges across different GPU architectures.

A Vulkan decode throughput collapse on Intel Arc Pro B70 demonstrates significant performance degradation at extended context lengths, with RDNA3 architectures showing no such limitations.

Recent closed issues highlight successful resolution of multi-GPU performance bottlenecks, including device property lookup overhead and token processing limitations.

Five key technical insights emerge for application developers, focusing on long-context workload safety, multi-GPU performance improvements, and hardware-specific challenges across different GPU platforms.

Critical recommendations include rebuilding against current master, disabling CUDA graphs for RTX 5090 Laptop, and carefully testing MoE model deployments with layer splits to ensure correct expert routing.
</think>


# llama.cpp 每日动态 — 2026-11-28

## 今日要点

llama.cpp 项目为长上下文推理场景带来了关键修复，包括一个长期存在的 CUDA/HIP bug——当处理超过 65,535 个 token 时会导致 ADD_ID 内核执行失败。Vulkan 后端的协作矩阵 GDN 优化工作持续推进，设备类型缓存改进则解决了多 GPU 调度中的开销问题。

## 版本变更与破坏性更新

| 提交 | 描述 | 影响 |
|------|------|------|
| [`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823) | **CUDA/HIP：修复 ADD_ID 在超过 65,535 token 时启动失败** — gridDim.y 被限制在 65,535，导致长上下文场景下出现"无效配置参数"错误 | ⚠️ 生产部署的高危修复 |
| [`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819) | **CUDA：在初始化时缓存设备类型** — 消除每次调用 `cudaGetDeviceProperties` 的开销（~0.7–1 ms），此前该操作拖累了多 GPU tensor override 路径 | 性能修复 |
| [`b12822`](https://github.com/ggml-org/llama.cpp/commit/b12822) | **vulkan：处理空的 conv3d 内核** | 稳定性修复 |
| [`b12821`](https://github.com/ggml-org/llama.cpp/commit/b12821) | **vulkan：优化 coopmat2 GDN** | 性能优化 |
| [`b12820`](https://github.com/ggml-org/llama.cpp/commit/b12820) | **ggml-zdnn：使 zTensor 内存使用可见** | 诊断改进 |
| [`b12818`](https://github.com/ggml-org/llama.cpp/commit/b12818) | **ggml：为 fp8 和 nvfp4 支持量化 scale** | 功能扩展 |
| [`b12816`](https://github.com/ggml-org/llama.cpp/commit/b12816) | **graph：原地读取循环状态** | 跨后端性能提升 |
| [`b12815`](https://github.com/ggml-org/llama.cpp/commit/b12815) | **cuda：修复 NVFP4 MMQ y_scale 越界读取** | 正确性修复 |
| [`b12814`](https://github.com/ggml-org/llama.cpp/commit/b12814) | **moe-cache：支持在其他后端上选中的 experts** | 修复跨后端 layer-split 场景 |
| [`b12812`](https://github.com/ggml-org/llama.cpp/commit/b12812) | **metal：检查所有融合节点以支持并发** | 多输出融合组正确性 |

今日无破坏性 API 变更或弃用公告。

## 新模型与硬件支持

- **SenseNova Loop 支持已合并** — PR [#32588](https://github.com/ggml-org/llama.cpp/pull/32588) 新增了对 SenseNova Loop 架构的官方支持，由 SenseNova 团队贡献
- **量化 scale 支持扩展** — [`b12818`](https://github.com/ggml-org/llama.cpp/commit/b12818) 为 fp8 和 nvfp4 量化格式添加了每张量、每通道、每 expert 以及每 expert-每通道的 scale 支持
- **Falcon-h1 分词器修复** — PR [#33223](https://github.com/ggml-org/llama.cpp/pull/33223) 修正了标点前有空格的 pre-tokenizer 处理逻辑

## 性能与优化

### 已合并（最近 24 小时）

| 领域 | 变更 | 预期收益 |
|------|------|----------|
| **Vulkan GDN**（[`b12821`](https://github.com/ggml-org/llama.cpp/commit/b12821)） | 重构 coopmat2 GDN split+store 回调；将状态存储与 gram_pmat 工作交错执行 | 改善存储向量化 |
| **Graph 调度**（[`b12816`](https://github.com/ggml-org/llama.cpp/commit/b12816)） | 原地读取循环状态，改为不复制的模式 | 跨后端 token 输出更快 |
| **多 GPU 调度**（[`b12814`](https://github.com/ggml-org/llama.cpp/commit/b12814)） | MoE cache 现可处理在不同后端上选中的 experts | 修复基于循环的模型的 layer-split 场景 |
| **Metal**（[`b12812`](https://github.com/ggml-org/llama.cpp/commit/b12812)） | 检查所有融合节点以支持并发，而非仅检查最后一个 | 多输出融合组的正确性 |

### 进行中（待合并的 PR）

| PR | 描述 | 阶段 |
|----|------|------|
| [#32915](https://github.com/ggml-org/llama.cpp/pull/32915) | Vulkan：从 storage buffer 读取 IQ1/IQ2/IQ3 查找表 | 减少 NVIDIA 上的 LDC 分歧 |
| [#33221](https://github.com/ggml-org/llama.cpp/pull/33221) | Vulkan：为 pool1d 添加 subgroup shader | 解决宽 pool 模型（如 Mellum 2.1）的瓶颈 |
| [#32215](https://github.com/ggml-org/llama.cpp/pull/32215) | HIP：通过 `mov_dpp` 实现 DDP 路径的 sum 归约 | 更快的 warp 归约，`ds_permute_*` 的替代方案 |
| [#33220](https://github.com/ggml-org/llama.cpp/pull/33220) | SYCL：实现 GDN replay | 修复 Qwen 3.8 27B 回归问题——GDN 曾被 offload 到 CPU |
| [#33237](https://github.com/ggml-org/llama.cpp/pull/33237) | Vulkan：处理空张量输入 | 防止空输入崩溃 |

## 稳定性与回归

### 活跃问题（按活跃度排序）

| # | 问题 | 严重程度 | 状态 | 备注 |
|---|------|----------|------|------|
| [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) | Qwen3.6 27B 开启 MTP 后长对话输出重复的 `////` | 🔴 高 | 开放中（36 条评论） | CUDA + Ryzen 7950X3D + RTX 4090；影响 build 196 |
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) | CUDA graphs 在 RTX 5090 Laptop（sm_120）上挂起 | 🔴 高 | 开放中（15 条评论） | 临时方案：`GGML_CUDA_DISABLE_GRAPHS=1` |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | `/v1/completions` 在 SYCL 集显 + MoE 上 logprobs 不确定 | 🟡 中 | 开放中（15 条评论） | 请求的 seed 无法固定分布 |
| [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) | Intel Arc B 系列 Vulkan 长上下文/RAG 输出损坏 | 🟡 中 | 开放中（6 条评论） | 即使使用 `GGML_VK_DISABLE_COOPMAT` 仍存在 |
| [#28721](https://github.com/ggml-org/llama.cpp/issues/28721) | Arc Pro B70（Xe2）在 64k 上下文时 Vulkan decode 吞吐下降约 8 倍 | 🟡 中 | 开放中（4 条评论） | RDNA3 不受影响；属于后端内部问题 |

### 近期关闭（已修复/已解决）

| # | 问题 | 解决方案 |
|---|------|----------|
| [#33132](https://github.com/ggml-org/llama.cpp/issues/33132) | 每次跨设备拷贝都调用 `cudaGetDeviceProperties`（导致 8 倍减速） | 由 [`b12819`](https://github.com/ggml-org/llama.cpp/commit/b12819) 修复 |
| [#32444](https://github.com/ggml-org/llama.cpp/issues/32444) | ADD_ID 在超过 65,535 token 时失败 | 由 [`b12823`](https://github.com/ggml-org/llama.cpp/commit/b12823) 修复 |
| [#33101](https://github.com/ggml-org/llama.cpp/issues/33101) | Inkling 2 Mini 使用 `--moe-cache-mib` 时崩溃 | 已关闭 |
| [#32969](https://github.com/ggml-org/llama.cpp/issues/32969) | 使"将 PDF 解析为图像"时 DPI 可配置 | 已关闭（功能已添加） |

## 对应用开发者的意义

1. **长上下文工作负载现在更安全了** — ADD_ID 修复解决了超过 65,535 token 时静默失败的推理崩溃问题。如果你正在运行超长对话或 RAG 流水线，请用当前 master 分支重新编译。

2. **多 GPU tensor override 路径显著提速** — 设备类型缓存修复消除了每次跨设备拷贝约 1ms 的开销。之前 tensor override（`-ot`）使多 GPU 设置变成了 CPU 瓶颈；现已解决。

3. **关注 Intel Arc B 系列的 Vulkan 表现** — 长上下文场景下的输出损坏问题仍未解决。在修复发布前，Intel Battlemage GPU 在生产 RAG 部署中建议使用 SYCL 或 CPU 后端。

4. **MoE + layer-split 部署需要测试** — moe-cache 跨后端修复是新加入的；如果你在 GPU 间使用 layer-split 运行 MoE 模型，请验证 expert 路由是否正确。

5. **RTX 5090 Laptop 用户应禁用 CUDA graphs** — 在挂起问题解决前，请将 `GGML_CUDA_DISABLE_GRAPHS=1` 作为临时方案。

---

*本动态基于 ggml-org/llama.cpp 于 2026-11-28 的活动生成。数据来源：GitHub API。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report about Ollama into Simplified Chinese. I need to:

1. Translate the content while maintaining the Markdown structure exactly
2. Keep all technical terms, URLs, issue numbers, version tags, etc. in their original form
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me carefully translate this report, paying attention to:
- Technical terminology consistency
- Natural Chinese phrasing for technical content
- Preserving all formatting, tables, links, etc.
- Using appropriate Chinese punctuation

Let me go through it section by section.
</think>


# Ollama 每日简报 — 2026-11-28

## 1. 今日要点

Ollama 0.40.18 在高端硬件上持续暴露回归问题：DGX Spark 系统用户在从 0.34.4 升级后出现系统级不稳定，Inkling-2-mini 模型触发 OOM 崩溃，需强制重启。在修复侧，团队正在合入针对 MLX runner 的补丁，以解决 Apple Silicon 上对话历史被过度清除的问题，并修复了无效请求选项返回 HTTP 500 而非 400 的长期 API 不一致问题。

---

## 2. 发布版本与破坏性变更

| 项目 | 详情 |
|---|---|
| **无新版本发布** | 过去 24 小时内无新标签版本。最新的稳定版仍为 0.40.18。 |

**需要关注的有活跃回归问题：**

- **升级后 DGX Spark 不稳定（0.34.4 → 0.40.18）** — 多个模型变得不稳定，系统完全冻结。影响 #19927。尚无修复 PR。
- **Windows ROCm 下 JSON schema 请求在加载中途失败（0.40.18）** — 语法栈报错后返回 HTTP 200 但响应体为空。详见 #19918。
- **安装脚本覆盖旧硬件的 GPU 驱动** — 脚本未检查 GPU 架构，导致 10 系列显卡的 Linux 系统无法正常工作。详见 #19933。

---

## 3. 新模型与硬件支持

今日无新模型支持公告。以下领域有活跃开发：

- **DeepSeek v4 flash 模型请求** — 社区持续请求可下载的 DeepSeek v4 和 v4.1-flash 变体（#17510、#18379）。维护者尚无官方回应。
- **Inkling-2 Mini** — 在 DGX Spark 和 Apple MLX 上活跃测试，MLX 上的 prefix-cache 问题已在 #19819 报告。
- **Qwen3.5** — 工具调用序列化解析器活跃开发中（#18624）。

---

## 4. 性能与优化

| PR | 描述 | 影响 |
|---|---|---|
| [#19964](https://github.com/ollama/ollama/pull/19964) | MLX runner：在 snapshotWorkspace 中排除持久缓存增长；根据 ramTarget 检查 pendingHistoryBytes | 修复 Apple Silicon 上对话历史被过度清除的问题 |
| [#19907](https://github.com/ollama/ollama/pull/19907) | macOS：更准确地统计内核报告的可用内存 | 改善 prefix-cache 保留策略 |
| [#19745](https://github.com/ollama/ollama/pull/19745) | MLX runner：持久化非活跃对话缓存 | 降低模型切换或重启时的重新预填充开销 |
| [#19769](https://github.com/ollama/ollama/pull/19769) | MLX runner：批量 DFlash2 提案与循环回放 | 在并发请求间共享 draft 前向传播 |
| [#19871](https://github.com/ollama/ollama/pull/19871) | API：将 `top_p` 和 `min_p` 默认值对齐 llama.cpp（分别为 0.95、0.05） | 与上游采样行为对齐；被标记为关键 bug |

**已知性能问题：**

- **RX 5700 XT（RDNA1）上的 Vulkan 性能** — 提示词处理速度比上游 llama.cpp Vulkan 构建慢约 13 倍（40 vs ~540 t/s）。详见 #19747。
- **MLX prefix-cache 清除问题** — Inkling-2 Mini 在 ~64k token 后会清除整个 prefix-cache，导致每轮对话都需完整重新预填充。详见 #19819。
- **聊天截断会重新分词** — `/api/chat` 每丢弃一条消息就会重新渲染并重新分词剩余历史。详见 #19942。
- **图像标记构建 O(N²)** — 单个请求携带 64,000 张图像会使服务器阻塞一个 CPU 分钟。详见 #19885。

---

## 5. 稳定性与回归问题

### 严重（影响整个系统）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#19879](https://github.com/ollama/ollama/issues/19879) | Inkling-2-mini 导致 DGX Spark 机器崩溃（OOM + 高 CPU → 强制重启） | 已关闭 — 可能需要模型特定处理 |
| [#19927](https://github.com/ollama/ollama/issues/19927) | 升级 0.34.4 → 0.40.18 后多个模型在 DGX Spark 上不稳定 | 尚无 |

### 高（正确性 / API 合规性）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#19965](https://github.com/ollama/ollama/issues/19965) | `/v1/completions` 上 `max_tokens: 0` 未生成空响应，反而生成了文本 | 尚无 |
| [#19945](https://github.com/ollama/ollama/issues/19945) | 无效请求选项类型返回 HTTP 500 而非 HTTP 400 | [#19954](https://github.com/ollama/ollama/pull/19954) |
| [#19960](https://github.com/ollama/ollama/issues/19960) | `/v1/chat/completions` 的 logprobs 在未请求时也省略了 `top_logprobs` | [#19961](https://github.com/ollama/ollama/pull/19961) |
| [#19958](https://github.com/ollama/ollama/issues/19958) | `/v1/responses` 流式响应：reasoning 重用了 open 消息的 output_index | [#19959](https://github.com/ollama/ollama/pull/19959) |

### 中（UI / 解析器小问题）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#19930](https://github.com/ollama/ollama/issues/19930) | 模型选择器中的下载箭头不触发下载 | [#19966](https://github.com/ollama/ollama/pull/19966) |
| [#19950](https://github.com/ollama/ollama/issues/19950) | 应用页面将 Claude Desktop 误标为 Claude Code | [#19963](https://github.com/ollama/ollama/pull/19963) |
| [#19955](https://github.com/ollama/ollama/issues/19955) | cogito 解析器：`</think>` 后内容以空行开头 | [#19956](https://github.com/ollama/ollama/pull/19956) |
| [#19948](https://github.com/ollama/ollama/issues/19948) | deepseek3 解析器：相同的空行问题 | [#19590](https://github.com/ollama/ollama/pull/19590) |

---

## 6. 对应用开发者的影响

**1. 避免在 DGX Spark 或高端多 GPU 环境下升级到 0.40.18** — 该回归问题严重且未修复。如需最新特性，请先在预发环境测试。

**2. `max_tokens: 0` 的行为不符合预期** — 若你依赖此参数做纯预填充请求或 token 计数，当前行为会生成 token 而非返回空结果。临时方案：使用 `max_tokens: 1` 并丢弃输出，或提交 bug 报告。

**3. API 校验更严格了** — PR #19954 是一个破坏性改进：类型错误的选项现在返回 HTTP 400 而非 HTTP 500。如果你的客户端发送了格式错误的选项，你将收到清晰的错误响应而非不透明的服务器错误。

**4. macOS MLX 用户：留意对话历史丢失** — 随着 #19964 中的待修复补丁，64 GB Mac 上的长对话应能保留更多历史记录。监控内存使用情况；问题在于 ~17 GiB 可用内存仍未能阻止历史被清除。

**5. DeepSeek v4 和工具调用解析器正在活跃开发** — 若你使用 Qwen3.5 或带函数调用的 DeepSeek 变体，今日合入的流解析修复（#19590、#19956）将清理响应中开头多余的空行。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure
2. Preserve all technical identifiers (version numbers, PR/Issue numbers, URLs, file paths, etc.)
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me go through section by section and translate it.

Key terms to consider:
- LiteLLM - keep as-is
- LTS - keep as-is
- PR - keep as PR (commonly used in Chinese tech)
- Issue - keep as Issue
- MCP - keep as MCP
- OAuth - keep as OAuth
- API - keep as API
- token - keep as token or translate contextually (令牌/Token)
- streaming - 流式传输 or  streaming
- cost tracking - 成本追踪
- regression - 回归
- bug - bug or 缺陷
- feature request - 功能请求
- PR #xxxx - keep as-is
- v1.xxx.xx - keep as-is

Let me translate:

Title: LiteLLM 每日简报 — 2026-11-28

Let me translate each section carefully, maintaining the formal technical Chinese register.
</think>


# LiteLLM 每日简报 — 2026-11-28

---

## 1. 今日要点

LiteLLM 团队正在假期前解决多个关键的路由和翻译 bug，并有一项新 PR 旨在为 AWS Bedrock Mantle 提供原生 Claude 支持。三项并行 PR 修复了 MCP OAuth 生命周期问题（过期授权失效、撤销序列化及重新认证传播），标志着向生产级 MCP 集成迈进的决心。Gemini 图片 token 计数在 v1.110.2 中再次出现回归，这是影响计费的第二次复现。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| **v1.108.20** | LTS 补丁 | 新 LTS 版本；`ghcr.io/berriai/litellm:lts` 已指向此版本。包含 v1.108 分支的所有上游修复。 |

**迁移说明：**
- **Anthropic 结构化输出 API** — `output_format` 已迁移至 `output_config.format` 以实现 GA 级别对齐。Beta 请求头在过渡期内仍可使用，但不再必需。请相应更新 `map_openapi_params` 调用。参见 [PR #21635](https://github.com/BerriAI/litellm/pull/21635)。

---

## 3. 新模型与硬件支持

| 供应商 | 模型 / 功能 | 状态 | PR / Issue |
|----------|-----------------|--------|------------|
| **AWS Bedrock** | 通过 **Mantle provider** 原生托管 Claude | 进行中 | [PR #54946](https://github.com/BerriAI/litellm/pull/54946) |
| **AWS Bedrock** | Converse 路由 — 新增 Vertex/Bedrock 区域对齐请求头 | 进行中（堆叠 PR） | [PR #54612](https://github.com/BerriAI/litellm/pull/54612) |
| **ElevenLabs** | `diarized_json` 转录，支持多声道说话人分离 | 进行中 | [PR #31324](https://github.com/BerriAI/litellm/pull/31324) |
| **Vertex AI** | Gemini embeddings — 请求逐输入分发选项或警告 | 开放 | [Issue #38823](https://github.com/BerriAI/litellm/issues/38823) |

> **注意：** Mantle provider PR 尚未使用真实凭证测试；Python bridge 对齐仅通过成本映射表费率验证。

---

## 4. 性能与优化

| 领域 | 变更 | PR / Issue |
|------|--------|------------|
| **UI 构建** | Docker 构建现使用预构建 UI制品，存在 `index.html` 时跳过 `build_admin_ui.sh` — 缩短 `Dockerfile` 和 `Dockerfile.database` 的 CI 时间 | [PR #29092](https://github.com/BerriAI/litellm/pull/29092) |
| **Token 计数** | `token_counter` 现将 `tool_call["function"]["name"]` 纳入计数（除 `arguments` 外）— 修复函数调用 prompt 的计数不足问题 | [PR #31280](https://github.com/BerriAI/litellm/pull/31280) |
| **Anthropic 缓存成本计算** | 修复自定义定价路径中 `cache_read_input_tokens` 的双重计费问题 | [PR #31282](https://github.com/BerriAI/litellm/pull/31282) |
| **流式传输** | `stream_chunk_builder` 现按 `_hidden_params.created_at` 取最早 chunk 填充基础响应元数据 | [PR #31277](https://github.com/BerriAI/litellm/pull/31277) |
| **Vertex 成本追踪** | 自定义定价的 `model_info` 现可在 passthrough 成本追踪中生效 | [PR #31304](https://github.com/BerriAI/litellm/pull/31304) |
| **Redis 存储** | 所有原生存储新增 `flush_local()`，用于测试套件重置运行中的进程 | [PR #54921](https://github.com/BerriAI/litellm/pull/54921) |
| **Helm** | 新增 `extraLabels` 配置项，用于设置所有 chart 对象的通用标签 | [PR #31538](https://github.com/BerriAI/litellm/pull/31538) |
| **Guardrails** | 自定义脱敏标签现转发至 `ContentFilterGuardrail` 初始化 | [PR #30017](https://github.com/BerriAI/litellm/pull/30017) |

---

## 5. 稳定性与回归问题

按用户影响程度排序：

### 🔴 高严重性

| Issue | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **[#54804](https://github.com/BerriAI/litellm/issues/54804)** | **v1.110.2 中 Gemini 图片 `thoughtsTokenCount` 回归** — Google 按文本输出费率对此类 token 计费；#52220（v1.108.10）的修复发生了回退。影响 Vertex AI 图片模型成本追踪。 | 开放 | — |
| **[#49857](https://github.com/BerriAI/litellm/issues/49857)** | **MCP OAuth `dcr_bridge` 中继服务提供不匹配的 issuer** — 发现文档中的 issuer 为网关中继源，但 `/authorize` 重定向使用上游 AS；违反 RFC 9207 | 开放 | — |
| **[#54172](https://github.com/BerriAI/litellm/issues/54172)** | **Bedrock Converse `bedrock_tool_name_mappings` 是进程级全局变量** — 工具名称重写会影响代理上所有并发请求和 API key | 开放 | — |

### 🟡 中严重性

| Issue | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **[#53345](https://github.com/BerriAI/litellm/issues/53345)** | **Gemini → Anthropic 丢弃并行函数调用，重复 tool_result ID** — 当模型轮次中对同一函数有两个 `functionCall` 部分时丢失工具调用 | 开放 | — |
| **[#54855](https://github.com/BerriAI/litellm/issues/54855)** | **Anthropic `/v1/responses` 重放时 thinking/text 块顺序错乱** — 导致 Claude 5.x 拒绝（thinking 块绑定到错误的对话） | 开放 | — |
| **[#36548](https://github.com/BerriAI/litellm/issues/36548)** | **`LoggingWorker` 在事件循环切换时丢失队列** — 多线程 worker 池中 worker 任务挂起，日志队列丢失 | 开放 | — |
| **[#1264](https://github.com/BerriAI/litellm/issues/1264)** | **相同输入在流式和非流式场景下产生不同的 `prompt_tokens`** — 长期存在的 bug，影响 token 预算计算 | 开放（重新打开） | — |
| **[#28071](https://github.com/BerriAI/litellm/issues/28071)** | **`token_counter` 对 OpenAI 风格 `video_url` 内容块抛出 `ValueError`** | 开放 | — |
| **[#44623](https://github.com/BerriAI/litellm/issues/44623)** | **`uv.lock` 锁定 uvloop 0.22.1** — 双重关闭 socket bug 可能在取消连接后关闭无关连接 | 开放 | [1](https://github.com/MagicStack/uvloop/issues/738) |

### 🟢 低严重性（重要修复）

| Issue | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **[#54893](https://github.com/BerriAI/litellm/issues/54893)** | **清空团队"默认 Key 有效期"时保存 `""` 而非 `null`**，破坏成员 key 创建 | 开放 | — |
| **[#53787](https://github.com/BerriAI/litellm/issues/53787)** | **Azure AI Foundry `Microsoft-Decision-1.1` 缺失美国/欧盟数据区域定价** — 全球费率低估数据区域支出 | 开放 | — |
| **[#54436](https://github.com/BerriAI/litellm/issues/54436)** | **Vertex AI Claude 弃用日期存储为下限日期** — "不早于"日期被视为硬截止日期 | 开放 | — |
| **[#37810](https://github.com/BerriAI/litellm/issues/37810)** | **`key_type="llm_api"` key 在 `/model/info` 端点收到 403** — key 管理的权限缺口 | 已关闭 | — |

> **MCP OAuth 生命周期修复** — 针对过期授权处理的三项 PR（[#54812](https://github.com/BerriAI/litellm/pull/54812)、[#54816](https://github.com/BerriAI/litellm/pull/54816)、[#54815](https://github.com/BerriAI/litellm/pull/54815)) 于今日合并；这些修复解决了凭证失效和重新认证传播中的竞态条件。

---

## 6. 对应用开发者的影响

### 立即行动项

1. **生产环境中的 Gemini 图片工作负载请勿使用 v1.110.2** — `thoughtsTokenCount` 回归会导致静默的计费错误。请降级至 v1.108.20 或锁定 v1.108.x LTS，直至修复向后移植完成。

2. **若使用函数调用，请审计 token 预算** — [PR #31280](https://github.com/BerriAI/litellm/pull/31280) 中的修复纠正了函数名计数不足的问题。若您此前依赖 `token_counter` 做预算控制，更新后计数会略有上升。

3. **暂缓基于 Mantle 的 Claude 部署** — Bedrock Mantle provider（[PR #54946](https://github.com/BerriAI/litellm/pull/54946)）缺乏真实环境测试覆盖。请等待 Python bridge 对齐验证完成。

### 需提前准备的变更

- **Anthropic 结构化输出**：在 Beta 请求头移除前的未来版本中，将 `output_format` 迁移至 `output_config.format`。
- **MCP OAuth 流程**：若运行 MCP 连接的服务器，改进后的授权失效逻辑可能影响凭证刷新时机 — 请测试重新认证流程。
- **多线程代理部署**：在使用 `--num_workers > 1` 配合日志回调的场景中，需等待 [M#36548](https://github.com/BerriAI/litellm/issues/36548) 修复后才能避免可观测性事件丢失。
- **ElevenLabs 说话人分离**：新的 `diarized_json` 转录模式（[PR #31324](https://github.com/BerriAI/litellm/pull/31324)）将支持无需手动后处理的说话人分离转录文本。

### 监控建议

- 为 Bedrock Converse 路由设置 `litellm_remaining_api_key_requests_for_model` 告警，直至全局 `bedrock_tool_name_mappings` bug 解决。
- 若使用并行函数调用路由 Gemini → Anthropic，请监控工具调用丢失情况，直至 [#53345](https://github.com/BerriAI/litellm/issues/53345) 修复。

---

*简报数据来源：[BerriAI/litellm](https://github.com/BerriAI/litellm) GitHub，生成日期 2026-11-28。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Keep issue/PR references as-is
6. Use natural technical Chinese register

Let me translate section by section carefully.

Let me go through it:

# Unsloth Digest — 2026-11-28
= # Unsloth 日报 — 2026-11-28

## 1. Today's Highlights
= ## 1. 今日要点

The Unsloth team closed a cluster of infrastructure PRs around GGUF loading and memory management. Most notably, packed GGUF LoRA training received a constant-type compilation speedup and official support for Inkling 2 GGUFs, while Apple Silicon installations now default to torch 2.14.1 delivering 1.16–1.45× faster MPS image workloads. Windows integrated CUDA memory accounting received a long-needed fix to prevent over-allocation on carve-out GPUs.
= Unsloth 团队在 GGUF 加载和内存管理方面集中合并了一批基础设施类 PR。其中最值得关注的是：packed GGUF LoRA 训练获得了常量类型编译加速，并正式支持 Inkling 2 GGUFs；Apple Silicon 安装现在默认使用 torch 2.14.1，MPS 图像工作负载提速 1.16–1.45×。Windows 集成显卡的 CUDA 内存统计也终于得到修复，避免了在显存分片 GPU 上过量分配。

## 2. Releases & Breaking Changes


= ## 2. 版本发布与破坏性变更

- **No new releases** in the last 24 hours.
= 过去 24 小时内无新版本发布。

- **torch 2.14.1 rollout**: New Apple Silicon installs and Repair now pull torch 2.14.1 instead of 2.13. Existing installs retain their current torch version and are unaffected on re-run or `studio update`. Benchmarks show Studio MPS image workloads running 1.16–1.45× faster on M5 Max.
= **torch 2.14.1 全面推送**：新的 Apple Silicon 安装和 Repair 流程现已拉取 torch 2.14.1，替代之前的 2.13 版本。现有安装保留当前 torch 版本，重新运行或执行 `studio update` 不受影响。基准测试显示，在 M5 Max 上 Studio MPS 图像工作负载提速 1.16–1.45×。

## 3. New Model & Hardware Support
= ## 3. 新模型与硬件支持

I'll track the details carefully, focusing on the specific support items and their corresponding pull requests. The table highlights critical hardware and model support updates, with precise tracking of implementation details and associated pull requests.

| Item | Details | PR / Issue |
| Item | Details | PR / Issue |
| **Inkling 2 GGUFs** | `gguf_packed = True` now loads Inkling 2 Small/Mini GGUFs (`inkling2`, `inkling2_loop`) with quantized Linears and MoE expert stacks kept packed for LoRA training. | [#20080](https://github.com/unslothai/unsloth/pull/20080) |
| **Inkling 2 GGUFs** | `gguf_packed = True` 现在支持加载 Inkling 2 Small/Mini GGUFs (`inkling2`, `inkling2_loop`)，量化后的 Linear 层和 MoE expert stacks 在 LoRA 训练期间保持 packed 状态。 | [#20080](https://github.com/unslothai/unsloth/pull/20080) |

The table reveals comprehensive support for multiple advanced model architectures, highlighting significant improvements in quantization, tensor handling, and performance optimizations across various model types.

I'm seeing expanded capabilities for handling complex model configurations, particularly around GGUF support and hardware acceleration strategies. The focus spans multiple model families and optimization techniques.

The new entries indicate deeper integration with quantized models like Qwen3.5, addressing tensor fusion challenges and enabling more flexible deployment scenarios across different hardware platforms.

Performance improvements target critical areas like GPU memory management, preview rendering, and distributed training optimization, with specific attention to Windows and Apple Silicon environments.

The focus shifts to technical implementation details across different GPU architectures and frameworks, highlighting nuanced challenges in memory allocation, model loading, and distributed training strategies.

Emerging optimization techniques cover memory management, GPU resource allocation, and performance tuning, with specialized approaches for different hardware platforms and model architectures. I'm analyzing performance improvements across different GPU configurations, focusing on Windows CUDA memory optimization, GPU KV cache management, and preview rendering techniques. The goal is to reduce computational overhead and enhance memory efficiency for various deep learning models.

The current investigation targets specific GPU platforms like RTX Spark N1X and Windows integrated systems, identifying potential memory allocation and performance bottlenecks. By implementing targeted fixes, we can significantly improve GPU resource utilization and reduce unnecessary computational loads.

Key areas of focus include addressing memory miscalculations on Windows Strix Halo systems and optimizing hardware-specific configurations to prevent unnecessary computational overhead. 性能优化聚焦于推理速度、显存管理和推理质量。通过精细化张量处理、量化策略和并行计算技术，显著降低了计算开销。关键是识别并解决当前技术栈中的性能瓶颈，特别是在 LoRA 微调和 GGUF 模型处理方面取得了实质性进展。

跨平台兼容性仍是重点，尤其是为 Apple Silicon 开发者提供更高效的解决方案。torch 升级和 CUDA 内存管理改进将直接提升开发体验。

对于依赖自定义本地模型目录的开发者，当前的变通方案是确保模型位于标准路径下。多路径模型支持和高级训练策略仍需进一步开发。
</think>


# Unsloth 日报 — 2026-11-28

## 1. 今日要点

Unsloth 团队在 GGUF 加载和内存管理方面集中合并了一批基础设施类 PR。其中最值得关注的是：packed GGUF LoRA 训练获得了常量类型编译加速，并正式支持 Inkling 2 GGUFs；Apple Silicon 安装现在默认使用 torch 2.14.1，MPS 图像工作负载提速 1.16–1.45×。Windows 集成显卡的 CUDA 内存统计也终于得到修复，避免了在显存分片 GPU 上过量分配。

## 2. 版本发布与破坏性变更

- 过去 24 小时内无新版本发布。
- **torch 2.14.1 全面推送**：新的 Apple Silicon 安装和 Repair 流程现已拉取 torch 2.14.1，替代之前的 2.13 版本。现有安装保留当前 torch 版本，重新运行或执行 `studio update` 不受影响。基准测试显示，在 M5 Max 上 Studio MPS 图像工作负载提速 1.16–1.45×。

## 3. 新模型与硬件支持

| 项目 | 详情 | PR / Issue |
|------|---------|------------|
| **Inkling 2 GGUFs** | `gguf_packed = True` 现在支持加载 Inkling 2 Small/Mini GGUFs（`inkling2`、`inkling2_loop`），量化后的 Linear 层和 MoE expert stacks 在 LoRA 训练期间保持 packed 状态。 | [#20080](https://github.com/unslothai/unsloth/pull/20080) |
| **Qwen3.5 GGUFs（fused tensors）** | GGUF 加载器现已正确处理 `blk.N.attn_qkv_gate`（fused `attn_qkv \| attn_gate`）和 `blk.N.ssm_beta_alpha` 对，这些由当前 llama.cpp 转换器生成。 | [#20070](https://github.com/unslothai/unsloth/pull/20070) |
| **BF16 GGUF tensors** | Mapped GGUF 加载器现在将 BF16 tensors 以零拷贝的 `torch.bfloat16` 视图形式返回，而非原始 `uint8`。 | [#20097](https://github.com/unslothai/unsloth/pull/20097) |
| **Qwen-Image-2.1 per-row batch layout** | 修复了多 prompt 图像批次中跨行 RoPE 填充损坏问题；A100 流式吞吐提升 2.12×。 | [#20072](https://github.com/unslothai/unsloth/pull/20072) |
| **4-bit QLoRA without bitsandbytes** | Unsloth 注册了自己的 `bitsandbytes` 替身包，使 QLoRA 可以在无法加载 bitsandbytes 原生库的机器上运行（无 wheel、ROCm 缺少内核、Windows ARM）。 | [#20096](https://github.com/unslothai/unsloth/pull/20096) |
| **DSpark auto-selection guardrail** | Auto 模式现仅在声明了 `draft-dspark` 特性的构建上推广 DSpark，并在包含 DSpark 提速修复的首个构建上启用，防止旧版预编译二进制文件回退。 | [#20087](https://github.com/unslothai/unsloth/pull/20087) |

## 4. 性能与优化

| 领域 | 改动 | 影响 | PR / Issue |
|------|--------|--------|------------|
| **Packed GGUF LoRA 训练** | 在 `torch.compile` 下固定 ggml types/shapes；复用重计算；Zoo 内核默认启用。 | Packed GGUF 权重训练迭代更快。 | [#20091](https://github.com/unslothai/unsloth/pull/20091) |
| **Windows 集成显卡 CUDA 内存上限** | Windows 集成显卡（如 RTX Spark N1X）上，GGUF/llama.cpp 分配量现以 Windows 提交限额为上限，而非被高估的 CUDA 报告值（报告 112,350 MiB，可用仅 64 GB）。 | 避免因显存报告虚高导致的 OOM。 | [#20086](https://github.com/unslothai/unsloth/pull/20086) |
| **GGUF KV 缓存 GPU 分片权重** | KV GPU 分片估算现计入 SWA 层和不同序列长度桶，不再简单地以 `gpu_layers / (block_count + 1)` 均分。 | 非标准架构的内存规划更准确。 | [#20082](https://github.com/unslothai/unsloth/pull/20082) |
| **Live denoise preview 卸载** | Preview 工作（投影、VAE 解码、JPEG 编码）在没有可见页面监听的渲染中不再产生任何开销。 | 后台渲染零开销。 | [#20081](https://github.com/unslothai/unsloth/pull/20081) |
| **MiniMax-H3 live denoise preview** | 使用拟合线性 latent-to-RGB 映射（与 LTX-2.5、Wan 2.2、HunyuanVideo-1.5 同机制），无需小解码器或额外下载。 | MiniMax-H3 渲染期间提供可视化反馈。 | [#20094](https://github.com/unslothai/unsloth/pull/20094) |
| **Portable resume DTensor 卸载** | 加载的 DTensor 优化器状态量在移交给卸载器前保留在 host 端，而非先复制到设备。 | `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1` 下 checkpoint 恢复更快。 | [#20092](https://github.com/unslothai/unsloth/pull/20092) |
| **Native FSDP2 MoE expert stacks** | Packed expert stacks（NVFP4/MXFP8/MXFP4/GGUF）现保持 replicated 状态，而非传递给 `fully_shard` 导致崩溃。 | 支持 MoE GGUF/packed 模型的 FSDP2 训练。 | [#20089](https://github.com/unslothai/unsloth/pull/20089) |
| **`load_in_8bit = "int8"` 选择** | 显式选择旋转 int8 LoRA 基座，在 16 位加载时等同于 `float8_training = "int8_lora"`。 | `FastLanguageModel` 和 `FastModel` 行为一致。 | [#20095](https://github.com/unslothai/unsloth/pull/20095) |
| **GGUF fast_inference 守卫** | 使用 `gguf_file` 参数的 `load_vllm` 现在会拒绝 fast_inference 并给出明确错误，而非静默丢弃请求。 | 不支持的配置快速失败。 | [#20098](https://github.com/unslothai/unsloth/pull/20098) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **Windows Desktop v0.1.925-beta**：`install.ps1` HashMismatch，被卡巴斯基 Adaptive Anomaly Control 阻止。 | OPEN — [#19908](https://github.com/unslothai/unsloth/issues/19908) | — |
| **高** | **AMD RX 6700S 未被检测到**（Windows 11 Unsloth Desktop 0.1.917-beta，gfx1032）。 | OPEN — [#17874](https://github.com/unslothai/unsloth/issues/17874) | — |
| **中** | **Remote MCP header 不匹配**：通过 GitHub MCP 服务器使用大型 `create_or_update_file` payload 时偶发 "missing Mcp-Param-owner header"。 | OPEN — [#19876](https://github.com/unslothai/unsloth/issues/19876) | — |
| **中** | **Studio MLX 模型选择器**：加载本地 FP16 checkpoint 后应用了 4 位运行时量化。 | OPEN — [#20045](https://github.com/unslothai/unsloth/issues/20045) | — |
| **中** | **CSV 聊天导入**：`developer` 行被当作用户消息处理；表头缺失且以 `developer` 行开头的 CSV 会完全丢失该行。 | CLOSED — [#19810](https://github.com/unslothai/unsloth/issues/19810) | （窗口内未明确合并 PR） |
| **中** | **翻译功能不工作**：必须处于检测语言模式才能使用。 | CLOSED — [#19759](https://github.com/unslothai/unsloth/issues/19759) | — |
| **中** | **MLX 死锁 + TypeError**（`LiquidAI/LFM3-1.7B-MLX-4bit`，Apple Silicon）。 | CLOSED — [#19749](https://github.com/unslothai/unsloth/issues/19749) | — |
| **低** | **CSM-1B TTS notebook**：每个训练片段末尾存在超出分布的 Mimi 帧（pad 音频至 1920 samples）。 | OPEN — [#19438](https://github.com/unslothai/unsloth/issues/19438) | — |
| **低** | **工具驱逐竞态**：长时间工具驱动的文档分析可能在上下文填满前、`compact_completed_tool_arguments` 运行前丢失更早的工具结果。 | OPEN（重构 PR）— [#18516](https://github.com/unslothai/unsloth/pull/18516) | [#18516](https://github.com/unslothai/unsloth/pull/18516) |
| **低** | **Windows Strix Halo 显存低估**：BIOS UMA 预留减少 Windows 可见 RAM 时显存估算偏低。 | OPEN — [#19768](https://github.com/unslothai/unsloth/issues/19768) | — |

## 6. 对应用开发者的影响

- **Windows CUDA 用户**：内存上限修复上线后应更新或重新运行——集成显卡（RTX Spark N1X）上的 OOM 可能缘于虚高的显存报告，而非实际显存耗尽。
- **GGUF LoRA 微调者**：常量类型编译加速和 Inkling 2 支持带来了显著更快的训练迭代；使用 Inkling 架构时请测试 `gguf_packed = True`。
- **Apple Silicon 开发者**：全新安装可获得约 20–45% 的图像工作负载提速（来自 torch 2.14.1）。现有安装可通过 `UNSLOTH_TORCH_UPGRADE=1` 或 Desktop Repair 触发升级。
- **多路径模型配置**：多路径本地模型目录（issue #18896）仍未实现——若你依赖默认 HuggingFace 缓存路径以外的自定义本地模型目录，当前变通方案是确保模型放在标准路径下。
- **DPO 训练**：仍在路线图上（issue #19943），目前仅支持 SFT 和 CPT。
- **MCP 工具开发者**：通过 Remote GitHub MCP 服务器使用 Unsloth Desktop 时，大型 payload 存在偶发 header 不匹配（issue #19876），需留意。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*