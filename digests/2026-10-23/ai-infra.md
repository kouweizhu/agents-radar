# AI 基础设施日报 2026-10-23

> 生成时间: 2026-10-23 00:52 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this cross-project comparison report from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, version tags, file paths in original form
5. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate this carefully while maintaining the structure.

The content covers:
- Ecosystem overview
- Activity comparison (table)
- Model support race (table)
- Performance frontier (table)
- Layer positioning (table)
- Trend signals with 7 numbered items

Let me go through and translate each section naturally.</think>

# 跨项目对比报告 — 2026-10-23

---

## 1. 生态概览

当下的人工智能推理生态系统的特征是，所有主要项目同时推进正确性加固和能力扩展。**vLLM 与 SGLang** 正处于竞速阶段，争夺在 NVIDIA Blackwell（SM120）和 AMD MI355X 上交付生产就绪的 DeepSeek-V4.1 和 MiMo 支持，两者都在应对关键的 prefix caching 和 PD disaggregation 正确性 bug。**llama.cpp** 继续推进移动端和边缘推理，引入 SYCL 优化和 Hexagon 后端更新，而 **Ollama** 正在解决一个关键的供应链问题并扩展 Apple Silicon 语音能力。**LiteLLM** 面临安全事件需要用户立即采取行动，**Unsloth** 则推进其 "Flows" 节点编辑器，同时修复长期存在的对话存档卡顿问题。

---

## 2. 活动对比

| 项目 | 活跃 Issues | 合并/打开的 PRs | 发布 (24h) | 安全事件 |
|---------|-----------------|-------------------|----------------|----------|
| **vLLM** | 7 个关键/打开 | 20+ (含 DeepSeek-V4.1、ROCmt、Kimi-K2.6) | 无 | — |
| **SGLang** | 5 个关键 | 15+ (DeepSeek-recipe、MegaMoE、SpecForge) | 无 | — |
| **llama.cpp** | 3 个高危 | 10+ (GigaChat 3.5、SYCL、Hexagon) | 无 | — |
| **Ollama** | 3 个关键 | 8+ (Phonon speech、Nemotron) | v0.40.9 | ⚠️ CVE |
| **LiteLLM** | 2 个关键 | 10+ (Responses SSE、token counting) | 无 | ⚠️ 供应链 |
| **Unsloth** | 2 个高 | 12+ (Flows、DSpark Metal、FSDP2) | 无 | — |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4 / V4.1** | ✅ SM120、ROCm | ✅ Recipe encoder、MegaMoE | — | — | — | — |
| **Kimi-K2.6 MLA** | ✅ (q/k/v scales) | — | — | — | — | — |
| **Minimax-M3.1-Flash** | ✅ NVFP4、ROCm | — | — | — | — | — |
| **GigaChat 3.5 (MoE)** | — | — | ✅ | — | — | — |
| **Qwen3.8 (Flash-Next)** | ✅ | ✅ (QSA indexer) | — | — | — | — |
| **GLM-5.3-Flash** | ✅ ROCm | ✅ (chunk indices) | — | — | — | — |
| **Nemotron 3.5 Bolt** | — | — | — | ✅ MLX | — | — |
| **Flint** | — | — | ✅ | — | — | — |
| **InferAll** | — | — | — | — | ✅ | — |

**领先者**：**vLLM 和 SGLang** 在前沿模型支持上 jointly 领先，特别是 DeepSeek-V4.1 变体在 Blackwell 和 AMD GPU 上的支持。**llama.cpp** 在边缘/混合模型上领先（GigaChat 3.5 MoE、Hexagon、Qualcomm）。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **KV Cache / Prefix Caching** | ⚠️ PD-disaggregation bug | ⚠️ FP4 KV transfer 失效 | — | — | — | ✅ DSpark Metal recovery |
| **量化 (MXFP4/NVFP4/FP8)** | ✅ DeepGEMM NVFP4 MegaMoE | ✅ flashinfer_mxfp4 | ✅ OpenCL Q5_K/Q8_0 | — | — | — |
| **MoE 路由** | ✅ DeepGEMM MegaGate | ✅ DeepGEMM MegaGate | — | — | — | ✅ MoE CPU fallback |
| **投机解码** | ✅ Per-request draft retention | ✅ SpecForge MLA drafts | — | — | — | ✅ DSpark recovery |
| **分布式 (TP/PP)** | ✅ TP8 MegaMoE ROCm | — | — | — | — | — |
| **内核融合** | — | — | — | — | — | ✅ QK-norm+RoPE+gate |
| **内存管理** | — | ✅ Engram staging | ✅ HiCache THP fallback | — | — | ✅ CPU embedding offload |
| **批处理 / 调度** | — | ✅ Time-budgeted prefill | — | — | — | ✅ Archive CPU preemption |
| **Flash Attention** | ✅ | ✅ | ⚠️ RDNA4 失效 | — | — | ✅ |

**前沿**：最活跃的性能工作在 **MoE 路由和量化**（vLLM/SGLang 在 DeepSeek 变体上竞争）和 **投机解码**（SGLang SpecForge、Unsloth DSpark）。llama.cpp 在 **边缘内核工作** 上领先（SYCL、Hexagon、OpenCL）。

---

## 5. 层级定位

| 层级 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **训练 / 微调** | — | — | — | — | — | ✅ (Unsloth Studio) |
| **本地运行时** | — | — | ✅ | ✅ (llama.cpp 驱动) | — | ✅ |
| **服务引擎** | ✅ | ✅ | — | — | — | — |
| **API 网关 / 代理** | — | — | — | ✅ | ✅ | — |
| **多云路由** | — | — | — | — | ✅ | — |

**定位**：**vLLM 和 SGLang** 作为 **高性能服务引擎** 直接竞争，针对部署在 Kubernetes 上的 PD disaggregation 场景。**llama.cpp** 占据 **本地/嵌入式运行时** 层（CLI、绑定、移动端）。**Ollama** 作为 **面向用户的封装层**，底层基于 llama.cpp，提供云同步。**LiteLLM** 纯定位为 **API 网关/路由层**，不包含推理引擎。**Unsloth** 独特地拥有 **微调 + 推理**，通过 Unsloth Studio 和新的 "Flows" 流水线编辑器实现。

---

## 6. 趋势信号

### 应用/智能体开发者应关注

1. **Prefix Caching 正确性危机**：vLLM 和 SGLang 在 PD disaggregation 下的 prefix caching 都有关键 bug。在修复前，避免在 prefill/decode 分离时使用自动 prefix caching。这会影响任何多租户或高吞吐量部署。

