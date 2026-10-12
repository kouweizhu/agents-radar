# AI 基础设施日报 2026-10-12

> 生成时间: 2026-10-12 01:40 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this cross-project comparison report from English to Chinese. Let me carefully follow the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the structure and technical terms.</think>

# 跨项目对比报告：AI 推理与服务生态系统

## 1. 生态系统概览

AI 推理栈正经历一段高度专业化的活跃期。本期动态显示三条明显的技术演进路线：(1) Blackwell（SM120）硬件支持推动 vLLM 和 SGLang 的优化，(2) llama.cpp 在 OpenCL/Vulkan/SYCL 后端上持续扩展硬件覆盖面，(3) LiteLLM 的网关能力走向成熟并引入 Rust 重构。与此同时，Ollama 在消费级硬件上努力解决生产稳定性问题，Unsloth 则将训练加速能力拓展到扩散模型领域。总体而言：基础设施工程师面临的是一个碎片化但快速演进的技术选型环境，引擎选择越来越多地取决于硬件目标、部署场景（云端 vs 边缘）以及运维成熟度。

---

## 2. 活跃度对比

| 项目 | Issue（开放） | PR（活跃） | Release（24h） |
|---------|---------------|---------------|----------------|
| **vLLM** | 8+ 追踪中的 issue | 15+ PR 已合并/审核中 | 0 |
| **SGLang** | 10+ 追踪中的 issue | 10+ PR | 0 |
| **llama.cpp** | 6 追踪中的 issue | 8 PR | **7**（b11553–b11559） |
| **Ollama** | 12+ 追踪中的 issue | 9 PR | 0 |
| **LiteLLM** | 8 追踪中的 issue | 7 PR | **3**（v1.104.3, v1.105.0, v1.106.0-rc.1） |
| **Unsloth** | 2 追踪中的 issue | 13+ PR | 0 |

**观察要点：**

- **llama.cpp** 的发布频率最高——24 小时内 7 次提交，反映出其维护者的开发节奏和广泛的后端适配工作量。
- **LiteLLM** 是本周期内唯一有正式版本发布的项目，表明其发布流程已趋成熟。
- **vLLM** 和 **SGLang** 的 issue 负担最重——两者都在处理 Blackwell 硬件稳定性和前缀缓存正确性的问题。
- **Ollama** 的运维类 issue 最多（Windows 路径问题、MLX 崩溃、工具调用缺陷），这与其面向消费级用户的定位相符。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅（ROCm）| ✅（SM120 路线图）| — | — | — | — |
| **DeepSeek V4.1 Flash** | ✅（SM120）| ✅ | — | — | — | — |
| **Gemma 4** | ✅ | ✅ | ✅（OpenCL）| ✅ | — | ✅ |
| **Gemma 4 多模态** | — | ✅ | — | ✅ | — | ✅ |
| **GLM-5.3 Flash** | — | ✅（SM120 FA4 故障）| — | ✅ | — | — |
| **Qwen3-Omni** | ✅ | ✅ | ✅ | ✅ | — | — |
| **Prism Bonsai 2 27B** | — | — | ✅ | — | — | — |
| **H2O-Lightning 4B** | — | — | ✅ | — | — | — |
| **LLaDA / DiffusionGemma** | — | ✅ | ✅ | — | — | ✅（Studio）|
| **EmbeddingGemma 2** | — | — | — | ✅ | — | — |
| **决策模型（d1）** | — | — | — | ✅（已请求）| — | — |

**领先者分析：**

- **vLLM** 在 Blackwell（SM120）生产就绪方面领先，支持主流自回归模型。
- **SGLang** 在扩散模型服务和混合 Mamba/GDN 架构方面领先。
- **llama.cpp** 在硬件多样性方面领先——是唯一同时支持生产级 OpenCL、Vulkan、SYCL、Metal 和 CPU 后端的项目。
- **Ollama** 在消费级部署的易用性方面领先（macOS、Windows、RPi）。
- **Unsloth** 在训练加速方面领先，现已拓展到扩散模型微调领域。

---

## 4. 性能前沿

优化战役围绕五个核心方向展开：

| 优化方向 | 领先项目 | 关键进展 |
|-------------------|-------------------|------------------|
| **KV 缓存 / 前缀缓存** | vLLM | 长预填充的 defer 模式，按请求池化字节大小分配，修复 DFlash2/DSpark 损坏问题 |
| **Blackwell（SM120）调优** | vLLM、SGLang | DeepSeek V4.1 优化路线图，YaRN 修复，MLA 分块预填充，JIT 快速数学 |
| **量化（FP8/NVFP4）** | vLLM | NVFP4 因果预填充比 FP8 慢 1.7–1.8 倍——已标记回归 |
| **InfLLM / 短上下文流式输出** | SGLang | Max pooling 内核重写（快 1.3 倍），二分查找 O(log n) |
| **后端多样性** | llama.cpp | 消除 OpenCL GDN，Vulkan mul_mat_id 专家去重，SYCL 张量分割 |
| **分布式训练** | Unsloth | DDP 批量梯度复制标志，Apple Silicon 线程修复 |
| **网关协议转换** | LiteLLM | Rust hook 重构（async fn），原生推理时保留 Python 缓存键 |
| **本地服务内存管理** | Ollama | 统一 KV 池，槽位分配策略 |

**关键瓶颈：** Blackwell 上的 NVFP4 量化相比 FP8 出现回归——慢 1.7–1.8 倍。这对追求最大内存效率的 SM120 部署者影响很大。

---

## 5. 技术层次定位

| 项目 | 层次 | 目标用户 | 核心价值 |
|---------|-------|-------------|---------------|
| **vLLM** | 服务引擎 | 云端/企业 | 高吞吐量推理，前缀缓存，张量并行 |
| **SGLang** | 服务引擎 + 框架 | 高级用户、扩散模型工作流 | 灵活调度，多模态，复杂提示路由 |
| **llama.cpp** | 本地运行时 | 边缘/嵌入式/本地部署 | 硬件抽象，GGUF  portability，无服务器部署 |
| **Ollama** | 本地服务 | 消费者、开发者 | 一键本地部署，macOS/Windows 一致性 |
| **LiteLLM** | 网关 / 抽象层 | 平台工程师 | 多供应商 LLM 抽象，成本路由，统一 API |
| **Unsloth** | 训练 / 微调 | ML 工程师 | 快速微调，LoRA 优化，扩散训练 |

