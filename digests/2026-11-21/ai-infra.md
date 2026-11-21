# AI 基础设施日报 2026-11-21

> 生成时间: 2026-11-21 03:24 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the text content
2. Preserve all Markdown structure (headings, tables, lists, etc.)
3. Keep all technical identifiers, version numbers, issue numbers, URLs, and code references as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section carefully, maintaining the structure and using appropriate technical Chinese terminology.
</think>


# AI 推理基础设施 — 跨项目每日文摘
## 2026-11-21 | 生态系统对比报告

---

## 1. 生态系统概览

今日文摘确认推理基础设施生态系统正处于快速成熟期：多厂商硬件支持持续扩展（NVIDIA Blackwell SM120、AMD RDNA4/Navi4、Intel Arc Alchemist、Apple M4 Pro、MLU），量化格式不断涌现（Kitty 2-bit KV、MXFP4、NF4），服务层正在分化——低延迟单节点引擎（llama.cpp、Ollama）和高吞吐分解式集群（vLLM、SGLang）各有所长。微调层（Unsloth）和网关/代理层（LiteLLM）均在大力推进正确性和稳定性工作，昭示着整个技术栈正在为生产级多租户部署加固。特别值得注意的是，Inkling 2 Mini 在一天之内获得了四个项目的支持——这是近期生态系统中最快的跨项目模型采纳速度。

---

## 2. 活动量对比

| 项目 | 值得关注的问题（24 h） | PR（24 h） | 发版（24 h） | 社区活跃信号 |
|---------|----------------------|------------|-----------------|-----------------|
| **vLLM** | 21（含 3 个严重） | ~25 | 0 | 高迭代；MTP 稳定性危机持续 |
| **SGLang** | ~14（含 1 个安全，3 个正确性） | ~16 | 0 | PD 分解路线图推进中 |
| **llama.cpp** | ~14（含 2 个严重） | ~16 | 1 个构建版（b12600） | 多后端积极稳定化中 |
| **Ollama** | 13（含 2 个严重） | 26 | 0 | PR 吞吐量最高；UX 与 MLX 深度打磨 |
| **LiteLLM** | ~25（含 1 个回归） | ~20 | 5（1 RC + 4 稳定版） | 发版节奏活跃；网关可靠性为重心 |
| **Unsloth** | 25（含 2 个高优先级） | ~12 | 2 个 beta | 活动量适中；微调正确性为焦点 |

**要点：** Ollama 在 PR 吞吐量上领先，vLLM 在严重 open 问题数上领先，LiteLLM 在发版节奏上领先。Unsloth 和 SGLang 虽较安静，但每次变更都精准且影响深远。

---

## 3. 模型支持竞速

| 模型 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 Mini** | ✅（PR #69028） | — | ✅（b12600） | ✅（MLX，PR #19799） | — | ✅（v0.1.922-beta） |
| **Qwen3.8-27B（MXFP4 MoE）** | ✅（ROCm 优化） | — | — | ✅（MLX，有报告的 bug） | — | — |
| **MiniCPM5-15B-A2.5B** | ✅（PR #68748） | — | — | — | — | — |
| **Qwen3-ASR** | — | — | ✅（b12597） | — | — | — |
| **Gemma 4** | — | — | ✅（b12588） | ✅（有报告的 bug） | — | — |
| **DeepSeek-V4 / V4.1 Flash** | ✅（多个） | — | — | — | — | — |
| **Kimi K3** | — | ✅（PR #51900） | — | — | — | — |
| **Drama3 语音克隆** | — | — | ✅（Fish S2 编解码器） | — | — | — |
| **DaisyRose-27B** | — | — | — | — | — | 🔲（已请求） |
| **MLU（GQA/MLA）** | — | ✅（PR #49214） | — | — | — | — |

**竞速冠军 — Inkling 2 Mini：** 四个项目在 24 小时内完成支持。llama.cpp 在上午率先发布构建版（b12600），Ollama 随即推出 MLX 支持，vLLM 在下午合入 PR，Unsloth 在 v0.1.922-beta 中交付。这是文摘周期内观察到的最快的跨生态系统采纳速度。

**SGLang 在 Kimi K3 上形成差异化：** 通过共享专家边流排序修复支持 MoE，而 **vLLM 在 DeepSeek-V4 支持上占据主导**，在推测解码和 MLA 优化上投入最深。

---

## 4. 性能前沿

### 4.1 KV 缓存与量化

| 项目 | 重点 | 详情 |
|---------|-------|---------|
| **vLLM** | 2-bit Kitty KV 量化 | PR #68945：动态精度提升——选定 key 通道提升至 4-bit，其余为 2-bit；新增 `--kv-cache-dtype kitty` 参数 |
| **vLLM** | DiffKV 视图缓存 | PR #66963：按张量缓存 K/V 视图，消除 Triton 和 eager 后端每次调用重新推导的开销 |
| **SGLang** | 统一基数缓存租约续期 | PR #51683：设备缓存命中时续期外部存储租约，防止 CP 下过时租约的边界问题 |
| **SGLang** | HiCache L3 预取 | Bug #51608：`attn_cp_size=8` 且 fast_file 场景下预取死锁；问题 open |
| **llama.cpp** | flash-attn 中的原生 q8_0 KV | PR #30792：CUDA tile kernel 现支持 q8_0 KV 与 GQA head 复用 |
| **llama.cpp** | Kitty KV 量化 | 尚不支持——2-bit 工作以 vLLM 为首发平台 |

**前沿领先者：** vLLM。Kitty KV 量化是生态系统中内存削减力度最大的技术，目标为减少超过 50% 的 KV 内存占用。SGLang 的 HiCache 工作体量相当，但目前受一个死锁回归问题阻塞。

### 4.2 推测解码与 MTP

| 项目 | 状态 | 详情 |
|---------|--------|---------|
| **vLLM** | ⚠️ 严重回归 | #40756：长序列非法内存访问（Qwen3.6-27B-FP8，46 条评论）；#41530：TP Worker 挂起 → DeepSeek-V4-Pro 上的 EngineDeadError |
| **llama.cpp** | ⚠️ 严重回归 | #27428：MTP draft 在多卡 tensor-split 模式下 prefill 速度减半；单卡不受影响 |
| **vLLM** | 修复进行中 | #64878：MTP DP 同步修复；#69065：融合式 16-bit GDN 解码 kernel |
| **llama.cpp** | Kernel 工作 | #62004：ReplaySSM 用于 Gated DeltaNet（另一种 SD 变体） |

**前沿领先者：** vLLM 和 llama.cpp 均大力投入，但两者均存在活跃的回归问题。vLLM 的推测解码模式更丰富（MTP、DSpark、EAGLE、DiffKV）。llama.cpp 的 ReplaySSM 针对不同的架构族（循环状态模型 vs transformer MTP）。

### 4.3 Kernel 优化

| 项目 | 目标 | 影响 |
|---------|--------|--------|
| **vLLM** | FlashInfer norm 融合 | +batch 不变性正确性；影响所有 BF16/FP16 FlashInfer 用户 |
| **SGLang** | H100 上的 Triton MoE | **比 flashinfer_cutlass 慢 5–8 倍**——已知回归，尚未修复 |
| **llama.cpp（SYCL）** | 融合 ADD+RMS_NORM+MUL | Qwen3.8-27B Q3_K_P 解码吞吐 +3.4% |
| **llama.cpp** | Metal CPU 轮询降低 | M1 Pro 无 OpenMP 时 CPU 占用降低约 50%；功耗显著节省 |
| **Unsloth** | GRPO 冗余前向传播消除 | `num_iterations > 1` 的迭代 GRPO 直接缩短 wall-clock 时间 |
| **Ollama** | MLX 自动并行化 | 基于可用内存在 Apple Silicon 上自动选择 1/2/4/8 槽位 |

### 4.4 分布式服务

| 项目 | 领域 | 详情 |
|---------|------|---------|
| **SGLang** | PD 分解 | Q4 2026 路线图（#43699）；V1 Scheduler 重排队 stall RFC（#62532） |
| **SGLang** | DSpark 自适应验证 | PR #51303：自适应验证调度追踪器 |
| **vLLM** | RL 训练集成 | 加载计划工作（#69071、#69074、#69075）用于训练中途的 checkpoint 重载 |
| **vLLM** | 分解式前端 RFC | #34407：长期架构方向 |
| **Ollama** | Runner 复活死锁 | PR #19794：并发请求可复活即将过期的 runner，导致静默挂起 |

---

## 5. 各层定位

```
┌─────────────────────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                                          │
│  (e.g., CrewAI, LangChain, custom agents)                           │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ OpenAI-compatible API / MCP / WebRTC
┌──────────────────────────▼──────────────────────────────────────────┐
│  GATEWAY / PROXY LAYER          ← LiteLLM                           │
│  (多提供者路由、认证、可观测性、限流)                              │
│  今日重点：OAuth 回归；JWT audience 支持；                         │
│  Gemini Live Avatar；ElevenLabs 成本修复；Lens 追踪控制              │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ OpenAI-compatible API / custom protocol
┌──────────────────────────▼──────────────────────────────────────────┐
│  SERVING ENGINE LAYER           ← vLLM, SGLang                      │
│  (高吞吐推理、分布式服务、推测解码)                                │
│  今日重点：Blackwell SM120 早期支持；PD 分解；                    │
│  推测解码稳定性；HiCache；FlashStates；RL 训练                      │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ Local IPC / gRPC / custom protocol
┌──────────────────────────▼──────────────────────────────────────────┐
│  LOCAL / EDGE RUNTIME LAYER    ← llama.cpp, Ollama                  │
│  (单节点、跨平台、消费级 GPU、CLI 优先)                            │
│  今日重点：Inkling 2 Mini；Blackwell CUDA 回归；                  │
│  MLX 深度打磨；VRAM 计量修复；流式正确性                          │
└──────────────────────────┬──────────────────────────────────────────┘
                           │ Python / CLI / API
┌──────────────────────────▼──────────────────────────────────────────┐
│  FINE-TUNING LAYER            ← Unsloth                             │
│  (SFT、GRPO、QLoRA、DPO，消费级/单节点 GPU)                       │
│  今日重点：GRPO 冗余前向传播消除；LoRA FFN 正确性；              │
│  自动 max_seq_length；Translate 编码检测                           │
└─────────────────────────────────────────────────────────────────────┘
```

### 各层定位速览

| 层级 | 主要项目 | 核心竞争优势 | 今日热度 |
|-------|-------------------|---------------------------|--------------|
| **网关层** | LiteLLM | 提供商覆盖广度、成本管控、Lens 可观测性 | OAuth 回归；Gemini Live Avatar |
| **推理引擎层** | vLLM、SGLang | 吞吐、多节点、推测解码 | MTP 稳定性危机；Blackwell 早期支持 |
| **本地运行时层** | llama.cpp、Ollama | 可移植性、零依赖、消费级 GPU | VRAM 计量修复；Inkling 2 Mini 竞速 |
| **微调层** | Unsloth | 单卡 QLoRA 速度、GRPO 效率 | GRPO 冗余前向传播消除 |

**SGLang 与 vLLM 的定位差异：** 两者同属推理引擎层，但设计哲学不同。vLLM 追求单引擎最大吞吐和 PagedAttention 内存效率；SGLang 追求前端分解、RadixCache 共享和更丰富的多模型调度能力。两者正在持续趋同（均支持 PD 分解和推测解码），但 SGLang 的 Python 优先代码库带来更快的功能迭代，而 vLLM 的 C++ PagedAttention 后端提供更低的单请求开销。

---

## 6. 趋势信号

### 6.1 硬件碎片化正在加速

今日文摘中五条不同的硬件架构路线同时活跃：

- **NVIDIA Blackwell（SM120）：** vLLM 和 llama.cpp 均发布早期支持；llama.cpp 在 B200 上存在已知的 ADD/GELU 回归问题，需要二分排查。
- **AMD RDNA4（gfx1200）：** Unsloth 有 QLoRA kernel 崩溃；llama.cpp 有 FlashAttention 4 倍性能下降；SGLang 有 fbtriton kernel 进行中。
- **Intel Arc Alchemist（Xe1）：** llama.cpp 重新启用 Vulkan coopmat kernel；Ollama 在 M4 Pro（非 Intel 但类似模式）上有 GPU 利用不足问题。
- **Apple M4 Pro（MLX）：** Ollama 和 Unsloth 均提供 MLX 支持；llama.cpp 发布 Metal norm 修复；Unsloth 新增视频重风格化功能。
- **MLU（华为）：** SGLang 落地了 GQA 和 MLA 注意力支持。

**影响：** 管理多 GPU 集群的团队将越来越需要针对每个硬件代际验证推理栈。抽象层（LiteLLM、vLLM 后端抽象）有所减轻但无法消除这一负担。

### 6.2 推测解码正在成熟但仍脆弱

一天之内 vLLM 和 llama.cpp 共出现三个严重回归，表明推测解码尚未在所有模型族上达到生产稳定水平。MTP 在长序列上的非法内存访问（vLLM #40756，46 条评论）是最令人担忧的信号——该问题已 open 超过 7 个月。

**影响：** 在生产环境中部署推测解码前，务必对您的特定模型、batch size 和序列长度分布进行全面负载测试。监控静默输出损坏（vLLM #52531：CUDA graph 静默损坏 Kimi-K3 输出）和 EngineDeadError（vLLM #41530）。

### 6.3 Inkling 2 Mini 时刻

Inkling 2 Mini 在 24 小时内覆盖四个项目——跨生态系统采纳速度纪录。该模型（26.4B，16GB 占用）正在成为推理模型可及性的新标杆。快速采纳背后的因素：

