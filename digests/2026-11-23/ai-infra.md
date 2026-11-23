# AI 基础设施日报 2026-11-23

> 生成时间: 2026-11-23 03:01 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep technical terms, URLs, project names, issue/PR references as-is
4. Use natural technical Chinese register

Let me carefully translate this report section by section.
</think>


# AI 基础设施生态文摘 — 2026-11-23

## 1. 生态概览

AI 推理基础设施领域正围绕三个明确层级——底层推理引擎、网关路由层和训练/微调框架——实现收敛，同时在硬件厂商维度上呈现分化态势。当日活动显示 Blackwell（SM12x）和 AMD ROCm（gfx942/gfx1200）是开发最活跃的两个目标架构，Humming 量化（而非 Marlin）正在成为 NVIDIA 最新芯片上的事实标准。新的推理交易所模型（通过 LiteLLM 的 Architect）预示着动态竞价计算定价的趋势，而 llama.cpp 持续扩大其作为本地及边缘部署可移植参考运行时的角色。横跨六个项目，共合并了 40+ PR，尚有 15+ 严重/高危 bug 待修复，表明新模型支持的速度正在超过代码加固的承载能力。

---

## 2. 活动对比

| 项目 | 类型 | Issues（活跃） | PRs（活跃） | Releases（24h） | CI 状态 |
|---------|------|:---------------:|:------------:|:--------------:|------------------|
| **vLLM** | 推理引擎 | 17 trending | 20+ | 无 | 稳定；活跃回归追踪 |
| **SGLang** | 推理引擎 | 17 trending | 20+ | 无 | **5 broken + 18 flaky tests**（CI 维护模式已启用） |
| **llama.cpp** | 本地运行时 | 17 shown | 10 commits | **10 commits** | 标准 CI |
| **Ollama** | 本地平台 | 17 shown | ~15 | 无 | 标准 CI |
| **LiteLLM** | 网关/路由层 | 17 shown | 15+ | 无（LTS 分支） | 标准 CI |
| **Unsloth** | 训练+推理 | 41 total | 20+ | 无 | Shell 注入 CI 修复已合并 |

**分析：** llama.cpp 在提交频率上领先，这反映了其作为可移植参考实现、频繁进行内核级别变更的角色。SGLang 的 CI 健康度最令人担忧——scheduled runs 中存在 5 个 broken tests，可能延误 1.0 版本的发布里程碑。Unsloth 的 open issue 量最高（41），与其同时承担训练框架和内嵌推理层的双重角色相符。

---

## 3. 模型支持竞赛

新模型覆盖的争夺集中在四个模型上：DeepSeek-V4.1、Qwen3.8/Qwen3-VL、Inkling 2 和 Gemma 4。

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|
| **DeepSeek-V4.1-Flash** | ✅ DEP kernels（B300） | ✅ FP8 MegaAttention、NPU prefill graph | — | — | — |
| **Qwen3.8（MoE，27B/38B）** | ✅ MI325X TP4 FP8 fused MoE | ✅ QSA 缓存分片（hybrid） | ✅ 测试快照已更新 | ✅ VRAM 回归问题调查中 | — |
| **Qwen3-VL（多模态）** | 🟡 RFC open（ViT CUDA graph） | ✅ TP 分布式图像预处理 | — | 🔴 Apple Silicon 上崩溃 | — |
| **Inkling 2 / Inkling 2 Mini** | — | — | ✅ DSpark speculator、chunked masks | ✅ 修复了 loader 回归问题 | ✅ 训练支持、checkpoint 对齐 |
| **Gemma 4** | ✅ Frozen-KV CUDA 校验 kernel | ✅ 多模态 CUDA graph | — | — | — |
| **FLUX.3 / LTX-Video** | — | — | — | — | ✅ KV identity、cache reads、VAE 修复 |
| **SenseNova Loop** | — | — | ✅ 已合并支持 | — | — |
| **Architect 交易所** | — | — | — | — | —（仅 LiteLLM） |

**覆盖广度领先者：** vLLM 和 SGLang 在两个商业价值最高的模型（DeepSeek-V4.1、Qwen3.8）覆盖上持平，vLLM 在 Blackwell 内核成熟度上领先，SGLang 在 NPU（Ascend A5）和 AMD ROCm 上领先。llama.cpp 作为 Inkling 2 生态的参考运行时拥有主导地位。Ollama 和 Unsloth 是仅有的一线本地/边缘部署内嵌推理的项目——Ollama 的 Metal kernel 工作（PR #19843）和 Unsloth 的 diffusion 训练 pipeline 使其成为非云场景的首选。

---

## 4. 性能前沿

当日的优化工作集中在五个领域，按跨项目活动量排序：

| 优化方向 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|-------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **量化 kernels** | ✅ Humming > Marlin on SM12x，MXFP4 aliases | — | — | — | ✅ QAT nvfp4/mxfp8 biases | — |
| **MoE / expert routing** | ✅ DeepSeek-V4.1 DEP kernels，EPLB 修复 | ✅ AMD FP8 MoE（+41% P50） | ✅ Expert copy 修复（多节点） | — | — | — |
| **KV cache / prefix** | ✅ 联合 GPU/CPU 查找 | ✅ Prefix cache 命中率指标 | — | ✅ VRAM 核算修复、hybrid parallelism | ✅ 按需释放 CUDA graph | ✅ 语义缓存（adaptive threshold RFC） |
| **Speculative decoding** | ✅ NVFP4 draft head、MTP 诊断 | ✅ XPU speculative decode 修复 | ✅ DSpark（Inkling 2） | — | — | — |
| **后端特定 kernels** | — | ✅ AMD QSA grouped Triton | ✅ SVE GEMV、mtmd FFT | ✅ Metal BF16/NVFP4 fused kernels | ✅ ROCm PrefixGrouper、attention offload | — |
| **分布式推理** | ✅ 原生 gRPC workers、Mooncake | ✅ AMD QSA 缓存分片 | — | — | — | ✅ Rust gateway 并行请求限流、model capacity |

**主导主题：** AMD MI325X ROCm 优化是当日跨项目活动量最大的单一方向，SGLang 报告 DeepSeek-V4.1 FP8 MoE 工作负载上 P50 交互延迟改善 +41%（PR #51001），Unsloth 合并了 ROCm PrefixGrouper 和 attention offload 修复。这反映了 DeepSeek 系列架构在 AMD 硬件上日益增长的生产部署量。

---

## 5. 分层定位

六个项目在推理技术栈中占据不同层级：

```
┌─────────────────────────────────────────────────────────┐
│  Gateway / Router         LiteLLM                       │
│  (多provider、认证、      (虚拟密钥、限流、              │
│   成本管理)                语义缓存)                     │
├─────────────────────────────────────────────────────────┤
│  推理引擎           vLLM  ───  SGLang                   │
│  (TP/PP/EP、CUDA graphs、 (私有协议)  (相同            │
│   speculative decode)      + gateway 兼容性)            │
├──────────────────┬──────────────────┬────────────────────┤
│  本地运行时       │  本地平台        │  训练/微调         │
│  llama.cpp       │  Ollama          │  Unsloth           │
│  (可移植 GGUF，   │  (开箱即用，     │  (LoRA/QLoRA、GRPO，│
│   全后端支持)      │   Metal/Vulkan， │  diffusion 训练    │
│                   │   Docker 等)     │  + 内嵌推理)       │
└──────────────────┴──────────────────┴────────────────────┘
```

**关键区分：**
- **vLLM 和 SGLang** 面向云规模、多 GPU 推理，追求最大吞吐量。SGLang 提供功能超集（RadixAttention、受限解码、RL 训练钩子），但 vLLM 在生产部署份额和更快的回归响应周转上保持领先。
- **llama.cpp** 是唯一将全硬件矩阵（CPU、GPU、NPU、Vulkan、Metal、OpenCL、SYCL、XPU、ZSP、WASM）作为一等公民目标的项目。其每日 10 commits 的节奏反映了这一广度。
- **Ollama** 以开发者体验（单二进制、自然语言模型管理、Docker 对齐）而非原始性能为差异化点。
- **Unsloth** 是唯一跨越训练/推理边界的项目，内嵌 llama.cpp 推理层。其优化面（diffusion 训练、ROCm、Apple Silicon、翻译）与其他项目完全不同。
- **LiteLLM** 是唯一的网关层，提供多 provider 路由和成本可见性——随着 Architect 风格的竞价模型进入生态，这一点日益关键。

---

## 6. 趋势信号

### 信号 1：硬件碎片化正在加速
六个不同后端（CUDA、HIP/ROCm、NPU、Metal、Vulkan、XPU）现在都在活跃进行内核开发。SGLang 新增 Ascend A5 prefill graph 支持（PR #52427）和 XPU RL 特性启用（PR #39891）表明 NPU 和 Intel XPU 正从"实验性"转向"生产支持"状态。基础设施团队应规划异构硬件预算，避免 CUDA-only 的假设。

