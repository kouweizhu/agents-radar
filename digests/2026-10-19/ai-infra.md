# AI 基础设施日报 2026-10-19

> 生成时间: 2026-10-19 00:25 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report into Chinese, following specific rules about preserving markdown structure, technical terms, and using natural technical Chinese register.

Let me translate the report while:
1. Preserving all markdown structure (headings, tables, horizontal rules, etc.)
2. Keeping all technical terms, project names, version numbers, PR references in original form
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation

Let me go through the report section by section.</think>

# AI 推理基础设施摘要 — 跨项目对比报告

## 1. 生态概览

今天的活动反映出 AI 推理栈正在走向成熟，云端服务与本地部署之间的边界持续模糊。跨越四个不同层次的六个项目都带来了有意义的更新：vLLM 在多个正确性 bug 的情况下推进了 Blackwell（SM120）支持；SGLang 将 DeepSeek V4.1 优化推向生产就绪状态；llama.cpp 扩展了量化选项和多后端覆盖；LiteLLM 通过 Docker 镜像验证加强了网关安全性；Unsloth 新增了 DeepInfra 作为第二个推理后端；Ollama 修复了 Qwen3 和 OLMo3 的 thinking-token 解析。整体信号是 **规模化运维加固**——相比原始模型能力增加，修复回归问题、多后端 parity 工作和多租户服务基础设施占据了更大比重。

---

## 2. 活动对比

| 项目 | 追踪 Issue（今日） | 合并 PR（今日） | 发布（24h） |
|------|--------------------|-----------------|-------------|
| **vLLM** | 15+（含 5 个关键 Blackwell bug） | 10+ | v0.32.0 稳定版 |
| **SGLang** | 10+（含 NGRAM spec-decoding 损坏问题） | 8+ | 无 |
| **llama.cpp** | ~10（含 speculative dec. 正确性问题） | 12+ | b11721（构建） |
| **Ollama** | 8（解析、流式、Jetson） | 4+ | 无 |
| **LiteLLM** | 15+（含 3 个安全/认证 bug） | 10+ | v1.106.0, v1.107.0-rc.1 |
| **Unsloth** | 15+（含 P100 崩溃、M4 Max 崩溃） | 20+ | 无（beta） |

**要点**：LiteLLM 和 vLLM 在发布节奏上领先；SGLang 和 Unsloth 在 PR 数量上领先，表明功能开发速度更快。llama.cpp 保持稳定的后端扩展。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1（Flash/BI）** | 🔴 关键 bug | ✅ 积极优化 | — | — | — | — |
| **Qwen3 / Qwen3.5** | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| **Gemma 4** | — | — | ✅ | 🔧 修复中 | — | — |
| **GLM-5 / GLM5-Next** | ✅ | ✅ PTPC FP8 | — | — | — | ✅ Mamba-2 |
| **Llama 4** | ✅ | — | — | — | — | — |
| **NVIDIA Nemotron 3.5 ASR** | ✅ 功能需求 | — | — | — | — | — |
| **Apple Foundation Models** | — | — | — | ✅ 需求中 | — | — |
| **GigaChat 3.5（432B MoE）** | — | — | ✅ | — | — | — |
| **IQ2–IQ6_K 量化** | — | — | ✅ CPU | — | — | — |
| **NVFP4 MoE LoRA** | — | ✅ Marlin | — | — | — | — |
| **OceanToken** | — | — | — | — | ✅ | — |
| **DeepInfra** | — | — | — | — | — | ✅ |

**领先者**：**SGLang** 在生产级 DeepSeek V4.1 优化上领先；**llama.cpp** 在量化格式广度上领先；**LiteLLM** 在 API 提供商广度上领先；**Unsloth** 在推理后端多样化上领先。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|----------|----------|----------|
| **KV Cache / Prefix Cache** | vLLM, SGLang | SGLang：MTP spec-decoding 下恢复的混合 GDN 前缀缓存；vLLM：Prefix cache 回归问题已标记 |
| **量化** | llama.cpp, SGLang, Unsloth | llama.cpp：IQ2–IQ6_K CPU 量化；SGLang：通过 Marlin 实现 NVFP4 MoE LoRA；Unsloth：FP8 仓库保护 |
| **分布式 / TP** | vLLM, SGLang | vLLM：TP 无感知 KV 卸载跟踪；SGLang：TRTLLM-Gen 的 Beam TP all-reduce 融合 |
| **核函数融合** | vLLM, llama.cpp, SGLang | vLLM：Fused QK-norm+RoPE+gate（ROCm）；llama.cpp：Qwen4Exp SCALE→SIGMOID→SCALE→hc_post CUDA 融合 |
| **Batch 不变性** | SGLang | DeepSeek-V4.1 BI 实现无论批处理组成如何都能产生位级相同输出 |
| **内存 / 冷启动** | Unsloth | Mamba-2 混合：224 KB wheel vs 230–594 MB 完整构建（减少 99%） |
| **Flash Attention** | llama.cpp, SGLang | llama.cpp：跨后端的非连续求和；SGLang：用于提示词 logprobs 的有界重放 |

**前沿热点**：**DeepSeek V4.1 优化** 是 vLLM 和 SGLang 的最高投入目标，多个正确性和性能修复正在并行发布。**Blackwell（SM120）支持仍不稳定**——两个项目都报告了多个关键 bug。

---

## 5. 层次定位

| 层次 | 项目 | 定位 |
|------|------|------|
| **服务引擎** | vLLM, SGLang | 生产级 LLM 推理服务器，具备 KV 缓存管理、连续批处理、投机解码。vLLM 在 API 表面广度上领先；SGLang 在 DeepSeek 优化上领先。 |
| **本地运行时** | llama.cpp, Ollama | llama.cpp：广泛硬件覆盖（CPU、CUDA、Vulkan、SYCL、Hexagon、ROCm、WebGPU）。Ollama：以 UX 为先的本地推理，嵌入式模型管理。 |
| **网关 / 代理** | LiteLLM | API 转换层，具备认证、限速、成本控制、多提供商路由。唯一具备 OAuth、团队级模型和批量端点的项目。 |
| **训练 / 微调** | Unsloth | 微调 + 本地推理工作室。作为唯一结合训练（LoRA/GRPO）与嵌入式推理 UI 和多后端服务（vLLM + DeepInfra）的项目，位置独特。 |
| **Agent / 工具** | LiteLLM, Unsloth | LiteLLM：MCP 服务器支持、工具调用、Claude Code 自动分类器。Unsloth：具备加载/预览/队列控制的 MCP agent。 |

**关键区别**：vLLM/SGLang 在服务层正面竞争；LiteLLM 位于它们之上作为网关；llama.cpp/Ollama 服务于本地/边缘市场；Unsloth 占据从训练到服务的独特垂直领域。

---

## 6. 趋势信号

### 从今日活动中提炼的行业趋势

1. **Blackwell（SM120）成为新的验证前沿** — vLLM 和 SGLang 都在 NVIDIA 最新 GPU 架构上报告了关键正确性 bug（CUDA 图捕获失败、Xid 错误、解码挂起）。生态系统正处于调试阶段；生产级 Blackwell 部署应等待 v0.33 / v0.6 稳定版。

2. **投机解码正确性在整个技术栈中不稳定** — vLLM（DFlash、DSpark）、SGLang（NGRAM）和 llama.cpp（量化目标）都有待解决的正确性 bug。如果您依赖 spec-decoding 来降低延迟，请在生产使用前对照非投机基线验证输出。

3. **多后端推理正在成为常态** — Unsloth 新增 DeepInfra；LiteLLM 新增 OceanToken。项目不再局限于单一后端。对应用开发者的启示：**抽象您的推理后端**——随着 bug 修复，今天的最优后端可能会发生变化。

4. **量化多样性正在快速扩展** — llama.cpp 的 IQ2–IQ6_K 系列与 NVFP4、Marlin 和 ModelOpt FP8 并驾齐驱。这带来了**量化互操作性挑战**：针对一个后端优化的量化检查点可能在另一个后端上无法工作。对格式转换工具的需求将增加。

5. **网关功能正在走向成熟** — LiteLLM 的 Docker 镜像签名和 Ollama 的流式时间戳修复标志着从**能力构建**向**运维加固**的转变。市场正在从"它能工作吗？"成熟到"它安全且可复现吗？"

6. **Agent 基础设施正在成为一等公民** — LiteLLM（强制 tool_choice、MCP 服务器）和 Unsloth（具备加载预览的 MCP agent）都在构建原生 Agent 基础原语。这表明下一波 LLM 基础设施需求将是 **Agent 编排**，而不仅仅是文本生成。

### Agent / 应用开发者应关注的内容

- **vLLM v0.32.0** → 对大多数模型生产就绪；生产部署中避免在 SM120 上使用 DeepSeek，直至 v0.33
- **SGLang** → DeepSeek V4.1 最佳；NGRAM spec-decoding 已损坏——禁用 overlap scheduler 作为临时方案
- **llama.cpp** → 最广泛的硬件覆盖范围；IQ2–IQ6_K 量化实现 2 位以下 CPU 推理
- **LiteLLM v1.106+** → 网关部署应验证 Docker 签名；避免在 Claude 5.5 上使用强制 tool_choice
- **Unsloth** → 多模型"Always"模式 + DeepInfra 实现生产级多租户服务；关注 P100/M4 Max 内存 bug
- **Ollama** → 解析修复即将推出；在 Apple Silicon 和标准 NVIDIA 硬件上的本地部署稳定

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire English digest into Simplified Chinese. Let me carefully preserve all formatting while translating naturally into Chinese technical writing style.

