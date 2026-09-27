# AI 基础设施日报 2026-09-27

> 生成时间: 2026-09-27 00:49 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this report into Chinese, preserving all formatting exactly as it is, while using natural technical Chinese appropriate for a Chinese developer newsletter.

Let me translate carefully, keeping:
- All Markdown structure (headings, tables, lists, etc.)
- All numbers, dates, issue/PR references
- All project names, repository slugs, usernames
- All technical terms
- URLs and code references

Let me go through it section by section:

1. Title and intro
2. Activity comparison table
3. Model support table
4. Performance frontier table
5. Layer positioning diagram
6. Trend signals
7. Closing

I'll maintain the exact same structure and formatting.</think>

# AI 基础设施生态系统报告 — 2026-09-27

## 1. 生态系统概览

今天的活动反映出 AI 推理栈已经相当成熟，生态系统目前已经明确分层。"栈"正围绕五个核心节点收敛：**vLLM/SGLang** 作为 GPU 服务的性能骨干，**llama.cpp** 作为面向边缘/消费级场景的便携式 C++ 运行时，**Ollama** 作为简化本地部署的封装层，**LiteLLM** 作为多提供商路由的网关/抽象层，**Unsloth** 作为微调加速层。今天的主题：Blackwell (sm_121) 的适配正在 vLLM/SGLang 加速推进，ROCm 支持正在成为一等公民而非事后考虑，多模态架构（视觉 + 视频 + 音频）正在推动所有推理层的解析器和内核工作。

---

## 2. 活动对比

| 项目 | Issues (待解决) | PRs (待解决) | Release (24h) | 主要语言 |
|---------|-------------|------------|----------------|------------------|
| **vLLM** | 59 | 368 | 0 | Python |
| **SGLang** | 39 | 288 | 0 | Python |
| **LiteLLM** | 39 | 350 | 0 | Python |
| **Unsloth** | 35 | 158 | 0 | Python |
| **llama.cpp** | ~25 | ~30 | 0 | C++ |
| **Ollama** | 17 | 16 | 0 | Go |

**观察：**

- **LiteLLM** 的 PR 与 Issue 比率最高（9:1），说明在功能和缺陷修复方面吞吐量很高——这对于一个处理 100+ 提供商集成的网关来说在意料之中。
- **vLLM** 和 **SGLang** 合计有 656 个待解决 PR，代表了 GPU 服务创新的主体；两个项目正在趋同但保持独立（SGLang 基于 vLLM 构建，提供更高级的调度、Radix 缓存和投机解码路径）。
- **llama.cpp** 表面上看数字较小，但保持稳定的速度；其 C++ 核心已经稳定，比 Python 栈需要的 PR 少得多。
- **Ollama** 活动最少，但服务于不同的功能——它用 Go 封装了 llama.cpp，所以重活都在上游。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1** | ✅ (decoder SWA) | ✅ (gfx950) | ❌ | ❌ | ❌ | ✅ (Flash GGUF 请求中) |
| **GLM-5.3 / 4.7** | ✅ (MTP 修复) | ❌ | ❌ | ✅ (解析器修复) | ❌ | ❌ |
| **Qwen 3.5 / 3.8** | ✅ | ✅ | ❌ | ✅ (工具修复) | ❌ | ❌ |
| **Qwen-Image-2.1** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (修复) |
| **Llama 3.2 Vision** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ (flash attn 修复) |
| **Gemma 4** | ❌ | ❌ | ❌ | ✅ (解析器修复) | ❌ | ❌ |
| **MiniCPM-V 4.7** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Blackwell (sm_121)** | ⚠️ (aarch64 阻塞) | ⚠️ (进行中) | ❌ | ❌ | ❌ | ❌ |
| **AMD gfx950 / MI350X** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **AMD RDNA4** | ⚠️ (多模态损坏) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **MUSA** | ❌ | ❌ | ✅ (docker) | ❌ | ❌ | ❌ |
| **Nemotron-3-Puzzle** | ❌ | ❌ | ✅ (ssm_scan) | ❌ | ❌ | ❌ |

**谁领先：**

- **DeepSeek-V4.1**：**vLLM + SGLang** 以生产级支持领先（gfx950、decoder SWA、Flash、DFlash2）。Unsloth 正在请求 Flash GGUF 支持。llama.cpp 和 Ollama 暂无时间表。
- **Blackwell**：**vLLM** 有可用的 CUDA 支持；aarch64（DGX Spark）因 sm_121 兼容性被阻塞。SGLang 正在调查。这是 2026 年最高优先级的硬件适配。
- **ROCm/AMD**：**vLLM + SGLang** 联合投入；llama.cpp 添加了 cdna fattn-mma。Ollama 和 LiteLLM 继承后端但不推动工作。
- **多模态**：**vLLM**（MiniCPM-V 4.7）、**Unsloth**（Qwen-Image-2.1、Llama 3.2 Vision）和 **Ollama**（Gemma4、GLM）都有活跃的工作。目前没有单一项目主导多模态。

---

## 4. 性能前沿

今天的优化工作集中在五个领域：