### 信号 2：Blackwell 交接在即
vLLM 在 SM12x 上推进 Humming/Marlin 迁移（PR #65676、#63777），SGLang 在 SM120 上调查 GDN decode kernel（issue #51208），表明 Blackwell（SM12x）优化已进入最终加固阶段。预计 RTX PRO 6000 和 GB10 将在 4–6 周内成为 vLLM 和 SGLang 的生产推荐配置。还在用 Ampere（SM80/86）的团队不应期待从固件更新中获得等同 Blackwell 的性能提升。

### 信号 3：AMD ROCm 对 DeepSeek 架构的生产可用性已就绪
SGLang 在 MI300X 上对 DeepSeek-V4.1 FP8 MoE 报告了 +41% P50 端到端交互延迟改善（PR #51001），这是一个里程碑。结合 Unsloth 的 ROCm PrefixGrouper 和 attention offload 工作，AMD MI300X 现在是 H100/H200 对 MoE 工作负载的合理成本性能替代方案。这对采购决策有直接影响——单个 MI300X 节点约 $15k vs. 单个 H100 SXM 约 $30k，如果负载符合架构特性，经济账是合算的。

### 信号 4：Inkling 2 正在成为一等公民
四个项目（llama.cpp、Ollama、Unsloth、SGLang）目前都有活跃的 Inkling 2 支持——DSpark speculator、GGUF loader、训练对齐和 Metal decode kernels。Inkling 2 的架构（基于循环的推理，带连续思维 token）与标准 transformer 解码器需要不同的推理原语。生态系统的适应速度比此前任何非 OpenAI 模型都快。

### 信号 5：LLM 框架中的 ReDoS 漏洞是生产风险
LiteLLM 中 `secret_redaction.redact_string()` 未修复的 ReDoS（issue #32353）和 SGLang 中 `/parse_function_call` 的灾难性正则回溯（issue #52090）属于同一类漏洞——大错误字符串或畸形请求触发事件循环阻塞。两者都部署在生产环境中作为 API 服务器。团队应在下次事故前审查请求大小限制和错误日志路径。

### 信号 6：Agentic 模式正在推动基础设施变革
工具调用语法处理、流式函数参数、并行工具调用和 RL 训练钩子今天出现在四个项目中。从聊天补全向带流式工具调用的 `/v1/messages` agentic API 的转变，正在推动流式元数据处理（LiteLLM #45348）、token 解析（SGLang #52429）和语法约束（llama.cpp #32818）的变更。如果你的应用使用带工具的 OpenAI/Anthropic 兼容 API，请在升级任何框架前针对这些边界情况测试集成。

---

**基础设施团队的核心结论：** Blackwell 优化进入最终阶段；AMD MI300X 现在是 MoE 工作负载的可靠生产路径；Inkling 2 支持在各本地运行时中已趋成熟；agentic API 模式（流式工具调用、并行函数调用）正在制造新的兼容差距，升级前需要测试。在下次事故发生前，拨出工程时间审查 LLM 框架部署中的 ReDoS 暴露面。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me analyze the content carefully:

1. This is a technical report about the vLLM GitHub project
2. It contains various sections: Today's Highlights, Releases & Breaking Changes, New Model & Hardware Support, Performance & Optimization, Stability & Regressions, What This Means for Application Developers
3. There are tables with issue/PR numbers
4. There are technical terms, code identifiers, API names, etc.
5. I need to translate naturally into Chinese technical register while preserving the structure

Let me translate section by section:

Title: vLLM Project Digest — 2026-11-23

Key terms to handle:
- Blackwell, SM12x, RTX PRO 6000, GB10, B300, A100, B200, GB10 - keep as-is
- CUDA Graph - CUDA图
- vLLM - keep as-is
- Marlin, Humming - keep as-is (these are quantization backend names)
- DEP - keep as-is
- MoE - MoE (Mixture of Experts)
- KV cache - KV缓存
- LoRA - LoRA
- prefix cache - 前缀缓存
- INT4/INT8/FP8/MXFP4/MXFP8/NVFP4/MXFP6 - keep as-is (numeric codes)
- GPTQ/AWQ - keep as-is
- SPEC Decode - 推测解码
- MTP - MTP
- EAGLE - EAGLE
- RFC - RFC（Request for Comments）
- PR - PR（Pull Request）
- Issue - Issue（问题单）
- MultiprocExecutor - MultiprocExecutor
- DeepSeek-V4.1-Flash, DeepSeek-V4-Flash-0731, Qwen3.8-Flash-Next, Mistral-24B, GLM-V, Kimi K2.5 - keep as-is


- ViT - ViT
- GQA - GQA
- Triton - Triton
- EAGLE-style drafters - EAGLE式draft模型
- Mooncake - Mooncake
- XPU - XPU
- Intel - Intel
- DCP - DCP
- ROCm - ROCm
- SageMaker - SageMaker
- gRPC - gRPC
- HF3FS - HF3FS
- PCP - PCP
- LoRA - LoRA
- E=512, hidden=2560 - keep numeric
- sm_107 - keep
- GB200, GB10, RTX 50xx, RTX PRO 6000, A100, B200, B300, MI325X - keep as-is

Now I can proceed with translating the report while maintaining technical accuracy and natural Chinese expression.
</think>


# vLLM 项目速览 — 2026-11-23

## 今日要点

vLLM 持续推进 Blackwell（SM12x）优化，两个 PR（#65676、#63777）已合入，在 RTX PRO 6000 / GB10 上将 Humming 量化后端设为 INT4 g128 权重的首选，取代旧的 Marlin 内核。MultiprocExecutor 中的一个关键竞态条件在 PR #69313 中修复——worker 失败通知可能丢失。DeepSeek 团队为 B300 提交了专用 DEP 融合 MoE 内核（PR #68366）。社区正在 issue #38175 中热议 ViT 编码器管线的未来，51 条评论聚焦于多模态模型的完整 CUDA 图捕获支持。

---

## 版本与破坏性变更

过去 24 小时无新版本发布。升级部署时请注意：

- **SageMaker 集成改为 opt-out**：PR #68638 在 Python 前端新增 `--disable-sagemaker-integration` 标志。现有 SageMaker 部署不受影响；独立部署升级时需审查该标志。

---

## 新模型与硬件支持

| 范围 | 详情 | PR/Issue |
|-------|---------|----------|
| **Blackwell SM12x** | INT4 g128 权重的量化后端首选 Humming 而非 Marlin，覆盖 RTX PRO 6000、RTX 50xx 和 GB10 | #65676, #63777 |
| **DeepSeek-V4.1-Flash** | DEP 特化融合 EP 通信内核，适用于 B300（DEP2/4/8） | #68366 |
| **Qwen3.8-Flash-Next** | MI325X TP4 FP8 融合 MoE 新的 Triton 配置（E=512，hidden=2560） | #64662 |
| **XPU（Intel）** | XPU 平台的 DCP 和缓存操作测试已合入 | #64847 |
| **Rubin（sm_107）** | 持续推进支持中；构建支持此前已合入 | #49735 |
| **MRV2 PCP + LoRA** | 需求：prefilled context parallelism 下支持 attention-only LoRA | #68890 |

---

## 性能与优化

**量化内核**
- 当 Marlin GEMM 输出瓦片数较少时（如 4096→64 投影），施 K 分割上限，避免相较 cuBLAS 基线慢 3–7×。PR #69231 覆盖 A100。
- Humming 现已覆盖此前仅 Marlin 支持的所有格式（INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6），覆盖 SM80、SM100 和 SM12x，并为 Hopper 和 Blackwell 开辟了架构特定路径（#65560）。

**MoE 性能**
- DeepSeek-V4.1-Flash on B300：专用 DEP 内核将写操作直接路由至 dispatch buffer，并向各请求持有者发布 expert finalize，降低 EP 配置下的通信开销。

**内存与缓存**
- KV offload 部署现支持 GPU/CPU 联合前缀缓存查询，针对 DeepSeek V4 Flash Vision 部署中观察到的 >10% 缓存未命中减少（#57325）。
- HF3FS KV 连接器现等待被抢占请求的保存完成后再复用块（#69271）。

**推测解码**
- Draft LM-head 量化格式现可通过硬件插件 API 接入（#67908）。
- MXFP4 `moe_backend` 别名（单变体）现已接受参数解析，解放此前无法到达的内核路径（#62898）。

---

## 稳定性与回退

| 严重性 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | MultiprocExecutor 存在竞态：（is_failed, failure_callback）的 check-then-act 未加锁，可能丢失 worker 失败通知 | Open | #69313 |
| **高** | Marlin MoE 输出顺序依赖 within-expert token 排序（正确性缺陷） | Open | — |
| **中** | top-p 归一化下溢时 `apply_top_k_top_p_triton` 保留完整行（NaN 传播） | Open | — |
| **中** | GQA group >16 且非 16 倍数时 `decode_attention_fwd` 读取错误的 KV head | Open | — |
| **中** | Mistral tokenizer 在保留特殊 token 时破坏 emoji/多字节字符 | Open | — |
| **中** | MoE 层跨多 pipeline stage 时 EPLB 启动失败（DeepSeek V2/V3 默认配置） | Open | #66087 |
| **中** | Ripple 解析器在普通文本中丢失 tool-call/think 标签后的全部内容 | Open | — |
| **低** | DeepSeek-V4-Flash-0731 每 token KV 缓存用量约为 preview checkpoint 的 8× | Open（不活跃） | — |
| **低** | Modelopt 量化 Mistral-24B 在 B200 上 FP8 prefill 比 BF16 慢 2× | Open（不活跃） | — |

