# AI 基础设施日报 2026-10-28

> 生成时间: 2026-10-28 01:37 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English report into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, numbers, dates, code spans, etc. verbatim
- Keep project names, repository slugs, usernames, version tags, file paths in original form
- Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical precision.</think>

# 跨项目对比 — 2026-10-28

---

## 1. 生态概览

今日的 AI 基础设施格局呈现出成熟的堆栈分化。**服务层**（vLLM、SGLang）正在强化分片与多 GPU 扩展能力，同时竞相支持新兴模型架构（DeepSeek-V4-Flash、GLM-5.3、LiquidAI LFM3）。**本地/运行时层**（llama.cpp、Ollama）正在扩展多模态覆盖范围（音频、视觉、视频）并改进量化正确性。**网关/编排层**（LiteLLM）持续聚焦成本控制和供应商抽象。与此同时，**微调**（Unsloth）正在演化为端到端 ML 平台，整合工作流编排、基准测试和评估能力。

---

## 2. 活动对比

| 项目 | Issues（可见） | PRs（可见） | Release（24h） | 今日主要关注 |
|------|---------------|-------------|----------------|--------------|
| **vLLM** | 30+ | 10+ | 0 | SM8x DeepSeek 支持、MI355X ROCm 优化、TurboQuant 修复 |
| **SGLang** | 20+ | 15+ | 0 | PD 分片、投机解码稳定性、HiCache 优化 |
| **llama.cpp** | 20+ | 10+ | **8**（b11930–b11944） | LFM3 家族（音频、全模态、VL）、k-pool 稀疏选择、MoE 缓存 |
| **Ollama** | 29 | 37 | 0 | MLX 并发生成、Kolibri/Nemotron 支持、Windows/长 prompt 修复 |
| **LiteLLM** | 20+ | 10+ | **4**（v1.103.10–v1.106.5） | 批量缓存 token 定价、Databricks OpenJev、Gemini 超时转发 |
| **Unsloth** | 28 | 302 | 0 | Flows 工作流、Benchmarks/Evals 标签页、FP8 n-gram 回归、Windows 磁盘 bug |

**关键观察**：llama.cpp 主导发布节奏；Unsloth 领跑 PR 数量（可能包含 Studio UI 工作）；LiteLLM 保持补丁版本迭代并带有 cosign 验证。

---

## 3. 模型支持竞赛

| 模型家族 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------|------|--------|-----------|--------|---------|
| **DeepSeek-V4-Flash** | 🔶 SM8x 开发中 | — | — | — | — |
| **Qwen3.8-Flash-Next** | ✅ MI355X ROCm | ✅ EP2 | — | — | 🔶 FP8 n-gram bug |
| **GLM-5.3-Flash** | ✅ MXFP4 KV cache | ✅ Hopper 优化 | — | — | — |
| **LiquidAI LFM3** | — | — | ✅ 音频/全模态/VL | 🔶 GGUF 问题 | ✅ 已请求 |
| **Kolibri 1** | — | — | — | ✅ MLX | — |
| **Nemotron 3.5 Bolt** | — | — | — | ✅ MLX | — |
| **Gemma 4** | — | — | — | — | 🔶 视觉 bug |
| **决策模型** | — | — | — | 🔶 决策头 | — |

**领先者**：**vLLM** 在 ROCm + 新兴架构（DeepSeek、GLM）上领先；**llama.cpp** 在新锐架构（LiquidAI LFM3）上领先；**Ollama** 在 MLX 生态（Kolibri、Nemotron）上领先。

---

## 4. 性能前沿

| 优化方向 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------|------|--------|-----------|--------|---------|
| **KV cache / offloading** | 🔶 多层 RFC | — | ✅ MoE 混合 LRFU | — | — |
| **批处理 / 调度** | — | 🔶 PD 分片 | — | — | — |
| **量化** | 🔶 TurboQuant | — | ✅ IQ3_S Blackwell 修复 | — | 🔶 FP8 n-gram bug |
| **分布式服务** | ✅ TP/EP | ✅ PD 分片 | — | — | — |
| **内核优化** | ✅ ROCm MonoKernel | — | ✅ k-pool Po2 | ✅ MLX 并发 | — |
| **内存管理** | — | ✅ HiCache O(kN) | ✅ --models-memory-max | — | 🔶 Block Swap bug |

**前沿聚焦**：最活跃的优化线程集中在：
1. **vLLM** — ROCm 内核融合 + 多层 KV offloading
2. **SGLang** — PD 分片吞吐量优化
3. **llama.cpp** — MoE 缓存策略和稀疏选择
4. **Unsloth** — Block Swap offload 正确性

---

## 5. 层定位

| 层级 | 项目 | 定位 |
|------|------|------|
| **服务引擎** | **vLLM**、**SGLang** | 生产级推理服务；vLLM 领跑吞吐/多节点；SGLang 领跑分片 + 投机解码 |
| **本地运行时** | **llama.cpp**、**Ollama** | 本地/边缘推理；llama.cpp 领跑架构覆盖 + 新硬件（Hexagon）；Ollama 领跑易用性 + MLX |
| **网关/代理** | **LiteLLM** | 多供应商抽象 + 成本控制；保持供应商对等 + 可观测性 |
| **微调 / Studio** | **Unsloth** | 端到端微调 + 评估 + 工作流编排；独特地位连接训练 → 部署 |

**竞争动态**：
- vLLM ↔ SGLang：分片成熟度和投机解码正确性的竞争
- llama.cpp ↔ Ollama：llama.cpp 作为 Ollama 封装的引擎；在 MLX 聚焦上分化
- Unsloth ↔ LiteLLM：Unsloth 拥有训练→推理流水线；LiteLLM 位于服务层之上处理成本/路由

---

## 6. 趋势信号

### 今日活动信号

| 趋势 | 证据 | 对开发者的意义 |
|------|------|----------------|
| **分片正在成熟** | SGLang PD 路线图（#43699）、vLLM 多层 KV offloading RFC（#38260） | 多租户推理工作负载可计划在 2026 Q4–Q1 投入生产分片 |
| **量化正确性回归** | Blackwell 上 IQ3_S（#28581）、TurboQuant head_dim Po2（#41414）、Unsloth FP8 n-gram（#15632） | 不要假设量化总是正常工作；在 Blackwell/AMD 上生产前用黄金数据集测试 |
| **边缘多模态扩展** | llama.cpp LFM3 音频/全模态/视觉、Unsloth 视觉 bug | 预计本地多模态将在消费级硬件上变得可行；彻底测试视觉流水线 |
| **MLX 生态成熟** | Ollama Kolibri/Nemotron、MLX 并发生成（#19197）、Unsloth MLX 视觉 bug | Apple Silicon 推理不再是实验性的；音频/文本生产就绪 |
| **成本可观测性收敛** | LiteLLM 批量缓存 token 定价、vLLM KV offloading | 期待服务层更严格的成本控制；批处理成本模型趋于稳定 |
| **代理特性涌现** | SGLang Studio 中的 MCP 工具、llama.cpp `/v1/realtime`、Unsloth Flows | 平台级代理基础设施构建中；工具使用正在成为一等公民 |