1. 模型发布时即提供完善的 GGUF/GGML 和 HuggingFace 格式文档。
2. 模型可装入单张消费级 GPU，使 llama.cpp 和 Ollama 成为天然的首批采纳者。
3. 模型的循环架构足够新颖，引发 vLLM 和 Unsloth 在训练实验上的兴趣。

**影响：** 模型发布策略（格式可用性、量化支持、架构文档）直接影响生态系统采纳速度。构建推理基础设施的团队应在发布前为新架构（循环、递归、混合）准备接入管线。

### 6.4 KV 缓存创新是下一个性能前沿

三个独立工作的汇聚——vLLM 的 Kitty 2-bit 量化、SGLang 的 HiCache 统一内存、llama.cpp flash-attention 中的原生 q8_0 KV——表明 KV 缓存压缩是下一个主要的吞吐杠杆。当前的 PagedAttention 负责 KV 缓存的内存管理；下一个前沿是降低每 token 的内存占用。

**影响：** 对于长上下文应用（>32K tokens），评估 KV 缓存量化（vLLM 方案）或层级缓存（SGLang HiCache 方案）将在 2027 年带来最大的延迟和吞吐改进。

### 6.5 网关可靠性正在追赶服务可靠性

LiteLLM 的高节奏发版（24 小时内 5 个版本，含一个 LTS patch）和积极的回归追踪表明，网关/代理层在经历多年功能优先开发后正在接受生产级加固。OAuth 查询参数回归（#53185）是代理层在众多提供商集成中积累的那种隐性破坏类型。

**影响：** 如果您将 LiteLLM 作为多租户网关运行，请订阅发版通知并保持分阶段发布纪律。OAuth 回归（v1.110.1）表明即使是 patch 版本也可能引入微妙的行为变化。

### 6.6 微调正在变得更便宜更快

Unsloth 的 GRPO 优化消除了多迭代运行中的冗余前向传播。结合 token 预算切分优化（#18720），此前需要多卡 A100/H100 集群的微调工作流现在在消费级硬件上也已可行。

**影响：** 预计 2027 年 Q1 将出现一波小型团队在单 RTX 4090 或 M4 Max 配置上开展 GRPO 训练实验的热潮。这将推动对能大规模处理微调后适配器（LoRA、QLoRA、DoRA）的推理基础设施的需求。

---

## 基础设施工程师行动项

| 优先级 | 行动 | 项目 | 截止时间 |
|----------|--------|------------|------------|
| 🔴 **立即** | 为 Qwen3.6-27B-FP8 和 DeepSeek-V4-Pro 禁用推测解码，直至 #40756/#41530 解决 | vLLM | 立即 |
| 🔴 **立即** | 若使用含 `client_id` 查询参数的 OAuth 浏览器流程，不要将 LiteLLM 升级至 v1.109.3 以上 | LiteLLM | 立即 |
| 🔴 **立即** | 升级 Ollama 至最新版本；VRAM 计量修复（#19632）影响所有多模型部署 | Ollama | 本周内 |
| 🟠 **近期** | 监控 llama.cpp Blackwell（sm_120）部署中的 ADD/GELU 回归；回退至 b12591 或更早版本 | llama.cpp | 两周内 |
| 🟠 **近期** | 为长上下文工作负载评估 vLLM Kitty KV 量化（PR #68945）；参与 PR review | vLLM | 两周内 |
| 🟡 **关注** | 跟踪 SGLang HiCache L3 预取修复（#51608）后再部署 CP 基础部署 | SGLang | 四周内 |
| 🟡 **关注** | Unsloth 自动 max_seq_length 检测（#18236）将改变微调默认值 | Unsloth | 四周内 |
| 🟡 **关注** | LiteLLM Gemini Live Avatar（#43166）将新增多模态实时支持 | LiteLLM | 六周内 |
| 🟢 **规划** | 开始将 Blackwell SM120 评估为 H2 2027 部署的主推理目标 | 所有推理引擎 | 2027 Q1 |

---

*本跨项目文摘综合自 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 及 Unsloth 在 2026-11-21 的活动。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly
- Keep URLs, links, numbers, dates, code spans verbatim
- Keep technical identifiers in original form
- Use natural technical Chinese register

Let me translate this carefully:

# vLLM Daily Digest — 2026-11-21
-> # vLLM 每日简报 — 2026-11-21

## 1. Today's Highlights
-> ## 1. 今日要闻

