# AI 基础设施日报 2026-10-26

> 生成时间: 2026-10-26 00:38 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report into Simplified Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue references as-is
4. Use natural technical Chinese register

Let me translate this carefully while maintaining all the structure and technical accuracy.</think>

# 跨项目对比报告 — 2026-10-26

## 1. 生态概览

AI 推理生态正在收敛为三个明显不同的层级：高吞吐量服务引擎（vLLM、SGLang）面向数据中心 GPU 集群；本地运行时（llama.cpp、Ollama、Unsloth）针对边缘和消费级硬件优化；网关层（LiteLLM）抽象多供应商差异。今日活动显示 Blackwell/Hopper 内核优化正在加速，投机解码可靠性持续完善，各项目都在加强语法验证和限流机制。权重复缓存守护进程和多 GPU 张量切分的出现，标志着生产级多节点部署正在成为主流。

---

## 2. 活动对比

| 项目 | 跟踪中的 Issues | 24 小时内更新的 PRs | 24 小时内的 Releases | 主要关注点 |
|---------|----------------------|-------------------|----------------|------------|
| **vLLM** | 10 | 20+ | 0 | Blackwell MoE 内核，投机解码 |
| **SGLang** | 16 | 30+ | 0 | 权重复缓存守护进程，扩散模型，多 GPU |
| **llama.cpp** | 6 | 11 次提交 | 0 | SYCL/Xe2 内核，量化类型 |
| **Ollama** | 16 | 30 | 0 | MLX/Mac 优化，限流 |
| **LiteLLM** | 11 | ~160 | 4 | 提供商路由，DST 稳定性 |
| **Unsloth** | 28 | 221 | 0 | 多 GPU 张量切分，Flows 编辑器 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **Blackwell (sm_120/sm_121)** | ✅ 活跃中 | — | — | — | — |
| **DeepSeek V4.1** | — | ✅ CP、ROCm | — | — | ✅ GGUF 修复 |
| **Kimi-K3 / Kimi-Linear** | ✅ | ✅ DSpark | — | — | — |
| **Qwen4Exp** | — | — | ✅ | — | — |
| **FLUX.3 Klein (GGUF)** | — | — | — | — | ✅ |
| **Apple Silicon (Mac)** | — | ✅ 路线图 | — | — | ✅ |
| **Nanbeige 4.3-33B** | — | — | — | — | ✅ 已请求 |
| **MoE CPU Offload** | — | — | — | ✅ 已请求 | — |
| **JQ_K 量化** | — | — | ✅ 新类型 | — | — |

**领先者**：**SGLang** 和 **Unsloth** 在模型多样性上领先，覆盖扩散模型、视觉和多模态工作流。**vLLM** 在 Blackwell/Graceful 多 GPU 支持上领先。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------------|------|--------|-----------|--------|---------|
| **MoE 内核** | ✅ +48% Blackwell | ✅ DeepSeek V4.1 | — | — | — |
| **KV Cache** | ✅ V2 DFlash、XGrammar | — | ✅ RDNA4 解码 | — | — |
| **量化** | MXFP8、NVFP4 | — | ✅ JQ_K 类型 | — | — |
| **批处理** | Batch-invariant MoE | — | — | — | — |
| **权重复缓存** | — | ✅ <1s 加载 | — | — | ✅ 智能卸载 |
| **多 GPU / CP** | ✅ | ✅ | — | — | ✅ 张量切分 |
| **Metal/MLX** | — | — | — | ✅ Chunked prefill | — |
| **SYCL/Xe2** | — | — | ✅ DPAS 内核 | — | — |

**热点区域**：多 GPU 张量切分（Unsloth）、权重复缓存守护进程（SGLang）、Blackwell MoE（vLLM）和 Xe2 DPAS（llama.cpp）代表了今日落地的最高影响力优化。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────────┐
│  训练 / 微调                                                         │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Unsloth  │  多 GPU 训练、LoRA、DPO、GRPO                   │  │
│  └─────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│  网关 / 编排                                                         │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  LiteLLM  │  多提供商代理、限流、预算控制                   │  │
│  └─────────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────────┤
│  高吞吐量服务（数据中心）                                           │
│  ┌───────────────────────────┐  ┌─────────────────────────────┐   │
│  │  vLLM                     │  │  SGLang                    │   │
│  │  • Triton 内核            │  │  • 权重复缓存守护进程      │   │
│  │  • 投机解码              │  │  • 扩散模型                │   │
│  │  • Blackwell/Hopper      │  │  • 多 GPU PD 协作          │   │
│  └───────────────────────────┘  └─────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────┤
│  本地运行时（边缘 / 消费级）                                        │
│  ┌───────────────────┐  ┌────────────────┐  ┌─────────────────┐   │
│  │  llama.cpp       │  │  Ollama        │  │  Unsloth        │   │
│  │  • CPU/GPU/Metal │  │  • MLX/Mac     │  │  • Mac/Windows  │   │
│  │  • SYCL/RDMA    │  │  • 简洁 API    │  │  • Studio UI    │   │
│  │  • 广泛硬件支持 │  │  • 轻量级      │  │  • 微调        │   │
│  └───────────────────┘  └────────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 目标环境 |
|-------|----------|-------------------|
| **服务引擎** | vLLM、SGLang | 数据中心、H100/H200 集群 |
| **本地运行时** | llama.cpp、Ollama | 边缘、消费级 GPU、Mac |
| **网关** | LiteLLM | 多云、多提供商抽象 |
| **训练/微调** | Unsloth | 微调 + 本地推理 |

---

## 6. 趋势信号

