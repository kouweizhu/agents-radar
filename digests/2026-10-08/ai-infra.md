# AI 基础设施日报 2026-10-08

> 生成时间: 2026-10-08 02:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the article to Simplified Chinese. I need to:
1. Translate all the text content
2. Keep all markdown structure, tables, headings, etc.
3. Keep technical terms, project names, version numbers, issue/PR numbers as-is
4. Use natural technical Chinese - not literal word-for-word

Let me go through and translate while maintaining the structure.</think>

# 跨项目对比：AI 推理栈 — 2026-10-08

## 1. 生态概览

今天的活动反映出**推理栈走向成熟**，各项目正在通过部署层和硬件目标进行差异化定位。vLLM 和 SGLang 在 Blackwell/Grace Blackwell GPU 性能上冲刺前沿，同时与回归 bug 搏斗；llama.cpp 在 MUSA、Hexagon 等架构上扩展量化支持；Ollama 聚焦易用性但在 MLX 回归上栽了跟头；LiteLLM 通过加密加固和多供应商聚合强化网关定位；Unsloth 用决策模型训练降低微调门槛。同时关注前缀缓存正确性（vLLM/SGLang）、加密默认设置（LiteLLM）和训练可及性（Unsloth），表明整个领域正朝着生产级服务化而非概念验证快速实现的方向成熟。

---

## 2. 活动对比

| 项目 | 开放 Issues | 近期 PRs | 发布 (24h) |
|---------|-------------|------------|----------------|
| **vLLM** | 8 个追踪中的回归 | 10+ 已合并/进行中 | 无 |
| **SGLang** | 9 个关键/中等级别 | 7+ 进行中 | 无 |
| **llama.cpp** | 10+ | 20+ | **10 个发布** (b11468–b11481) |
| **Ollama** | 7 | 5+ | **v0.40.1** |
| **LiteLLM** | 8 (今日修复 3 个) | 15+ | **v1.104.1** (stable), v1.105.0-rc.2 |
| **Unsloth** | 17 | 10+ | **v0.1.904-beta** |