---

## 对应用开发者的意义

1. **Blackwell 用户（RTX PRO 6000、GB10）**：升级路径明确——INT4 和 MXFP8 MoE 的首选量化后端已切换为 Humming。若在上述 GPU 上使用 Marlin 遇到预热报错，修复方案在 #65676 / #63777。

2. **生产 RL / 训练流水线**：issue #68777 追踪 RL 框架对 vLLM 的 monkey patch。若你在此技术栈中运作，请跟踪该 RFC——它旨在暴露公共 API，让你移除临时方案。

3. **多模态延迟**：issue #38175 是需要关注的关键线索。完整 ViT CUDA 图支持将降低 Qwen3-VL、GLM-V 和 Kimi K2.5 的 prefill 开销。若你服务多模态模型，请点赞并关注。

4. **Blackwell 上的推测解码**：NVFP4 draft head 验证正在向 GB10 以外扩展。若你在 RTX 50xx 上使用 MTP 或 EAGLE 式 drafter，预期覆盖范围和诊断信息将改善（#66101、#62896）。

5. **网关的 token 直传**：RFC #65502 提议在 `/v1/chat/completions` 及相关路由上提供转发 prompt token ID 的一等支持。若你运营的路由器在入口处做 token 化用于前缀缓存路由，这将消除 vLLM 侧的冗余 token 化。

---

*数据来源：2026-11-23 的 github.com/vllm-project/vllm。链接使用上游仓库的 issue/PR 编号。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report about SGLang into Simplified Chinese. I need to translate the content while maintaining the exact Markdown structure, preserving URLs, issue numbers, code spans, and keeping project names/identifiers in their original form.

Let me translate this carefully section by section, using natural technical Chinese.
</think>


# SGLang 摘要 — 2026-11-23

## 1. 今日要闻