I need to:
1. Keep all Markdown structure (headings, tables, lists, bold, horizontal rules)
2. Keep all code/numbers/URLs/issue references as-is
3. Translate naturally into Chinese technical register
4. Output ONLY the translation with no preamble/explanation

Let me go through it section by section:</think>

# vLLM 每日简报 — 2026-10-19

## 今日要闻

vLLM v0.32.0 正式发布，包含 814 次提交和 363 位贡献者（121 位新贡献者）。本次更新引入了新的 `POST /v1/systemone` 端点，用于结构化决策查询，支持 `choice`、`noul` 和 `score` 三种问题类型。社区正在积极解决 Blackwell（SM120）硬件相关问题——已报告多个关于 DeepSeek-V4.1-Flash 在 RTX PRO 6000 Blackwell 上运行的 bug，包括 CUDA 图捕获失败和解码吞吐量过低。Q4 2026 路线图已在 issue #61024 中开启追踪。

---

## 发布与破坏性变更

| 版本 | 详情 |
|------|---------|
| **v0.32.0** | 最新稳定版；814 次提交，363 位贡献者（121 位新贡献者）。新增 `POST /v1/systemone` 端点用于结构化状态查询（choice/noul/score），默认启用。 |

**配置/环境变量变更：**
- 移除 `VLLM_USE_RAY_V2_EXECUTOR_BACKEND` 环境变量（PR #62228）——Ray 执行器 v1 版本已完全弃用。

---

## 新模型与硬件支持

| 模型/特性 | 描述 | PR/Issue |
|---------------|-------------|----------|
| **NVIDIA Nemotron 3.5 ASR Streaming** | 新增支持 6 亿参数多语言流式 ASR 模型的功能请求（#47455） | Issue #47455 |
| **Glm5NextForCausalLM, InklingForCausalLM, LagunaForCausalLM, Llama4ForCausalLM** | 已添加至支持的模型文档（#62361） | PR #62361 |
| **Qwen3-Next / Qwen3.5** | ROCm 平台启用融合 QK-norm+RoPE+gate 的 Triton 内核（#51406） | PR #51406 |
| **Step-5 Preview** | 新增模型支持（#61727） | PR #61727 |

---

## 性能优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **Beam TP All-Reduce** | 与三明治归一化和 MoE finalize 融合，用于 TRTLLM-Gen NvFP4（#62366） | 减少 all-reduce 开销 |
| **XPU FP8 量化** | 改为每 token 动态 FP8 激活而非每张量（#61362） | 更好兼容 XPU graph；避免捕获 NaN/Inf |
| **DeepSeek-V4.1-Flash BI** | FULL_AND_PIECECISE、DEP4、DSpark MTP、MegaMoE 下 CUDA 图的逐位批次无关性（#62365） | 无论批次组成如何，输出均位级一致 |
| **混合 GDN 前缀缓存** | 在 MTP spec 解码下恢复（#52244） | 修复哈希单元整数倍提示词的缓存未命中 |
| **前缀缓存遍历** | 问题标记：等待中的请求在每次调度步骤都重新遍历完整前缀缓存（#61604） | KV-cache 压力下性能回退 |

---

## 稳定性与回归问题

| 严重程度 | Issue | 详情 | 状态 |
|----------|-------|---------|--------|
| **高** | #56892 | DeepSeek-V4.1-Flash 在 SM120（RTX PRO 6000）上使用 `--enforce-eager` 时解码吞吐量极低；CUDA 图不可用 | 开启中，21 条评论 |
| **高** | #58910 | DeepSeek-V4.1-Flash 在长 prefill（>35K tokens）时于 SM120 上触发 Xid 31 MMU 错误 | 开启中，3 条评论 |
| **高** | #48898 | 当每rank K 不为 32 对齐时（TP8 SM120），NVFP4 在 torch.compile 下输出乱码 | 开启中，4 条评论 |
| **中** | #43357 | TurboQuant 工作空间锁定在 3.06 MB；continuation_p refill 在 >4096 tokens 的提示词上需要 12 MB（Qwen3.6-27B NVFP4） | 开启中，15 条评论 |
| **中** | #52479 | 睡眠模式 Level 2 唤醒未重新加载 speculative-decoding 的 draft 权重 → 导致约 2x 解码减速 | 开启中，4 条评论 |
| **中** | #61330 | DFlash speculative decoding 配合 gpt-oss target 在 FA3 下崩溃，显示非法内存访问 | 开启中，3 条评论 |
| **中** | #51986 | MNNVL allreduce 工作空间初始化在仅 IB 多节点上挂起 30 秒并泄漏 GPU 内存 | 开启中，7 条评论 |
| **低** | #61851 | `dtype="float32"` + `enable_lora` 在 LFM2 启动时崩溃——Triton 算子要求 FP16/BF16 | 开启中，4 条评论 |

---

## 这对应用开发者的意义

1. **Blackwell（SM120）用户需谨慎部署**：已追踪多个关于 RTX PRO 6000 Blackwell 平台的正确性和性能问题。若在 SM120 上部署 DeepSeek-V4.1-Flash，预期会遇到 CUDA 图和长 prefill 序列相关问题。

2. **批次无关性提升生产可复现性**：PR #62365 中的批次无关性工作确保了 DeepSeek-V4.1-Flash 无论批次组成如何都能产生位级一致的输出——这对于确定性服务至关重要。

3. **LFM2 上 LoRA + float32 dtype 已损坏**：在 LFM2 模型上使用 LoRA 启用模式时，请避免使用 `dtype="float32"`，直至 #61851 修复。

4. **Speculative decoding 权重重载 bug**：若在 Level 2 睡眠/唤醒循环中使用 speculative decoding，请注意 draft 模型权重可能未正确重载，导致静默的约 2x 减速（#52479）。

5. **新的结构化输出端点**：v0.32.0 中的 `POST /v1/systemone` 端点为结构化决策查询提供了新机制——如需构建 agent 工作流，请查阅该 API。

---

*基于 2026-10-19 的 vllm-project/vllm GitHub 数据生成*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Daily Digest into Simplified Chinese. I need to:
1. Output ONLY the translation
2. No preamble, no explanation, no markdown fences
3. Preserve the Markdown structure exactly
4. Keep all technical terms, URLs, code references, issue numbers as-is
5. Use natural technical Chinese register

Let me translate while preserving the structure:

Title: SGLang Daily Digest — 2026-10-19

I need to be careful about:
- Issue/PR numbers stay as-is
- URLs stay as-is
- Code/command references stay as-is
- Project names stay as-is
- Table structure must be preserved exactly

Let me go through section by section.</think>

# SGLang 每日简报 — 2026-10-19

## 今日要点

SGLang 持续推进 DeepSeek V4.1 优化，包括在 encoder SWA bounded replay 中新增对 CUDA 图像请求和 prompt logprobs 的支持。LoRA 运行时栈（21 个组件）即将完成，CuTeDSL FP8/BF16 分组 GEMM 提供商已就位。数个正确性 bug 已上报，涉及投机解码和旧 GPU 上的 FP8 量化。

---

## 版本发布与重大变更

**过去 24 小时内无新版本发布。**

---

## 新模型与硬件支持

| 功能 | 详情 | PR/Issue |
|---------|---------|----------|
| **DeepSeek V4.1** | 正在优化：mHC SP + engram fusion，将 `q_rope_store` 融合为 `fused_q_norm_rope` | Issue #42170 |
| **NVIDIA Megakernels** | DeepSeek-V4.1-Flash decode on GB300 插件层，通过 `--enable-nvidia-megakernel` 标志启用 | PR #44945 |
| **AMD GLM-5.2-MXFP4** | gfx950（per-token activation scales）上的 PTPC FP8 投影现已可选 | PR #33602 |
| **Ampere 上的 ModelOpt FP8** | A100/A40/A6000 (SM80-SM88) 现已支持 FP8 Marlin 回退 | PR #44944 |
| **NVFP4 MoE LoRA** | Marlin vendor 支持已交付（21/21 部分完成） | PR #42888 |

---

## 性能与优化