**层次动态：**

- **网关层**（LiteLLM）正在围绕 Rust 重构进行整合——从 Python 密集的协议转换转向原生性能路径。
- **服务层**（vLLM、SGLang）都以 Blackwell 为参考硬件，但在架构上分化（自回归 vs. 混合/扩散）。
- **本地运行时层**（llama.cpp、Ollama）按部署场景分裂：llama.cpp 侧重可移植性，Ollama 侧重简洁易用。
- **Unsloth** 占据独特的垂直领域——唯一专注于训练/微调的项目，现正向扩散模型定制扩展。

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **Blackwell（SM120）成为新战场** — vLLM 和 SGLang 都在优先推进 SM120 支持。预计 2026 年 Q4 将快速迭代。在 RTX PRO 6000 或类似 Blackwell 硬件上部署时，请密切关注 vLLM 的 NVFP4 回归（#50416）和 SGLang 的 CUDA Graph 问题（#56892），确认生产就绪后再上量。

2. **前缀缓存正确性缺陷广泛存在** — vLLM（#60174）和 SGLang（#53912）都存在混合 Mamba/GDN 和 DFlash2 模型上的前缀缓存损坏 bug。如果工作负载依赖投机解码下的前缀缓存，这些都是高优先级的阻塞项。

3. **Rust 正在吞噬推理栈** — LiteLLM 的 Rust 桥接重构、vLLM 的 Rust 前端扩展，以及 llama.cpp 的 C++ 核心，表明性能关键路径正在迁移。使用 LiteLLM 的开发者应测试新的异步 hook 执行对延迟的敏感度。

4. **扩散模型进入服务层** — SGLang 和 Unsloth 都在添加扩散模型支持。预计在 2–3 个发布周期内，这些项目将成为图像/视频生成管道的可行服务目标。

5. **消费级硬件稳定性滞后** — Ollama 的 issue 量（Windows NTFS、MLX 崩溃、RPi 挂起）表明"本地 AI"领域的增长速度超过了工程投入。在生产环境中部署 Ollama 需要预留额外的测试验证时间。

6. **量化性能差距在扩大** — Blackwell 上的 NVFP4 比 FP8 慢，而 INT8 KV 量化仍是功能请求（#33480）。压缩与延迟的权衡曲线并未趋于平稳——预计将持续调整。

### 信号总结表

| 信号 | 方向 | 影响 |
|--------|-----------|-------------|
| Blackwell 优化活跃度 | ↑ 强 | 面向硬件的工程师：在 SM120 上验证 vLLM/SGLang |
| 前缀缓存 bug 量 | ↑ 高 | 避免在修复前使用前缀缓存 + 投机解码 |
| Rust 迁移到网关 | ↑ 中 | LiteLLM 用户：测试 async hooks；监控行为变化 |
| 扩散模型服务兴起 | ↑ 增长中 | SGLang/Unsloth：监控 2027 年 Q1 生产就绪状态 |
| 消费级部署问题 | ↑ 高 | Ollama：Windows/macOS 生产环境额外 QA |
| 量化性能差距 | ↓ 回归 | Blackwell NVFP4 比 FP8 慢——除非内存受限否则暂缓 |

---

*跨项目综合分析 — 2026-10-12*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English digest into Chinese while preserving the exact Markdown structure and following all the rules specified. Let me go through each section and translate it appropriately.

Key points to remember:
1. Only output the translation, no preamble or explanation
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, code spans, file paths as-is
4. Use natural technical Chinese register
5. Don't translate project names, repository slugs, usernames, version tags, file paths, API/config identifiers

Let me translate section by section:</think>

# vLLM 项目简报 — 2026-10-12

## 1. 今日要闻

vLLM 开发持续聚焦于 Blackwell/SM120 硬件的稳定性及新模型家族。目前最活跃的领域是修复混合 Mamba/GDN 模型和 DFlash2/DSpark 模型中的前缀缓存 bug，相关 issue 收到了大量社区反馈。清理 PR #61126 移除了级联注意力（cascade attention）已就绪，简化了注意力子系统。

---

## 2. 版本更新与重大变更

- **过去 24 小时内无版本发布**。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **GLM-4.7 Flash Dynamic** | 新增 `Glm4MoeLitePlusPlusForCausalLM` 模型，支持零计算专家（Zero-Compute Experts, ZCE）—— 共 96 个专家（64 路由 + 32 零计算） | PR #57274 |
| **ERNIE 4.5** | 为百度 ERNIE 4.5 思维模型新增 Rust 前端的工具和推理解析器 | PR #52841 |
| **Qwen3-Omni / Qwen2.5-Omni** | 修复 Rust 前端从 `thinker_config` 读取文本配置，解决 vocab_size 错误 | PR #61128 |
| **DeepSeek-V4** | ROCm：共享专家已融合到 AITER MegaMoE（通过 `VLLM_ROCM_AITER_MEGA_MOE_FUSE_SHARED_EXPERTS=1` 开启） | PR #61004 |
| **Qwen3-Next/Qwen3.5** | ROCm：QK-norm+RoPE+gate 融合 Triton 内核现已启用 | PR #51406 |
| **Intel XPU** | UMD 升级至 26.35 | PR #60980 |

---

## 4. 性能优化