**观察：**
- **llama.cpp** 发布频率领先（24h 内 10 个标签）—— 快速迭代量化和内核
- **vLLM/SGLang** 回归负担较高 —— Blackwell/AMD ROCm 带来新的问题面
- **LiteLLM** Issue 关闭率最高 —— 今日修复 3 个问题

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4 / V4.1** | ✓ (FP8 paged MQA 回归) | ✓ (mHC TP, prefill 优化) | — | — | — | — |
| **Qwen 3.8 (27B NVFP4)** | ✓ (前缀缓存 bug) | — | — | — | — | — |
| **Kimi-K3** | ✓ (Cake FlashInfer 优化) | ✓ (DCP on NPU) | — | — | — | — |
| **GLM-5.3-Flash** | — | ✓ (启动崩溃) | — | — | — | — |
| **GLM5-Next MTP** | — | — | ✓ (b11474) | — | — | — |
| **Cohere2 Vision** | — | — | ✓ (b11481) | — | — | — |
| **Clef Decision** | — | ✓ (PR #42721) | — | ✓ (Saina Helm) | — | ✓ (决策训练) |
| **Gemma 4** | — | — | ✓ (fallback) | ✓ (渲染器修复) | — | — |
| **Microsoft 365 Copilot** | — | — | — | — | ✓ (新增) | — |
| **Databricks ai_decide** | — | — | — | — | ✓ (新增) | — |
| **Apple Silicon (MLX)** | — | ✓ (重构 RFC) | — | ✓ (回归) | — | — |
| **AMD gfx95/gfx1201** | ✓ (FP8, RDNA4 内核) | ✓ (batch invariance) | ✓ (gfx95 FP8 优化) | — | — | ✓ (ROCm 问题) |

**竞赛评估：**
- **SGLang** 在前沿 GPU 模型上领先（DeepSeek V4.1、Kimi-K3 NPU、GLM-5.3-Flash）
- **llama.cpp** 在硬件覆盖上领先（MUSA、Hexagon、Cohere2、Metal IQ types）
- **LiteLLM** 在供应商覆盖上领先（Microsoft 365、Databricks、多网关）
- **Unsloth** 在训练民主化上领先（任意基座模型的决策模型训练）

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 重点方向 |
|------------------|-----------------|-----------|
| **KV Cache / 前缀缓存** | vLLM, SGLang | 修复 DFlash2/DSpark 在 Blackwell 上的损坏；hybrid-SWA radix 缓存死锁 |
| **MoE 专家管理** | vLLM, llama.cpp, Unsloth | 主机驻留专家的 GPU 缓存 (llama.cpp)；ubatch-size 2048 用于 RAM 溢出 (Unsloth) |
| **量化** | llama.cpp, vLLM | RDNA4 FP8 内核选择；Metal IQ/BF16 MMA；int4 验证 (Unsloth) |
| **批处理 / 调度** | SGLang, vLLM | ROCm batch invariance；负载下调度器停滞 (vLLM) |
| **Embedding / 推理** | Unsloth, LiteLLM | llama-server 回退 = 25 倍加速 (Unsloth)；按状态的使用量拆分 (LiteLLM) |
| **长上下文** | SGLang | 并行 prompt 编码 (200k token 异步)；diffusion FDFO 重叠 |
| **Prefill 优化** | SGLang | DeepSeek V4.1 mHC TP，fused q_norm_rope；CUDA GDN 状态列 (llama.cpp) |
| **加密 / 安全** | LiteLLM | AES-256-GCM 默认；np pickle prompts (Unsloth) |

**集中点：** **Blackwell / Grace Blackwell** 平台（GB10、GB200、RTX PRO 5000）是最热的优化目标 — vLLM 和 SGLang 都有关键正确性问题（prefix 缓存、DFLASH 池大小），表明新架构暴露了尚未完成的内核路径。

---

## 5. 层定位

| 层 | 项目 | 定位 |
|-------|----------|-------------|
| **训练 / 微调** | **Unsloth** | 终端用户微调（决策模型、LoRA、QLoRA） |
| **本地运行时** | **llama.cpp**, **Ollama** | CPU/GPU/Apple Silicon 本地推理；llama.cpp = 硬件覆盖最大化，Ollama = 零门槛体验 |
| **服务引擎** | **vLLM**, **SGLang** | 高吞吐多 GPU 服务；vLLM = PagedAttention 原创者，SGLang = 激进激进式解码 (EAGLE/MTP/DSpark) |
| **网关 / 聚合** | **LiteLLM** | 多供应商代理；加密、重试、认证、成本控制 |
| **混合** | **Ollama** (本地+云), **LiteLLM** (多供应商) | 两端都跨越运行时+网关，但方向相反 |

**战略差异：**

- **vLLM** 和 **SGLang** 在 GPU 服务性能上正面竞争，但 SGLang 在激进式解码创新上领先（EAGME/MTP/DSpark 堆叠），而 vLLM 保持 PagedAttention 血统
- **llama.cpp** 占据"运行于任何位置"层 — 从手机到 MUSA 到 Hexagon — 但不与 vLLM 竞争吞吐
- **Ollama** 瞄准开发者简洁性优先于性能；近期回归（MLX、Windows）表明维护压力
- **LiteLLM** 占据网关/代理层，是首个默认启用加密强化的项目（AES-256-GCM）
- **Unsloth** 占居独特训练 niche — 本集合中没有直接竞争对手提供带决策模型输出的终端用户微调

---

## 6. 趋势信号

### 基础设施工程师应关注的信号

1. **Blackwell 新的 Maxwell** — vLLM 和 SGLang 在 Blackwell 上都有正确性 bug，而这些在 Ampere/Hopper 上不存在。预计需要 3-6 个月内核加固才能达到与之前架构相当的稳定性。

2. **激进式解码走向主流** — SGLang 的堆叠选项（EAGLE、MTP、DSpark、ShortConv）和 vLLM 的 MTP 支持表明行业正在押注基于草稿的延迟降低。如果延迟对你的工作负载很重要，评估这些路径。

3. **加密不再是可选项** — LiteLLM 的 AES-256-GCM 默认和 Unsloth 的 pickle prompts 信号多租户服务转向安全默认。如果你在构建共享基础设施，将此列入预算。

4. **MoE 卸载走向系统化** — llama.cpp 的主机专家 GPU 缓存和 Unsloth 的 ubatch-size 调优表明 MoE 模型（DeepSeek-V3、Mixtral、Qwen3-MoE）正通过智能层溢出在内存受限 GPU 上变得可部署。

5. **决策模型成为新品类** — Unsloth 的训练支持、SGLang 的 Clef 集成和 LiteLLM 的 Databricks ai_decide 都指向结构化决策（排序、路由、分类）作为与聊天完成不同的独立工作负载。

### Agent / 应用开发者应关注什么

| 信号 | 行动 |
|--------|--------|
| **Blackwell 前缀缓存回归** | 彻底测试缓存命中/未命中路径；考虑 Qwen3.8 NVFP4 回退到 v0.29.0 |
| **Ollama MLX 回归** | 避免 0.40.x on Apple Silicon；锁定 0.35.1 |
| **LiteLLM input_audio 计费修复** | 测试带音频的 `/v1/responses` — token 计数应显著下降 |
| **Unsloth 决策模型训练** | 评估用于 agent 路由任务；30%→80% 准确率提升显著 |
| **SGLang 长 prompt 编码** | 200k+ token 上下文现在异步 — 期待 RAG 的 TTFT 改善 |
| **llama.cpp Metal IQ type 支持** | 首次在 Apple Silicon 上用 GPU 加速运行 IQ2/IQ3 |

### 总结

推理栈正在**按层特化**的同时**在优化向量上收敛**（MoE、前缀缓存、量化）。vLLM 和 SGLang 争夺 GPU 服务主导权；llama.cpp 捍卫运行于任何位置的王座；LiteLLM 壁垒网关；Unsloth 占据训练。下个季度将由 Blackwell 稳定性收敛和决策模型生产化来定义。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. Let me carefully translate this following the rules:

1. Only output the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, etc.
3. Keep URLs, numbers, dates, code references, PR numbers as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through and translate this carefully while maintaining all the formatting and technical precision.

The content includes:
- 1. Today's Highlights
- 2. Releases & Breaking Changes
- 3. New Model & Hardware Support (with a table)
- 4. Performance & Optimization (with subsections and tables)
- 5. Stability & Regressions (with subsections and tables)
- 6. What This Means for Application Developers (a list)

I need to keep:
- All headings
- All tables (including the formatting dashes)
- All lists (numbered and bullet points)
- All bold text
- All URLs and links
- All PR/Issue numbers like #12345
- All version numbers like v0.29.0
- All config names like VLLM_BATCH_INVARIABLE
- All model names
- All emoji

Let me translate now:</think>

# vLLM 每日简报 — 2026-10-08

## 1. 今日焦点

今日开发活动主要围绕 NVIDIA Blackwell/Grace Blackwell 和 AMD ROCm 平台的性能回归问题展开，同时包括多项针对调度器稳定性和模型特定正确性问题的 bug 修复。值得注意的是，一个影响 Qwen3.8-27B NVFP4 在 Blackwell 硬件上运行的严重前缀缓存 bug 已经出现，同时多个 PR 修复了自 v0.29.0 以来引入的性能回归问题。

---

## 2. 发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Kimi-K3 Cake FlashInfer 集成** | 通过 `VLLM_CAKE_ROUTES` 标志启用 Kimi-K3 KDA 和 MLA 解码路径的 FlashInfer Cake 内核 | [#60470](https://github.com/vllm-project/vllm/pull/60470) |
| **Gemma4 序列分类** | 新模型支持请求：Gemma4ForSequenceClassification（非词汇表大小的输出头） | [#43726](https://github.com/vllm-project/vllm/issues/43726) |
| **AMD RDNA4 (gfx1201) 内核修复** | 修复错误的 FP8 内核选择导致 Radeon AI PRO R9700 解码开销增加 5-24% 的问题 | [#57838](https://github.com/vllm-project/vllm/issues/57838) |

---

## 4. 性能与优化

### 已合并 / 审核中

| 优化 | 影响 | PR |
|--------------|--------|-----|
| **MoE 输入复制消除** | 在 Humming 内核中跳过冗余的 w13 GEMM 输入复制 | [#59340](https://github.com/vllm-project/vllm/pull/59340) |
| **ROCm 批次不变性** | 通过 `VLLM_BATCH_INVARIANT=1` 在 ROCm 上启用批次不变推理 | [#52231](https://github.com/vllm-project/vllm/pull/52231) |
| **DeepSeek-V4 DBO** | 为 DeepSeek-V4 DP 部署在 ROCm 上启用预填双批次重叠 | [#57773](https://github.com/vllm-project/vllm/pull/57773) |
| **Qwen4Exp 工作区切片** | 在 ROCm 上按实际 token 数量切片 PLE 工作区 | [#58325](https://github.com/vllm-project/vllm/pull/58325) |
| **MTP 精简草稿词表** | 通过 MTP 草稿器减少草稿词表，实现 25-29% 解码加速 | [#58578](https://github.com/vllm-project/vllm/issues/58578) |

### 活跃的回归问题

| 回归 | 详情 | Issue |
|------------|---------|-------|
| **Nemotron-3.5-Lightning NVFP4** | 自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上解码慢约 16% | [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **Qwen3.6-35B-A3B-FP8** | 在 H100 上从 0.26.0 到 0.29.0 解码吞吐量下降约 3.3 倍 | [#57680](https://github.com/vllm-project/vllm/issues/57680) |
| **SM12x 上的 MoE** | 自 DeepGEMM 对齐变更 (#56876) 以来解码慢约 15% | [#58624](https://github.com/vllm-project/vllm/issues/58624) |
| **ROCm RDNA4 FP8** | 由于内核选择错误导致解码开销增加 5-24% | [#57838](https://github.com/vllm-project/vllm/issues/57838) |

---

## 5. 稳定性与回归

### 严重 Bug

| Bug | 严重程度 | 状态 | 修复 PR |
|-----|----------|--------|--------|
| **Qwen3.8-27B NVFP4 (Blackwell) 前缀缓存损坏** — DFlash2/DSpark + 前缀缓存在压缩张量的缓存命中后产生损坏输出；v0.29.0 和 FP8/MTP 上正常工作 | **高** | 待解决 | — |
| **调度器在负载下停滞** — 引擎报告健康但停止接受请求，同时延迟队列增长 | **高** | 待解决 | — |
| **混合 GDN + MTP 中的 CUDA IMA (exit 0)** — 在 RTX 3090 上使用异步调度时出现静默非法内存访问 | **高** | 待解决 | — |
| **Qwen2.5-Reranker /score 端点挂起** — 进程在使用特定数据模式时挂起 | **中** | 已关闭 | — |

### 修复中的 Bugfix PR

| 修复 | 范围 | PR |
|-----|-------|-----|
| **CPU cgroup 资源预留** | 为 CPU 后端在 NUMA 节点上遵守 cgroup 内存限制 | [#60520](https://github.com/vllm-project/vllm/pull/60520) |
| **混合 GDN 前缀缓存 + MTP** | 在 MTP 投机解码下恢复前缀缓存命中 | [#52244](https://github.com/vllm-project/vllm/pull/52244) |
| **ShortConv 草稿器状态** | 在 MRV2 的投机轮次之间恢复 ShortConv 历史 | [#59600](https://github.com/vllm-project/vllm/pull/59600) |
| **RecoverSSM 边界索引** | 修复 Mamba 块边界处的对齐状态索引 | [#59962](https://github.com/vllm-project/vllm/pull/59962) |
| **3D 模型上的共享 MoE LoRA** | 修复共享 MoE LoRA 的 FusedMoEWithLoRA 选择 | [#60098](https://github.com/vllm-project/vllm/pull/60098) |
| **ROCm 睡眠模式 cuMem** | 映射主机睡眠模式内存以修复 FP8 检查点崩溃 | [#60367](https://github.com/vllm-project/vllm/pull/60367) |
| **批量上传 2xx 处理** | 接受批量输出上传的成功 2xx 响应 | [#60507](https://github.com/vllm-project/vllm/pull/60507) |

### 弃用

| 变更 | 详情 | PR |
|--------|---------|-----|
| **移除 torch.compile SP 和 AsyncTP** | 移除 SequenceParallelismPass 和 AsyncTPPass；MRV2 不再支持，减少对 torch.compile 的依赖 | [#60517](https://github.com/vllm-project/vllm/pull/60517) |

---

## 6. 这对应用开发者意味着什么

1. **Blackwell 前缀缓存需谨慎**：如果在 Blackwell (RTX PRO 5000, GB200, GB10) 上使用启用了前缀缓存的 Qwen3.8-27B NVFP4，请注意缓存命中时可能出现输出损坏。建议在 DFlash2/DSpark 修复上线前继续使用 v0.29.0。

2. **GB10 性能回归**：如果在 DGX Spark (GB10) 上运行 NVFP4 模型，自 v0.29.0 以来的解码慢速问题仍未修复。如果延迟是关键指标，可考虑回退到 v0.28.x。

3. **调度器健康检查盲区**：调度器可能报告健康但延迟队列仍在增长。建议外部监控队列深度指标，而非仅依赖引擎健康状态。

4. **ROCm 批次不变性**：AMD ROCm 用户现在可以通过 `VLLM_BATCH_INVARIANT=1` 获得更可预测的批次行为。

5. **工具调用流式输出**：现在正确关闭未终止的参数，改善了使用流式响应配合 `max_tokens` 或 `stop` 条件的智能体的鲁棒性。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese. Let me analyze the content and translate it while preserving the structure and technical accuracy.

Key things to remember:
- Keep all technical terms, issue numbers, PR numbers as-is
- Keep URLs, code references, API names in original form
- Keep the table format
- Use natural technical Chinese
- Output ONLY the translation, no preamble or explanation

Let me translate section by section:

## Today's Highlights
- Apple Silicon serving redesign proposal
- DeepSeek V4.1 optimizations
- Hybrid-SWA + radix cache livelock bug
- GLM-5.3-Flash NVFP4 issues
- CI tracking issue with 41 comments

## Releases & Breaking Changes
No new releases in last 24 hours - this is straightforward

## New Model & Hardware Support
- Apple Silicon Serving Redesign - RFC proposal
- Kimi-K3 DCP on NPU
- Clef Decision Models
- DeepSeek V4.1

## Performance & Optimization
- DeepSeek V4.1 Prefill Optimizations
- Long Chat Prompt Encoding Parallelization
- AMD gfx95 FP8 Optimization
- GLM DSA NextN Draft Architecture
- Diffusion LLM FDFO Overlap Scheduling

## Stability & Regressions
Multiple bugs with different severity levels

## What This Means for Application Developers
- Production considerations
- Version recommendations
- Memory considerations

Let me translate now:</think>

# SGLang 速报 — 2026-10-08

## 今日焦点

SGLang 项目持续快速推进，当前重点聚焦于 DeepSeek V4.1 优化和 Apple Silicon Serving 重构方案。多个影响生产部署的正确性 bug 仍在积极修复中——包括 Hybrid-SWA 基数缓存活锁问题以及 GLM-5.3-Flash NVFP4 问题。CI 基础设施跟踪 issue 已累计 41 条评论，反映出对测试可靠性持续投入。

## 版本发布与重大变更

过去 24 小时内无新版本发布。

## 新模型与硬件支持

- **Apple Silicon Serving 重构** — RFC 提案 (#32321) 规划了基于 Torch 的 SRT 路径，导出完整的 MLX 模型区域，通过 Torch/MLX 互操作性提升 Apple Silicon 支持。
- **Kimi-K3 DCP on NPU** — PR #40825 为 Ascend NPU 上的 Kimi-K3 引入了解码上下文并行，支持 DSPARK 推测解码。
- **Clef 决策模型** — PR #42721 新增对 Cloudflare Clef 和 Clef-Flash 决策模型的支持，基于 Qwen3.5/Qwen3.8 检查点，包含联合 schema 头。
- **DeepSeek V4.1** — 路线图 issue (#42170) 追踪优化工作，包括 mHC TP 优化和 prefill 优化。

## 性能优化

- **DeepSeek V4.1 Prefill 优化** — mHC 代码清理及将 `q_rope_store` 折叠到 `fused_q_norm_rope` 正在推进中 (#41589, #42245)。
- **长对话提示编码并行化** — PR #41259 将 tokenization 移出关键路径，用于 agentic 场景；200k token 提示的编码从 240ms 降至后台异步处理。
- **AMD gfx95 FP8 优化** — PR #41030 通过使用行主序原生 scale 消除剩余的 FP8 scale 重排拷贝。
- **GLM DSA NextN Draft 架构** — PR #41258 修复共享专家融合，让 GLM-5 draft 声明自身架构而非继承 DeepSeekV3。
- **Diffusion LLM FDFO 重叠调度** — PR #40756 新增重叠调度支持，消除去噪步骤间的 GPU 空闲时间。

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Hybrid-SWA + 基数缓存 admission 活锁 (#41579) — SWA 前缀锁固定已完成请求的未修剪最后 chunk，导致调度器停止 admission | 待处理 |
| **高** | DFLASH/DSPARK draft KV pool 使用 `tp_size` 而非 `attn_tp_size` (#38202) — 导致 Kimi-K3 在 DP attention 下 OOM | 待处理 |
| **高** | GLM-5.3-Flash 使用 flashinfer_trtllm 后端启动时崩溃 (#36711) — IndexError in logical_to_all_physical | 待处理 |
| **中** | GLM-5.3-Flash-NVFP4 在 SM100 上 logprobs 相比 v0.5.20 漂移 (#41609) — 疑似 9 月 18-21 日 KDA 融合门回归 | 待处理 |
| **中** | DeepSeek-V4 在 SM120 上：FP8 paged MQA logits 标志禁用 C4 indexer chunk planner (#42146) — 128k 内存下 +3.3–3.8 GiB | 待处理 |
| **中** | EAGLE/MTP 冗余 embed_tokens/lm_head 拷贝导致启动 OOM (#42510) | 待处理 |
| **中** | NIXL 后端在 `SGLANG_DISAGG_STAGING_BUFFER=1` 时崩溃 (#42684) | 待处理 |
| **中** | Kimi-K3  cookbook 图片在第一步 TP16 decode 时卡死 (#39568) — 4 节点 × 4 GB200 | 待处理 |
| **低** | `/update_weights_from_disk` API 参数被忽略 (#42544) — is_async、keep_pause、token_step 无效 | 待处理 |
| **低** | FlashInfer 自动调优缓存在 MoE EP>1 下每次启动都被丢弃 (#40320) — 每次启动都重新调优 | 待处理 |

**CI 基础设施**: Issue #42752 追踪 flaky 测试和 CI 失败，累计 41 条评论；#17050 报告显示 scheduled CI 有 1 个 broken 测试和 4 个 flaky 测试。

## 对应用开发者的意义

- **使用 Hybrid-SWA 模型的生产部署** 应监控调度器活锁问题，尤其是在使用基数缓存且 SWA 池空间紧张时。
- **SM100/SM120 上的 GLM-5.3-Flash NVFP4 用户** 可能遇到 logprobs 漂移；建议锁定 v0.5.20 版本或等待回归修复。
- **Kimi-K3 多节点部署**（GB200 NVL72 上的 TP16）应使用最新 nightly 版本以解决 decode 卡死问题。
- **Blackwell 上的 DeepSeek-V4 用户** 应注意使用 FP8 paged MQA logits 时会产生 +3.3–3.8 GiB 内存开销。
- 正在推进的 DeepSeek V4.1 优化工作（prefill、mHC TP）将在后续版本中带来显著吞吐量提升。
- 长提示编码正在变得非阻塞，这将改善 100k+ token 上下文下 agentic 工作负载的首 token 时间（TTFT）。

---

**注**：SGLang 是开源项目，以上信息基于公开的 GitHub issue 和 PR 活动整理。如需更多信息，请访问 [sgl-project.github.io](https://sgl-project.github.io)。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>I need to translate this GitHub digest into Simplified Chinese, maintaining the exact Markdown structure, tables, and formatting while using natural technical Chinese register.

Let me translate section by section:

1. Title: "llama.cpp Digest — 2026-10-08" stays as-is (date stays in English)

2. Today's Highlights - translate naturally
3. Releases & Breaking Changes - translate
4. New Model & Hardware Support - translate the table content
5. Performance & Optimization - translate subsections and tables
6. Stability & Regressions - translate table
7. What This Means for Application Developers - translate
8. Footer - translate URLs

Key terms to keep in English:
- llama.cpp (project name)
- PR numbers (#29887, etc.)
- Commit hashes (b11480)
- GPU terms like MoE, MMA, CUDA, Metal, Vulkan, etc.
- API terms like mtmd, MTP, FIM, VAE
- Model names like Qwen3.8, Gemma4, Cohere2
- Technical terms like GDN, GQA, BF16, MXFP4
- Code/file references
- URL domains

Let me translate carefully while preserving the structure:</think>

# llama.cpp  Digest — 2026-10-08

## 1. 今日焦点

llama.cpp 项目继续保持高速迭代，本周期在 MoE（大模型混合专家）模型的 GPU 内存优化和量化支持扩展方面取得了重要进展。最大的亮点是新增了**针对驻留在主机内存中的 MoE 专家的 GPU 缓存**（#29887），显著提升了大型专家集合的处理效率。Apple Metal 也获得了重要的内核改进，将 few-row MMA 支持扩展到了更多量化类型，同时新增的安全修复限制了音频长度以防止内存分配攻击。

## 2. 版本更新与破坏性变更

- **b11468**：更新 `cpp-httplib` 到 0.60.0 — 可能影响服务器部署中的 HTTP 客户端行为
- **b11471**：为词表添加 Plamo FIM tokens — 影响 Plamo 模型的 tokenization
- 本周期未报告破坏性 API 变更

## 3. 新模型与硬件支持

| 功能 | PR/Commit | 详情 |
|------|-----------|------|
| Cohere2 Vision | #30062 (b11481) | 通过 mtmd 新增视觉模型支持 |
| GLM5-Next MTP | #29928 (b11474) | 新增多 token 预测头 |
| MUSA 加速器 | #30080 (b11469) | Tile lightning indexer 内核 |
| Metal BF16/IQ 类型 | #30065 (b11476) | 将 MMA 矩阵乘法扩展到 BF16、Q1_0、Q2_0、MXFP4、Q2_K、Q3_K、TQ2_0、IQ 类型 |
| LiquidAI d1-omni-600M | #30114 | 支持音频/图像/文本输入的决策模型 |

## 4. 性能优化

### 已合并

- **MoE GPU 专家缓存**（#29887, b11480）：为驻留在主机内存中的 MoE 专家提供缓存，减少大型专家集合的内存传输
- **Metal MUL_MAT+ADD 融合修复**（#30100, b11475）：修复残差本身是 MUL_MAT 时的融合问题
- **采样贪心选择**（#29797, b11472）：对 temperature-zero 链使用贪心选择，提升确定性输出
- **Hexagon Q6_K 加速**（#30121）：权重反量化优化
- **MUSA Lightning Indexer**（#30080）：面向 MUSA 架构的新型 tile-based 内核
- **SYCL q4_K/q5_K 优化**（#29696）：宽存储和 256 线程组

### 进行中

- **CUDA GDN 状态列**（#30087）：为每个 warp 分配两个 GDN 状态列，针对指令发射受限的内核（RTX 4090 显示 39% 的发射率）
- **CUDA MFMA Lightning Indexer**（#29050）：ROCm CDNA2 (gfx90a) 的矩阵核心路径
- **多 GPU MoE 缓存**（#30112）：将专家缓存扩展到多个 GPU（2×RTX 4090 基准测试显示显著提升）
- **OpenCL Flash Attention**（#26430）：将解码 FA 扩展到 head size 64-512，GQA 2-16

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | Qwen3.8-Flash-Next MTP 启动断言（#29811） | Open | — |
| **高** | OpenVINO 崩溃：STATUS_ILLEGAL_INSTRUCTION（#28726） | Open | — |
| **高** | Blackwell GGML-CUDA SOFT_MAX 崩溃（#25060） | Open | — |
| **中** | Vulkan：低显存下 VAE 图像损坏（#24943） | Closed | — |
| **中** | mtmd：音频文件 DoS 通过恶意头部（#30130） | Open | *刚刚提交* |
| **中** | Vulkan qwen4exp 图像多模态损坏（#29093） | Open | — |
| **低** | Tool-call "call" 名称崩溃（#29967） | Closed | — |

## 6. 这对应用开发者的意义

**对于推理基础设施工程师：**
- MoE 专家缓存（#29887）显著降低了 Qwen3.8 等密集 MoE 模型的内存压力 — 预计在显存受限的 GPU 配置下吞吐量会明显提升
- Metal 用户受益于扩展的量化类型支持 — BF16 和 IQ 类型现在使用优化的 MMA 内核
- 音频长度限制（#30130）是一个安全修复：更新服务器部署以防止通过畸形音频文件发起 DoS 攻击

**对于 Agent/应用开发者：**
- Temperature-zero 链的贪心采样（#29797）现在产生确定性输出 — 有助于可重现的工具调用序列
- `llama serve -hf` 的新路由模式（#26116）支持自动模型下载和缓存 — 简化了多模型部署
- Grammar 支持现在包含多 token 匹配（#30117） — 支持更具表现力的输出约束

**关键链接：**
- 发布产物：https://github.com/ggml-org/llama.cpp/releases
- 官方网站：https://llama.app
- 问题追踪：https://github.com/ggml-org/llama.cpp/issues

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified Chinese). I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly
- Keep URLs, issue/PR references, project names, etc. in their original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# Ollama 速报 — 2026-10-08

## 今日焦点

Ollama v0.40.1 已发布，包含大模型文件的 Windows 修复（clef head 读取超过 2GiB）和云使用量 API 的代理支持。但 0.40.x 系列正在累积回归报告——尤其是 MLX（Apple Silicon）相关的线程限制和量化不匹配问题，以及 Windows 符号链接处理变化。0.35.x 用户如非必要升级，建议暂缓。

---

## 发布与破坏性变更

| 版本 | 变更 | 链接 |
|---------|---------|------|
| **v0.40.1** | Server：代理云使用量和余额 API。llama：修复 Windows 上 clef head 读取超过 2GiB 的问题。CLI：移除注册步骤的引导流程。 | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.1) |

**迁移注意：**
- Windows 符号链接处理在 0.40.0 中有变化 — 现有清单可能需要懒修复（[PR #18852](https://github.com/ollama/ollama/pull/18852)，已合并）。遇到"不受信任的挂载点"错误的用户应升级到 v0.40.1。
- 企业防火墙后的 HTTP 代理用户：模型拉取在 0.35+ 失败，显示"不允许重定向目标"——暂未修复（[#18831](https://github.com/ollama/ollama/issues/18831)）。

---

## 新模型与硬件支持

- **Saina Helm** 决策模型编码已添加 — PR [#18857](https://github.com/ollama/ollama/pull/18857)（开放中）
- **LLM-jp-4** 和谐输出解析器现在处理带尾部空格的特殊令牌 — 问题 [#18728](https://github.com/ollama/ollama/issues/18728)（开放中）
- **Gemma 4** GGUF 渲染器：修复大小阈值检测（11.9B vs 12B）— 问题 [#18824](https://github.com/ollama/ollama/issues/18824)（开放中）
- **MLX 混合精度导入**：逐层量化覆盖当前被忽略 — 问题 [#18789](https://github.com/ollama/ollama/issues/18789)（开放中）
- **FreeBSD** 构建修复：`Statfs` 空间计算的数学问题 — PR [#18848](https://github.com/ollama/ollama/pull/18848)

---

## 性能与优化

| 领域 | 状态 | 详情 |
|------|--------|---------|
| **Embedding 加载** | 进行中 | 复用 llama-server HTTP 连接以减少开销 — PR [#18397](https://github.com/ollama/ollama/pull/18397) |
| **MLX 量化** | 回归中 | 量化决策模型在 M5 Pro 上预填充比 bf16 更慢 — 问题 [#18833](https://github.com/ollama/ollama/issues/18833)（开放中） |
| **Claude Code 上下文** | 进行中 | 设置 `CLAUDE_CODE_MAX_CONTEXT_TOKENS` 为模型实际上下文长度以减少压缩 — PR [#18855](https://github.com/ollama/ollama/pull/18855) |
| **Token 重复检测** | 进行中 | 仅向其输入包含内容的事件以避免误报 — PR [#17360](https://github.com/ollama/ollama/pull/17360) |
| **MLX CUDA 路由** | 已合并 | CUDA 计算能力 10.0+ 上的快速量化矩阵乘法 — PR [#16894](https://github.com/ollama/ollama/pull/16894) |

---

## 稳定性与回归

**严重（正在影响生产）：**

| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| MLX 运行时在 0.40.x 上对 `qwen3.6:35b-mlx` 恐慌 — 来自 0.35.0 的回归 | 严重 | [#18856](https://github.com/ollama/ollama/issues/18856)（开放中） |
| MLX 线程限制错误："每线程组最大线程数为 896 但请求 1024" 在 M4 上 | 严重 | [#18846](https://github.com/ollama/ollama/issues/18846)（开放中，回退到 0.35.1 可解决） |
| Windows 上 `/api/chat` 对 `qwen3.8:27b` 返回 HTTP 500 — "JSON 输入意外结束" | 高 | [#18840](https://github.com/ollama/ollama/issues/18840)，修复在 PR [#18849](https://github.com/ollama/ollama/pull/18849) |
| HTTP 代理后模型拉取失败 — 自 0.35 起 "不允许重定向目标" | 高 | [#18831](https://github.com/ollama/ollama/issues/18831)（开放中） |

**中等：**

- `clef-flash` 在 `/v1/systemone` 上失败，显示"非有限 logit"（CPU/GPU）— [#18769](https://github.com/ollama/ollama/issues/18769)，[#18836](https://github.com/ollama/ollama/issues/18836)（已关闭 — 可能与上述相关）
- Gemma4 渲染器丢弃工具参数中名为 `description`、`type`、`properties`、`required`、`nullable` 的字段 — [#18468](https://github.com/ollama/ollama/issues/18468)（开放中）
- M4 Mac（127GB RAM，1 字/分钟）上 `mistral-medium-3.5:128b` 无法使用 — [#18770](https://github.com/ollama/ollama/issues/18770)（开放中）
- macOS 上 GGUF 迁移后出现重复模型条目 — [#18830](https://github.com/ollama/ollama/issues/18830)（开放中）

---

## 这对应用开发者的意义

1. **如果你在 Apple Silicon 上使用 MLX**：目前避免使用 0.40.x。多项问题导致恐慌和线程限制崩溃——尤其是大型模型。回退到 0.35.1 或等待 0.40.1+ 补丁。

2. **如果你使用 Windows**：0.40.1 更新修复了符号链接清单问题。如果在 0.40.0 上模型失败，请升级。

3. **如果你在企业代理后**：0.35+ 中模型拉取目前损坏。请关注 [#18831](https://github.com/ollama/ollama/issues/18831) 等待修复。

4. **如果你用工具调用构建 Agent**：关注 [#18468](https://github.com/ollama/ollama/issues/18468) — gemma4 模型可能会静默丢弃工具定义中的某些参数名。

5. **如果你大规模使用 `/api/embed`**：PR [#18397](https://github.com/ollama/ollama/pull/18397) 中的连接复用改进应能降低持续 embedding 工作负载的延迟——将在未来版本中发布。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this GitHub digest about LiteLLM into Simplified Chinese. I need to:
1. Translate ONLY the content, not the rules
2. Keep all Markdown structure exactly
3. Keep URLs, issue numbers, project names, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate:

Title: "LiteLLM Digest — 2026-10-08" → "LiteLLM 要闻 — 2026-10-08"

Section 1: Highlights
- "LiteLLM advances its infrastructure hardening" → "LiteLLM 推进基础设施加固"
- "AES-256-GCM encryption as the new default" → "AES-256-GCM 加密作为新默认值"
- "PyNaCl optional" → "PyNaCl 变为可选"
- "Rust migration initiative gains momentum" → "Rust 迁移计划加速推进"
- "consolidated test coverage" → "整合测试覆盖率"
- "streaming response handling" → "流式响应处理"
- "input_audio block mapping" → "input_audio 块映射"
- "Responses API" → keep as-is
- "proper finish_reason tracking" → "正确的 finish_reason 追踪"
- "Anthropic tool calls" → "Anthropic 工具调用"
- "Microsoft 365 Copilot" → keep
- "OAuth token exchange support" → "OAuth 令牌交换支持"

Section 2: Releases
- "Dev" → "开发版"
- "RC" → "候选版"
- "Stable" → "稳定版"
- "Development build" → "开发构建"
- "Release candidate" → "发布候选"
- "Latest stable" → "最新稳定版"
- "Prior stable" → "上一稳定版"
- "All Docker images now signed with cosign" → "所有 Docker 镜像现均已使用 cosign 签名"


- "verify with" → "验证方式"
- "Breaking" → "重大变更"

Section 3: New Model & Hardware Support
- "New provider" → "新提供商"
- "OAuth token exchange" → "OAuth 令牌交换"
- "auto-router decider" → "自动路由决策器"
- "per-user OAuth" → "用户级 OAuth"

Section 4: Performance & Optimization
- "WebSocket idle timeout" → "WebSocket 空闲超时"
- "session limit" → "会话限制"
- "Context" remains unchanged throughout

, following standard technical translation conventions
- "retry-after" and "retry-after-ms" headers are kept in original form with quotes, as is standard for HTTP header terminology
- "Input token billing" translates to "输入令牌计费"
- The usage breakdown showing failed gateway requests segmented by HTTP status code (4xx vs 5xx) uses the notation `/gateway/daily/activity` as-is
- "SCIM performance" addresses system for cross-domain identity management, translated as "SCIM 性能"
- "group deletion" refers to removing user groups, translated as "组删除"

For the security and defect tracking section, I'm mapping severity levels: "High" becomes "高", "Medium" maps to "中", and "Low" corresponds to "低". The bug about Enterprise feature errors when updating virtual keys without proper feature usage shows 39 comments and remains open. Similarly, the OpenAI GPT-5 thinking output issue has 51 comments and is also open. Streaming response chunks with missing text or is_finished fields present a medium-severity problem, while tool translation issues require careful handling.

The development roadmap addresses several key improvements: resolving health check attribution problems, fixing team ID verification in JWT authentication, and implementing budget tracking based on monthly token usage. There's also active work on the Rust migration for the gateway. From an application developer's standpoint, the security hardening around AES-256-GCM encryption requires verification of existing setups. The Responses API improvements through input_audio block mapping will help correct token billing accuracy. Better observability comes from failed request breakdowns by HTTP status code, and the monthly token-based budget feature addresses a frequently requested capability.

The Rust gateway promises sub-millisecond overhead once ready, with early beta signup as an option. Provider retry-after headers are now respected, which prevents unnecessary upstream hammering during rate limit scenarios.</think>

# LiteLLM 要闻 — 2026-10-08

## 1. 今日要点

LiteLLM 推进基础设施加固，AES-256-GCM 加密作为新默认值，PyNaCl 变为可选。Rust 迁移计划加速推进，整合测试覆盖率持续完善。流式响应处理多项修复上线：Responses API 的 input_audio 块映射修正、Anthropic 工具调用的 finish_reason 追踪保持。Microsoft 365 Copilot 作为新提供商加入，支持 OAuth 令牌交换。

---

## 2. 发布与重大变更

| 版本 | 类型 | 备注 |
|------|------|------|
| [v1.106.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.1) | 开发版 | 开发构建 |
| [v1.105.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.2) | 候选版 | 发布候选 |
| [v1.104.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.1) | 稳定版 | 最新稳定版 |
| [v1.103.4](https://github.com/BerriAI/litellm/releases/tag/v1.103.4) | 稳定版 | 上一稳定版 |

**所有 Docker 镜像现均已使用 cosign 签名** — 自 commit `0112e53` 起使用相同密钥。验证方式：
```bash
cosign verify BerriAI/litellm:<tag>
```

**重大变更：** 静态加密现默认使用 **AES-256-GCM + HKDF v3**（[#42934](https://github.com/BerriAI/litellm/pull/42934)）。未安装 PyNaCl 的旧部署将收到明确的错误提示而非静默明文返回。请检查 `litellm_settings.yaml` 加密配置。

---

## 3. 新模型与硬件支持

| 新增项 | 详情 |
|--------|------|
| **Microsoft 365 Copilot** | 新提供商，支持 OAuth 令牌交换调用 Graph Copilot Chat API（[#45158](https://github.com/BerriAI/litellm/pull/45158)） |
| **Databricks ai_decide** | 作为 `/v1/decisions` 提供商和自动路由决策器接入（[#45200](https://github.com/BerriAI/litellm/pull/45200)） |
| **GitHub Copilot 用户级 OAuth** | 支持 Copilot 凭证的每用户 GitHub OAuth 连接（[#45241](https://github.com/BerriAI/litellm/pull/45241)） |

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **WebSocket 空闲超时** | 移除 `/v1/responses` 和 `/responses` WebSocket 首帧 30s 超时限制；新增可配置会话限制（[#44433](https://github.com/BerriAI/litellm/pull/44433)） | #44433 |
| **上下文缓存计费** | Vertex AI 显式上下文缓存现按令牌小时计费（[#45019](https://github.com/BerriAI/litellm/pull/45019)） | #45019 |
| **重试行为** | 完成重试现遵循提供商 `retry-after` 和 `retry-after-ms` 响应头，上限 60s（[#45247](https://github.com/BerriAI/litellm/pull/45247)，[#45234](https://github.com/BerriAI/litellm/pull/45234)） | #45247, #45234 |
| **输入令牌计费** | 修复 `input_audio` 块被计为文本的问题（64 字符问题被计为 113K 令牌）— 现已正确映射（[#45224](https://github.com/BerriAI/litellm/pull/45224)） | #45224 |
| **用量细分** | 失败网关请求现通过 `/gateway/daily/activity` 按 HTTP 状态码分段（4xx vs 5xx）（[#45244](https://github.com/BerriAI/litellm/pull/45244)） | #45244 |
| **SCIM 性能** | 组删除改为单次数据库批量删除，替代逐成员遍历（[#45249](https://github.com/BerriAI/litellm/pull/45249)） | #45249 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | **#15230** — 更新虚拟密钥时触发企业功能错误，但实际未使用企业功能（39 条评论） | 待处理 |
| **高** | **#13419** — OpenAI GPT-5 thinking 输出在 OpenWebUI 中不显示（51 条评论） | 待处理 |
| **中** | **#43487** — 通用流式块部分接受后因缺少 `text`/`is_finished` 字段抛出 KeyError | 待处理 |
| **中** | **#44979** — 翻译 Anthropic → OpenAI 工具消息时丢失 `tool_result.is_error` | 待处理 |
| **中** | **#44154** — 背景健康检查结果错误归因到所有共享相同 `litellm_params.model` 的部署 | 已修复（#44154） |
| **中** | **#44182** — JWT 认证未验证 Team ID | 已修复（#44182） |
| **低** | **#44555** — 功能请求：基于团队月度令牌用量设置预算（非仅基于花费） | 待处理 |

---

## 6. 应用开发者需关注的事项

1. **安全加固进行中** — 若依赖 LiteLLM 的加密功能，请验证您的部署可处理 AES-256-GCM 默认值。迁移路径现已明确，不再静默回退。

2. **Responses API 对齐度提升** — `input_audio` 块映射修正（[#45224](https://github.com/BerriAI/litellm/pull/45224)）解决了令牌计费严重偏高的问题。使用 `/v1/responses` 处理音频输入时请仔细测试。

3. **可观测性增强** — 失败请求按 HTTP 状态码细分（[#45244](https://github.com/BerriAI/litellm/pull/45244)）有助于区分客户端错误（4xx）与上游/提供商故障（5xx）。

4. **多租户预算** — 月度令牌预算功能（[#44555](https://github.com/BerriAI/litellm/issues/44555)）响应了按用量配额管控的常见需求，脱离模型定价依赖。

5. **Rust 网关在即** — Rust 迁移（[#31263](https://github.com/BerriAI/litellm/issues/31263)）目标实现亚毫秒级开销。早期测试报名现已开放；请关注后续测试覆盖率和性能基准。

6. **Webhook/重试** — 提供商 `retry-after` 响应头现已遵循。触发速率限制时，LiteLLM 将适当退避而非持续向上游发送请求。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth Digest into Simplified Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep technical terms, code snippets, URLs, issue numbers (#12345), version tags (v0.1.904-beta), file paths, and project names in their original form
3. Preserve all Markdown formatting exactly (tables, bold, lists, horizontal rules, etc.)
4. Use natural technical Chinese register

Let me go through each section:

## 1. Today's Highlights
- Unsloth released **v0.1.904-beta**, introducing the ability to train custom decision models that convert any text or vision LLM into a Jev-style decision model, with reported accuracy improvements from 30% to 80%. The update also adds native ComfyUI model support, diffusion improvements, and an enhanced browser in Desktop. Meanwhile, the Studio team landed multiple PRs addressing Qwen3.6 thinking controls, MoE expert memory handling, and embedding model performance via llama-server.

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate carefully:</think>

# Unsloth 速报 — 2026-10-08

## 1. 今日要闻

Unsloth 发布 **v0.1.904-beta**，新增自定义 Decision Model（决策模型）训练能力，可将任意文本或视觉 LLM 转换为 Jev 风格决策模型，官方报告准确率从 30% 提升至 80%。本次更新还带来原生 ComfyUI 模型支持、Diffusion 优化，以及 Desktop 版浏览器增强。与此同时，Studio 团队合并了多个 PR：Qwen3.6 思考模式控制、MoE 专家内存处理，以及通过 llama-server 优化 Embedding 模型性能。

- Release: https://github.com/unslothai/unsloth/releases/tag/v0.1.904-beta

## 2. 版本更新与重大变更

| 版本 | 变更类型 | 描述 |
|---------|-------------|-------------|
| **v0.1.904-beta** | 新功能 | Decision Model 训练——支持将任意文本/视觉 LLM 转换为 Jev 风格决策模型（30%→80% 准确率）。包含原生 ComfyUI 模型支持、Diffusion 改进，以及 Desktop 版浏览器优化。 |
| | 安全修复 | Auto 模式下使用 `np.load(..., allow_pickle=True)` 加载可能存在风险的 pickle 文件前现在会弹出确认提示。 |

本发布周期**未报告重大 API 变更**。

## 3. 新模型与硬件支持

- **Decision Model**：任意文本或视觉 LLM 现可直接在 Unsloth 中微调为 Decision Model，内置测试、导出和服务支持。
- **AMD ROCm**：`unsloth[amd]` 包依然错误地将 ROCm 版本的 torch 替换为 PyPI 上的 CUDA 版本，尽管 torch 上限已提升至 `<2.15.0`——问题仍在处理中 (#12947)。
- **Apple MPS**：使用 VAE Tiling 进行图像生成时，MPS 上会构建 float64 权重导致失败 (#12935)。
- **Qwen 模型**：Qwen3.6 现支持 Studio 中的 Thinking/Preserve thinking 开关；Qwen3.5 的 safetensors 和 MLX 工具调用参数现可正确保留。

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **MoE 推理** | 当 MoE 专家溢出至 RAM 时使用 `--ubatch-size 2048` (#12950) | 提升部分卸载 MoE 模型的吞吐量 |
| **MoE 缓存** | 使用 `--moe-cache-mib auto` 为溢出专家设置 GPU 缓存大小 (#12951) | 自动优化 VRAM 分配 |
| **Embedding 模型** | 当 sentence-transformers 失败时回退至 llama-server 处理 EmbeddingGemma (#13005, #13006) | 约 129 chunks/s vs CPU 基线约 5 chunks/s — **约 25 倍提速** |
| **Studio 下拉菜单** | 使用静态暗色下拉菜单发光效果替代每次打开菜单时测量 (#13004) | 消除暗色模式菜单打开时的二次卡顿 |
| **视觉训练** | 支持处理部分图片缺失的数据集 (#12991) | 可在类似 ScienceQA（57/100 行纯文本）的数据集上训练 |

## 5. 稳定性与回退问题

### 严重（尚无修复 PR）
- **Qwen Image 2.1 Q4_K_M** 在 M5 Max 48GB 上运行失败——内存限制 (#11792)
- **Bonsai 模型** 完全无法加载 (#11259) — ternary/1bit PrismML 模型
- **CPU 空转** 在 v0.1.903-beta 空闲状态下达到 95% 占用 (#12942) — `OPENBLAS_NUM_THREADS=1` 无效

### 高优先级（修复进行中）
- **MXC 探测** 在 MS Store Python 上报 `ReadGrantError` (#12941) — Windows App Container 隔离问题
- **int4 加载器** 未验证 `group_size` 与实际 `weight_scale` 形状是否匹配 (#12955) — 可能导致静默量化损坏
- **AMD pip install** 将 ROCm torch 替换为 CUDA torch (#12947) — 影响 ROCm 用户

### 中优先级（UI/UX）
- Windows 10 21h1 长上下文聊天卡顿 (#12552)
- 最新更新后模型无法加载 (#12842)
- TTS 朗读 Markdown 格式（如 "asterisk asterisk"）(#12547)

## 6. 这对应用开发者意味着什么

1. **Decision Model 现在触手可及**：如果你的 Agent 需要做结构化决策（排序、路由、分类），现在可以直接在 Unsloth 中训练自定义 Decision Model，而非仅靠提示词调用通用 LLM——这可能是显著的延迟/成本优势。

2. **NVIDIA/AMD 上的 Embedding 性能**：Embedding 模型回退至 llama-server 后带来约 25 倍吞吐量提升。使用 `unsloth/embeddinggemma-2` 做 RAG 时，在独立 GPU 上索引速度将大幅加快。

3. **安全加固**：numpy pickle 加载现在会弹出确认提示——对多用户 Studio 部署是受欢迎的改进，但请确保你的工作流已将自动加载 pickle 数据集的场景纳入考虑。

4. **MacOS 体验日趋完善**：图像/视频的右键下载功能现已在 macOS 可用，视频附件可在浏览器面板中通过内置播放器打开——桌面体验更紧密。

5. **关注 MoE 卸载**：如果你运行 Mixtral、DeepSeek-V2 或类似 MoE 模型且仅部分 VRAM 卸载，新增的 `--ubatch-size 2048` 和 `--moe-cache-mib auto` 标志应能提升推理吞吐量——无需代码改动，Studio 自动处理。

6. **CPU 密集型工作流建议避开 v0.1.903-beta**：Windows Ryzen 9 上的空闲 CPU 空转问题 (#12942) 表明，如果 CPU 资源受限，建议等待 v0.1.904-beta。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*