- **DeepSeek V4.1 Prompt Logprobs**：Encoder SWA bounded replay 现支持 `return_logprobs`，用于 prefill-vs-decode KL 重放评分（[PR #45050](https://github.com/sgl-project/sglang/pull/45050)）
- **可中断 Prefill CUDA Graph**：现在可在任意上下文长度重放，不再局限于 `--cuda-graph-max-seq-len-prefill` 默认的 16k（[PR #43733](https://github.com/sgl-project/sglang/pull/43733)）
- **MoE 专家路由**：重构为从 layer 和 active forward 推导路由输入，修复了 EPLB 重平衡下的专家放置问题（[PR #44994](https://github.com/sgl-project/sglang/pull/44994)）
- **DeepSeek-V4.1 外部链接器池**：修复了 C4 池解引用问题，显式处理共享 C1/C2 KV/indexer 池的 offload/restore 映射（[PR #44623](https://github.com/sgl-project/sglang/pull/44623)）
- **LoRA 运行时栈**：B200、GB300、H200 的 CuTeDSL FP8 tile 表已交付；FP8/Triton/BF16 分组 GEMM 提供商现已完成（[PR #42887](https://github.com/sgl-project/sglang/pull/42887)、[PR #42886](https://github.com/sgl-project/sglang/pull/42886)、[PR #42885](https://github.com/sgl-project/sglang/pull/42885)、[PR #42884](https://github.com/sgl-project/sglang/pull/42884)）

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **严重** | CUDA 转储追踪器：pr-test.yml 收集的自动事件 | Open ([#26340](https://github.com/sgl-project/sglang/issues/26340)) |
| **高** | Runtime 角色切换：decode → prefill → decode 序列后引擎非法内存访问崩溃 | Open ([#43557](https://github.com/sgl-project/sglang/issues/43557)) |
| **高** | NGRAM 投机解码损坏 radix 缓存中的 KV（overlap scheduler，v0.5.22） | Open ([#44997](https://github.com/sgl-project/sglang/issues/44997)) |
| **高** | SM86 (FP8 Marlin) 上的 FP8 block-quantized checkpoint 在 overlap scheduler 下偶发产生错误 token | Open ([#45000](https://github.com/sgl-project/sglang/issues/45000)) |
| **中** | 授权绕过：data-plane API key 在 mesh HA 管理路由（control-plane）被接受 | Open ([#45006](https://github.com/sgl-project/sglang/issues/45006)) |
| **中** | `--enable-symm-mem`：对称内存池增长时 TP scheduler 在 `ncclCommWindowRegister` 中死锁 | Open ([#36943](https://github.com/sgl-project/sglang/issues/36943)) |
| **中** | Qwen3.8-27B 分数依赖 batch shape，边界决策会变化（FP8/BF16） | Open ([#43956](https://github.com/sgl-project/sglang/issues/43956)) |
| **低** | `pause_generation(in_place)` 后 `abort` 导致服务器挂起直到看门狗杀死 | Open ([#44835](https://github.com/sgl-project/sglang/issues/44835)) |
| **低** | `/v1/messages` 当 history 包含 thinking block 时对 gpt-oss 返回 HTTP 500 | Open ([#44932](https://github.com/sgl-project/sglang/issues/44932)) |

**已合并修复：**
- 投机解码 KV 缓存压缩：验证后刷新 `shared_read_done_event`（[PR #45049](https://github.com/sgl-project/sglang/pull/45049)）
- Scheduler：在 `convert_decode_to_extend` 中清除过期的 `encoder_swa_reset`（[PR #45042](https://github.com/sgl-project/sglang/pull/45042)）

---

## 这对应用开发者意味着什么

1. **DeepSeek V4.1 正在走向生产就绪**：优化路线图进展顺利，encoder SWA bounded replay 现可正确评分 prompt，GB300 的 megakernel 插件已就绪。

2. **v0.5.22 中的投机解码存在正确性问题**：如果将 NGRAM 投机解码与 radix cache + overlap scheduler 配合使用，输出可能会损坏。建议在修复发布前禁用 overlap scheduler 作为临时方案。

3. **旧 GPU 上的 FP8 需要谨慎**：SM86（RTX 3090）上的 block-FP8 checkpoint 在 overlap scheduler 下偶发错误 token。若对准确性要求高，请在期间禁用 overlap scheduler。

4. **授权修复待处理**：在多租户环境部署前，应处理 gateway 管理路由上的 API key 绕过问题。

5. **Blackwell 上的 LoRA 现已全面**：完整的 21 部分栈在 B200、GB300、H200 上提供 NVFP4、FP8 和 BF16 MoE LoRA 支持——微调部署已就绪。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this llama.cpp digest into Chinese, following the specific rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure:

The key elements to translate:
- "digest" - 摘要或周报
- Headings need to be translated naturally
- Tables need to be translated
- Lists need to be translated but keep technical terms
- Use Chinese punctuation throughout

Let me go through it section by section:

---

# llama.cpp 摘要 — 2026-10-19

## 1. 今日要点

llama.cpp 项目继续保持高速迭代节奏，涵盖 CUDA、Vulkan、SYCL 和 Hexagon 等多后端优化。今天的亮点包括：Qwen4Exp 的 SCALE→SIGMOID→SCALE→hc_post 融合链已移植到 CUDA (b11721)，同时 CPU 推理新增支持 IQ2–IQ6_K 量化类型。性能回退和关键 bug——尤其是量化目标上的投机解码和集成 GPU 上的 KV-cache 污染——仍是活跃的排查领域。


---

## 2. 发布与破坏性变更

| 提交 | 描述 | 链接 |
|--------|-------------|------|
| **b11721** | CUDA: 融合 Qwen4Exp 的 SCALE→SIGMOID→SCALE→hc_post 链，移植 Vulkan HC_POST_GATE 融合 (#30602) | [#30602](https://github.com/ggml-org/llama.cpp/pull/30602) |
| **b11720** | ggml: 在 CPU、CUDA、Vulkan、OpenCL 后端支持非连续 SUM 操作 (#28851) | [#28851](https://github.com/ggml-org/llama.cpp/pull/28851) |
| **b11718** | 恢复 FFN 路径的 ESIMD 内核，扩展支持 Q8_0 (#30239) | [#30239](https://github.com/ggml-org/llama.cpp/pull/30239) |

过去 24 小时内无正式版本标签发布。构建版本：b11721。

---

## 3. 新模型与硬件支持

- **量化类型**：PR #30715 为 CPU 推理引入 IQ2_K、IQ3_K、IQ4_K、IQ5_K、IQ6_K 量化格式，在现有 Q*_K 系列基础上扩展低比特选项。
- **GigaChat 3.5**：PR #25342 新增对 GigaChat-3.5-432B-A28B MoE 模型的支持（总计 432B / 激活 28B 参数），基于 DeepSeek-V3 架构。
- **Hexagon 后端**：PR #30627 为高通 Hexagon NPU 添加 Hadamard MUL_MAT 和 GET_ROW 支持，支持平面和分块 Q1_0、Q2_0 量化。
- **Intel ESIMD**：FFN 路径 ESIMD 内核已重新启用并扩展支持 Q8_0，提升 Intel GPU 推理性能。

---

## 4. 性能与优化

| PR | 领域 | 改进 |
|----|------|--------------|
| **#30775** | SYCL | Q8 快速反量化内核 — 提示评估耗时降低，Intel Arc Pro B70 吞吐量提升 2.11–5.5%；原始带宽从 437.4 GB/s 提升至 636.9 GB/s |
| **#30738** | Vulkan | 为 Q4_0 KV cache 在 Flash Attention 中添加反量化+转置快速路径；解决 FirePro D700（Tahiti/GCN1）上的严重性能下降 |
| **#30553** | CUDA | 将 MMQ Stream-K 块上限设置为可用任务数，消除空块开销并减少 fixup 内核延迟 |
| **#30351** | Vulkan | 根据设备能力动态推导 coopmat1 Flash Attention 瓦片形状（修复 Intel BMG 上静默回退到 FA_SCALAR 的问题） |
| **#30753** | OpenCL | 为 q4_0/q8_0/q4_k/q5_k/q6_k 添加向量化激活加载的 dp4a GEMM 变体，在 Adreno 内核库不可用时改善推理性能 |
| **#30756** | OpenCL** | 添加 i32 的 get_rows 和 cpy 操作，补全缺失的张量运算 |
| **#30218** | Hexagon | 在无 KV 统一的多序列场景下允许多流 Flash Attention |

---

## 5. 稳定性与回退

### 严重（进行中）

| 问题 | 描述 | 严重程度 | 链接 |
|-------|-------------|----------|------|
| **#25618** | 投机解码（draft-mtp/draft-dspark）在目标模型使用量化时（Q4_K_M 可用；bf16 可用；ngram 量化失败）产生的贪婪输出与普通推理结果不同 | **高** — 生产路径的正确性 bug | [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **#28056** | 集成 GPU（AMD Strix Halo，ROCm/HIP）上的跨请求 KV-cache 污染：process_ubatch 中缺少同步，导致零拷贝图输入与进行中的计算产生竞争，对话内容在请求间泄露 | **高** — 数据隐私问题 | [#28056](https://github.com/ggml-org/llama.cpp/issues/28056) |
| **#27329** | Qwen3.8-27B-NVFP4 在 Blackwell（RTX 5090D，sm_100）上解码挂起，CPU 空转无 GPU 工作 | **高** — Blackwell 特定挂起 | [#27329](https://github.com/ggml-org/llama.cpp/issues/27329) |
| **#23769** | Intel Arc Pro B70 Vulkan 崩溃（MoE 模型：Qwen3.6-35B-A3B-MTP、Qwen3.6-35B） | **高** — 驱动/硬件特定 | [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) |

### 值得注意（进行中/近期）

- **#26088**：Gemma 4 31B 在长时间空闲后进入无限生成循环（`<unused49>` token ID 62）—— 各 GGUF 来源均可复现。
- **#24295**：Responses API 静默丢弃 `namespace` 和 `web_search` 工具类型，导致 Codex CLI MCP 工具失效。
- **#26964**：Windows ROCm 构建未使用 GPU — 最新的 HIP Windows 构建回退。
- **#30744**：使用 CUDA 编译时出现额外分号导致的编译器警告 — 简单修复已合并。

### 已关闭/已解决

- **#25207**：AMD Strix Halo 上 Vulkan Flash Attention 严重性能下降 — 已解决。
- **#29104**：llama-server 在被 VictoriaMetrics 抓取 `/metrics` 时静默停止处理 — 已解决。
- **#29892**：RDNA4（RX 9070 XT）上 Vulkan 约 12% 的预填充回退（自 #29192 起）— 已解决。

---

## 6. 这对应用开发者意味着什么

1. **量化推理安全提醒**：如果您依赖量化目标模型（Q4_K_M 等）的投机解码，请注意贪婪输出可能与普通运行结果不同。对于关键应用，请考虑使用 bf16 目标或关注 #25618 的修复进展。

2. **集成 GPU 多租户注意**：AMD 集成 GPU（Strix Halo）上的 KV-cache 污染 bug (#28056) 对多用户或多请求场景存在数据泄露风险。在补丁发布前，避免在同一实例上运行并发请求。

3. **SYCL 性能提升**：Intel Arc Pro B70 用户可通过 Q8 反量化快速路径 (#30775) 获得 2–5% 的吞吐量提升。生产推理建议升级到最新构建版本。

4. **Vulkan 质量保证**：在较旧的 AMD GPU（Tahiti/GCN1，FirePro D700）上使用 Q4_0 KV cache 时，Flash Attention 的反量化+转置快速路径 (#30738) 可显著改善性能。

5. **新的量化选项**：IQ*_K 系列 (#30715) 为纯 CPU 部署提供了额外的低比特选项——评估您的精度/性能权衡是否有所改善。

6. **API 变更**：模型管理 API 跟踪 issue (#21779) 正在推进；未来 llama-server 将支持动态模型加载的 `/models?reload=1` 和 `/models/download` 端点。

---

*数据来源：github.com/ggml-org/llama.cpp — 提交 b11721 · 2026-10-19*</think>

# llama.cpp 摘要 — 2026-10-19

## 1. 今日要点

llama.cpp 项目继续保持高速迭代节奏，涵盖 CUDA、Vulkan、SYCL 和 Hexagon 等多后端优化。今天的亮点包括：Qwen4Exp 的 SCALE→SIGMOID→SCALE→hc_post 融合链已移植到 CUDA (b11721)，同时 CPU 推理新增支持 IQ2–IQ6_K 量化类型。性能回退和关键 bug——尤其是量化目标上的投机解码和集成 GPU 上的 KV-cache 污染——仍是活跃的排查领域。

---

## 2. 发布与破坏性变更

| 提交 | 描述 | 链接 |
|--------|-------------|------|
| **b11721** | CUDA: 融合 Qwen4Exp 的 SCALE→SIGMOID→SCALE→hc_post 链，移植 Vulkan HC_POST_GATE 融合 (#30602) | [#30602](https://github.com/ggml-org/llama.cpp/pull/30602) |
| **b11720** | ggml: 在 CPU、CUDA、Vulkan、WebGPU 后端支持非连续 SUM 操作 (#28851) | [#28851](https://github.com/ggml-org/llama.cpp/pull/28851) |
| **b11719** | ggml-cuda fattn: 当 k_VKQ_max = (k_VKQ_max - nbatch_fa) 时不检查越界 | |
| **b11718** | 恢复 FFN 路径的 ESIMD 内核，扩展支持 Q8_0 (#30239) | [#30239](https://github.com/ggml-org/llama.cpp/pull/30239) |

过去 24 小时内无正式版本标签发布。构建版本：b11721。

---

## 3. 新模型与硬件支持

- **量化类型**：PR #30715 为 CPU 推理引入 IQ2_K、IQ3_K、IQ4_K、IQ5_K、IQ6_K 量化格式，在现有 Q*_K 系列基础上扩展低比特选项。
- **GigaChat 3.5**：PR #25342 新增对 GigaChat-3.5-432B-A28B MoE 模型的支持（总计 432B / 激活 28B 参数），基于 DeepSeek-V3 架构。
- **Hexagon 后端**：PR #30627 为高通 Hexagon NPU 添加 Hadamard MUL_MAT 和 GET_ROW 支持，支持平面和分块 Q1_0、Q2_0 量化。
- **Intel ESIMD**：FFN 路径 ESIMD 内核已重新启用并扩展支持 Q8_0，提升 Intel GPU 推理性能。

---

## 4. 性能与优化

| PR | 领域 | 改进 |
|----|------|--------------|
| **#30775** | SYCL | Q8 快速反量化内核 — 提示评估耗时降低，Intel Arc Pro B70 吞吐量提升 2.11–5.5%；原始带宽从 437.4 GB/s 提升至 636.9 GB/s |
| **#30738** | Vulkan | 为 Q4_0 KV cache 在 Flash Attention 中添加反量化+转置快速路径；解决 FirePro D700（Tahiti/GCN1）上的严重性能下降 |
| **#30553** | CUDA | 将 MMQ Stream-K 块上限设置为可用任务数，消除空块开销并减少 fixup 内核延迟 |
| **#30351** | Vulkan | 根据设备能力动态推导 coopmat1 Flash Attention 瓦片形状（修复 Intel BMG 上静默回退到 FA_SCALAR 的问题） |
| **#30753** | OpenCL | 为 q4_0/q8_0/q4_k/q5_k/q6_k 添加向量化激活加载的 dp4a GEMM 变体，在 Adreno 内核库不可用时改善推理性能 |
| **#30756** | OpenCL | 添加 i32 的 get_rows 和 cpy 操作，补全缺失的张量运算 |
| **#30218** | Hexagon | 在无 KV 统一的多序列场景下允许多流 Flash Attention |

---

## 5. 稳定性与回退

### 严重（进行中）

| 问题 | 描述 | 严重程度 | 链接 |
|-------|-------------|----------|------|
| **#25618** | 投机解码（draft-mtp/draft-dspark）在目标模型使用量化时（Q4_K_M 可用；bf16 可用；ngram 量化失败）产生的贪婪输出与普通推理结果不同 | **高** — 生产路径的正确性 bug | [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **#28056** | 集成 GPU（AMD Strix Halo，ROCm/HIP）上的跨请求 KV-cache 污染：process_ubatch 中缺少同步，导致零拷贝图输入与进行中的计算产生竞争，对话内容在请求间泄露 | **高** — 数据隐私问题 | [#28056](https://github.com/ggml-org/llama.cpp/issues/28056) |
| **#27329** | Qwen3.8-27B-NVFP4 在 Blackwell（RTX 5090D，sm_100）上解码挂起，CPU 空转无 GPU 工作 | **高** — Blackwell 特定挂起 | [#27329](https://github.com/ggml-org/llama.cpp/issues/27329) |
| **#23769** | Intel Arc Pro B70 Vulkan 崩溃（MoE 模型：Qwen3.6-35B-A3B-MTP、Qwen3.6-35B） | **高** — 驱动/硬件特定 | [#23769](https://github.com/ggml-org/llama.cpp/issues/23769) |

### 值得关注（进行中/近期）

- **#26088**：Gemma 4 31B 在长时间空闲后进入无限生成循环（`<unused49>` token ID 62）—— 各 GGUF 来源均可复现。
- **#24295**：Responses API 静默丢弃 `namespace` 和 `web_search` 工具类型，导致 Codex CLI MCP 工具失效。
- **#26964**：Windows ROCm 构建未使用 GPU — 最新的 HIP Windows 构建存在回退。
- **#28056**：集成 GPU 上的跨请求 KV-cache 污染问题已关闭。
- **#30552**：更新后的生成爬取问题已关闭。
- **#27079**：Server Error dry_penalty_last_n 在 Vulkan & ROCm 上的问题已关闭。
- **#28132**：DeepSeek-V4-Flash 在 GB10 上的输出损坏问题已关闭。
- **#28933**：qwen4_exp 内存增长问题（进行中）。
- **#24888**：格式错误的 tokenizer 元数据 ASan heap-buffer-overflow 问题已关闭。
- **#25953**：严重内存泄漏问题已关闭。
- **#27966**：流式并行工具调用复用工具调用 ID 问题已关闭。
- **#28939**：DeepSeek-v4-flash-vision DSpark 未增加 tok/s 问题（进行中）。

### 已关闭/已解决

- **#25207**：AMD Strix Halo 上 Vulkan Flash Attention 严重性能下降 — 已解决。
- **#28134**：SYCL 后端在 Lunar Lake iGPU 上中止问题 — 已解决。
- **#29104**：llama-server 在被 VictoriaMetrics 抓取 `/metrics` 时静默停止处理 — 已解决。
- **#30552**：更新后的生成爬取问题 — 已关闭。
- **#27079**：Server Error dry_penalty_last_n 在 Vulkan & ROCm 上的问题 — 已关闭。
- **#28132**：DeepSeek-V4-Flash 在 GB10 上的输出损坏 — 已关闭。
- **#24888**：格式错误的 tokenizer 元数据 ASan heap-buffer-overflow — 已关闭。
- **#25953**：严重内存泄漏 — 已关闭。
- **#27966**：流式并行工具调用复用工具调用 ID — 已关闭。
- **#28056**：集成 GPU 上的跨请求 KV-cache 污染 — 已关闭。

---

## 6. 这对应用开发者意味着什么

1. **量化推理安全提醒**：如果您依赖量化目标模型（Q4_K_M 等）的投机解码，请注意贪婪输出可能与普通运行结果不同。对于关键应用，请考虑使用 bf16 目标或关注 #25618 的修复进展。

2. **集成 GPU 多租户注意**：AMD 集成 GPU（Strix Halo）上的 KV-cache 污染 bug (#28056) 对多用户或多请求场景存在数据泄露风险。在补丁发布前，避免在同一实例上运行并发请求。

3. **SYCL 性能提升**：Intel Arc Pro B70 用户可通过 Q8 反量化快速路径 (#30775) 获得 2–5% 的吞吐量提升。生产推理建议升级到最新构建版本。

4. **Vulkan 质量保证**：在较旧的 AMD GPU（Tahiti/GCN1，FirePro D700）上使用 Q4_0 KV cache 时，Flash Attention 的反量化+转置快速路径 (#30738) 可显著改善性能。

5. **新的量化选项**：IQ*_K 系列 (#30715) 为纯 CPU 部署提供了额外的低比特选项——评估您的精度/性能权衡是否有所改善。

6. **API 变更**：模型管理 API 跟踪 issue (#21779) 正在推进；未来 llama-server 将支持动态模型加载的 `/models?reload=1` 和 `/models/download` 端点。

---

*数据来源：github.com/ggml-org/llama.cpp — 提交 b11721 · 2026-10-19*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English digest into Chinese while preserving the exact Markdown structure. Let me translate this carefully following all the rules:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, links, numbers, dates, code spans, etc. verbatim
4. Keep project names, repo slugs, usernames, version tags, file paths, API/config identifiers untranslated
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

# Ollama Daily Digest - October 18, 2026

→ # Ollama 每日简报 - 2026年10月18日

## 1. Today's Highlights

→ ## 1. 今日要点

## 2. Releases & Breaking Changes

→ ## 2. 版本发布与重大变更

## 3. New Model & Hardware Support

→ ## 3. 新模型与硬件支持

## 4. Performance & Optimization

→ ## 4. 性能与优化

## 5. Stability & Regressions

→ ## 5. 稳定性与回归问题

## 6. What This Means for Application Developers

→ ## 6. 这对应用开发者意味着什么

Now the content. Let me translate the body of each section:

"Today's key developments focus on parser fixes for thinking token handling across multiple model families (Qwen3, OLMo3), a streaming timestamp consistency fix, and a notable feature request for native Apple Foundation Models support. The most impactful change for developers is the series of PRs addressing whitespace and newline artifacts in thinking/content fields that have caused rendering issues in downstream applications."

→ 今日关键进展集中在多个模型系列（Qwen3、OLMo3）的思考令牌解析修复、流式响应时间戳一致性修复，以及一项关于原生支持 Apple Foundation Models 的重要功能请求。对开发者影响最大的是一系列 PR，这些 PR 修复了思考/内容字段中的空白符和换行符伪影问题，这些问题已导致下游应用出现渲染错误。

"No new releases or breaking changes were reported today."

→ 今日未报告新版本发布或重大变更。

"- **[Feature Request: Native Apple Foundation Models](https://github.com/ollama/ollama/issues/19116)** - Request to add native support for Apple's on-device Foundation Models framework on macOS, allowing users to run system-provided models through Ollama's existing CLI and APIs."

→ - **[功能请求：原生 Apple Foundation Models 支持](https://github.com/ollama/ollama/issues/19116)** - 请求添加对 Apple macOS 端侧 Foundation Models 框架的原生支持，允许用户通过 Ollama 现有 CLI 和 API 运行系统提供的模型。

"- **[Jetson Orin Nano 8GB Compatibility Issue](https://github.com/ollama/ollama/issues/19115)** - `gemma4:e4b-it-qat` fails at `num_ctx 16384` on Jetson Orin Nano 8GB (JetPack 7/CUDA 13), aborting during compute buffer allocation. Works at `num_ctx 8192` but with severe performance degradation (~2 tok/s)."

→ - **[Jetson Orin Nano 8GB 兼容性问题](https://github.com/ollama/ollama/issues/19115)** - `gemma4:e4b-it-qat` 在 Jetson Orin Nano 8GB（JetPack 7/CUDA 13）上设置 `num_ctx 16384` 时失败，在计算缓冲区分配阶段中止。在 `num_ctx 8192` 时可运行但性能严重下降（约 2 tok/s）。问题在 v0.35.1 中不存在。

"No specific performance optimizations with concrete numbers were reported today."

→ 今日未报告具体数值的性能优化。

Now the table:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | [qwen3-thinking: thinking field begins with `\n`](https://github.com/ollama/ollama/issues/19107) | Open | [#19108](https://github.com/ollama/ollama/pull/19108) |
| **Medium** | [olmo3-think: content starts with newlines after `</think>

`](https://github.com/ollama/ollama/issues/19103) | Closed | [#19104](https://github.com/ollama/ollama/pull/19104) |
| **Medium** | [Streaming: `created_at` changes between response events](https://github.com/ollama/ollama/issues/19105) | Closed | [#19106](https://github.com/ollama/ollama/pull/19106) |
| **Medium** | [Anthropic: thinking dropped after text/tool_use in streams](https://github.com/ollama/ollama/issues/19110) | Open | - |
| **Low** | [qwen3-coder: tool calls lost when reasoning precedes call](https://github.com/ollama/ollama/issues/18530) | Open | - |
| **Low** | [qwen3-coder: random tool schema key order breaks prompt cache](https://github.com/ollama/ollama/issues/18430) | Open | - |
| **Low** | [OpenAI兼容: `reasoning_content` silently ignored](https://github.com/ollama/ollama/issues/18534) | Open | - |

The table needs translation for severity levels and status columns, but keeping the issue titles in English where they appear in the original. I'll translate the columns and structure while maintaining the technical content.

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **Medium** | [qwen3-thinking: thinking field begins with `\n`](https://github.com/ollama/ollama/issues/19107) | Open | [#19108](https://github.com/ollama/ollama/pull/19108) |
| **Medium** | [olmo3-think: content starts with newlines after `
</think>

`](https://github.com/ollama/ollama/issues/19103) | Closed | [#19104](https://github.com/ollama/ollama/pull/19104) |
| **Medium** | [Streaming: `created_at` changes between response events](https://github.com/ollama/ollama/issues/19105) | Closed | [#19106](https://github.com/ollama/ollama/pull/19106) |
| **Medium** | [Anthropic: thinking dropped after text/tool_use in streams](https://github.com/ollama/ollama/issues/19110) | Open | - |
| **Low** | [qwen3-coder: tool calls lost when reasoning precedes call](https://github.com/ollama/ollama/issues/18530) | Open | - |
| **Low** | [qwen3-coder: random tool schema key order breaks prompt cache](https://github.com/ollama/ollama/issues/18430) | Open | - |
| **Low** | [OpenAI兼容: `reasoning_content` silently ignored](https://github.com/ollama/ollama/issues/18534) | Open | - |

The last section provides actionable guidance for developers. Key takeaways include parser fixes that will remove leading whitespace from thinking and content fields, which downstream applications currently handle manually and may need to adjust once deployed. The streaming timestamp fix ensures `response.created` remains consistent across events, which is important for request timing tracking. There's also a notable bug where tool calls might be silently dropped when using reasoning-before-tool-call patterns with qwen3-coder, and inconsistent cache hits when sending identical tool-enabled requests due to schema key ordering issues.
</think>

# Ollama 每日简报 - 2026年10月18日

## 1. 今日要点

今日关键进展集中在多个模型系列（Qwen3、OLMo3）的思考令牌解析修复、流式响应时间戳一致性修复，以及一项关于原生支持 Apple Foundation Models 的重要功能请求。对开发者影响最大的是一系列 PR，这些 PR 修复了思考/内容字段中的空白符和换行符伪影问题，这些问题已导致下游应用出现渲染错误。

## 2. 版本发布与重大变更

今日未报告新版本发布或重大变更。

## 3. 新模型与硬件支持

- **[功能请求：原生 Apple Foundation Models 支持](https://github.com/ollama/ollama/issues/19116)** - 请求添加对 Apple macOS 端侧 Foundation Models 框架的原生支持，允许用户通过 Ollama 现有 CLI 和 API 运行系统提供的模型。

- **[Jetson Orin Nano 8GB 兼容性问题](https://github.com/ollama/ollama/issues/19115)** - `gemma4:e4b-it-qat` 在 Jetson Orin Nano 8GB（JetPack 7/CUDA 13）上设置 `num_ctx 16384` 时失败，在计算缓冲区分配阶段中止。在 `num_ctx 8192` 时可运行但性能严重下降（约 2 tok/s）。该问题在 v0.35.1 中不存在。

## 4. 性能与优化

今日未报告具体数值的性能优化。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **Medium** | [qwen3-thinking: thinking field begins with `\n`](https://github.com/ollama/ollama/issues/19107) | Open | [#19108](https://github.com/ollama/ollama/pull/19108) |
| **Medium** | [olmo3-think: content starts with newlines after `
</think>

`](https://github.com/ollama/ollama/issues/19103) | Closed | [#19104](https://github.com/ollama/ollama/pull/19104) |
| **Medium** | [Streaming: `created_at` changes between response events](https://github.com/ollama/ollama/issues/19105) | Closed | [#19106](https://github.com/ollama/ollama/pull/19106) |
| **Medium** | [Anthropic: thinking dropped after text/tool_use in streams](https://github.com/ollama/ollama/issues/19110) | Open | - |
| **Low** | [qwen3-coder: tool calls lost when reasoning precedes call](https://github.com/ollama/ollama/issues/18530) | Open | - |
| **Low** | [qwen3-coder: random tool schema key order breaks prompt cache](https://github.com/ollama/ollama/issues/18430) | Open | - |
| **Low** | [OpenAI兼容: `reasoning_content` silently ignored](https://github.com/ollama/ollama/issues/18534) | Open | - |

## 6. 这对应用开发者意味着什么

- **解析器修复即将推出**：[#19108](https://github.com/ollama/ollama/pull/19108) 和 [#19104](https://github.com/ollama/ollama/pull/19104) 中的空白符 trimming 修复将清理思考和内容字段中的前导换行符。目前手动处理这些问题的应用在部署后可能需要调整逻辑。

- **流式时间戳将保持一致**：[#19106](https://github.com/ollama/ollama/pull/19106) 中的修复确保 `response.created` 在流式事件中保持稳定，这对于追踪请求时间的应用非常重要。

- **工具调用可靠性**：qwen3-coder 的工具调用丢失问题（[#18530](https://github.com/ollama/ollama/issues/18530)）影响了使用"先推理后工具调用"模式的应用，在问题解决前需监控静默失败情况。

- **提示词缓存注意**：向 qwen3-coder 发送相同工具启用请求的应用可能因架构键顺序问题（[#18430](https://github.com/ollama/ollama/issues/18430)）而遇到不一致的缓存命中。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this digest carefully, maintaining all formatting and keeping technical terms in their original form where appropriate.

I'll go through section by section:

## Today's Highlights
LiteLLM 发布了两个版本（v1.106.0 和 v1.107.0-rc.1），新增 Docker 镜像签名验证功能。代理层持续修复 LLM 翻译的边界情况——包括 Claude 5.5 的强制 tool_choice 处理和向 Azure AI 透传 stop_sequences——同时新增 OceanToken provider，PR 中也引入了 Rust 原生 cache_control 注入。

## Releases & Breaking Changes

| 版本 | 备注 |
|------|------|
| **v1.107.0-rc.1** | 包含 Docker 镜像 cosign 验证的 RC 版本 |
| **v1.106.0** | 稳定版，包含 Docker 镜像 cosign 验证 |

所有 LiteLLM Docker 镜像现均已使用 cosign 签名，签名密钥来自 commit `0112e53`。使用 `cosign verify` 验证——参见 [BerriAI/litellm#0112e53](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)。


## 新模型与硬件支持

OceanToken provider 现已支持 `oceantoken/<publisher>/<model>` 作为 JSON 配置的 OpenAI 兼容 provider（`https://api.oceantoken.ai/v1`）。GitHub Copilot GPT-5.6 的上游 `/responses` 支持已在 issue #33893 中提出。PR #47286 移除了 GLM 5.3 行项目。

## 性能与优化

Rust `/v1` 端点现在支持原生的 `cache_control` 注入以优化提示缓存。PR #47002 引入了 Python/Rust 共享的漂移检测机制。

推理层进行了重构，将 `prepare` 阶段合并到各个 handler 中，减少了聊天、消息、OCR、响应和转录等功能的代码样板，并修复了执行顺序问题。VLLM 缓存令牌的修复解决了成本计算器显示"Cache Read Tokens: 0"的问题。PR #32273 为 Gemini 2.5 禁用了惩罚参数。

## 稳定性与回归问题

有几个高优先级问题需要关注。#46045 中当设置 tools 时出现 `ModuleNotFoundError: No module named 'mcp'` 的问题仍未解决。#33075 中 Claude Code 的 `/v1/messages` 将 `stop_sequences` 直接转发给 OpenAI 格式的 provider（如 Azure AI），导致 400 错误，现已修复。#46074 中强制 `tool_choice` 被转发给 Claude 5.5（Opus/Sonnet），但该版本拒绝接受该参数。

中等级别的问题包括：#46958 中团队作用域模型自 v1.103.0 起批量检索返回 403；#39322 中 least-busy 路由导致部署饥饿，响应缓存命中使计数器变为负值；#46469 中 complexity_router 的分类器成本未被归入 spend/budget；#40822 中 Helm chart 部署空的安全上下文导致 Pod 以 root 身份运行。低优先级问题包括 #47261 中 Ollama 嵌入忽略 api_key、超时等配置。

对于应用开发的影响：Docker 部署现可验证镜像签名，应在生产部署前使用 cosign 验证最新镜像。在路由 Anthropic 风格请求时需注意，Claude 5.5 通过 `/v1/messages` 调用 Opus/Sonnet 5.5 时应避免使用 `{"type": "any"}` 或强制工具调用，应使用 `/chat/completions` 路径。

此外，团队作用域模型的批量检索在 v1.103+ 中存在 403 问题，使用 MCP 工具需确保安装 `mcp` 包，直接调用 `ollama/` 嵌入模型时会丢失 api_key 等配置，OceanToken 模型现已支持 JSON 配置。</think>

# LiteLLM 动态 — 2026-10-19

## 今日要点

LiteLLM 发布了两个版本（v1.106.0 和 v1.107.0-rc.1），新增 Docker 镜像签名验证功能。代理层持续修复 LLM 翻译的边界情况——包括 Claude 5.5 的强制 tool_choice 处理和向 Azure AI 透传 stop_sequences——同时新增 OceanToken provider，PR 中也引入了 Rust 原生 cache_control 注入。

---

## 版本发布与重大变更

| 版本 | 备注 |
|------|------|
| **v1.107.0-rc.1** | 包含 Docker 镜像 cosign 验证的 RC 版本 |
| **v1.106.0** | 稳定版，包含 Docker 镜像 cosign 验证 |

所有 LiteLLM Docker 镜像现均已使用 cosign 签名，签名密钥来自 commit `0112e53`。使用 `cosign verify` 验证——参见 [BerriAI/litellm#0112e53](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)。

---

## 新模型与硬件支持

- **OceanToken provider** — PR [#47287](https://github.com/BerriAI/litellm/pull/47287) 新增 `oceantoken/<publisher>/<model>` 作为 JSON 配置的 OpenAI 兼容 provider（`https://api.oceantoken.ai/v1`）。
- **GitHub Copilot GPT-5.6** — 功能请求已提交至 [#33893](https://github.com/BerriAI/litellm/issues/33893)，请求上游 `/responses` 支持。
- **GLM 5.3 已移除** — PR [#47286](https://github.com/BerriAI/litellm/pull/47286) 在 CoralBricks 弃用该模型后，从成本表中删除了 GLM 5.3 行。

---

## 性能与优化

| 领域 | 变更 | PR/Issue |
|------|------|----------|
| **Rust /v1/messages** | 原生 `cache_control` 注入，支持提示缓存 | [#47284](https://github.com/BerriAI/litellm/pull/47284) |
| **漂移检测** | Python/Rust 共享漂移清单策略，用于 CI | [#47002](https://github.com/BerriAI/litellm/pull/47002) |
| **推理重构** | 将 `prepare` 阶段折叠至 handlers，减少 chat、messages、OCR、responses、transcription 的样板代码，修复顺序问题 | [#47218](https://github.com/BerriAI/litellm/pull/47218)、[#47217](https://github.com/BerriAI/litellm/pull/47217)、[#47216](https://github.com/BerriAI/litellm/pull/47216)、[#47215](https://github.com/BerriAI/litellm/pull/47215)、[#47214](https://github.com/BerriAI/litellm/pull/47214) |
| **VLLM 缓存 token** | 修复成本计算器显示 "Cache Read Tokens: 0" 的问题，即使存在缓存 token | [#22986](https://github.com/BerriAI/litellm/pull/22986) |
| **Gemini 2.5 penalty 参数** | 为 Gemini 2.5 模型禁用 penalty 参数 | [#32273](https://github.com/BerriAI/litellm/pull/32273) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | [#46045](https://github.com/BerriAI/litellm/issues/46045) — 设置 tools 时出现 `ModuleNotFoundError: No module named 'mcp'` | 待解决 |
| **高** | [#33075](https://github.com/BerriAI/litellm/issues/33075) — Claude Code `/v1/messages` 将 `stop_sequences` 原样转发给 OpenAI 格式 provider（Azure AI），导致 400 "Unknown parameter" | 已关闭 — 已修复 |
| **高** | [#46074](https://github.com/BerriAI/litellm/issues/46074) — 强制 `tool_choice` 被转发给 Claude 5.5（Opus/Sonnet），但其拒绝接受 | 待解决 |
| **中** | [#46958](https://github.com/BerriAI/litellm/issues/46958) — 自 v1.103.0 起，团队作用域模型的批量检索返回 403 | 待解决 |
| **中** | [#39322](https://github.com/BerriAI/litellm/issues/39322) — least-busy 路由导致部署饥饿；response-cache 命中使计数器变为负值，平局总是选择第一个 | 待解决 |
| **中** | [#46469](https://github.com/BerriAI/litellm/issues/46469) — complexity_router 分类器成本未计入 spend/budget | 待解决 |
| **中** | [#40822](https://github.com/BerriAI/litellm/issues/40822) — Helm chart 部署空的 `podSecurityContext`/`securityContext`，Pod 以 root 身份运行 | 待解决 |
| **低** | [#47261](https://github.com/BerriAI/litellm/issues/47261) — Ollama embeddings 忽略 `api_key`、extra headers 和 timeout | 待解决 |
| **低** | [#47258](https://github.com/BerriAI/litellm/issues/47258) — `aiohttp_openai` 从 chat completion 响应中丢弃 `service_tier` | 待解决 |

---

## 这对应用开发者意味着什么

1. **Docker 部署现可验证** — 拉取最新镜像并在生产部署前使用 cosign 验证签名。

2. **避免在 Claude 5.5 上使用强制 tool_choice** — 如果通过 LiteLLM 的 `/v1/messages` 端点将 Anthropic 风格请求路由到 Opus/Sonnet 5.5，请避免使用 `{"type": "any"}` 或强制工具调用；原生 `/chat/completions` 路径可正确处理此问题（[#46074](https://github.com/BerriAI/litellm/issues/46074)）。

3. **v1.103+ 中团队作用域批量检索损坏** — 如果在批量端点使用团队作用域模型，`GET /v1/batches/{batch_id}` 会返回 403（[#46958](https://github.com/BerriAI/litellm/issues/46958)）。

4. **MCP 导入需要 `mcp` 包** — 代理现在有条件地导入 `litellm.responses.mcp.chat_completions_handler`，但预期 `mcp` 包已安装。使用 MCP tools 时请确保将其加入依赖项。

5. **Ollama embeddings 缺少 auth/timeout** — 直接调用 `ollama/` embedding 模型当前会剥离 `api_key`、headers 和 timeout；保护 embedding 端点时请考虑这一点（[#47261](https://github.com/BerriAI/litellm/issues/47261)）。

6. **新 OceanToken provider 可用** — 如果使用 OceanToken 的模型，现在可以通过 JSON 配置它们，无需自定义 handler（[#47287](https://github.com/BerriAI/litellm/pull/47287)）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the entire "Unsloth Digest — 2026-10-19" report from English to Chinese. Let me carefully translate while:

1. Keeping all Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. Preserving URLs, link targets, code spans, code blocks, numbers and dates verbatim
3. Keeping project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
4. Issue/PR references like #12345 stay as-is
5. Using natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## Today's Highlights
今日要闻

The Unsloth Studio team is pushing significant infrastructure work around multi-model management and inference backend expansion.
Unsloth Studio 团队正在推进多模型管理和推理后端扩展的基础设施建设工作。

PR [#14149](https://github.com/unslothai/unsloth/pull/14149) introduces **DeepInfra** as a native API provider with OpenAI-compatible endpoints, broadening deployment options beyond vLLM.
PR [#14149](https://github.com/unslothai/unsloth/pull/14149) 引入了 **DeepInfra** 作为原生 API 提供商，支持 OpenAI 兼容的端点，扩展了除 vLLM 之外的部署选项。

Meanwhile, a stacked series of PRs ([#14088](https://github.com/unslothai/unsloth/pull/14088), [#14089](https://github.com/unslothai/unsloth/pull/14089), [#14090](https://github.com/unslothai/unsloth/pull/14090)) brings granular control over multi-model loading with an "Always" mode, full visibility into load/unload events, and enhanced MCP agent capabilities for long-running work.
同时，一系列 PR（[#14088](https://github.com/unslothai/unsloth/pull/14088)、[#14089](https://github.com/unslothai/unsloth/pull/14089)、[#14090](https://github.com/unslothai/unsloth/pull/14090））带来了多模型加载的细粒度控制，包括"Always"模式、全面了解加载/卸载事件，以及增强的 MCP 代理处理长时间运行任务的能力。

This shift toward production-grade multi-tenant inference serving marks a significant evolution in Unsloth's capabilities.
这一转变标志着 Unsloth 向生产级多租户推理服务的重要演进。

---

## Releases & Breaking Changes

发布与重大变更

**No releases in the last 24 hours.** The beta channel (v0.1.908-beta) continues to receive fixes via PR merges rather than tagged releases.
**过去 24 小时内无发布。** Beta 频道（v0.1.908-beta）继续通过 PR 合并而非标签发布的方式接收修复。

---

## New Model & Hardware Support

新模型与硬件支持

- **DeepInfra Integration** — PR [#14149](https://github.com/unslothai/unsloth/pull/14149) adds DeepInfra to Studio's Connections with OpenAI-compatible endpoint `https://api.deepinfra.com/v1/openai`, including **service_tier** support for advanced routing.
- **DeepInfra 集成** — PR [#14149](https://github.com/unslothai/unsloth/pull/14149) 将 DeepInfra 添加到 Studio 的连接中，提供 OpenAI 兼容端点 `https://api.deepinfra.com/v1/openai`，并支持 **service_tier** 参数用于高级路由。

- **Mamba-2 Hybrid Optimizations** — PR [#14160](https://github.com/unslothai/unsloth/pull/14160) enables Mamba-2 hybrids (Nemotron-H, Falcon-H1, Granite-4.0-H, Bamba, Zamba2, Mamba2) to use an extension-free **224 KB mamba-ssm wheel** instead of the 230–594 MB full build when Unsloth-zoo runs causal convolutions on Triton.
- **Mamba-2 混合模型优化** — PR [#14160](https://github.com/unslothai/unsloth/pull/14160) 使 Mamba-2 混合模型（Nemotron-H、Falcon-H1、Granite-4.0-H、Bamba、Zamba2、Mamba2）能够使用无扩展名的 **224 KB mamba-ssm wheel**，而非 230–594 MB 的完整构建，当 Unsloth-zoo 在 Triton 上运行因果卷积时。

- **Qwen Causal-Conv1d On-Demand** — PR [#13971](https://github.com/unslothai/unsloth/pull/13971) restores Qwen causal-conv1d support on demand and narrows fatal mamba-ssm behavior.
- **Qwen Causal-Conv1d 按需加载** — PR [#13971](https://github.com/unslothai/unsloth/pull/13971) 按需恢复 Qwen causal-conv1d 支持，并收紧了致命的 mamba-ssm 行为。

---

## Performance & Optimization

性能与优化

| Area | Change | Impact |
|------|--------|--------|
| **Qwen Decode Throughput** | Causal-conv1d restoration | **+4.4%** on Kaggle T4 (19.10 → 19.95 tok/s, FP16, Qwen3.5-0.8B) — per [#13971](https://github.com/unslothai/unsloth/pull/13971) |
| **Qwen 解码吞吐量** | Causal-conv1d 恢复 | **+4.4%** 在 Kaggle T4（19.10 → 19.95 tok/s，FP16，Qwen3.5-0.8B）— 根据 [#13971](https://github.com/unslothai/unsloth/pull/13971) |
| **Context Parallelism** | Trainer method wrapping deferred until CP-enabled | Reduced import-time overhead; only wraps once trainer enables CP — per [#14152](https://github.com/unslothai/unsloth/pull/14152) |
| **上下文并行** | 训练器方法包装延迟到 CP 启用时 | 减少导入时开销；仅在训练器启用 CP 时包装一次 — 根据 [#14152](https://github.com/unslothai/unsloth/pull/14152) |
| **RAG Tool Call Archiving** | Use space positions instead of word splits | Eliminates minutes-long CPU stalls on long chats with large tool calls — per [#14098](https://github.com/unslothai/unsloth/pull/14098) |
| **RAG 工具调用归档** | 使用空格位置而非单词分割 | 消除大型工具调用长对话中长达数分钟的 CPU 停滞 — 根据 [#14098](https://github.com/unslothai/unsloth/pull/14098) |
| **Startup Bundle** | Prompt upsampler moved out of startup chunks | Fixes bundle size budget overflow (2001.1 KB → below 1999.6 KB) — per [#14168](https://github.com/unslothai/unsloth/pull/14168) |
| **启动包** | 提示词上采样移出启动块 | 修复包大小预算溢出（2001.1 KB → 低于 1999.6 KB）— 根据 [#14168](https://github.com/unslothai/unsloth/pull/14168) |

---

## Stability & Regressions

稳定性与回归

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Chat input disappears after first reply (v0.1.906-beta) | Closed | — |
| **高** | 首次回复后聊天输入框消失（v0.1.906-beta） | 已关闭 | — |
| **High** | P100 crashing since last update (CUDA invalid argument in `ggml_cuda_kernel_launch`) | Open | — |
| **高** | P100 自上次更新后崩溃（`ggml_cuda_kernel_launch` 中的 CUDA 无效参数） | 待处理 | — |
| **High** | Mac M4 Max 64GB host crash when multiple models don't fit in memory | Open | — |
| **高** | Mac M4 Max 64GB 在多个模型无法放入内存时主机崩溃 | 待处理 | — |
| **Medium** | MAC v0.1.908-beta: `scrollbarGutter.includes` undefined | Closed | — |
| **中** | MAC v0.1.908-beta：`scrollbarGutter.includes` 未定义 | 已关闭 | — |
| **Medium** | Mobile UI: download progress overlaps send button | Closed | [#14163](https://github.com/unslothai/unsloth/pull/14163) |
| **中** | 移动端 UI：下载进度遮挡发送按钮 | 已关闭 | [#14163](https://github.com/unslothai/unsloth/pull/14163) |
| **Medium** | Sampling settings corrupted on preset save | Open | — |
| **中** | 预设保存时采样设置损坏 | 待处理 | — |
| **Medium** | Cannot unload rogue model when multiple loaded | Open | [#14161](https://github.com/unslothai/unsloth/pull/14161) (in progress) |
| **中** | 多个模型加载时无法卸载失控模型 | 待处理 | [#14161](https://github.com/unslothai/unsloth/pull/14161)（进行中）|
| **Low** | Keyboard shortcuts UI mismatches alternative keyboard layouts | Open | — |
| **低** | 键盘快捷键 UI 与备用键盘布局不匹配 | 待处理 | — |

---

## What This Means for Application Developers

这对应用开发者意味着什么

1. **Broader Inference Backend Options** — With DeepInfra now supported alongside vLLM, developers can mix local GGUF inference with cloud DeepInfra endpoints through a unified Studio interface. The `service_tier` parameter enables cost/performance tier selection.
1. **更广泛的推理后端选项** — 随着 DeepInfra 现已与 vLLM 一起支持，开发者可以通过统一的 Studio 界面混合本地 GGUF 推理与云端 DeepInfra 端点。`service_tier` 参数支持成本/性能层级选择。

2. **Multi-Model Serving Gets Serious** — The "Always" option for keeping models loaded, combined with per-model load/unload event tracking, makes Unsloth Studio more viable for multi-tenant or multi-agent deployments where model residency matters. MCP agents can now preview loads and queue video generation tasks.
2. **多模型服务走向成熟** — "Always"选项用于保持模型加载，结合每个模型的加载/卸载事件跟踪，使 Unsloth Studio 在模型驻留重要的多租户或多代理部署中更加可行。MCP 代理现在可以预览加载并排队视频生成任务。

3. **Memory Efficiency Gains** — Mamba-2 model users benefit from a ~99% reduction in mamba-ssm wheel size (224 KB vs. 230–594 MB), reducing installation bloat and cold-start latency. This matters for hybrid architectures increasingly common in reasoning models.
3. **内存效率提升** — Mamba-2 模型用户受益于 mamba-ssm wheel 大小减少约 99%（224 KB vs. 230–594 MB），减少了安装膨胀和冷启动延迟。这对推理模型中越来越常见的混合架构很重要。

4. **RAG Latency Fixes** — The RAG tool-call archival fix eliminates a blocking CPU bottleneck that could stall inference for minutes on long conversation histories — critical for production chat applications.
4. **RAG 延迟修复** — RAG 工具调用归档修复消除了可能使长对话历史推理停滞数分钟的阻塞性 CPU 瓶颈——这对于生产聊天应用至关重要。

5. **Watch Those Mobile UIs** — If you embed Unsloth Studio in a mobile web view, the download button overlap issue is now fixed, but test narrow-width layouts thoroughly — the studio is actively hardening responsive behavior.
5. **关注移动端 UI** — 如果您在移动网页视图中嵌入 Unsloth Studio，下载按钮重叠问题现已修复，但请彻底测试窄宽度布局——工作室正在积极强化响应式行为。

6. **Watch for P100 Regressions** — The CUDA kernel launch error on P100 (Compute Capability 6.0) appears post-update; if you deploy on older Pascal GPUs, monitor for failures or consider sticking with the prior release until a fix lands.
6. **关注 P100 回归** — P100（计算能力 6.0）上的 CUDA 内核启动错误出现在更新后；如果您部署在较旧的 Pascal GPU 上，请监控故障或考虑坚持使用之前的版本，直到修复发布。</think>

# Unsloth Digest — 2026-10-19

## 今日要闻

Unsloth Studio 团队正在推进多模型管理和推理后端扩展的基础设施建设工作。PR [#14149](https://github.com/unslothai/unsloth/pull/14149) 引入了 **DeepInfra** 作为原生 API 提供商，支持 OpenAI 兼容的端点，扩展了除 vLLM 之外的部署选项。同时，一系列 PR（[#14088](https://github.com/unslothai/unsloth/pull/14088)、[#14089](https://github.com/unslothai/unsloth/pull/14089)、[#14090](https://github.com/unslothai/unsloth/pull/14090)）带来了多模型加载的细粒度控制，包括"Always"模式、全面了解加载/卸载事件，以及增强的 MCP 代理处理长时间运行任务的能力。这些变化标志着 Unsloth 向生产级多租户推理服务的演进。

---

## 发布与重大变更

**过去 24 小时内无发布。** Beta 频道（v0.1.908-beta）继续通过 PR 合并而非标签发布的方式接收修复。

---

## 新模型与硬件支持

- **DeepInfra 集成** — PR [#14149](https://github.com/unslothai/unsloth/pull/14149) 将 DeepInfra 添加到 Studio 的连接中，提供 OpenAI 兼容端点 `https://api.deepinfra.com/v1/openai`，并支持 **service_tier** 参数用于高级路由。

- **Mamba-2 混合模型优化** — PR [#14160](https://github.com/unslothai/unsloth/pull/14160) 使 Mamba-2 混合模型（Nemotron-H、Falcon-H1、Granite-4.0-H、Bamba、Zamba2、Mamba2）能够使用无扩展名的 **224 KB mamba-ssm wheel**，而非 230–594 MB 的完整构建，当 Unsloth-zoo 在 Triton 上运行因果卷积时。

- **Qwen Causal-Conv1d 按需加载** — PR [#13971](https://github.com/unslothai/unsloth/pull/13971) 按需恢复 Qwen causal-conv1d 支持，并收紧了致命的 mamba-ssm 行为。

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **Qwen 解码吞吐量** | Causal-conv1d 恢复 | **+4.4%** 在 Kaggle T4（19.10 → 19.95 tok/s，FP16，Qwen3.5-0.8B）— 根据 [#13971](https://github.com/unslothai/unsloth/pull/13971) |
| **上下文并行** | 训练器方法包装延迟到 CP 启用时 | 减少导入时开销；仅在训练器启用 CP 时包装一次 — 根据 [#14152](https://github.com/unslothai/unsloth/pull/14152) |
| **RAG 工具调用归档** | 使用空格位置而非单词分割 | 消除大型工具调用长对话中长达数分钟的 CPU 停滞 — 根据 [#14098](https://github.com/unslothai/unsloth/pull/14098) |
| **启动包** | 提示词上采样移出启动块 | 修复包大小预算溢出（2001.1 KB → 低于 1999.6 KB）— 根据 [#14168](https://github.com/unslothai/unsloth/pull/14168) |

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | 首次回复后聊天输入框消失（v0.1.906-beta） | 已关闭 | — |
| **高** | P100 自上次更新后崩溃（`ggml_cuda_kernel_launch` 中的 CUDA 无效参数） | 待处理 | — |
| **高** | Mac M4 Max 64GB 在多个模型无法放入内存时主机崩溃 | 待处理 | — |
| **中** | MAC v0.1.908-beta：`scrollbarGutter.includes` 未定义 | 已关闭 | — |
| **中** | 移动端 UI：下载进度遮挡发送按钮 | 已关闭 | [#14163](https://github.com/unslothai/unsloth/pull/14163) |
| **中** | 预设保存时采样设置损坏 | 待处理 | — |
| **中** | 多个模型加载时无法卸载失控模型 | 待处理 | [#14161](https://github.com/unslothai/unsloth/pull/14161)（进行中）|
| **低** | 键盘快捷键 UI 与备用键盘布局不匹配 | 待处理 | — |

---

## 这对应用开发者意味着什么

1. **更广泛的推理后端选项** — 随着 DeepInfra 现已与 vLLM 一起支持，开发者可以通过统一的 Studio 界面混合本地 GGUF 推理与云端 DeepInfra 端点。`service_tier` 参数支持成本/性能层级选择。

2. **多模型服务走向成熟** — "Always"选项用于保持模型加载，结合每个模型的加载/卸载事件跟踪，使 Unsloth Studio 在模型驻留重要的多租户或多代理部署中更加可行。MCP 代理现在可以预览加载并排队视频生成任务。

3. **内存效率提升** — Mamba-2 模型用户受益于 mamba-ssm wheel 大小减少约 99%（224 KB vs. 230–594 MB），减少了安装膨胀和冷启动延迟。这对推理模型中越来越常见的混合架构很重要。

4. **RAG 延迟修复** — RAG 工具调用归档修复消除了可能使长对话历史推理停滞数分钟的阻塞性 CPU 瓶颈——这对于生产聊天应用至关重要。

5. **关注移动端 UI** — 如果您在移动网页视图中嵌入 Unsloth Studio，下载按钮重叠问题现已修复，但请彻底测试窄宽度布局——工作室正在积极强化响应式行为。

6. **关注 P100 回归** — P100（计算能力 6.0）上的 CUDA 内核启动错误出现在更新后；如果您部署在较旧的 Pascal GPU 上，请监控故障或考虑坚持使用之前的版本，直到修复发布。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*