| 领域 | 变更 | 详情 | PR/Issue |
|------|--------|--------|----------|
| **级联注意力** | **完全移除** — 包括内核、启发式算法、调度器配置、配置标志、测试和文档 | 此前默认为启用（`disable_cascade_attn=True`）；移除简化了代码库 | PR #61126 |
| **预填充调度** | 为长预填充新增 **延迟模式**（`--long-prefill-token-threshold-defer`）— 长预填充在等待请求释放预算后每步运行一个 | 默认关闭；减少短请求的延迟波动 | PR #61080 |
| **KV Cache 组大小** | 现在根据**每请求池化字节数**而非层填充来调整组大小 — 提升 DeepSeek-V4.1 的内存效率 | | PR #60996 |
| **ROCm MLA** | 修复混合解码/预填充调度中 FlashAttention LSE 张量布局归一化 — 解决分块预填充失败问题 | LSE 原本是 `[num_query_tokens, num_heads]`（上游格式），需要转换为 `[num_heads, num_query_tokens]` | PR #60822 |
| **NVFP4 KV Cache** | 在 SM120（Blackwell）上因果预填充比 FP8 **慢约 1.7-1.8 倍** — 报告为回归问题 | Issue #50416 |
| **池化吞吐量** | 自 torch 2.11 以来（v0.20.0+）在 H100 上**下降约 18%** | Issue #52630 |
| **DeepSeek-V4.1-Flash** | 在 8x RTX PRO 6000 Blackwell（SM120）上使用 `--enforce-eager` 时解码吞吐量极低；CUDA graph 不可用 | Issue #56892 |

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 摘要 | 状态 |
|----------|-------|---------|--------|
| **高** | #60174 | **DFlash2/DSpark + 前缀缓存输出错误** — Qwen3.8-27B（TP=1）在 v0.30/0.31 中缓存命中后输出损坏；v0.29 和 MTP 正常工作 | Open — 29 条评论 |
| **高** | #53912 | **前缀缓存 + MTP 损坏混合 Mamba/GDN 模型输出**（v0.28.0）— 与 #43559 相关 | Open — 24 条评论 |
| **高** | #56892 | **DeepSeek-V4.1-Flash 解码吞吐量崩溃** — 在 SM120（RTX PRO 6000）上使用 eager 模式；CUDA graph 捕获失败 | Open — 19 条评论 |
| **中** | #57032 | DFlash drafter KV 组始终未被识别 → 前缀缓存在 Mamba 组上静默禁用 | Open — 10 条评论 |
| **中** | #60845 | **CUDA graph 死锁** — Qwen3.5 兼容的 35B-A3B MoE LoRA 在 TP rank 间使用全分片融合 MoE 时 | Open — 3 条评论 |
| **中** | #61045 | **Gemma 4 编码器 CUDA graph OOM** — `--max-num-batched-tokens 4096` 时分配 38.5 GiB | Open — 3 条评论 |
| **中** | #54775 | KDA/gated-delta-rule 分块扫描缓冲区**在内存分析之外** → 大 batch size 时运行时 OOM（ROCm） | Open — 7 条评论 |
| **中** | #50264 | 混合 Mamba 在 RDNA 上回退到 Triton 分页注意力；长上下文时解码崩溃（ROCm） | Open — 9 条评论 |

### 最近修复的 Bug

| 修复 | PR |
|-----|-----|
| PP 阶段空 KV 组的 KV cache 分配（DeepSeek-V4 TP=4, PP=2） | #60569（已关闭）|
| Bailing V3 VL 的 Ling 量化配置 | #59026（已关闭）|

---

## 6. 这对应用开发者意味着什么

1. **使用混合模型的前缀缓存用户**：如果您在 v0.30+ 中使用 DFlash2、DSpark 或基于 Mamba 的投机解码与前缀缓存，请注意正确性 bug —— 建议坚持使用 v0.29 或等待 #60174 / #53912 的修复。

2. **Blackwell/SM120 用户**：DeepSeek-V4.1-Flash 解码性能显著下降；CUDA graph 目前不可用。如果您需要高吞吐量，请关注 #56892 的进展。

3. **ROCm 用户**：MLA 分块预填充现已修复（#60822），DeepSeek-V4 的共享专家融合可通过环境变量开启（#61004）。

4. **长预填充工作负载**：新的延迟模式（`--long-prefill-token-threshold-defer`）可改善短请求的延迟可预测性 —— 考虑在发布时进行测试。

5. **级联注意力移除**：如果您之前使用 `--disable-cascade-attn=False`，请在 #61126 之后验证行为 —— 该功能现已完全移除。

6. **新模型支持**：GLM-4.7 Flash Dynamic（ZCE 变体）、ERNIE 4.5 和 Qwen3-Omni 现已支持。

---

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Simplified Chinese, following specific rules about preserving formatting and using natural technical Chinese.

Let me go through the content and translate it while preserving:
- All Markdown structure (headings, tables, lists, bold/italic, horizontal rules)
- URLs and links
- Issue/PR references like #12345
- Project names, repository slugs, version tags
- Numbers and dates
- Code spans and blocks

I need to use natural technical Chinese register - like a Chinese developer newsletter, not literal word-for-word translation.

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

And the content within each.

Let me do this translation carefully:</think>

# SGLang 速报 — 2026-10-12

## 1. 今日要闻

SGLang 项目继续推进 Blackwell (SM120) 适配工作，采取多管齐下的策略优化 DeepSeek V4.1，同时修复了 diffusion 和缓存子系统中的多个生产级 bug。InfLLM 内核的性能优化工作已见成效，新增的缓存驱逐指标为运维人员提供了更好的可观测性。

---

## 2. 版本更新与破坏性变更