### 基础设施工程师应关注

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **Blackwell 优化竞赛** | vLLM +48% MoE 吞吐量，SM120/XPU 分发修复 | H100/H200/B100 部署将获得显著收益；测试升级路径 |
| **权重复缓存守护进程** | SGLang #33522: 306s → <1s 加载 | 大模型冷启动不再是瓶颈；开启无服务器模式 |
| **多 GPU 张量切分** | Unsloth #14446 稠密模型切分 | 双 GPU 解码利用率从 ~50% 跃升至 ~90%；成本/性能比改变 |
| **投机解码不稳定** | vLLM XGrammar、SGLang FlashInfer、Ollama Metal | 生产环境投机解码仍然脆弱；部署前需压力测试 |
| **限流粒度细化** | LiteLLM #14398（日限）、Ollama #19288（带宽） | 多租户部署获得更细粒度的控制 |
| **DST/时区复杂性** | LiteLLM #48286 回退期间 OOM | 时间感知系统需要 DST 感知测试；日历边界 bug 浮现 |
| **本地/边缘势头增强** | llama.cpp Xe2 DPAS、Ollama MLX、Unsloth 多 GPU | 消费级 GPU 推理正在变得可行；边缘部署候选范围扩大 |
| **安全加固** | LiteLLM JSON DoS、llama.cpp 语法递归限制 | 网关和解析器表面正在硬化；期待更严格的验证 |

### 智能体/应用开发者应关注

- **提供商抽象正在整合** — LiteLLM 正在成为事实上的代理层；自建路由的理由越来越少。
- **本地优先推理正在加速** — llama.cpp SYCL + Ollama MLX + Unsloth Studio = 可行的离线工作流。
- **量化多样性扩展** — JQ_K（llama.cpp）、MXFP4（vLLM）、IQ*_K 变体 = 延迟/质量权衡的更多选择。
- **视觉/多模态仍有待完善** — ViT CUDA 图、GDN 前缀缓存、图像 token 处理有多处问题；稳定性落后于纯文本。
- **推理 API 对等性改善** — Ollama `/v1/completions` 现已匹配 OpenAI；LiteLLM 路由原生支持更多提供商。

---