2. **DeepSeek-V4.1 是主战场**：三个项目（vLLM、SGLang、Unsloth）正竞相交付生产就绪的 DeepSeek-V4.1 支持。预计快速迭代，可能存在不稳定。未来 7-14 天关注回归修复。

3. **量化稳定性仍未解决**：llama.cpp 的 RDNA4 Flash Attention bug 和 SGLang 的 FP4 KV transfer bug 都表明，跨 AMD 和 NVIDIA 子架构的量化推理正确性仍然脆弱。在投产前充分测试。

4. **供应链风险真实存在**：LiteLLM 受损的 v1.107.0 包（凭证窃取器）表明，即使成熟的项目也是攻击目标。验证你的依赖来源，考虑锁定已知可用的版本。

5. **边缘推理正在加速**：llama.cpp 的 SYCL +19% 收益和 Hexagon 后端更新表明，Intel Arc 和 Qualcomm 边缘设备的关注度正在回升。如果你是边缘部署，llama.cpp 正在巩固其领先优势。

6. **投机解码走向主流**：SGLang 的 SpecForge MLA drafts 和 Unsloth 的 DSpark recovery 表明，基于 draft 的加速正从研究走向生产功能。关注更广泛可用性。

7. **Apple Silicon 是重点目标**：Ollama 的 Phonon speech 和 Unsloth 的 DSpark Metal recovery 表明，M 系列优化投入正在增长。macOS 推理不再是次要关注点。

---

*跨项目分析基于 2026-10-23 的 GitHub 活动整理。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the provided vLLM Digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
4. Use natural technical Chinese, register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure:

Title: vLLM Digest — 2026-10-23

Let me translate section by section, maintaining the exact formatting:</think>

# vLLM 速报 — 2026-10-23

## 1. 今日要闻