- **过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | PR/Issue |
|-------------|------|----------|
| **DeepSeek V4.1** | 优化路线图进行中；mHC 代码清理进行中 ([#42245](https://github.com/sgl-project/sglang/pull/42245)) | [#42170](https://github.com/sgl-project/sglang/issues/42170) |
| **DeepSeek V4.1 Flash on SM120** | 实地测试：8×RTX PRO 6000（PCIe，无 NVLink）配置已验证可用 | [#40877](https://github.com/sgl-project/sglang/issues/40877) |
| **GLM-5.3-Flash on SM120** | FA4 注意力后端在 CUDA-graph 捕获时崩溃；Triton 后端可作为临时方案 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **Qwen-VL processor** | 已适配 transformers 5.19 `resize()` 签名变更 | [#43309](https://github.com/sgl-project/sglang/pull/43309) |
| **NPU (Ascend)** | DSpark A5 压缩器路由至显式 SWA 映射状态表 | [#40816](https://github.com/sgl-project/sglang/pull/40816) |
| **FLUX.1-schnell** | 修复 ComfyUI 模式权重加载（guidance_in 张量处理）| [#43395](https://github.com/sgl-project/sglang/issues/43395) |

---

## 4. 性能优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **InfLLM 池化** | 用 `torch.empty` 替换 `torch.zeros` | 延迟降低 1.088–1.299 倍（fp16 下 0.0084→0.0064ms）|
| **InfLLM 池化查找** | 批扫描 O(n) → 二分查找 O(log n) | 大 batch 场景显著提速 |
| **FP8 按 token 量化** | 为 `kVecSize==8` 路径添加 `uint64_t` 打包存储 | 提升 FP8 量化吞吐 |
| **DeepSeek V4 YaRN** | 对未压缩注意力层禁用 YaRN | 修复 RoPE 行为正确性 |
| **PyNccl 内存** | 休眠模式释放通信器内存 | 降低空闲 GPU 显存占用 |
| **JIT 激活 (Blackwell)** | 为 SiLU 等 JIT 内核启用 fast-math | 预期 SM120 吞吐提升 |
| **缓存可观测性** | 新增 L1+L2 驱逐生命周期/频率指标 | 提升运维可观测性 |
| **Radix 缓存** | 导出条目计数与 token 总数 gauge | 运维可监控缓存大小 |
| **动态 Prefill CP** | 灵活上下文并行特性提案 | 预填充扩展性讨论中 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | **DeepEP low_latency 缓冲区延迟初始化失败** — PP=2、TP=8、DP-attention、EP=8 配置下，Kimi K2.6 W4A8 进行 CUDA-graph 捕获时触发 | [#29942](https://github.com/sgl-project/sglang/issues/29942) — 已关闭，长期无更新 |
| **高** | **DSPark：无界 SparsePrefillWorkspace 分配** — DeepSeek-V4.1-Flash 在 TP 组上 OOM 崩溃 | [#41076](https://github.com/sgl-project/sglang/issues/41076) — 进行中 |
| **高** | **100 万 token 预填充 OOM** — DSV4 indexer fp8_mqa_logits（非分页、TP8、MegaMoE）| [#34155](https://github.com/sgl-project/sglang/issues/34155) — 已关闭，长期无更新 |
| **中** | **Gemma-4 多模态**：单张非 RGB 图像导致视觉塔崩溃（mat1 shape 不匹配 256 vs 768）| [#26751](https://github.com/sgl-project/sglang/issues/26751) — 进行中 |
| **中** | **生成健康检查扰乱 DP 路由**，导致长预填充吞吐下降 | [#35241](https://github.com/sgl-project/sglang/issues/35241) — 已关闭 |
| **中** | **MAMBA 缓存节点被剪枝** 而非降级到设备，破坏主机层回载机制 | [#33713](https://github.com/sgl-project/sglang/issues/33713) — 进行中 |
| **中** | **PD 角色切换**：decode→prefill→decode 运行时切换角色崩溃，非法内存访问 | [#43557](https://github.com/sgl-project/sglang/issues/43557) — 进行中 |
| **低** | **FluxAdapter**：latent 尺寸不可被 patch size 整除时崩溃；丢弃 Kontext ref_latents 和 ControlNet | [#43489](https://github.com/sgl-project/sglang/issues/43489)、[#43488](https://github.com/sgl-project/sglang/issues/43488) — 已关闭 |

---

## 6. 对应用开发者的意义

- **Blackwell (SM120) 推进中** — DeepSeek V4.1 优化工作正在积极进展，但部分模型（如 GLM-5.3-Flash）仍需回退到 Triton 注意力后端。若在 RTX PRO 6000 或同类 SM120 硬件上部署，请验证所选模型的注意力后端兼容性。

- **内存与缓存需调优** — 统一 radix 缓存新增了驱逐指标，可观测性有所提升。但 MAMBA 组件节点剪枝 bug 意味着混合-KDA 模型在内存压力下可能遭遇意外缓存未命中。

- **Diffusion 服务化日趋成熟** — LTX-2.3 和 LTX-2.5 的改进（并行引导传递、分层卸载）正在降低客户端延迟。FLUX.1-schnell 权重加载问题已修复。

- **关注调度器回归** — 生成健康检查扰动 bug（[#35241](https://github.com/sgl-project/sglang/issues/35241)）已关闭，但运维应在升级后验证长预填充工作负载是否受影响。

- **NPU 支持扩展中** — DSpark 与 Ascend NPU 工作持续推进；A5 压缩器路由变更应能改善华为硬件上的 DeepSeek V4 推理性能。

---

*基于 sgl-project/sglang GitHub 数据生成 — 2026-10-12*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest into Simplified Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly (headings, tables, lists, blockquotes, etc.)
- Keep URLs, numbers, dates, issue/PR references as-is
- Use natural technical Chinese register

Let me translate this carefully while maintaining the exact structure.</think>

# llama.cpp 速报 — 2026-10-12

## 今日要闻

项目持续快速推进后端优化，Gemma-4 的 OpenCL 改进和新增模型支持已在今日版本中落地。RPC 子系统新增可配置调试verbosity级别，Vulkan 则针对 MoE 模型的专家路由进行了定向优化。Prism Bonsai 2 27B 支持已合并，扩展了模型的原生能力。

---

## 版本发布与破坏性变更

| Commit | 描述 | 链接 |
|--------|-------------|------|
| b11559 | OpenCL：改进 FA，为 Gemma-4 启用 dk512，优化 dk64 | [#30266](https://github.com/ggml-org/llama.cpp/pull/30266) |
| b11558 | OpenCL：修复 Q4_K 权重镜像限制、q4_0 bcast 和 rms_norm | [#30310](https://github.com/ggml-org/llama.cpp/pull/30310) |
| b11557 | RPC：将 GGML_RPC_DEBUG 改为 verbosity 级别（0-3） | [#29544](https://github.com/ggml-org/llama.cpp/pull/29544) |
| b11555 | CPU：修复 AVX2 CPU 有 F16C 时未启用的问题 | [#30270](https://github.com/ggml-org/llama.cpp/pull/30270) |
| b11553 | Server：添加组件测试 | [#30312](https://github.com/ggml-org/llama.cpp/pull/30312) |

本发布窗口**未发现破坏性变更**。

---

## 新模型与硬件支持

| 模型/硬件 | Commit | 说明 |
|------------------|--------|-------|
| **Prism Bonsai 2 27B** | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) | 运行时 + 转换支持；含 hadamard 变换处理 |
| **H2O-Lightning-4B** | [#30361](https://github.com/ggml-org/llama.cpp/pull/30361) | 决策模型，提供于 `/v1/systemone` |
| **Ouro（字节跳动循环 LM）** | [#29823](https://github.com/ggml-org/llama.cpp/pull/29823) | 1.4B/2.6B + Thinking 变体；4× 循环解码器 |
| **DiffusionGemma** | [#24423](https://github.com/ggml-org/llama.cpp/pull/24423) | 初步扩散支持，通过 `llama-diffusion-cli` |
| **Qwen3-Omni 变体** | 多条 PR | 音频帧处理、deepstack、视觉张量支持 |
| **Gemma-4 E4B/E2B** | #30266 | OpenCL GPU 解码已启用 |

---

## 性能与优化

### 本期落地

- **OpenCL GDN 优化**（[#30360](https://github.com/ggml-org/llama.cpp/pull/30360)、[#30359](https://github.com/ggml-org/llama.cpp/pull/30359)）：直接从循环缓存读写 gated_delta_net 状态，消除解码路径中每 token 的拷贝开销。

- **Vulkan mul_mat_id 优化**（[#29998](https://github.com/ggml-org/llama.cpp/pull/29998)）：在预传递中处理重复专家 ID 而非循环遍历，扩展了"行 ID 上提"优化策略。

- **Vulkan coopmat1 tile shape**（[#30351](https://github.com/ggml-org/llama.cpp/pull/30351)）：根据设备能力动态推导 flash attention tile shape，而非硬编码 16×16×16 — 修复了 Intel BMG 上静默回退到标量路径的问题。

- **SYCL tensor-split 加载**（[#30358](https://github.com/ggml-org/llama.cpp/pull/30358)）：新增 `set_tensor_2d` 实现，使用 `-sm tensor` 加载权重时降低开销。

- **Embedding 模型内存**（[#30339](https://github.com/ggml-org/llama.cpp/pull/30339)）：修复 embedding 模型的过度内存分配问题，避免为下一 token 预留内存。

### 进行中

- **logit_gate API**（[#30265](https://github.com/ggml-org/llama.cpp/pull/30265)）：单次预填充返回候选 token 上的概率分布——无需自回归，适用于困惑度评估。

- **计算图重分配报告**（[#30329](https://github.com/ggml-org/llama.cpp/pull/30329)）：新增回调函数，用于追踪推理期间后端缓冲区重分配事件。

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 说明 |
|-------|----------|--------|-------|
| [#30091](https://github.com/ggml-org/llama.cpp/issues/30091) — llama-server 长对话时"bad allocation"崩溃 | **高** | 进行中 | Ryzen 9700X + RX 9070 上的 HIP 后端；Qwen3.8-27B |
| [#28726](https://github.com/ggml-org/llama.cpp/issues/28726) — OpenVINO 在 AVX-512 上 STATUS_ILLEGAL_INSTRUCTION 崩溃 | **高** | 进行中 | Core Ultra 7 265K；影响 Gemma-4、Llama-3.2-1B |
| [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) — RDNA1（gfx1010）上约 45% prompt 处理性能回退 | **中** | 进行中 | b10455→b11429 之间的回归；GDN-hybrid 模型 |
| [#27072](https://github.com/ggml-org/llama.cpp/issues/27072) — 加载时 Vulkan 崩溃（RX 7900 XTX） | **中** | 进行中 | Gemma 4 31B、E2B、Muse Glimmer 30B |
| [#30256](https://github.com/ggml-org/llama.cpp/issues/30256) — 禁用思考时 Gemma 4 语法仍允许 thought channel | **低** | 进行中 | `enable_thinking: false` 时的 JSON schema bug |

### 近期修复

- **MTP masked mode 输出选择**（[#30345](https://github.com/ggml-org/llama.cpp/pull/30345)）：修复 Qwen 模型中错误的隐藏状态选择。

- **对话中系统消息触发 HTTP 500**（[#27367](https://github.com/ggml-org/llama.cpp/issues/27367)）：已关闭；严格 chat template 处理已修复。

---

## 这对应用开发者意味着什么

1. **新部署目标**：Prism Bonsai 2 27B 和 H2O-Lightning-4B 现可直接服务——若需原生 GGUF 性能，可考虑用于决策类端点。

2. **高通/AMD 上的 OpenCL 用户**：Gemma-4 E4B/E2B GPU 解码改进降低了 CPU offload 开销；请验证你的工作负载是否受益于 dk64/dk512 优化。

3. **旧款 AMD 上的 Vulkan（RDN1）**：#30039 报告的约 45% 回退需要在升级到 b11429 之后的版本前，在 gfx1010 硬件上测试生产工作负载。

4. **RPC 调试**：`GGML_RPC_DEBUG` 的新 verbosity 级别（0-3）支持更细粒度的分布式推理诊断，不会淹没日志。

5. **内存敏感型部署**：Embedding 模型内存修复（#30339）是透明升级——若服务纯 embedding 工作负载，值得升级。

6. **监控计算图重分配**：#30329 的新回调支持生产环境下内存压力检测的推理监控。

---

*基于 ggml-org/llama.cpp commit 范围 b11553–b11559 生成*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as-is
3. Keep all URLs, issue/PR numbers, code, technical terms as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate section by section while preserving the structure.</think>

# Ollama 摘要 — 2026-10-12

## 1. 今日要闻

社区正在处理 Qwen3.8、Gemma 4 和混合架构方面的大量工具调用和相关问题。多个 PR 已合并，解决了 Go API 工具调用中的数值精度丢失、Windows NTFS 挂载点的清单处理改进，以及 llama.cpp 对 Decision 模型和 EmbeddingGemma 2 的更新。过去 24 小时内没有新版本发布，但多个方向的开发仍在积极进行。

---

## 2. 版本发布与重大变更

| 变更 | 状态 | 备注 |
|--------|--------|-------|
| **无新版本** | — | 上次发布早于此 24 小时窗口 |

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 描述 | PR / Issue |
|------------------|-------------|------------|
| **d1-3B / d1-omni-600M** | 请求添加 LiquidAI Decision 模型，支持图像/音频 | [#18890](https://github.com/ollama/ollama/issues/18890) |
| **EmbeddingGemma 2** | 通过 llama.cpp 更新添加 (b11521) — 修复 Linux 拉取失败 | [#18917](https://github.com/ollama/ollama/pull/18917) |
| **Decision 模型** | `/v1/systemone` 现由 llama.cpp 原生处理 | [#18917](https://github.com/ollama/ollama/pull/18917) |
| **MLX (Apple Silicon)** | 持续修复内核 panic — M2 Max 上 SDPA threadgroup 限制问题 | [#18940](https://github.com/ollama/ollama/issues/18940) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **Manifest / 模型查找** | 复用已验证的 manifest 和已加载模型 | [#18947](https://github.com/ollama/ollama/pull/18947) — 单一冷查找，跨 generate/chat/embed 共享 |
| **混合模型并行** | 新增 `OLLAMA_PARALLEL_HYBRID` 环境变量 | [#18939](https://github.com/ollama/ollama/pull/18939) — 覆盖混合架构的强制 `num_parallel=1` |
| **OpenAI 时序指标** | 每秒提示词计算 bug | [#18948](https://github.com/ollama/ollama/issues/18948) — 当前按缓存命中比例膨胀 |
| **Windows 路径处理** | 通过 junctions/挂载点查找模型 | [#18949](https://github.com/ollama/ollama/pull/18949) — 修复 NTFS 挂载点上 `ollama list` 返回空 |
| **Keep-alive 溢出** | 限制超过 int64 的时长 | [#18946](https://github.com/ollama/ollama/pull/18946) — 防止立即卸载 runner |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **Qwen3.8: "no user query found in messages" (500)** — 20.5 万上下文中的工具循环 | 待处理 | — |
| **高** | **glm-5.3-flash / glm-5.3 客户端退出时挂起** — 流永不终止 | 待处理 | — |
| **高** | **MLX SDPA 内核 panic** — threadgroup 限制 896 vs 请求 960 (M2 Max, Qwen3.8/Gemma4 27b/31b) | 待处理 | — |
| **高** | **Windows NTFS 挂载: `ollama list` 返回空** | 待处理 | [#18949](https://github.com/ollama/ollama/pull/18949) |
| **中** | **工具调用在 `format: "json"` 时被禁用** — 模型编造响应 | 待处理 | — |
| **中** | **Go API: 数值精度丢失** — 工具调用参数如 `9007199254740993` 变成 `9007199254740992` | 待处理 | [#18941](https://github.com/ollama/ollama/pull/18941) |
| **中** | **多 GPU VRAM 统计** — 发现名称与子日志名称不匹配 | 待处理 | — |
| **中** | **RPi 5: 第二次 `ollama run` 卡住** — systemd 服务问题 | 待处理 | — |
| **中** | **Vulkan (AMD RX 6800 XT): 0xc0000005 访问冲突** | 待处理 | — |
| **中** | **Qwen3: reasoning_effort "xhigh" → "max" 重写导致 HTTP 500** | 已关闭 | — |
| **低** | **rnj-1: GGML_ASSERT(hparams.is_swa_any()) 失败** | 待处理 | — |
| **低** | **Windows: `ollama run` 不再自动启动服务器 (0.12.4+)** | 已关闭 | — |

---

## 6. 这对应用开发者的意义

1. **避免组合使用 `format: "json"` 和工具调用** — 如果你的应用依赖结构化输出 *并且* 函数调用，可能需要在此问题修复前进行后处理或绕过。

2. **混合模型用户**：如果你在运行 qwen35moe 或类似架构，请注意 `OLLAMA_NUM_PARALLEL` 当前被忽略。[#18939](https://github.com/ollama/ollama/pull/18939) 中的新 `OLLAMA_PARALLEL_HYBRID` 标志可能会恢复控制。

3. **高精度数值工具参数** — 如果你的 Agent 通过工具调用发送大整数或小数，Go 客户端会进行舍入。[#18941](https://github.com/ollama/ollama/pull/18941) 解决了这个问题。

4. **Windows 路径注意事项** — 如果在 NTFS 挂载点存储模型，请等待 [#18949](https://github.com/ollama/ollama/pull/18949) 合并，或使用直接的驱动器号路径。

5. **监控你的 Qwen3.8 会话** — 长上下文中的工具循环导致 500 错误的活跃问题；考虑限制上下文或分批处理如果遇到此问题。

---

*基于 GitHub 数据生成 — ollama/ollama, 2026-10-12*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the given English LiteLLM digest into Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure:</think>

# LiteLLM 速报 — 2026-10-12

## 今日要点

LiteLLM 项目在过去 24 小时内发布了三个新版本（v1.106.0-rc.1、v1.105.0、v1.104.3），均通过 cosign 进行 Docker 镜像签名验证。最活跃的开发工作继续集中在 Rust 桥接层，多个 PR 落地以改进原生 Responses/Messages 流式处理和钩子执行。翻译层有几个影响 Claude Code、Anthropic→OpenAI 转换和 Gemini 模型兼容性的 bug 被报告，同时还有一个值得注意的功能请求：支持按团队/租户的每月 Token 预算。

---

## 版本发布与重大变更

| 版本 | 日期 | 说明 |
|------|------|------|
| [v1.106.0-rc.1](https://候选/BerriAI/litellm/tree/v1.106.0-rc.1) | 2026-10-12 | 发布候选版 |
| [v1.105.0](https://github.com/BerriAI/litellm/releases/tag/v1.105.0) | 2026-10-12 | 稳定版 |
| [v1.104.3](https://github.com/BerriAI/litellm/releases/tag/v1.104.3) | 2026-10-12 | 补丁版 |

**所有版本均包含 Docker 镜像的 cosign 签名** — 可使用 commit `0112e53` 中的密钥进行验证。

---

## 新模型与硬件支持

过去 24 小时内无新的模型或硬件支持公告。

---

## 性能与优化

| PR | 描述 | 影响 |
|----|------|------|
| [#45962](https://github.com/BerriAI/litellm/pull/45962) | 重构(rust)：将 Python 钩子和主机调用作为异步函数在调用者任务上运行 | 消除状态机开销；钩子现在直接 await |
| [#45986](https://github.com/BerriAI/litellm/pull/45986) | 重构(rust_bridge)：移除原生降级，由 catalog 掌握已知缺口 | 更清晰的错误处理，移除 `RustBridgeDeclined` 路由 |
| [#45956](https://github.com/BerriAI/litellm/pull/45956) | 修复(rust)：在原生推理中保留 Python 缓存键 | 确保 Rust 路径的缓存命中和计费正常工作 |
| [#45990](https://github.com/BerriAI/litellm/pull/45990) | 修复(huggingface)：对 TEI rerank 模型正确使用已注册的 model_cost | 修复 HuggingFace TEI rerank 部署的 $0 计费问题 |

---

## 稳定性与回归

### 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#24549](https://github.com/BerriAI/litellm/issues/24549) | Xiaomi MiMo 模型（`output_config` 参数）与 Claude Code 配合使用失败 | OPEN — 11 条评论 |
| [#33075](https://github.com/BerriAI/litellm/issues/33075) | Claude Code 自动分类器对 GPT 5.6 失败：`stop_sequences` → `stop` 翻译在 OpenAI 格式提供者处缺失 | OPEN — 7 条评论 |
| [#29854](https://github.com/BerriAI/litellm/issues/29854) | 来自 Responses API 的 `type=namespace` 工具在转换为 Gemini 时被剥离 — 仅保留 name | OPEN — 6 条评论 |
| [#44979](https://github.com/BerriAI/litellm/issues/44979) | `/v1/messages` 在 Anthropic → OpenAI 转换时丢弃 `tool_result.is_error` 标志 | OPEN — 6 条评论 |

### 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#31457](https://github.com/BerriAI/litellm/issues/31457) | `/v1/audio/transcriptions` 对 `response_format=text` 返回 JSON 而非 `text/plain` | OPEN |
| [#45736](https://github.com/BerriAI/litellm/issues/45736) | OpenTelemetry 回调在应用提前停止读取流式调用时不创建 span | OPEN |
| [#45333](https://github.com/BerriAI/litellm/issues/45333) | Gemini 3 提供程序无条件注入 `temperature=1.0`；Google 将拒绝在即将推出的模型上使用采样参数 | OPEN |
| [#45718](https://github.com/BerriAI/litellm/issues/45718) | `routing_strategy: "cost-based-routing"` 导致所有同步 Router 方法崩溃并报 `RouterRateLimitError` | OPEN |
| [#44503](https://github.com/BerriAI/litellm/issues/44503) | `no-log: true` 跳过代理支出跟踪 — **已在** [#44514](https://github.com/BerriAI/litellm/pull/44514) 中修复 | OPEN |

### 已修复

| PR | 修复的问题 |
|----|------------|
| [#44514](https://github.com/BerriAI/litellm/pull/44514) | `no-log: true` 跳过支出跟踪 |
| [#42894](https://github.com/BerriAI/litellm/pull/42894) | Databricks 纯工具回复无内容时崩溃 |
| [#44110](https://github.com/BerriAI/litellm/pull/44110) | Vertex AI 每模型缓存 Token 最小值 + 400 回退 |

---

## 这对应用开发者的意义

1. **Claude Code 集成问题**：如果你是使用 Xiaomi MiMo 模型或 Claude Code 配合 GPT 5.6，`output_config` 和 `stop_sequences` 参数的翻译会失败。建议规避这些问题或等待修复。

2. **流式可观测性缺口**：当客户端提前中止流式处理时，OpenTelemetry span 不会被创建 — 如果你依赖 OTEL 进行计费/审计，请提前规划。

3. **预算强制执行**：按月 Token 计费的预算功能请求（[#44555](https://github.com/BerriAI/litellm/issues/44555)）正在考虑中。目前仅支持按支出计费的预算。

4. **Databricks 工具调用**：已在 [#42894](https://github.com/BerriAI/litellm/pull/42894) 中修复 — 纯工具回复不再崩溃。

5. **Rust 桥接层成熟度**：持续的 Rust 重构正在改进钩子执行和原生流式处理。如果你将自定义回调与 Responses API 配合使用，请注意行为变化。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese. Let me analyze the content and translate it while:

1. Preserving the exact Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. Keeping URLs, issue/PR references (#12345), project names, repository slugs, usernames, version tags, file paths, API/config identifiers unchanged
3. Using natural technical Chinese register - like a Chinese developer newsletter
4. Not adding any preamble, explanation, or markdown fences

Let me translate section by section:

**Title**: Unsloth Digest — 2026-10-12 → # Unsloth Digest — 2026年10月12日

**Today's Highlights**: 今日重点

**Releases & Breaking Changes**: 发布与重大变更

**New Model & Hardware Support**: 新模型与硬件支持

- DeepSeek-OCR & DeepSeek-OCR-2: Studio现在可以加载和运行这些模型...
- Text-diffusion LM families: Studio现在可以训练和聊天...

**Performance & Optimization**: 性能与优化

- DDP batched gradient copy: 新增可选标志 `UNSLOTH_DDP_BATCHED_GRAD_COPY=1`...
- Apple Silicon threading: Studio现在在macOS上使用性能核心运行sd.cpp...

**Stability & Regressions**: 稳定性与回归

Table content needs translation but keeping numbers, # references, and URLs

**What This Means for Application Developers**: 这对应用开发者的意义

1. Multi-model orchestration: 如果构建聊天应用...
2. Diffusion models in production: 随着LLaDA、Dream等文本扩散模型家族现可在Studio中训练...
3. Memory-constrained deployments: 新增的DDP批量梯度复制标志可减少多GPU训练场景中的内存压力...


4. Intel GPU users: Intel Arc的OpenVINO支持意味着在非NVIDIA硬件上有了另一个可行的量化推理后端...
5. Watch for env var behavior: 开放的问题(#3071)表明在训练期间`UNSLOTH_RETURN_LOGITS`会被重置，建议避免依赖运行时环境变量变化来提取logits，考虑使用其他替代方案。

Now I'll write out the full translated digest in proper Chinese technical register.</think>

# Unsloth Digest — 2026年10月12日

## 今日重点

Unsloth 持续快速推进 Studio 扩展，多个 PR 陆续合并以支持新的扩散模型家族、提升 Apple Silicon 性能并修复检查点处理问题。核心库新增了 DDP 批量梯度复制优化标志，而 Studio 则增加了深度 OCR 模型支持，并改进了文本扩散训练工作流。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **DeepSeek-OCR 与 DeepSeek-OCR-2**：Studio 现已支持加载和运行这些模型。缺失的依赖项（`addict`、`easydict`）已在 [#13310](https://github.com/unslothai/unsloth/pull/13310) 中解决。

- **Text-diffusion LM 家族**：Studio 现已支持训练和对话所有 Unsloth Core 支持的文本扩散家族 — LLaDA、LLaDA-MoE、Dream、Nemotron-Labs-Diffusion、LLaDA2、SDAR 和 DiffusionGemma。详见 [#13342](https://github.com/unslothai/unsloth/pull/13342) 和 [#13341](https://github.com/unslothai/unsloth/pull/13341)。

- **Qwen-Image-2.1 GGUFs**：现已被正确识别为图像生成模型而非回退到文本生成（[#13333](https://github.com/unslothai/unsloth/pull/13333)，修复 #13328）。

- **Intel Arc / Core Ultra**：新增 OpenVINO 支持，包括 Intel Arc 转换进度、INT 推荐以及托管式侧载对话功能（[#12168](https://github.com/unslothai/unsloth/pull/12168)）。

- **DGX Spark (GB10 Blackwell, aarch64)**：已记录 Transformers 补丁以支持推理和 Studio（[#4867](https://github.com/unslothai/unsloth/issues/4867)）。

---

## 性能与优化

- **DDP 批量梯度复制**：新增可选标志 `UNSLOTH_DDP_BATCHED_GRAD_COPY=1`，启用 PyTorch 2.13 的 `batched_grad_copy` 功能，加速器的 kwargs 未暴露此选项（[#13350](https://github.com/unslothai/unsloth/pull/13350)）。

- **Apple Silicon 线程**：Studio 现已在 macOS 上使用性能核心运行 sd.cpp，充分利用完整核心数而非 SMT 感知的一半核心数（[#13349](https://github.com/unslothai/unsloth/pull/13349)）。

- **扩散 LM 训练**：编译分块损失函数实现 0 图中断，外加所有支持扩散家族的独立采样器（[#13341](https://github.com/unslothai/unsloth/pull/13341)）。

- **KV 缓存抢占**：并行对话现在共享单一缓存而非相互冲突，使用基于槽位分配的统一 KV 池（[#10301](https://github.com/unslothai/unsloth/pull/10301)）。

- **下载进度**：伴随下载（模型、文本编码器、VAE）现为每个组件显示独立进度条（[#13112](https://github.com/unslothai/unsloth/pull/13112)）。

---

## 稳定性与回归

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|--------|-------|
| JambaAttention `feed_forward` 属性错误 (#4037) | 高 | 已关闭 | 模型架构不兼容 |
| UNSLOTH_RETURN_LOGITS 环境变量在训练中被重置 (#3071) | 中 | 开启 | 训练开始后变量变为 "0" |
| Studio sqlite3 死锁，所有线程阻塞 (#9008) | 高 | 已关闭 | 服务器停止接受连接 |
| LoRA-GA 适配器重新加载为损坏模型 (#932 通过 #13322) | 中 | 开启 | 保存的适配器相对路径问题 |
| Qwen3.5 SFT 损失在确定步骤变为 NaN (#12737) | 高 | 已关闭 | Qwen3 在相同数据上训练正常 |
| Gemma 4 fused-loss 产生零梯度 (#5230) | 高 | 已关闭 | 静默失败 — 无错误，模型从不更新 |
| LoRA 导出失败：348 个 LoRA vs 0 个已保存模块 (#5290) | 高 | 已关闭 | 保存 LoRA 微调失败 |

---

## 这对应用开发者的意义

1. **多模型编排**：如需构建具备视觉或 OCR 能力的聊天应用，DeepSeek-OCR 现已集成到 Studio 中 — 适用于文档处理管道。

2. **生产环境中的扩散模型**：随着 LLaDA、Dream 等文本扩散模型家族现可在 Studio 中训练，开发者可尝试超越自回归模型的生成式文本工作流。

3. **内存受限的部署场景**：新增的 DDP 批量梯度复制标志可减少多 GPU 训练设置中的内存压力 — 对算力有限的基础设施上微调大模型场景相关。

4. **Intel GPU 用户**：Intel Arc 的 OpenVINO 支持意味着在非 NVIDIA 硬件上有了另一个可行的量化推理后端 — 适用于边缘或桌面部署。

5. **关注环境变量行为**：开放问题 (#3071) 表明 `UNSLOTH_RETURN_LOGITS` 在训练期间会被重置，建议避免依赖运行时环境变量变化来提取 logits — 考虑显式模型配置等替代方案。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*