*本报告基于 2026-10-26 当日 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 的活动生成。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. I need to:
1. Keep all Markdown structure exactly as-is (headings, tables, lists, bold, etc.)
2. Keep all URLs, issue/PR references (# numbers), version numbers, technical terms, code, etc. as-is
3. Translate the natural English prose into natural technical Chinese
4. Not add any preamble or explanation

Let me go through and translate this while preserving all the technical elements and structure.</think>

# vLLM 每日简报 — 2026-10-26

## 今日要点

vLLM 项目在 Blackwell（SM120）优化方面持续活跃，一项重要的 PR 带来了 fused MoE 内核上 **+48% 解码吞吐量** 的显著提升。围绕多模态 ViT CUDA 图支持的公开问题仍是焦点（44 条评论，RFC 追踪），同时还有一个影响 Qwen3.8-Flash-Next 的回归问题：当提示词超过约 2048 个 token 时会对模型不可见。KV 事件正确性追踪已启动，以确保跨架构兼容性。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | 参考 |
|------|-------------|-----------|
| **DGX Spark / Acer GN100 (sm_121) on aarch64** | ARM 架构上暂无 Blackwell 支持 —— 正在积极开发中 | [#36821](https://github.com/vllm-project/vllm/issues/36821) |
| **SM120 (Blackwell) 自适应验证** | 设备查询透镜仅在 SM90/SM100 上启用；在 SM120 上被拒绝 | [#63343](https://github.com/vllm-project/vllm/issues/63343) |
| **XPU Kimi-Linear** | Intel XPU 的模型分发修复（回退到 CUDA 实现） | [#63531](https://github.com/vllm-project/vllm/pull/63531) |

---

## 性能与优化

### 已合并 / 正在推进

- **[+48% 解码吞吐量]** 在 Blackwell 上调优了 batch-invariant fused MoE 配置。使用 `VLLM_BATCH_INVARIANT=1` 时，Triton fused MoE 内核现在使用优化配置，而非回退到单一欠佳配置（`BLOCK 64x64x32, GROUP_SIZE_M 8, SPLIT_K 1`）。 | [#63627](https://github.com/vllm-project/vllm/pull/63627)

- **MoE float32 共享内存崩溃修复** — 执行 float32 激活值/权重时限制了默认 Triton fused-MoE 瓦片大小（`BLOCK_SIZE_M/N/K <= 64`）和流水线阶段（`num_stages = 2`），防止 Ada / SM89 上的 `OutOfResources` 崩溃。 | [#61931](https://github.com/vllm-project/vllm/pull/61931)

- **ROCm fused QK-norm+RoPE+gate 内核** — 在 AMD GPU（MI355X）上为 Qwen3-Next/Qwen3.5 启用了 fused Triton 内核。 | [#51406](https://github.com/vllm-project/vllm/pull/51406)

- **GLM-5.3-Flash MonoKernel MTP 验证** — 在 MI355X 上将 MTP 验证步骤运行于 monokernel 解码中。 | [#63555](https://github.com/vllm-project/vllm/pull/63555)

- **MiniMax-M3.1 MXFP8 优化** — 在 MI355X 上针对 16 < M <= 256 和 RMSNorm 中的输入量化优化了更快的 MXFP8 线性层。 | [#62509](https://github.com/vllm-project/vllm/pull/62509)

### 已知问题

- **Triton top-k 内核异常值收集遗漏** — `_topk_topp_kernel` 的 top-k 分支仅从前 8192 个 logit 中选取高斯拟合结果作为收集支点，导致 MiMo-V2.6 回退到全词表搜索的概率为 6-10%。 | [#61998](https://github.com/vllm-project/vllm/issues/61998)

- **8×H200 DeepSeek-V4.1-Flash 并发** — 8 个并发时出现严重延迟退化（首 token 延迟达数分钟）。 | [#58233](https://github.com/vllm-project/vllm/issues/58233)

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **Qwen3.8-Flash-Next 提示词截断** — 超过 ~2048 个 token 的提示词内容（indexer_budget）对模型不可见；模型仿佛在 2K 处结束 | 开启 | — |
| **高** | **Qwen3.8-27B PP=3 非法内存访问** — sm_86 上带前缀缓存时出现 Xid 31；v0.28.0 以来的回归 | 开启 | — |
| **高** | **XGrammar 间歇性请求终止** — V2 DFlash 概率性drafting + 块拒绝导致崩溃 | 开启 | — |
| **中** | **Qwen3.8-Flash-Next prefill 饥饿** — 长 prefill 工作负载在 2 节点 DGX Spark TP2 上周期性饿死活跃 decode 3-7 分钟 | 开启 | — |
| **中** | **ROCm AWQ 2.5× 慢于 BF16** — AutoAWQ 检查点从未在 gfx1151 上使用 RDNA W4A16 内核 | 开启 | — |
| **中** | **NVFP4 垃圾输出** — torch.compile 下非 32 对齐的 per-rank K（TP8 SM120）读取过时内存的块缩放 | 开启 | — |
| **低** | **工具调用解析器回归** — 0.22/0.23 版本间 `--tool-call-parser qwen3_coder` 行为不同 | 已关闭 | — |

---

## 这对应用开发者意味着什么

1. **Blackwell 部署正在改善** — +48% MoE 吞吐量提升对于在 H100/H200/B100 上部署意义重大。请确保使用最新 nightly 并使用 `VLLM_BATCH_INVARIANT=1` 进行测试。

2. **长上下文 Qwen3 用户：请避开 v0.32 nightly** — 如果您使用超过 2048 个 token 的提示词服务 Qwen3.8-Flash-Next，存在导致提示词截断的回归问题。请考虑固定在 v0.31 或更早版本直至修复。

3. **Blackwell 上的投机解码需要测试** — SM120 上的 MTP/DFlash/EAGLE 存在多个问题（KV 事件、块拒绝、GDN 前缀缓存）。在生产使用前请充分测试。

4. **KV 事件消费者：请关注 #63149** — 已开启追踪问题以确保 Dynamo、llm-d 和 vLLM Router 之间的 KV 事件正确性。如果您依赖缓存状态检查，请加入讨论。

5. **ROCm 用户：AWQ 性能仍然不佳** — 在 AMD RDNA3（gfx1151）上，AWQ 解码比 BF16 慢 2.5×。请关注 [#63455](https://github.com/vllm-project/vllm/issues/63455) 以获取修复。

---

*基于 GitHub 数据生成 — vllm-project/vllm | 2026-10-26*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, project names, etc. verbatim
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this digest while following all the rules:

- "Digest" → 简报
- "Today's Highlights" → 今日要闻
- "Releases & Breaking Changes" → 版本发布与重大变更
- "New Model & Hardware Support" → 新模型与硬件支持
- "Performance & Optimization" → 性能与优化
- "Stability & Regressions" → 稳定性与回归问题
- "What This Means for Application Developers" → 对应用开发者的意义

I need to keep all the tables in the exact same format with the same columns, just translate the content.

Let me go through each section:</think>

# SGLang 简报 — 2026-10-26

## 今日要闻

SGLang 本周在多个方向上保持活跃开发：DeepSeek V4.1 和 Kimi-K3 的核心优化取得重要进展，JSON schema 拒绝服务漏洞的安全修复已完成，Apple Silicon 支持和 Diffusion 模型服务的路线图持续推进。权重缓存守护进程路线图（第 33522 号）完成第一阶段，Qwen3-235B FP8 的权重加载时间从约 306-327 秒降至 **1 秒以内**。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **DeepSeek-v4.1 Prefill CP (AMD)** | 在 ROCm 上为 DeepSeek V4.1 提供上下文并行支持 | [#43465](https://github.com/sgl-project/sglang/pull/43465) |
| **Apple Silicon 路线图** | Mac GPU 支持初步路线图（2026 年 Q2） | [#19137](https://github.com/sgl-project/sglang/issues/19137) |
| **GLM-5.2 MXFP4** | 支持 ModelOpt MoE 检查点，包含 DSA/NSA 和 Mega-MoE | [#36447](https://github.com/sgl-project/sglang/issues/36447) |
| **Kimi-K3 DSpark** | SM107 定点 megakernel 验证状态修复 | [#46479](https://github.com/sgl-project/sglang/pull/46479) |
| **新 Diffusion 模型** | 支持 omni-dreams 并持续扩展 | [#27214](https://github.com/sgl-project/sglang/issues/27214) |

---

## 性能与优化

| 领域 | 变更 | 参考 |
|------|--------|--------|
| **权重缓存守护进程** | 每卡守护进程持有后量化权重；Qwen3-235B FP8 权重加载从 **306-327s → <1s** | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Beam Search** | 延迟 token 物化至 top-k beams，位于 `BeamGroup.finalize()` 中 | [#46480](https://github.com/sgl-project/sglang/pull/46480) |
| **Diffusion Video Frames** | 量化至 uint8 后再进行 host 拷贝 | [#46439](https://github.com/sgl-project/sglang/pull/46439) |
| **DSpark FA 后端** | 使用 draft forward width 而非通用 target-verify 辅助函数 | [#46477](https://github.com/sgl-project/sglang/pull/46477), [#46478](https://github.com/sgl-project/sglang/pull/46478) |
| **DSpark Draft Width** | 修复 FA3/FA4 中 `sample_from_anchor=False` 时的错误 query width | [#46476](https://github.com/sgl-project/sglang/issues/46476) |
| **DeepSeek-v4.1 Kernel** | 修复 ROCm 10 上 V4.1 k-norm-rope store 问题（HIP 64 位掩码） | [#46236](https://github.com/sgl-project/sglang/pull/46236) |
| **Kimi-K3 SM107** | 融合路由的低延迟 FP4 decode 路径 | [#46473](https://github.com/sgl-project/sglang/pull/46473) |
| **GLM-5.3-Flash Hopper** | SM90 性能优化跟踪 | [#45373](https://github.com/sgl-project/sglang/issues/45373) |
| **KVShard + GLM DSA/MTP** | PD 和 CPU HiCache 集成 | [#42973](https://github.com/sgl-project/sglang/pull/42973) |
| **Native Tensor Output** | Prefill scoring 优化 | [#42248](https://github.com/sgl-project/sglang/pull/42248) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | Speculative decoding 在首个非贪婪请求时崩溃 — FlashInfer verify-sampling op JIT 在打包 CCCL vs cu13 上失败 | [#43412](https://github.com/sgl-project/sglang/issues/43412) |
| **高** | Kimi-K3 DCP a2a 2 节点 GB300 上解码乱码；NCCL_GRAPH_REGISTER=0 变通方案 | [#45367](https://github.com/sgl-project/sglang/issues/45367) |
| **中** | FlashInfer prefill 非分片不变 — radix-cache 命中或分块 prefill 会导致 Qwen3.5 hybrid GDN 贪婪输出翻转 | [#46259](https://github.com/sgl-project/sglang/issues/46259) |
| **中** | Kimi-K3 SM90: `flashinfer_mxfp4` 计算 GPT-OSS SwiGLU 而非 SiTU | [#45755](https://github.com/sgl-project/sglang/issues/45755) |
| **低** | sgl_kernel AOT: sm_75 (Turing) 上 rmsnorm NoKernelImage — per-op cubin 间隙 | [#38515](https://github.com/sgl-project/sglang/issues/38515) |
| **安全** | **已修复**: JSON schema DFA 状态爆炸导致 CPU 线程挂起 / DoS | [#40373](https://github.com/sgl-project/sglang/pull/40373) |

**未激活/已关闭**: 多个 bug 标记为未激活，包括流式会话断开处理（第 36475 号）、HiCache 存储 key 缺失 KV dtype（第 33268 号）、EAGLE3 无 draft model 路径崩溃（第 36528 号）。

---

## 对应用开发者的意义

1. **安全**: 如使用 JSON schema 验证，请立即更新 — 拒绝服务漏洞修复至关重要。

2. **性能提升**: 权重缓存守护进程显著降低大型模型的冷启动时间；频繁需要恢复引擎的应用受益最大。

3. **Speculative Decoding**: 在 FlashInfer JIT 问题解决前，避免将非贪婪采样与 speculative decoding 配合使用；贪婪解码正常工作。

4. **Beam Search**: Token 物化优化提升了 beam search 工作负载的内存效率。

5. **新硬件**: AMD 用户获得 DeepSeek V4.1 上下文并行支持；Apple Silicon 支持计划于 2026 年 Q2 实现。

6. **Diffusion 模型**: 持续扩展 omni-dreams 支持；视频帧处理现已更加高效。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Chinese (Simplified), following the specific rules provided. Let me translate this carefully while:

1. Only outputting the translation - no preamble, no explanation, no markdown fences
2. Preserving the Markdown structure exactly
3. Keeping URLs, numbers, issue/PR references as-is
4. Using natural technical Chinese for developers

Let me translate section by section:

**Section 1: Today's Highlights**
- The project continues pushing on stability and safety hardening with grammar recursion limits now mandatory across all recursive functions, plus a fix for a CPU/MEM exhaustion bug in dry sequence breaking.
- GPU optimization work remains active with CUDA FFN/GLU fusion for MMQ and new SYCL kernels for Intel GPUs.
- A critical quantization bug affecting 4D tensor processing has been patched.

Let me translate this naturally:
该项目继续推进稳定性和安全性强化工作，语法递归限制现已在所有递归函数中强制执行，同时修复了dry sequence breaking中导致CPU/MEM耗尽的bug。GPU优化工作持续进行，CUDA为MMQ实现了FFN/GLU融合，Intel GPU获得了新的SYCL内核。影响4D张量处理的关键量化bug已修复。

**Section 2: Releases & Breaking Changes**
- No new releases tagged in the last 24h. → 过去24小时无新标签发布。

The table:
| Commit | Change | Notes |
|--------|--------|-------|
→ 翻译列标题:
| 提交 | 变更 | 备注 |

Section 3: New Model & Hardware Support
- #30715: Added `JQ2_K`... → 添加了`JQ2_K`等新量化类型
- #31028: Qwen: merge tensors on convert → Qwen: 在转换时合并张量

Section 4: Performance & Optimization
表格翻译
 
I'll focus on the next key points in the document:

1. Significant performance improvements across GPU architectures, particularly in CUDA, HIP/RDNA4, SYCL, and Metal backends.

2. Backend performance table reveals multiple optimization techniques targeting different hardware platforms, with CUDA showing a notable FFN gate/up matmuls and GLU fusion in MMQ approach.

The performance optimizations demonstrate cross-platform optimization strategies, leveraging specific hardware capabilities to enhance computational efficiency.</think>

# llama.cpp 摘要 — 2026-10-26

## 1. 今日要闻

该项目继续推进稳定性和安全性强化工作，语法递归限制现已在所有递归函数中强制执行，同时修复了dry sequence breaking中导致CPU/MEM耗尽的bug。GPU优化工作持续进行，CUDA为MMQ实现了FFN/GLU融合，Intel GPU获得了新的SYCL内核。影响4D张量处理的关键量化bug已修复。

## 2. 发布与重大变更

| 提交 | 变更 | 备注 |
|------|------|------|
| [#31153](https://github.com/ggml-org/llama.cpp/pull/31153) | 语法：递归深度限制现为必需 | 所有递归函数必须声明硬性限制；`code-review`技能强制执行此要求 |
| [#31035](https://github.com/ggml-org/llama.cpp/issues/31035) | llama: 修复dry sequence breaker导致的CPU/MEM耗尽问题 | 修复了某些解码场景中的内存泄漏 |
| [#30820](https://github.com/ggml-org/llama.cpp/pull/30820) | llama-quant: 修复4D张量量化 | `ggml_nrows()`对4D张量的行数计算错误，导致部分量化失败 |

过去24小时无新标签发布。

## 3. 新模型与硬件支持

| PR | 描述 |
|----|------|
| [#30715](https://github.com/ggml-org/llama.cpp/pull/30715) | 新增`JQ2_K`、`JQ3_K`、`JQ4_K`、`JQ5_K`、`JQ6_K`量化类型，用于CPU——基于ikawrakow的IQ*_K设计 |
| [#31028](https://github.com/ggml-org/llama.cpp/pull/31028) | Qwen: 在转换时合并张量——支持Qwen4Exp模型 |

## 4. 性能优化

| PR | 后端 | 改进 |
|----|------|------|
| [#29948](https://github.com/ggml-org/llama.cpp/pull/29948) | CUDA | 在MMQ中融合FFN gate/up矩阵乘法与GLU，采用交错gate/up行用于提示处理 |
| [#30803](https://github.com/ggml-org/llama.cpp/pull/30803) | HIP/RDNA4 | 更高效的KV缓存解码——将量化缓存读取从每KV头8次减少到1次 |
| [#31110](https://github.com/ggml-org/llama.cpp/pull/31110) | SYCL | 针对短TOP_K行的work-group argmax |
| [#30976](https://github.com/ggml-org/llama.cpp/pull/30976) | SYCL | Q4_0、K-quants、IQ3、MXFP4的重排布局向量化去量化存储 |
| [#30728](https://github.com/ggml-org/llama.cpp/pull/30728) | Metal | GQA vec解码优化——将KV缓存读取从G次减少到每解码步1次 |
| [#31125](https://github.com/ggml-org/llama.cpp/pull/31125) | SYCL/Xe2 | B580、B570、B70、Lunar Lake上量化KV缓存(q4_0, q8_0)的新DPAS flash attention内核 |

## 5. 稳定性与回归

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|------|------|
| [#30950](https://github.com/ggml-org/llama.cpp/issues/30950) | **高** | 开放 | CUDA Q4_1/Q5_1 mat-vec内核溢出fp16——GPT-oss模型上产生NaN logits |
| [#30039](https://github.com/ggml-org/llama.cpp/issues/30039) | **中** | 开放 | RDNA1 (gfx1010)上提示处理性能下降约45%（b10455到b11429之间） |
| [#30436](https://github.com/ggml-org/llama.cpp/issues/30436) | **中** | 开放 | CUDA在Windows上使用flash attention时出现非法内存访问（Gemma 4 12B QAT Q4_0）——关闭`-fa`可工作 |
| [#18988](https://github.com/ggml-org/llama.cpp/issues/18988) | **低** | 开放 | GBNF语法中嵌套重复导致栈溢出——影响`llama_grammar_advance_stack` |

**已修复：**
- [#28448](https://github.com/ggml-org/llama.cpp/issues/28448): ggml_gallocr重复使用过时分配计划（稀疏MoE损坏）

## 6. 对应用开发者的意义

1. **基于语法的应用**：如果你使用语法进行结构化输出，预期会有更严格的验证——深度限制现已强制执行，超出限制的递归语法可能会被拒绝。

2. **量化模型用户**：4D张量量化bug (#30820)可能导致静默的精度损失。如果你处理多维张量，使用最新提交重新构建任何量化模型。

3. **SYCL用户**：Intel GPU的重大内核改进已落地（Xe2 DPAS flash attention、向量化去量化）。如果你使用B580/B570/B70，预期会有显著的吞吐量提升。

4. **CUDA多GPU用户**：影响3+ GPU配置的计算缓冲区分配问题 (#27953) 仍处于开放状态——多GPU推理场景请关注更新。

5. **内存受限的部署**：dry sequence breaker修复 (#31035) 应能减少长时间运行推理服务器的内存使用。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama Digest into Simplified Chinese, following the specific rules provided. Let me translate this carefully while preserving the structure and technical accuracy.

Let me go through each section and translate it naturally into Chinese technical register.</think>

# Ollama 摘要 — 2026-10-26

## 1. 今日要点

Ollama 迎来重要的用户体验改进，新增了 `--limit-rate` 参数用于控制模型下载速度，同时多个 PR 修复了 macOS Metal GPU 稳定性问题和多 GPU 内存管理问题。gemma4 解析器已修复工具调用解析的边界情况，长达已久的功能请求 #2006（下载限速）已在 PR #19288 中实现。

---

## 2. 版本更新与重大变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|------|------|
| **MoE CPU Offload** | 功能请求：支持将 MoE 层权重卸载至 CPU 以降低显存占用，参考 llama.cpp#15077 | [#11772](https://github.com/ollama/ollama/issues/11772) |
| **MLX 版本升级** | 通过 MLX 新增 window_size 功能提升 gemma/flint/laguna 模型的提示速度 | [#19291](https://github.com/ollama/ollama/pull/19291) |

---

## 4. 性能与优化

| 项目 | 描述 | 链接 |
|------|------|------|
| **下载限速** | 新增 `--limit-rate` 和 `--limit-streams` 参数，用于 `ollama pull` 限速 | [#19288](https://github.com/ollama/ollama/pull/19288) |
| **MLX 预填充分块** | 缩小长提示的预填充分块大小，避免 Metal GPU 看门狗超时 | [#19280](https://github.com/ollama/ollama/pull/19280) |
| **MLX 停止序列支持** | mlxrunner 现支持停止序列，与 llama.cpp 行为一致 | [#19267](https://github.com/ollama/ollama/pull/19267) |
| **内存驱逐修复** | 服务器不再驱逐 CPU-only runner 以满足 GPU 内存预测 | [#19284](https://github.com/ollama/ollama/pull/19284) |
| **Compact 重试逻辑** | 服务器在收到 HTTP 413 后自动重试 `/compact`，清理旧镜像和历史记录 | [#19266](https://github.com/ollama/ollama/pull/19266) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| **高** | **macOS Metal 崩溃** — 长 XML 分析请求时 MLX runner 报 "Command buffer execution failed" | Open | [#19278](https://github.com/ollama/ollama/issues/19278) |
| **高** | **ROCm Radeon 890M** — 0.40.6/0.40.7 输出乱码 + GPU 内存错误；0.33.3 正常 | Open | [#19290](https://github.com/ollama/ollama/issues/19290) |
| **高** | **多 GPU 内存超时** — 6-GPU 主机上空闲内存刷新超时导致错误驱逐 | Open | [#19279](https://github.com/ollama/ollama/issues/19279) |
| **中** | **gemma4 工具调用丢失** — 工具调用中未闭合列表导致静默失败 | PR Open | [#19274](https://github.com/ollama/ollama/pull/19274) |
| **中** | **OpenAI 兼容 tool_calls 错误** — 助手 tool_calls 在 content 为空数组时错误附加到上一条消息 | Open | [#19151](https://github.com/ollama/ollama/issues/19151) |
| **中** | **Windows PowerShell 窗口闪烁** — Ollama 桌面启动时短暂显示窗口 | Open | [#18415](https://github.com/ollama/ollama/issues/18415) |
| **低** | **全新安装失败** — 彻底卸载后重装仍无法运行 | Open | [#19276](https://github.com/ollama/ollama/issues/19276) |

---

## 6. 这对应用开发者意味着什么

1. **下载控制已实现** — 现在可以使用 `ollama pull model --limit-rate 1024`（kbps）限制模型下载带宽，适用于共享网络或 CI 环境。

2. **Metal 稳定性改进即将推出** — MLX runner 现通过动态缩小预填充分块处理长提示，降低处理大文档时 macOS 上 GPU 看门狗超时的风险。

3. **多 GPU 内存管理改进** — CPU only 模型不再被驱逐以腾出 GPU 预测空间，提升混合工作负载的可靠性。

4. **gemma4 工具调用已修复** — 使用 gemma4 配合工具调用时，解析器现正确处理未闭合列表，减少静默失败。

5. **API 对齐** — `/v1/completions` 默认不再应用聊天模板（已在 #19289 关闭），与 OpenAI 行为保持一致。

6. **关注 RDNA3 集显上的 ROCm** — 使用 Radeon 890M（gfx1150）时当前版本（0.40.6+）存在回归；0.33.3 仍稳定。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese (Simplified Chinese based on the context). I need to:

1. Translate all headings
2. Translate all body text
3. Keep tables, lists, code references, issue numbers, URLs exactly as they are
4. Keep Markdown structure exactly
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through this carefully:

**Title:** 
"LiteLLM Digest — 2026-10-26"
→ "LiteLLM 要闻 — 2026-10-26"

**Section: Today's Highlights**
Translate the paragraph. Note that "Cosign verification" is a security feature name - should keep in English or translate as "Cosign 签名验证".

**Section: Releases & Breaking Changes**
- "Releases & Breaking Changes" → "版本发布与重大变更"
- "Notes" → "说明"
- "Links" → "链接"

For the table content, translate the text in the "Notes" column. Keep version numbers, URLs as-is.

**Section: New Model & Hardware Support**
- "New Model & Hardware Support" → "新模型与硬件支持"
- Translate table content

**Section: Performance & Optimization**
- "Performance & Optimization" → "性能与优化"
- Translate table content

**Section: Stability & Regressions**
- "Stability & Regressions" → "稳定性与回归问题"

For subsections:
- "High Severity" → "高严重性"
- "Medium Severity" → "中等严重性"
- "Recently Fixed" → "近期已修复"

**Section: What This Means for Application Developers**
- "What This Means for Application Developers" → "这对应用开发者意味着什么"

Translate the numbered list items.

**Footer/Notes**


I'll verify the translation matches the original content precisely, ensuring all technical details remain intact while presenting them in natural technical Chinese.</think>

# LiteLLM 要闻 — 2026-10-26

## 今日要点

LiteLLM 发布了四个小版本更新（v1.103.9 → v1.106.4），所有容器镜像均已启用 Cosign 签名验证。社区修复了多个提供商相关的问题，包括 DeepSeek V4 reasoning_effort 参数传递、Anthropic Presidio 防护栏的 PII 脱敏功能，以及 Ollama 的 stop sequences 处理。还报告了一个值得注意的 DST 相关 OOM 问题——在欧洲夏令时切换期间发生。

---

## 版本发布与重大变更

| 版本 | 说明 | 链接 |
|------|------|------|
| **v1.106.4** | 最新稳定版；容器已通过 Cosign 验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.106.4) |
| **v1.105.5** | 前一版本；容器已通过 Cosign 验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.105.5) |
| **v1.104.7** | 前一版本；容器已通过 Cosign 验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.104.7) |
| **v1.103.9** | 前一版本；容器已通过 Cosign 验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.103.9) |

未报告重大变更。所有容器镜像（`ghcr.io/berriai/litellm`、`litellm-database`、`litellm-non_root`、`docker.io/litellm/*`）均包含 Cosign 验证。

---

## 新模型与硬件支持

| 提供商/模型 | 状态 | 说明 |
|-------------|------|------|
| **Sideren** | 新增 | 通过 `providers.json` 配置的新 JSON 格式 OpenAI 兼容提供商 — `sideren/<model>` 配合 `SIDEREN_API_KEY` 使用 | [#48356](https://github.com/BerriAI/litellm/pull/48356) |
| **Decision Models** | 新增 | 新增 decisions 提供商，支持 `litellm.adecisions(custom_llm_provider="typesafe", ...)` | [#46901](https://github.com/BerriAI/litellm/pull/46901) |
| **FunASR** | 需求中 | 音频/转录功能的需求已提交；仓库方表示是工具包而非单一模型 | [#29367](https://github.com/BerriAI/litellm/issues/29367) |
| **DeepSeek V4** | 已修复 | `reasoning_effort`（"high"/"max"）现可正确传递至 API | [#27439](https://github.com/BerriAI/litellm/issues/27439) |

---

## 性能与优化

| 变更 | 影响 | PR |
|------|------|-----|
| **Ollama stop sequence 规范化** | 现已支持字符串形式的 stop sequences（内部自动转换为数组）— 修复请求失败问题 | [#48324](https://github.com/BerriAI/litellm/pull/48324) |
| **消费记录键值过滤** | 未识别的虚拟键不再创建消费记录；减少日志噪音 | [#48357](https://github.com/BerriAI/litellm/pull/48357) |
| **向量存储分页** | 使用稳定的 ID 排序，拒绝非正数的页码 | [#48353](https://github.com/BerriAI/litellm/pull/48353) |
| **模型预算空值处理** | 管理员可使用显式 `null` 清除每个模型的预算限制，不会导致服务器错误 | [#48354](https://github.com/BerriAI/litellm/pull/48354) |

---

## 稳定性与回归问题

### 高严重性

| 问题 | 描述 | 状态 |
|------|------|------|
| **[#48286](https://github.com/BerriAI/litellm/issues/48286)** | DST 切换期间（2026年10月25日欧洲/巴黎，02:00 CET）代理启动无限循环并被 OOM 杀死。在达到 `Application startup complete` 之前内存持续增长无上限。 | **待处理** |
| **[#48304](https://github.com/BerriAI/litellm/issues/48304)** | 认证失败处理器在收到非对象类型的 JSON body（`[]`、`null`、`"s"` 等）时返回 500 — `AttributeError: 'list' object has no attribute 'get'` | **待处理** — PR [#48329](https://github.com/BerriAI/litellm/pull/48329) 已就绪 |
| **[#48238](https://github.com/BerriAI/litellm/issues/48238)** | Vertex Model Garden 流式响应丢失 `reasoning_content`、额外 tool calls 及 usage 详情 | **待处理** |

### 中等严重性

| 问题 | 描述 | 状态 |
|------|------|------|
| **[#14398](https://github.com/BerriAI/litellm/issues/14398)** | 功能需求：每日请求数和每日 token 数的速率限制 — 目前仅支持每分钟限制 | **待处理**（14 条评论） |
| **[#34364](https://github.com/BerriAI/litellm/issues/34364)** | SpendLogs 分区边界与数据库会话时区非 UTC 时不对齐 | **待处理** |
| **[#34503](https://github.com/BerriAI/litellm/issues/34503)** | Scaleway 提供商在 `embedding()` 端点未被路由 — 抛出 `LiteLLMUnknownProvider` | **待处理** |
| **[#47947](https://github.com/BerriAI/litellm/issues/47947)** | 超过 64 位的 JSON 整数在转发前被重写为浮点数（如 `"maximum": 12345678901234567890123` → `1.2345678901234568e+22`） | **待处理** |

### 近期已修复

| 问题 | 描述 | 状态 |
|------|------|------|
| **#22821** | Presidio 防护栏 PII 脱敏在 Anthropic 原生 API 下失效 | 已关闭 |
| **#46045** | `ModuleNotFoundError: No module named 'mcp'` | 已关闭 |
| **#13901** | Langfuse HTTP 请求头从未到达 Langfuse API | 已关闭 |
| **#48226** | `completion_cost()` 对 `groq/openai/gpt-oss-*` 抛出 `ModelNotMappedError` | 已关闭 |

---

## 这对应用开发者意味着什么

1. **速率限制**：每日速率限制功能仍在开发中（[#14398](https://github.com/BerriAI/litellm/issues/14398)）。如果你依赖提供商的每日配额，可能需要自行实现外部追踪，直至该功能上线。

2. **夏令时影响**：如果你的代理运行在欧洲区域，请关注春季夏令时切换 — OOM 问题（[#48286](https://github.com/BerriAI/litellm/issues/48286)）可能导致重启循环。修复发布后请及时升级。

3. **JSON 边界情况**：非对象类型的 JSON body（`[]`、`null`）目前会在未认证端点导致 500 错误。修复正在 pending 中（[#48329](https://github.com/BerriAI/litellm/pull/48329)）。请确保你的请求 payload 包含对象类型。

4. **新提供商**：Sideren 和 Decision Models 现已可用 — 检查它们是否满足你的推理需求，有助于减少提供商锁定。

5. **Ollama 用户**：如果你使用字符串形式的 stop sequences，现在已能正常工作 — 无需再手动包装为数组。

6. **预算管理**：显式 `null` 现可干净地清除模型预算限制 — 对管理界面的配置重置功能很有帮助。

---

*数据基于 2026-10-26 的 GitHub 统计。本期：4 个版本，50 个 issue 更新，160 个 PR 更新。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this English digest about Unsloth project into Chinese, following the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (headings, tables, lists, bold/italic, etc.)
- Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
- Use natural technical Chinese register

Let me translate this carefully while maintaining the exact structure and keeping technical terms in their original form or using appropriate technical Chinese.</think>

# Unsloth 速报 — 2026-10-26

## 1. 今日要点

Unsloth 团队持续打磨 v0.1.910-beta 版本，已修复多个问题。当前活跃开发聚焦于多 GPU 张量分割、新版 Flows 节点编辑器以及 Metal 内存恢复。多个高影响问题已解决，包括 GGUF 加载、Vulkan 推理和聊天模板处理。

---

## 2. 发布动态与重大变更

| 项目 | 描述 |
|------|-------------|
| **暂无新版本** | 过去 24 小时内无新版本发布 |

**注意**：v0.1.910-beta 为当前稳定桌面版本（多处 issue 均以此为基准）

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | Issue / PR |
|------------------|---------|----------|
| **Nanbeige4.3-33B** | 功能请求：原生支持并优化为密集编码模型 | [#15278](https://github.com/unslothai/unsloth/issues/15278) |
| **FLUX.3 Klein (GGUF)** | 图像编辑工作流现已支持 | [#15263](https://github.com/unslothai/unsloth/pull/15263) (已合并) |
| **DeepSeek-V4.1-Flash-1017-GGUF** | 模板补丁已推送，修复对话历史中图像标记被拒绝的问题 | [#15285](https://github.com/unslothai/unsloth/issues/15285) |
| **MiniCPM-V-4.7-1B** | Vulkan 后端修复：词汇表错位时在 CPU 上采样草稿 | [#15258](https://github.com/unslothai/unsloth/pull/15258) |

---

## 4. 性能与优化

| 领域 | 变更 | PR / Issue |
|------|--------|----------|
| **多 GPU 张量分割** | 新 PR 为密集模型和 MTP MoE 添加 `tensor` 分割模式，使双 GPU 在解码期间并行工作而非顺序执行 | [#14446](https://github.com/unslothai/unsloth/pull/14446) |
| **MiniMax-H3 流式传输** | 固定延迟流式块，后台固定器实现 — A100 上约节省 10.9 秒（19.45 GB） | [#15297](https://github.com/unslothai/unsloth/pull/15297) |
| **内存定价（嵌入表）** | 嵌入表和 Engram 查找表现按主机/磁盘内存计价，而非 VRAM | [#14465](https://github.com/unslothai/unsloth/pull/14465) |
| **图像 token 大小** | GGUF 自动压缩现正确统计 fit 和工具结果大小中的图像 token（修复上下文溢出） | [#15014](https://github.com/unslothai/unsloth/pull/15014) |
| **智能卸载规划器** | 持续工作：权衡溢出与 llama.cpp 自身的 fitter — 位于 `UNSLOTH_SMART_OFFLOAD` 标志后 | [#9872](https://github.com/unslothai/unsloth/pull/9872) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | v0.1.910-beta 上 GGUF 模型加载失败（Windows）—"child not listening" 端口检查误报 | 已关闭 | 近期更新已修复 |
| **高** | Studio 强制 `preserve_thinking=true`，覆盖用户聊天模板，使 `--no-reasoning-preserve` 失效 | 已关闭 | 已修复 |
| **中** | WebKitWebProcess 在 KDE Plasma 上 SIGABRT 崩溃（Linux AppImage） | 进行中 | — |
| **中** | MiniCPM-V-4.7-1B Vulkan 后端文本生成失败（推测解码） | 进行中 | [#15258](https://github.com/unslothai/unsloth/pull/15258) |
| **中** | 自动压缩忽略本地 GGUF 聊天中的图像 token → 截图溢出导致工具循环 | 进行中 | [#15014](https://github.com/unslothai/unsloth/pull/15014) |
| **低** | Audio.cpp 在 AMD GPU 上运行于 CPU（需 ROCm/HIP 打包） | 已关闭 | — |
| **低** | 请求 24 小时时间格式开关 | 进行中 | — |

---

## 6. 这对应用开发者的意义

- **多 GPU 用户**：张量分割 PR（[#14446](https://github.com/unslothai/unsloth/pull/14446)）将显著提升双 GPU 配置下的解码吞吐 — 推理期间 GPU 利用率预计提升约 50%。
- **视觉模型用户**：自动压缩中的图像 token 统计（[#15014](https://github.com/unslothai/unsloth/pull/15014)）修复了长期问题：含大量截图的聊天会静默超出上下文而不触发压缩。
- **Vulkan 用户**：通过 CPU 采样回退（[#15258](https://github.com/unslothai/unsloth/pull/15258)），MiniCPM-V 推理现已稳定。
- **API 集成方**：聊天模板覆盖现正确遵守 `--no-reasoning-preserve` 标志（[#15115](https://github.com/unslothai/unsloth/issues/15115)）。
- **中国用户**：中国区网页搜索功能现已可用（[#15143](https://github.com/unslothai/unsloth/issues/15143)）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*