vLLM 开发持续推进，后端工作在 ROCm AMD GPU 和 NVIDIA Blackwell (SM120) 方面取得重要进展。社区正在积极解决 disaggregated serving 中 prefix caching 的正确性问题，以及 speculative decoding 的相关问题，同时推进 MiniMax-M3.1-Flash 和 Kimi-K2.6 MLA 量化的模型支持。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **Minimax-M3.1-Flash** | 新模型支持，包含 NVFP4 KV cache、NVFP4 indexer、DeepGEMM NVFP4 MegaMoE、DSpark speculative decoding 以及 ROCm (gfx950/gfx942) 路径 | [#63232](https://github.com/vllm-project/vllm/pull/63232) |
| **Kimi-K2.6 MLA 量化** | 为 Kimi-K2.6 MLA 量化加载 q/k/v scales，采用 compressed-tensors KV-cache 方式 | [#63097](https://github.com/vllm-project/vllm/pull/63097) |
| **DeepSeek-V4.1 SM120 支持** | 修复 SM120 sparse 后端的 64-token kernel blocks — 解决 block-size 协商错误 | [#60762](https://github.com/vllm-project/vllm/pull/60762) |
| **Qwen3.8-2.4T-A95B (gfx950/MI355X)** | ROCm 性能优化跟踪：amd/Qwen3.8-2.4T-A95B-Quark-MXFP4 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **GLM-5.3-Flash ROCm** | Chunk KDA prefill 优化 — 传递预计算的 chunk indices 以避免 GPU→CPU 同步 | [#63072](https://github.com/vllm-project/vllm/pull/63072) |

---

## 4. 性能优化

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **FlashInfer TRT-LLM MoE Workspace 复用** | 跨顺序层和更小 batch 复用 FlashInfer TRT-LLM MoE scratch；按最大行数 dimension，由 `VLLM_FLASHINFER_MOE_USE_WORKSPACE` 控制 | [#62948](https://github.com/vllm-project/vllm/pull/62948) |
| **DeepSeek-V4.1 Decoder Replay Graphs** | 在 model graphs 的 capture stream 上捕获 decoder replay graphs，以复用共享 graph pool 中 model graphs 的空闲 blocks，而非预留第二个 pool | [#63155](https://github.com/vllm-project/vllm/pull/63155) |
| **ROCm TP8 MegaMoE 后端** | 为 MiMo-V2.6-Pro 在 gfx950 TP8/DP1 上实现 `aiter_mimo_mega_moe_tp` 草案 | [#63039](https://github.com/vllm-project/vllm/pull/63039) |
| **ROCm 融合 QK-norm+RoPE+gate** | 为 Qwen3-Next/Qwen3.5 启用 ROCm 融合 kernel（CUDA 门控） | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **MRV2 Triton 验证延迟** | 将 Triton 可用性检查从 VllmConfig 构造延迟到 worker 启动 — 允许 CPU 前端为 GPU 部署构建 configs | [#62576](https://github.com/vllm-project/vllm/pull/62576) |
| **MRV2 自定义 Speculator** | Model Runner V2 的声明式 speculator API（基于 Config 类的可配置方式） | [#63205](https://github.com/vllm-project/vllm/pull/63205) |
| **语音活动检测 (VAD)** | 集成 VAD 用于 ASR/Whisper 模型，减少长静音时的幻觉 | [#46126](https://github.com/vllm-project/vllm/pull/46126) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | **#60174** — DFlash2/DSpark + prefix caching 在 Qwen3.8-27B (TP=1) 上 cache hit 后输出损坏 | 0.29 和 MTP 上正常，0.30/0.31 失败 | Open |
| **高** | **#61160** — 共享前缀 KV 重用导致的跨请求上下文污染 (PD disaggregation) | 自动 prefix caching 导致"串台" — 响应包含其他请求的内容 | Open |
| **高** | **#61229** — 远程 READ 在 flight 时 KV blocks 被释放 | NIXLConnector 在 decode 消费时释放 KV — 静默损坏 | Open |
| **中** | **#62776** — Qwen3.8-Flash-Next 超过约 2048 tokens 后 prompt 被截断 | `indexer_budget`（默认 2048）之后的内容对模型不可见 | Open |
| **中** | **#40926** — V1 engine + MTP + GLM-5.1 在持续流量下 workers 挂起 | Sample_tokens RPC 超时，TP=8 下 EngineDeadError | Open |
| **中** | **#60845** — CUDA graphs 在 TP ranks 间使用 fully-sharded fused-MoE LoRA 时死锁 | Qwen3.5 兼容的 35B-A3B MoE，TP=2/4 偶发死锁 | Closed |
| **中** | **#52244** — MTP spec decoding 下 Hybrid GDN prefix-cache 未命中 | 缓存 prompt 的 replay 无法达到预期深度，某些长度完全未命中 | Open |
| **低** | **#38696** — Qwen3.5 使用 json_schema 的结构化输出空格乱码 | 使用 `response_format` 为 json_schema 时，输出包含乱码空格 | Open |

---

## 6. 应用开发者需注意的事项

- **Prefix Caching 风险警示**：若在 disaggregated serving（prefill/decode 分离）中使用自动 prefix caching，请注意潜在的跨请求污染 (#61160) 和 KV 释放竞态条件 (#61229)。在修复上线前，可考虑禁用 prefix caching (`--no-enable-prefix-caching`) 作为临时方案。

- **Blackwell 上的 DeepSeek-V4.1**：SM120 (GB200, GB10) 用户随着 64-token kernel block 修复 (#60762) 将获得更好的稳定性。

- **Responses API 完整性**：`/v1/responses` 端点现在会正确返回已完成响应的 `completed_at` 时间戳 (#63234) — OpenAI SDK 客户端将收到正确的时间戳。

- **Tool Calling 强制执行**：`max_tool_calls` 现在在 Responses API 中对内置工具正确强制执行 (#47112)。

- **ROCm AMD 用户**：Qwen3.8 和 GLM-5.3 在 MI355X (gfx950) 上的优化工作持续进行，预计将在后续版本中带来性能提升。

- **自定义 Speculator**：Model Runner V2 现在支持通过声明式配置类 (#63205) 实现自定义 speculator — 适用于研究和专业化推理场景。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English SGLang digest into Chinese, following specific rules:
- Only output the translation, no preamble
- Preserve markdown structure exactly
- Keep URLs, numbers, code, identifiers as-is
- Use natural technical Chinese register

Let me translate while maintaining the structure:

Key translations to consider:
- "Digest" → 简报
- "Highlights" → 要闻
- "Releases & Breaking Changes" → 发布与重大变更
- "New Model & Hardware Support" → 新模型与硬件支持
- "Performance & Optimization" → 性能与优化
- "Stability & Regressions" → 稳定性与回归问题
- "Critical (Correctness)" → 关键（正确性问题）
- "What This Means for Application Developers" → 对应用开发者的影响

Let me go through each section:</think>

# SGLang 简报 — 2026-10-23

## 1. 今日要闻

SGLang 的 DeepSeek-V4.1 集成持续完善，多个 PR 推进了基于 recipe 的聊天编码流程和 MegaGate 路由优化。团队正在处理 CI 不稳定问题（issue #42752 有 122 条评论），同时修复 FP4 KV 缓存传输和 PD  disaggregation 中的关键正确性 bug。一项新的 RFC 提议为共置 TP 服务实现时间预算预填充准入机制。

---

## 2. 发布与重大变更

| 项目 | 详情 |
|------|---------|
| **近期无发布** | — |

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | 参考 |
|------------------|--------|-----|
| **DeepSeek-V4 / V4.1** 搭配 `deepseek-recipe` 编码器 | 新增 `--chat-encoding-backend recipe` 选项，集成官方编码器 (#45315, #45907) | [#45315](https://github.com/sgl-project/sglang/pull/45315) |
| **SM120** (RTX PRO 6000, RTX 5090) | FlashInfer `b12x` NVFP4 GEMM 现通过自动后端默认选中 | [#38170](https://github.com/sgl-project/sglang/pull/38170) |
| **SpecForge MLA drafts** | DFlash 现通过目标 DeepSeek MLA attention 提供 SpecForge drafts 服务 | [#44676](https://github.com/sgl-project/sglang/pull/44676) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **DeepSeek-V4.1 MegaMoE** | DeepGEMM `bf16_mega_gate` 集成，单内核 gate GEMM + 路由 | [#43262](https://github.com/sgl-project/sglang/pull/43262) |
| **Mamba2 投机解码** | 紧凑投机状态回放，通过替换完整快照为紧凑输入记录来减少内存 (`--enable-linear-replayssm-spec`) | [#41968](https://github.com/sgl-project/sglang/pull/41968) |
| **DeepSeek-V4.1 Engram staging** | 可选的调度器侧从共享主机表暂存 V4.1 engram 行（非 ATS GPU 的 PCIe 带宽修复） | [#45921](https://github.com/sgl-project/sglang/pull/45921) |
| **HiCache hugepage 回退** | 预留 hugepage 不可用时回退到透明大页 (THP) | [#45494](https://github.com/sgl-project/sglang/pull/45494) |

---

## 5. 稳定性与回归问题

### 关键（正确性问题）
| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| **FP4 KV 块尺度在 PD 传输中丢失** — 打包的 KV 已发送但块尺度未发送；decode 使用垃圾尺度 | 🔴 关键 | 待处理 [#45866](https://github.com/sgl-project/sglang/issues/45866) |
| **Qwen3.8-Flash-Next QSA 索引器状态泄露** — 撤回的请求恢复时带有其他请求的状态 | 🔴 关键 | 待处理 [#45864](https://github.com/sgl-project/sglang/issues/45864) |
| **Kimi-K3 DCP a2a 在 2 节点 GB300 上解码输出乱码**；`NCCL_GRAPH_REGISTER=0` 可解决 | 🔴 关键 | 待处理 [#45367](https://github.com/sgl-project/sglang/issues/45367) |
| **Kimi-K3 flashinfer_mxfp4 计算错误的激活值** — SM90 上使用 SwiGLU 而非 SiTU | 🔴 关键 | 待处理 [#45755](https://github.com/sgl-project/sglang/issues/45755) |

### 高
| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| **GLM-5.3-Flash SM120 FA4 混合 extend 时崩溃** (CUDA-graph capture)；Triton 后端可工作 | 🟠 高 | 待处理 [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **FP8 fused MoE swap_ab 编译失败** Triton 3.9 上 rank-0 尺度索引问题 | 🟠 高 | 待处理 [#45887](https://github.com/sgl-project/sglang/issues/45887) |
| **LMCache 忽略 per-request cache_salt** — 多租户场景下破坏租户隔离 | 🟠 高 | 待处理 [#37160](https://github.com/sgl-project/sglang/issues/37160) |

### CI / 基础设施
| 问题 | 状态 |
|-------|--------|
| **测试不稳定 / CI 基础设施故障** — 跨 PR Test Base/Extra 追踪（122 条评论） | 待处理 [#42752](https://github.com/sgl-project/sglang/issues/42752) |
| **AMD disaggregation 测试失败** — UCX 不可达 (#45850)，Mooncake v0.3.14 问题 (#45849) | 待处理 [#45850](https://github.com/sgl-project/sglang/issues/45850), [#45849](https://github.com/sgl-project/sglang/issues/45849) |
| **test_basic_sanity_dspark decode vs prefill logprob 不匹配** — 自 c64886f9e3 以来的确定性回归 | 待处理 [#45846](https://github.com/sgl-project/sglang/issues/45846) |

---

## 6. 对应用开发者的影响

1. **DeepSeek-V4/V4.1 用户**：新的 `deepseek-recipe` 编码器后端（`--chat-encoding-backend recipe`）提供了与官方 DeepSeek API 的对齐。建议迁移聊天模板以在生产环境中使用新后端。

2. **SM120 (RTX PRO 6000 / RTX 5090) 用户**：FlashInfer `b12x` NVFP4 GEMM 现已自动选中—请验证工作负载是否受益于此切换；无需操作。

3. **多租户 / LMCache 用户**：`cache_salt` 隔离 bug（#37160）意味着缓存的前缀可能在租户间泄露。在修复前，避免在多租户环境中使用 LMCache。

4. **PD disaggregation 用户**：FP4 KV 缓存传输当前损坏—尺度未发送到 decode worker。在补丁发布前，避免将 `--kv-cache-dtype fp4_mx_block16` 与 PD disaggregation 一起使用。

5. **Kimi-K3 GB300 用户**：如遇解码输出乱码问题，可设置 `NCCL_GRAPH_REGISTER=0` 作为临时解决方案。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the provided English digest about llama.cpp into Simplified Chinese, following specific rules about translation. Let me carefully translate this while preserving the structure and technical terminology.

Key points:
1. Only output the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, code, project names, PR/issue numbers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)
5. Don't translate literally - use natural technical Chinese

Let me translate section by section:

Title: # llama.cpp Daily Digest — 2026-10-23

Section 1: Today's Highlights
- The most significant development today is a new SYCL optimization that delivers **+19% prompt eval throughput** on Intel Arc Pro B70s by improving the `ggml_sycl_comm_exchange()` function. In parallel, AMD users on RDNA4 hardware face two new correctness bugs: Flash Attention produces garbage output at long context with head_dim 256, and Vulkan continues to cause GPU firmware crashes on Pixel 11 Pro. A regression affecting first-inference TTFT for MoE models (10s → 60s+) remains open after PR #30449.

Section 2: Releases & Breaking Changes

Section 3: New Model & Hardware Support
- GigaChat 3.5 (432B total / 28B active MoE) - New Mixture-of-Experts model with DeepSeek-V3-style backbone (MLA + MoE), hybrid attention
- Flint model (FlintForCausalLM) - Added HF→GGUF conversion, tokenizer, and inference with sliding/full attention
- Soprano audio model - New mtmd audio generation support for ekwek/Soprano-1.1-80M
- Hexagon backend - Added CONV2D and CEIL ops for Qualcomm Hexagon


- OpenCL Q5_K / Q8_0 - New optimized GEMM kernels for Adreno X1 (bin kernels)
- OpenCL Q2_K - Initial Q2_K quantization support added

I'll focus on the new hardware and optimization support. The OpenCL kernels for Adreno X1 and initial Q2_K quantization represent significant advancements in mobile GPU acceleration. These improvements enable more efficient computation for neural network models on mobile devices, particularly for large language models with complex architectures.

The performance optimizations highlight substantial gains in computational efficiency. The SYCL tensor-split mode shows a remarkable 19% improvement in prompt evaluation, while SYCL tensor-split loading demonstrates reduced computational overhead. The CUDA MoE improvements address NaN sanitization, critical for maintaining computational stability in mixture-of-experts models.

Key stability challenges include GPU firmware crashes on specific hardware, particularly with Vulkan and Pixel 11 Pro. The AMD RDNA4 users experience issues with Flash Attention during long-context processing, while MoE TTFT regression significantly impacts inference speed.

Practical recommendations emphasize careful hardware and backend selection. RDNA4 users should exercise caution with Flash Attention in long contexts, mobile developers should be aware of Vulkan instability, and MoE model users should be prepared for potential slow first-token scenarios.

The new server feature offers promising memory optimization through prompt prefix sharing, potentially reducing overall memory consumption. Upcoming model support for GigaChat 3.5 and Flint models expands the ecosystem's capabilities.</think>

# llama.cpp 每日简报 — 2026-10-23

## 1. 今日焦点

今天最重要的进展是 Intel Arc Pro B70s 上通过优化 `ggml_sycl_comm_execute()` 函数实现了 **+19% 提示词评估吞吐量** 的新 SYCL 优化。与此同时，RDNA4 硬件上的 AMD 用户遇到了两个新的正确性 bug：Flash Attention 在长上下文场景（head_dim 256）下产生垃圾输出，以及 Vulkan 继续导致 Pixel 11 Pro 上的 GPU 固件崩溃。PR #30449 引入的 MoE 模型首次推理 TTFT 回归问题（10s → 60s+）仍未解决。

---

## 2. 版本发布与破坏性变更

- **今日无重大版本发布或破坏性变更。**

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 描述 | PR/Issue |
|-------------|------|----------|
| **GigaChat 3.5** (总计 432B / 活跃 MoE 28B) | 新型混合专家模型，采用 DeepSeek-V3 风格骨干网 (MLA + MoE)，混合注意力机制 | [#25342](https://github.com/ggml-org/llama.cpp/pull/25342) |
| **Flint 模型** (FlintForCausalLM) | 新增 HF→GGUF 转换、分词器和推理支持，兼容滑动窗口/全注意力 | [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) (已合并) |
| **Soprano 音频模型** | 新增 mtmd 音频生成支持，用于 ekwek/Soprano-1.1-80M | [#28607](https://github.com/ggml-org/llama.cpp/pull/28607) |
| **Hexagon 后端** | 为高通 Hexagon 添加 CONV2D 和 CEIL 算子 | [#30995](https://github.com/ggml-org/llama.cpp/pull/30995)、[#31006](https://github.com/ggml-org/llama.cpp/pull/31006) |
| **OpenCL Q5_K / Q8_0** | Adreno X1 新型优化 GEMM 内核（bin 内核） | [#31002](https://github.com/ggml-org/llama.cpp/pull/31002)、[#31003](https://github.com/ggml-org/llama.cpp/pull/31003) |
| **OpenCL Q2_K** | 新增 Q2_K 量化支持（初始版本） | [#30999](https://github.com/ggml-org/llama.cpp/pull/30999) |

---

## 4. 性能与优化

| 领域 | 改进 | 详情 | PR |
|------|------|------|-----|
| **SYCL 张量分割模式** | **+19% 提示词评估** | 快速 `ggml_sycl_comm_exchange()` 在 Intel Arc Pro B70s 上实现 -sm 张量与 -sm 层的性能对等 | [#30956](https://github.com/ggml-org/llama.cpp/pull/30956) |
| **SYCL 张量分割加载** | 降低开销 | 新增 `set_tensor_2d` 实现单次上传的张量分割权重加载 | [#30358](https://github.com/ggml-org/llama.cpp/pull/30358) |
| **CUDA MoE** | NaN 清理 | top-k 内核中的偏置后 NaN 处理，防止错误的专家选择 | [#31005](https://github.com/ggml-org/llama.cpp/pull/31005) |
| **MoE 缓存调优** | CPU 后备支持 | 新增 `--moe-cache-cpu-share` 参数以在 CPU 上运行未命中的专家，并附带调优脚本 | [#30966](https://github.com/ggml-org/llama.cpp/pull/30966) |
| **CUDA 图抖动** | 预防机制 | 带有限缓存的图形状键控，支持多个 CUDA 图形状 | [#31004](https://github.com/ggml-org/llama.cpp/pull/31004) |
| **服务端提示词效率** | 内存优化 | 通过 `--slot-attach` 在 slots 间共享提示词前缀单元，减少 KV 缓存重复 | [#30970](https://github.com/ggml-org/llama.cpp/pull/30970) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 是否有修复？ |
|----------|------|------|---------------|
| **高** | **Flash Attention (CUDA/HIP) 垃圾输出** — 长上下文预填充在 gfx1201 (RDNA4) head_dim 256 环境下产生损坏的 logits，首个 token 立即为 EOS | [#30884](https://github.com/ggml-org/llama.cpp/issues/30884) (OPEN) | 否 |
| **高** | **Vulkan GPU 固件崩溃** — 在 Pixel 11 Pro（Imagination PowerVR C-Series，subgroupSize 128）上处理提示词时崩溃 | [#28214](https://github.com/ggml-org/llama.cpp/issues/28214) (OPEN，已停滞) | 否 |
| **高** | **MoE TTFT 回归** — 大型 CPU 驻留 MoE 权重首次推理 TTFT 从 10s 增至 60s+；通过回滚 PR #30449 确认 | [#30793](https://github.com/ggml-org/llama.cpp/issues/30793) (OPEN) | 否 |
| **中** | **WEBUI 音频上传** — OGG 音频文件在 webui 中上传失败 | [#24164](https://github.com/ggml-org/llama.cpp/issues/24164) (OPEN，已停滞) | 否 |
| **低** | **分词器空格处理 bug** — 对 Gemma 4 词表移除标点前的空格（!?.,）以及 "'s"/"'re" | [#30905](https://github.com/ggml-org/llama.cpp/issues/30905) (CLOSED) | 不适用 |
| **低** | **移动端 webui 缩放** — 手机 webui 上 tg 读数比桌面端高 10% | [#25097](https://github.com/ggml-org/llama.cpp/issues/25097) (OPEN，已停滞) | 否 |

---

## 6. 这对应用开发者意味着什么

1. **SYCL 用户**（Intel Arc/Ponte Vecchio）：今日构建版本已包含 +19% 提示词评估改进——如果您使用张量分割模型分发，请升级。

2. **AMD RDNA4 用户**（RX 9070 XT、R9700）：在 head_dim 256 长上下文场景下避免使用 Flash Attention，直至 #30884 修复；可考虑回退到 HIP 后端。

3. **移动端/嵌入式开发者**：Tensor G6 / Pixel 11 Pro 上的 Vulkan 不稳定——目前不要在这些设备上部署基于 Vulkan 的推理。

4. **MoE 模型用户**（如 Mixtral、DeepSeek-V3）：大型模型在 CPU 上若遇到首 token 缓慢问题，请注意这已知为回归问题（#30793）。

5. **服务端运维**：新推出的 `--slot-attach` 功能可在多轮对话中共享系统提示词前缀，从而减少内存占用——请评估是否适用于您的部署场景。

6. **新模型支持**：GigaChat 3.5 和 Flint 模型现已支持转换和推理。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama digest into Chinese. Let me analyze the content and translate it while preserving the structure and using natural technical Chinese.

Key points:
1. Keep all headings, tables, lists, formatting
2. Keep all URLs, issue numbers, version tags, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. No preamble, no explanation, no markdown fences
5. Output ONLY the translation

Let me translate section by section:

## 1. Today's Highlights
今日要闻

## 2. Releases & Breaking Changes
发布与重大变更

## 3. New Model & Hardware Support
新模型与硬件支持

## 4. Performance & Optimization
性能与优化

## 5. Stability & Regressions
稳定性与回归问题

## 6. What This Means for Application Developers
这对应用开发者意味着什么

Let me translate all the content now:</think>

# Ollama 速报 — 2026-10-23

## 1. 今日要闻

Ollama v0.40.9 发布语音生成能力，基于 Apple Silicon 的 Phonon 实现，支持 `ollama run` 语音播放和通过 `/v1/audio/speech` 流式输出音频。与此同时，关键问题依然存在：Ollama Cloud Pro 用户报告失败率高达 95%（#15453），且 Go 二进制文件中仍存在多个 CVE 漏洞未修复（#16033、#19162）。

## 2. 发布与重大变更

| 版本 | 变更 | 说明 |
|---------|--------|-------|
| **v0.40.9-rc3 → v0.40.9** | 基于 Phonon 的语音生成（Apple Silicon） | `ollama run` 现可播放模型输出的语音；`/v1/audio/speech` 端点可用于流式语音合成 |
| **Go 工具链** | 多个严重/高危 CVE 漏洞 | 问题 #19162 — 需升级至 Go 1.26.9+ 以修复 1 个严重漏洞 + 11 个高危漏洞 |

**迁移注意**：Gradium Phonon 检查点现使用 GA 格式 — 旧的预发布路径将被拒绝。详见 PR #19227。

## 3. 新模型与硬件支持

- **Apple Silicon 语音**：Phonon 驱动的 TTS，支持本地模型和云端响应（[文档](https://docs.ollama.com/capabilities/speech)）
- **MLX**：新增 Nemotron 3.5 Bolt 74B-A9B 支持，包含每层专家配置和 LiLiCorr 投机解码（PR #19229）
- **Snapdragon X Elite**：功能请求已开放 — 需 NPU + GPU 加速支持（#5360，68 👍）
- **Apple Foundation Models**：提议集成原生 Swift `FoundationModels` 框架（#19116）

## 4. 性能与优化

| 领域 | 状态 | 详情 |
|------|--------|---------|
| **Vulkan/AMD RADV** | **回归** | 启用 prompt 缓存后，第二次请求吞吐量暴跌约 30 倍（RX 6600 XT）— #19201 |
| **MLX nvfp4** | **回归** | 持续单槽负载下请求卡在 processed=total-1；仅 SIGTERM 可恢复（#18505） |
| **macOS MLX** | **回归** | v0.40.0 中出现"最大线程数" panic；降级至 0.35.1 可解决（#18846） |
| **dspark 选项** | **提议中** | 投机解码加速功能请求（#17016） |
| **KV 缓存** | **功能请求** | 支持通过 Modelfile 配置 KV_CACHE_TYPE（#16245） |

## 5. 稳定性与回归问题

### 严重
| 问题 | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **Ollama Cloud Pro 95% 失败率** (#15453) | 严重 | 待处理 | — |
| **Go 二进制中的 CVE 漏洞** (#16033, #19162) | 严重 | 待处理 | — |
| **10 月 10 日以来大规模生成问题** (#18980) | 严重 | 待处理 | — |

### 高
| 问题 | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **第二次 `ollama run` 卡死** — Raspberry Pi 5 (#18796) | 高 | 待处理 | — |
| **Windows：大 prompt 导致连接重置** (#19139) | 高 | 待处理 | — |
| **MLX 线程限制 panic** (#18846) | 高 | 已关闭（0.40.0 回归） | — |
| **Vulkan prompt 缓存回归** (#19201) | 高 | 待处理 | — |

### 已合并的重要修复
- **#19226**：修复 Gemma4 工具调用中尾部噪声导致的解析失败
- **#19228**：保留 Qwen3 Coder 参数中的字面 `</function>` 标签
- **#18438**：修复间歇性"模型未找到"错误
- **#19225**：在 Responses 流中保留失败（发送 `response.failed` 事件）

## 6. 这对应用开发者意味着什么

1. **macOS MLX 避免使用 v0.40.0** — 降级至 0.35.1 或如使用 MLX 模型的 Apple Silicon 用户请等待修复
2. **AMD Vulkan 上的 prompt 缓存已损坏** — 禁用 prompt 缓存或在 RADV GPU 上避免第二次相同请求，直至 #19201 解决
3. **云端模型的 schema 验证不可靠** — #12362：JSON 回复 schema 被云端模型忽略；在客户端验证输出
4. **Go CVE 补丁待发布** — 扫描结果显示 36 个漏洞；在安全敏感环境中避免部署当前二进制文件
5. **工具调用边缘情况已改进** — PR #19226 和 #19228 解决了 Gemma4 噪声和 Qwen3 字面标签的解析失败问题
6. **新语音 API 已可用** — `/v1/audio/speech` 现可为 Apple Silicon 应用流式传输 TTS

---

*基于 GitHub 数据生成 — ollama/ollama（2026-10-23）*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the digest into Simplified Chinese, maintaining the exact Markdown structure. I need to:
- Keep all headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, numbers, dates, code spans, code blocks
- Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
- Use natural technical Chinese (the register of a Chinese developer newsletter)
- Output ONLY the translation, no preamble or explanation

Let me translate while preserving the structure:</think>

# LiteLLM 每日简报 — 2026-10-23

## 1. 今日要闻

**关键安全公告**：LiteLLM 的 v1.107.0 版本在 PyPI 和 Docker 仓库中被发现存在恶意代码 — 包含凭证窃取器（`cook.pth`）和 RCE 加载器（`sitecustomize.py`），由一个仿冒仓库构建。PyPI 已下架该包，Docker 镜像也已撤回。所有用户必须立即升级到安全版本并轮换凭证。同时，项目继续推进功能改进，包括 Responses SSE 帧处理修复、token 计数支持新的 OpenAI 图片细节值，以及 CA 证书更新以移除受损的 eMudhra 根证书。

---

## 2. 发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|------|------|
| **暂无新版本** | 过去 24 小时内无发布 | — |
| **安全公告** | v1.107.0 已撤回 — 包含凭证窃取器 + RCE 载荷。用户必须轮换 API 密钥并升级 | [Issue #47826](https://github.com/BerriAI/litellm/issues/47826) |
| **CA 证书更新** | 升级 `grpcio` 至 1.84.1 和 `boto3` 至 1.43.117，以移除受损的 eMudhra 根证书 | [PR #47969](https://github.com/BerriAI/litellm/pull/47969) |

---

## 3. 新模型与硬件支持

| 模型/后端 | 详情 | 链接 |
|-----------|------|------|
| **InferAll provider** | 新增为 OpenAI 兼容 provider — SDK 和 proxy 中现已支持 `inferall/<model>` | [PR #47890](https://github.com/BerriAI/litellm/pull/47890) |
| **Exa 搜索 API** | 更新了 Exa 搜索参数、content 选项和计费方式，对接当前 API | [PR #46525](https://github.com/BerriAI/litellm/pull/46525) |
| **"original" 图片细节** | OpenAI 新的图片 `detail: "original"` 值现已在 `token_counter` 中支持 | [Issue #47327](https://github.com/BerriAI/litellm/issues/47327) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **日志回调** | 日志回调超时时，现已保留 spend 账务记录 | [PR #47386](https://github.com/BerriAI/litellm/pull/47386) |
| **分层配置** | 新的 `Layered` derive 替代手写的 `ParamSpec` 行 — 简化配置处理 | [PR #47978](https://github.com/BerriAI/litellm/pull/47978) |
| **通配符模型列表** | 在 proxy 常规设置中暴露 — 改进模型发现 | [PR #47979](https://github.com/BerriAI/litellm/pull/47979) |
| **PostgreSQL 逐模型预算** | 预算读取路径现支持 PostgreSQL 降级，用于多副本部署 | [PR #25374](https://github.com/BerriAI/litellm/pull/25374) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 |
|----------|------|------|------|
| **严重** | **v1.107.0 供应链被攻击** — 凭证窃取器 + RCE | 进行中 | 轮换凭证；避免使用 v1.107.0 |
| **高** | 升级至 v1.88.x 后，UI 登录重定向到内部 Docker IP | 进行中 | — |
| **高** | `POST /team/delete` 留下虚拟密钥在缓存中仍可认证 | 进行中 | — |
| **中** | 超时错误显示 "None seconds" 而非实际超时值 | 进行中 | — |
| **中** | 基于延迟的路由退化为随机选择（竞态条件） | 进行中 | — |
| **中** | Azure AI FLUX 模型在 v1.80.15 升级后失败 | 进行中 | — |
| **中** | `token_counter` 拒绝 `"original"` 图片细节，导致预检查失败 | 进行中 | — |
| **中** | PostgreSQL max_connections 耗尽导致所有用户 API 密钥不可用 | 进行中 | — |
| **低** | User-Agent 头查找区分大小写（应为大小写不敏感） | 进行中 | [PR #41012](https://github.com/BerriAI/litellm/pull/41012) |

---

## 6. 这对应用开发者意味着什么

1. **立即行动**：检查已部署的 LiteLLM 版本。如果使用的是 v1.107.0，请立即升级并轮换可能已暴露的 API 密钥。受感染的包已从 PyPI 和 Docker Hub 移除。

2. **关注超时行为**：`"Connection timed out after None seconds"` 错误表明超时处理存在回归 — 做好重试准备或考虑固定到已知稳定的版本。

3. **模型路由**：如果使用多部署的基于延迟的路由，注意竞态条件可能导致随机选择。在修复上线前，监控路由行为。

4. **预算核算**：超时的日志回调不再导致 spend 记录丢失 — 这提高了成本追踪集成的可靠性。

5. **音频转录**：不支持的 provider 现返回清晰的 HTTP 400 而非通用的 500，简化了调试。

6. **新 provider**：InferAll 现可用作统一端点，支持开放和付费模型 — 如果需要单一 API 密钥访问多个模型来源会很方便。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content to Simplified Chinese
2. Keep the Markdown structure exactly as-is
3. Keep technical terms, code references, URLs, issue numbers as-is
4. Use natural technical Chinese register

Let me go through section by section and translate while maintaining the structure.

Let me translate:

# Unsloth Digest — 2026-10-23

→ # Unsloth 要闻 — 2026年10月23日

## 1. Today's Highlights

→ ## 1. 今日要闻

The Unsloth team is pushing forward with multiple stability fixes and new features. Notable PRs address DeepSeek-V4.1 context scratch memory accounting when flash attention is disabled, Metal OOM recovery for Mac users with DSpark sidecars, and a major new "Flows" node editor for building AI pipelines. On the bug front, a high-severity issue (#14519) reports that long conversations stall during CPU-based embedding before inference even begins, and Stop does not cancel the archiving process.

→ Unsloth 团队正在推进多项稳定性修复和新功能。值得注意的 PR 包括：修复 DeepSeek-V4.1 在关闭 flash attention 时的上下文临时内存计算问题、Mac 用户 DSpark 侧载的 Metal OOM 恢复，以及全新的 "Flows" 节点编辑器（用于构建 AI 流水线）。在 bug 方面，严重问题 #14519 报告长对话在 CPU 嵌入阶段就会卡住，导致推理根本无法开始，且 Stop 按钮无法取消归档过程。

## 2. Releases & Breaking Changes

→ ## 2. 发布与重大变更

No releases were published in the last 24 hours.

→ 过去 24 小时内无发布。

## 3. New Model & Hardware Support

→ ## 3. 新模型与硬件支持

| Item | Description | Link |
|------|-------------|------|


| **MoE Expert Splitting** | Feature request opened for automatic hot/cold MoE expert splitting across GPU and CPU | [#14484](https://github.com/unslothai/unsloth/issues/14484) |
| **OmniVoice Support** | Request for UI integration of OmniVoice finetuning and inference (full/LORA) | [#14660](https://github.com/unslothai/unsloth/issues/14660) |
| **EPUB/MOBI Import** | Feature request for native ebook format support in dataset utilities | [#14377](https://github.com/unslothai/unsloth/issues/14377) |

The table presents three feature requests: automatic MoE expert distribution across GPU and CPU resources, UI-level support for both full and LORA-scale OmniVoice training and inference, and native ebook import capabilities for dataset processing.

## 4. Performance & Optimization

→ ## 4. 性能与优化

The DeepSeek-V4.1 context scratch fix addresses KQ score calculation when flash attention is disabled, ensuring proper measurement in that configuration. PR #14731 corrects KQ score handling when flash attention is off (之前仅在启用 flash 时进行测量). Memory management improvements include Metal OOM recovery that reserves DSpark and DFlash sidecars in --fit-target mode to prevent crashes on Mac systems, and SDXL textual inversion fixes that properly pool prompt embeddings at EOS to avoid incorrect token handling.

Additional optimizations cover thread management—preserving sd.cpp's default thread count instead of halving it on SMT hosts—and CUDA allocator efficiency, which eliminates unnecessary flushing during prompt encoding when block offload is active. The FSDP2 QLoRA implementation stages packed 4-bit weights on CPU and merges them incrementally per layer, while the CFG-parallel weight probe keeps weight validation within large inference models to prevent in-place modifications from causing corruption.

Pre-commit CI shows a notable performance bottleneck in enforce_kwargs_spacing.py, which creates substantial overhead during continuous integration runs.

On the stability front, several issues remain unresolved. High-priority items include stalled conversations during CPU-based embedding that block llama.cpp requests, models becoming unresponsive after a few turns with core dumps on eject and no diagnostic logs, and a linker issue on Windows where Intel XPU LoRA inference mixes GNU and MSVC arguments causing incompatibility.

Additional medium-priority problems involve chat template size constraints—the 64KB limit proves insufficient for certain templates requiring around 230KB when Llamacpp supports up to 8MB—and GGUF loading crashes specifically on Windows Studio server instead of gracefully degrading. The Lemonade and FastFlowLM chat functionality broke after prior fixes in #11743, and attachment handling fails after auto-compaction with search_conversation never being invoked. One fixed issue relates to multi-account LAN access where synchronization wasn't functioning properly when multiple users accessed the same local model.

For application developers, several practical implications emerge. The Flows Node Editor now enables non-technical users to build AI pipelines through a drag-and-drop interface. DeepSeek-V4.1 users with flash attention disabled will see proper memory accounting for dense KQ scores. Multi-account deployments on Unsloth Studio should verify that model synchronization across LAN users works as expected. The text encoder and VAE file selections now persist per image model, eliminating the need to repeatedly re-enter custom ComfyUI paths. Mac users will notice changed behavior with DSpark/DFlash Metal OOM recovery—the system now reserves sidecar resources and recovers gracefully rather than failing completely, so retry patterns may appear different than before. A fix is coming for the 64KB chat template limit that currently constrains larger custom templates like DavidAU's ~230KB variants. And the Archive Performance issue describes a blocking problem where lengthy conversations with extensive tool histories experience multi-minute CPU embedding delays before inference starts—those experiencing slow startup with long conversation histories have now identified the root cause.</think>

# Unsloth 要闻 — 2026年10月23日

## 1. 今日要闻

Unsloth 团队正在推进多项稳定性修复和新功能。值得注意的 PR 包括：修复 DeepSeek-V4.1 在关闭 flash attention 时的上下文临时内存计算问题、Mac 用户 DSpark 侧载的 Metal OOM 恢复，以及全新的 "Flows" 节点编辑器（用于构建 AI 流水线）。在 bug 方面，严重问题 #14519 报告长对话在 CPU 嵌入阶段就会卡住，导致推理根本无法开始，且 Stop 按钮无法取消归档过程。

## 2. 发布与重大变更

过去 24 小时内无发布。

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **MoE 专家拆分** | 新增功能请求：自动在 GPU 和 CPU 之间进行热/冷 MoE 专家拆分 | [#14484](https://github.com/unslothai/unsloth/issues/14484) |
| **OmniVoice 支持** | 请求在 UI 中集成 OmniVoice 微调和推理（全量/LORA） | [#14660](https://github.com/unslothai/unsloth/issues/14660) |
| **EPUB/MOBI 导入** | 数据集工具原生支持电子书格式的功能请求 | [#14377](https://github.com/unslothai/unsloth/issues/14377) |

## 4. 性能与优化

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **DeepSeek-V4.1 上下文临时内存** | PR #14838 修复了关闭 flash attention 时 KQ 分数的计算问题（之前仅在启用 flash 时进行测量） | [#14838](https://github.com/unslothai/unsloth/pull/14838) |
| **DSpark Metal OOM 恢复** | PR #14431 添加了 Metal OOM 恢复机制，并在 `--fit-target` 模式下保留 DSpark/DFlash 侧载资源 | [#14431](https://github.com/unslothai/unsloth/pull/14431) |
| **SDXL 文本反演** | PR #14846 修复了 EOS 处文本反演 token 的 prompt pooling 问题（之前 pooling 了错误的 embedding） | [#14846](https://github.com/unslothai/unsloth/pull/14846) |
| **CUDA 分配器刷新** | PR #14777 停止在块卸载下每次 prompt 编码时都刷新 CUDA 分配器（减少同步开销） | [#14777](https://github.com/unslothai/unsloth/pull/14777) |
| **SD 线程数** | PR #14847 在小型 SMT 主机上保留 sd.cpp 的默认线程数（防止线程数被减半） | [#14847](https://github.com/unslothai/unsloth/pull/14847) |
| **FSDP2 QLoRA 合并保存** | PR #14823 在 CPU 上分阶段打包 4-bit 基模型，逐层合并 | [#14823](https://github.com/unslothai/unsloth/pull/14823) |
| **CFG-并行权重探针** | PR #14844 将权重探针保留在大型推理权重内部（修复原地编辑导致的损坏问题） | [#14844](https://github.com/unslothai/unsloth/pull/14844) |
| **Pre-commit CI** | Issue #14174 指出缓慢的 `enforce_kwargs_spacing.py` 脚本影响 CI 计算资源 | [#14174](https://github.com/unslothai/unsloth/issues/14174) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | #14519 | 长对话在 CPU 归档嵌入阶段卡住，导致 llama.cpp 根本收不到任何请求；Stop 按钮无法取消归档 | [Open](https://github.com/unslothai/unsloth/issues/14519) |
| **高** | #14411 | 模型在几轮对话后停止响应；弹出时核心转储；未找到相关日志 | [Open](https://github.com/unslothai/unsloth/issues/14411) |
| **中** | #14807 | Intel XPU LoRA 推理在 Windows 上混合了 GNU 和 MSVC 链接器参数 | [Open](https://github.com/unslothai/unsloth/issues/14807) |
| **中** | #14841 | 聊天模板 64KB 限制不足；部分模板需要约 230KB（llamacpp 支持 8MB） | [Open](https://github.com/unslothai/unsloth/issues/14841) |
| **中** | #14513 | GGUF 加载在 Windows Studio 服务器上崩溃，而非回退到低内存模式 | [Open](https://github.com/unslothai/unsloth/issues/14513) |
| **中** | #14650 | Lemonade 和 FastFlowLM 聊天在 #11743 的机制短暂生效后停止工作 | [Open](https://github.com/unslothai/unsloth/issues/14650) |
| **低** | #14708 | 附件（图片/PDF）在自动压缩后变得无法读取；`search_conversation` 从未调用 | [Open](https://github.com/unslothai/unsloth/issues/14708) |
| **已修复** | #12365 | 多账户 LAN 访问同一本地模型时无法正确同步（已关闭） | [Closed](https://github.com/unslothai/unsloth/issues/12365) |

## 6. 这对应用开发者意味着什么

1. **新版 Flows 节点编辑器** — PR #14730 引入了拖放式节点编辑器，用于构建 AI 流水线、故事游戏和 2D 世界。这是 Unsloth Studio 针对非代码用户的重要 UX 扩展。

2. **DeepSeek-V4.1 Flash Attention 用户** — 如果你在关闭 flash attention 的情况下运行 DeepSeek-V4.1（无论是手动设置还是 OOM 重试后），PR #14838 确保了正确的上下文长度内存计算。之前 dense KQ 分数未被正确计入。

3. **多账户部署** — Issue #12365 已关闭；如果将 Unsloth Studio 作为多 LAN 用户的共享本地服务器运行，请验证模型跨账户同步现在是否正常工作。

4. **图像模型持久化** — PR #14845 记住每个图像模型的文本编码器和 VAE 文件选择，消除了使用自定义 ComfyUI 风格文件时重复输入路径的麻烦。

5. **关注 OOM 恢复行为** — PR #14431 中 DSpark/DFlash Metal OOM 恢复改变了 Mac 上的行为：系统现在会保留侧载资源并优雅恢复，而非直接失败。请监控是否有意外的 retry 行为。

6. **即将修复聊天模板限制** — Issue #14841 请求增加 64KB 聊天模板限制。如果你使用大型自定义模板（如 DavidAU 的约 230KB 模板），修复即将推出但尚未可用。

7. **归档性能问题** — Issue #14519 描述了一个阻塞性问题：长对话在 CPU 嵌入阶段停留数分钟才进入推理。如果你遇到长对话历史时启动缓慢的问题，这正是已知问题，等待修复。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*