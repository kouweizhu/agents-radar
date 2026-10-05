# AI 基础设施日报 2026-10-05

> 生成时间: 2026-10-05 01:11 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Chinese. The instruction is very clear: output ONLY the translation, no preamble, no explanation, no markdown fences around the whole output. I need to preserve all the Markdown structure exactly.

Let me translate this carefully, maintaining the technical register and all formatting.

Key things to preserve:
- All headings
- Tables (including alignment rows)
- Lists (bulleted and numbered)
- Bold/italic
- Horizontal rules
- Emoji
- URLs
- Code spans, code blocks
- Numbers and dates
- Issue/PR references (#12345)
- Project names, version tags, file paths

I need to use natural technical Chinese - the register of a Chinese developer newsletter. This means:
- Professional technical terminology
- Concise phrasing
- Not literal word-for-word translation
- Maintain the same tone and style

Let me start translating section by section:</think>

# 跨项目生态报告 — 2026-10-05

## 1. 生态概览

AI 推理栈正在经历各层级并行开发的密集期。生产级服务引擎（vLLM、SGLang）正针对 Q4 2026 硬件发布进行 Qwen4Exp 和 DeepSeek V4.1 配置优化，而本地运行时（llama.cpp、Ollama）则扩展异构 GPU 支持（Intel SYCL、AMD ROCm、Qualcomm Hexagon）。与此同时，编排/网关层（LiteLLM）强化了认证和可观测性，微调框架（Unsloth）则在训练时性能上推进 CUDA 图边界。统一的主题：**后训练优化**——涵盖量化、KV 缓存管理和内核融合——现已成为差异化的主要战场。

---

## 2. 活动对比

| 项目 | Issue（开放） | PR 合并（24h） | Release（24h） | 关键高优先级事项 |
|---------|---------------|------------------|----------------|------------------------|
| **vLLM** | ~20 issues | 9+ 已合并 | 无 | Batch invariant RFC（99 条评论），MTP+prefix cache 损坏，Qwen4Exp FP8 修复 |
| **SGLang** | 15+ issues | 12+ 已合并 | 无 | DeepSeek-V4 HiCache 死锁，trtllm_mfa H200 回归，SeaweedFS L3 后端 |
| **llama.cpp** | ~8 issues | 10 次提交 | 10 次提交 | MTP draft 接受 bug（2.9× 回归），CUDA MMQ 崩溃，Vulkan RDNA4 回归 |
| **Ollama** | 16 issues | ~8 已合并 | 无 | Qwen 3.8 工具调用（500 错误），AMD Vulkan 回归，MLX 内存分页 |
| **LiteLLM** | 10 issues | 9 已合并 | v1.105.0-rc.1 | 认证注册表死锁，Vertex AI 内容丢失，Anthropic /v1/messages 编码 |
| **Unsloth** | 11 issues | ~15 已合并 | 无 | Tensor split 解码变慢 2.9×，mmproj 加载回归，Radeon Vulkan OOM |

**观察**：SGLang 和 Unsloth 的合并 PR 速度领先；vLLM 和 SGLang 的高 severity issue 讨论最活跃。LiteLLM 是此期间唯一有 release 的项目。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **Qwen4Exp** | ✅ BF16 + FP8 QSA | — | — | — | — | — |
| **DeepSeek V4.1** | ✅ Compressor 修复 | ✅ 可选 TRT-LLM sparse | — | — | ✅ OpenRouter 价格同步 | ✅ mHC + prefill 优化 |
| **Qwen3-TTS** | — | — | — | — | — | ✅ 快速微调 |
| **Qwen3.5 GDN** | — | ✅ 可选路由 | — | — | — | — |
| **K2 Horizon** | — | — | — | ✅ 已请求 | — | — |
| **Kolibri 1 (MLX)** | — | — | — | ✅ 进行中 | — | ✅ MLX 支持 |
| **FLUX (ROCm)** | — | — | — | — | — | ✅ 融合 RoPE |
| **Claude (Bedrock SO)** | — | — | — | — | 进行中 | — |

**领先者**：**vLLM** 和 **SGLang** 最接近 Q4 2026 旗舰模型（Qwen4Exp、DeepSeek V4.1）的生产就绪状态。Unsloth 在多模态微调领域领先（FLUX、扩散模型、TTS）。Ollama 扩展 CPU/iGPU 路径（Intel SYCL、K2 Horizon）。

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键工作 |
|-------------------|------------------|----------|
| **KV 缓存 / 前缀缓存** | vLLM、SGLang | NIXL KV 连接器睡眠/唤醒（#59993），SeaweedFS L3 后端（#42399），并发 PLE 主机读取 |
| **量化** | vLLM、llama.cpp | PTQ1.0 三元化（1.75 bpw），FlashInfer MLA + NVFP4 稀疏（#59342），Qwen4Exp QSA GEMM 融合 |
| **批处理 / 调度** | vLLM | Batch invariant RFC（#27433），优先级抢占（#40004） |
| **内核融合** | Unsloth、llama.cpp | FLUX 融合 RoPE（ROCm +8%），卸载下的 CUDA 整体步骤图（+10% FLUX L4），tinyBLAS K-tails |
| **分布式服务** | SGLang | DCP + Helix A2A 后端，SP all-gather 矩阵乘法路由 |
| **内存卸载** | vLLM、SGLang | 模型运行器缓冲区卸载（#59994），HiCache MoE 专家 GPU 缓存到主机内存（#29887） |
| **LoRA / 适配器** | Unsloth | MiCA LoRA 初始化，block_swap_layers → offload_layers 重命名 |

**前沿集中度**：最高杠杆的优化轴是 **KV 缓存管理**（卸载、睡眠/唤醒、分层缓存）横跨 vLLM 和 SGLang，其次是 Unsloth 和 llama.cpp 中多模态模型的 **内核融合**。

---

## 5. 层级定位

| 层级 | 主要项目 | 角色 |
|-------|------------------|------|
| **服务引擎** | **vLLM**、**SGLang** | 生产级 LLM 推理，支持 P/D 分离、前缀缓存、投机解码。均面向 Kubernetes/云部署。 |
| **本地运行时** | **llama.cpp**、**Ollama** | 边缘/设备推理。llama.cpp = 最广泛的后端覆盖（CUDA/Vulkan/Metal/CPU/ROCm/SYCL/Hexagon）；Ollama = 开发者友好体验 + 托管更新。 |
| **网关 / 代理** | **LiteLLM** | 统一 API 层、成本追踪、认证、可观测性。位于任意后端之前（OpenAI 兼容、Anthropic、Vertex、本地）。 |
| **训练 / 微调** | **Unsloth** | GPU 高效微调（LoRA、QLoRA、GaLore）。桌面应用用于本地微调；API 集成支持云端工作流。 |

**区分**：vLLM/SGLang 直接竞争同一生产推理市场。LiteLLM 位于它们之上作为消费层。llama.cpp/Ollama 服务开发者/爱好者和嵌入式市场。Unsloth 占据独立的垂直领域（微调），可作为推理后端接入上述任意项目。

---

## 6. 趋势信号

### 基础设施工程师应关注什么

| 趋势 | 证据 | 意义 |
|-------|----------|-------------|
| **多层 KV 缓存成为标准** | SeaweedFS L3（SGLang），NIXL 连接器（vLLM），HiCache GPU 专家缓存（llama.cpp） | 推理集群将日益分层：RAM → NVMe → 远程 KV 存储；需相应规划存储架构 |
| **异构 GPU 支持加速** | Intel SYCL（Ollama），AMD ROCm 融合内核（Unsloth），Qualcomm Hexagon SSM（llama.cpp），Vulkan 修复（多个） | 无单一 GPU 厂商主导；基础设施应支持 CUDA + 一个备选方案以实现冗余 |
| **生产回归速度较高** | 生态中 6 个关键 bug（MTP、tensor split、HiCache 死锁、trtllm_mfa、认证死锁、Vertex 数据丢失） | 部署需锁定版本并具备回滚能力；生产环境避免自动更新 |
| **网关层加固** | LiteLLM cosign Docker 签名，认证注册表超时修复，有界重试 | 安全性和可靠性正在上移；预期将出现更严格的验证要求 |
| **投机解码走向成熟** | 块验证（SGLang），MTP + 前缀缓存（vLLM），LiLiCorr（SGLang） | 延迟敏感服务应基准测试投机解码——可获得 30%+ 吞吐量提升，但正确性 bug 仍存在 |
| **多模态训练成为独立栈** | Unsloth diffusion MCP 工具，FLUX/VAE 优化，Qwen3-TTS 支持 | 微调工作流现涵盖文本 + 图像 + 音频；Unsloth 正在定位为统一微调层 |

### 技术决策者行动项

1. **延迟 vLLM/SGLang 自动升级** — 多个回归中；锁定已知稳定版本（vLLM v0.28.0，Unsloth pre-b10715-mix）
2. **评估 SeaweedFS 用于多节点 KV 共享** — SGLang 的 L3 后端支持跨实例前缀缓存，与复制服务相关
3. **添加认证超时监控** — LiteLLM 的注册表死锁修复（#44530）解决了系统性风险；确保部署具备超时可观测性
4. **在卸载下基准测试 CUDA 图** — Unsloth 的 10% FLUX 收益表明推理时仍有优化空间，即使模型已卸载
5. **规划 AMD 备选方案** — ROCm 支持不再是实验性的；llama.cpp 和 Unsloth 均提供生产级 AMD 路径

---

*报告综合自各项目摘要 — 2026-10-05*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest from English to Chinese. I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate the digest carefully, maintaining the structure and using natural technical Chinese.</think>

# vLLM 每日简报 — 2026-10-05

## 今日要闻

开发持续推进多方面工作：Qwen4Exp 获得重大优化（投影融合、旧 GPU 的 FP8 KV cache 支持），睡眠/唤醒模式基础设施也在推进中，包括 KV connector 修复和模型运行器缓冲区卸载。社区还在处理批量不变性优化（99 条评论）以及硬件抽象（#30679）和错误处理标准化（#48227）的 RFC。

---

## 发布与重大变更

- **暂无发布**。

---

## 新模型与硬件支持

| 模型 / 硬件 | 状态 | PR / Issue |
|------------------|--------|----------|
| **ZAYA1-8B** (Zyphra) | 功能请求已开启 | [#42286](https://github.com/vllm-project/vllm/issues/42286) |
| **Qwen4Exp** — BF16 INC PLE embeddings | 已添加支持 | [#58977](https://github.com/vllm-project/vllm/pull/58977) |
| **Qwen4Exp** — sm < 8.9 的 FP8 QSA KV cache | 为旧 GPU 修复 | [#59943](https://github.com/vllm-project/vllm/pull/59943) |
| **DeepSeek-V4.1** — compressor ring null block | Bugfix 已合并 | [#58560](https://github.com/vllm-project/vllm/pull/58560) |
| **NVIDIA GB10 (sm_121)** — 带前缀缓存的 GDN 路径 | Bugfix 进行中 | [#54173](https://github.com/vllm-project/vllm/issues/54173) |
| **CPU / DiffusionGemma** — causal mask dtype | 已修复 | [#59992](https://github.com/vllm-project/vllm/pull/59992) |

---

## 性能与优化

| 领域 | 描述 | PR / Issue |
|------|-------------|----------|
| **Qwen4Exp QSA** | 将 QKVG + indexer Q/K 投影合并为单个 GEMM；为 GB300 (SM103) 和 B200 (SM100) 添加 LL-GEMM 分发 | [#59533](https://github.com/vllm-project/vllm/pull/59533) |
| **FlashInfer MLA** | 在 `FLASHINFER_MLA_SPARSE` 上添加 `nvfp4_ds_mla` 支持，支持原生 NVFP4 解码 | [#59342](https://github.com/vllm-project/vllm/pull/59342) |
| **批量不变性** | 跟踪确定性推理的优化工作 | [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **GLM 5.3** | 性能优化后续工作 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **EAGLE/MTP 前缀缓存** | 最后一个 block 丢弃导致每次命中约 1,648 token 重计算；批处理吞吐量下降 30-40% | [#53670](https://github.com/vllm-project/vllm/issues/53670) |
| **NIXL KV connector** | 需要文档说明指标聚合语义 | [#41230](https://github.com/vllm-project/vllm/issues/41230) |

---

## 稳定性与回退

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | 前缀缓存 + MTP 损坏混合 Mamba/GDN 模型的输出 (v0.28.0) | 进行中 — [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| **高** | Qwen3.8-Flash-Next： disaggregated PD serving 中 MTP 接受率为 0% | 进行中 — [#59642](https://github.com/vllm-project/vllm/issues/59642) |
| **高** | DeepSeek-V4-Flash： temperature=0 时输出不确定，随并发度增加 | 进行中 — [#53257](https://github.com/vllm-project/vllm/issues/53257) |
| **中** | 带飞行中异步 KV 加载的 `pause(mode="wait")` / `sleep(mode="wait")` 失败 | 修复 PR — [#59993](https://github.com/vllm-project/vllm/pull/59993) |
| **中** | 模型运行器缓冲区在睡眠时未卸载 | 修复 PR — [#59994](https://github.com/vllm-project/vllm/pull/59994) |
| **中** | MoRIIO RDMA 与 GPU 零化的竞态条件 | 修复 PR — [#59164](https://github.com/vllm-project/vllm/pull/59164) |
| **中** | Qwen3-VL deepstack "Requested more deepstack tokens than available" 带 chunked prefill + 前缀缓存 | 进行中 — [#41485](https://github.com/vllm-project/vllm/issues/41485) |
| **中** | LoRA 的前缀缓存损坏（同名不同 id） | 进行中 — [#30931](https://github.com/vllm-project/vllm/issues/30931) |

---

## 这对应用开发者的意义

1. **旧 GPU 上的 Qwen4Exp 用户** — 如果在 sm90 之前的硬件（如 A100、旧版 Ampere）上运行，FP8 KV cache 修复（#59943）解决了使用 QSA 时的崩溃问题。
2. **使用前缀缓存的生产部署** — 混合 Mamba/GDN 损坏 bug（#53912）和 EAGLE/MTP 性能问题（#53670）影响使用投机解码 + 前缀复用的工作负载；注意监控输出质量回退。
3. ** disaggregated serving** — 睡眠/唤醒模式基础设施日趋成熟但仍有边缘情况（#59993、#59994）；在生产 P/D 部署中启用前充分测试。
4. **Claude Code / Anthropic API 用户** — RFC #58647 旨在加强 `/v1/messages` 以支持多模型；当前实现可能在大工具模式时遇到困难。
5. **错误处理** — 标准化 RFC（#48227）凸显了异常处理的碎片化；未来版本可能会引入语义化异常类型以便更清晰地调试。

---

*简报基于 2026-10-05 的 vLLM 仓库数据生成。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep URLs, code spans, issue/PR numbers, file paths, API/config identifiers as-is
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me go through and translate carefully while maintaining the structure:

The document has:
- 6 main sections with headings
- Tables with | separators
- Lists with | for tables
- Bold text
- URLs that should stay as-is
- Issue/PR numbers and links
- Code/config identifiers

Let me translate section by section:

## 1. Today's Highlights → 今日要闻

## 2. Releases & Breaking Changes → 发布与重大变更

## 3. New Model & Hardware Support → 新模型与硬件支持

## 4. Performance & Optimization → 性能与优化

## 5. Stability & Regressions → 稳定性与回归问题

## 6. What This Means for Application Developers → 这对应用开发者意味着什么

Now let me translate the content:

**SGLang** - keep as is
**DCP** - Decode Context Parallelism → 解码上下文并行
**Helix Parallelism** → Helix并行
**DeepSeek V4.1** - keep as is
**Qwen3.5 GDN** - keep as is
**FP8** - keep as is (standard)
**NVFP4** - keep as is
**MoE** - Mixture of Experts → 混合专家
**TP** - Tensor Parallelism → 张量并行


**TTFT** - Time To First Token → 首Token延迟
**HiCache** - keep as is
**CUDA coredump** - keep as is or translate to CUDA核心转储
**Triton** - keep as is
**MXFP4** - keep as is

Now I'll translate the table content, maintaining the structure:

| Item | Description | PR/Issue |
|------|-------------|----------|
| **Moore Threads (MUSA) GPU** | Roadmap issue opened for first-class GPU backend support | [#16565](https://github.com/sgl-project/sglang/issues/16565) |
| **DeepSeek V4.1** | Active development and optimization for improved performance | [#42170](https://github.com/sgl-project/sglang/issues/42170) |

I'm translating technical terms while preserving the exact Markdown formatting, links, and identifiers as-is. The key is maintaining natural Chinese technical writing style without literal translation.</think>

# SGLang 速报 — 2026-10-05

## 1. 今日要闻

SGLang 开发多点推进：解码上下文并行（DCP）与 Helix 并行工作向 Q3 目标迈进，DeepSeek V4.1 性能优化持续落地（新增 TRT-LLM 稀疏注意力可选支持），分布式缓存基础设施 SeaweedFS L3 后端已完成对接。同时多个正确性 bug 正在跟进，包括 H200 上 `trtllm_mha` 在 v0.5.20 中的回归问题以及 DeepSeek-V4 HiCache write-through 死锁问题。

---

## 2. 发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Moore Threads (MUSA) GPU** | 已开启路线图 issue，为原生 GPU 后端支持做准备 | [#16565](https://github.com/sgl-project/sglang/issues/16565) |
| **DeepSeek V4.1** | 活跃优化轨道：mHC 代码清理、prefill 优化、TP 优化 | [#42170](https://github.com/sgl-project/sglang/issues/42170) |
| **DSV4.1 + TRT-LLM 稀疏注意力** | 通过 `--dsv4-attn-backend trtllm --cuda-graph-backend-prefill disabled` 启用可选的稀疏 MLA 后端 | [#41603](https://github.com/sgl-project/sglang/pull/41603) |
| **Qwen3.5 GDN** | 可选 Cake 路由：GDN prefill/decode、FP8 分组 MoE、NVFP4 warp-decode MoE，通过 `SGLANG_CAKE_ROUTES` 配置 | [#42406](https://github.com/sgl-project/sglang/pull/42406) |
| **Foundry 适配器** | 新增 Foundry 框架集成适配器 | [#42254](https://github.com/sgl-project/sglang/pull/42254) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR/Issue |
|------|--------|--------|----------|
| **HiCache 主机内存** | 修复主机内存统计错误（cgroup headroom 现已正确排除 page cache） | 防止容器化 Slurm 环境下的 OOM | [#42039](https://github.com/sgl-project/sglang/pull/42039)（已关闭） |
| **文件后置 PLE 表** | 冷读并发 Host 读取 | 冷 prefill TTFT 降低 6.8 倍（GB10） | [#42392](https://github.com/sgl-project/sglang/issues/42392) |
| **DCP + Helix** | A2A + FlashInfer-MNNVL 通信后端设为默认（`--dcp-comm-backend` 支持 `fi_a2a` / `a2a`） | 改进解码并行效果 | [#29736](https://github.com/sgl-project/sglang/issues/29736) |
| **DeepSeek V4 模型加载** | 限制 tensor-copy worker 数量，Lustre 加载时间从约 95 分钟降至 3.3 分钟 | 大幅缩短检查点加载时间 | [#42361](https://github.com/sgl-project/sglang/issues/42361) |
| **SP all-gather matmul** | Cake push-wait AGMM 可通过 `SGLANG_CAKE_ROUTES=sp_all_gather_matmul` 使用 | engine 操作数的序列并行转发 | [#42532](https://github.com/sgl-project/sglang/pull/42532) |
| **SeaweedFS L3 后端** | HiCache L3 层现支持 SeaweedFS（S3 网关） | 跨实例/节点 KV 共享 | [#42399](https://github.com/sgl-project/sglang/pull/42399) |
| **AWS EFA 支持** | 新增 `runtime-efa` Docker 目标镜像，含 EFA 库和 mooncake-transfer-engine-efa | AWS GPU 集群开箱即用 | [#41006](https://github.com/sgl-project/sglang/pull/41006) |
| **AMD AITER DSA** | 修复 AMD 硬件上 AITER DSA prefill 与 FP8 KV cache 的兼容问题 | 稀疏注意力正确性修复 | [#39083](https://github.com/sgl-project/sglang/pull/39083) |
| **Block 验证** | Speculative decoding 可选 block 验证器（接受最长已接受前缀 vs. 首个拒绝） | 提升 speculative decoding 吞吐 | [#42297](https://github.com/sgl-project/sglang/pull/42297) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 详情 | 状态 |
|----------|-------|---------|--------|
| **高** | **DeepSeek-V4 + HiCache write_through TP 死锁** | 高并发长 prefill 场景下，scheduler 和 detokenizer 陷入静默，`/health` 返回 503 | 进行中 — [#42465](https://github.com/sgl-project/sglang/issues/42465) |
| **高** | **H200 (SM90) 上 `trtllm_mha` 输出错误** | v0.5.20 接受 prefill/decode 都用 `trtllm_mha`，但返回错误结果；v0.5.17 正确拒绝 | 进行中 — [#40921](https://github.com/sgl-project/sglang/issues/40921) |
| **中** | **Qwen3.8 27b 在 2×RTX3090 上阻塞其他请求** | 大 prefill 阻塞其他请求 | 进行中 — [#42530](https://github.com/sgl-project/sglang/issues/42530) |
| **中** | **Hybrid-SWA + radix cache 准入死循环** | SWA 前缀锁将已完成请求的未修剪最后 chunk 锁定，导致无法准入 | 进行中 — [#41579](https://github.com/sgl-project/sglang/issues/41579) |
| **中** | **XGrammar schema 清理 bug** | 跳过 `optional`、`star`、`plus`、`repeat`、`dispatch`、`token_dispatch`、`token_triggered_tags` — 在这些内部拒绝 `null` json_schema | 进行中 — [#42144](https://github.com/sgl-project/sglang/issues/42144) |
| **中** | **Qwen-VL 字面量视觉标记被解析为额外图片** | 文本中包含 `<|vision_start|><|image_pad|><|vision_end|>` 时，请求含图片会触发 HTTP 500 | 进行中 — [#35582](https://github.com/sgl-project/sglang/issues/35582) |
| **中** | **Tree speculative sampling bug** | 当 coin 等于小于 1 的最大 float32 时，仅拒绝目标 mass 的 token，发送 `vocab_size - 1` | 进行中 — [#42528](https://github.com/sgl-project/sglang/issues/42528) |
| **低** | **Qwen3 streaming 无限思考循环** | 跨 chunk tag 截断导致 reasoning model 陷入循环 | 进行中 — [#31118](https://github.com/sgl-project/sglang/issues/31118) |
| **信息** | **CUDA 核心转储追踪** | 自动收集自 `pr-test.yml` — 323 条评论追踪事件 | 进行中 — [#26340](https://github.com/sgl-project/sglang/issues/26340) |

---

## 6. 这对应用开发者意味着什么

- **如果你运行 DeepSeek V4 模型**：HiCache `write_through` 模式存在已知的高并发 prefill 死锁 bug——请等待修复后再使用该配置。从 Lustre 加载模型现已完成 tensor-copy worker 修复，加载速度大幅提升。

- **如果你使用 speculative decoding**：Block 验证现为可选功能，开启后可接受更长已接受前缀，从而提升吞吐。

- **如果你部署在 H200 (SM90) 上**：在 v0.5.20 中避免对 prefill 和 decode 同时使用 `--attention-backend trtllm_mha`——会导致输出错误。

- **如果你需要分布式 KV 缓存**：SeaweedFS 现已作为 HiCache L3 后端支持，实现跨实例 KV 共享。

- **如果你面向 AWS GPU 集群部署**：新镜像 `runtime-efa` 简化了 EFA 互联环境下的部署流程。

- **如果你使用 Qwen3.5 MoE**：通过 `SGLANG_CAKE_ROUTES` 可启用新的可选 Cake 内核路由，支持 GDN prefill/decode 和 FP8/NVFP4 MoE 优化。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese, following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, numbers, dates, code blocks as-is
4. Keep project names, issue/PR references (#12345), file paths, API identifiers in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully:

---

# llama.cpp 摘要 — 2026-10-05

## 1. 今日要闻

项目在多方面持续活跃开发：混合批次token支持已合并（单批次同时支持embedding和原始token），CUDA内存安全问题正在修复（MMQ修复、变量作用域改进），后端重要工作中包括Vulkan FWHT内核扩展支持最大8192块宽度，以及新的MoE专家GPU缓存用于卸载。路由器模式下的日志空行和颜色处理问题已解决。

## 2. 发布与重大变更

| Commit | 描述 | 链接 |
|--------|-------------|------|
| b11400 | **llama: 支持同一批次中同时包含embd和raw tokens** — 扩展`llama_batch_ext`以支持在同一批次中混合embedding和文本token，用于PaliGemma等非因果模型 | [#29622](https://github.com/ggml-org/llama.cpp/pull/29622) |
| b11401 | **log, server: 自包含颜色，分离路由模式下子命令日志** — 修复路由模式下的空日志行和平台相关的颜色行为问题 | [#29895](https://github.com/ggml-org/llama.cpp/pull/29895) |


| b11390 | **CUDA: 修复MMQ内存故障** — 修复当`n_expert >> n_ubatch`时的非法内存访问 | [#29941](https://github.com/ggml-org/llama.cpp/issues/29941) |

## 3. 新模型与硬件支持

- **Hexagon后端**: SSM-conv更新，支持VTCM gather和5级HVX vshuff蝴蝶转置 — 提升设备端推理效率
- **CUDA unary ops**: 支持任意4D跨步和非连续张量的F16/F32/BF16运算

，x86上的tinyBLAS针对BF16/FP16/FP32 K尾部的向量化提高了非tile倍数维度的CPU推理性能，PTQ1_0量化新增128组三级量化实现1.75比特权重无损往返。

## 4. 性能与优化

| PR | 领域 | 描述 | 链接 |
|----|------|-------------|------|
| #29772 | Vulkan | 扩展FWHT内核支持最大8192块宽度，之前最大512 | [#29772](https://github.com/ggml-org/llama.cpp/pull/29772) |

GPU缓存机制为MoE专家提供LRU策略，仅在缓存未命中时上传到GPU，适用于小批次（≤32 tokens）场景。FlashAttention优化倾向于整tile调度以提升Ada+ GPU的prefill性能。管道并行处理支持主机内存中的MoE专家，而分块FP16/BF16到FP32转换采用512MB分块根据启发式降低VRAM使用。Vulkan方面已修复MoE模型的Intel prefill回归问题。

稳定性方面存在高严重性问题需要关注。

draft-mtp在-np N多ubatch批次下接受度降至0.0，原因是异步t_h_nextn设备到主机复制存在竞争条件。CUDA MMQ MoE处理1024×156 PNG输入时发生越界访问导致崩溃。CUDA fattn在长上下文下Ampere (sm86)的KV流式传输性能较物理方式慢约两倍，量化KV加batch>1的场景中量化KV存在额外FP16转换开销。

ROCm gfx1151 (Strix Halo APU)产生损坏输出，但同一硬件上Vulkan后端运行正常。MAT_MUL + CPY操作在Qualcomm Snapdragon X Elite上出现unpack8()数据损坏。Vulkan在RDN上出现约12%的prefill性能回归。

带有per_layer_token_embd的Qwen3.8-27B在2×96 GiB Vulkan+RPC上无法加载，需要约50.7 GiB CPU缓冲区。MMQ内存故障问题已在b11390修复，CUDA非法内存访问错误已解决。tinyBLAS向量化和CPU测试已修复，当启用use_ref进行比较时正确跳过tinyBLAS。Vulkan预填充回归问题也在处理中。

使用PaliGemma等视觉语言模型的应用现在可以在同一批次中处理embedding和原始文本token，这对于混合输入场景很有用。路由器模式的日志修复解决了生产监控中的空白行问题。MoE专家的新GPU缓存机制使得能够在内存受限的配置下运行更大的MoE模型。

需要注意的是，/slots KV缓存保存/恢复API在视觉模型上仍然无法工作，如果依赖视觉模型的提示缓存，这个限制仍然存在。CUDA用户如果遇到新硬件上的非法内存访问错误，应更新到b11390或更高版本。SYCL张量并行的加载时间较长，需要提前规划多GPU SYCL部署。</think>

# llama.cpp 摘要 — 2026-10-05

## 1. 今日要闻

项目在多方面持续活跃开发：混合批次token支持已合并（单批次同时支持embedding和原始token），CUDA内存安全问题正在修复（MMQ修复、变量作用域改进），后端重要工作中包括Vulkan FWHT内核扩展支持最大8192块宽度，以及新的MoE专家GPU缓存用于卸载。路由器模式下的日志空行和颜色处理问题已解决。

## 2. 发布与重大变更

| Commit | 描述 | 链接 |
|--------|-------------|------|
| b11400 | **llama: 支持同一批次中同时包含embd和raw tokens** — 扩展`llama_batch_ext`以支持在同一批次中混合embedding和文本token，用于PaliGemma等非因果模型 | [#29622](https://github.com/ggml-org/llama.cpp/pull/29622) |
| b11401 | **log, server: 自包含颜色，分离路由模式下子命令日志** — 修复路由模式下的空日志行和平台相关的颜色行为问题 | [#29895](https://github.com/ggml-org/llama.cpp/pull/29895) |
| b11390 | **CUDA: 修复MMQ内存故障** — 修复当`n_expert >> n_ubatch`时的非法内存访问 | [#29941](https://github.com/ggml-org/llama.cpp/issues/29941) |

## 3. 新模型与硬件支持

- **Hexagon 后端**: SSM-conv 更新，支持 VTCM gather 和 5 级 HVX vshuff 蝴蝶转置 — 提升设备端推理效率 | [#29971](https://ggml-org.github.io/llama.cpp/zzz/#29971)
- **CUDA unary ops**: 新增对任意 4D 跨步和非连续张量的 F16、F32、BF16 支持 | [#29781](https://github.com/ggml-org/llama.cpp/pull/29781)
- **tinyBLAS on x86**: 向量化 BF16/FP16/FP32 K tails — 改善非 tile 倍数维度的 CPU 推理性能 | [#29806](https://github.com/ggml-org/llama.cpp/pull/29806)
- **PTQ1_0 量化**: 128 组新三级量化 — 1.75 比特权重无损往返 | [#29672](https://github.com/ggml-org/llama.cpp/pull/29672)

## 4. 性能与优化

| PR | 领域 | 描述 | 链接 |
|----|------|-------------|------|
| #29772 | Vulkan | 扩展 FWHT 内核至最大 8192 块宽度（原最大 512）— 减少回退到 dense FP32 矩阵乘法 | [#29772](https://github.com/ggml-org/llama.cpp/pull/29772) |
| #29887 | GGML | 主机内存中 MoE 专家的 GPU 缓存 — LRU 缓存将专家保留在 GPU 上，仅上传未命中；适用于小批次（≤32 tokens）| [#29887](https://github.com/ggml-org/llama.cpp/pull/29887) |
| #29435 | CUDA FlashAttention | 优选整 tile 调度以提高两阶段内核效率 — 避免不必要的 Stream-K，提升 Ada+ GPU prefill 性能 | [#29435](https://github.com/ggml-org/llama.cpp/pull/29435) |
| #29963 | GGML | 支持主机内存中 MoE 专家的流水线并行 | [#29963](https://github.com/ggml-org/llama.cpp/pull/29963) |
| #29442 | BF16/FP16 转换 | 分块 FP16/BF16 转 FP32 以降低 VRAM 占用 — 基于启发式方法采用 512MB 分块 | [#29442](https://github.com/ggml-org/llama.cpp/pull/29442) |
| #29936 | Vulkan | 修复 Intel MoE 模型 prefill 性能回退（追溯至 PR #29182）| [#29936](https://github.com/ggml-org/llama.cpp/pull/29936) |

## 5. 稳定性与回归

**严重问题：**

| Issue | 严重程度 | 状态 | 描述 | 链接 |
|-------|----------|--------|-------------|------|
| #27572 | 高 | 开放 | **[draft-mtp]**: `-np N` 多 ubatch 批次下 draft acceptance 崩溃至 0.0 — 异步 `t_h_nextn` 设备→主机拷贝竞争条件 | [#27572](https://github.com/ggml-org/llama.cpp/issues/27572) |
| #28383 | 高 | 开放 | **CUDA MMQ MoE**: OOB 访问导致视觉模型崩溃（1024×1536 PNG 输入）| [#28383](https://github.com/ggml-org/llama.cpp/issues/28383) |
| #29935 | 中 | 开放 | **CUDA fattn**: Ampere (sm86) 长上下文下 KV 流式传输比 physics 慢约 2 倍；quantized-KV + batch>1 额外支付不必要的 FP16 转换开销 | [#29935](https://github.com/ggml-org/llama.cpp/issues/29935) |

**已修复的显著问题：**

- **b11390**: 修复 `n_expert >> n_ubatch` 时的 MMQ 内存故障 — CUDA 非法内存访问已解决
- **b11393**: 修复 chat-peg-parser 释放后使用 — `pending_tool_call` 重置时未清除 `current_tool`
- **b11398**: 修复 tinyBLAS 向量化 — CPU 测试在启用 `use_ref` 进行正确比较时现正确跳过 tinyBLAS

**待处理问题：**

- **#27579**: HIP/ROCm gfx1151 (Strix Halo APU) 输出损坏 — 同硬件 Vulkan 后端正常
- **#28290**: unpack8() 在 Qualcomm Snapdragon X Elite 上破坏 MAT_MUL + CPY
- **#29892**: RDNA4 (RX 9070 XT) 上 Vulkan prefill 性能回退约 12%（自 PR #29182）
- **#29932**: 带 `per_layer_token_embd` 的 Qwen3.8-27B 在 2×96 GiB Vulkan+RPC 上无法加载 — 需要约 50.7 GiB CPU 缓冲

## 6. 这对应用开发者的意义

1. **混合批次支持**: 使用 PaliGemma 等视觉语言模型的应用现可在同一批次中处理 embedding 和原始文本 token — 适用于混合输入场景。实现细节见 PR #29622。

2. **服务器路由模式**: 日志修复 (b11401) 解决了路由部署中的空行问题 — 生产监控更清晰。

3. **MoE 模型改进**: 主机内存中 MoE 专家的新 GPU 缓存 (#29887) 使在内存受限环境下运行更大 MoE 模型成为可能，通过将常用专家保留在 GPU 上。

4. **视觉模型用户**: `/slots` KV 缓存保存/恢复 API 仍不支持视觉模型（Issue #19466 已关闭为过期）— 若依赖视觉模型的提示缓存，此限制仍然存在。

5. **Blackwell (sm_120) CUDA 用户**: MMQ 修复解决了大专家数时的崩溃；若在新 NVIDIA 硬件上遇到非法内存访问错误，更新到 b11390+。

6. **SYCL 张量并行**: 加载时间过长（>20 分钟）问题持续存在（Issue #25423 仍开放）。多 GPU SYCL 部署需提前规划。

---

*Rules:*
- *Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.*
- *Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.*
- *Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.*
- *Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.*
- *Issue/PR references like #12345 and their link text stay as-is.*
- *Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. Let me carefully translate this while preserving:

1. The Markdown structure exactly (headings, tables, lists, etc.)
2. URLs, numbers, dates, issue/PR references (#17778, etc.)
3. Project names, technical terms, file paths
4. Technical register in Chinese

Let me go through each section:

## 1. Today's Highlights
今天的主要活动集中在后端增强和跨多GPU平台的bug修复上。最大的亮点是原生Intel SYCL支持(#18333)的合并，启用了Linux上的Intel Arc独立显卡。几个高关注度的bug仍未解决，包括Qwen 3.8工具调用失败和AMD Radeon 780M Vulkan回归问题。MLX后端工作持续推进，包括逐层量化和内存分页改进。

## 2. Releases & Breaking Changes
过去24小时无新版本发布。

## 3. New Model & Hardware Support
- **K2 Horizon Models** — 功能请求：为MBZUAI IFM模型系列（0.9B–36B，含MoE变体）添加GGUF支持。已在HuggingFace以GGUF格式提供。| [#18698](https://github.com/ollama/ollama/issues/18698)

- **Intel Arc独立显卡支持** — 原生Intel SYCL (oneAPI)后端已合并，为Linux上的Intel独立显卡（如Arc B70 32GB）提供完整支持，并具备集成硬件发现能力。| [#18333](https://github.com/ollama/ollama/pull/18333)

- **Kolibri 1 (MLX)** — MLX引擎支持开发中。| [#18780](https://github.com/ollama/ollama/pull/18780)


性能优化方面，Qwen3.8渲染器检测已合并，可自动选择GGUF导入的渲染器，保留思考过程而非回退到Go模板路径。传输重试现已绑定（每次尝试10秒），防止单个停滞的查找消耗整个重试上下文。RC版本现在可以拉取匹配`min_version`的模型。MLX内存分页方面存在一个开放问题：macOS上权重在每次请求约2秒后被卸载，导致后续空闲期间的请求需要重新加载，增加了延迟。

稳定性方面，Qwen 3.8工具调用在多轮工具循环中返回"no user query found in messages"（500错误）是一个高优先级问题，自2025年8月以来一直没有解决。AMD Radeon 780M Vulkan在Ollama ≥0.32.10版本出现回归，显示"命令提交内存不足"的错误。`clef-flash`决策模型在CUDA上返回"非有限logit"，在CPU上返回"无法打开模型"，但在`/v1/chat/completions`端点上工作正常。

MLX逐层量化覆盖在导入时被忽略，导致量化matmul的形状不匹配。lfm2:24b的"python"令牌被解码为空字符串，导致输出中文本静默丢失。`/api/generate`端点接受有效JSON体后的尾随非JSON数据，违反了Content-Type契约。Mac的"Restart to update"提示对非管理员用户失败。

对于应用程序开发者来说，Qwen 3.8的工具调用在多轮循环中仍然不稳定，可能会遇到500错误，建议使用备选模型。Linux上的Intel GPU用户现在可以通过SYCL后端启用Intel Arc独立显卡。macOS上的MLX用户应该预期冷启动延迟，因为权重在空闲2秒后被卸载。传输可靠性已改进，绑定的重试机制可以防止身份验证失败或缓慢的HuggingFace重定向导致无限挂起。即将推出的Ollama更新CLI增加了`ollama update [check|pull]`命令和RC支持，简化了升级工作流程。</think>

# Ollama 每日简报 — 2026-10-05

## 1. 今日要闻

今日主要集中于后端增强和跨多GPU平台的bug修复。最大亮点是原生 Intel SYCL 支持 (#18333) 已合并，可在 Linux 上启用 Intel Arc 独立显卡。多个高关注度 bug 仍未解决，包括 Qwen 3.8 工具调用失败和 AMD Radeon 780M Vulkan 回归问题。MLX 后端工作持续推进，包括逐层量化和内存分页改进。

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

- **K2 Horizon Models** — 功能请求：为 MBZUAI IFM 模型系列（0.9B–36B，含 MoE 变体）添加 GGUF 支持。可在 HuggingFace 获取 GGUF 格式。| [#18698](https://github.com/ollama/ollama/issues/18698)

- **Intel Arc 独立显卡支持** — 原生 Intel SYCL (oneAPI) 后端已合并，为 Linux 上的 Intel 独立显卡（如 Arc B70 32GB）提供完整支持，并具备集成硬件发现能力。| [#18333](https://github.com/ollama/ollama/pull/18333)

- **Kolibri 1 (MLX)** — MLX 引擎支持开发中。| [#18780](https://github.com/ollama/ollama/pull/18780)

## 4. 性能与优化

- **Qwen3.8 渲染器检测** — PR 已合并，为 GGUF 导入自动选择 Qwen3.8 渲染器，保留思考过程而非回退到 Go 模板路径。| [#18786](https://github.com/ollama/ollama/pull/18786)

- **传输重试边界** — 认证重试和直接 URL 解析现已设置边界（每次尝试 10s），防止单个停滞的查找消耗整个重试上下文。| [#18452](https://github.com/ollama/ollama/pull/18452) | [#18437](https://github.com/ollama/ollama/pull/18437)

- **RC 版本拉取** — 现在可以拉取匹配 `min_version` 的候选版本。| [#18790](https://github.com/ollama/ollama/pull/18790)

- **MLX 内存分页** — 开放问题：macOS 上权重在每次请求约 2 秒后被卸载，导致后续空闲期间的请求需重新从磁盘分页。| [#18744](https://github.com/ollama/ollama/issues/18744)

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 评论 |
|----------|------|------|------|
| **高** | Qwen 3.8 工具调用在多轮工具循环中返回 "no user query found in messages" (500) | 开放 | 48 条评论，27 👍 — 自 2025 年 8 月以来的长期问题 | [#17778](https://github.com/ollama/ollama/issues/17778) |
| **高** | AMD Radeon 780M Vulkan 回归（Ollama ≥0.32.10）—"Not enough memory for command submission" | 开放 | 3 条评论，3 👍 | [#17748](https://github.com/ollama/ollama/issues/17748) |
| **中** | `clef-flash` 决策模型在 `/v1/systemone` 端点失败（CUDA: "non-finite logit"，CPU: "cannot open model"） | 开放 | 在 `/v1/chat/completions` 上正常工作；更大的 `clef:27b` 正常 | [#18769](https://github.com/ollama/ollama/issues/18769) |
| **中** | MLX 逐层量化覆盖导入时被忽略 — quantized_matmul 形状不匹配 | 开放 | 4 位量化权重配合 8 位逐层覆盖时加载失败 | [#18789](https://github.com/ollama/ollama/issues/18789) |
| **中** | lfm2:24b "python" token 解码为空字符串（无前导空格） | 开放 | 输出中文本静默丢失 | [#18785](https://github.com/ollama/ollama/issues/18785) |
| **低** | `/api/generate` 接受有效 JSON 体后的尾随非 JSON 数据 | 开放 | 违反 Content-Type 约定 | [#18775](https://github.com/ollama/ollama/issues/18775) |
| **低** | Mac "Restart to update" 提示对非管理员用户失效 | 开放 | 27 条评论 | [#11972](https://github.com/ollama/ollama/issues/11972) |

## 6. 这对应用开发者意味着什么

- **Qwen 3.8 工具调用仍不稳定** — 使用 Qwen3.8 配合工具的应用在多轮循环中可能遇到 500 错误。建议使用备选模型或等待 #17778 解决。

- **Linux 上的 Intel GPU 用户获得新后端** — SYCL 后端可启用 Intel Arc 独立显卡；需选择编译。

- **macOS 上的 MLX 用户应预期冷启动延迟** — 权重在空闲 2 秒后卸载意味着空闲期后的首次请求需重新加载 (#18744)。

- **传输可靠性已改进** — 绑定重试可防止身份验证失败或慢速 HF 重定向导致无限挂起。

- **关注即将推出的 Ollama 更新 CLI** — PR #18787 新增 `ollama update [check|pull]` 支持 RC 版本；简化升级工作流。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Daily Digest from English to Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, code references, etc. verbatim
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this while preserving the structure and using appropriate technical Chinese terminology.</think>

# LiteLLM 每日简报 — 2026-10-05

## 1. 今日要点

LiteLLM 10 月 5 日的活动聚焦于基础设施加固和可观测性：发布候选版 v1.105.0-rc.1 通过 cosign 提供了经过验证的 Docker 镜像签名，同时团队通过为全局注册表加载锁添加超时来解决关键的身份验证注册表死锁问题 (#44047)。多个 PR 改进了 OpenRouter、Azure GPT-realtime 和音频转录工作负载的成本跟踪准确性。

## 2. 发布与重大变更

| 版本 | 概要 | 链接 |
|------|------|------|
| **v1.105.0-rc.1** | 发布候选版，包含 Docker 镜像签名验证。所有 LiteLLM Docker 镜像现通过 cosign 使用 commit `0112e53` 中的密钥进行签名。 | [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.1) |

**迁移说明：** 通过 Docker 拉取 LiteLLM 的用户应在部署前使用 cosign 验证镜像。请参阅 [cosign 文档](https://docs.sigstore.dev/cosign/overview/) 获取验证步骤。

## 3. 新模型与硬件支持

- **DeepSeek V4 Flash (OpenRouter)** — 价格同步应用：输入成本降至 2.24e-08，输出成本现为每 token 1.28e-06。 | [PR #44533](https://github.com/BerriAI/litellm/pull/44533)
- **Azure gpt-realtime-2.1 / gpt-realtime-2.1-mini** — 退役日期从 2027-07-31 变更为 2027-06-25，遵循官方计划。 | [PR #44526](https://github.com/BerriAI/litellm/pull/44526)
- **Bedrock 上的 Claude 模型** — 原生结构化输出（`response_format`）支持正在开发中，适用于支持的 Claude 模型。 | [Issue #31882](https://github.com/BerriAI/litellm/issues/31882)

## 4. 性能与优化

| 领域 | 变更 | PR / Issue |
|------|------|------------|
| **身份验证注册表加载** | 为全局注册表加载锁添加超时，防止注册表扫描卡住导致请求停滞。修复了 v1.101.0+ 引入的死锁问题。 | [PR #44530](https://github.com/BerriAI/litellm/pull/44530), [Issue #44047](https://github.com/BerriAI/litellm/issues/44047) |
| **Token 计数** | 修复了 OpenAI `input_audio` 内容块的处理——之前会引发异常，现可正确计数。 | [PR #40188](https://github.com/BerriAI/litellm/pull/40188) |
| **ECS 日志** | 新增 `LITELLM_ECS_LOGS` 环境变量，添加符合 Elastic Common Schema v8.x 标准的 ECSFormatter。 | [PR #29689](https://github.com/BerriAI/litellm/pull/29689) |
| **支出跟踪** | 修复缓存键污染问题——`get_cache_key` 不再为不可缓存的调用类型执行。 | [Issue #31862](https://github.com/BerriAI/litellm/issues/31862) |
| **Lens 可观测性** | 新增服务端运行搜索和绘图功能；移除了客户端计算限制。 | [PR #44532](https://github.com/BerriAI/litellm/pull/44532) |
| **Proxy 支出写入器** | 修复了无日志请求时支出写入器停止运行的回归问题。 | [PR #44514](https://github.com/BerriAI/litellm/pull/44514) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | 全局身份验证注册表锁无超时——注册表扫描卡住时请求会停滞。 | 进行中 | [PR #44530](https://github.com/BerriAI/litellm/pull/44530) |
| **高** | `vertex_ai/agent_engine` 静默丢弃所有非文本内容（图片、文件、音频、视频）并返回自信但错误的答案。 | 进行中 | [Issue #44336](https://github.com/BerriAI/litellm/issues/44336) |
| **中** | Anthropic `/v1/messages` 适配器对推理模型编码错误——`thinking_delta` 在文本块内流式传输导致 Claude Code SDK 中内容为空。 | 进行中 | [Issue #32357](https://github.com/BerriAI/litellm/issues/32357) |
| **中** | 使用第三方 `api_base` 的 `anthropic/<model>` 错误地转发客户端的 OAuth 令牌而非部署配置的 `api_key`。 | 进行中 | [Issue #42172](https://github.com/BerriAI/litellm/issues/42172) |
| **中** | MCP Gateway 工具列表静默限制为 100 个工具且未遵循分页。 | 进行中 | [Issue #32229](https://github.com/BerriAI/litellm/issues/32229) |
| **中** | LiteLLM Proxy (Prisma) 在低流量期间保持与 PGBouncer 的空闲连接——未释放。 | 进行中 | [Issue #41420](https://github.com/BerriAI/litellm/issues/41420) |
| **中** | `audio_speech` 部署级别的 `input_cost_per_character` 被静默忽略——返回 200 但支出为零。 | 进行中 | [Issue #44200](https://github.com/BerriAI/litellm/issues/44200) |
| **低** | WebRTC (gpt-realtime) 成本跟踪在 v1.82.3 中不工作。 | 已关闭（近期无活动） | — |
| **低** | OTLP span 事件已解码但在 ClickHouse 存储前被丢弃。 | 进行中 | [Issue #44274](https://github.com/BerriAI/litellm/issues/44274) |

## 6. 这对应用开发者意味着什么

1. **v1.105.0 安全升级即将推出**：Docker 部署很快将需要镜像验证。在拉取前更新您的部署流水线以运行 `cosign verify`。

2. **死锁修复解决了 v1.101.0+ 的延迟峰值**：如果您在负载下遇到间歇性请求停滞，升级到下一个版本（包含 PR #44530）应能恢复正常吞吐量。

3. **音频输入支持得到改进**：Token 计数器修复实现了对 `input_audio` 内容块的正确处理——下游工具（如 `trim_messages`）现可正确处理包含音频的对话。

4. **警惕 Vertex AI 中的静默数据丢失**：这个 bug 令人担忧——它在丢弃图片/文件/音频内容的同时返回 HTTP 200。在修复前避免在此后端使用多模态请求。

5. **用于生产可观测性的 ECS 日志**：使用 Elastic Stack 或 Datadog ECS 模式的团队现可通过 `LITELLM_ECS_LOGS=true` 启用结构化日志，无需自定义格式化器。

6. **合规性误报**：如果您在使用带有 GDPR/EU AI Act 合规检查的防护措施，当前版本会将防护措施配置为列表时（例如 Presidio + output_parse_pii）报告为不合规。请关注 [Issue #32206](https://github.com/BerriAI/litellm/issues/32206) 以获取解决方案。

---

*简报根据 GitHub 数据生成 — BerriAI/litellm @ 2026-10-05*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Simplified Chinese, following the detailed rules provided. Let me analyze the content and translate it while preserving the exact structure and formatting.

Key points:
1. Keep all Markdown structure (headings, tables, lists, etc.)
2. Keep URLs, issue numbers, PR numbers, code, file paths as-is
3. Use natural technical Chinese - like a Chinese developer newsletter
4. No preamble, no explanation, no markdown fences around the whole output

Let me translate section by section, maintaining the exact formatting:

## 1. Today's Highlights

The Unsloth team is advancing CUDA graph optimizations for inference offload and ROCm support. Key PRs landed today include whole-step CUDA graph recording under offload (promising ~10% speedup on FLUX.1 L4) and fused RoPE for FLUX on ROCm (8% faster on Ryzen AI Max). However, significant performance regressions are being tracked: tensor split decode is up to 2.9× slower since the b10715-mix build on multi-GPU setups, and mmproj loading from disk is causing severe throughput degradation in Studio. The Qwen3-TTS fine-tuning support PR also opened today, expanding Unsloth's multimodal capabilities.

---
翻译：
## 今日亮点

Unsloth 团队正在推进推理 offload 场景下的 CUDA 图优化和 ROCm 支持。今天合并的关键 PR 包括：offload 栈下的全步骤 CUDA 图录制（预计 FLUX.1 L4 提升约 10%），以及 FLUX 在 ROCm 上的 fused RoPE（Ryzen AI Max 上提升 8%）。不过也发现了一些重要的性能回退：tensor split 解码在多 GPU 设置下自 b10715-mix 构建版本以来慢了最多 2.9 倍，mmproj 从磁盘加载也导致了 Studio 的严重吞吐下降。Qwen3-TTS 微调支持 PR 也在今天开启，进一步扩展了 Unsloth 的多模态能力。

## 2. Releases & Breaking Changes

- **No new releases** in the last 24 hours.

---
翻译：
## 2. 发布与重大变更

过去 24 小时内无新版本发布。

## 3. New Model & Hardware Support

| Model / Hardware | Type | Notes | PR / Issue |
|------------------|------|-------|------------|
| **Qwen3-TTS** | New fine-tuning | Fast fine-tuning support via `Qwen3TTSTalkerForConditionalGeneration` + code predictor | [#12646](https://github.com/unslothai/unsloth/pull/12646) |
| **FLUX on ROCm** | New backend | Fused RoPE for AMD GPUs (Ryzen AI Max gfx1151) | [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Anthropic Studio Tools** | New integration | MCP, Chat with Files, Deep Research support for Anthropic connections | [#12497](https://github.com/unslothai/unsloth/pull/12497) |
| **Unsloth API + Diffusion Training** | New feature | MCP tools now cover diffusion training in addition to LLM training | [#12644](https://github.com/unslothai/unsloth/pull/12644) |

---
翻译：
## 3. 新模型与硬件支持

| 模型 / 硬件 | 类型 | 备注 | PR / Issue |
|-------------|------|------|-------------|
| **Qwen3-TTS** | 新微调 | 通过 `Qwen3TTSTalkerForConditionalGeneration` + 代码预测器实现快速微调支持 | [#12646](https://github.com/unslothai/unsloth/pull/12646) |
| **FLUX on ROCm** | 新后端 | AMD GPU 专用融合 RoPE（Ryzen AI Max gfx1151）| [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Anthropic Studio Tools** | 新集成 | Anthropic 连接支持 MCP、Chat with Files、Deep Research | [#12497](https://github.com/unslothai/unsloth/pull/12497) |
| **Unsloth API + Diffusion Training** | 新功能 | MCP 工具现已支持 Diffusion 训练（除 LLM 训练外）| [#12644](https://github.com/unslothai/unsloth/pull/12644) |

## 4. Performance & Optimization

| Area | Change | Impact | PR / Issue |
|------|--------|--------|-------------|
| **CUDA Graphs + Offload** | Whole-step recording under offload stack | FLUX.1 L4 (16 GB): ~10% faster; HunyuanVideo-1.5: 1 GiB lighter VRAM | [#12707](https://github.com/unslothai/unsloth/pull/12707) |
| **FLUX RoPE (ROCm)** | Fused RoPE + AdaLN modulation | FLUX.2-klein: 8% faster per image; Qwen-Image-2.1: ~8% faster; Wan 2.2 TI2V-5B: ~7% faster | [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Qwen-Image-2.1 VAE** | Seamless tiling for low-VRAM | Fixes thin horizontal/vertical lines on 12–16 GB cards (FP8/INT8/GGUF Q4_K_M) | [#12696](https://github.com/unslothai/unsloth/pull/12696) |
| **API Concurrency** | Configurable concurrency gate | `UNSLOTH_API_MAX_CONCURRENCY` / `--api-max-concurrency` with `wait`/`reject` policies | [#5482](https://github.com/unslothai/unsloth/pull/5482) |
| **LoRA Init** | MiCA support | Added `init_lora_weights="mica"` option, wired through PEFT | [#6879](https://github.com/unslothai/unsloth/pull/6879) |
| **Offload Naming** | `block_swap_layers` → `offload_layers` | Renamed for clarity; layers offloaded to CPU RAM and streamed back per step | [#12705](https://github.com/unslothai/unsloth/pull/12705) |

---
翻译：
## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|------|------|-------------|
| **CUDA Graphs + Offload** | Offload 栈下的全步骤录制 | FLUX.1 L4 (16 GB): 提升约 10%；HunyuanVideo-1.5: VRAM 降低 1 GiB | [#12707](https://github.com/unslothai/unsloth/pull/12707) |
| **FLUX RoPE (ROCm)** | 融合 RoPE + AdaLN 调制 | FLUX.2-klein: 每张图快 8%；Qwen-Image-2.1: 约快 8%；Wan 2.2 TI2V-5B: 约快 7% | [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Qwen-Image-2.1 VAE** | 低 VRAM 无缝平铺 | 修复 12–16 GB 显卡上出现的细水平/垂直线条（FP8/INT8/GGUF Q4_K_M）| [#12696](https://github.com/unslothai/unsloth/pull/12696) |
| **API 并发** | 可配置并发限制 | `UNSLOTH_API_MAX_CONCURRENCY` / `--api-max-concurrency`，支持 `wait`/`reject` 策略 | [#5482](https://github.com/unslothai/unsloth/pull/5482) |
| **LoRA 初始化** | MiCA 支持 | 新增 `init_lora_weights="mica"` 选项，集成到 PEFT | [#6879](https://github.com/unslothai/unsloth/pull/6879) |
| **Offload 命名** | `block_swap_layers` → `offload_layers` | 重命名以明确含义；层 offload 到 CPU RAM 并每步流式回传 | [#12705](https://github.com/unslothai/unsloth/pull/12705) |

## 5. Stability & Regressions

| Severity | Issue | Impact | Status |
|----------|-------|--------|--------|
| **Critical** | Tensor split decode 2.9× slower since b10715-mix-86bd2d3 | 48 t/s vs 115 t/s on dual RTX 5070 Ti (Windows/WSL2/Linux); regression from `max_cuda_graphs = 64` | [#12468](https://github.com/unslothai/unsloth/issues/12468) — OPEN |
| **High** | mmproj-F16.gguf loaded from disk — severe t/s regression | Studio regression; extra args shadow-stripped, `--mlock` rejected | [#12372](https://github.com/unslothai/unsloth/issues/12372) — OPEN |
| **High** | Vulkan GGUF OOM on Radeon 780M | `ErrorOutOfDeviceMemory` during GGUF inference on AMD iGPU | [#12695](https://github.com/unslothai/unsloth/issues/12695) — OPEN |
| **Medium** | Long-context chat lag | Regression in Desktop/Web UI for extended context windows | [#12552](https://github.com/unslothai/unsloth/issues/12552) — OPEN |
| **Medium** | ARM64 Linux build mislabeled as macOS | Download links suggest Linux ARM64 but deliver macOS binary | [#12680](https://github.com/unslothai/unsloth/issues/12680) — OPEN |
| **Medium** | Desktop clears bash history on startup | Startup behavior regressed | [#12678](https://github.com/unslothai/unsloth/issues/12678) — OPEN |
| **Low** | Context bar empty for llama.cpp/custom connections | "Context window usage" feature not wired for custom backends | [#12673](https://github.com/unslothai/unsloth/issues/12673) — OPEN |
| **Low** | Date injected into user messages | `[Current date: YYYY-MM-DD]` appended to user messages unexpectedly | [#12699](https://github.com/unslothai/unsloth/pull/12699) — OPEN |

**Fixed:**
- Hugging Face quant discovery blocking offline model loading → [#12415](https://github.com/unslothai/unsloth/issues/12415) CLOSED

---
翻译：
## 5. 稳定性与回退

| 严重程度 | 问题 | 影响 | 状态 |
|----------|------|------|------|
| **严重** | 自 b10715-mix-86bd2d3 后 tensor split 解码慢 2.9 倍 | 双 RTX 5070 Ti 下 48 t/s vs 115 t/s（Windows/WSL2/Linux）；源于 `max_cuda_graphs = 64` | [#12468](https://github.com/unslothai/unsloth/issues/12468) — OPEN |
| **高** | mmproj-F16.gguf 从磁盘加载导致 t/s 严重下降 | Studio 回退；额外参数被静默剥离，`--mlock` 被拒绝 | [#12372](https://github.com/unslothai/unsloth/issues/12372) — OPEN |
| **高** | Radeon 780M 上 Vulkan GGUF OOM | AMD 集显上 GGUF 推理时出现 `ErrorOutOfDeviceMemory` | [#12695](https://github.com/unslothai/unsloth/issues/12695) — OPEN |
| **中** | 长上下文聊天卡顿 | 桌面/Web UI 在扩展上下文窗口场景下的回退 | [#12552](https://github.com/unslothai/unsloth/issues/12552) — OPEN |
| **中** | ARM64 Linux 构建误标为 macOS | 下载链接显示 Linux ARM64 但实际提供 macOS 二进制文件 | [#12680](https://github.com/unslothai/unsloth/issues/12680) — OPEN |
| **中** | Desktop 启动时清除 bash 历史 | 启动行为回退 | [#12678](https://github.com/unslothai/unsloth/issues/12678) — OPEN |
| **低** | llama.cpp/自定义连接的上下文栏为空 | "上下文窗口使用率"功能未接入自定义后端 | [#12673](https://github.com/unslothai/unsloth/issues/12673) — OPEN |
| **低** | 日期被注入用户消息 | 意外追加 `[Current date: YYYY-MM-DD]` 到用户消息 | [#12699](https://github.com/unslothai/unsloth/pull/12699) — OPEN |

**已修复：**
- Hugging Face 量化发现阻止离线模型加载 → [#12415](https://github.com/unslothai/unsloth/issues/12415) CLOSED

## 6. What This Means for Application Developers

1. **Multi-GPU tensor-split users should hold** on upgrading beyond b10687-mix-67dfc8b until the regression in #12468 is resolved — current builds are delivering ~2.9× worse throughput (48 vs 115 t/s).

2. **Studio users on AMD ROCm** can expect ~8% faster FLUX.1 image generation with the fused RoPE PR; however, Vulkan GGUF users on Radeon 780M are hitting OOM errors and should monitor #12695.

3. **API integrators** can now enable configurable concurrency limits via `UNSLOTH_API_MAX_CONCURRENCY` — default remains single-request for safety, but high-throughput deployments can now tune overflow behavior.

4. **Diffusion training is now exposed** in the MCP tools and API docs — developers building agentic training workflows can now orchestrate both LLM and image generation fine-tuning through the same Unsloth API surface.

5. **CLI/users upgrading packages**: Advisory lockfile bumps landed in [#12704](https://github.com/unslothai/unsloth/pull/12704) — no behavioral change, but recommended for security hygiene.

---
翻译：
## 6. 这对应用开发者意味着什么

1. **多 GPU tensor-split 用户建议暂缓升级**，在 #12468 解决前应停留在 b10687-mix-67dfc8b 版本——当前构建版本的吞吐量下降约 2.9 倍（48 vs 115 t/s）。

2. **AMD ROCm 上的 Studio 用户**可以期待融合 RoPE PR 带来的 FLUX.1 图像生成约 8% 提速；但 Radeon 780M 上的 Vulkan GGUF 用户正遭遇 OOM 错误，需关注 #12695。

3. **API 集成方**现在可通过 `UNSLOTH_API_MAX_CONCURRENCY` 启用可配置的并发限制——默认保持单请求以确保安全，但高吞吐部署现在可以调整溢出行为。

4. **Diffusion 训练现已开放**于 MCP 工具和 API 文档中——构建代理化训练工作流的开发者现在可以通过同一套 Unsloth API 编排 LLM 和图像生成的微调。

5. **CLI/升级包的用户**：建议性 lockfile 更新已合并到 [#12704](https://github.com/unslothai/unsloth/pull/12704)——无行为变更，但推荐进行安全更新。

---

*Generated from GitHub data — unslothai/unsloth, 2026-10-05*

---
翻译：
*基于 GitHub 数据生成 — unslothai/unsloth，2026-10-05*

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering. I need to translate the digest into Simplified Chinese, maintaining the original structure with all tables, headings, links, and code references intact. The translation should read naturally as Chinese technical documentation rather than a literal rendering.</think>

# Unsloth 要闻 — 2026-10-05

## 1. 今日亮点

Unsloth 团队正在推进推理 offload 场景下的 CUDA 图优化和 ROCm 支持。今天合并的关键 PR 包括：offload 栈下的全步骤 CUDA 图录制（预计 FLUX.1 L4 提升约 10%），以及 FLUX 在 ROCm 上的 fused RoPE（Ryzen AI Max 上提升 8%）。不过也发现了一些重要的性能回退：tensor split 解码在多 GPU 设置下自 b10715-mix 构建版本以来慢了最多 2.9 倍，mmproj 从磁盘加载也导致了 Studio 的严重吞吐下降。Qwen3-TTS 微调支持 PR 也在今天开启，进一步扩展了 Unsloth 的多模态能力。

---

## 2. 发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 类型 | 备注 | PR / Issue |
|-------------|------|------|-------------|
| **Qwen3-TTS** | 新微调 | 通过 `Qwen3TTSTalkerForConditionalGeneration` + 代码预测器实现快速微调支持 | [#12646](https://github.com/unslothai/unsloth/pull/12646) |
| **FLUX on ROCm** | 新后端 | AMD GPU 专用融合 RoPE（Ryzen AI Max gfx1151）| [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Anthropic Studio Tools** | 新集成 | Anthropic 连接支持 MCP、Chat with Files、Deep Research | [#12497](https://github.com/unslothai/unsloth/pull/12497) |
| **Unsloth API + Diffusion Training** | 新功能 | MCP 工具现已支持 Diffusion 训练（除 LLM 训练外）| [#12644](https://github.com/unslothai/unsloth/pull/12644) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|------|------|-------------|
| **CUDA Graphs + Offload** | Offload 栈下的全步骤录制 | FLUX.1 L4 (16 GB): 提升约 10%；HunyuanVideo-1.5: VRAM 降低 1 GiB | [#12707](https://github.com/unslothai/unsloth/pull/12707) |
| **FLUX RoPE (ROCm)** | 融合 RoPE + AdaLN 调制 | FLUX.2-klein: 每张图快 8%；Qwen-Image-2.1: 约快 8%；Wan 2.2 TI2V-5B: 约快 7% | [#12701](https://github.com/unslothai/unsloth/pull/12701) |
| **Qwen-Image-2.1 VAE** | 低 VRAM 无缝平铺 | 修复 12–16 GB 显卡上出现的细水平/垂直线条（FP8/INT8/GGUF Q4_K_M）| [#12696](https://github.com/unslothai/unsloth/pull/12696) |
| **API 并发** | 可配置并发限制 | `UNSLOTH_API_MAX_CONCURRENCY` / `--api-max-concurrency`，支持 `wait`/`reject` 策略 | [#5482](https://github.com/unslothai/unsloth/pull/5482) |
| **LoRA 初始化** | MiCA 支持 | 新增 `init_lora_weights="mica"` 选项，集成到 PEFT | [#6879](https://github.com/unslothai/unsloth/pull/6879) |
| **Offload 命名** | `block_swap_layers` → `offload_layers` | 重命名以明确含义；层 offload 到 CPU RAM 并每步流式回传 | [#12705](https://github.com/unslothai/unsloth/pull/12705) |

---

## 5. 稳定性与回退

| 严重程度 | 问题 | 影响 | 状态 |
|----------|------|------|------|
| **严重** | 自 b10715-mix-86bd2d3 后 tensor split 解码慢 2.9 倍 | 双 RTX 5070 Ti 下 48 t/s vs 115 t/s（Windows/WSL2/Linux）；源于 `max_cuda_graphs = 64` | [#12468](https://github.com/unslothai/unsloth/issues/12468) — OPEN |
| **高** | mmproj-F16.gguf 从磁盘加载导致 t/s 严重下降 | Studio 回退；额外参数被静默剥离，`--mlock` 被拒绝 | [#12372](https://github.com/unslothai/unsloth/issues/12372) — OPEN |
| **高** | Radeon 780M 上 Vulkan GGUF OOM | AMD 集显上 GGUF 推理时出现 `ErrorOutOfDeviceMemory` | [#12695](https://github.com/unslothai/unsloth/issues/12695) — OPEN |
| **中** | 长上下文聊天卡顿 | 桌面/Web UI 在扩展上下文窗口场景下的回退 | [#12552](https://github.com/unslothai/unsloth/issues/12552) — OPEN |
| **中** | ARM64 Linux 构建误标为 macOS | 下载链接显示 Linux ARM64 但实际提供 macOS 二进制文件 | [#12680](https://github.com/unslothai/unsloth/issues/12680) — OPEN |
| **中** | Desktop 启动时清除 bash 历史 | 启动行为回退 | [#12678](https://github.com/unslothai/unsloth/issues/12678) — OPEN |
| **低** | llama.cpp/自定义连接的上下文栏为空 | "上下文窗口使用率"功能未接入自定义后端 | [#12673](https://github.com/unslothai/unsloth/issues/12673) — OPEN |
| **低** | 日期被注入用户消息 | 意外追加 `[Current date: YYYY-MM-DD]` 到用户消息 | [#12699](https://github.com/unslothai/unsloth/pull/12699) — OPEN |

**已修复：**
- Hugging Face 量化发现阻止离线模型加载 → [#12415](https://github.com/unslothai/unsloth/issues/12415) CLOSED

---

## 6. 这对应用开发者意味着什么

1. **多 GPU tensor-split 用户建议暂缓升级**，在 #12468 解决前应停留在 b10687-mix-67dfc8b 版本——当前构建版本的吞吐量下降约 2.9 倍（48 vs 115 t/s）。

2. **AMD ROCm 上的 Studio 用户**可以期待融合 RoPE PR 带来的 FLUX.1 图像生成约 8% 提速；但 Radeon 780M 上的 Vulkan GGUF 用户正遭遇 OOM 错误，需关注 #12695。

3. **API 集成方**现在可通过 `UNSLOTH_API_MAX_CONCURRENCY` 启用可配置的并发限制——默认保持单请求以确保安全，但高吞吐部署现在可以调整溢出行为。

4. **Diffusion 训练现已开放**于 MCP 工具和 API 文档中——构建代理化训练工作流的开发者现在可以通过同一套 Unsloth API 编排 LLM 和图像生成的微调。

5. **CLI/升级包的用户**：建议性 lockfile 更新已合并到 [#12704](https://github.com/unslothai/unsloth/pull/12704)——无行为变更，但推荐进行安全更新。

---

*基于 GitHub 数据生成 — unslothai/unsloth，2026-10-05*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*