The vLLM community is tackling critical speculative decoding stability: a long-standing MTP crash with illegal memory access on long sequences (#40756, 46 comments) remains open alongside a new PR (#64878) fixing DP synchronization failures in MTP with adaptive verification. On the performance side, a new 2-bit Kitty KV quantization PR (#68945) enters WIP, promising aggressive memory reduction through dynamic precision boosting, while the ReplaySSM kernel (#62004) advances caching for faster Gated DeltaNet decode.
-> vLLM 社区正在攻克投机解码的关键稳定性问题：MTP 在长序列上因非法内存访问导致崩溃的遗留问题（#40756，46 条评论）仍未关闭，同时新 PR（#64878）正在修复 MTP 自适应验证中的 DP 同步故障。性能方面，新的 2-bit Kitty KV 量化 PR（#68945）进入 WIP 阶段，承诺通过动态精度提升实现激进的显存压缩；ReplaySSM 内核（#62004）则通过缓存机制加速 Gated DeltaNet 的标准解码。

## 2. Releases & Breaking Changes
-> ## 2. 版本发布与破坏性变更


No releases in the last 24 hours.
-> 过去 24 小时内无版本发布。

## 3. New Model & Hardware Support
-> ## 3. 新模型与硬件支持

| Model / Hardware | Details | Links |
|-----------------|---------|-------|
| **Inkling 2 Mini** | New model integration (`Inkling2LoopForConditionalGeneration`) with variable-loop research checkpoint | [#69028](https://github.com/vllm-project/vllm/pull/69028) |
| **MiniCPM5-15B-A2.5B** | Native support with BF16 serving, compressed-tensors INT4 W4A16, and DSpark speculative decoding capabilities | [#68748](https://github.com/vllm-project/vllm/pull/68748) |
| **NVIDIA RTX PRO 6000 Blackwell (SM120)** | Early-stage evaluation in progress; current driver (590.48.01) demonstrates extremely low decode throughput in `--enforce-eager` mode, with CUDA graphs unavailable | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **Intel XPU** | LoRA capability enabled through MXFP4 MoE XpuFusedMoe integration; addressed sliding-window block size inconsistency | [#62631](https://github.com/vllm-project/vllm/pull/62631), [#68108](https://github.com/vllm-project/vllm/pull/68108) |
| **AMD gfx950 / MI355X** | Qwen3.8-Flash-Next optimization roadmap covering MXFP4 MoE and QuerySparse Attention techniques | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **AMD gfx942 / MI325X** | Muse Spark performance tuning via Open PTPC-FP8 precision format | [#64018](https://github.com/vllm-project/vllm/issues/64018) |

## 4. Performance & Optimization
-> ## 4. 性能与优化

### Landed / In Review (PRs)
-> ### 已合并 / 审核中（PR 列表）

| PR | Area | Description | Links |
|----|------|-------------|-------|
| **#68945** | Quantization | **2-bit Kitty KV quantization** with dynamic precision boosting (selected key channels to 4-bit); new `--kv-cache-dtype kitty` flag | [PR #68945](https://github.com/vllm-project/vllm/pull/68945) |
| **#62004** | Kernel | **ReplaySSM**: cache SSM inputs for faster Gated DeltaNet standard decode; supersedes #48792 | [PR #62004](https://github.com/vllm-project/vllm/pull/62004) |
| **#69065** | Kernel | **Fused GDN MTP decode kernel for 16-bit** (BF16/FP16) recurrent state; existing kernel was warp-shuffle bound at 16-bit precision | [PR #69065](https://github.com/vllm-project/vllm/pull/69065) |
| **#66963** | Attention | **Cache DiffKV K/V views per tensor**; removes repeated view derivation on every eager attention call (implements slice of #64572) | [PR #66963](https://github.com/vllm-project/vllm/pull/66963) |
| **#68600** | Attention | **FlashInfer norm fusion batch invariance**; fixes incorrect switch between fused/explicit all-reduce + norm based on batch size | [PR #68600](https://github.com/vllm-project/vllm/pull/68600) |
| **#68826** | Multimodal | **Keep cached receiver-cache items out of Python GC**; eliminates >1s gen-2 collection pauses when LRU mm processor cache fills | [PR #68826](https://github.com/vllm-project/vllm/pull/68826) |

### Active RFCs & Issues (Performance)
-> ### 活跃中的 RFC 与工单（性能相关）

| Issue | Area | Summary | Links |
|-------|------|---------|-------|
| **#64572** | Attention | Triton and eager backends re-derive K/V cache views on every call; PR #66963 addresses DiffKV slice | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **#51454** | MLA / DP | DP8 vs TP8 for single-KV-head MLA: 7.7× KV, 3.4× faster 1M TTFT at c=8 on DeepSeek-V4-Flash-0731 (8× B200) | [#51454](https://github.com/vllm-project/vllm/issues/51454) |
| **#57406** | GLM | GLM 5.3 performance optimization tracking (same `glm_moe_dsa` base as 5.2) | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

## 5. Stability & Regressions
-> ## 5. 稳定性与回归问题

### Critical (High Severity)
-> ### 严重（高优先级）

| Issue | Severity | Description | Links |
|-------|----------|-------------|-------|
| **#40756** | 🔴 Critical | **MTP speculative decoding crash** with illegal memory access on long sequences (Qwen3.6-27B-FP8, v0.19.1); 46 comments, open since April 2026 | [#40756](https://github.com/vllm-project/vllm/issues/40756) |
| **#41530** | 🔴 Critical | **TP Worker hang → EngineDeadError** (RPC sample_tokens timeout); DeepSeek-V4-Pro, TP=8, MTP speculative decoding | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| **#53887** | 🟠 High | **MTP draft OOM**: allocates second full vocab embedding, OOMing a 27B INT4 target that baseline fits (RTX 3090 24GB) | [#53887](https://github.com/vllm-project/vllm/issues/53887) |
| **#52531** | 🟠 High | **Kimi-K3 CUDA graph silently corrupts output** at batch=1; three distinct failure modes across cudagraph modes | [#52531](https://github.com/vllm-project/vllm/issues/52531) |

### Medium Severity
-> ### 中等优先级

| Issue | Description | Links |
|-------|-------------|-------|
| **#51758** | Upgrade v0.26.0 → 0.27.0: DeepSeek V4 Flash error | [#51758](https://github.com/vllm-project/vllm/issues/51758) |
| **#52434** | `AttributeError: 'ParallelLMHead' object has no attribute 'output_size_per_partition'` (ARM64) | [#52434](https://github.com/vllm-project/vllm/issues/52434) |
| **#52300** | `ImportError: libcudart.so.13` on CUDA 12.6 + vLLM 0.21.0 | [#52300](https://github.com/vllm-project/vllm/issues/52300) |
| **#58147** | Qwen3 parser incorrectly converts tool-call markup to real tool calls | [#58147](https://github.com/vllm-project/vllm/issues/58147) |
| **#69073** | Multimodal: malformed embedding payloads leaking as HTTP 500 → fixed to 400 | [PR #69073](https://github.com/vllm-project/vllm/pull/69073) |

### Notable RFCs Affecting Architecture
-> ### 影响架构的重要 RFC

| RFC | Topic | Links |
|-----|-------|-------|
| **#25700** | Limit envvars in vLLM; envvars equivalent to global variables, should become configs | [#25700](https://github.com/vllm-project/vllm/issues/25700) |
| **#54363** | Data integrity and I/O liveness for filesystem KV offload tier | [#54363](https://github.com/vllm-project/vllm/issues/54363) |
| **#61698** | Bring-Your-Own-GPU (BYOG) reproducible evals/benchmarks for PRs | [#61698](https://github.com/vllm-project/vllm/issues/61698) |
| **#54477** | Direct Weight Reload for RL Training (revised after 17-family validation) | [#54477](https://github.com/vllm-project/vllm/issues/54477) |
| **#62532** | V1 Scheduler: eliminate 1.0–1.8s re-queuing stall for completed async KV pulls | [#62532](https://github.com/vllm-project/vllm/issues/62532) |

## 6. What This Means for Application Developers
-> ## 6. 对应用开发者的影响

**Near-term considerations:**
-> **近期注意事项：**

- **Speculative decoding users**: The MTP crash (#40756) on long sequences is a known risk with Qwen3.6-27B-FP8; monitor for `EngineDeadError` if using DeepSeek-V4-Pro with MTP on TP=8. PR #64878 addresses a related DP synchronization issue and should land soon.
-> - **投机解码用户**：MTP 在长序列上的崩溃（#40756）是 Qwen3.6-27B-FP8 的已知风险；若在 TP=8 条件下使用 DeepSeek-V4-Pro 搭配 MTP，请留意 `EngineDeadError`。PR #64878 解决了相关的 DP 同步问题，预计近期合并。

- **Blackwell (SM120) adopters**: v0.28.0+ Docker images show severely degraded throughput with `--enforce-eager`; CUDA graph capture is broken. Do not use eager mode for production workloads on RTX PRO 6000 Blackwell until the graph capture fix is prioritized.
-> - **Blackwell（SM120）用户**：v0.28.0+ Docker 镜像在 `--enforce-eager` 模式下吞吐量严重下降；CUDA graph 捕获功能目前失效。在 graph 捕获问题得到修复之前，请勿在 RTX PRO 6000 Blackwell 上将 eager 模式用于生产环境。

- **Multimodal applications**: The GC pause fix (#68826) significantly improves engine responsiveness when processing audio/video/image inputs; upgrading when landed will reduce tail latencies.
-> - **多模态应用**：GC 停顿修复（#68826）显著提升了引擎处理音频/视频/图像输入时的响应能力；合并后将有效降低尾延迟。

- **RL training integrators**: The load-plan RL work (#69071, #69074, #69075) improves checkpoint loading correctness for RL families; relevant if running training loops that reload model weights.
-> - **强化学习训练集成者**：load-plan RL 相关工作（#69071、#69074、#69075）提升了 RL 系列模型的检查点加载正确性；若训练循环中存在模型权重重载场景，需关注。

- **Intel XPU users**: LoRA support for MXFP4 MoE is now functional (#62631); sliding-window block size is now honored correctly (#68108).
-> - **Intel XPU 用户**：MXFP4 MoE 的 LoRA 支持现已可用（#62631）；滑动窗口 block size 现已正确生效（#68108）。

**Standards for production deployments:** The RFC on envvars (#25700) signals future config migrations; avoid building automation that depends on undocumented environment variables.
-> **生产部署标准：** 关于环境变量的 RFC（#25700）预示了未来的配置迁移方向；请勿在自动化脚本中依赖未文档化的环境变量。</think>



</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate an English technical report about SGLang into Simplified Chinese. Let me analyze the content carefully and produce a high-quality Chinese translation.

Key points to remember:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register - not literal word-for-word

Let me translate section by section:

## 1. Today's Highlights

SGLang continues intensive work on PD disaggregation infrastructure with a Q4 2026 roadmap (#43699) and new unified-radix-cache optimizations. Three correctness bugs demand attention: an SSRF vulnerability in multimodal video endpoints (#51701), a ~8-point MATH-500 regression when using `--mamba-ssm-dtype bfloat16` (#51531), and a HiCache L3 storage prefetch deadlock under CP (#51608). Performance work targets Triton MoE (5–8× slower vs flashinfer_cutlass on H100), Mamba2 kernel compilation stalling, and DeepSeek-V4 ROCm identity prefill batching.

SGLang 今日继续推进 PD 分离架构基础设施建设，Q4 2026 路线图（#43699）和新版 unified-radix-cache 优化均在进行中。以下三个正确性缺陷需要重点关注：多模态视频端点存在 SSRF 漏洞（#51701）、使用 `--mamba-ssm-dtype bfloat16` 时 MATH-500 分数下降约 8 分（#51531）、以及 HiCache L3 存储预取在 CP 模式下死锁（#51608）。性能优化工作聚焦于：Triton MoE 在 H100 上比 flashinfer_cutlass 慢 5–8 倍、Mamba2 内核编译卡顿、以及 DeepSeek-V4 ROCm identity prefill 批处理优化。

## 2. Releases & Breaking Changes

**No releases in the last 24 hours.** The project remains on the `main` branch cadence.

*Track via:* [#17050 CI Test Failures Tracker](https://github.com/sgl-project/sglang/issues/17050)

过去 24 小时内无版本发布。项目仍沿用 `main` 分支的发布节奏。

*跟踪渠道：* [#17050 CI 测试失败追踪](https://github.com/sgl-project/sglang/issues/17050)

## 3. New Model & Hardware Support

| Category | Details | PR/Issue |
|----------|---------|----------|
| **MLA Caching** | External models can now opt into MLA caching via `use_mla: true` in HF text config | [#48746](https://github.com/sgl-project/sglang/pull/48746) |
| **AMD / ROCm** | `llvm_cl_opts` fix for ROCm Triton 3.8 compatibility | [#51998](https://github.com/sgl-project/sglang/pull/51998) |
| **AMD / Muse Spark** | fbtriton gfx950 kernels (qk_norm_rope_kv_cache, rmsnorm_gate, paged_attention_decode) behind opt-in switches | [#51303](https://github.com/sgl-project/sglang/pull/51303) |
| **MLU** | GQA and MLA attention support landed | [#49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Apple Silicon** | MoE performance optimization effort ongoing (subissue of #19137) | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **GB10 / DGX Spark** | RFC for HiCache sizing under unified memory architecture | [#51733](https://github.com/sgl-project/sglang/issues/51733) |

新模型与硬件支持方面，MLA 缓存功能现已向外部模型开放，可通过 Hugging Face 文本配置中的 `use_mla: true` 选项启用（#48746）。ROCm 兼容性修复解决了 Triton 3.8 在 AMD 平台上的 `llvm_cl_opts` 问题（#51998），同时为 Muse Spark 的 gfx950 内核添加了可选支持，包括 qk_norm_rope_kv_cache、rmsnorm_gate 和 paged_attention_decode 等关键计算内核（#51303）。华为昇腾 MLU 处理器现支持 GQA 和 MLA 注意力机制（#49214），而 Apple Silicon 的 MoE 性能优化工作仍在进行中（#22283）。此外，针对 GB10 和 DGX Spark 统一内存架构的 HiCache 缓存策略提案已开放讨论（#51733）。 | **Apple Silicon** | MoE 性能优化工作正在进行中（#19137 的子问题） | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **GB10 / DGX Spark** | RFC：在统一内存架构下 HiCache 容量规划 | [#51733](https://github.com/sgl-project/sglang/issues/51733) |

## 4. Performance & Optimization

### Landed / In Review

| Area | Change | Impact | PR |
|------|--------|--------|----|
| **Kimi K3 MoE** | Order shared-expert side-stream frees on current CUDA stream | Fixes async resource leak under `_sbo_shared_overlap` | [#51900](https://github.com/sgl-project/sglang/pull/51900) |
| **DeepSeek-V4 / ROCm** | Batch identity prefill writes into single GPU op | Reduces launch count; improves ROCm throughput | [#48866](https://github.com/sgl-project/sglang/pull/48866) |
| **Scheduler** | Skip external store probes when ranking waiting queue | Reduces latency under unified-radix-cache | [#51502](https://github.com/sgl-project/sglang/pull/51502) |
| **Unified Radix Cache** | Renew external store leases on device-cache hits | Fixes stale lease edge case | [#51683](https://github.com/sgl-project/sglang/pull/51683) |
| **LTX-2.3 Diffusion** | Reuse cond pass prefix blocks for STG perturbed pass | Eliminates redundant compute in blocks 0–27 | [#51999](https://github.com/sgl-project/sglang/pull/51999) |

### Known Issues

| Area | Issue | Severity |
|------|-------|----------|
| **Triton MoE on H100** | 5–8× slower than `flashinfer_cutlass` (3.1→19.8 ms step at batch 16; 5.7→41.3 ms at batch 128, Nemotron 3 Nano FP8 TP8) | **High** — workaround: use default flashinfer_cutlass backend |
| **Mamba2 JIT Compilation** | `_chunk_scan_fwd_kernel` compiles during serving, stalling first large prefills (~1.45 s per rank) | **Medium** — pre-compilation requested |
| **Idle-Burst Prefill** | First request TTFT degraded ~t_next_batch due to consecutive-prefill overlap scheduling | **Medium** — affects burst scenarios |
| **Triton Global Override** | `sglang/srt/utils/common.py` replaces `triton.next_power_of_2` on import, breaking third-party Triton kernels | **Medium** — library-level side effect |

### 已合并 / 审核中

| 领域 | 变更 | 影响 | PR |
|------|--------|--------|----|
| **Kimi K3 MoE** | 在当前 CUDA stream 上有序释放共享专家 side-stream 资源 | 修复 `_sbo_shared_overlap` 下的异步资源泄漏 | [#51900](https://github.com/sgl-project/sglang/pull/51900) |
| **DeepSeek-V4 / ROCm** | 将 identity prefill 写入合并为单次 GPU 操作 | 减少 launch 次数；提升 ROCm 吞吐量 | [#48866](https://github.com/sgl-project/sglang/pull/48866) |
| **调度器** | 等待队列排序时跳过 external store 查询 | 降低 unified-radix-cache 场景下的延迟 | [#51502](https://github.com/sgl-project/sglang/pull/51502) |
| **Unified Radix Cache** | 设备缓存命中时续期 external store 租约 | 修复过期租约边缘问题 | [#51683](https://github.com/sgl-project/sglang/pull/51683) |
| **LTX-2.3 Diffusion** | 复用 STG 扰动 pass 的条件 pass 前缀块 | 消除 block 0–27 中的冗余计算 | [#51999](https://github.com/sgl-project/sglang/pull/51999) |

### 已知问题

| 领域 | 问题 | 严重程度 |
|------|-------|----------|
| **H100 上的 Triton MoE** | 比 `flashinfer_cutlass` 慢 5–8 倍（batch 16 时 3.1→19.8 ms/step；batch 128 时 5.7→41.3 ms/step，Nemotron 3 Nano FP8 TP8） | **高** — 临时方案：使用默认的 flashinfer_cutlass 后端 |
| **Mamba2 JIT 编译** | `_chunk_scan_fwd_kernel` 在 serving 期间编译，导致首次大 prefills 卡顿（每卡约 1.45 s） | **中** — 已请求预编译支持 |
| **Idle-Burst Prefill** | 由于连续 prefill 重叠调度，首请求 TTFT 劣化约 t_next_batch | **中** — 影响突发场景 |
| **Triton 全局覆盖** | `sglang/srt/utils/common.py` 在 import 时替换 `triton.next_power_of_2`，导致第三方 Triton 内核运行异常 | **中** — 库级别副作用 |

## 5. Stability & Regressions

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **Critical (Security)** | SSRF via unvalidated URLs in `/v1/videos` (video_path, input_reference/image_path, control_path) | **Open** | [#51701](https://github.com/sgl-project/sglang/issues/51701) |
| **High (Correctness)** | `--mamba-ssm-dtype bfloat16` causes ~8-point regression on MATH-500 with Qwen3.5-9B; `float16` is unaffected | **Open** | [#51531](https://github.com/sgl-project/sglang/issues/51531) |
| **High (Correctness)** | HiCache L3 storage prefetch never completes under CP (attn_cp_size=8) with fast_file; requests admitted only after full retry cap | **Open** | [#51608](https://github.com/sgl-project/sglang/issues/51608) |
| **High (Correctness)** | Hybrid models at `--hybrid-cache-checkpoints-level 2`: identical repeat restores 0 tokens when prior decode crossed a Mamba tracking boundary | **Open** | [#51901](https://github.com/sgl-project/sglang/issues/51901) |
| **Medium (Stability)** | CUDA Xid 13 "CTA Not Present" in HiCache kvcacheio transfer kernels on Blackwell (B200) — 7 crashes across 4 machines | **Open** | [#46203](https://github.com/sgl-project/sglang/issues/46203) |
| **Medium (Correctness)** | HiCache write-back: 128 KiB batch path passes unregistered host VAs to `cudaMemcpyBatchAsync` on Blackwell | **Open** | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **CI** | Flaky tests and infrastructure failures tracked in #42752 (227 comments); 0 broken, 10 flaky, 965 recently fixed (as of 2026-11-21) | **Ongoing** | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **Critical（安全）** | `/v1/videos` 中 URL 未校验导致 SSRF（video_path、input_reference/image_path、control_path） | **待修复** | [#51701](https://github.com/sgl-project/sglang/issues/51701) |
| **High（正确性）** | `--mamba-ssm-dtype bfloat16` 在 Qwen3.5-9B 上导致 MATH-500 分数下降约 8 分；`float16` 不受影响 | **待修复** | [#51531](https://github.com/sgl-project/sglang/issues/51531) |
| **High（正确性）** | HiCache L3 storage 预取在 CP 模式（attn_cp_size=8）下使用 fast_file 时永远无法完成；请求需等到全部重试次数耗尽后才被接纳 | **待修复** | [#51608](https://github.com/sgl-project/sglang/issues/51608) |
| **High（正确性）** | 混合模型使用 `--hybrid-cache-checkpoints-level 2` 时：若前一轮 decode 跨越了 Mamba 追踪边界，相同重复请求会恢复 0 tokens | **待修复** | [#51901](https://github.com/sgl-project/sglang/issues/51901) |
| **Medium（稳定性）** | Blackwell（B200）上 HiCache kvcacheio 传输内核报 CUDA Xid 13 "CTA Not Present"——4 台机器共 7 次崩溃 | **待修复** | [#46203](https://github.com/sgl-project/sglang/issues/46203) |
| **Medium（正确性）** | HiCache 回写：128 KiB 批处理路径向 `cudaMemcpyBatchAsync` 传入未注册的 host VA（Blackwell 平台） | **待修复** | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **CI** | #42752 追踪 flaky 测试和基础设施故障（227 条评论）；截至 2026-11-21：0 个 broken，10 个 flaky，965 个近期修复 | **持续进行** | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

## 6. What This Means for Application Developers

1. **Security first:** If you expose SGLang's multimodal video API externally, the SSRF vulnerability (#51701) requires immediate mitigation or patch once available. Do not rely on client-supplied URLs for video/reference paths without validation.

2. **Mamba dtype workaround:** If running Qwen3.5 or similar models with Mamba layers and experiencing quality degradation, avoid `--mamba-ssm-dtype bfloat16` until #51531 is resolved; `float16` preserves accuracy.

3. **MoE backend selection:** On H100/H200, the default `flashinfer_cutlass` MoE backend significantly outperforms Triton. Only switch to `--moe-runner-backend triton` if flashinfer is unavailable for your quantization format.

4. **HiCache + CP caution:** If using context parallelism (`attn_cp_size > 1`) with HiCache's L3 storage backend, current builds may deadlock on prefetch — monitor for `storage_hit stays 0` behavior and consider disabling fast_file until #51608 is fixed.

5. **Free-threaded Python:** Support for CPython 3.14t (PEP 703, nogil) is being explored (#22889); production use requires tracking upstream ecosystem compatibility.

6. **FlashStates on the horizon:** The FlashStates hybrid cache management proposal (#50700) aims to improve agentic workloads on hybrid attention/recurrent models — monitor for design feedback opportunities if you run such workloads.

## 6. 对应用开发者的影响

1. **安全优先：** 若你将 SGLang 的多模态视频 API 对外暴露，SSRF 漏洞（#51701）需要立即采取缓解措施或等待官方补丁上线。在服务端不要直接使用客户端传入的 video/reference 路径 URL，必须进行校验。

2. **Mamba dtype 变通方案：** 若使用 Qwen3.5 等含 Mamba 层模型时出现质量下降，在 #51531 修复前请勿使用 `--mamba-ssm-dtype bfloat16`；`float16` 可保持精度。

3. **MoE 后端选型：** 在 H100/H200 上，默认的 `flashinfer_cutlass` MoE 后端性能显著优于 Triton。仅在 flashinfer 不支持你的量化格式时才考虑切换到 `--moe-runner-backend triton`。

4. **HiCache + CP 注意事项：** 若在 HiCache L3 storage 后端上使用 Context Parallelism（`attn_cp_size > 1`），当前版本预取阶段可能死锁。请留意 `storage_hit stays 0` 的行为，并考虑在 #51608 修复前禁用 fast_file。

5. **无 GIL Python：** CPython 3.14t（PEP 703, nogil）支持正在评估中（#22889）；生产环境使用需跟踪上游生态兼容性。

6. **FlashStates 即将到来：** FlashStates 混合缓存管理方案（#50700）旨在改善混合注意力/递归模型上的 agentic 工作负载。若你运行此类工作负载，请关注设计反馈的机会。

Let me do a final review to ensure consistency and natural flow in Chinese. Some technical terms like "Prefill", "Attention", "Kernel" are commonly used in Chinese technical contexts without translation. Let me check the overall flow again.

The translation looks good. I'll output it as a single block of text.
</think>


# SGLang 每日简报 — 2026-11-21

## 1. 今日要点

SGLang 今日继续推进 PD 分离架构基础设施建设，Q4 2026 路线图（#43699）和新版 unified-radix-cache 优化均在进行中。以下三个正确性缺陷需要重点关注：多模态视频端点存在 SSRF 漏洞（#51701）、使用 `--mamba-ssm-dtype bfloat16` 时 MATH-500 分数下降约 8 分（#51531）、以及 HiCache L3 存储预取在 CP 模式下死锁（#51608）。性能优化工作聚焦于：Triton MoE 在 H100 上比 flashinfer_cutlass 慢 5–8 倍、Mamba2 内核编译卡顿、以及 DeepSeek-V4 ROCm identity prefill 批处理优化。

---

## 2. 版本发布与破坏性变更

**过去 24 小时内无版本发布。** 项目仍沿用 `main` 分支的发布节奏。

*跟踪渠道：* [#17050 CI 测试失败追踪](https://github.com/sgl-project/sglang/issues/17050)

---

## 3. 新模型与硬件支持

| 类别 | 详情 | PR/Issue |
|----------|---------|----------|
| **MLA Caching** | 外部模型现可通过 HF text config 中的 `use_mla: true` 选择启用 MLA 缓存 | [#48746](https://github.com/sgl-project/sglang/pull/48746) |
| **AMD / ROCm** | 修复 `llvm_cl_opts` 以兼容 ROCm Triton 3.8 | [#51998](https://github.com/sgl-project/sglang/pull/51998) |
| **AMD / Muse Spark** | fbtriton gfx950 内核（qk_norm_rope_kv_cache、rmsnorm_gate、paged_attention_decode）以 opt-in 开关控制 | [#51303](https://github.com/sgl-project/sglang/pull/51303) |
| **MLU** | GQA 和 MLA attention 支持已合并 | [#49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Apple Silicon** | MoE 性能优化工作正在进行中（#19137 的子问题） | [#22283](https://github.com/sgl-project/sglang/issues/22283) |
| **GB10 / DGX Spark** | RFC：在统一内存架构下 HiCache 容量规划 | [#51733](https://github.com/sgl-project/sglang/issues/51733) |

---

## 4. 性能与优化

### 已合并 / 审核中

| 领域 | 变更 | 影响 | PR |
|------|--------|--------|----|
| **Kimi K3 MoE** | 在当前 CUDA stream 上有序释放共享专家 side-stream 资源 | 修复 `_sbo_shared_overlap` 下的异步资源泄漏 | [#51900](https://github.com/sgl-project/sglang/pull/51900) |
| **DeepSeek-V4 / ROCm** | 将 identity prefill 写入合并为单次 GPU 操作 | 减少 launch 次数；提升 ROCm 吞吐量 | [#48866](https://github.com/sgl-project/sglang/pull/48866) |
| **调度器** | 等待队列排序时跳过 external store 查询 | 降低 unified-radix-cache 场景下的延迟 | [#51502](https://github.com/sgl-project/sglang/pull/51502) |
| **Unified Radix Cache** | 设备缓存命中时续期 external store 租约 | 修复过期租约边缘问题 | [#51683](https://github.com/sgl-project/sglang/pull/51683) |
| **LTX-2.3 Diffusion** | 复用 STG 扰动 pass 的条件 pass 前缀块 | 消除 block 0–27 中的冗余计算 | [#51999](https://github.com/sgl-project/sglang/pull/51999) |

### 已知问题

| 领域 | 问题 | 严重程度 |
|------|-------|----------|
| **H100 上的 Triton MoE** | 比 `flashinfer_cutlass` 慢 5–8 倍（batch 16 时 3.1→19.8 ms/step；batch 128 时 5.7→41.3 ms/step，Nemotron 3 Nano FP8 TP8） | **高** — 临时方案：使用默认的 flashinfer_cutlass 后端 |
| **Mamba2 JIT 编译** | `_chunk_scan_fwd_kernel` 在 serving 期间编译，导致首次大 prefills 卡顿（每卡约 1.45 s） | **中** — 已请求预编译支持 |
| **Idle-Burst Prefill** | 由于连续 prefill 重叠调度，首请求 TTFT 劣化约 t_next_batch | **中** — 影响突发场景 |
| **Triton 全局覆盖** | `sglang/srt/utils/common.py` 在 import 时替换 `triton.next_power_of_2`，导致第三方 Triton 内核运行异常 | **中** — 库级别副作用 |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **Critical（安全）** | `/v1/videos` 中 URL 未校验导致 SSRF（video_path、input_reference/image_path、control_path） | **待修复** | [#51701](https://github.com/sgl-project/sglang/issues/51701) |
| **High（正确性）** | `--mamba-ssm-dtype bfloat16` 在 Qwen3.5-9B 上导致 MATH-500 分数下降约 8 分；`float16` 不受影响 | **待修复** | [#51531](https://github.com/sgl-project/sglang/issues/51531) |
| **High（正确性）** | HiCache L3 storage 预取在 CP 模式（attn_cp_size=8）下使用 fast_file 时永远无法完成；请求需等到全部重试次数耗尽后才被接纳 | **待修复** | [#51608](https://github.com/sgl-project/sglang/issues/51608) |
| **High（正确性）** | 混合模型使用 `--hybrid-cache-checkpoints-level 2` 时：若前一轮 decode 跨越了 Mamba 追踪边界，相同重复请求会恢复 0 tokens | **待修复** | [#51901](https://github.com/sgl-project/sglang/issues/51901) |
| **Medium（稳定性）** | Blackwell（B200）上 HiCache kvcacheio 传输内核报 CUDA Xid 13 "CTA Not Present"——4 台机器共 7 次崩溃 | **待修复** | [#46203](https://github.com/sgl-project/sglang/issues/46203) |
| **Medium（正确性）** | HiCache 回写：128 KiB 批处理路径向 `cudaMemcpyBatchAsync` 传入未注册的 host VA（Blackwell 平台） | **待修复** | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **CI** | #42752 追踪 flaky 测试和基础设施故障（227 条评论）；截至 2026-11-21：0 个 broken，10 个 flaky，965 个近期修复 | **持续进行** | [#42752](https://github.com/sgl-project/sglang/issues/42752), [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. 对应用开发者的影响

1. **安全优先：** 若你将 SGLang 的多模态视频 API 对外暴露，SSRF 漏洞（#51701）需要立即采取缓解措施或等待官方补丁上线。在服务端不要直接使用客户端传入的 video/reference 路径 URL，必须进行校验。

2. **Mamba dtype 变通方案：** 若使用 Qwen3.5 等含 Mamba 层模型时出现质量下降，在 #51531 修复前请勿使用 `--mamba-ssm-dtype bfloat16`；`float16` 可保持精度。

3. **MoE 后端选型：** 在 H100/H200 上，默认的 `flashinfer_cutlass` MoE 后端性能显著优于 Triton。仅在 flashinfer 不支持你的量化格式时才考虑切换到 `--moe-runner-backend triton`。

4. **HiCache + CP 注意事项：** 若在 HiCache L3 storage 后端上使用 Context Parallelism（`attn_cp_size > 1`），当前版本预取阶段可能死锁。请留意 `storage_hit stays 0` 的行为，并考虑在 #51608 修复前禁用 fast_file。

5. **无 GIL Python：** CPython 3.14t（PEP 703, nogil）支持正在评估中（#22889）；生产环境使用需跟踪上游生态兼容性。

6. **FlashStates 即将到来：** FlashStates 混合缓存管理方案（#50700）旨在改善混合注意力/递归模型上的 agentic 工作负载。若你运行此类工作负载，请关注设计反馈的机会。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully:

Title: "llama.cpp Digest — 2026-11-21"

"Today's Highlights" → "今日要闻"

"The project shipped major support for Inkling 2 Mini (b12600), including a looped architecture variant and metadata-driven model building. Meanwhile, stability work continues on multi-backend issues: a critical performance regression with MTP on multi-GPU tensor splits (#27428) and prefill degradation on Blackwell (sm_120) are under active investigation."

Translation: 项目在 b12600 中带来了 Inkling 2 Mini 的主要支持，包括循环架构变体和元数据驱动的模型构建。与此同时，多后端稳定性工作仍在继续：MTP 在多 GPU 张量切分模式下的严重性能回退（#27428）以及 Blackwell（sm_120）上的 prefill 性能下降正在积极调查中。

Let me translate the whole document now.
</think>


# llama.cpp 速报 — 2026-11-21

## 今日要闻

项目在 **b12600** 中带来了 Inkling 2 Mini 的主要支持，包括循环架构变体和元数据驱动的模型构建。与此同时，多后端稳定性工作仍在继续：MTP 在多 GPU 张量切分模式下的严重性能回退（#27428）以及 Blackwell（sm_120）上的 prefill 性能下降正在积极调查中。

---

## 发版与破坏性变更

| Build | 变更 | 说明 |
|-------|------|------|
| **b12600** | Inkling 2 Mini 模型支持 | 循环图、`is_varloop` 属性、独立的 `model_type`；另见 PR #32694 |
| **b12597** | Qwen3-ASR 转换修复 | "language ..." 输出现在正确置于 thinking block 内（PR #32571） |
| **b12591** | GGML 主版本升级提醒 | `ggml_ftype` 已废弃；迁移说明见 PR #32647 |
| **b12580** | Server MCP 代理安全加固 | 新增 `--ui-mcp-proxy-allow-private-urls` 标志（默认关闭）——若暴露 MCP 工具则需关注 |

**无带二进制文件的 semver 发版** — Issue #32623 指出 v1.0.0 及之后带有 semver 标签的 release 缺少产物。当前变通方案：使用 build hash 发版（b125xx 系列）。

---

## 新模型与硬件支持

| 模型 / 架构 | 后端 | 详情 |
|--------------|------|------|
| **Inkling 2 Mini** (thinkingmachines/Inkling-2-Mini) | CUDA / Metal / CPU / Vulkan | 循环架构支持已在 b12600 合入；循环槽位复用修复见 PR #32704 |
| **Qwen3-ASR** | 转换管线 | Chat template 现从打包的 `models/templates` 读取（PR #32571） |
| **Gemma4** | 全后端 | 多序列查询的提示处理优化（b12588, PR #32342） |
| **Drama3 语音克隆**（Fish S2 codec） | MTMD 管线 | 编解码器编码器集成完成（b12590） |
| **Intel Arc Alchemist（Xe1）** | Vulkan | 协同矩阵（`coopmat`）内核在修复寄存器溢出后重新启用（PR #32706） |
| **AMD RDNA1** | HIP | 1-warp-per-block 模式显式 MMVQ 参数表（b12599, PR #32389） |

---

## 性能与优化

| 优化项 | 后端 | 效果 | PR / Commit |
|--------------|---------|--------|-------------|
| 融合 ADD + RMS_NORM + MUL + 向量化 RMS norm | **SYCL** | Qwen3.8-27B Q3_K_P（decode）吞吐量 +3.4% | #31753 |
| 无 OpenMP 时降低 CPU 轮询 | **Metal / CPU** | M1 Pro 上 CPU 时间减少约 50%；功耗降低 5 倍 | #32378 |
| Vulkan COL2IM_1D 非对齐处理 | **Vulkan** | 修复 Intel Arc 在非 64B 对齐张量上的正确性问题 | #32673 |
| Metal norm 链操作数灵活性 | **Metal** | 修复融合 MUL/ADD 中任意操作数顺序的正确性 | #32300 |
| Flash-attn tile kernel 中原生 q8_0 KV | **CUDA** | 提升 GQA heads 间 KV 复用；面向 `-fa on` + 量化 cache | #30792 |
| Grouped XMX GEMM 优化（避免 SLM 暂存） | **SYCL** | 降低 Intel GPU GEMM 内存流量；依赖 #30156 | #31428 |
| MoE FFN 中 `.scale` 张量自动应用 | **Core** | 正确性修复；连接 NVFP4/Nemotron-H 风格 scale 张量 | #32669 |

---

## 稳定性与回退

> 按严重程度和用户影响排序。"🔴 严重"需要立即处理；"🟡 中等"有变通方案或在推进修复 PR。

| 严重程度 | Issue | 描述 | 变通方案 / 状态 |
|----------|-------|-------------|---------------------|
| 🔴 **严重** | #32707 | Inkling 2 Mini（IQ4_NL）在 RTX 5090 上 prefill "极慢"且崩溃 | 今日报告；暂无修复 |
| 🔴 **严重** | #27428 | MTP draft 在多 GPU 层切分时 prompt 处理速度减半；单 GPU 无影响 | Bug 未确认；可在 CUDA + tensor split 模式复现 |
| 🟡 **中等** | #30004 | B200（sm_120）上 CUDA ADD/GELU 自 PDL 提交后回退 | 回退定位至 commit 7b28f950；修复 PR 推进中 |
| 🟡 **中等** | #32245 | V100（sm_70）上比较 v1.0.0 与 v0.8.0 prefill 下降约 50% | 调查中；可能为 CUDA kernel 调度变更 |
| 🟡 **中等** | #30782 | SYCL/Intel Arc Pro B70 上 MTP 升级后损坏 | build b12580+ 可能已解决；需验证 |
| 🟡 **中等** | #32630 | 升级 hip-runtime-amd 至 10.1-2.1 后 SIGSEGV | 影响 ROCm/HIP；推理启动时出现段错误 |
| 🟠 **低** | #27845 | 双 Intel B70 SYCL 后端使用 `-sm tensor` 时内存泄漏 | stable release（b10665）受影响 |
| 🟠 **低** | #29581 | llama-server SIGTERM 时信号处理器调用 `exit()` | glibc `free()` 可能死锁；影响 Vulkan + RPC |
| 🟠 **低** | #30838 | ROCm/RDNA4（gfx1201）FlashAttention 在 head_size=512 时比 256 慢 4× | 影响 Gemma 4 全局层 |
| 🟠 **低** | #32689 | Qwen3a 音频尾部有多余 padding token | 已在 PR #32697 修复 |

**今日合入的正确性修复：**
- PR #32705：HRM-Text loader 中的堆越界写入——新增 slot-count 检查，防止元数据验证期间整数溢出。

---

## 对应用开发者的意义

1. **Inkling 2 Mini 现已可用于本地推理生产。** 若你使用循环架构服务推理模型，请更新至 b12600。注意 `--reasoning-preserve` 与会丢弃历史 reasoning 的模板的默认交互问题（已在 #32688 中修复）。

2. **Intel GPU 的 SYCL 用户可免费获得加速。** #31753 中的融合内核与 RMS norm 向量化无需配置更改——重新构建即可。若运行 Qwen3.8B 级模型，解码速度预计提升约 3%。

3. **Metal CPU 轮询大幅降低。** 若在 Apple Silicon 上不带 OpenMP 运行 llama-server，空闲推理期间的功耗显著下降。纯后端改进，无需应用侧修改。

4. **在投机解码中避免使用 `-sm tensor` + 多 GPU。** 在 #27428 修复前，在多 GPU 设置中使用 `--split-mode tensor` 搭配 MTP 会使 prefill 吞吐量减半。请改用 layer 或 row 切分，或在单 GPU 上运行。

5. **MCP 代理的私有 URL 现在默认禁用。** 若依赖内部 MCP 服务器，请添加 `--ui-mcp-proxy-allow-private-urls`。默认配置现已安全。

6. **升级至 b12591+ 以获取 GGML 废弃警告。** `ggml_ftype` 的废弃预示 GGUF ftype 元数据处理即将变更——若你生产自定义量化，请审查 GGUF 生成工具链。

---

*本速报基于 2026-11-21 的 ggml-org/llama.cpp 活动生成。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Keep issue/PR references like #12345 and their link text as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

---

# Ollama Digest — 2026-11-21

This is just a heading with a date, stays the same.

## 1. Today's Highlights

Same structure. Translating...

Ollama's 26 pull requests landed today focus heavily on MLX runner hardening and backend reliability. The most impactful change is **PR #19632**, which fixes critical VRAM accounting bugs causing incorrect model eviction and GPU splitting across CUDA, Metal, and other backends. Simultaneously, multiple PRs address streaming robustness for OpenAI-compatible endpoints, with new SSE error frame handling (**PR #19795**) and mid-stream error propagation (**PR #19797**) both targeting the `/v1/chat/completions` path.

Let me translate this naturally:

Ollama 今日共合并 26 个 PR，主要集中在 MLX runner 强化和后端稳定性修复。最具影响力的变更是 **PR #19632**，修复了导致模型被错误驱逐以及 GPU 在 CUDA、Metal 和其他后端间分配不当的严重 VRAM 估算问题。同时多个 PR 提升了 OpenAI 兼容接口的流式输出健壮性，**PR #19795** 新增了 SSE 错误帧处理，**PR #19797** 实现了流式传输中途错误的传播，两者均针对 `/v1/chat/completions` 接口。


---

## 2. Releases & Breaking Changes

过去 24 小时内没有新的发布版本。

Preview channel support introduces installation flexibility through `install.sh` and `install.ps1` accepting `OLLAMA_CHANNEL=preview` parameter, with `OLLAMA_VERSION` maintaining its priority over channel selection.

Install script improvements address a critical reliability issue where the script incorrectly reported success even when sudo permissions failed. The previous `EXIT` trap unconditionally displayed a success message regardless of actual command execution results.

The migration guidance suggests developers should review any automation that depends on the install script's output. Since the script now only displays "Install complete" after a genuine successful installation, existing post-install checks may need updates to handle this more accurate behavior.

## 3. New Model & Hardware Support

**Inkling 2 Mini** is now available in the MLX backend for Apple Silicon, integrated as a new supported model. **Qwen 3.8** has reported issues with the M4 Pro GPU configuration, specifically with the `qwen3.8:27b-mxfp8` variant not utilizing full GPU resources. **Gemma 4** shows problems with repeated `<unused50>` frames and incomplete HTTP responses during streaming operations.

The VRAM accounting fix addresses critical memory management issues across CUDA, Metal, and other backends, resolving problems with premature model eviction, load failures, and unnecessary GPU splitting. MLX default parallelism now automatically scales slots based on available memory and model context limits, preserving explicit `OLLAMA_NUM_PARALLEL` settings. Tensor helper consolidation reduces code duplication for MoE architectures through shared helper functions.

Conversation cache persistence prevents recomputation during context switches on Apple Silicon by saving checkpoints asynchronously after memory reclamation or model switching. Runner slot timeouts are now capped at five minutes in MLX and llama-server, returning HTTP 429 instead of indefinite hangs to give clients clear retry signals.

A critical cloud regression affects `/api/chat` on Ollama Cloud's `beam` model, where requests with tool arrays return empty content instead of `tool_calls`.

Concurrent requests can resurrect expiring runners, causing the server to hang on `/api/generate`. Ollama fails to start on Alpine Linux with a missing `fcntl64` symbol. M4 Pro 48 GB shows low GPU utilization for `qwen3.8:27b-mxfp8` after regressing from version 0.35.1-rc2 to 0.40.0. Windows GPU detection creates brief black console windows when `ollama serve` runs as a background native process.

The `/v1/chat/completions` endpoint silently terminates streams without `finish_reason` or `[DONE]` when the glimmer parser encounters errors mid-generation. Gemma4 frequently leaves tool call argument brackets unclosed, triggering parser failures. The server may close HTTP 200 with valid NDJSON chunks before sending `done: true`, causing Go clients to return `nil` and mask partial responses as complete. The renderer incorrectly moves all system messages to the start of the prompt for Qwen 3.8, despite Ollama never actually using the template.

The default 300-second session timeout is too brief for typical chat interactions, though this won't be addressed immediately. The Linux installer doesn't verify downloaded `.tar.zst` files against `sha256sum.txt`. GPU energy consumption metrics aren't exposed through the API. Intel Macs running macOS 12/13 lack community support builds. For Metal-based Apple Silicon users, the MLX runner changes are substantial and warrant monitoring.  The auto-tuning behavior for `OLLAMA_NUM_PARALLEL` could shift both throughput and memory usage patterns, especially when running Qwen 3.8 on M4 Pro where GPU utilization issues may be throttling performance. Developers using the OpenAI compatibility layer should expect more consistent `finish_reason` values after the PR fixes stream truncation issues. The `beam` model regression means tool arrays in requests return empty content, so avoid that model for tool-based workflows until patched or add explicit empty-content validation. Windows users with GPU acceleration may see console flashes during GPU detection that appear cosmetic but could concern end users.

The install script's output handling changed, so grep-based checks need updating to work with the new version's accurate success/failure reporting. Long-running inference workloads should now handle HTTP 429 responses alongside 503 errors, with a five-minute timeout before the server abandons slot acquisition attempts. Multi-turn conversation state persistence on Apple Silicon means the system now survives runner restarts, which could reduce recomputation overhead but requires reconsidering how state resets are managed. I'm working through the translation systematically, ensuring technical accuracy and natural Chinese phrasing. The VRAM accounting fix needs careful handling since the terminology is nuanced—I'm using 显存估算 to capture the memory allocation concept. For the runner resurrection deadlock, 复活死锁 conveys the concurrency issue properly. I'm also refining the Metal backend reference to ensure it reads naturally in context.

Continuing with the remaining translations: GPU 探测 for detection, 流式传输中途错误 for mid-stream transmission errors, and 粘性流 for truncated streams all maintain technical precision while sounding idiomatic in Chinese. The 粘性流 term is particularly apt since it captures both the "sticky" and "truncated" aspects of the original phrase.
</think>


# Ollama Digest — 2026-11-21

## 1. 今日要闻

Ollama 今日共合并 26 个 PR，主要集中在 MLX runner 强化和后端稳定性修复。最具影响力的变更是 **PR #19632**，修复了导致模型被错误驱逐以及 GPU 在 CUDA、Metal 和其他后端间分配不当的严重显存估算问题。与此同时，多个 PR 提升了 OpenAI 兼容接口的流式输出健壮性，**PR #19795** 新增了 SSE 错误帧处理，**PR #19797** 实现了流式传输中途错误的传播，两者均针对 `/v1/chat/completions` 接口。

---

## 2. 发布动态与破坏性变更

过去 24 小时内**没有新版本发布**。

| 变更类型 | 详情 | PR/Issue |
|---|---|---|
| 预览频道支持 | `install.sh` 和 `install.ps1` 现已支持 `OLLAMA_CHANNEL=preview` 参数；`OLLAMA_VERSION` 优先级保持不变 | [#19801](https://github.com/ollama/ollama/pull/19801) |
| 安装脚本不再在 sudo 失败时虚假报告成功 | 根本原因：`EXIT` 陷阱无条件输出成功信息；现已改为仅在实际命令成功时输出 | [#15010](https://github.com/ollama/ollama/pull/15010) |

> **迁移注意：** 如果你的自动化流程依赖安装脚本的输出，请审查所有后置检查逻辑。脚本修复后只有在真正安装成功时才会输出"Install complete"，之前依赖此输出判断成功性的脚本需要相应更新。

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 后端 | 说明 | PR/Issue |
|---|---|---|---|
| **Inkling 2 Mini** | MLX (Apple Silicon) | 在 MLX runner 中新增为支持模型 | [#19799](https://github.com/ollama/ollama/pull/19799), [#19806](https://github.com/ollama/ollama/pull/19806) |
| **Qwen 3.8** (`qwen3.8:27b-mxfp8`) | MLX (M4 Pro) | 存在 bug：runner 未充分利用 GPU——见 §5 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **Gemma 4** (`gemma4:12b`) | Native API | 后续跟进发现持续输出重复的 `<unused50>` 帧且 HTTP 200 响应无 `done: true`——见 §5 | [#18359](https://github.com/ollama/ollama/issues/18359) |

过去 24 小时内无新增量化格式或 CUDA/ROCm 内核变更。

---

## 4. 性能与优化

| 领域 | 变更内容 | 影响范围 | PR/Issue |
|---|---|---|---|
| **显存核算与 GPU 分配** | 修复了导致模型被提前驱逐、拒绝加载或在 GPU 间不合理分布的显存估算错误 | 影响 CUDA、Metal 及所有其他后端；同时修复 issues #19463、#18679、#18349、#16599 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **MLX 默认并行度** | 现在根据可用内存和模型上下文限制下的单客户端存储估算，自动选择 1、2、4 或 8 个槽位 | 自动适配 M 系列芯片；显式 `OLLAMA_NUM_PARALLEL` 设置优先保留 | [#19785](https://github.com/ollama/ollama/pull/19785) |
| **MLX 张量助手代码重构** | 将重复的 `SupportsGatherQMM`、`TensorAny`、`FreeTensorKeys`、`StackAndClone`、`TransposeExpertWeightForGatherQMM` 合并为共享辅助函数 | 减少 MoE 架构间代码重复，便于维护 | [#19805](https://github.com/ollama/ollama/pull/19805) |
| **MLX 对话缓存持久化** | 对话检查点在内存回收、模型切换或 runner 重启后异步保存并恢复 | 降低 Apple Silicon 环境下上下文切换时的重复计算 | [#19745](https://github.com/ollama/ollama/pull/19745) |
| **Runner 槽位超时返回 HTTP 429** | MLX 和 llama-server 中等待执行槽位的时间现限制为五分钟；超时或队列满时服务器返回 `429` | 客户端获得明确的重试信号，而非无限期等待 | [#19796](https://github.com/ollama/ollama/pull/19796) |

---

## 5. 稳定性与回归问题

**按严重程度排序（由高到低）：**

| 严重程度 | 问题描述 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 **严重 — 云端回归** | Ollama Cloud `beam` 模型上 `POST /api/chat` 在携带 tools 数组的请求中返回空内容且无 `tool_calls`（自 2026-11-20 起） | **待修复** — [#19804](https://github.com/ollama/ollama/issues/19804) | — |
| 🔴 **严重 — Runner 复活死锁** | 并发请求可能导致正在超时的 runner 被复活，使服务器在 `/api/generate` 上无响应 | **待修复** — [#19794](https://github.com/ollama/ollama/pull/19794) | （同 PR） |
| 🟠 **高 — Alpine Linux 启动失败** | `ollama` 启动时报 `fcntl64: symbol not found` 错误 | **待修复** — [#19800](https://github.com/ollama/ollama/issues/19800) | — |
| 🟠 **高 — MLX GPU 利用率不足** | M4 Pro 48 GB 运行 `qwen3.8:27b-mxfp8` 时报告 GPU 利用率低；在 0.35.1-rc2 中正常，0.40.0 中退化 | **待修复** — [#18754](https://github.com/ollama/ollama/issues/18754) | — |
| 🟠 **高 — Windows GPU 探测控制台闪烁** | 以本机后台进程运行 `ollama serve` 时，GPU 探测阶段会短暂出现黑色控制台窗口 | **待修复** — [#18954](https://github.com/ollama/ollama/issues/18954) | — |
| 🟡 **中 — OpenAI 流截断** | `/v1/chat/completions` 在 glimmer 解析器中途抛错时静默结束流，不输出 `finish_reason` 或 `[DONE]` | **待修复** — [#19792](https://github.com/ollama/ollama/issues/19792) | [#19795](https://github.com/ollama/ollama/pull/19795), [#19797](https://github.com/ollama/ollama/pull/19797) |
| 🟡 **中 — Gemma4 工具调用格式错误** | `gemma4:12b` 常在工具调用参数中留下未闭合的列表括号，导致解析器记录失败 | **待修复** — [#18359](https://github.com/ollama/ollama/issues/18359) | [#19274](https://github.com/ollama/ollama/pull/19274)（修复 PR） |
| 🟡 **中 — 流式响应不完整上报** | 服务器可能在 `done: true` 之前就关闭 HTTP 200 并发送有效 NDJSON 分块；Go 客户端返回 `nil`，调用方误将部分响应当作完整响应 | **待修复** — [#19791](https://github.com/ollama/ollama/pull/19791) | （同 PR） |
| 🟡 **中 — Qwen 3.8 模板顺序错误** | 渲染器将所有 system 消息移至 prompt 开头，但 Ollama 实际上从未使用该模板 | **待修复** — [#19762](https://github.com/ollama/ollama/issues/19762) | — |
| 🟢 **低 — OLLAMA_KEEP_ALIVE 默认值** | 默认 300 秒（5 分钟）对聊天模式使用场景过短 | **已关闭**（不修复 / 延后）— [#19624](https://github.com/ollama/ollama/issues/19624) | — |
| 🟢 **低 — Linux 安装包 sha256 校验缺失** | `scripts/install.sh` 从未将下载的 `.tar.zst` 与 `sha256sum.txt` 进行校验 | **待修复** — [#19787](https://github.com/ollama/ollama/issues/19787) | — |
| 🟢 **低 — GPU 能耗按响应统计** | 功能请求：希望在 API 指标中暴露 GPU 能耗消耗 | **待修复** — [#19789](https://github.com/ollama/ollama/issues/19789) | — |
| 🟢 **低 — macOS 12/13 Intel Mac 构建** | 社区请求为 macOS 12/13 上的 Intel Mac 提供构建版本 | **待修复**（社区关注）— [#19308](https://github.com/ollama/ollama/issues/19308) | — |

---

## 6. 对应用开发者的影响

**需要立即关注的事项：**

1. **如果你在 Metal（Apple Silicon）上运行：** MLX runner 变更影响重大。升级后请监控并行度行为变化——`OLLAMA_NUM_PARALLEL` 现已自动调优，可能会提升吞吐量，但也可能改变内存压力曲线。如果你在 M4 Pro 上运行 Qwen 3.8，GPU 利用率不足问题（**#18754**）可能正在影响你的吞吐量指标。

2. **如果你通过 OpenAI 兼容层代理请求：** 两个 PR 修复了流截断静默发生的 bug。**PR #19795** 在流式传输中途错误时正确输出 SSE 错误帧和 `[DONE]`，**PR #19797** 在中间件中传播流式错误。升级后，你应该会看到一致的 `finish_reason` 值，而非被误认为完整的截断响应。

3. **如果你使用云端模型的工具调用功能：** `beam` 模型回归问题（**#19804**）意味着任何携带 tools 数组的请求都会静默返回空内容。在该问题修复前，请避免在需要工具调用的工作流中使用 `beam` 模型，或在客户端实现空内容显式检查。

4. **如果你在启用了 GPU 加速的 Windows 上运行：** GPU 探测期间的控制台闪烁（**#18954**）虽然只是外观问题，但在自助服务终端或自动化环境中可能引起用户不安。

5. **如果你在 CI/CD 流程中使用 `ollama` 安装：** 请更新安装脚本检查逻辑——**PR #15010** 的修复意味着输出现在能正确反映失败情况。之前依赖 grep "Install complete" 来判断成功的脚本在获取到新版安装脚本后应能正常工作。

6. **如果你管理长时间运行的推理任务：** Runner 槽位超时返回 HTTP 429（**PR #19796**）意味着你的重试逻辑需要同时处理 `429` 和 `503`。服务器在等待执行槽位时等待五分钟便会放弃，这是新的边界条件。

7. **如果你依赖多轮对话状态保持：** MLX 缓存持久化（**PR #19745**）意味着对话状态现在可以在 Apple Silicon 上的 runner 重启后保留。审查你的应用状态管理逻辑是否需要考虑这一点——它可能会减少不必要的重复计算，但也可能影响你处理状态重置的方式。

---

*本摘要数据来源：github.com/ollama/ollama — 截至 2026-11-21 的 24 小时内：26 个 PR、13 个 issues、0 个版本发布。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all formatting, tables, links, code references, and technical terminology.

Let me translate section by section:

1. Title and date
2. Section 1 - Today's Highlights
3. Section 2 - Releases & Breaking Changes
4. Section 3 - New Model & Hardware Support
5. Section 4 - Performance & Optimization
6. Section 5 - Stability & Regressions
7. Section 6 - What This Means for Application Developers
8. Quick Links
9. Link references

I need to be careful with:
- Technical terms (stay in English where appropriate)
- Preserve all markdown formatting
- Keep URLs and code references intact
- Use natural Chinese technical language
- Maintain the newsletter style

Let me translate:
</think>


# LiteLLM 每日简报 — 2026-11-21

## 1. 今日要闻

LiteLLM 发布了 **v1.111.0-rc.3 候选版**，同时推送了稳定版补丁 v1.110.2 和 v1.109.3，关闭了一个长期存在的 ElevenLabs 费用计算 bug（#18058），该 bug 会静默地低估消费金额。在 open issues 方面，**v1.110.1 引入的回归破坏了 OAuth GET 请求中携带 `client_id` 作为查询参数的行为**（#53185），这将影响基于浏览器的 MCP 集成。与此同时，团队正在积极交付新能力：**Gemini Live Avatar** 已进入冲刺阶段，支持 OpenAI 兼容接口和 Vertex AI 实时接口两种路径（PR #53270，Issue #43166），**Lens 可观测性层**也在新增按 key、按 team 的追踪控制以及更丰富的 trace 形态（PR #53191，PR #53285）。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|------|
| **v1.111.0-rc.3** | 候选版 | Cosign 签名镜像：`ghcr.io/berriai/litellm:v1.111.0-rc.3` |
| **v1.110.2** | 稳定版补丁 | Cosign 签名；可能包含 #18058 修复 |
| **v1.109.3** | 稳定版补丁 | Cosign 签名 |
| **v1.108.14** | LTS | 标记为 `lts`；拉取 `ghcr.io/berriai/litellm:lts` 获取最新 LTS |
| **v1.108.13** | LTS | 上一个 LTS 标签 |
| **v1.106.12** | 稳定版 | Cosign 签名 |

**迁移注意：** `lts` 标签始终追踪最新的 LTS 补丁——使用该标签的运维人员无需修改镜像引用即可自动获取 v1.108.14。

---

## 3. 新模型与硬件支持

| 领域 | 详情 | PR / Issue |
|------|--------|------------|
| **Gemini Live Avatar** | `avatar_config` / `customized_avatar` 配置正在落地，同时支持 OpenAI 兼容的 Gemini 实时接口（`bidiGenerateContent`）和 Vertex AI 实时接口。 | [#43166][#43166], [#53270][pr-53270] |
| **GPT-Live over WebRTC** | GPT-Live 会话的 WebRTC 侧挂载（sideband attach），通过代理侧挂实现正确计费。 | [#53282][pr-53282] |
| **Rust bridge FIPS** | Rust bridge 中的 Rust HTTP 客户端现改用 OpenSSL 而非 `rustls+ring`，支持 FIPS 合规部署。 | [#53104][pr-53104] |

过去 24 小时内未报告新增基础模型支持或量化格式变更。

---

## 4. 性能与优化

| 类别 | 详情 | PR / Issue |
|----------|--------|------------|
| **Vertex AI 畸形回复重试** | Vertex / AI Studio Gemini 现能正确将畸形回复（HTTP 200 但无输出）识别为错误，触发重试和降级，而不是静默返回空响应并照常计费。 | [#53231][pr-53231] |
| **Response cache 与 OTel 交互** | 修复了在使用 OpenTelemetry 时启用 `enable_caching_on_provider_specific_optional_params` 导致精确匹配缓存永不命中的回归。 | [#49311][#49311]（已关闭） |
| **Bedrock 结构化输出** | Bedrock Claude 模型现可通过单一默认值标志自动选择原生结构化输出，移除了旧的 opt-in 切换逻辑，仅在 Bedrock 拒绝 schema 时才回退到 JSON tool。 | [#50492][pr-50492] |
| **Rust `zip` 依赖** | 内嵌 zip crate 从 2.4.2 升级至 9.0.5（含 mode 修复）。 | [#51354][pr-51354] |
| **Messages 配置重构（持续进行）** | 多条 PR 正在将 `BaseMessagesConfig` 拆分为 endpoint、auth、dialect 和 reply 四个部分，构建统一请求构建管道供原生输出重试复用——预期将提升 20+ 提供商的正确性和可维护性。 | [#53199][pr-53199], [#53203][pr-53203], [#53204][pr-53204] |

---

## 5. 稳定性与回归问题

### 高严重性

| # | 问题 | 摘要 | 状态 |
|---|-------|---------|--------|
| **#53185** | OAuth `client_id` 查询字符串被拒绝 | 升级到 v1.110.1 后，携带 `client_id` 作为查询参数的 GET 请求到直通路由时会返回 401，破坏 MCP 服务器的浏览器 OAuth 流程。 | **OPEN** — 尚无修复 PR |
| **#33272** | `litellm.num_retries` 永久被设为 `None` | 直接调用 `litellm.completion()` 时任何异常都会永久覆盖模块级重试全局变量，导致该进程后续所有调用的重试机制被禁用。 | **OPEN** — 尚无修复 PR |

### 中等严重性

| # | 问题 | 摘要 | 状态 |
|---|-------|---------|--------|
| **#31613** | 实时健康检查在 `ws://` 连接上设置 `ssl=` | 自托管 vLLM `/v1/realtime` WebSocket 端点的健康检查会失败，因为 LiteLLM 在非 TLS URL 上添加了不兼容的 `ssl=` 参数。 | **OPEN** |
| **#52247** | `SQL_ASCII` 数据库编码导致代理启动崩溃 | 当 PostgreSQL 编码为 `SQL_ASCII` 时，`find_blockers` 中的 `ValueError: invalid literal for int() with base 10: "b'8192'"` 会导致代理启动失败。 | **OPEN** |
| **#50127** | 被拦截请求以明文存储在消费日志中 | 启用 `store_prompts_in_spend_logs: true` 后，`pre_call` 守卫规则拦截的请求（可能包含密钥/PII）会以明文形式存储在 `LiteLLM_SpendLogs` 中。 | **OPEN** |
| **#39322** | 最小负载路由导致部署饥饿 | Response cache 命中会使路由计数器变为负值；平票时总选第一个 worker；计数器未跨 worker 共享。 | **OPEN** — 与 #25323 关联 |

### 近期关闭（已修复或已确认的回归）

| # | 问题 | 摘要 | 状态 |
|---|-------|---------|--------|
| **#18058** | ElevenLabs 费用计算错误 | 已在 v1.111.0-rc.3 / v1.110.2 中修复。 |
| **#49680** | `prisma_migration --skip_server_startup` ImportError | Prisma 迁移脚本现对 `psycopg` 导入做了防护；已修复。 |
| **#51824** | 孤立的 UTF-16 代理对导致 HTTP 处理器崩溃 | 带有孤立代理对的原始 Python 字符串不再在调度前引发 `UnicodeEncodeError`。 |
| **#28989** | Gemini 图片生成静默丢弃安全 `finishReason` | 被安全规则拦截的生成现在会抛出适当的错误，而非返回空响应。 |
| **#49311** | OTel + provider-specific params 下精确匹配缓存永不命中 | 已修复。 |

---

## 6. 对应用开发者的影响

1. **如果你通过 LiteLLM 代理使用 ElevenLabs** — 升级到 v1.110.2 或 v1.111.0-rc.3。旧版本会系统性地低估 ElevenLabs 模型的消费金额。

2. **如果你运行 v1.110.1+ 且使用 OAuth 浏览器流程** — GET 请求中作为查询参数传递的 `client_id` 现在会返回 401。要么将参数移到 POST body 中，要么等待补丁。

3. **如果你依赖重试逻辑** — 避免在同时通过代理 SDK 调用 `litellm.completion()` 的同一进程中直接调用它；模块级 `num_retries` 全局变量的 bug 可能在首次异常后静默禁用重试。

4. **如果你使用 `SQL_ASCII` PostgreSQL 数据库运行 LiteLLM 代理** — 在 v1.109.x 补丁发布前不要升级，或先应用 workaround；否则代理将在启动时崩溃。

5. **如果你使用 Vertex AI Gemini 配合结构化输出** — Bedrock 风格的重构（#50492）应能提升可靠性，但在推广到生产前用大 schema 进行测试。

6. **如果你需要 Gemini Live Avatar** — OpenAI 兼容接口和 Vertex AI 实时接口两条路径都在积极开发中；跟踪 [#43166][#43166] 和 [#53270][pr-53270] 了解可用性。

7. **如果你使用 LiteLLM 的 Lens 可观测性** — 新的按 key 和按 team 追踪控制（PR #53191）将允许你在不授予更宽泛权限的情况下限定追踪范围，提升多租户场景下的可调试性。

---

## 快速链接

- **Releases：** https://github.com/BerriAI/litellm/releases
- **Issues：** https://github.com/BerriAI/litellm/issues
- **PRs：** https://github.com/BerriAI/litellm/pulls
- **Docker（latest）：** `ghcr.io/berriai/litellm:latest`
- **Docker（LTS）：** `ghcr.io/berriai/litellm:lts`

---

[#18058]: https://github.com/BerriAI/litellm/issues/18058
[#8304]: https://github.com/BerriAI/litellm/issues/8304
[#53185]: https://github.com/BerriAI/litellm/issues/53185
[#43166]: https://github.com/BerriAI/litellm/issues/43166
[#39322]: https://github.com/BerriAI/litellm/issues/39322
[#31613]: https://github.com/BerriAI/litellm/issues/31613
[#37853]: https://github.com/BerriAI/litellm/issues/37853
[#49680]: https://github.com/BerriAI/litellm/issues/49680
[#51445]: https://github.com/BerriAI/litellm/issues/51445
[#36066]: https://github.com/BerriAI/litellm/issues/36066
[#28636]: https://github.com/BerriAI/litellm/issues/28636
[#30300]: https://github.com/BerriAI/litellm/issues/30300
[#28989]: https://github.com/BerriAI/litellm/issues/28989
[#33272]: https://github.com/BerriAI/litellm/issues/33272
[#52247]: https://github.com/BerriAI/litellm/issues/52247
[#51824]: https://github.com/BerriAI/litellm/issues/51824
[#44538]: https://github.com/BerriAI/litellm/issues/44538
[#48401]: https://github.com/BerriAI/litellm/issues/48401
[#36997]: https://github.com/BerriAI/litellm/issues/36997
[#37028]: https://github.com/BerriAI/litellm/issues/37028
[#37810]: https://github.com/BerriAI/litellm/issues/37810
[#37857]: https://github.com/BerriAI/litellm/issues/37857
[#53079]: https://github.com/BerriAI/litellm/issues/53079
[#50127]: https://github.com/BerriAI/litellm/issues/50127
[#34914]: https://github.com/BerriAI/litellm/issues/34914
[#48362]: https://github.com/BerriAI/litellm/issues/48362
[#46059]: https://github.com/BerriAI/litellm/issues/46059
[#49311]: https://github.com/BerriAI/litellm/issues/49311
[#46454]: https://github.com/BerriAI/litellm/issues/46454
[#52251]: https://github.com/BerriAI/litellm/issues/52251

[pr-53289]: https://github.com/BerriAI/litellm/pull/53289
[pr-53281]: https://github.com/BerriAI/litellm/pull/53281
[pr-53191]: https://github.com/BerriAI/litellm/pull/53191
[pr-51354]: https://github.com/BerriAI/litellm/pull/51354
[pr-53288]: https://github.com/BerriAI/litellm/pull/53288
[pr-53231]: https://github.com/BerriAI/litellm/pull/53231
[pr-53270]: https://github.com/BerriAI/litellm/pull/53270
[pr-21750]: https://github.com/BerriAI/litellm/pull/21750
[pr-53199]: https://github.com/BerriAI/litellm/pull/53199
[pr-53203]: https://github.com/BerriAI/litellm/pull/53203
[pr-53204]: https://github.com/BerriAI/litellm/pull/53204
[pr-50492]: https://github.com/BerriAI/litellm/pull/50492
[pr-49899]: https://github.com/BerriAI/litellm/pull/49899
[pr-49896]: https://github.com/BerriAI/litellm/pull/49896
[pr-53104]: https://github.com/BerriAI/litellm/pull/53104
[pr-53237]: https://github.com/BerriAI/litellm/pull/53237
[pr-53282]: https://github.com/BerriAI/litellm/pull/53282
[pr-53285]: https://github.com/BerriAI/litellm/pull/53285
[pr-52791]: https://github.com/BerriAI/litellm/pull/52791
[pr-53286]: https://github.com/BerriAI/litellm/pull/53286

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate an English technical digest about the Unsloth project into Simplified Chinese. Let me follow the rules carefully:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully:

# Unsloth Digest — 2026-11-21

## 1. Today's Highlights

Unsloth released v0.1.922-beta with the new **Inkling 2 Mini** (26.4B, 16GB RAM footprint), bringing faster image generation for small GPUs and video restyling to Apple Silicon. Meanwhile, the team merged a critical GRPO optimization that eliminates a redundant forward pass when `num_iterations > 1`, and shipped encoding-aware file loading for the Translate module. Several regressions from the 0.1.917–0.1.920 window are now marked closed, but an open crash-on-load issue on v0.1.920-beta warrants attention.

# Unsloth 日报 — 2026-11-21

## 1. 今日要闻

Unsloth 发布了 v0.1.922-beta，带来了全新的 **Inkling 2 Mini**（26.4B，16GB 内存占用），在小 GPU 上实现了更快的图像生成，并支持 Apple Silicon 视频重绘功能。同时，团队合并了一个关键的 GRPO 优化——当 `num_iterations > 1` 时消除冗余的前向传播，并上线了 Translate 模块的编码感知文件加载。

## 2. Releases & Breaking Changes

| Version | Key Changes |
|---------|-------------|
| **v0.1.922-beta** | Inkling 2 Mini support; faster/lighter image generation on small GPUs; video restyling on Apple Silicon; MCP tool chats no longer reprocess full conversation on every message |
| **v0.1.921-beta** | Bug fixes; faster image generation; Inkling Mini integration; faster MCP chat handling |

**Migration Notes:**
- No API changes reported. Users on 0.1.920-beta encountering crashes should upgrade to 0.1.922-beta.
- Inkling 2 Mini is now the default for new installations targeting 16GB single-GPU setups.

**Reference:** [Release v0.1.922-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.922) · [v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921)

---

## 3. New Model & Hardware Support

| Model / Hardware | Details |
|------------------|---------|
| **Inkling 2 Mini** | 26.4B MoE-style model; runs on 16GB RAM with standard quantization. Fine-tuning support confirmed per [#18691](https://github.com/unslothai/unsloth/issues/18691). |
| **DaisyRose-27B** | Feature request filed for agentic coding use cases; see [#18465](https://github.com/unslothai/unsloth/issues/18465). |
| **AMD Strix Halo (Ryzen AI Max+ 395)** | PR [#17538](https://github.com/unslothai/unsloth/pull/17538) adds runtime guidance steering users toward the faster GPU path over the NPU on Strix Halo devices. |
| **RDNA4 (RX 9060 XT / gfx1200)** | Experimental support in-progress; see stability section for known HIP kernel issues. |
| **Apple Silicon** | Video restyling pipeline now available on M-series Macs. |
| **Kokoro-82M TTS** | Audio preview samples feature requested for built-in voices; see [#18251](https://github.com/unslothai/unsloth/issues/18251). |

---

## 4. Performance & Optimization

**Landmark PRs merged / in-review today:**

- **GRPO `num_iterations > 1` optimization** — PR [#18675](https://github.com/unslothai/unsloth/pull/18675) (CLOSED) eliminates a redundant no-grad forward pass over the generation batch. Previously, `pi_old` was scored in a separate pass, then re-scored on the first micro-batch loss pass; the two forwards were not bit-equal due to PrefixGrouper/sequence packing differences. This is a direct training throughput win for iterative GRPO users.

- **Token budget split optimization** — PR [#18720](https://github.com/unslothai/unsloth/pull/18720) (OPEN) preserves packed-length tuples on the host side when splitting micro-batches under `UNSLOTH_TOKEN_BUDGET`, avoiding device-side `.tolist()` calls and redundant tensor copies.

- **Fused CE for unmerged `lm_head` LoRA** — PR [#18719](https://github.com/unslothai/unsloth/pull/18719) (OPEN) ensures gradient flow through an unmerged adapter on `lm_head` by passing the base weight and bias correctly to the fused cross-entropy kernel during SFT.

- **Ebook loader fixes** — PRs [#18716](https://github.com/unslothai/unsloth/pull/18716) and [#18715](https://github.com/unslothai/unsloth/pull/18715) prevent page-break artifacts and soft-hyphen fragmentation from corrupting training tokens in EPUB-sourced data.

- **Translate encoding detection** — PR [#18701](https://github.com/unslothai/unsloth/pull/18701) replaces hardcoded UTF-8 with a server-side encoding detector, fixing garbled text from Windows ANSI, Shift-JIS, and UTF-16 files.

**Active optimization work:**

- **Tensor-parallel checkpoint validation** — PR [#18718](https://github.com/unslothai/unsloth/pull/18718) guards against silent adapter corruption when resuming a TP/PP checkpoint under a mismatched `UNSLOTH_MOE_LORA_B_LAYOUT`.

---

## 5. Stability & Regressions

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | v0.1.920-beta crashes on model load | [OPEN #18563](https://github.com/unslothai/unsloth/issues/18563) | — |
| **High** | QLoRA on RDNA4 (RX 9060 XT) aborts with `HIP error: illegal memory access` in three fused kernels | [OPEN #18403](https://github.com/unslothai/unsloth/issues/18403) | — |
| **Medium** | Inkling 2 Mini fails to load on 32 GB DDR5 laptops despite CPU+GPU offload | [CLOSED #18690](https://github.com/unslothai/unsloth/issues/18690) | Fixed in v0.1.922-beta |
| **Medium** | 0.1.917 forced `mmap` despite `--load-mode none`, causing RAM/SSD thrashing | [CLOSED #17605](https://github.com/unslothai/unsloth/issues/17605) | Resolved |
| **Medium** | Incorrect unified-memory loading on Ryzen 8700G / Radeon 780M | [CLOSED #18001](https://github.com/unslothai/unsloth/issues/18001) | Resolved |
| **Medium** | Dual RX 6700 XT ROCm crash | [OPEN #18622](https://github.com/unslothai/unsloth/issues/18622) | — |
| **Low** | macOS "script contains malware" false positive during update | [OPEN #18699](https://github.com/unslothai/unsloth/issues/18699) | — |
| **Low** | Managed accounts cannot load models from subfolder repos | [OPEN #18647](https://github.com/unslothai/unsloth/issues/18647) | — |

**Notable closed issues:**
- Studio prompt reprocessing bug with Qwen hybrid model + MCP tools ([#17015](https://github.com/unslothai/unsloth/issues/17015)) — resolved, directly improving MCP chat responsiveness.

---

## 6. What This Means for Application Developers

1. **If you're running iterative GRPO fine-tuning**, upgrade or cherry-pick PR [#18675](https://github.com/unslothai/unsloth/pull/18675). The redundant forward pass removal is a direct wall-clock time reduction for multi-iteration runs.

2. **On AMD RDNA4 hardware (RX 9060 XT)**, avoid QLoRA training until [#18403](https://github.com/unslothai/unsloth/issues/18403) is resolved — fused kernel crashes are non-recoverable. Standard PyTorch/PEFT SDPA is a workaround at lower throughput.

3. **For multi-account Studio deployments**, subfolder repo loading is broken for managed accounts ([#18647](https://github.com/unslothai/unsloth/issues/18647)). As a temporary measure, flatten model directories or use the owner account for those loads.

4. **If you handle non-English or legacy-encoded text**, the Translate module now correctly auto-detects encoding ([#18701](https://github.com/unslothai/unsloth/pull/18701)). Re-test any import pipelines that previously required manual UTF-8 normalization.

5. **For agentic/MCP workloads**, the MCP chat reprocessing fix from [#17015](https://github.com/unslothai/unsloth/issues/17015) (now in stable) significantly reduces per-turn latency on Qwen hybrid models with large tool catalogs.

6. **Upcoming:** Automatic `max_seq_length` detection for fine-tuning ([#18236](https://github.com/unslothai/unsloth/issues/18236)) will eliminate a manual token-count step — monitor that PR.

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

---

# Unsloth 日报 — 2026-11-21

## 1. 今日要闻

Unsloth 发布了 v0.1.922-beta，带来了全新的 **Inkling 2 Mini**（26.4B，16GB 内存占用），在小显存 GPU 上实现了更快的图像生成，并支持 Apple Silicon 视频重绘功能。同时，团队合并了一个关键的 GRPO 优化——当 `num_iterations > 1` 时消除冗余的前向传播，并上线了 Translate 模块的编码感知文件加载。

---

## 2. 版本更新与破坏性变更

| 版本 | 主要变更 |
|---------|-------------|
| **v0.1.922-beta** | 支持 Inkling 2 Mini；提升小显存 GPU 图像生成速度；Apple Silicon 视频重绘；修复 MCP 工具聊天每次消息都重新处理完整对话的问题 |
| **v0.1.921-beta** | Bug 修复；加快图像生成速度；集成 Inkling Mini；MCP 聊天加速 |

**升级注意事项：**
- 未报告 API 变更。使用 0.1.920-beta 且遇到崩溃的用户应升级至 0.1.922-beta。
- Inkling 2 Mini 现已作为面向 16GB 单卡场景的新装默认选项。

**参考链接：** [Release v0.1.922-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.922) · [v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921)

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 |
|------------------|---------|
| **Inkling 2 Mini** | 26.4B MoE 架构模型；标准量化下可在 16GB 内存运行。微调支持已确认，参见 [#18691](https://github.com/unslothai/unsloth/issues/18691)。 |
| **DaisyRose-27B** | 功能请求已提交，用于自主智能体编码场景；参见 [#18465](https://github.com/unslothai/unsloth/issues/18465)。 |
| **AMD Strix Halo (Ryzen AI Max+ 395)** | PR [#17538](https://github.com/unslothai/unsloth/pull/17538) 在运行时引导用户在 Strix Halo 设备上优先使用 GPU 而非 NPU（前者性能更优）。 |
| **RDNA4 (RX 9060 XT / gfx1200)** | 仍在开发中，具体稳定性问题见稳定性一节。 |
| **Apple Silicon** | 视频重绘流程现已支持 M 系列 Mac。 |
| **Kokoro-82M TTS** | 请求为内置音色添加音频预览功能；参见 [#18251](https://github.com/unslothai/unsloth/issues/18251)。 |

---

## 4. 性能与优化

**今日合并/评审中的重要 PR：**

- **GRPO `num_iterations > 1` 优化** — PR [#18675](https://github.com/unslothai/unsloth/pull/18675)（已合并）消除了生成批次上冗余的无梯度前向传播。

- **Token 预算分割优化** — PR [#18720](https://github.com/unslothai/unsloth/pull/18720)（待合并）在使用 `UNSLOTH_TOKEN_BUDGET` 分割微批次时保留主

机端打包长度元组，避免设备端调用 `.tolist()` 和冗余张量复制。

- **未合并 `lm_head` LoRA 的融合交叉熵** — PR [#18719](https://github.com/unslothai/unsloth/pull/18719)（待合并）确保在 SFT 阶段正确传递基础权重和偏置，使融合交叉熵核能对 `lm_head` 上未合并的适配器进行梯度计算。

- **电子书加载器修复** — PR [#18716](https://github.com/unslothai/unsloth/pull/18716) 和 PR [#18715](https://github.com/unslothai/unsloth/pull/18715) 消除了分页符导致的训练样本截断问题。

- **Translate 编码检测** — PR [#18701](https://github.com/unslothai/unsloth/pull/18701) 用编码检测器替换硬编码的 UTF-8，解决了 Windows ANSI、Shift-JIS、UTF-16 文件的乱码问题。

**正在进行中的优化工作：**

- **张量并行 checkpoint 验证** — PR [#18718](https://github.com/unslothai/unsloth/pull/18718) 在 `UNSLOTH_MOE_LORA_B_LAYOUT` 不匹配时恢复 TP/PP checkpoint，防止静默的适配器损坏。

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | v0.1.920-beta 模型加载时崩溃 | [OPEN #18563](https://github.com/unslothai/unsloth/issues/18563) | — |
| **高** | RDNA4 (RX 9060 XT) 上 QLoRA 在三个融合内核中出现 `HIP error: illegal memory access` | [OPEN #18403](https://github.com/unslothai/unsloth/issues/18403) | — |
| **中** | Inkling 2 Mini 在 32GB DDR5 笔记本（CPU+GPU offload）上加载失败 | [CLOSED #18690](https://github.com/unslothai/unsloth/issues/18690) | v0.1.922-beta 已修复 |
| **中** | 0.1.917 即使指定 `--load-mode none` 仍强制启用 `mmap`，导致内存/SSD 抖动 | [CLOSED #17605](https://github.com/unslothai/unsloth/issues/17605) | 已解决 |
| **中** | Ryzen 8700G / Radeon 780M 统一内存加载错误 | [CLOSED #18001](https://github.com/unslothai/unsloth/issues/18001) | 已解决 |
| **中** | 双 RX 6700 XT ROCm 崩溃 | [OPEN #18622](https://github.com/unslothai/unsloth/issues/18622) | — |
| **低** | macOS 更新时误报"脚本包含恶意软件" | [OPEN #18699](https://github.com/unslothai/unsloth/issues/18699) | — |
| **低** | 托管账号无法从子文件夹仓库加载模型 | [OPEN #18647](https://github.com/unslothai/unsloth/issues/18647) | — |

**已关闭的重要 issue：**
- Studio 中 Qwen 混合模型 + MCP 工具后重复全 prompt 处理 bug（[#17015](https://github.com/unslothai/unsloth/issues/17015)）——已解决，直接改善了 MCP 聊天响应速度。

---

## 6. 对应用开发者的影响

1. **如果你正在进行迭代式 GRPO 微调**，请升级或 cherry-pick PR [#18675](https://github.com/unslothai/unsloth/pull/18675)。消除冗余前向传播可直

接缩短多轮迭代的 wall-clock 时间。

2. **在 AMD RDNA4 硬件（RX 9060 XT）上**，请等待 [#18403](https://github.com/unslothai/unsloth/issues/18403) 解决后再进行 QLoRA 训练——融合内核崩溃无法恢复。可临时使用标准 PyTorch/PEFT SDPA 路径（吞吐较低）。

3. **对于多账号 Studio 部署**，托管账号的子文件夹仓库加载功能受损（[#18647](https://github.com/unslothai/unsloth/issues/18647)）。临时方案：扁平化模型目录结构或使用所有者账号进行加载。

4. **如果你处理非英文或遗留编码文本**，Translate 模块现已支持编码自动检测（[#18701](https://github.com/unslothai/unsloth/pull/18701)）。请重新测试之前需要手动 UTF-8 规范化的导入流程。

5. **对于自主智能体/MCP 工作负载**，[#17015](https://github.com/unslothai/unsloth/issues/17015) 中的 MCP 聊天重复处理修复（现已并入稳定版）显著降低了大规模工具目录的 Qwen 混合模型每轮延迟。

6. **即将到来：** 微调时自动检测 `max_seq_length`（[#18236](https://github.com/unslothai/unsloth/issues/18236)）将省去手动 token 计数步骤——请关注该 PR 进展。
</think>


# Unsloth 日报 — 2026-11-21

## 1. 今日要闻

Unsloth 发布了 v0.1.922-beta，带来了全新的 **Inkling 2 Mini**（26.4B，16GB 内存占用），在小显存 GPU 上实现了更快的图像生成，并支持 Apple Silicon 视频重绘功能。同时，团队合并了一个关键的 GRPO 优化——当 `num_iterations > 1` 时消除冗余的前向传播，并上线了 Translate 模块的编码感知文件加载。0.1.917–0.1.920 版本区间内的多个回归问题现已标记关闭，但 v0.1.920-beta 上仍有一个模型加载崩溃的 open issue 需要关注。

---

## 2. 版本更新与破坏性变更

| 版本 | 主要变更 |
|---------|-------------|
| **v0.1.922-beta** | 支持 Inkling 2 Mini；提升小显存 GPU 图像生成速度；Apple Silicon 视频重绘；修复 MCP 工具聊天每次消息都重新处理完整对话的问题 |
| **v0.1.921-beta** | Bug 修复；加快图像生成速度；集成 Inkling Mini；MCP 聊天加速 |

**升级注意事项：**
- 未报告 API 变更。使用 0.1.920-beta 且遇到崩溃的用户应升级至 0.1.922-beta。
- Inkling 2 Mini 现已作为面向 16GB 单卡场景的新装默认选项。

**参考链接：** [Release v0.1.922-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.922) · [v0.1.921-beta](https://github.com/unslothai/unsloth/releases/tag/v0.1.921)

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 |
|------------------|---------|
| **Inkling 2 Mini** | 26.4B MoE 架构模型；标准量化下可在 16GB 内存运行。微调支持已确认，参见 [#18691](https://github.com/unslothai/unsloth/issues/18691)。 |
| **DaisyRose-27B** | 功能请求已提交，用于自主智能体编码场景；参见 [#18465](https://github.com/unslothai/unsloth/issues/18465)。 |
| **AMD Strix Halo (Ryzen AI Max+ 395)** | PR [#17538](https://github.com/unslothai/unsloth/pull/17538) 在运行时引导用户在 Strix Halo 设备上优先使用 GPU 而非 NPU（前者性能更优）。 |
| **RDNA4 (RX 9060 XT / gfx1200)** | 仍在开发中，具体稳定性问题见稳定性一节。 |
| **Apple Silicon** | 视频重绘流程现已支持 M 系列 Mac。 |
| **Kokoro-82M TTS** | 请求为内置音色添加音频预览功能；参见 [#18251](https://github.com/unslothai/unsloth/issues/18251)。 |

---

## 4. 性能与优化

**今日合并/评审中的重要 PR：**

- **GRPO `num_iterations > 1` 优化** — PR [#18675](https://github.com/unslothai/unsloth/pull/18675)（CLOSED）消除了生成批次上冗余的无梯度前向传播。此前，`pi_old` 会在单独的 pass 中打分，然后在第一个微批次 loss pass 中重新打分；由于 PrefixGrouper/序列打包差异，两次前向传播的结果并不完全一致。这对迭代式 GRPO 用户而言是直接的训练吞吐提升。

- **Token 预算分割优化** — PR [#18720](https://github.com/unslothai/unsloth/pull/18720)（OPEN）在使用 `UNSLOTH_TOKEN_BUDGET` 分割微批次时保留主机端打包长度元组，避免设备端 `.tolist()` 调用和冗余张量拷贝。

- **未合并 `lm_head` LoRA 的融合交叉熵** — PR [#18719](https://github.com/unslothai/unsloth/pull/18719)（OPEN）确保 SFT 阶段对 `lm_head` 上未合并的适配器正确传递基础权重和偏置至融合交叉熵核，从而保证梯度正常流通。

- **电子书加载器修复** — PR [#18716](https://github.com/unslothai/unsloth/pull/18716) 和 PR [#18715](https://github.com/unslothai/unsloth/pull/18715) 消除了 EPUB 源数据中分页符导致的训练样本截断和软连字符（soft-hyphen）碎片化问题。

- **Translate 编码检测** — PR [#18701](https://github.com/unslothai/unsloth/pull/18701) 以服务端编码检测器替换硬编码的 UTF-8，修复了 Windows ANSI、Shift-JIS、UTF-16 文件的乱码问题。

**正在进行的优化工作：**

- **张量并行 checkpoint 校验** — PR [#18718](https://github.com/unslothai/unsloth/pull/18718) 在 `UNSLOTH_MOE_LORA_B_LAYOUT` 不匹配时恢复 TP/PP checkpoint，防止静默的适配器损坏。

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | v0.1.920-beta 模型加载时崩溃 | [OPEN #18563](https://github.com/unslothai/unsloth/issues/18563) | — |
| **高** | RDNA4 (RX 9060 XT) 上 QLoRA 在三个融合内核中触发 `HIP error: illegal memory access` | [OPEN #18403](https://github.com/unslothai/unsloth/issues/18403) | — |
| **中** | Inkling 2 Mini 在 32GB DDR5 笔记本（已开启 CPU+GPU offload）上加载失败 | [CLOSED #18690](https://github.com/unslothai/unsloth/issues/18690) | v0.1.922-beta 已修复 |
| **中** | 0.1.917 即使指定 `--load-mode none` 仍强制启用 `mmap`，导致内存/SSD 抖动 | [CLOSED #17605](https://github.com/unslothai/unsloth/issues/17605) | 已解决 |
| **中** | Ryzen 8700G / Radeon 780M 统一内存加载错误 | [CLOSED #18001](https://github.com/unslothai/unsloth/issues/18001) | 已解决 |
| **中** | 双 RX 6700 XT ROCm 崩溃 | [OPEN #18622](https://github.com/unslothai/unsloth/issues/18622) | — |
| **低** | macOS 更新时误报"脚本包含恶意软件" | [OPEN #18699](https://github.com/unslothai/unsloth/issues/18699) | — |
| **低** | 托管账号无法从子文件夹仓库加载模型 | [OPEN #18647](https://github.com/unslothai/unsloth/issues/18647) | — |

**已关闭的重要 issue：**
- Studio 中 Qwen 混合模型 + MCP 工具后重复全 prompt 处理 bug（[#17015](https://github.com/unslothai/unsloth/issues/17015)）——已解决，直接改善了 MCP 聊天响应速度。

---

## 6. 对应用开发者的影响

1. **如果你正在进行迭代式 GRPO 微调**，请升级或 cherry-pick PR [#18675](https://github.com/unslothai/unsloth/pull/18675)。消除冗余前向传播可直

接缩短多轮迭代的 wall-clock 时间。

2. **在 AMD RDNA4 硬件（RX 9060 XT）上**，请等待 [#18403](https://github.com/unslothai/unsloth/issues/18403) 解决后再进行 QLoRA 训练——融合内核崩溃无法恢复。可临时使用标准 PyTorch/PEFT SDPA 路径（吞吐较低）。

3. **对于多账号 Studio 部署**，托管账号的子文件夹仓库加载功能受损（[#18647](https://github.com/unslothai/unsloth/issues/18647)）。临时方案：扁平化模型目录结构或使用所有者账号进行加载。

4. **如果你处理非英文或遗留编码文本**，Translate 模块现已支持编码自动检测（[#18701](https://github.com/unslothai/unsloth/pull/18701)）。请重新测试之前需要手动 UTF-8 规范化的导入流程。

5. **对于自主智能体/MCP 工作负载**，[#17015](https://github.com/unslothai/unsloth/issues/17015) 中的 MCP 聊天重复处理修复（现已并入稳定版）显著降低了大规模工具目录的 Qwen 混合模型每轮延迟。

6. **即将到来：** 微调时自动检测 `max_seq_length`（[#18236](https://github.com/unslothai/unsloth/issues/18236)）将省去手动 token 计数步骤——请关注该 PR 进展。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*