| 领域 | 项目 | 关键工作 |
|------|----------|----------|
| **KV 缓存 & 前缀缓存** | vLLM, SGLang | 混合 GDN 前缀缓存命中恢复 (#52244)，MooncakeStoreConnector 常驻事件 (#58293)，SimpleCPUOffloadConnector 跨副本共享 (#58245) |
| **投机解码** | vLLM, SGLang | DSpark 适配（追踪 #51798），DeepSeek-V4.1 两级候选索引器 (#40574)，MTP 投机解码正确性 (#37729) |
| **量化** | vLLM, SGLang, Unsloth | FP8 块级 LoRA（4-15x，Unsloth #12027），NVFP4 稠密线性（SGLang #34302），fp8 QSA 缓存（SGLang #39614），Mamba GDN 元数据精简 (#58762) |
| **内核优化** | vLLM, llama.cpp, Unsloth | 融合 QK-norm+RoPE+gate Triton（Qwen3-Next，ROCm），cdna fattn-mma（llama.cpp #28907），CUDA FP16 瓦片调优 (#26289)，Gemma2 填充掩码 (#12008) |
| **批处理 & 调度** | vLLM, SGLang, LiteLLM | Redis 批量写入支出（LiteLLM #43369），PD-解码 queue_time 修正（SGLang #41380），缓存感知路由（LiteLLM #43232） |

**什么没有受到显著关注：**

- PagedAttention v2 改进（算法已经成熟）
- 图编译 / CUDA Graphs（今天的数据中未提及）
- 短上下文模型的提示缓存（重点在长上下文 + 前缀缓存）
- LoraFusion / 合并策略

---

## 5. 层定位

每个项目在栈中占据独特的位置：

```
┌─────────────────────────────────────────────────────────┐
│  应用层 / Agent 层                                       │
│  (客户端、UI、工具调用、护栏)                             │
├─────────────────────────────────────────────────────────┤
│  网关 / 抽象层                  │  微调层               │
│  LiteLLM                       │  Unsloth              │
│  (100+ 提供商、代理、           │  (LoRA、QLoRA、        │
│   降级、成本追踪)                │   块级 FP8)            │
├─────────────────────────────────────────────────────────┤
│  本地运行时 / 部署              │  GPU 服务引擎          │
│  Ollama (Go 封装)             │  vLLM (Python)         │
│  llama.cpp (C++ 运行时)       │  SGLang (vLLM+)       │
│  (GGUF、消费级 GPU、           │  (高级调度、            │
│   Apple Silicon、移动端)        │   投机解码)            │
└─────────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 差异化 |
|-------|----------|-----------------|
| **训练 / 微调** | Unsloth | 位于推理下游；块级 FP8 LoRA 是独一无二的 |
| **GPU 服务** | vLLM, SGLang | vLLM = 核心引擎；SGLang = vLLM + Radix + DSpark + 高级批处理 |
| **本地运行时** | llama.cpp, Ollama | llama.cpp = 便携式 C++（GGUF，无 Python 依赖）；Ollama = 消费级 UX 封装 |
| **网关 / 代理** | LiteLLM | 多提供商路由、成本控制、降级；本身不运行推理引擎 |
| **应用** | Ollama (Studio), Unsloth (Studio) | 本地微调和部署的 UI |

**关键洞察**：两个"Python + GPU 服务"项目（vLLM 和 SGLang）正在趋同。SGLang 本质上是 vLLM 加上更激进的调度默认配置、更激进的投机解码路径，以及与 LMCache 的更紧密集成。差异化正在变薄，这可能推动整合或更清晰的分拆（vLLM 作为"核心引擎" vs. SGLang 作为"生产就绪发行版"）。

---

## 6. 趋势信号

### 来自今天活动的信号

| 趋势 | 证据 | 启示 |
|-------|----------|-------------|
| **Blackwell (sm_121) 是优先事项** | vLLM #36821，SGLang #40877，llama.cpp #26289 | NVIDIA 的下一代 GPU 正在积极适配；预计 2027 年 Q1 可投入生产。关注 DGX Spark / GB10 的可用性。 |
| **ROCm 正从"实验性"毕业** | vLLM #49851 (RDNDA4 修复)，#51406 (Qwen3 ROCm 内核)，llama.cpp #28907 (cdna)，SGLang #41308 (gfx950) | AMD MI350X 和 MI325X 现在是一等目标。如果你在 AMD 硬件上，生态系统正在迎头赶上。 |
| **投机解码正在走向主流** | vLLM: DSpark、DFlash2、MTP；SGLang: DSPARK、DFlash2；多个追踪 issue | "慢模型 + 投机解码"正在取代"只有快模型"。这是 100B+ 模型的主要延迟降低手段。 |
| **多模态正在分化栈** | vLLM: MiniCPM-V、Qwen2-VL；Unsloth: Llama 3.2 Vision、Qwen-Image-2.1；Ollama: Gemma4、GLM | 视觉模型需要不同的内核（交叉注意力、M-ROPE、VAE）。推理栈在经历一段收敛期后再次分化。 |
| **护栏正在成为基础设施** | LiteLLM: Model Armor、Bedrock 扫描、提示注入；vLLM: 内容过滤 | 安全和合规正从"应用关注"转向"中间件关注"。LiteLLM 在这方面是明确的领导者。 |
| **消费级 GPU 服务正在二分** | llama.cpp + Ollama（消费级，无 Python）；vLLM/SGLang（数据中心，需要 Python） | "我想在笔记本上跑模型"（llama.cpp/Ollama）和"我想提供 1000 QPS"（vLLM/SGLang）之间的差距正在拉大。LiteLLM 在它们之间架起桥梁。 |

### Agent / 应用开发者应该关注什么

1. **如果你在 AMD 上部署** — ROCm 故事现在已可行。gfx950 (MI350X) 支持 SGLang 上的 DeepSeek-V4.1。在 NVIDIA 供货常态化之前，现在就测试你的推理路径。

2. **如果你使用工具调用** — Ollama（Gemma4、GLM、Qwen3）和 LiteLLM（工具 schema 转换）中存在多个解析器 bug。验证你的工具 schema 是否能通过转换层，特别是对于可空类型。

3. **如果你运行高吞吐量服务** — vLLM/SGLang 在 fp8 + 前缀缓存 + Qwen3.5 下的死锁问题（#37729）是生产风险。仔细监控或禁用前缀缓存作为临时方案。

4. **如果你进行微调** — Unsloth 的块级 FP8 LoRA（4-15x 加速）改变了 100B+ 模型微调的经济性。这是今天最大的训练加速故事。

5. **如果你在提供商之间路由** — LiteLLM 的缓存感知路由和批量 Redis 写入改进了大规模的成本控制。护栏覆盖也在扩展（`/v1/responses` 的 Model Armor）。

6. **如果你构建 agent** — 投机解码是延迟手段。vLLM/SGLang 上的 DeepSeek-V4.1 + DFlash2 是大模型当前的性能前沿。当这落地时，agent 响应时间可能下降 2-3 倍。

---

*跨项目综合来自 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth — 2026-09-27*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Project Digest from English to Chinese. I need to:
1. Translate all text (headings, body, table content)
2. Keep Markdown structure intact
3. Keep URLs, issue numbers, code identifiers as-is
4. Use natural technical Chinese

Let me go through and translate:

---

# vLLM Project Digest — 2026-09-27

→ # vLLM 项目动态 — 2026-09-27

## 1. Today's Highlights

→ ## 1. 今日要点

The vLLM project continues active development across Blackwell hardware support, speculative decoding, and ROCm backends. A critical deadlock issue in the V1 engine under concurrent fp8 workloads with prefix caching (#37729) remains open with 36 comments—likely the highest priority for users running Qwen3.5 in production. On the PR side, multiple fixes for GLM-5.3 model integration landed, alongside continued work on DSpark/DFlash2 speculative decoding paths.

→ vLLM 项目在 Blackwell 硬件支持、投机解码和 ROCm 后端方面持续活跃开发。V1 引擎在 fp8 推理负载下并发使用前缀缓存时出现严重死锁问题（#37729）仍处于开放状态，收到了 36 条评论——这可能是 Qwen3.5 生产环境用户最需要关注的优先级。PR 方面，GLM-5.3 模型集成的多个修复已合并，同时 DSpark/DFlash2 投机解码路径的工作也在继续推进。

---

## 2. Releases & Breaking Changes

→ ## 2. 版本发布与重大变更

No new releases in the past 24 hours.

→ 过去 24 小时内无新版本发布。

---

## 3. New Model & Hardware Support

→ ## 3. 新模型与硬件支持

| Model / Hardware | Description | Link |
|---|---|---|


| **MiniCPM-V 4.7** | 新型号支持，集成 canvas 3D M-RoPE 用于缩略图重采样 | [#58674](https://github.com/vllm-project/vllm/pull/58674) |
| **GLM-5.3-Flash + DFlash2** | 投机解码草稿模型支持 | [#56983](https://github.com/vllm-project/vllm/pull/56983) |
| **sm_121 (Blackwell)** | aarch64 支持调研中，涉及 DGX Spark / Acer GN100 | [#36821](https://github.com/vllm-project/vllm/issues/36821) |
| **AMD gfx950 (MI325X)** | 通过 AITER 为 Hy4 启用 MXFP8 MoE 和密集线性后端 | [#57960](https://github.com/vllm-project/vllm/issues/57960) |
| **ROCm RDNA4 (gfx1201)** | 正在修复多模态模型加载问题 | [#49851](https://github.com/vllm-project/vllm/issues/49851) |

---

## 4. Performance & Optimization

→ ## 4. 性能与优化

| Area | Change | Details | Link |
|---|---|---|---|
| **GB10 weight loading** | 性能下降 | 张量级 H2D 传输出现瓶颈

，从 safetensors 内存映射视图读取速度较慢；与 #49991 (ROCm) 和 #50794 (Ascend NPU) 存在关联 | [#58726](https://github.com/vllm-project/vllm/issues/58726) |
| **Qwen3.5 / Qwen3-Next** | ROCm 内核优化 | 融合 QK-norm+RoPE+gate 内核已在 ROCm 平台启用 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **DeepSeek-V4.1** | 解码器滑动窗口优化 | 仅后续 KV 源层保留完整上下文，简化冷启动预填充流程 | [#58132](https://github.com/vllm-project/vllm/pull/58132) |
| **MRv2 / GDN**

我注意到几个关键的性能优化领域正在探索中。ROCm 平台的优化包括内核融合和内存传输改进，而 DeepSeek-V4.1 的滑动窗口技术旨在降低预填充开销。MRv2/项目也在进行中。

通过减少 KV 缓存组从 46 个降至 17 个，针对 Qwen3.6-35B-A3B 配合 DFlash 配置，实现了约 30% 的 KV 缓存节省。这表明在模型架构层面存在显著的内存优化空间。

对于 DeepSeek-V4 和 GLM 模型，通过修复非 mHC 分支的序列并行布局，确保了分布式计算的准确性。同时，针对 MooncakeStoreConnector 进行了关键修复，解决了 mamba 对齐路径中缺失的 BlockStored 事件问题。

后续改进包括引入 Prometheus 指标监控 KV offload 流程，以及在睡眠模式下释放固定内存块，进一步优化了资源管理和性能。

在稳定性方面，存在多个需要关注的严重和中等问题。V1 引擎在特定工作负载下可能发生死锁，Qwen4Exp 在长预填充阶段遇到内存溢出，GLM-5.3 的图像标记映射存在属性错误。这些问题需要持续追踪和修复，以确保系统的可靠性和性能。

对于从事 Qwen3.5 fp8 前缀缓存工作的人员，建议密切关注 #37729 中关于潜在死锁的详细信息。同时，在 Blackwell 平台上部署的开发者应意识到权重加载可能影响冷启动延迟。

GLM-5.3-Flash 投机解码用户应更新至最新夜间版本以获取最新修复。AMD RDNA4 多模态模型开发者需要跟踪 #49851 了解当前限制。Anthropic `/v1/messages` 端点用户可以期待更强大的 Claude Code 支持。DeepSeek-V4 用户将受益于 #58132 引入的解码器 SWA 优化。</think>

# vLLM 项目动态 — 2026-09-27

## 1. 今日要点

vLLM 项目在 Blackwell 硬件支持、投机解码和 ROCm 后端方面持续活跃开发。V1 引擎在 fp8 推理负载下并发使用前缀缓存时出现严重死锁问题（#37729）仍处于开放状态，收到了 36 条评论——这可能是 Qwen3.5 生产环境用户最需要关注的优先级。PR 方面，GLM-5.3 模型集成的多个修复已合并，同时 DSpark/DFlash2 投机解码路径的工作也在继续推进。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 模型/硬件 | 说明 | 链接 |
|---|---|---|
| **MiniCPM-V 4.7** | 新模型支持，含 canvas 3D M-RoPE 缩略图重采样 | [#58674](https://github.com/vllm-project/vllm/pull/58674) |
| **GLM-5.3-Flash + DFlash2** | 投机解码草稿模型支持 | [#56983](https://github.com/vllm-project/vllm/pull/56983) |
| **sm_121 (Blackwell)** | aarch64 支持调研中，涉及 DGX Spark / Acer GN100 | [#36821](https://github.com/vllm-project/vllm/issues/36821) |
| **AMD gfx950 (MI325X)** | 通过 AITER 为 Hy4 启用 MXFP8 MoE 和密集线性后端 | [#57960](https://github.com/vllm-project/vllm/issues/57960) |
| **ROCm RDNA4 (gfx1201)** | 多模态模型加载问题修复中 | [#49851](https://github.com/vllm-project/vllm/issues/49851) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 | 链接 |
|---|---|---|---|
| **GB10 权重加载** | 性能回退 | safetensors mmap 视图的 per-tensor H2D 拷贝速度慢；与 #49991 (ROCm) 和 #50794 (Ascend NPU) 相关 | [#58726](https://github.com/vllm-project/vllm/issues/58726) |
| **Qwen3.5 / Qwen3-Next** | ROCm Triton 内核启用 | 融合 QK-norm+RoPE+gate 内核已在 ROCm 上启用 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **DeepSeek-V4.1** | 解码器端 SWA bounded replay | 超过最后一个 KV 源的层仅持有滑动窗口 KV；简化冷 prefill | [#58132](https://github.com/vllm-project/vllm/pull/58132) |
| **MRv2 / GDN 元数据** | KV 缓存组缩减 | 跨 KV 缓存组复用 Mamba/GDN 元数据；Qwen3.6-35B-A3B + DFlash 上从 46 组减至 17 组，节省约 30% KV 缓存 | [#58762](https://github.com/vllm-project/vllm/pull/58762) |
| **DeepSeek-V4 / GLM** | MoE 序列并行布局修复 | 非 mHC 分支现正确处理 SP gather/scatter | [#58834](https://github.com/vllm-project/vllm/pull/58834) |
| **KV 卸载** | SimpleCPUOffloadConnector 的 Prometheus 指标 | 通过现有 KVConnectorStats 管道暴露遥测数据 | [#57251](https://github.com/vllm-project/vllm/pull/57251) |
| **休眠模式** | 可选释放 pinned host 内存 | 修复 #16663；wake_up 后释放 pinned blocks | [#55206](https://github.com/vllm-project/vllm/pull/55206) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **高** | V1 引擎在并发 fp8 + 前缀缓存 + Qwen3.5 下死锁 | 开放（36 条评论） | — |
| **高** | Qwen4Exp QSA indexer 在 GB10 统一内存上长 prefill 时 OOM/卡死 | 开放（9 条评论） | — |
| **中** | GLM-5.3 MTP 初始化时 image-token 映射 `AttributeError` | 开放 | [#58833](https://github.com/vllm-project/vllm/pull/58833) |
| **中** | MTP 投机解码下 Hybrid GDN 前缀缓存未命中 (Qwen3.5-122B-A10B) | 开放 | [#52244](https://github.com/vllm-project/vllm/pull/52244) |
| **中** | MooncakeStoreConnector 在 mamba `align` 路径缺少 `BlockStored` 事件 | 开放 | [#58293](https://github.com/vllm-project/vllm/pull/58293) |
| **中** | V1 thinking budget 在多 token `reasoning_end_str` 投机解码下损坏 | 开放（6 条评论） | — |
| **低** | 工具解析器在单个 streaming delta 包含 start+end token 时丢弃调用 (DeepSeek-V3/V3.1) | 开放（5 条评论） | — |
| **低** | llama3_json streaming 丢失以 `{` 开头的 assistant 内容（非工具调用） | 开放（3 条评论） | — |

---

## 6. 对应用开发者的意义

- **如果你使用 Qwen3.5 + fp8 + 前缀缓存**：在高并发负载下注意潜在死锁（#37729）；在问题修复前可考虑禁用前缀缓存作为临时方案。
- **如果你在 Blackwell (GB10/DGX Spark) 上部署**：权重加载性能低于预期；影响冷启动延迟但不影响稳态吞吐。
- **如果你使用 GLM-5.3-Flash 投机解码**：image-token 映射（#58833）和 SP 布局（#58834）的修复已合并；请更新到最新 nightly 版本。
- **如果你在 AMD RDNA4 上运行多模态模型**：当前构建在视觉编码器注意力初始化时会失败；请关注 #49851 了解修复进度。
- **如果你使用 Anthropic `/v1/messages` 端点**：RFC #58647 提议增强 Claude Code 在约 25 个工具请求场景下的鲁棒性；欢迎反馈。
- **如果你运行 DeepSeek-V4.1**：解码器端 SWA 优化（#58132）降低了冷 prefill 开销；在长上下文工作负载上预期延迟改善。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese. I need to:
1. Translate all the content to Chinese
2. Keep all the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code, technical terms as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate this carefully while preserving the structure.</think>

# SGLang 速报 — 2026-09-27

## 今日要闻

SGLang 继续保持高速迭代节奏，DeepSeek-V4.1 的 AMD 集成 PR (#41308) 已合并至 gfx950/MI350X，同时在线 NVFP4 量化在内核层面的工作也取得重要进展（PR #34302）。项目还在解决投机解码和多模态 token 处理中的关键正确性问题，缓存与调度器子系统的修复也在持续合并。

## 版本发布与重大变更

过去 24 小时内无新版本发布。

## 新模型与硬件支持

- **DeepSeek-V4.1 AMD gfx950 (MI350X) 支持**：PR #41308 将 DSpark 支持集成至 MI350X，遵循了 CUDA 版本的架构模式。这完成了跨供应商的 V4.1 全面覆盖。
- **DeepSeek-V4.1-Flash 在 8× RTX PRO 6000 (SM120, 仅 PCIe) 上运行**：issue #40877 记录了在 Blackwell Max-Q 硬件上（无 NVLink）的成功生产部署，包括测量的吞吐量和拓扑约束。
- **Dense 线性层的在线 NVFP4**：PR #34302 将 `--quantization nvfp4_online` 从 MoE 专家扩展到所有线性层，在推理时对每个 token 的激活进行量化。
- **可选 FP8 QSA 索引缓存**：PR #39614 为 Qwen3.8-Flash-Next 的压缩索引缓存添加 fp8 (e4m3) 存储选项，减少块选择器的内存带宽消耗。
- **LingBot-Video MoE 支持**：issue #32336 请求对首个 MoE DiT 文生视频模型（30B 总参数 / 约 3B 活跃参数）提供原生 SGLang 支持。

## 性能优化

- **DeepEP-V2 扩展预填充调度**：PR #37261 为 DeepEP-V2 添加 `do_expand=True` 预填充调度选项，加速专家并行工作负载。
- **FlashInfer PCIe-IPC All-Reduce**：PR #34528 为无交换机主机（无 NVLink/多播）引入可选的 FlashInfer PCIe-IPC all-reduce，实现了跨 CPU root complex 的高效对等传输。
- **PD 解码队列时间修正**：PR #41380 修复了队列时间统计逻辑，排除回溯前的解码时间，提升调度准确性。
- **按请求数组流式传输采样掩码**：PR #41270（选 Cherry-pick 至 sglang-miles）将采样掩码作为 int32/float32 数组流式传输，而非嵌套 Python 列表，减少序列化开销。
- **Kimi-Linear PD 边界奇偶校验测试**：PR #41378 扩展了 Kimi-Linear PD 在页面、DCP 虚拟页面、块和缓存前缀边界上的奇偶校验覆盖范围。
- **MLX 缓存计账修正**：PR #40046 修正了链式 MLX 解码缓存 slot 的计账逻辑——40 token 的延续错误地只复用了 9 个缓存 token 而非 39 个。
- **统一内存解码宿主机池**：PR #39478 允许完整和滑动窗口 KV 缓存共享统一的设备字节预算，宿主机池容量可重新分配。

## 稳定性与回归问题

| 严重程度 | Issue | 状态 | 备注 |
|----------|-------|--------|-------|
| **高** | #32569: Kimi K3 DSPARK 投机解码崩溃 (TypeError: 'NoneType' object is not callable in top_k_renorm_prob) | Open | 运行约 5 分钟后崩溃；可能由 top_p/top_k 请求触发 |
| **高** | #41076: DeepSeek-V4.1-Flash + DSPARK 无界 SparsePrefillWorkspace 分配导致 OOM 崩溃 | Open | 工作空间无限增长 |
| **中** | #36889: DFLASH Mamba 状态缓存将并发上限限制为每请求 5 个 slot (仅 info 日志) | Open | 静默的 75% 吞吐量损失，位于 `--speculative-num-draft-tokens` 之后 |
| **中** | #35562: llama3 工具调用解析器静默删除消息内容中开头的 JSON 对象 | Open | |
| **中** | #31915: 工具调用解析器在流式分块边界丢失/损坏数据 | Open | 多个检测器受影响；已确定根本原因 |
| **中** | #37393: Kimi-K3 分块预填充在不同 TP _rank 提交不同的 VocabParallelEmbedding ALLREDUCE 大小 | Open | |
| **中** | #41372: Req.decoded_text 从未被写入 — 死代码 stop-string 回退路径 | Open | 调度器的 stop-string 回退路径不可达 |
| **中** | #41351: 混合 GDN Radix-cache 在重复分支评分时 selected-logpro 漂移 | Open | |
| **低** | #39402: ep_scatter_from_psum 缺少 expert_start/num_experts 参数 → TypeError | Open | |

**CI 状态**：Issue #17050 追踪了 1 个失败测试和 5 个不稳定测试（截至 2026-09-26），另有 1105 个测试最近已修复。

## 应用开发者需要关注的事项

1. **AMD 用户**：DeepSeek-V4.1-Flash 现已可在 MI350X (gfx950) 上通过 DSpark 运行——请更新您的部署配置以利用新后端。
2. **Blackwell (SM120) 无 NVLink 用户**：Issue #40877 记录的纯 PCIe 拓扑方案可行，但需要特定配置；考虑将其用于机架级部署。
3. **Dense 模型运营者**：如果使用 `--quantization nvfp4_online`，Dense 模型现可受益于所有线性层的按 token 激活量化，而不仅仅是 MoE 专家层。
4. **流式工具调用开发者**：多个流式边界 bug（#31915、#35562）正在追踪中；如果您的应用使用流式函数调用，请在修复上线前仔细验证输出。
5. **投机解码用户**：Kimi K3 DSPARK 崩溃（#32569）和 Mamba 状态缓存并发上限（#36889）可能影响生产稳定性——请密切监控并考虑调整草稿 token 数量。
6. **LMCache 用户**：最近的修复（#41328、#41325）改进了组件游标处理和每缓存后端选择；更新后请验证缓存行为。

---

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate:

## 1. Today's Highlights → 今日要闻

## 2. Releases & Breaking Changes → 发布与重大变更

## 3. New Model & Hardware Support → 新模型与硬件支持

## 4. Performance & Optimization → 性能与优化

## 5. Stability & Regressions → 稳定性与回归

## 6. What This Means for Application Developers → 这对应用开发者意味着什么

Let me go through and translate the content:</think>

# llama.cpp 每日简报

## 1. 今日要闻

本次更新周期主要聚焦于 CUDA/HIP 后端的性能优化和稳定性改进。主要亮点包括：修复了处理无效 JSON schema 参数时语法分析器崩溃的严重 bug，扩展了 WebGPU 量化支持，并持续优化 NVIDIA GPU 的 FlashAttention 内核。服务器现在可以正确报告补全请求中多个候选项的 token 使用情况。

## 2. 发布与重大变更

*本报告期无重大变更或新版本发布。*

## 3. 新模型与硬件支持

- **Nemotron-3-Puzzle-75B-A9B 支持**：为 ssm_scan 操作添加了 CUDA state size 96 支持，使得该模型能够在 GPU 上完整加速运行，而非回退到 CPU。([#28717](https://github.com/ggml-org/llama.cpp/pull/28717))

- **MUSA 后端 Docker**：Docker 镜像现在基于 PH1 MUSA SDK 构建，用于 MUSA 架构。([#29481](https://github.com/ggml-org/llama.cpp/pull/29481))

- **WebGPU MMVQ 量化**：在 WebGPU 上为 Q1_0、Q5_0、Q5_1、Q3_K、Q5_K、Q6_K 和 MXFP4 量化格式添加了多向量量化（MMVQ）支持。([#29483](https://github.com/ggml-org/llama.cpp/pull/29483))

## 4. 性能与优化

- **HIP FlashAttention MMA 内核**：在 AMD GPU 的 CDNA 架构上启用了 fattn-mma 内核，用于 dkq > 256 的大批量场景，提升了注意力机制的性能。([#28907](https://github.com/ggml-org/llama.cpp/pull/28907))

- **CUDA FP16 Tile 调优**：在 `ggml_cuda_fattn_tile.cuh` 中重新调优了 13 行 FlashAttention FP16 tile 配置，针对 head sizes 40、64、72、80、96 和 112，优化目标为 NVIDIA P100 及类似 GPU。([#26289](https://github.com/ggml-org/llama.cpp/pull/26289))

- **WebGPU 量化加速**：Tesla V100 上的 MMVQ 实现在支持的量化类型上展示了可测量的加速（具体 t/s 改进见 PR 文档）。([#29483](https://github.com/ggml-org/llama.cpp/pull/29483))

## 5. 稳定性与回归

- **[严重] 语法分析器 OOM 崩溃** — 修复了 `llama-server` 处理 `minItems` > `maxItems`（如 `minItems: 10, maxItems: 2`）或无效 GBNF 模式（如 `"a"{10,2}`）的 JSON schema 时的致命内存溢出崩溃。该崩溃发生在 `llama-grammar` 内存分配期间。修复了 [#29462](https://github.com/ggml-org/llama.cpp/issues/29462)。([#29497](https://github.com/ggml-org/llama.cpp/pull/29497))

- **[中等] 服务器使用量报告** — 修复了 OAI 兼容的 `/v1/chat/completions` 和 `/v1/completions` 端点中 `n > 1` 时 `usage.completion_tokens` 和 `usage.total_tokens` 报告不准确的问题。之前只报告了第一个候选项的使用量。([#29496](https://github.com/ggml-org/llama.cpp/pull/29496))

## 6. 这对应用开发者意味着什么

- **避免 Schema 验证漏洞**：如果使用 llama-server 的语法/JSON schema 功能，请确保 schema 中的 `minItems` ≤ `maxItems`——虽然崩溃问题已修复，但无效配置仍可能产生意外行为。

- **多候选项补全现在准确**：使用 `n > 1` 进行并行补全的应用程序现在将收到准确的 token 使用统计，这对于基于使用量的计费和监控非常重要。

- **AMD GPU 性能提升**：基于 HIP 的 FlashAttention 改进使 AMD GPU 用户受益，特别是对于 CDNA 架构的大批量工作负载。

- **WebGPU 量化选项扩展**：WebGPU 用户现在可以使用更多量化格式进行内存受限的部署，在同类硬件上具有可测量的加速效果。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following specific rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue references as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving all formatting.</think>

# Ollama 摘要 — 2026-09-27

## 1. 今日要闻

开发工作多点推进。Gemma4 和 GLM 模型的解析器修复已完成，解决此前工具调用被静默丢弃的问题；新的 `/v1/systemone` API 为本地 Nimble 和 Tev 模型带来了结构化决策能力。在桌面端方面，窗口管理方面的长期用户反馈正在得到改善。

---

## 2. 版本更新与破坏性变更

**过去 24 小时内无新版本发布。** 但有一个破坏性变更需要关注：

- **`typical_p` 参数已移除** — Issue [#18542](https://github.com/ollama/ollama/issues/18542) 报告 `typical_p` 不再受支持，导致无法省略此参数的现有客户端（如 SillyTavern 1.18.0）出现故障。使用 Ollama 0.34.1 的用户请确认客户端兼容性。

---

## 3. 新模型与硬件支持

| 模型/架构 | 状态 | 备注 |
|---|---|---|
| **System 1 Models** | 需求 | Issue [#18594](https://github.com/ollama/ollama/issues/18594) 请求支持 Kev 和 Laya 模型 |
| **MLX (Apple Silicon)** | 进行中 | PR [#18651](https://github.com/ollama/ollama/pull/18651) 更新 MLX 版本；Issue [#18669](https://github.com/ollama/ollama/issues/18669) 提议 MLX 共享模型权重以实现并发推理 |
| **GLM-4.7** | 解析器修复 | PR [#18663](https://github.com/ollama/ollama/pull/18663)、[#18659](https://github.com/ollama/ollama/issues/18659)、[#18658](https://github.com/ollama/ollama/issues/18658) 解决工具调用解析问题 |
| **Qwen 3.8** | Bug 修复 | Issue [#17778](https://github.com/ollama/ollama/issues/17778)、[#18632](https://github.com/ollama/ollama/issues/18632)、[#18421](https://github.com/ollama/ollama/issues/18421) |
| **Gemma 4** | 解析器修复 | PR [#18664](https://github.com/ollama/ollama/pull/18664)、[#18390](https://github.com/ollama/ollama/issues/18390)、[#18354](https://github.com/ollama/ollama/issues/18354)、[#16075](https://github.com/ollama/ollama/pull/16075) |

---

## 4. 性能与优化

- **HumanEval 基准改进** — PR [#17480](https://github.com/ollama/ollama/pull/17480) 用打包的 HumanEval Python prompts 替换合成词表 prompts，使投机解码评估更接近真实场景。
- **MLX 版本更新** — PR [#18651](https://github.com/ollama/ollama/pull/18651) 更新至最新版 MLX，可能带来 Apple Silicon 优化。
- **System One 评分 API** — PR [#18606](https://github.com/ollama/ollama/pull/18606) 引入 `POST /v1/systemone`，支持使用本地 Nimble 和 Tev 模型进行结构化决策，无需外部 API 调用即可实现新的推理模式。

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 描述 |
|---|---|---|
| **严重** | [#15453](https://github.com/ollama/ollama/issues/15453) | Ollama Cloud Pro：所有云模型 95% 失败率 — 服务不可用（20 👍，53 条评论） |
| **高** | [#17778](https://github.com/ollama/ollama/issues/17778) | Qwen 3.8：流式聊天时 `ResponseError during chat streaming: no user query found in messages`（500 错误），205k 上下文 |
| **高** | [#12187](https://github.com/ollama/ollama/issues/12187) | GPT-OSS 工具调用未完成 — 工具调用在 Open WebUI 中静默终止 |
| **中** | [#18542](https://github.com/ollama/ollama/issues/18542) | `typical_p` 已移除，现有客户端报错 |
| **中** | [#18390](https://github.com/ollama/ollama/issues/18390) | Gemma4 工具调用对象键含空格时被静默丢弃 |
| **中** | [#18354](https://github.com/ollama/ollama/issues/18354) | Gemma4 字符串占位符冲突导致有效工具调用被丢弃 |
| **低** | [#18632](https://github.com/ollama/ollama/issues/18632) | Qwen3.8 `think: "high"` 静默运行默认值（`medium`）— 未记录行为 |
| **低** | [#18431](https://github.com/ollama/ollama/issues/18431) | Anthropic 兼容模式下 `messages` 数组中的 system-role 消息被提升为系统块，破坏前缀缓存 |

**修复进展中：**
- PR [#18664](https://github.com/ollama/ollama/pull/18664)：恢复带尾部噪声的 Gemma4 工具调用
- PR [#18663](https://github.com/ollama/ollama/pull/18663)：保留 GLM 字符串参数内容
- PR [#18340](https://github.com/ollama/ollama/pull/18340)：保留引号的 Qwen3 工具分隔符

---

## 6. 这对应用开发者意味着什么

1. **工具调用可靠性正在提升** — Gemma4、GLM 和 Qwen3 的多个解析器修复解决了工具调用被静默丢弃的问题。如果你正在使用这些模型的工具调用，下一个更新应该会改善可靠性。

2. **Ollama Cloud Pro 存在服务问题** — Issue [#15453](https://github.com/ollama/ollama/issues/15453) 报告的所有云模型 95% 失败率影响了云端托管模型的使用。如果你在使用云模型，请考虑本地推理或关注修复进展。

3. **桌面端 UX 正在改进** — 窗口将变为可调整宽度、更窄，并获得置顶模式（PR [#18661](https://github.com/ollama/ollama/pull/18661)、[#18668](https://github.com/ollama/ollama/pull/18668)、[#18662](https://github.com/ollama/ollama/pull/18662)）。如果你在工作流中嵌入桌面应用，这会很有用。

4. **新增 CLI 功能** — `ollama stop --all` 和多模型停止（PR [#18665](https://github.com/ollama/ollama/pull/18665) 简化了批量卸载模型的操作。

5. **破坏性变更：从请求中移除 `typical_p`** — 如果你维护客户端，请从聊天补全请求中删除所有 `typical_p` 参数以避免故障。

6. **新 `/v1/systemone` API** — 支持使用本地模型进行结构化决策 — 适用于需要二元或多选决策且不依赖外部 API 调用的智能体工作流。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the given English LiteLLM Daily Digest into Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, code references (#43390), file paths, API endpoints, etc. as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the content and translate it section by section while preserving the structure:

**Original:**
# LiteLLM Daily Digest — 2026-09-27

## Today's Highlights

Today's activity centers on guardrail hardening and performance optimizations. Multiple PRs address critical security gaps in content scanning (including Bedrock guardrails, unified routes, and Gemini SSE streams), while a significant performance push targets reducing Redis round trips during request handling. On the issue front, LLM translation layer bugs dominate—particularly around tool schemas, token counting, and streaming responses.

**Translation:**
# LiteLLM 每日简报 — 2026-09-27

## 今日要点

今日工作聚焦于 Guardrail 加固与性能优化。多个 PR 解决了内容扫描中的关键安全漏洞（包括 Bedrock Guardrail、统一路由和 Gemini SSE 流），同时性能优化方向是减少请求处理中的 Redis 往返次数。Issue 方面，LLM 翻译层问题占据主导——尤其是工具 Schema、Token 计数和流式响应相关。

---

**Original:**
## Releases & Breaking Changes

- **No new releases** in the last 24 hours.

**Translation:**
## 版本发布与重大变更

- 过去 24 小时内**无新版本发布**。

---

**Original:**
## New Model & Hardware Support

- **fireworks_ai/minimax-m3** — Now correctly marked as vision-capable; the cost map has been updated to enable image requests ([#43390](https://github.com/BerriAI/litellm/pull/43390))
 
**Translation:**
## 新模型与硬件支持

- **fireworks_ai/minimax-m3** — 现已正确标记为视觉模型；成本映射已更新以支持图片请求 ([#43390](https://github.com/BerriAI/litellm/pull/43390))

---

**Original:**
## Performance & Optimization

- **Redis batch optimization** — New PRs consolidate spend counter operations across admission and post-call accounting, reducing Redis round trips from 12+ to fewer than 5 per governed request ([#43369](https://github.com/BerriAI/litellm/pull/

43369), [#43367](https://github.com/BerriAI/litellm/pull/43367))
- **Cache-aware routing** — Added `cache_aware_routing` option to compare input, cache hit, and output costs during route selection ([#43232](https://github.com/BerriAI/litellm/pull/43232))
- **Batch JSONL storage** — Completed batch requests now store per-request JSONL line items in callbacks for compliance cold storage ([#41691](https://github.com/BerriAI/litellm/pull/41691))

**Translation:**
## 性能与优化

- **Redis 批量优化** — 新 PR 将计费计数器操作统一到准入和调用后计费阶段，将每个受管请求的 Redis 往返次数从 12+ 降至 5 次以下 ([#43369](https://github.com/BerriAI/litellm/pull/43369), [#43367](https://github.com/BerriAI/litellm/pull/43367))
- **缓存感知路由** — 新增 `cache_aware_routing` 选项，在路由选择时比较输入成本、缓存命中成本和输出成本 ([#43232](https://github.com/BerriAI/litellm/pull/43232))
- **批量 JSONL 存储** — 完成的批量请求现已在回调中存储每请求的 JSONL 行项目，用于合规冷存储 ([#41691](https://github.com/BerriAI/litellm/pull/41691))

---

**Original:**
## Stability & Regressions

### High Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#31510](https://github.com/BerriAI/litellm/issues/31510) | Model Armor guardrail does not screen `/v1/responses` input—only reads messages, not input payload | OPEN |
| [#43325](https://github.com/BerriAI/litellm/issues/43325) | Gemini/Vertex tool schemas drop `enum`, `pattern`, `minLength`, `maxLength` for fields typed as arrays (e.g., `["string", "null"]`) | OPEN |
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` drops root-level `anyOf`/`$ref`, leaving empty properties for union tools | OPEN |
| [#42819](https://github.com/BerriAI/litellm/issues/42819) | SSE keepalive leaks a `max_parallel_requests` slot on every streamed request (keys become permanently rate-limited after N sequential calls) | OPEN |

### Medium Priority

| Issue | Description | Status |
|-------|-------------|--------|
| [#43324](https://github.com/BerriAI/litellm/issues/43324) | Message-level `cache_control` dropped when content is a list (Anthropic, Bedrock Converse) | OPEN |
| [#43316](https://github.com/BerriAI/litellm/issues/43316) | Responses bridge returns narrated tool call as two chat choices, causing chat clients to lose the tool call | OPEN |
| [#43010](https://github.com/BerriAI/litellm/issues/43010) | `/v1/responses` streaming with Anthropic doubles thinking text in reasoning `encrypted_content` | OPEN |
| [#43214](https://github.com/BerriAI/litellm/issues/43214) | `RouterBudgetLimiting` treats `max_budget=0` as unlimited instead of blocking all spend | OPEN |
| [#43285](https://github.com/BerriAI/litellm/issues/43285) | `llm_requests_hanging` alerts produce false positives under sustained load—completion-marker TTL shorter than tracker TTL | OPEN |
| [#42735](https://github.com/BerriAI/litellm/pull/42735) | **Fixed** — `/v1/messages/count_tokens` failed for Gemini deployments (500 error); Claude Code guessed context usage ~2x too high |

### Recently Closed

- [#20097](https://github.com/BerriAI/litellm/issues/20097) — Characters truncated from Anthropic models (CLOSED)
- [#23757](https://github.com/BerriAI/litellm/issues/23757) — TypeError in `map_system_message_pt` routing Anthropic messages to ChatGPT (CLOSED)
- [#30768](https://github.com/BerriAI/litellm/issues/30768) — Incorrect cost tracking for Bedrock geo cross-region inference profiles (CLOSED)

**Translation:**
## 稳定性与回归问题

### 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#31510](https://github.com/BerriAI/litellm/issues/31510) | Model Armor Guardrail 未检查 `/v1/responses` 的输入内容——仅读取 messages，未检查 input payload | OPEN |
| [#43325](https://github.com/BerriAI/litellm/issues/43325) | Gemini/Vertex 工具 Schema 丢失 `enum`、`pattern`、`minLength`、`maxLength` 字段（当类型为数组时，如 `["string", "null"]`） | OPEN |
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` 丢失根级别的 `anyOf`/`$ref`，导致联合工具的属性为空 | OPEN |
| [#42819](https://github.com/BerriAI/litellm/issues/42819) | SSE keepalive 在每个流式请求时泄漏一个 `max_parallel_requests` 槽位（N 次连续调用后密钥将永久受限） | OPEN |

### 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#43324](https://github.com/BerriAI/litellm/issues/43324) | 消息级 `cache_control` 在内容为列表时被丢弃（Anthropic, Bedrock Converse） | OPEN |
| [#43316](https://github.com/BerriAI/litellm/issues/43316) | Responses 桥接器将叙述的工具调用作为两个 chat choice 返回，导致聊天客户端丢失工具调用 | OPEN |
| [#43010](https://github.com/BerriAI/litellm/issues/43010) | 使用 Anthropic 的 `/v1/responses` 流式响应在推理的 `encrypted_content` 中将 thinking 文本翻倍 | OPEN |
| [#43214](https://github.com/BerriAI/litellm/issues/43214) | `RouterBudgetLimiting` 将 `max_budget=0` 视为无限制，而非阻止所有支出 | OPEN |
| [#43285](https://github.com/BerriAI/litellm/issues/43285) | `llm_requests_hanging` 告警在持续负载下产生误报——completion-marker TTL 短于 tracker TTL | OPEN |
| [#42735](https://github.com/BerriAI/litellm/pull/42735) | **已修复** — Gemini 部署的 `/v1/messages/count_tokens` 失败（500 错误）；Claude Code 上下文用量估算偏高约 2 倍 |

### 最近关闭

- [#20097](https://github.com/BerriAI/litellm/issues/20097) — Anthropic 模型输出字符被截断 (CLOSED)
- [#23757](https://github.com/BerriAI/litellm/issues/23757) — `map_system_message_pt` 路由 Anthropic 消息到 ChatGPT 时抛出 TypeError (CLOSED)
- [#30768](https://github.com/BerriAI/litellm/issues/30768) — Bedrock 跨区域推理配置的成本计算不正确 (CLOSED)

---

**Original:**
## What This Means for Application Developers

1. **Guardrail coverage is expanding** — The team is actively closing gaps in content scanning across Bedrock, unified routes, and prompt injection detection. If you rely on guardrails, expect more comprehensive scanning but also review your integration paths (especially `/v1/responses` and tool outputs).

2. **Redis performance matters at scale** — The batch optimization PRs significantly reduce per-request Redis calls. If you're running LiteLLM under high load, these changes should improve throughput and reduce latency.

3. **LLM translation layer bugs persist** — Multiple issues affect tool schema handling, especially with nullable types (`["string", "null"]`), union schemas (`anyOf`/`$ref`), and cache control. If you use Gemini/Vertex or Anthropic with complex tool definitions, validate that your schemas survive translation intact.

4. **Routing now considers prompt cache** — The new `cache_aware_routing` option can reduce costs by routing to routes with warm caches. It's opt-in (`cache_aware_routing: true`).

5. **Watch your rate limits** — If you're using `sse_keepalive_ping_interval_seconds` with `max_parallel_requests`, you may be silently leaking slots. Consider disabling keepalive or monitoring your parallel request limits closely.

**Translation:**
## 这对应用开发者意味着什么

1. **Guardrail 覆盖范围正在扩大** — 团队正在积极弥补 Bedrock、统一路由和提示注入检测中内容扫描的空白。如果您依赖 Guardrail，可以预期扫描将更加全面，但请同时检查您的集成路径（尤其是 `/v1/responses` 和工具输出）。

2. **Redis 性能在大规模场景下至关重要** — 批量优化 PR 大幅减少了每个请求的 Redis 调用。如果您在高负载下运行 LiteLLM，这些变更将提升吞吐量并降低延迟。

3. **LLM 翻译层问题持续存在** — 多个问题影响工具 Schema 处理，尤其是可空类型（`["string", "null"]`）、联合 Schema（`anyOf`/`$ref`）和缓存控制。如果您在使用 Gemini/Vertex 或 Anthropic 的复杂工具定义，请验证您的 Schema 在翻译后保持完整。

4. **路由现在会考虑 Prompt 缓存** — 新的 `cache_aware_routing` 选项可以通过路由到缓存预热的路由来降低成本。这是可选功能（`cache_aware_routing: true`）。

5. **关注您的速率限制** — 如果您将 `sse_keepalive_ping_interval_seconds` 与 `max_parallel_requests` 结合使用，可能会在不知不觉中泄漏槽位。请考虑禁用 keepalive 或密切监控您的并行请求限制。

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering. Let me review the translation and make some improvements for more natural technical Chinese:

1. Keep URLs and code references as-is
2. Use natural Chinese technical terminology
3. Preserve all Markdown structure
4. Output only the translation

Let me present the final translated version:</think>

# LiteLLM 每日简报 — 2026-09-27

## 今日要点

今日工作聚焦于 Guardrail 加固与性能优化。多个 PR 解决了内容扫描中的关键安全漏洞（包括 Bedrock Guardrail、统一路由和 Gemini SSE 流），同时性能优化方向是减少请求处理中的 Redis 往返次数。Issue 方面，LLM 翻译层问题占据主导——尤其是工具 Schema、Token 计数和流式响应相关。

---

## 版本发布与重大变更

- 过去 24 小时内**无新版本发布**。

---

## 新模型与硬件支持

- **fireworks_ai/minimax-m3** — 现已正确标记为视觉模型；成本映射已更新以支持图片请求 ([#43390](https://github.com/BerriAI/litellm/pull/43390))

---

## 性能与优化

- **Redis 批量优化** — 新 PR 将计费计数器操作统一到准入和调用后计费阶段，将每个受管请求的 Redis 往返次数从 12+ 降至 5 次以下 ([#43369](https://github.com/BerriAI/litellm/pull/43369), [#43367](https://github.com/BerriAI/litellm/pull/43367))
- **缓存感知路由** — 新增 `cache_aware_routing` 选项，在路由选择时比较输入成本、缓存命中成本和输出成本 ([#43232](https://github.com/BerriAI/litellm/pull/43232))
- **批量 JSONL 存储** — 完成的批量请求现已在回调中存储每请求的 JSONL 行项目，用于合规冷存储 ([#41691](https://github.com/BerriAI/litellm/pull/41691))

---

## 稳定性与回归问题

### 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#31510](https://github.com/BerriAI/litellm/issues/31510) | Model Armor Guardrail 未检查 `/v1/responses` 的输入内容——仅读取 messages，未检查 input payload | OPEN |
| [#43325](https://github.com/BerriAI/litellm/issues/43325) | Gemini/Vertex 工具 Schema 丢失 `enum`、`pattern`、`minLength`、`maxLength` 字段（当类型为数组时，如 `["string", "null"]`） | OPEN |
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` 丢失根级别的 `anyOf`/`$ref`，导致联合工具的属性为空 | OPEN |
| [#42819](https://github.com/BerriAI/litellm/issues/42819) | SSE keepalive 在每个流式请求时泄漏一个 `max_parallel_requests` 槽位（N 次连续调用后密钥将永久受限） | OPEN |

### 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#43324](https://github.com/BerriAI/litellm/issues/43324) | 消息级 `cache_control` 在内容为列表时被丢弃（Anthropic, Bedrock Converse） | OPEN |
| [#43316](https://github.com/BerriAI/litellm/issues/43316) | Responses 桥接器将叙述的工具调用作为两个 chat choice 返回，导致聊天客户端丢失工具调用 | OPEN |
| [#43010](https://github.com/BerriAI/litellm/issues/43010) | 使用 Anthropic 的 `/v1/responses` 流式响应在推理的 `encrypted_content` 中将 thinking 文本翻倍 | OPEN |
| [#43214](https://github.com/BerriAI/litellm/issues/43214) | `RouterBudgetLimiting` 将 `max_budget=0` 视为无限制，而非阻止所有支出 | OPEN |
| [#43285](https://github.com/BerriAI/litellm/issues/43285) | `llm_requests_hanging` 告警在持续负载下产生误报——completion-marker TTL 短于 tracker TTL | OPEN |
| [#42735](https://github.com/BerriAI/litellm/pull/42735) | **已修复** — Gemini 部署的 `/v1/messages/count_tokens` 失败（500 错误）；Claude Code 上下文用量估算偏高约 2 倍 |

### 最近关闭

- [#20097](https://github.com/BerriAI/litellm/issues/20097) — Anthropic 模型输出字符被截断 (CLOSED)
- [#23757](https://github.com/BerriAI/litellm/issues/23757) — `map_system_message_pt` 路由 Anthropic 消息到 ChatGPT 时抛出 TypeError (CLOSED)
- [#30768](https://github.com/BerriAI/litellm/issues/30768) — Bedrock 跨区域推理配置的成本计算不正确 (CLOSED)

---

## 这对应用开发者意味着什么

1. **Guardrail 覆盖范围正在扩大** — 团队正在积极弥补 Bedrock、统一路由和提示注入检测中内容扫描的空白。如果您依赖 Guardrail，可以预期扫描将更加全面，但请同时检查您的集成路径（尤其是 `/v1/responses` 和工具输出）。

2. **Redis 性能在大规模场景下至关重要** — 批量优化 PR 大幅减少了每个请求的 Redis 调用。如果您在高负载下运行 LiteLLM，这些变更将提升吞吐量并降低延迟。

3. **LLM 翻译层问题持续存在** — 多个问题影响工具 Schema 处理，尤其是可空类型（`["string", "null"]`）、联合 Schema（`anyOf`/`$ref`）和缓存控制。如果您在使用 Gemini/Vertex 或 Anthropic 的复杂工具定义，请验证您的 Schema 在翻译后保持完整。

4. **路由现在会考虑 Prompt 缓存** — 新的 `cache_aware_routing` 选项可以通过路由到缓存预热的路由来降低成本。这是可选功能（`cache_aware_routing: true`）。

5. **关注您的速率限制** — 如果您将 `sse_keepalive_ping_interval_seconds` 与 `max_parallel_requests` 结合使用，可能会在不知不觉中泄漏槽位。请考虑禁用 keepalive 或密切监控您的并行请求限制。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Simplified Chinese. I need to:

1. Translate all the content into Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Preserve URLs, PR/issue numbers, code references, etc.
4. Use natural technical Chinese register

Let me go through and translate section by section:

**Title:**
# Unsloth Digest — 2026-09-27
→ # Unsloth 要闻 — 2026-09-27

**First paragraph:**
Unsloth's desktop and web UI continues rapid iteration with major UX enhancements landing across the board. Performance work on block-FP8 LoRA training achieved 4-15x speedups on modern GPUs, while Studio added document viewing capabilities for common file formats and a revamped sidebar with custom sections. Several critical bugs affecting Qwen-Image-2.1 and GGUF workflows were addressed, alongside fixes for port binding conflicts and AMD/Windows compatibility issues.

→
Unsloth 桌面端和 Web 端 UI 持续快速迭代，多项重要的 UX 改进已全面落地。Block-FP8 LoRA 训练的性能优化在现代 GPU 上实现了 4-15 倍加速，Studio 新增了常见文件格式的文档查看功能，侧边栏也重新设计支持自定义区块。多个影响 Qwen-Image-2.1 和 GGUF 工作流的关键问题已修复，同时解决了端口绑定冲突和 AMD/Windows 兼容性问题。

**Releases section:**
→ "发布动态"

**New Model & Hardware Support section:**
→ "新模型与硬件支持"

**Performance & Optimization section:**
→ "性能优化"


**Stability & Regressions section:**
→ "稳定性与回归问题"

**What This Means for Application Developers section:**
→ "对应用开发者的意义"

Now I'll translate the table content and other details throughout the document.</think>

# Unsloth 要闻 — 2026-09-27

## 今日要闻

Unsloth 桌面端和 Web 端 UI 持续快速迭代，多项重要的 UX 改进已全面落地。Block-FP8 LoRA 训练的性能优化在现代 GPU 上实现了 4-15 倍加速，Studio 新增了常见文件格式的文档查看功能，侧边栏也重新设计支持自定义区块。多个影响 Qwen-Image-2.1 和 GGUF 工作流的关键问题已修复，同时解决了端口绑定冲突和 AMD/Windows 兼容性问题。

---

## 发布动态与重大变更

| 变更 | 描述 | 相关 Issue/PR |
|------|------|---------------|
| **无新版本** | 过去 24 小时内无发布 | — |

---

## 新模型与硬件支持

| 模型/架构 | 支持详情 | 参考 |
|-----------|----------|------|
| **Qwen-Image-2.1** | 多项修复已合并 — GGUF 导出、FP8 text encoder 回退处理、资源下载修复 | Issue #11637, #11638, #11826 |
| **Qwen3.5 GatedDeltaNet** | 暂不支持 Context Parallel；FSDP2 下的混合模型分片受阻 | Issue #12051 |
| **Llama 3.2 Vision** | 修复 Flash Attention 兼容性问题（vision/cross-attention 缺少 `is_causal` 参数） | PR #12033 |
| **DeepSeek v4.1** | 请求添加 Flash GGUF 支持 — 尚未实现 | Issue #10838 |
| **GPT-OSS 20B NF4/QLoRA** | Windows/PyTorch 2.6 支持咨询；正在调查 | Issue #12044 |

---

## 性能优化

| 领域 | 变更 | 影响 | PR |
|------|------|------|-----|
| **Block-FP8 LoRA 训练** | 激进执行 FP8 线性层，128 行 GEMM 分块使用 8 个 warp | 在 RTX Pro 6000 上 **快 4-15 倍**（8.9x），L4（14.9x），H100（7.9x），B200（3.7-6.5x） | #12027 |
| **nvidia-smi 轮询** | 缓存并合并后端读取 | 消除每次调用 25-100ms 延迟；`/api/system/hardware` 从 671ms 降至可接受水平 | #11995 |
| **GGUF 卸载** | 全模型卸载时保留权重在主机端副本 | 避免大模型产生不必要的副本 | #12022 |
| **Image VAE 解码** | 在 NVIDIA 上保持 eager 解码的 VAE 连续性；fp16 GPU 上以 fp16 解码 SDXL VAE | 加速图像生成管线 | #12035, #12036 |
| **Gemma2 批量解码** | 修复 Flash Attention 软截断下的填充掩码处理 | 修复 token 生成正确性问题 | #12008 |
| **GKD Liger 损失函数** | 与原生 TRL 目标函数对齐 | 修复知识蒸馏的正确性问题 | #12007 |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | GGUF 导出在只读 HuggingFace 缓存上失败 | 待处理 | — |
| **高** | Qwen-Image-2.1 在选择 GGUF 后重复下载 19GB 资源 | 待处理 | — |
| **高** | Windows 端口绑定竞态（127.0.0.1 vs 0.0.0.0） | 待处理 | #12011 |
| **中** | Deep Research 在助手消息属于 `chat_generation_runs` 时失败 | 已关闭 | — |
| **中** | DiffusionGemma 多 GPU 推理在 transformers 4.57.6 上受阻 | 待处理 | — |
| **中** | 工具调用在超过最大时长后仍停留在"运行中"状态 | 待处理 | #12048 |
| **低** | 大型代码块导致 UI 卡顿 | 待处理 | #10769 |
| **低** | 停止按钮在取消等待中时无反馈 | 已关闭 | #11975 |

---

## 对应用开发者的意义

1. **桌面端用户**：多项重要 UX 改进可期待 — 文档查看、自定义侧边栏区块、更精细的 GPU 内存控制以及主题定制功能已上线或正在开发。重试按钮现已可在图片/视频页面上访问。

2. **Windows + WSL2 用户**：vLLM 和 SGLang 现可在私有 WSL2 发行版中运行，使 Windows 用户能够使用更快的推理后端（实验性功能）。

3. **FP8 训练实践者**：如果您正在进行块式 FP8 LoRA 训练（FineGrainedFP8Config、DeepSeek 风格），4-15 倍的加速效果显著 — 请在当前 Unsloth 版本上重新测试您的工作负载。

4. **Qwen-Image-2.1 用户**：多个问题正在追踪中；如果遇到重复下载或 GGUF 导出失败，这些已知问题正在积极处理。

5. **MCP 集成**：现已支持按模型自定义 llama.cpp INI 配置，可在不覆盖 Studio 优化器的情况下对推理参数进行细粒度控制。

6. **端口冲突**：如果运行多个 Studio 实例或与其他服务冲突，端口绑定修复（#12011）解决了 Windows 特定的竞态条件问题。

---

*数据来源：GitHub — unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*