### 基础设施工程师应关注

1. **PD 分片路线图** — SGLang 的 Q4 推进将定义生产就绪时间线，适用于多租户 prefill/decode 分离
2. **Blackwell（SM120）稳定性** — CUDA graphs 在 vLLM/llama.cpp 上损坏（#56892、#27330）；在部署 RTX PRO 6000 工作负载前关注内核修复
3. **ROCm MI355X** — Qwen/GLM 的堆叠 PR 正在落地；AMD 数据中心推理即将生产就绪
4. **LiteLLM 成本模型漂移** — 批量缓存 token 计费修复（#48697）可能导致现有部署的成本对账
5. **Unsloth Block Swap 回归** — Qwen3.8-Flash-Next offload 损坏；在 #15633 解决前避免生产使用

---

*跨项目综合 — 2026-10-28*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the provided English content into Chinese while preserving the exact Markdown structure, URLs, issue/PR references, and technical terms. Let me produce a natural, fluent Chinese translation following all the rules specified.

Let me go through and translate:

# vLLM Daily Digest — 2026-10-28

## 1. Today's Highlights

The vLLM project is addressing critical hardware compatibility gaps this week. The most active thread (#50576, 121 comments) is driving SM8x (Ampere A100/A800) support for DeepSeek-V4-Flash models, a significant gap since these popular enterprise GPUs currently cannot run the model. Meanwhile, ROCm optimization work continues with multiple stacked PRs targeting AMD MI355X/gfx950 and new GLM-5.3-Flash MonoKernel integration with MXFP4 KV cache.

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

---

## 3. New Model & Hardware Support

| Issue/PR | Description | Links |
|----------|-------------|-------|
| #50576 | **DeepSeek-V4-Flash / V4-Flash-0731 SM8x (Ampere) support** — Neither checkpoint runs on SM8x (A100/A800, RTX 30xx). Work to extend support to Ampere architecture is in progress. | [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) |
| #56892 | **DeepSeek-V4.1-Flash on SM120 (RTX PRO 6000 Blackwell)** — Extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable. Graph capture fix for SM120 requested. | [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) |


| #64121 | **ROCm: GLM-5.3-Flash MonoKernel with MXFP4 KV cache** — Enables GLM-5.3-Flash MonoKernel to run with `--kv-cache-dtype mxfp4_mla`, providing 272 bytes/token vs 512 (e4m3) or 1024 (bf16). | [PR #64121](https://github.com/vllm-project/vllm/pull/64121) |
| #41370 | **XPU fallback for integrated Intel GPU** — Fallback when `torch.xpu` is unavailable for integrated graphics. | [PR #41370](https://github.com/vllm-project/vllm/pull/41370) |

---

## 4. Performance & Optimization

| Issue/PR | Description | Details |
|----------|-------------|---------|
| #57149 | **ROCm: Qwen3.8-2.4T-A95B (MI355X) performance optimization** — Stacked PRs targeting gfx950/MI355X. | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) |
| #59575 | **ROCm: Qwen3.8-Flash-Next gfx950/MI355X performance** — Optimization for `qwen4_exp` with GatedDeltaNet, QuerySparse Attention, HyperConnection, MXFP4 MoE. | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |
| #57406 | **GLM 5.3 Performance Optimization** — Following up on GLM-5.2 optimizations; CUDA work targeting `glm_moe_dsa` architecture. | [Issue #57406](https://github.com/vllm-project/vllm/issues/57406) |
| #38260 | **Multi-tier KV offloading via OffloadingConnector** — RFC for extending KV offloading beyond CPU to storage tiers. | [Issue #38260](https://github.com/vllm-project/vllm/issues/38260) |

I've added three more pull requests to the performance section, covering Qwen and GLM model optimizations, and started documenting a multi-tier KV offloading approach. The translation maintains the technical precision while conveying the core information about ongoing performance improvements and support for various GPU architectures.</think>

# vLLM 每日简报 — 2026-10-28

## 1. 今日要闻

vLLM 项目本周正在解决关键的硬件兼容性问题。最活跃的讨论（Issue #50576，121 条评论）推动了 DeepSeek-V4-Flash 模型的 SM8x（Ampere A100/A800）支持，这是当前企业级主流 GPU 无法运行该模型的重大空白。与此同时，ROCm 优化工作持续推进，多个堆叠 PR 针对 AMD MI355X/gfx950，并完成了 GLM-5.3-Flash MonoKernel 与 MXFP4 KV cache 的集成。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| Issue/PR | 描述 | 链接 |
|----------|------|------|
| #50576 | **DeepSeek-V4-Flash / V4-Flash-0731 SM8x（Ampere）支持** — 这两个 checkpoint 均无法在 SM8x（A100/A800、RTX 30xx）上运行。正在推进 Ampere 架构的支持工作。 | [Issue #50576](https://github.com/vllm-project/vllm/issues/50576) |
| #56892 | **DeepSeek-V4.1-Flash 在 SM120（RTX PRO 6000 Blackwell）上** — 使用 `--enforce-eager` 时解码吞吐量极低；CUDA graphs 无法使用。需要修复 SM120 的 graph capture。 | [Issue #56892](https://github.com/vllm-project/vllm/issues/56892) |
| #64121 | **ROCm：GLM-5.3-Flash MonoKernel 搭配 MXFP4 KV cache** — 支持 GLM-5.3-Flash MonoKernel 使用 `--kv-cache-dtype mxfp4_mla`，提供 272 字节/token（对比 e4m3 的 512 或 bf16 的 1024）。 | [PR #64121](https://github.com/vllm-project/vllm/pull/64121) |
| #41370 | **XPU：集成 Intel GPU 的回退机制** — 当 `torch.xpu mem_get_info` 在集成 Intel GPU 上不支持时的回退方案。 | [PR #41370](https://github.com/vllm-project/vllm/pull/41370) |

---

## 4. 性能与优化

| Issue/PR | 描述 | 详情 |
|----------|------|------|
| #57149 | **ROCm：Qwen3.8-2.4T-A95B（MI355X）性能优化** — 堆叠 PR 针对 gfx950/MI355X。 | [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) |
| #59575 | **ROCm：Qwen3.8-Flash-Next gfx950/MI355X 性能** — 针对 `qwen4_exp` 优化，包含 GatedDeltaNet、QuerySparse Attention、HyperConnection、MXFP4 MoE。 | [Issue #59575](https://github.com/vllm-project/vllm/issues/59575) |
| #57406 | **GLM 5.3 性能优化** — 延续 GLM-5.2 的优化工作；CUDA 工作针对 `glm_moe_dsa` 架构。 | [Issue #57406](https://github.com/vllm-project/vllm/issues/57406) |
| #38260 | **通过 OffloadingConnector 实现多级 KV 卸载** — RFC，将 KV 卸载从 CPU 扩展到存储层级。 | [Issue #38260](https://github.com/vllm-project/vllm/issues/38260) |
| #40543 | **启用动态 PDL** — 在 DeepSeek 融合 QKV A Projection（TRTLLM_ENABLE_PDL）和 torch.compile 的 triton 内核（TORCHINDUCTOR_ENABLE_PDL）中启用 PDL，针对 Hopper/Blackwell。 | [Issue #40543](https://github.com/vllm-project/vllm/issues/40543) |
| #41414 | **TurboQuant：对非 2 的幂次 head_dim 进行填充以适配 WHT** — 修复非 2 的幂次 head_dim（如 microsoft/phi-2 的 head_dim=80）的潜在正确性问题。 | [PR #41414](https://github.com/vllm-project/vllm/pull/41414) |
| #41418 | **TurboQuant：预计算 Lloyd-Max 聚类中心** — 为常见 (d, bits) 形状预计算，避免运行时执行 200 次迭代初始化循环。 | [PR #41418](https://github.com/vllm-project/vllm/pull/41418) |
| #49349 | **运行时零 JIT 编译** — 追踪共享的 JIT 预热基础设施；DeepSeek V4 去 JIT 化正在进行中。 | [Issue #49349](https://github.com/vllm-project/vllm/issues/49349) |

---

## 5. 稳定性与回归问题

| Issue/PR | 严重程度 | 描述 | 状态 |
|----------|----------|------|------|
| #56892 | **高** | DeepSeek-V4.1-Flash 在 SM120 上：eager 模式下解码吞吐量极低；CUDA graphs 失效 | 待处理 |
| #60160 | **高** | ROCm：Qwen3.8-27B-FP8（TP4，MI355X）在高并发下使用 `VLLM_ROCM_USE_AITER=1` 时精度崩溃 | 待处理 |
| #41725 | **中** | 2x DGX Spark（GB10，sm_12.1）上反复出现 CUDA 内核卡死，使用 MiniMax-M2.7-NVFP4，跨节点 TP=2 | 待处理 |
| #42363 | **中** | 使用 Kimi-K2.6 模型时出现 EngineDeadError（vLLM 0.20.2） | 待处理 |
| #41838 | **中** | Eagle 2/3 接受长度回归 — AL 永远无法恢复，需重启服务 | 待处理 |
| #41789 | **中** | Gemma4 31B MTP 平均 Draft 接受率：0.2% | 已关闭 |
| #58899 | **中** | 贪婪输出在重启间不一致：q/k-norm + RoPE 组合内核按时间选择归约配置（非确定性） | 待处理 |
| #43547 | **中** | MoE+DP：零 token 调度步骤跳过 coordinate_batch_across_dp → NCCL 死锁 | 待处理 |
| #41427 | **低** | 处理 QuantFP8 Native Forward 中的 NaN | 待处理 |
| #64176 | **低** | ROCm EPLB：允许主机端同步 skip-rearrange 检查 | [PR #64176](https://github.com/vllm-project/vllm/pull/64176) |

---

## 6. 这对应用开发者的意义

1. **Ampere 用户等待 DeepSeek-V4**：社区正在积极推进 SM8x 支持（Issue #50576）。如果您在 A100/A800 或 RTX 30xx 卡上需要 DeepSeek-V4-Flash，请关注此讨论的进展。

2. **ROCm 用户：MI355X 优化即将推出**：AMD 团队正在为 Qwen3.8 和 GLM-5.3 在 MI355X/gfx950 上提交堆叠 PR。新 MonoKernel + MXFP4 KV cache 集成（PR #64121）显著提升了内存效率（272 vs 1024 字节/token）。

3. **Blackwell（SM120）用户：CUDA graphs 损坏**：在 RTX PRO 6000 Blackwell 上运行 DeepSeek-V4.1-Flash 时，使用 eager 模式会出现解码吞吐量下降。CUDA graph capture 需要修复（Issue #56892）。

4. **TurboQuant 用户**：修复了影响非 2 的幂次 head_dim 模型的正确性 bug（PR #41414）；预计算 Lloyd-Max 聚类中心（PR #41418）将加速首次使用的初始化。

5. **OpenAI API 合规性**：PR #64177 移除了响应中的空值 `annotations` 和 `usage.prompt_tokens_details`，修复了严格的 schema 验证失败。

6. **Rust 前端对齐**：两个 PR（#63959、#63960）使 Rust 引擎的 sleep 状态和 gpt-oss reasoning token 计数与 Python 版本对齐。

---

*基于 vllm-project/vllm GitHub 数据生成 — 2026-10-28*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese. I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep all technical terms, code references, issue numbers, URLs, and identifiers in their original English form
3. Use natural technical Chinese register - like a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# SGLang 速报 — 2026-10-28

## 今日要点

SGLang 项目在 Q4 持续推进，重点聚焦 PD 分离架构加固、AMD 消费级 GPU 支持以及内核级性能优化。围绕投机解码稳定性的工作值得关注（非贪婪请求时 flashinfer JIT 崩溃问题仍待解决），同时多个性能优化 PR 已合并，重点优化 HiCache 队列效率和 GLM-5.2 的 GEMM 路径。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **AMD 消费级 Radeon (RDN3/RDNA4)**：Issue #30599 追踪官方对消费级 GPU 的支持（`gfx1100`/`gfx1101`/`gfx1200`/`gfx1201`）。目前 SGLang 的 ROCm 路径仅支持数据中心级 Instinct 卡（`gfx942`/`gfx950`）。路线图包含具体的启用步骤和 MI355X 性能调优。

- **NVIDIA Nemotron-3-Embed**：PR #45885 新增对 `nvidia/Nemotron-3-Embed-1B-BF16` 及其 NVFP4 变体的原生支持，支持文本嵌入/检索场景。

- **GLM-5.3-Flash on Hopper**：Issue #45373 追踪 SM90 (Hopper) 性能优化工作，属于 Q4 路线图 #42473。

---

## 性能与优化

| 变更 | 描述 | 影响 |
|------|------|------|
| **#46903** | HiCache: 将确认队列中的 O(k×N) `list.pop(0)` 耗尽循环替换为切片删除 | 降低大批量场景下的队列耗尽延迟 |
| **#46898** | 分离架构: 在解码传输阶段首次拒绝时停止设备准入 | 接近解码 KV 内存上限时吞吐量更优 |
| **#45862** | GEMM: 为 GLM-5.2 block-FP8 解码投影添加 W8A16 小 M GEMM | GB300 (TP4) 延迟降低最多 6.8%；KV 池增加 0.5 GiB |
| **#46812** (已关闭) | 调度器: 在等待前缀 LRU 传递中刷新 PD 前缀引导队列前缀 | 为等待槽分配的前缀预热设备前缀 |
| **#46905** | Hunyuan3D: 卷积解码器的 GPU 端网格生成 | 形状导出更快 |
| **#44350** | 索引器重构: 将 DSA/DSV4 索引器迁移至 DeepGEMM 的 fp8_fp4 MQA logits API | API 现代化，无直接性能变化 |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 备注 |
|----------|------|------|------|
| **高** | #43412 — 投机解码在首个非贪婪请求时崩溃（flashinfer verify-sampling op JIT 失败） | 进行中 | CCCL 捆绑包与 pip cu13 工具包不匹配；杀死进程树；贪婪模式可用，采样请求崩溃 |
| **高** | #44291 — EP2 (tp=2 + ep=2) 在 Qwen3.8-Flash-Next-NVFP4 (RTX PRO 6000, sm_120) 上因非法内存访问崩溃 | 进行中 | 两种不同构建上的内核级 IMA |
| **中** | #45755 — Kimi-K3 on SM90: `flashinfer_mxfp4` 计算 GPT-OSS SwiGLU 而非 SiTU | 进行中 | MoE 激活中的静默正确性 bug |
| **中** | #44070 — PD 前缀: 早期缓存前缀在 HiCache 回填完成前发送过期 KV | 已关闭 | `SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1` 中的 bug |
| **中** | #35291 — MLA + fp8 KV: 每层将整个 KV 池反量化（解码步骤的 43.7%） | 进行中 | DeepSeek-R1 上 `fa3` 和 `flashinfer_mla` 后端均受影响 |
| **低** | #44794 — AMD select_experts 将 fp32 MoE 偏置转换为 bf16（GLM-5.x 路由精度错误） | 进行中 | #37133 的 fp32 aiter 路径被绕过 |

---

## 对应用开发者的意义

1. **pip 安装的包上投机解码不稳定** — 如果使用 CUDA 13 的 pip 包，在 flashinfer JIT 问题解决前，避免在投机解码中使用 temperature > 0。贪婪解码完全正常。

2. **PD 分离架构日趋成熟** — 路线图 issue #43699 显示各模型族和并行策略取得显著进展。如果您在生产环境中使用前缀-解码分离，期待即将发布版本中更好的稳定性。

3. **AMD 消费级 GPU 用户** — 官方 RDNA3/RDMA4 支持已列入路线图 (#30599)。目前 MI355X (gfx950) 仍是推荐的 AMD 平台。

4. **Hopper 上的 GLM-5.2 FP8 用户** — 新的 W8A16 GEMM 路径 (#45862) 提供可观的延迟收益；考虑合并后升级。

5. **NPU 支持** — NPU CI 流程正在清理 (#46728)，缓存服务镜像即将停用，标志着对 Ascend NPU 服务的持续投入。

---

*基于 github.com/sgl-project/sglang 整理 — 2026-10-28*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this GitHub digest about llama.cpp from English to Chinese. I need to:
1. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
2. Keep URLs, issue numbers, commit hashes, model names, technical terms as-is
3. Translate into natural technical Chinese that a Chinese developer would understand
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through and translate while maintaining the structure:

Title: # llama.cpp Digest — 2026-10-28

Section 1: Today's Highlights
Section 2: Releases & Breaking Changes  
Section 3: New Model & Hardware Support
Section 4: Performance & Optimization
Section 5: Stability & Regressions
Section 6: What This Means for Application Developers

Let me translate each section naturally:</think>

# llama.cpp 速报 — 2026-10-28

## 1. 今日要点

llama.cpp 继续推进多模态和推理能力，新增 LiquidAI LFM3 模型家族支持（audio、video、omni 变体），并改进了服务端推理强度控制。后端方面包括 Vulkan 维度广播修复和 RPC 错误处理改进。

## 2. 发布与变更

| SHA | 描述 | 备注 |
|-----|------|------|
| [b11944](https://github.com/ggml-org/llama.cpp/commit/b11944) | Server 暴露 chat template 的 reasoning effort 级别 | 支持 minimal/low/medium/high/xhigh/max 级别的能力探测 (#31271) |
| [b11940](https://github.com/ggml-org/llama.cpp/commit/b11940) | Common: 支持 deferred tools 和 tool_reference 内容块 | (#31256) |
| [b11930](https://github.com/ggml-org/llama.cpp/commit/b11930) | Server: 新增 `--models-memory-max` 参数实现动态模型卸载 | 支持基于内存阈值的模型淘汰 (#21231) |

## 3. 新模型与硬件支持

- **LiquidAI LFM3 家族** — 新增支持：
  - [LFM3-Audio-2B](https://github.com/ggml-org/llama.cpp/commit/b11941) (#31257)
  - [LFM3-Omni-2B](https://github.com/ggml-org/llama.cpp/commit/b11941) (#31257)
  - [LFM3-1.7B](https://github.com/ggml-org/llama.cpp/commit/b11938) (#31252)
  - [LFM3-VL-2B](https://github.com/ggml-org/llama.cpp/commit/b11938) (#31252)
  - [d1-2B](https://github.com/ggml-org/llama.cpp/pull/31275) 及 d1-omni-2B 决策模型
  - LFM3 家族新增 [视频输入支持](https://github.com/ggml-org/llama.cpp/pull/31283)
  - `/v1/realtime` 端点新增[实时对话](https://github.com/ggml-org/llama.cpp/pull/31269)和语音转写功能

## 4. 性能与优化

- **k-pool 稀疏选择** — 独立于 kq_mask 形状构建，为 Qwen4Exp (QSA) 和 GLM5-Next 的按索引缓存单元选择带来收益 (#31236)
- **MoE 缓存改进** — 混合 LRFU/MQ 启发式缓存配合 ClassLRU，在 QFN 上实现 +6% 解码吞吐、GLM 上 +7%，专家上传减少 8% (#31233)
- **MoE 缓存 CPU 占比** — CPU 未命中时自动切换 CRF 准入模式 (#31286)
- **Hexagon 后端** — 后端采样器 TOP_K 加速，X2 Elite 上的推测解码显著提升 (#31279)
- **测试** — 张量数据生成与模型保存大幅提速，重构为仅创建模型而非完整 llama_context (#31145)

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|---------|------|------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) — 量化目标上推测解码发散 | **高** | 进行中 | Q4_K_M 目标上的贪心输出与非推测模式不同；ngram 推测受影响。32 条评论 |
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) — RTX 5090 Laptop (sm_120) 上 CUDA graphs 卡死 | **高** | 进行中 | Xid 8 错误；GGML_CUDA_DISABLE_GRAPHS=1 可作为临时方案 |
| [#28581](https://github.com/ggml-org/llama.cpp/issues/28581) — RTX 5060TI Blackwell 上 IQ3_S 乱码 | **中** | 进行中 | Blackwell GPU 上的量化 bug |
| [#27560](https://github.com/ggml-org/llama.cpp/issues/27560) — Windows/Vulkan 上 Qwen3.8-27B 导致 llama-server 崩溃 | **中** | 进行中 | 默认 ctx-checkpoints 下 0xC0000005 崩溃 |
| [#29494](https://github.com/ggml-org/llama.cpp/issues/29494) — repeat_last_n 无界导致数 GB 缓冲区分配 | **中** | 进行中 | DRY 采样器导致服务器 OOM |

**修复中：**
- [#31217](https://github.com/ggml-org/llama.cpp/pull/31217) — 修复 RPC 路径 ggml_nbytes() 整数溢出（越界读写漏洞）
- [#31284](https://github.com/ggml-org/llama.cpp/pull/31284) — 集群维度变化时重新实例化 CUDA graphs (Hopper)
- [#31285](https://github.com/ggml-org/llama.cpp/pull/31285) — SYCL: 拒绝超 VRAM 的设备缓冲区（过度提交临时修复）

## 6. 对应用开发者的意义

- **多模态应用** — LiquidAI LFM3 audio/omni 模型现已支持；`/v1/realtime` 端点新增语音聊天功能，适用于智能体语音交互场景
- **动态资源管理** — 新增 `--models-memory-max` 服务端参数，支持多租户部署时基于内存阈值的自动模型卸载
- **推理控制** — 服务端推理强度暴露能力，使得生产环境中对思维预算的精细控制成为可能
- **MoE 效率** — 新型混合缓存在 Qwen 或 GLM MoE 变体上实现了可测的解码吞吐提升；如运行这些模型建议升级
- **Vulkan 用户** — dim-3 广播修复解决了 llvmpipe 上的 CI 失败；如使用较旧的 AMD/Radeon 硬件（gfx1010），需注意某些 batch size 下的卡死报告

---

*基于 ggml-org/llama.cpp @ b11944 (2026-10-28) 生成*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama digest from English to Chinese. I need to translate ONLY, with no preamble, no explanation, and no markdown fences around the whole output. I should preserve all the Markdown structure exactly.

Let me translate this carefully, keeping all the formatting, URLs, issue numbers, etc. as-is, while making it read naturally in Chinese technical writing style.</think>

# Ollama 速报 — 2026-10-28

## 今日要闻

Ollama 项目在 MLX（Apple Silicon）和 LLM 基础设施方面持续活跃。本周Notable PR 新增了 Kolibri 1 和 Nemotron 3.5 Bolt 支持，同时修复了多个影响 Windows 大提示词、MLX 运行器和模型量化的 bug。桌面版新增空闲流心跳处理，下载断点续传功能也在开发中。

---

## 版本发布与变更

- **本周无新版本** 发布。

---

## 新模型与硬件支持

| 模型 / 硬件 | 说明 | PR / Issue |
|-----------------|-------------|------------|
| **Kolibri 1** | 新增 MLX 支持 | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **Nemotron 3.5 Bolt 74B-A9B** | MLX 支持，包含逐层专家配置和投机解码 | [#19229](https://github.com/ollama/ollama/pull/19229) |
| **LFM3 GGUF** | 修复 llama-server 运行时支持 + GGUF 语音合成 | [#19344](https://github.com/ollama/ollama/pull/19344) |
| **LFM3-1.7B GGUF** | 加载报错："unknown model architecture: 'lfm3'"（v0.40.12） | [#19347](https://github.com/ollama/ollama/issues/19347) |
| **LFM3-Audio** | 需要 MLX 运行时；非 MLX 系统上运行失败 | [#19343](https://github.com/ollama/ollama/issues/19343) |
| **Qwen2.5-Coder 3B** | q2_K/q3_K_S/M/L 量化后的模型完全不可用（代码任务通过率 0%） | [#18252](https://github.com/ollama/ollama/issues/18252) |
| **Decision 模型 via /v1/systemone** | 自 0.40.4 起无 decision head 的 GGUF 模型会被拒绝 | [#19292](https://github.com/ollama/ollama/issues/19292) |
| **Radeon RX 6750 GRE（Navi23）** | AMD GPU 支持需求 | [#19329](https://github.com/ollama/ollama/issues/19329) |

---

## 性能与优化

| 领域 | 变更 | PR / Issue |
|------|--------|------------|
| **MLX 并发生成** | 多个生成请求现可共享投影/FFN 计算；通过 `OLLAMA_NUM_PARALLEL` 配置 | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **GPU 库发现** | 修复 filterOverlapByLibrary 在候选项之间重置 anyMissing 问题，选取支持所有 GPU 的最新库版本 | [#19338](https://github.com/ollama/ollama/pull/19338) |
| **CUDA eager 模块加载** | 回退策略：使用 eager 模式加载 CUDA 模块，解决 Windows（RTX 5060 Ti，16GB 内存）部分卸载崩溃 | [#18978](https://github.com/ollama/ollama/pull/18978) |
| **拉取断点续传** | 修复超过 1 小时的下载中断后无法续传（文件未找到或摘要不匹配） | [#19339](https://github.com/ollama/ollama/pull/19339) |
| **调度器淘汰逻辑** | findRunnerToUnload 在 keep_alive 相同时按模型路径而非大小/最近使用淘汰——统一 keep_alive 配置下可能导致次优淘汰 | [#19326](https://github.com/ollama/ollama/issues/19326) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 详情 | 状态 |
|----------|-------|---------|--------|
| **高** | Windows：大提示词约 15 秒后连接重置 | RTX 3090，24GB 显存，Qwen3.8-27B。未定位到根本原因。 | [#19139](https://github.com/ollama/ollama/issues/19139) |
| **高** | Qwen 3.8 流式输出：tool 调用循环时报 "no user query found in messages"（500） | 20.5 万上下文场景下触发 | [#17778](https://github.com/ollama/ollama/issues/17778) |
| **高** | DeepSeek-V4-Flash：思考过程无限循环 | 同一推理块重复 221 次；仅执行了 4 次 tool 调用 | [#17892](https://github.com/ollama/ollama/issues/17892) |
| **中** | macOS Metal 崩溃 | M 系列上 MLX 运行器 panic；gemma4:e2b-mlx 也受影响 | [#18885](https://github.com/ollama/ollama/issues/18885), [#19278](https://github.com/ollama/ollama/issues/19278) |
| **中** | CUDA MMA 内核崩溃 | "shared object initialization failed"（RTX 5060 Ti Blackwell）加载 clef/clef-flash 时 | [#19122](https://github.com/ollama/ollama/issues/19122) |
| **中** | Ctrl+C 多行模式后 REPL 状态异常 | `"""` 输入中 Ctrl+C 后，会话保持多行模式；后续输入被吞掉 | [#19340](https://github.com/ollama/ollama/issues/19340) |
| **中** | /load 未重置 system prompt | `/show system` 显示旧 prompt，但后续对话未应用 | [#19341](https://github.com/ollama/ollama/issues/19341) |
| **中** | modelfile 序列化 bug | 包含 `"""` + 空格的值生成无法解析的输出 | [#19342](https://github.com/ollama/ollama/issues/19342) |
| **低** | OCI 仓库拉取认证 | 仍缺少私有仓库的正确 OCI-Spec 实现 | [#9215](https://github.com/ollama/ollama/issues/9215), [#4204](https://github.com/ollama/ollama/issues/4204) |
| **低** | DNS64 环境下 HF 拉取失败 | CDN 地址被标记为非公网地址 | [#19345](https://github.com/ollama/ollama/issues/19345) |

---

## 对应用开发者的影响

1. **Windows 大提示词用户**：在 Qwen3.8 上避免 20.5 万以上上下文场景，直至流式输出 bug 修复。可考虑分块或缩减上下文。

2. **MLX 用户**：并发生成现已通过 `OLLAMA_NUM_PARALLEL` 支持。运行多 agent 场景可权衡内存换取更低延迟。

3. **Ollama Cloud 用户**：大代码请求（约 10.7 MiB）触发 HTTP 413——可能需要调整限制。

4. **桌面版用户**：长提示词现在会在空闲 15 秒后显示加载心跳，便于诊断卡顿。

5. **模型作者**：导出 GGUF decision 模型时，确保 Modelfile 中包含 `decision.type` 以兼容 0.40.4+。

6. **拉取行为**：服务器重启后的下载中断现可正确续传（修复待合并至 [#19339](https://github.com/ollama/ollama/pull/19339)）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Simplified Chinese, maintaining all the markdown structure, code blocks, links, and technical terms while using natural technical Chinese.

Let me go through and translate this carefully:

1. **Today's Highlights** - Brief summary
2. **Releases & Breaking Changes** - Version table
3. **New Model & Hardware Support** 
4. **Performance & Optimization**
5. **Stability & Regressions** - Table of issues
6. **What This Means for Application Developers**

I need to keep:
- All markdown headings, tables, lists
- Code blocks and commands
- URLs and links
- Issue/PR numbers and titles
- Version numbers
- Technical terms that are commonly used in Chinese

Let me translate:</think>

# LiteLLM 每日简报 — 2026-10-28

## 今日要点

LiteLLM 在过去 24 小时内发布了四个补丁版本（v1.103.10 到 v1.106.5），均支持 cosign 验证。多个关键修复已合并上线：成本计算方面，批量缓存 token 现已按输入费率计费，Databricks OpenJev 决策模型定价已修正；提供商集成方面，Gemini/Vertex embeddings 现已正确转发配置的超时时间，流式 `/v1/messages` 请求现在能正确上报 token 使用量。

---

## 版本发布与破坏性变更

| 版本 | 备注 | PR |
|------|------|-----|
| **v1.106.5** | 补丁版本，支持 cosign 验证 | — |
| **v1.105.6** | 补丁版本，支持 cosign 验证 | — |
| **v1.104.8** | 补丁版本，支持 cosign 验证 | — |
| **v1.103.10** | 补丁版本，支持 cosign 验证 | — |

验证命令（适用于所有镜像）：
```bash
cosign verify --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub ghcr.io/berriai/litellm:v1.106.5
```

**注意：** eMudhra 根证书修复（#47670）尚未回退到 1.106.x 镜像；详见 [#47904](https://github.com/BerriAI/litellm/issues/47904)。

---

## 新模型与硬件支持

本周期无重大新模型或硬件支持公告。

---

## 性能与优化

- **批量缓存 token 计费** — 批量任务在只有常规输入价格的模型上，现已按输入费率计费缓存提示 token（之前为 $0）。[PR #48697](https://github.com/BerriAI/litellm/pull/48697)
- **Databricks OpenJev 定价** — 决策端点现定价为 0.6 DBU/100万输入 token（约 $0.042/100万）。[PR #48694](https://github.com/BerriAI/litellm/pull/48694)
- **Gemini/Vertex 超时转发** — Embeddings 现已正确遵循 `timeout` 参数（之前硬编码为 300s）。[PR #48690](https://github.com/BerriAI/litellm/pull/48690)，[PR #47305](https://github.com/BerriAI/litellm/pull/47305)
- **Token 计数器改进** — 自定义 tool call 现已被正确计数，不再报错。[PR #48698](https://github.com/BerriAI/litellm/pull/48698)

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | 虚拟密钥的 `BudgetExceededError` 使用过期 spend，而 `/key/info` 显示 spend 低于 max_budget | 待处理 — [#27735](https://github.com/BerriAI/litellm/issues/27735) |
| **高** | 自 v1.99.0 起Spend 日志被静默丢弃——返回 `id: null` 的提供商导致 request_id 变为 "None"，与主键冲突 | 待处理 — [#39749](https://github.com/BerriAI/litellm/issues/39749) |
| **中** | 流式 `/v1/messages` 发送的 `message_start` 中 `usage.input_tokens: 0` | 已关闭 — [#48481](https://github.com/BerriAI/litellm/issues/48481) |
| **中** | `reasoning_effort="none"` 在 Claude 模型上应该禁用思考而非省略 | 待处理 — [#47924](https://github.com/BerriAI/litellm/issues/47924) |
| **中** | BYOK/static-auth MCP 拒绝每个请求的 `x-mcp-{alias}-authorization` 凭证 | 待处理 — [#46664](https://github.com/BerriAI/litellm/issues/46664) |
| **低** | 非对象 JSON body 返回 500 而非 400 | 已关闭 — [#43711](https://github.com/BerriAI/litellm/issues/43711) |
| **低** | Enterprise 许可证消息对 `get_spend_routes` 仅输出到日志，返回裸 500 | 待处理 — [#47011](https://github.com/BerriAI/litellm/issues/47011) |

---

## 对应用开发者的实际影响

1. **虚拟密钥的预算强制不可靠** — 如果使用带有预算限制的团队级虚拟密钥，在过期 spend bug 修复前可能会出现误报 `BudgetExceededError`。请通过 `/key/info` 验证实际 spend。

2. **检查您的批量任务成本** — 如果在无缓存读取价格的模型上运行批量任务，费用可能已被低估。请更新以获取正确的 spend。

3. **Gemini/Vertex embeddings 现已支持超时配置** — 之前被忽略；如需更精细的控制，请确保设置显式超时。

4. **流式 token 使用量现已正确** — Claude Code 流式响应现在会在 `message_start` 中报告准确的输入 token。这影响了依赖早期 token 计数的可观测性/监控设置。

5. **审计您的 1.106.x 部署** — eMudhra 根证书修复仅在 `main` 分支；1.106.x 镜像仍信任已被破解的 emSign ECC Root CA G3。请考虑锁定到 `main` 分支或等待回退版本。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Simplified Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter, not literal word-for-word

Let me translate while keeping everything in structure:

# Unsloth Digest — 2026-10-28

## 1. Today's Highlights

The Unsloth team is pushing forward with Studio enhancements, particularly around the new **Flows** workflow system and **Benchmarks** page. A notable regression affects Qwen3.8-Flash-Next-FP8 where the n-gram table loads without proper weight scaling, causing potential FP8 input issues. On the stability front, Windows users face a significant disk space bug: SQLite WAL/SHM files flood the Recycle Bin during training.

→ Unsloth 团队正在推进 Studio 的功能增强，特别是全新的 **Flows** 工作流系统和 **Benchmarks** 基准测试页面。一个值得注意的回归问题影响了 Qwen3.8-Flash-Next-FP8——n-gram 表加载时没有正确应用权重缩放，可能导致 FP8 输入异常。在稳定性方面，Windows 用户面临一个严重的磁盘空间问题：训练时 SQLite WAL/SHM 文件会涌入回收站。

---

## 2. Releases & Breaking Changes

No new releases in the last 24 hours.

→ 过去 24 小时内无新版本发布。
 
## 3. New Model & Hardware Support

I've identified three significant hardware and model support requests: Intel Arc B580 GPU finetuning on Intel XPU, a new Liquid AI model family (LFM3-1.7B), and community interest in Turboderp's exllamav3 inference engine. The Intel Arc B580 represents a specific GPU compatibility request, while the LFM3 model support indicates broader model ecosystem expansion. The exllamav3 integration request shows community-driven feature prioritization for advanced inference capabilities.

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **LFM3-1.7B** | 新 Liquid AI 模型系列支持请求 | [#15588](https://github.com/unslothai/unsloth/issues/15588) |
| **Intel Arc B580** | 错误报告：请求在 Intel XPU 上进行微调支持 | [#15583](https://github.com/unslothai/unsloth/issues/15583) |
| **ExllamaV3** | 社区请求添加 Turboderp 的 exllamav3 推理引擎 | [#15527](https://github.com/unslothai/unsloth/issues/15527) |

## 4. Performance & Optimization

I've discovered critical issues with the Block Swap offload_layers functionality, specifically with the Qwen3.8-Flash-Next model. The n-gram table remains on the CPU, preventing layer offload from working correctly. Similarly, the FP8 variant has problems loading the n-gram table without weight scaling, causing potential input errors in the key projection. These optimization challenges require immediate attention to ensure proper model deployment and performance.

| 项目 | 状态 | 详情 | 链接 |
|------|--------|--------|------|
| **Block Swap offload_layers** | 进行中 | Qwen3.8-Flash-Next n-gram 表保留在 CPU 上，导致层卸载无法启动 | [#15633](https://github.com/unslothai/unsloth/pull/15633) |
| **FP8 n-gram 表加载** | 进行中 | Qwen3.8-Flash-Next-FP8 加载时缺少 weight_scale，导致 key_proj 收到无效的 fp8 输入 | [#15632](https://github.com/unslothai/unsloth/pull/15632) |
| **llama-bench tab** | 进行中 | 新 Benchmarks 页面集成 llama.cpp 吞吐量测试 | [#12522](https://github.com/unslothai/unsloth/pull

/12522) |
| **Evals tab** | 进行中 | 集成 lm-eval-harness 用于 MMLU、MMLU-Pro、HellaSwag、ARC、GSM8K、TruthfulQA | [#12521](https://github.com/unslothai/unsloth/pull/12521) |
| **Benchmarks 页面** | 进行中 | 支持推测解码、KV 缓存、RAM 卸载的配置扫描 | [#11808](https://github.com/unslothai/unsloth/pull/11808) |
| **SGLang 自动压缩** | 已关闭 | 修复超过上下文长度时的聊天压缩 | [#15434](https://github.com/unslothai/unsloth/pull/15434) |

## 5. Stability & Regressions

I notice several critical issues that need immediate attention. The most pressing concern involves Windows Recycle Bin being flooded with SQLite database files, generating around 40MB per 90-minute training session. Additionally, there are problems with n-gram table loading in the Qwen3.8-Flash-Next-FP8 variant, which could potentially cause invalid input processing. These regression issues require urgent investigation and resolution.

| 严重程度 | 问题 | 状态 | 修复 PR？ |
|----------|-------|--------|---------|
| **高** | Windows 回收站被 `*.db-wal` / `*.db-shm` 文件淹没（每训练 90 分钟约 40MB） | 进行中 | — |
| **高** | Qwen3.8-Flash-Next-FP8 n-gram 表加载时缺少 weight_scale（导致 key_proj 收到无效 fp8 输入） | 进行中 | — |
| **高** | Block Swap 在 Qwen3.8-Flash-Next 上始终无法启动（n-gram 表阻止层卸载） | 进行中 | — |
| **中** | 内存泄漏：Windows 上每次使用 Unsloth Desktop 后有 200-400MB 未释放 | 进行中 | — |
| **中** | Gemma 4 26B MLX 视觉模型产生 `<unused6226>` 标记 | 进行中 | — |
| **中** | Anthropic passthrough `/v1/messages` 上下文溢出时未自动压缩 | 进行中 | — |
| **低** | 下载弹窗显示重命名后的原始图片名 | 进行中 | — |

## 6. What This Means for Application Developers

The upcoming Benchmarks page will revolutionize performance testing by enabling direct configuration sweeps for speculative decoding, KV cache, and offload settings. This eliminates the need for manual scripting to optimize inference configurations.

- **MCP tools are now first-class**: Unsloth Studio's chat functionality can directly invoke MCP tools, facilitating more integrated agent-tool interactions without external dependencies.

- **Flows workflow gains parity**: The Train node now supports hold-out splits, and recipe columns are being re-skinned with Studio components. Preview, Runs, and Publish features are imminent.

- **Monitor Qwen regression**: Qwen3.8-Flash-Next-FP8 users should exercise caution, as the n-gram table loading issue could trigger incorrect inference behavior. Defer production deployment until #15632 is resolved.

- **Windows disk space warning**: Long training sessions on Unsloth Desktop/Studio for Windows require monitoring `$Recycle.Bin`. SQLite WAL file accumulation might consume substantial disk space.

---

## 1. 今日要闻

Unsloth 团队正在推进 Studio 的功能增强，特别是全新的 Flows 工作流系统和 Benchmarks 基准测试页面。一个值得注意的回归问题影响了 Qwen3.8-Flash-Next-FP8——n-gram 表加载时没有正确应用权重缩放，可能导致 FP8 输入异常。在稳定性方面，Windows 用户面临一个严重的磁盘空间问题：训练时 SQLite WAL/SHM 文件会涌入回收站。

## 2. 版本与破坏性变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **LFM3-1.7B** | 新 Liquid AI 模型系列支持请求 | [#15588](https://github.com/unslothai/unsloth/issues/15588) |
| **Intel Arc B580** | 错误报告：请求在 Intel XPU 上进行微调支持 | [#15583](https://github.com/unslothai/unsloth/issues/15583) |
| **ExllamaV3** | 社区请求添加 Turboderp 的 exllamav3 推理引擎 | [#15527](https://github.com/unslothai/unsloth/issues/15527) |

## 4. 性能与优化

| 项目 | 状态 | 详情 | 链接 |
|------|--------|--------|------|
| **Block Swap offload_layers** | 进行中 | Qwen3.8-Flash-Next n-gram 表保留在 CPU 上，导致层卸载无法启动 | [#15633](https://github.com/unslothai/unsloth/pull/15633) |
| **FP8 n-gram 表加载** | 进行中 | Qwen3.8-Flash-Next-FP8 加载时缺少 weight_scale，导致 key_proj 收到无效的 fp8 输入 | [#15632](https://github.com/unslothai/unsloth/pull/15632) |
| **llama-bench 标签页** | 进行中 | 新 Benchmarks 页面集成 llama.cpp 吞吐量测试 | [#12522](https://github.com/unslothai/unsloth/pull/12522) |
| **Evals 标签页** | 进行中 | 集成 lm-eval-harness 用于 MMLU、MMLU-Pro、HellaSwag、ARC、GSM8K、TruthfulQA | [#12521](https://github.com/unslothai/unsloth/pull/12521) |
| **Benchmarks 页面** | 进行中 | 支持推测解码、KV 缓存、RAM 卸载的配置扫描 | [#11808](https://github.com/unslothai/unsloth/pull/11808) |
| **SGLang 自动压缩** | 已关闭 | 修复超过上下文长度时的聊天压缩 | [#15434](https://github.com/unslothai/unsloth/pull/15434) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR？ |
|----------|-------|--------|---------|
| **高** | Windows 回收站被 `*.db-wal` / `*.db-shm` 文件淹没（每 90 分钟训练约 40MB） | 进行中 | — |
| **高** | Qwen3.8-Flash-Next-FP8 n-gram 表加载时缺少 weight_scale（导致 key_proj 收到无效 fp8 输入） | 进行中 | — |
| **高** | Block Swap 在 Qwen3.8-Flash-Next 上始终无法启动（n-gram 表阻止层卸载） | 进行中 | — |
| **中** | 内存泄漏：Windows 上每次使用 Unsloth Desktop 后有 200-400MB 未释放 | 进行中 | — |
| **中** | Gemma 4 26B MLX 视觉模型产生 `<unused6226>` 标记 | 进行中 | — |
| **中** | Anthropic passthrough `/v1/messages` 上下文溢出时未自动压缩 | 进行中 | — |
| **低** | 下载弹窗显示重命名后的原始图片名 | 进行中 | — |

## 6. 这对应用开发者意味着什么

基准测试页面即将推出：全新的 Benchmarks 页面将支持直接配置推测解码、KV 缓存和卸载设置的性能扫描——无需再手动编写脚本来找出最佳推理配置。

- **MCP 工具成为一等公民**：聊天现在可以直接调用 Unsloth Studio 自己的 MCP 工具，实现更紧密的 Agent 到工具集成，无需外部依赖。

- **Flows 工作流日趋完善**：Train 节点现在支持留出分割，Recipe 列已换用 Studio 组件重制。Preview、Runs 和 Publish 功能即将推出。

- **关注 Qwen 回归问题**：如果使用 Qwen3.8-Flash-Next-FP8，n-gram 表加载 bug 可能导致推理行为错误。建议暂缓生产部署，等待 #15632 修复。

- **Windows 磁盘空间警告**：在 Windows 上运行 Unsloth Desktop/Studio 进行长时间训练时，请监控 `$Recycle.Bin`——SQLite WAL 文件堆积可能消耗数十 GB 磁盘空间。</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*