SGLang 项目正在积极完善基础设施，为 1.0 稳定版发布做准备，本期核心工作集中在内核修复和多后端优化。今日重点：Mamba2 内核的关键修复可防止非有限值在同批次内跨序列泄漏；DeepSeek-V4.1 FP8 MegaAttention prefilled 工作区已登陆 NPU；AMD ROCm 路径新增了分组 Triton 内核用于 QSA 评分，显著降低 decode 开销。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 |
|------|-------|
| **SGLang 1.0 发布追踪** | Issue [#50045](https://github.com/sgl-project/sglang/issues/50045) 追踪即将发布的 1.0 稳定版。重点方向：巩固现有功能、将隐式配置变更替换为显式报错、明确 1.x 系列的兼容性策略。从 0.5.x 升级可能涉及改动——请参阅 issue 中的升级说明。 |

**过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 类别 | 项目 | PR/Issue | 说明 |
|----------|------|----------|-------|
| **NPU** | DeepSeek-V4.1 Ascend A5 prefill 图 | [#52427](https://github.com/sgl-project/sglang/pull/52427) | 将 ratio-1/2 压缩器、索引器（QLI/QSLI/candidate）和 MQSMLA attention 捕获为可回放的图段 |
| **多模态** | Qwen3-VL TP 分布式图像预处理 | [#52426](https://github.com/sgl-project/sglang/pull/52426) | 在 TP ranks 间分布 resize、归一化、patchification；可选特性，缓解单 GPU 预处理瓶颈 |
| **NPU** | CANN 9.2.0 + NPU kernel 2026.11.0.post12 | [#51818](https://github.com/sgl-project/sglang/pull/51818) | Docker 和 CI 对齐更新，针对 Ascend NPU 栈；维持 amd64/arm64 的 a3/950 设备配置 |
| **QSA** | Qwen3.8 混合模型 QSA 缓存分片 | [#43527](https://github.com/sgl-project/sglang/pull/43527) | 使用 page-interleave 布局对序列长度相关的 QSA 原始 K/V 历史和压缩缓存进行分片 |

---

## 4. 性能与优化

| 领域 | 变更 | PR/Issue | 指标 |
|------|--------|----------|-------|
| **NVIDIA / Frozen-KV MTP** | 为 Gemma 4 添加可选的表门控 CUDA verify 内核 | [#44830](https://github.com/sgl-project/sglang/pull/44830) | 降低投机验证期间的前缀遍历开销 |
| **AMD / QSA** | ROCm（MI355X）QSA decode 评分分组 Triton 内核 | [#50702](https://github.com/sgl-project/sglang/pull/50702) | 针对并发 48 的 agentX 追踪（NEXTN MTP，44 请求 × 4 行 = 每步 176 个 decode 行） |
| **AMD / DeepSeek-V4.1** | 在 gfx942 上从 BF16 权重扩展为 group32 FP8 dense linears 提供服务 | [#51001](https://github.com/sgl-project/sglang/pull/51001) | **P50 端到端交互性 +41.0%，P90 +37.2%，单 GPU 输出吞吐 +18.8%**（8× MI300X，AgentX trace 回放，并发 32） |
| **XPU / Diffusion** | MiniMax-H3 DiT 位精确融合 XPU 内核 | [#48910](https://github.com/sgl-project/sglang/pull/48910) | 用融合内核替换标量 fallback 路径 |
| **NVIDIA / Gemma 4** | 为多模态 Gemma 4 启用可中断 prefill CUDA graph | [#52404](https://github.com/sgl-project/sglang/pull/52404) | 解除图像输入的 CUDA graph 加速限制；此前受架构白名单约束 |
| **多模态 / Qwen3-VL** | 在 TP ranks 间分布式图像预处理 | [#52426](https://github.com/sgl-project/sglang/pull/52426) | 缓解共置 TP serving 路径上的单 GPU 预处理瓶颈 |
| **Intel / RL** | 在 Intel XPU 上启用 RL 功能 | [#39891](https://github.com/sgl-project/sglang/pull/39891) | 将 RL 基础设施（权重更新、张量序列化）移植到 XPU 后端 |
| **指标** | 滑动窗口前缀缓存命中率（`--enable-prefix-cache-hit-rate-window`） | [#45719](https://github.com/sgl-project/sglang/pull/45719) | 报告最近 1000 个 admitted 请求的 token 加权命中率；vLLM CachingMetrics 兼容语义 |

---

## 5. 稳定性与回归问题

按预估严重性和影响范围排序：

### 严重（服务降级 / 数据正确性）

| # | Issue | 严重性 | 状态 | 修复 PR |
|---|-------|----------|--------|--------|
| 1 | **[Bug] Rust 扩展加载器：`cargo --version` 探测在 launcher spawn 上下文中可能死锁** — 多节点部署时确定性启动挂起 | **严重** | Open | — | [#49108](https://github.com/sgl-project/sglang/issues/49108) |
| 2 | **[Bug] `POST /vertex_generate` 中 `instances` 列表无界增长导致文件描述符耗尽** — ZMQ REQ socket 泄漏引发 "Too many open files" 及服务降级 | **严重** | Open | — | [#52345](https://github.com/sgl-project/sglang/issues/52345) |
| 3 | **[Bug] `/parse_function_call` 正则表达式灾难性回溯** — 嵌套量词 + `re.DOTALL` 模式下的 `.*` 导致单个约 167 字节请求阻塞事件循环 | **严重** | Open | — | [#52090](https://github.com/sgl-project/sglang/issues/52090) |
| 4 | **[Bug] GLM-5.3-Flash NVFP4 TP4 在推理中陷入循环，无法给出最终答案** — B200/B300 上 | **高** | Open | — | [#41939](https://github.com/sgl-project/sglang/issues/41939) |
| 5 | **[Bug] 调度器崩溃**（`'list' object has no attribute 'tolist'`）— 包含 `token_ids_logprob` 的混合批次上 | **高** | Closed（inactive） | — | [#34719](https://github.com/sgl-project/sglang/issues/34719) |

### 中等（结果错误 / 精度问题）

| # | Issue | 严重性 | 状态 | 修复 PR |
|---|-------|----------|--------|--------|
| 6 | **[Perf] Mamba2 `_chunk_scan_fwd_kernel` 在 serving 期间编译** — NemotronH 首个大 prefill 每个 TP rank 卡顿约 1.45 s | **中等** | Open | [#51342](https://github.com/sgl-project/sglang/pull/51342) |
| 7 | **[Bug] AMD decode attention：MLA 形状 Triton decode 在 ragged 批次上返回 NaN / 错误行** — gfx1151（Strix Halo） | **中等** | Open | — | [#48967](https://github.com/sgl-project/sglang/issues/48967) |
| 8 | **[Bug] Kimi-K3 EP32：使用 MegaMoE 时严重重复和精度回归** — DeepEP 上未观察到 | **中等** | Closed（inactive） | — | [#40751](https://github.com/sgl-project/sglang/issues/40751) |
| 9 | **[Bug] GLM-5.3-Flash vision 在 main 上静默损坏** — 固定的 `transformers==5.12.1` 缺少 glm5_next | **中等** | Closed（inactive） | — | [#39831](https://github.com/sgl-project/sglang/issues/39831) |
| 10 | **[Perf] SM120 上 GDN decode 仍运行在 Triton，仅达到带宽屋顶线的约 23%** — FlashInfer 提供了 cc=120 融合内核但未被使用 | **中等** | Open | — | [#51208](https://github.com/sgl-project/sglang/issues/51208) |

### 低（生态系统 / 集成问题）

| # | Issue | 严重性 | 状态 | 修复 PR |
|---|-------|----------|--------|--------|
| 11 | **[Bug] Qwen3-Omni AWQ 仅量化了 thinker's LM；vision/audio 层名未被量化忽略列表匹配** — 启动失败 | **低** | Open | [#52304](https://github.com/sgl-project/sglang/pull/52304) |
| 12 | **[Bug] `fused_moe_triton` 调优器：NemotronH 用 gated SiLU shape 调优但 MoE 是非门控 relu2** | **低** | Closed | — | [#51627](https://github.com/sgl-project/sglang/issues/51627) |
| 13 | **[Bug] Diffusion orchestrator：深度嵌套的 JSON 帧逐请求处理器逃逸** 并停止路由循环 | **低** | Open | — | [#52191](https://github.com/sgl-project/sglang/issues/52191) |
| 14 | **[Bug] `radix_eviction_policy=priority` 忽略 `--schedule-low-priority-values-first`** | **低** | Open | — | [#52423](https://github.com/sgl-project/sglang/issues/52423) |

**CI 健康状态：** Issue [#17050](https://github.com/sgl-project/sglang/issues/17050) 报告 `main` 上 5 个测试 broken + 18 个 flaky。CI 维护模式（[#21065](https://github.com/sgl-project/sglang/issues/21065)）持续激活。

---

## 6. 对应用开发者的建议

| 建议 | 详情 |
|----------|-------|
| **规划 SGLang 1.0 迁移** | 1.0 发布将把隐式配置变更替换为显式报错。如果使用自定义配置，请在从 0.5.x 升级前进行审计。在 [#50045](https://github.com/sgl-project/sglang/issues/50045) 中追踪进度。 |
| **优先使用 `--enable-prefix-cache-hit-rate-window`** | 新的滑动窗口前缀缓存指标（[#45719](https://github.com/sgl-project/sglang/pull/45719)）在变化的工作负载下比单次报告的累计指标更准确地反映缓存效果。 |
| **使用多 GPU TP 配置的 Qwen3-VL 用户** 应评估可选的分布式预处理 PR [#52426](https://github.com/sgl-project/sglang/pull/52426)，以减少单 GPU 预处理瓶颈。 |
| **AMD MI300X 上的 DeepSeek-V4.1** 显示出显著的交互性提升（+41% P50）；如在 gfx942 上运行，考虑通过 [#51001](https://github.com/sgl-project/sglang/pull/51001) 评估 FP8 权重扩展路径。 |
| **避免在混合批次中使用 `token_ids_logprob`** — v0.5.14–v0.5.17 中存在混合 `token_ids_logprob` 请求时的调度器崩溃 bug；使用此特性时请确认版本。 |
| **XPU / Intel 用户** — RL 功能已通过 [#39891](https://github.com/sgl-project/sglang/pull/39891) 在 XPU 上启用，投机解码修复已在 [#46740](https://github.com/sgl-project/sglang/pull/46740) 中合入。 |
| **关注 Rust 扩展加载器死锁问题** — 如在多节点 launcher 环境中使用自定义 Rust 扩展，请监控启动挂起情况；防御性超时修复尚未合入。 |
| **`/vertex_generate` 端点的文件描述符耗尽风险** — 如公开暴露此 API，请确保部署配置了充足的 `ulimit -n`。 |

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the entire technical digest from English to Simplified Chinese. I need to:

1. Translate all headings, body text, table content, list items
2. Keep all markdown structure (tables, headings, lists, etc.)
3. Keep URLs, PR numbers, code references, file paths, API names as-is
4. Use natural technical Chinese - not literal word-for-word
5. Preserve all formatting (bold, italic, tables, etc.)
6. Output ONLY the translation - no preamble or explanation
7. No markdown fences around the whole output

Let me translate section by section:

Title: "llama.cpp Digest — 2026-11-23" → "llama.cpp 速报 — 2026-11-23"

Section 1: Today's Highlights
- 10 commits → 10 次提交
- headlined by → 以...为亮点
- hybrid models → 混合模型
- backend stability → 后端稳定性
- portability → 可移植性
- token-aware parsing → 词元感知解析
- Documentation received attention → 文档工作也受到关注

Section 2: Releases & Breaking Changes
- table translations
- Breaking Changes → 重大变更
- backward-compatible → 向后兼容

Section 3: New Model & Hardware Support
- speculator → 投机解码器
- Draft model → 草稿模型
- status → 状态
- Quantization highlights → 量化亮点
- test snapshot → 测试快照
- aligned with → 对齐
- ISA improvement → ISA 优化

Section 4: Performance & Optimization
- Speed up → 加速
- correctness fix → 正确性修复
- Memory reduction → 内存占用降低
- minor → 轻微


- zero-padding → 零填充
- pooled embedding → 池化嵌入
- redundant → 冗余
- allocation → 分配

I'll continue translating the key sections with careful attention to technical accuracy and natural Chinese language flow. The focus is on maintaining precise technical terminology while ensuring readability for a Chinese-speaking developer audience. I'll carefully translate technical content about performance, stability, and development implications. The focus is on precise technical language about GPU and backend performance issues across different hardware configurations.

Key areas involve backend and multi-node optimization challenges. Specific attention to MoE experts, model integration, and hardware compatibility across SYCL, RDNA1, Vulkan, and Windows platforms. Multimodal audio processing improvements are highlighted, with emphasis on nuanced performance and stability considerations.

Technical terminology requires precise translation, maintaining the original document's structured approach to explaining complex computational infrastructure challenges. I'll translate the technical digest into Chinese, maintaining the original structure and formatting:

# llama.cpp 速报 — 2026-11-23

## 1. 今日亮点

最近 24 小时内，llama.cpp 项目共提交 10 次代码，最新亮点是 Qwen3.5 混合模型的 **SIGMOID 反向传播** 支持 (#32126) 和聊天界面的 **词元感知解析** 功能 (#29307)。后端稳定性工作占据主导地位：Vulkan/WebGPU 通用回退机制改进了 `ggml_backend_tensor_memset` 的可移植性 (#32574)，同时修复了 mtmd（多模态）音频处理管线的相关问题。文档工作也受到关注，NCCL 构建/使用指南已完成 (#32851)。

## 2. 发布与变更

| 提交 | 变更说明 | 备注 |
|------|----------|------|
| [b12646](https://github.com/ggml-org/llama.cpp/commit/b12646) | ggml-backend: `ggml_backend_tensor_memset` 通用回退机制 | 解决 #27530 中的待办事项；提升跨后端可移植性 |
| [b12645](https://github.com/ggml-org/llama.cpp/commit/b12645) | chat: 修复 LFM2.5-VL 模板检测 | LiquidAI LFM2.5-VL 模型的工具调用功能现已正常运作 |
| [b12640](https://github

:///ggml-org/llama.cpp/commit/b12640) | server: 为 `grep_search` 工具添加偏移分页功能 | 优化大型结果集的分页体验 |

暂未发现 **API 重大变更** 。所有提交均保持向后兼容性。

## 3. 新模型与硬件支持

| PR | 描述 | 状态 |
|----|------|------|
| [#32218](https://github.com/ggml-org/llama.cpp/pull/32218) | Inkling 2 DSpark 投机解码器支持 | 进行中 — 为 Inkling 2 添加草稿模型投机解码 |
| [#32588](https://github.com/ggml-org/llama.cpp/pull/32588) | SenseNova 模型支持 | 进行中 — 由 SenseNova 团队提供官方支持 |
| [#32752](https://github.com/ggml-org/llama.cpp/pull/32752) | Inkling 2: 分块构建注意力掩码 | 进行中 — 在 CUDA/macOS 上节省内存；适度提升预填充性能 |
| [#29256](https://github.com/ggml-org/llama.cpp/pull/29256) | Q6_K 8×8 内核的 SVE (128/256位) GEMV | 进行中 — 针对 ARM 可扩展向量扩展优化 |

**量化进展：**
- Qwen3.6-27B 测试快照已更新 (#32845)，以对齐更新的 GGUF 元数据
- SVE 路径的 `ggml_gemv_q5_K_8x8_q8_K` 已落地 (#31736)，适用于支持 i8mm 的 ARM 设备

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **mtmd 音频** | 以迭代分批方式替代递归基数-2 FFT (#32815) | 共享音频处理速度提升 |
| **MoE 专家路由** | 复制共享跨节点的宿主权重的全部专家 (#32807) | 多节点 MoE 部署的正确性修复 |
| **Inkling 2 掩码** | 分块构建注意力掩码 (#32752) | CUDA/macOS 上内存降低；预填充加速 |
| **HIP/CUDA** | `mbcnt` 投票替代 popcount (#32841)；warp_reduce_all/any 优化 (#32840) | AMDGCN 上轻微 ISA 提升 |
| **Qwen3a 音频** | 修复 Qwen3-Omni/ASR 音频尾部的零填充词元计数 (#32697) | 音频尾部处理的正确性修复 |
| **词元嵌入** | 跳过池化嵌入 GGUFs 的设备副本加载 (#32848) | 减少冗余内存分配 |

*注：RDNA1 (gfx1010) 上存在活跃的性能回退调查 — 见第 5 节。*

## 5. 稳定性与回退

| Issue | 严重性 | 描述 | 修复 PR |
|-------|----------|-------------|--------|
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | **高** | SYCL + MoE 上 `/v1/completions` logprobs 非确定性；seed 无法固定分布 | 无 |
| [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) | **高** | Vulkan/RDNA1 (gfx1010) GDN 混合模型提示处理性能下降约 45%（b10455→b11429） | 无 |
| [#32707](https://github.com/ggml-org/llama.cpp/issues/32707) | **高** | Inkling-2-Mini-GGUF:IQ4_NL 在 RTX 5090 上预填充极慢且崩溃 | 无 |
| [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) | **中** | i915 Vulkan: 超过 20s 排队 GPU 工作时多批次提示处理数据损坏 | 无 |
| [#30794](https://github.com/ggml-org/llama.cpp/issues/30794) | **中** | RPC: 双 RPC worker 长提示后 DeepSeek V4 退化为重复词元 | [#32838](https://github.com/ggml-org/llama.cpp/pull/32838) 进行中 |
| [#32818](https://github.com/ggml-org/llama.cpp/issues/32818) | **中** | Inkling 工具调用语法在 thinking 关闭时崩溃（"语法栈为空"） | 无 |
| [#32373](https://github.com/ggml-org/llama.cpp/issues/32373) | **低** | Windows: GPU 卸载后卸载的模型页仍保留在工作集中 | [#31709](https://github.com/ggml-org/llama.cpp/pull/31709) 进行中 |

**今日已解决：** #32291（OpenVINO 后端上的 Qwen3.5）、#32755（Inkling2 循环 MoE CPU 垃圾输出）、#32817（Inkling 2 mini 崩溃）。

## 6. 对应用开发者的影响

1. **SYCL 或多节点 MoE 用户**：注意 logprobs 可能非确定性（#31206），且跨节点专家路由在 b12642 有待验证的正确性修复——稳定后再更新。

2. **Inkling 2 集成方**：分块掩码构建（#32752）即将落地，将大幅降低大上下文窗口的内存压力。需关注 thinking 关闭时工具调用语法的稳定性（#32818）。

3. **AMD RDNA1 Vulkan 用户**：若使用 gfx1010，GDN 混合模型的预填充性能将显著下降（约 45%）。目前建议切换到 CUDA 或 CPU 后端，直到回退问题定位完成。

4. **Windows 部署**：工作集内存泄漏修复（#31709）待合并——合并后，Windows GPU 推理将更积极地释放未使用的映射页。

5. **音频多模态**：Qwen3-Omni/ASR 音频处理现已正确处理音频尾部（#12643）——若运行多模态管道请及时更新。

---

*数据来源：2026-11-23T00:00–23:59 UTC 期间的 github.com/ggml-org/llama.cpp。*</think>



</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese while following specific rules. Let me translate this carefully, maintaining the structure and using natural technical Chinese.

Key points to remember:
1. Keep URLs, numbers, version tags, etc. verbatim
2. Use natural technical Chinese register
3. Preserve all markdown structure exactly
4. Keep issue/PR references as-is
5. Output ONLY the translation

Let me translate section by section:

Title: "Ollama Digest — 2026-11-23" → "Ollama 每日简报 — 2026-11-23"

Section 1: Today's Highlights
- Translate naturally, keeping technical terms consistent

Section 2: Releases & Breaking Changes
- Simple, keep version numbers

Section 3: New Model & Hardware Support
- Table translation, keeping codes and links

Section 4: Performance & Optimization
- Table translation

Section 5: Stability & Regressions
- Table translation with severity icons

Section 6: What This Means for Application Developers
- Numbered list translation

Let me do this carefully with proper technical Chinese:
</think>


# Ollama 每日简报 — 2026-11-23

## 1. 今日要闻

Ollama 的开发工作持续聚焦于提升平台可靠性：两个 PR 修复了 JetPack CUDA OOM 崩溃和无法访问地址上的 blob 下载失败问题，同时 GGUF 文件验证新增了重复键和 alignment 约束的强制检查。社区还为 Inkling2 提交了 Metal 内核以加速推理，并修复了导致混合架构 VRAM 计量错误而错误驱逐 runner 的问题。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|---------|-------|
| **Inkling 2 Mini GGUF** | Windows 加载器现已正确识别 `inkling2_loop/inkling2` 架构和 `inkling2v` 投影器，修复了一个回归问题。 | [#19817](https://github.com/ollama/ollama/issues/19817) |
| **Inkling2 Metal 加速** | 新增 BF16 矩阵乘、NVFP4/MXFP8 expert gather + 融合 SwiGLU、融合循环控制器、相对位置分离注意力及更快的卷积等自定义 Metal 内核——包含 stock-graph 回退逻辑，由 GPU 代际控制开关。 | [#19843](https://github.com/ollama/ollama/pull/19843) |
| **Jetson AGX Orin (JetPack 6)** | Runner 构建更新为包含 `GGML_CUDA_NO_VMM=ON`，解决了 `cuMemAddressReserve` 即使在 38–55 GiB 可用情况下仍报 image-request OOM 的问题。 | [#19815](https://github.com/ollama/ollama/issues/19815) · [#19847](https://github.com/ollama/ollama/pull/19847) |

---

## 4. 性能与优化

| 类别 | 变更 | 影响 | 链接 |
|----------|--------|--------|-------|
| **VRAM 计量** | PR #19632 修复了混合/SSM 架构（Qwen3.5/3.8 等）的 KV cache 重复计算问题，纠正了 `OLLAMA_KV_CACHE_TYPE` 处理和 GPU 分割决策中导致错误驱逐的逻辑。 | 修复了 `keep_alive=-1` 加载的 runner 被错误驱逐的问题。 | [#19463](https://github.com/ollama/ollama/issues/19463) · [#19632](https://github.com/ollama/ollama/pull/19632) |
| **调度器稳定性** | PR #19581 保留在停止时失败的 runner 在 loaded set 中，防止调度器误以为 VRAM 已释放并错误预估 GPU 容量。 | 避免级联 CPU fallback 和重复创建 runner。 | [#19581](https://github.com/ollama/ollama/pull/19581) |
| **Blob 传输可靠性** | `checkedDialer` 现在遍历所有已验证地址进行连接，而非仅尝试第一个，解决了 AAAA 记录优先但无 IPv6 路由时的下载失败问题。 | 解除双栈 CDN 重定向场景下 blob 拉取的阻塞。 | [#19841](https://github.com/ollama/ollama/issues/19841) · [#19846](https://github.com/ollama/ollama/pull/19846) |
| **cgroup 内存边界** | 有限容量的 cgroup CPU 内存现在以实际可用主机 RAM 为上界，避免无符号下溢。 | 本地推理工作负载的内存准入正确性提升。 | [#19848](https://github.com/ollama/ollama/pull/19848) |
| **混合模型并行** | `OLLAMA_PARALLEL_HYBRID` 已合并；混合/循环模型（如 `qwen35moe`）现可并发运行多个 slot，突破了此前单一 slot 的锁限制。 | MoE 和 SSM 类模型吞吐量提升。 | [#18939](https://github.com/ollama/ollama/pull/18939) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 临时方案 / 修复 |
|----------|-------|--------|------------------|
| 🔴 高 | **qwen3.8:27b-mtp_q8 VRAM 回归** — 升级至 0.40.2 后 Windows 11 下显存占用从 51 GiB 升至 127 GiB。 | 待处理 | 回退至 ≤0.40.1；暂无修复 PR。 |
| 🔴 高 | **Qwen3-VL-8B GGUF + mmproj Apple Silicon 崩溃** — 视觉能力注册成功，但首次通过 API 或 CLI 处理图片请求时 runner 以 status 2 退出。 | 待处理 | 无临时方案；修复 PR 尚未提交。 |
| 🔴 高 | **VRAM 过度预估 (4–8×)** — `PredictServerVRAM` 忽略 `OLLAMA_KV_CACHE_TYPE`，对混合模型 KV cache 重复计算，导致提前驱逐。 | 修复 PR [#19632](https://github.com/ollama/ollama/pull/19632) 待合并 | 合入后升级即可。 |
| 🟡 中 | **Jetson AGX Orin image OOM** — `clip_encode` 中 CUDA VMM 池耗尽，即使 GPU 空闲亦然。 | 修复 PR [#19847](https://github.com/ollama/ollama/pull/19847) 待合并 | 合入后升级即可。 |
| 🟡 中 | **qwen3.5 解析器过早终止 thinking** — 模型将 `<tool_call>` 或 `</think>` 写入为纯文本，但解析器将其视为特殊 token，导致中途截断生成。 | 待处理 | 无临时方案；需更新解析器。 |
| 🟡 中 | **Windows 自动更新 taskkill 失败** — 静默更新期间弹出五个对话框（0xc0000142）；Restart Manager 持有已终止 console 的句柄。 | 待处理 | 更新后需手动重启。 |
| 🟡 中 | **Manifest v2 host 编码冲突** — `reg:5000` 和 `reg%3A5000` 映射到同一文件夹，导致 manifest 查询歧义。 | 修复 PR [#19835](https://github.com/ollama/ollama/pull/19835) 待合并 | 合入后升级即可。 |
| 🟢 低 | **OpenAI 兼容流式 Function.Index** — 无注册解析器（遗留工具解析路径）的模型始终返回 index 0。 | 待处理 | 使用具有显式解析器注册的模型。 |

---

## 6. 对应用开发者的影响

1. **混合硬件上的多模型部署**：`OLLAMA_PARALLEL_HYBRID` 合入加上 VRAM 计量修复，降低了加载 MoE 模型时挤占其他 runner 的风险——升级后请重新评估 `OLLAMA_NUM_PARALLEL` 设置。

2. **Apple Silicon 视觉管线**：若在 Metal 上运行带 mmproj 的导入 Qwen3-VL GGUF 模型，请暂缓升级至 0.40.2，等待崩溃修复；纯文本推理不受影响。

3. **边缘 CUDA 部署（Jetson）**：JetPack 6 上的图片输入在 PR #19847 合入前会导致 runner 崩溃——在 AGX Orin 上进行多模态工作负载时请做好规划。

4. **Windows 基础设施自动化**：Windows 上的静默自动更新脚本在 Restart Manager 问题修复前会弹出错误对话框——考虑改用手动更新编排，或推迟至 0.40.3+。

5. **工具调用/函数调用应用**：使用 OpenAI 兼容 API 且依赖流式工具调用（配合未注册解析器）的用户，每个调用都会收到 `Function.Index = 0`——请审计你的 model+parser 组合。

6. **模型导入管线**：新增的 GGUF 验证（拒绝重复键和非 2 的幂次 alignment）在文件加载早期即会捕获格式错误——在导入上游模型文件前进行验证，可避免运行时意外。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese, preserving all the Markdown structure, tables, formatting, links, and technical identifiers. I need to output only the translation, no explanations or fences.

Let me translate this carefully, maintaining the technical register and natural Chinese expression.
</think>


# LiteLLM 每日摘要 — 2026-11-23

## 1. 今日要点

LiteLLM 今天在网关侧取得了重要进展，Rust 网关现已原生支持虚拟密钥校验、模型白名单和并发请求限流——在许多常见配置下，无需再将这些请求转发至 Python 处理。新增了 **Architect** 作为一级支持 provider，提供推理交易所模式，卖家对每个请求进行竞价。一位关键安全问题是 `secret_redaction.redact_string()` 中存在 ReDoS 漏洞，导致生产部署中出现崩溃循环，该问题目前有 4 条评论和 3 个 👍，等待修复 PR。

## 2. 版本更新与破坏性变更

- **过去 24 小时内无新版本发布**。`lts/1.108.x` 分支持续接收热修复（如 Bedrock thinking block 错误修复 #53488、Vertex 图像控件修复 #53581）。

> ⚠️ **v1.108.x LTS 用户迁移注意事项：** 若在 AWS Bedrock 上部署时使用/application inference profile ARN 且未解析到基础模型，thinking block 现在将返回描述性的 400 错误而非不透明的错误——请检查部署的 `base_model` 字段。详见 [#53488](https://github.com/BerriAI/litellm/pull/53488)。

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|---------|-------|
| **Architect provider** | LiteLLM 现已内置支持 Architect，这是一个推理交易所，provider 可对请求进行竞价。由于每次拍卖确定实际成本，因此未提供固定按 token 计价信息。 | [#53683](https://github.com/BerriAI/litellm/pull/53683) |
| **Ace Data Cloud provider** | 新增 Ace Data Cloud provider PR，内置聊天模型目录。 | [#44817](https://github.com/BerriAI/litellm/pull/44817) |

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **Rust 网关 — 虚拟密钥认证** | 网关现直接从 Redis/数据库读取虚拟密钥限额，而非透传至 Python，并原生支持密钥的 `models` 白名单校验。 | 减少虚拟密钥场景下每次认证请求的 Python Pod CPU 占用。 |
| **Rust 网关 — 并发请求限流器** | `callbacks-parallel-request-limiter`（`max_parallel_requests`、`rpm_limit`、`tpm_limit`）现已在网关层强制执行。 | 将限流检查从 Python 卸至网关；突发负载下 p99 延迟更低。 |
| **Rust 网关 — 模型容量回调** | `callbacks-model-capacity`（`dynamic_rate_limiter_v3`）端到端链路已打通。 | 模型组层面的负载卸载保持一致，无需 Python 往返。 |
| **Vertex AI — 直通请求的最小负载路由** | 对多部署 Vertex 模型发起多个并发直通请求时，现已均匀分配至各部署；每次选择均计入 in-flight 计数。 | 消除 Vertex 多部署场景下的队首阻塞问题。 |
| **ValKey 语义缓存（自适应阈值）** | 提议新增自适应 `similarity_threshold` 模式，替代当前固定的 0.8 默认值。 | 将改善不同查询分布下的缓存命中率；目前处于提案阶段。 |

## 5. 稳定性与回归问题

### 🔴 严重

| 问题 | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **`secret_redaction.redact_string()` 中的 ReDoS 漏洞** | 大型异常字符串触发灾难性正则回溯，阻塞事件循环数分钟，导致存活探针失败，并在 Docker Swarm 中触发崩溃循环重启。影响所有副本。 | **待处理** — [#32353](https://github.com/BerriAI/litellm/issues/32353) | 暂无 |
| **`--pkce` 令牌续期中断** | 若 `lite auth print-token` keychain 写入在轮转后被中断，旧凭证已被删除但新凭证未能写入，导致 CLI 无凭证且刷新令牌已消耗。 | **待处理** — [#43374](https://github.com/BerriAI/litellm/issues/43374) | 暂无 |

### 🟠 高优先级

| 问题 | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **流式 `/v1/messages` 中并行工具调用参数丢失** | 当客户端使用 `chatgpt`（Codex）provider 流式调用 Anthropic `/v1/messages` 且单轮有多个工具调用时，所有 `tool_use` 块的 `input` 均为空。 | **待处理** — [#45348](https://github.com/BerriAI/litellm/issues/45348) | 暂无 |
| **WatsonX 流式响应的 usage 丢失** | LiteLLM 忽略 WatsonX 在流式调用中发送的 usage 元数据，转而报告自身（更低）的 token 估算值。导致计费对账数据不准确。 | **待处理** — [#46059](https://github.com/BerriAI/litellm/issues/46059) | 暂无 |
| **审计日志写入为即发即忘模式** | 审计日志条目使用 `asyncio.create_task()` 写入，工作进程关闭时会丢弃已返回 200 的调用记录。影响 12 个生产站点。 | **待处理** — [#43583](https://github.com/BerriAI/litellm/issues/43583) | 暂无 |
| **非 OpenAI provider 忽略 `httpx.Timeout` 连接超时** | `supports_httpx_timeout()` 白名单范围过窄；mistral 等 provider 将 `connect=1.0` 合并至读取超时，在慢连接路径上降低容错能力。 | **待处理** — [#47822](https://github.com/BerriAI/litellm/issues/47822) | 暂无 |

### 🟡 中优先级

| 问题 | 描述 | 状态 | 修复 PR |
|-------|-------------|--------|--------|
| **仅空白字符的系统消息被 Anthropic 拒绝** | LiteLLM 将 `"content": "   "` 原样透传给 Anthropic，后者以 `invalid_request_error` 拒绝。 | **待处理** — [#28706](https://github.com/BerriAI/litellm/issues/28706) | 暂无 |
| **Bedrock rerank 忽略 `return_documents`** | 对 Bedrock 模型调用 `litellm.rerank()` 时，即使 `return_documents=True`，结果中 `document.text` 也始终为空。 | **待处理** — [#38006](https://github.com/BerriAI/litellm/issues/38006) | 暂无 |
| **Vertex Gemini 图像模型上 `n > 1` 返回不透明 400** | `map_openai_params` 将 OpenAI `n` 映射至 Vertex `candidateCount`，但 Gemini 图像模型拒绝 `candidateCount > 1`，返回不透明的 `INVALID_ARGUMENT` 错误。 | **待处理** — [#53119](https://github.com/BerriAI/litellm/issues/53119) | 暂无 |
| **Gemini → Anthropic 转换时丢弃同一函数的并行调用** | 当包含两个对同一函数的 `functionCall` 部分的 Gemini 格式请求被路由至 Anthropic 模型时，工具调用丢失，工具结果 ID 重复。 | **待处理** — [#53345](https://github.com/BerriAI/litellm/issues/53345) | 暂无 |
| **MCPServerManager 每次请求重新探测不支持的端点** | 对每个 MCP server 每次聚合请求都调用 `list_prompts`/`list_resources`，即使该 server 并不实现这些操作。 | **待处理** — [#35460](https://github.com/BerriAI/litellm/issues/35460) | 暂无 |
| **`use_chat_completions_api: true` 在上游返回 `reasoning_content` 时丢弃 `content`** | OpenAI 格式响应转换为 Anthropic Messages 格式时静默丢弃 `content` 字段。 | **待处理** — [#27492](https://github.com/BerriAI/litellm/issues/27492) | 暂无 |

## 6. 对应用开发者的影响

1. **若你在 Rust 网关后使用虚拟密钥或限流配置**，网关现已原生处理大部分逻辑——预期 Python CPU 占用降低，认证响应更快。仍需注意的边界情况是 Messages 请求上的 `enable_pre_call_checks`，该功能仍路由至 Python 处理（[#53039](https://github.com/BerriAI/litellm/pull/53039)）。

2. **若你使用 WatsonX 或 Bedrock rerank**，请留意这些路径的 usage 报告当前不准确。在 [#46059](https://github.com/BerriAI/litellm/issues/46059) 和 [#38006](https://github.com/BerriAI/litellm/issues/38006) 修复前，请勿依赖 LiteLLM 的 token 计数进行计费对账。

3. **若你在启用流式的条件下调用 Anthropic `/v1/messages` 且有多个并行工具调用**，工具参数将丢失。请关闭流式或等待 [#45348](https://github.com/BerriAI/litellm/issues/45348) 的修复。

4. **若你在多副本 Docker Swarm 或 Kubernetes 环境中运行 LiteLLM**，请关注 ReDoS 问题（[#32353](https://github.com/BerriAI/litellm/issues/32353)）——大型错误响应可能导致事件循环卡死并触发崩溃循环。预期修复方案为（对正则添加超时、非回溯模式）。

5. **若你使用 GCP Vertex AI 配合多部署配置**，直通请求的新最小负载路由（[#53588](https://github.com/BerriAI/litellm/pull/53588)）应在不改变配置的情况下改善并发负载下的吞吐量。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me carefully translate this while following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repo slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section:

## 1. 今日要点

"Highlights" → "今日要点" or "要点速览"
"Unsloth's dev velocity remains high" → "Unsloth 开发活跃度依然保持高位"
"with 20+ PRs merged today" → "今日合并了 20+ 条 PR"
"spanning ROCm stability hardening, diffusion training kernel fixes, and Apple Silicon rendering corrections" → "涵盖 ROCm 稳定性加固、扩散训练内核修复及 Apple Silicon 渲染修正"
"A significant security-adjacent CI fix prevents shell injection via workflow dispatch inputs" → "一个与安全相关的 CI 修复阻止了通过 workflow dispatch 输入进行的 shell 注入攻击"
"On the issue side" → "Issue 方面"
"multiple AMD hardware platforms (NPU, RDNA4, Strix Halo) are flagging edge-case failures" → "多个 AMD 硬件平台（NPU、RDNA4、Strix Halo）出现了边界情况故障"
"that require attention from inference infrastructure teams" → "需要推理基础设施团队关注"

## 2. Releases & Breaking Changes

"No official releases" → "无正式版本发布"
"None tagged in the last 24 hours" → "过去 24 小时内无新标签"


"beta v0.1.922" → "beta v0.1.922"
"API-only, Windows 11" → "API only 版本，Windows 11"
"bundled llama.cpp 1.0.0-dev (build 12588)" → "bundled llama.cpp 1.0.0-dev (build 12588)"
"Users encountering Q5_K_M quantization type errors should verify their llama.cpp build includes support for type 36" → "遇到 Q5_K_M 量化类型错误用户应确认其 llama.cpp build 支持 type 36"

The migration path involves switching from browser-storage to a local database for storing settings. If preset-save failures occurred during this transition, the latest version should resolve those issues.

## 3. New Model & Hardware Support

Several localization improvements have been implemented. Unsloth Translate now officially supports Amharic, Swahili, Hausa, Yoruba, Igbo, and Zulu through the recent pull request. Inkling 2 Mini received refinements around loop message residual checkpointing and TP/PP early refusal mechanisms. FLUX.3 and FLUX.2-klein models have been rechecked for KV identity, cache reads, and OOM tile probing. Qwen-Image-Edit GGUF had its device mismatch resolved in the _adaln_continuous_forward function.

On the hardware side, Apple Silicon MPS now maintains a large-attention guard that's traceable under torch.compile, properly counting broadcast K/V batch dimensions. AMD GPUs continue receiving ROCm hardening improvements, while Z-Image rendering on M1/M2 was fixed by addressing compute precision that was incorrectly handling fp16_i8 family configuration.

## 4. Performance & Optimization

The ROCm PrefixGrouper optimization eliminates redundant kernel compilations by implementing strict checks tied to padded sequence length, significantly reducing cold-start overhead. Attention offload optimization keeps the run_attention operation within torch.compile's graph during checkpoint frames.

Batched grouped decode operations now use functional matmul/bmm with torch.compiler.is_compiling() guards to prevent unnecessary recompilation cycles. Windows ROCm VAE decomposes large Conv3d operations exceeding 2 GiB into per-tap Conv2d operations, delivering roughly 10× performance improvement on LTX-2.x video VAE decode tasks. CUDA graph management releases idle graphs when they're only blocking image requests, freeing approximately 3.3 GiB of graph pool capacity on demand.

For diffusion training fp8 quantization, the Auto fp8 mode below 1.15× free VRAM now validates host RAM availability in the 0.9×–1.15× range to prevent out-of-memory errors. QAT quantization with nvfp4/mxfp8 preserves trainable LoRA adapter biases and supports strided MX inputs for broader quantization coverage. GRPO hidden-states optimization consolidates head-input comparisons to a single model evaluation per session rather than repeated per scoring call, reducing computational overhead in RL training workflows.

## 5. Stability & Regressions

Multiple GPU architecture compatibility issues are actively being tracked. RDNA4 GPUs like the RX 9060 XT experience fused kernel failures with illegal memory access errors since PyTorch/PEFT lacks SDPA kernel support for this architecture. The Inkling-2-Mini-GGUF model fails to load in the latest Studio Docker environment. Studio's llama-server crashes on ROCm when invoked from Studio itself due to a system library conflict with libamdhip64.

Additional runtime issues include AMD NPU JSON parsing failures after FastFlowLM updates, Windows Strix Halo memory mapping problems that still force mmap allocation despite carve-out fixes, and Gemini 4 penalty configuration errors preventing proper model optimization.

Several medium and lower priority issues have been resolved: dual RX 6700 XT ROCm crashes, unsupported Q5_K_M quantization types in bundled llama.cpp, CUDA context creation from the /api/system/hardware endpoint, and transformers 5.13.1 triggering false positive security scanner alerts.

AMD GPU users should maintain ROCm 6.x for now, as ROCm 10.1 integration remains unstable across multiple open issues. Translation workflows benefit from official support for Amharic, Swahili, Hausa, Yoruba, Igbo, and Zulu languages in Unsloth Translate. Multi-request sessions should guard CUDA graph memory allocations, particularly when interleaving image generation with chat. Custom quantization exports require verifying llama.cpp build compatibility.

CI/CD pipelines need patching for workflow dispatch inputs, and the Strata engine proposal warrants monitoring for infrastructure planning purposes.

*Digest 数据来源于 2026-11-23 的 github.com/unslothai/unsloth。*
</think>


# Unsloth 技术周报 — 2026-11-23

## 1. 今日要点

Unsloth 开发活跃度依然保持高位，今日合并了 20+ 条 PR，涵盖 ROCm 稳定性加固、扩散训练内核修复及 Apple Silicon 渲染修正等多个领域。一项与安全相关的 CI 修复阻止了通过 workflow dispatch 输入进行的 shell 注入攻击。Issue 方面，多个 AMD 硬件平台（NPU、RDNA4、Strix Halo）出现了边界情况故障，需要推理基础设施团队关注。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|------|------|
| 无正式版本发布 | 过去 24 小时内无新标签 | — |

**值得注意的版本引用：** Issue [#18722](https://github.com/unslothai/unsloth/issues/18722) 提及运行 Studio `v0.1.922-beta`（API only，Windows 11），内置 llama.cpp `1.0.0-dev (build 12588)`。遇到 `Q5_K_M` 量化类型错误的用户应确认其 llama.cpp build 支持 type 36。

**迁移说明：** 聊天设置持久化修复（[#5862](https://github.com/unslothai/unsloth/issues/5862)）已关闭——如果您在从浏览器存储迁移到本地数据库后遇到预设保存失败的问题，相关修复现已上线。

---

## 3. 新模型与硬件支持

| 组件 | 变更 | 链接 |
|------|------|------|
| **Unsloth Translate** | 通过 [#18738](https://github.com/unslothai/unsloth/pull/18738) 正式支持 **阿姆哈拉语 (`am`)**、**斯瓦希里语 (`sw`)**、**豪萨语 (`ha`)**、**约鲁巴语 (`yo`)**、**伊博语 (`ig`)**、**祖鲁语 (`zu`)** | [#18723](https://github.com/unslothai/unsloth/issues/18723) |
| **Inkling 2 Mini** | 训练支持细化：loop message 残差 checkpoint、TP/PP 提前拒绝、parity 测试 | [#18959](https://github.com/unslothai/unsloth/pull/18959) |
| **FLUX.3 / FLUX.2-klein** | 重新检查 KV identity、缓存读取、OOM tile probing 修复 | [#18982](https://github.com/unslothai/unsloth/pull/18982) |
| **Qwen-Image-Edit GGUF** | 修复 `_adaln_continuous_forward` 中的设备不匹配问题（已关闭） | [#18759](https://github.com/unslothai/unsloth/issues/18759) |
| **Z-Image (MLX)** | 修复 M1/M2 上的黑色/青色网格渲染问题（计算精度忽略了 family `fp16_i8` 配置） | [#18964](https://github.com/unslothai/unsloth/pull/18964) |
| **AMD GPU** | 持续进行 ROCm 加固（PrefixGrouper、attention offload、grouped decode batching） | 多条 PR |
| **Apple Silicon MPS** | 大 attention guard 在 `torch.compile` 下现已可追踪；正确计算 broadcast K/V batch dims | [#18979](https://github.com/unslothai/unsloth/pull/18979) |

---

## 4. 性能与优化

| 领域 | 变更 | 可量化影响 |
|------|------|-----------|
| **ROCm PrefixGrouper** | 严格编译检查现在按 padded length 区分；避免了在新的序列长度上首次调用时重复编译内核 | 减少冷启动编译开销 |
| **ROCm attention offload** | `run_attention` 在 checkpoint frames 下保持在 `torch.compile` 图内；避免了在 `UNSLOTH_GC_SAVE_ATTENTION=1` 时的图断裂 | 提升 AMD 训练吞吐量 |
| **Batched grouped decode** | Guarded `GROUPED_DECODE_CALLS[0]` increment 改为在 `torch.compiler.is_compiling()` 下执行；使用 functional matmul/bmm | 停止在 `torch.compile` 下的每次调用重编译 |
| **Windows ROCm VAE** | 大于 2 GiB 的 Conv3d 分解为 per-tap Conv2d；消除大空间张量上约 10 倍的性能下降 | LTX-2.x 视频 VAE 解码约提升 10 倍 |
| **CUDA graph 释放** | 当仅剩的图池阻止图像请求（差 0.16 GiB）时，idle CUDA graph 现已释放（24 GiB L4 上约 3.3 GiB） | 按需释放约 3.3 GiB 图池 |
| **Diffusion training fp8** | 低于 1.15× free VRAM 的 `Auto fp8` 现已在 0.9×–1.15× 区间内先检查 host RAM | 防止 VRAM 受限节点的 OOM |
| **QAT nvfp4/mxfp8** | LoRA adapter 的可训练 bias 从 QAT 中排除；接受 strided MX 输入 | 正确性 + 更广泛的量化覆盖 |
| **GRPO hidden-states** | Head-input 对比降为每个模型一次（而非每次 scoring 调用） | 降低 RL 训练循环开销 |

---

## 5. 稳定性与回归

| 严重级别 | Issue | 状态 | 链接 |
|----------|-------|------|------|
| 🔴 **高** | **QLoRA 在 RDNA4 (RX 9060 XT, gfx1200) 上中止** — `HIP error: illegal memory access`；纯 PyTorch/PEFT 无该架构的 SDPA kernel | Open | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 🔴 **高** | **Inkling-2-Mini-GGUF 无法加载** — 最新 Studio Docker | Open | [#18757](https://github.com/unslothai/unsloth/issues/18757) |
| 🔴 **高** | **Studio llama-server 在 ROCm 上崩溃** — 由 Studio 启动时（系统加载了 `libamdhip64`）；从 shell 启动正常 | Open | [#18948](https://github.com/unslothai/unsloth/issues/18948) |
| 🟠 **中** | **AMD NPU JSON 解析错误** — 更新 FastFlowLM 至 1.0.13 后报错 `Extra data: line 2025 column 1` | Open | [#18763](https://github.com/unslothai/unsloth/issues/18763) |
| 🟠 **中** | **Windows Strix Halo mmap 回归** — carve-out 修复（#17605/#17607）后 `host-shortfall` 检查仍强制使用 `mmap` | Open | [#18805](https://github.com/unslothai/unsloth/issues/18805) |
| 🟠 **中** | **Gemini 4 penalty 错误** — `Penalty is not enabled for this model (INVALID_ARGUMENT)`；Gemini-3.8-flash 正常 | Open | [#18726](https://github.com/unslothai/unsloth/issues/18726) |
| 🟠 **中** | **`v0.1.920-beta` 模型加载时崩溃** | Open | [#18563](https://github.com/unslothai/unsloth/issues/18563) |
| 🟠 **中** | **RX 5700 XT (RDNA2, Windows 10 22H2) Vulkan 损坏** | Open | [#16395](https://github.com/unslothai/unsloth/issues/16395) |
| 🟡 **低** | **`transformers==5.13.1` 触发安全扫描器**（标记为误报） | Open | [#18699](https://github.com/unslothai/unsloth/issues/18699) |
| 🟡 **低** | **双 RX 6700 XT ROCm 崩溃** | Closed | [#18622](https://github.com/unslothai/unsloth/issues/18622) |
| 🟡 **低** | **内置 llama.cpp 不支持 `Q5_K_M` 量化类型 36** | Closed（用户需更新 build） | [#18722](https://github.com/unslothai/unsloth/issues/18722) |
| 🟡 **低** | **`/api/system/hardware` 创建 CUDA context** — Studio web UI 安全/性能回归 | Closed | [#18732](https://github.com/unslothai/unsloth/issues/18732) |

---

## 6. 对应用开发者的影响

1. **AMD GPU 用户 — 暂时停留在 ROCm 6.x。** 多个 open issue（#18403、#18948、#18805、#18763）表明 ROCm 10.1 集成尚未完全稳定。如果您正在使用 RDNA4（RX 9060 XT）或 Strix Halo，预期可能出现 QLoRA 失败及 Studio 启动 llama-server 崩溃。请关注 [#18948](https://github.com/unslothai/unsloth/issues/18948) 的修复进展。

2. **翻译工作负载受益。** Unsloth Translate 正式支持阿姆哈拉语、斯瓦希里语、豪萨语、约鲁巴语、伊博语和祖鲁语（PR [#18738](https://github.com/unslothai/unsloth/pull/18738)），这意味着构建在 Unsloth 之上的 agentic 翻译 pipeline 现在可以依赖原生语言检测，无需额外 workaround。

3. **在多请求场景中防护 CUDA graph 内存。** [#18978](https://github.com/unslothai/unsloth/pull/18978) 中的修复解决了约 3.3 GiB 的池泄漏问题，该问题阻止了 24 GB 显卡上图像请求的内存分配。如果您运行的是聊天与图像生成混合负载，请确保包含此提交。

4. **自定义量化需验证 llama.cpp build。** 如果您将微调模型导出为带 `Q5_K_M` 等非标准量化类型的 GGUF，请确保内置的 llama.cpp build 为最新版本——旧 build 不支持 type 36（issue [#18722](https://github.com/unslothai/unsloth/issues/18722)）。

5. **CI/CD pipeline 负责人 — 修复 workflow dispatch 输入。** PR [#18969](https://github.com/unslothai/unsloth/pull/18969) 关闭了 Kaggle 收集 workflow 中的 shell 注入向量。如果您 fork 或扩展了 Unsloth 的 CI，请审查任何接受 `workflow_dispatch` 自由文本输入的 `run:` 脚本。

6. **关注 Strata engine 提案。** Feature request [#16626](https://github.com/unslothai/unsloth/issues/16626)（+13 👍）提议可选集成原生 Strata engine 以支持 AMD MoE streaming。如果采纳，将为特定工作负载提供 llama.cpp/vLLM 之外的替代方案——基础设施规划值得跟踪。

---

*本 digest 数据来源于 2026-11-23 的 github.com/unslothai/unsloth。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*