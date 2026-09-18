# AI 基础设施日报 2026-09-18

> 生成时间: 2026-09-18 00:44 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report into Simplified Chinese, following the strict rules provided. Let me go through it carefully:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure: headings, tables (including column alignment), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while maintaining all formatting:

Title: "AI Infrastructure Cross-Project Report" → "AI 基础设施跨项目报告"

Let me go through section by section:

## 1. Ecosystem Overview

Translate the paragraph naturally in technical Chinese style.

## 2. Activity Comparison - this is a table, need to preserve structure

## 3. Model Support Race - table

## 4. Performance Frontier - table

## 5. Layer Positioning - preserve the ASCII art

## 6. Trend Signals - tables

I need to preserve:
- All headings (##)
- Tables including alignment rows (|---|---|)
- Lists with emojis
- Code spans like vLLM, SGLang, etc.
- PR/Issue numbers like #56370
- Version numbers like v0.1.810-beta
- URLs in markdown links
- Horizontal rules (---)
- Emoji

Let me do this carefully:</think>

# AI 基础设施跨项目报告

## 1. 生态概览

今日活动表明，AI 推理栈正在各层级快速成熟——从量化内核后端到网关路由。领域格局清晰分化：vLLM 和 SGLang 竞争高性能服务引擎，llama.cpp 和 Ollama 服务本地部署，LiteLLM 提供企业网关能力，Unsloth 则占据微调层。值得注意的是，所有项目同时在应对 Blackwell（SM120）硬件支持、多模态 ViT 加速和投机解码正确性——这些正是当前的前沿挑战。过去 24 小时内各项目均无重大发布，表明近期 v0.29/v0.30 周期后进入稳定阶段。

---

## 2. 活动对比

| 项目 | 追踪的活跃 Issue | PR（过去 24h） | 发布（过去 24h） | 主要关注点 |
|---------|----------------------|----------------|---------------------|---------------|
| **vLLM** | 10+（关键 SM120/GLM/ROCm 缺陷） | 5+（ViT CUDA Graph、MiniMax-M3 内核） | 无 | 服务引擎 |
| **SGLang** | 20+（CUDA 崩溃追踪器：313 条评论） | 27（DeepEP v2、HiCache、投机解码） | 无 | 服务引擎 |
| **llama.cpp** | 20+ | 27（OpenCL、ROCm、安全修复） | 无 | 本地运行时 |
| **Ollama** | 20+ | 27（MLX、Studio、ARM64 Vulkan） | 无（v0.1.810-beta 昨日发布） | 本地运行时 |
| **LiteLLM** | 10+（Prisma、流式 bug） | 20+（Bedrock、A2A、JWT） | 无 | 网关 |
| **Unsloth** | ~10 | 10+（Qwen3.5-9B 优化、沙箱） | **v0.1.810-beta** | 微调 |

**观察**：Unsloth 是唯一有版本发布的项目；vLLM 和 SGLang 处于缺陷修复阶段；LiteLLM 以功能驱动为主。

---

## 3. 模型支持竞速

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|--------------------|------|--------|-----------|--------|---------|---------|
| **GLM-5.3 / Flash** | 🔴 阻塞中（SM120 MLA） | ✅ 正常（quark MXFP4） | — | 🟡 有 bug（工具调用） | — | — |
| **DeepSeek-V4.1** | 🔴 关键缺陷（SM120、投机解码） | 🔴 混合 GDN bug | — | 🔴 级别不匹配 | — | — |
| **Qwen3.8-Flash-Next** | ✅ fp8 KV（QSA 路径） | — | ✅ MTP 支持 | 🔴 加载中止 | — | 🔴 MTP 中止 |
| **MiniMax-M3** | ✅ 内核优化 | — | — | — | — | — |
| **LLaVA-OneVision / ViT** | 🟡 进行中（CUDA Graph） | ✅ 编码器 CUDA Graph | — | — | — | — |
| **Nemotron 30B** | — | — | — | ✅ MLX vision | — | ✅ LoRA 支持 |
| **Spark 2.5** | — | — | — | ✅ 已添加 | — | — |
| **fal.ai（Sora/Veo）** | — | — | — | — | ✅ 已添加 | — |
| **Amazon Transcribe** | — | — | — | — | ✅ 直通 | — |
| **Microsoft Foundry A2A** | — | — | — | — | ✅ 中继 | — |

**领先者**：**vLLM** 在服务引擎模型广度上领先；**Ollama** 在易用性模型覆盖上领先；**LiteLLM** 在提供商生态上领先（160+ 模型）。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|-------------------|-----------------|----------|
| **KV cache / 量化** | vLLM、SGLang、llama.cpp | vLLM：fp8_e4m3 KV 在 QSA 路径（~2x 池）；SGLang：DeepEP v2 MXFP8 group-32；llama.cpp：Q4/Q6 的 OpenCL DP4A |
| **CUDA Graph / 内核融合** | vLLM、SGLang、Unsloth | vLLM/SGLang：ViT 编码器 CUDA Graph；Unsloth：Qwen3.5-9B LoRA 20k 内核 launch 减少 |
| **投机解码** | vLLM、SGLang | vLLM：PP1 隐藏状态提取器修复；SGLang：混合递归状态 + PP 修复 |
| **前缀/分层缓存** | SGLang、LiteLLM | SGLang：HiCache 回写 + DSA 索引器；LiteLLM：直通流式 |
| **多模态** | vLLM、SGLang | ViT 完整 CUDA Graph 追踪（Qwen3-VL、GLM-V、Kimi K2.5） |
| **MLX（Apple Silicon）** | Ollama、Unsloth | Ollama：冷启动预热、NVFP4 stall 修复；Unsloth：Diffusion、LoRA 训练 |
| **ROCm / AMD** | vLLM、SGLang、llama.cpp、Ollama | llama.cpp：CDNA2 MFMA 用于 lightning indexer；Ollama：RDNA1+2 FP8 diffusion |

**最活跃前沿**：**KV cache + 量化**（vLLM 和 SGLang），其次是**投机解码正确性**（两者仍在修复 PP/混合状态 bug）。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│                     训练 / 微调                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Unsloth  (LoRA/GRPO 优化，Qwen3.5-9B: 0.84→0.77s)        │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                        服务引擎                                  │
│  ┌──────────────────────┐         ┌──────────────────────────┐   │
│  │       vLLM           │         │        SGLang            │   │
│  │ (SM120/GLM 阻塞中)   │         │ (HiCache/DeepEP v2 领先) │   │
│  └──────────────────────┘         └──────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                      本地运行时                                  │
│  ┌──────────────────────┐         ┌──────────────────────────┐   │
│  │     llama.cpp        │         │        Ollama             │   │
│  │ (OpenCL/ROCm 后端)   │         │ (Docker 多用户、MLX)       │   │
│  └──────────────────────┘         └──────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                        网关 / 代理                               │
│  ┌───────────────────────────────────────────────────────────┐   │
│  │ LiteLLM (160+ 模型、A2A 中继、Transcribe 直通)             │   │
│  └───────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

**关键差异**：
- **vLLM vs SGLang**：vLLM 模型支持更广但 SM120/GLM 阻塞问题；SGLang 在缓存和 DeepEP 优化上领先。
- **llama.cpp vs Ollama**：llama.cpp 是底层运行时（OpenCL、ROCm、NVFP4）；Ollama 用 Docker/Studio/MLX 包装它。
- **LiteLLM** 占据独特层级——作为 API 网关而非推理引擎。它的竞争对手是 Portkey/Bearly，而非 vLLM。

---

## 6. 趋势信号

### 基础设施工程师应关注什么

| 信号 | 证据 | 影响 |
|-----------|----------|-------------|
| **Blackwell（SM120）不稳定** | vLLM：GLM/DeepSeek 崩溃；SGLang：DSA 索引器元数据 bug | 生产环境部署 GLM/DeepSeek 避开 SM120，等待 2027 年 Q1 修复 |
| **多模态 CUDA Graph 收敛** | vLLM #38175、SGLang #57379 追踪 ViT 支持 | 预计 2026 年 Q4 VL 模型吞吐提升 20-40% |
| **投机解码 + PP 仍有问题** | vLLM #56370（batch 不变性）；SGLang #40001（混合状态） | PP + 投机解码不安全；使用单阶段或禁用投机 |
| **量化格式爆发** | MXFP8、NVFP4、fp8_e4m3 KV、FP8/INT8 diffusion | 需充分测试——各格式硬件要求不同 |
| **AMD ROCm 就绪** | llama.cpp CDNA2 MFMA；Ollama RDNA diffusion；vLLM ROCm bug | AMD 可用于推理；vLLM 仍在追赶 |
| **企业级加固** | LiteLLM：JWT 令牌交换、Prisma 重连；Unsloth：沙箱 | 网关和 Studio 安全态势改善 |
| **MLX on Apple Silicon** | Ollama：冷启动预热、NVFP4 stall；Unsloth：diffusion | 本地 M 系列推理现已可用于生产 diffusion |

### 决策框架

| 场景 | 推荐技术栈 |
|----------|-------------------|
| **云端 GPU 服务（H100/A100）** | vLLM 或 SGLang — vLLM 模型广度，SGLang 前缀缓存/hiecache |
| **Blackwell 部署** | 等待——所有服务引擎有关键缺陷 |
| **本地 Mac 推理** | Ollama（Docker）或直接 llama.cpp |
| **微调** | Unsloth — Qwen3.5-9B 现已快 9% |
| **多提供商聚合** | LiteLLM — 160+ 模型、A2A/Transcribe 直通 |
| **多模态 VL 服务** | 关注 vLLM/SGLang ViT CUDA Graph — 预计 2026 年 Q4 |

---

*跨项目分析 — 2026-09-18*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers (issue numbers, PR numbers, code terms, file paths, config names) in their original English form
3. Preserve the exact markdown structure including tables, lists, headings, etc.
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate section by section while maintaining the structure.

Note: The issue numbers are different from what appears in the original English text - let me carefully translate each section while keeping the technical terms and identifiers in English.</think>

# vLLM 每日简报 — 2026-09-18

## 1. 今日要闻

vLLM 项目今日在多个方向保持活跃开发。值得关注的工作包括：多模态模型的 ViT CUDA Graph 支持跟踪、GLM-5.3 优化工作，以及 MiniMax-M3 内核改进的合入。多个稳定性问题出现在 Blackwell（SM120）硬件上，尤其是稀疏 MLA 和 ROCm AMD GPU。**过去 24 小时内无新版本发布。**

---

## 2. 版本发布与重大变更

**过去 24 小时内无新版本发布。** 项目仍处于 v0.29.0/v0.29.1rc1 开发周期。

---

## 3. 新模型与硬件支持

| 模型/功能 | 状态 | 备注 |
|---------------|--------|-------|
| **LLaVA-OneVision 编码器 CUDA Graph** | 进行中 | PR #57379 新增图像/视频输入的 `SupportsEncoderCudaGraph` 集成 |
| **ViT 完整 CUDA Graph** | RFC/跟踪中 | Issue #38175 跟踪多模态模型的完整 CUDA Graph 支持（Qwen3-VL、GLM-V、Kimi K2.5） |
| **GLM-5.3-Flash on SM120** | 阻塞中 | Issue #53963 — Blackwell 上无稀疏 MLA 路径支持（`qk_rope_head_dim=0`） |
| **DeepSeek-V4.1-Flash on ROCm MI355X** | RFC | Issue #56506 寻求 AMD MI355X（gfx950）性能优化 |
| **Qwen3.8-Flash-Next fp8 KV** | 已修复 | Issue #54426 — QSA 路径上 fp8_e4m3 KV 缓存约使 KV 池翻倍（单机验证） |
| **DeepSeek-V4-Pro TP=16** | 已修复 | Issue #42384 已关闭 — 共享专家的 fp8 block-shape 检查问题已解决 |

---

## 4. 性能优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **MiniMax-M3** | 多个 PR 已合并 | SM120 上拆分预填充 index-score K 循环（#56150）；融合解码 top-k 合并（#56149）；SM120 上启用 FP32 路由器（#56152）；限制解码索引器分块（#57202） |
| **GLM 稀疏 MLA** | 进行中 | PR #57458 减少 GLM-5.3-Flash 的查询打包和稀疏索引准备开销 |
| **TurboQuant/HIGGS Attention** | 后续跟进 | Issue #40069 跟踪扩展到 FA3/4、混合注意力和 MLA 支持 |
| **在线量化** | RFC | Issue #52167 概述在线量化 API 扩展路线图 |
| **DiffusionGemma** | 优化中 | PR #57416 优化预填充专用批次以使用模型的 logit 行数 |

**具体数据：**
- Qwen3.8-Flash-Next：QSA 路径上 fp8 KV 约使 KV 内存翻倍
- MiniMax-M3：解码 top-k 合并从 3 次内核启动减少到 2 次

---

## 5. 稳定性与回归问题

### 严重 / 高优先级

| 问题 | 严重程度 | 状态 | 修复可用 |
|-------|----------|--------|----------------|
| **GLM-5.3-Flash 长解码退化** (#56868) | 高 | 待处理 | — |
| **DeepSeek-V4.1 + DSpark spec decode** — SM120 稀疏 MLA 预填充中非法内存访问 (#56771) | 高 | 待处理 | — |
| **GLM-5.3-Flash 16K 块预填充 ROCm GPU 故障** (#57227) | 高 | 待处理 | — |
| **SP/async TP 下批处理不变性被破坏** (#56370) | 高 | 待处理 | — |
| **DeepSeek V4 在 RTX PRO 6000 上加载失败** (#40821) | 高 | 待处理 | — |

### 中等优先级

| 问题 | 严重程度 | 状态 | 修复可用 |
|-------|----------|--------|----------------|
| **GLM-5.3-Flash 在 ROCm nightly 上启动失败** (#57424) | 中 | 待处理 | — |
| **GLM-5.3 kpool 索引器覆盖 KV 缓存** (#54359) | 中 | 待处理 | — |
| **MoE WNA16 Marlin Gemm 每行 topk 权重错误** (#48895) | 中 | 待处理 | — |
| **v0.28.0/0.29.0 耗尽主机内存** (#54237) | 中 | 待处理 | — |
| **Whisper 音频 > 30s 时间戳错误** (#32588) | 中 | 待处理 | — |

### 已修复的问题
- PR #57290：Spec decode 隐藏状态提取器 PP1 修复
- PR #57198：FlashInfer 自动调优按流水线阶段隔离
- PR #57202：MiniMax-M3 解码索引器边界修复

---

## 6. 对应用开发者的意义

1. **Blackwell（SM120）稳定性注意事项**：多个严重 bug 影响 RTX PRO 6000 和 B300 部署，尤其是 GLM-5.3、DeepSeek-V4.1 和投机解码。建议在修复合入前继续使用 H100/A100 生产部署。

2. **多模态进展**：ViT CUDA Graph 支持正在积极添加中（首先支持 LLaVA-OneVision），这将提升多模态吞吐量。请跟踪 issue #38175 了解时间线。

3. **ROCm/AMD 用户**：多个 bug 影响 MI350X/MI355X。GLM-5.3 启动失败（#57424）和内存访问故障（#57227）表明建议等待 v0.30 或补丁版本。

4. **量化用户**：Qwen3.8-Flash-Next 现已支持 QSA 路径上的 fp8_e4m3 KV 缓存，KV 内存效率约翻倍。这对长上下文工作负载很有前景，但需要 issue #54426 中的补丁。

5. **流水线并行用户**：Bug #56370 破坏了序列并行下的批处理不变性 — 当前避免将 `VLLM_BATCH_INVARIANT=1` 与 SP 配合使用。

6. **内存回归**：0.28.0/0.29.0 版本在启动时消耗过多主机内存（#54237）。v0.27.1 在内存受限环境中仍更稳定。

---

*数据来源：vllm-project/vllm — 2026-09-18*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the GitHub digest from English to Chinese. Let me carefully translate this while:
1. Keeping all Markdown structure exactly (headings, tables, lists, bold, links, etc.)
2. Preserving URLs, issue/PR references, code, numbers as-is
3. Using natural technical Chinese register
4. Outputting ONLY the translation with no preamble

Let me translate section by section:

## Today's Highlights -> 今日要闻

The SGLang project is actively advancing inference optimizations across multiple fronts: deep GEMM improvements for MXFP8 and DeepEP v2, new speculative decoding fixes for hybrid recurrent-state models under pipeline parallelism, and enhanced AMD support for GLM-5.3-Flash. Meanwhile, the CI infrastructure continues to generate substantial diagnostic data—CUDA coredump tracking alone has accumulated 313 entries from automated testing.

SGLang 项目正从多个方向推进推理优化：针对 MXFP8 和 DeepEP v2 的深度 GEMM 改进、流水线并行下混合循环状态模型的新型投机解码修复，以及 GLM-5.3-Flash 的增强型 AMD 支持。与此同时，CI 基础设施持续产生大量诊断数据——仅 CUDA 崩溃追踪就已从自动化测试中收集了 313 条记录。

## Releases & Breaking Changes -> 发布与重大变更

No releases in the last 24 hours.

过去 24 小时内无发布。

## New Model & Hardware Support -> 新模型与硬件支持

| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|

I need to keep the table format with proper alignment. Let me be careful with the translation.

Actually, looking at the original more carefully - there's some repetition in my reading. Let me check:
"Item | Description | Description | Description | PR/Issue" - this seems like it was maybe corrupted in my original analysis or there's an issue with how I read it. Let me check the original again:

Looking at the user's input:


| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|

Hmm, this seems like there might be an issue with the original table format or my reading. But looking at the user's message again:

```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

This seems odd - 4 Description columns. Let me check the original input again... Yes, there's definitely something off. The user wrote:
```
| Item | Description | Description | Description | PR/Issue |
```

Wait, I need to look at what the user actually wrote more carefully:

Looking at the user's message again:

```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

But the user also wrote:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

Wait, let me re-read the user's message more carefully. Looking at the actual content:

```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

Actually wait - looking at the user's raw message, I see:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

But that seems wrong. Let me check the user's actual input again:

The user wrote:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

Hmm, wait - I should look at what the user actually wrote in their message. Looking at the raw content:
``` | Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|```

Actually wait - let me re-read the user message. Looking at the table in the user's message:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

This seems odd - 4 Description columns. But in the original that I'm supposed to translate, I wrote:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

But that's my writing, not the user's. Let me check what the user actually wrote again.

The user wrote:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

Wait - I'm confused. Let me look at the actual table in the user's message more carefully. They wrote:
```
| Item | Description | Description | Description | PR/Issue |
|------|-------------|-------------|-------------|----------|
```

This has 4 columns: Item, Description, Description, Description, PR/Issue - that's actually 5 columns, not 4. The header row shows:
- Item
- Description
- Description  
- Description
- PR/Issue

That's 5 columns. And the separator row has 5 dashes sections. So it's a 5-column table, where 3 columns are all named "Description".

This seems like an error in the original English digest I wrote. Let me fix this in the translation - I'll make it make sense. Looking at the content, it seems like it should be:
- Item
- Description  
- PR/Issue

That's 3 columns. So maybe I should fix this to be a proper 3-column table. Let me do that in the translation.

Actually wait - I need to output ONLY the translation. The user said:
"Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output."

So I should just output the translated content directly, fixing any issues in the original as I go.

Let me look at what the actual table should be. Looking at the content:
| T-Head PPU | ZW810、ZW810E、ZW-M890P 卡的一级支持路线图 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| SenseNova-U1 | SenseNova-U1/U1.5 支持的功能与性能追踪 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| RISC-V Vector Extension | RVV attention 后端的功能请求 | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| GLM-5.x NoPE MLA on SM120 | 修复进行中：解决 DSA sparse-MLA 后端在 Blackwell (SM120) 上不可用的问题 | [#39302](https://github.com/sgl-project/sglang/issues/39302) |
| AMD GLM-5.3-Flash | Quark MXFP4 量化现在遵守 fused/per-expert 排除名称 | [#39317](https://github.com/sgl-project/sglang/pull/39317) |

| 领域 | 变更 | PR |
|------|------|-----|

I notice the formatting needs adjustment. The table should have three columns: 领域 (Domain/Area), 变更 (Change), and PR. I'll continue translating the performance optimizations section, focusing on the new information about NVIDIA CC on Blackwell and DeepEP v2 MXFP8 support.

The next thinking completes the translation of the performance optimizations, highlighting key technical improvements in scheduling, caching, and kernel optimization for NVIDIA's Blackwell architecture and memory-efficient processing.

I'll translate the critical stability and regression issues, focusing on the new technical details about DSA indexer and FlashKDA problems in GLM-5.x models. The translation emphasizes the high-priority technical challenges in model implementation, particularly around metadata fetching and output handling in advanced language models.

The translation captures the nuanced technical descriptions of system vulnerabilities, highlighting potential runtime crashes and output inconsistencies in deep learning model architectures. Each issue represents a complex technical hurdle requiring precise debugging and resolution strategies.

The subsequent section outlines medium and low-priority technical concerns, ranging from memory management and event schema standardization to performance tracing and integration challenges in machine learning inference systems. These issues span critical infrastructure components like OpenTelemetry, speculative decoding, and serving tool benchmarking.

The translation continues with a focus on practical development implications, highlighting key recommendations for developers working with specific model architectures and hardware configurations. The guidance emphasizes careful implementation of recent fixes, particularly around prefix caching, speculative decoding, and gRPC integration, ensuring optimal performance and system stability.

I'll translate the specific technical guidance for different development scenarios, noting critical update requirements for model serving, GPU utilization, and performance optimization strategies.</think>

# SGLang 速报 — 2026-09-18

## 今日要闻

SGLang 项目正从多个方向推进推理优化：针对 MXFP8 和 DeepEP v2 的深度 GEMM 改进、流水线并行下混合循环状态模型的新型投机解码修复，以及 GLM-5.3-Flash 的增强型 AMD 支持。与此同时，CI 基础设施持续产生大量诊断数据——仅 CUDA 崩溃追踪就已从自动化测试中收集了 313 条记录。

## 发布与重大变更

过去 24 小时内无发布。

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|------|----------|
| **T-Head PPU** | ZW810、ZW810E、ZW-M890P 卡的一级支持路线图 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **SenseNova-U1** | SenseNova-U1/U1.5 支持的功能与性能追踪 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **RISC-V Vector Extension** | RVV attention 后端的功能请求 | [#18072](https://github.com/sgl-project/sglang/issues/18072) |
| **GLM-5.x NoPE MLA on SM120** | 修复进行中：DSA sparse-MLA 后端在 Blackwell (SM120) 上不可用 | [#39302](https://github.com/sgl-project/sglang/issues/39302) |
| **AMD GLM-5.3-Flash** | Quark MXFP4 量化现在遵守 fused/per-expert 排除名称 | [#39317](https://github.com/sgl-project/sglang/pull/39317) |

## 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **NVIDIA CC on Blackwell** | 修复 overlap 调度强制同步 D2H memcpy 导致 decode 步骤串行化的问题 | [#36810](https://github.com/sgl-project/sglang/pull/36810) |
| **DeepEP v2 MXFP8** | 支持 group-32 激活尺度，延迟路由加权，可选 FP32 SiLU | [#40030](https://github.com/sgl-project/sglang/pull/40030) |
| **前缀缓存** | 在 overlap 调度下回收无 token ID 的已提交 KV | [#35793](https://github.com/sgl-project/sglang/pull/35793) |
| **HiCache 回写** | 通过防止主机内存耗尽来提升可用前缀缓存容量 | [#39395](https://github.com/sgl-project/sglang/pull/39395) |
| **HiCache DSA 索引器** | 紧凑化主机存储，仅保留 producer 层 | [#38426](https://github.com/sgl-project/sglang/pull/38426) |
| **EAGLE draft-extend** | 修复重叠计划流中 input-producer 依赖问题 | [#40025](https://github.com/sgl-project/sglang/issues/40025) |
| **Mamba cache COW** | 在服务前预热 fused copy 内核，消除首次命中延迟峰值 | [#36266](https://github.com/sgl-project/sglang/pull/36266) |
| **乐观预填充** | 配合仅缓冲区 L3 直写 HiCache 启用 | [#40043](https://github.com/sgl-project/sglang/pull/40043) |
| **NVFP4 MoE 分发** | 修复 ModelOpt 后端分发使用缓存值而非实时全局值 | [#38932](https://github.com/sgl-project/sglang/pull/38932) |

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | **DSA 索引器元数据在可中断 decode CUDA 图上未获取** — GLM-5.x 模型启动时因 `AttributeError` 崩溃 | PR 已开：[#40047](https://github.com/sgl-project/sglang/pull/40047) |
| **高** | **FlashKDA 预填充返回元组，导致 GLM-5.3-Flash 崩溃** — 即使 `return_intermediate_states=False` 也返回 `(output, None)` | [#39925](https://github.com/sgl-project/sglang/issues/39925) |
| **高** | **分层缓存在混合 GDN/Mamba 模型上返回错误输出** — 完整长度主机层命中在错误通道的声音中作答 | [#39830](https://github.com/sgl-project/sglang/issues/39830) |
| **中** | **sgl-deep-gemm 0.2.0 SM90 权重尺度变换** — 返回非自有别名 | [#39684](https://github.com/sgl-project/sglang/issues/39684) |
| **中** | **KV 缓存事件 schema** — RFC 以对齐共享消费者的 vLLM 协议 | [#39991](https://github.com/sgl-project/sglang/issues/39991) |
| **中** | **Spec V2 OpenTelemetry span** — 投机解码路径不再发出 | [#37128](https://github.com/sgl-project/sglang/issues/37128) |
| **中** | **EAGLE DP 图一致性** — target/draft 间不同的 MoE A2A 后端导致 token 元数据不匹配 | [#32196](https://github.com/sgl-project/sglang/pull/32196) |
| **中** | **PP × 投机解码混合状态** — 循环状态提交与微批次配对错误 | [#40001](https://github.com/sgl-project/sglang/pull/40001) |
| **低** | **Benchmark serving tool** — 不控制/记录 radix 缓存状态；CI 使用不同协议 | [#39651](https://github.com/sgl-project/sglang/issues/39651) |
| **低** | **Anthropic 端点 tool_reference** — 破坏无延迟引用支持的聊天模板 | [#35692](https://github.com/sgl-project/sglang/issues/35692) |

## 这对应用开发者的意义

- **如果你在服务 GLM-5.x 或混合 Mamba/attention 模型**：请关注 DSA 索引器修复（#40047）后再部署——当前可中断 CUDA 图模式会在模型启动时崩溃。
- **如果你使用 AMD GPU**：quark 量化排除修复（#39317）现已支持 GLM-5.3-Flash 的正确 BF16 层处理；合并后请更新到最新版本。
- **如果你运行带前缀缓存的工作负载**：HiCache 改进（#39395、#38426）显著提升了可用缓存容量；请用新构建版本重新测试你的工作负载。
- **如果你在流水线并行下使用投机解码**：混合循环状态修复（#40001）是正确性所必需的——请勿在没有此修复的情况下使用 PP × Spec。
- **如果你通过 gRPC 集成**：引擎状态变更现在可流式传输（#39915），支持更好的事件驱动集成模式。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp daily digest into Simplified Chinese, following specific translation rules. Let me go through the content and translate it while:

1. Keeping all Markdown structure exactly (headings, tables, lists, etc.)
2. Keeping URLs, numbers, dates, issue/PR references as-is
3. Keeping technical terms, project names, file paths in original form
4. Using natural technical Chinese (the register of a Chinese developer newsletter)
5. NOT adding any preamble, explanation, or markdown fences

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate each part carefully:

---

# llama.cpp 每日简报

## 1. 今日要点

今日有多项后端优化 PR 合并，主要聚焦于 OpenCL 量化 GEMM 内核和 ROCm 矩阵核心支持。同时有一项安全修复解决了 gguf-dump 输出中的终端转义序列漏洞。这些改进提升了非 NVIDIA 硬件上量化推理的性能，并封堵了潜在的攻击面。

## 2. 版本更新与破坏性变更

今日未报告版本更新或破坏性变更。

## 3. 新模型与硬件支持

- **Qwen3.8-Flash-Next MTP**：PR [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) 实现了 1.3–2× 更快


的 MTP（多词元预测）支持，采用共享 MTP 模块复用 embed_tokens 以降低磁盘/显存占用。

- **Hexagon NPU 后端支持 Windows Arm64**：PR [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) 新增缺失的构建目标，解决了 issue #26877。

- **fraunhofer-iis/elmod-2.7b-it 词汇预分词器**：PR [#28845](https://github.com/ggml-org/llama.cpp/pull/28845) 添加了 `escape_after_split` 支

持 Metaspace 预分词器，解决了 issue #28804。

## 4. 性能与优化

- **OpenCL DP4A 二进制内核**：三项 PR 为量化 GEMM 添加了优化的乘加（DP4A）二进制内核，涵盖 Q4_0、Q4_K 和 Q6_K 量化格式。

- **ROCm CDNA2/gfx90a 矩阵核心闪电索引器**：PR [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) 为 DeepSeek-V3.2/V4 闪电索引器实现了 MFMA 路径调用。

- **CUDA 克罗内克 FWHT 支持**：PR [#29051](https://github.com/ggml-org/llama.cpp/pull/29051) 为非 2 的幂维度添加了 `MUL_MAT_HADAMARD` 操作的 CUDA 支持。

- **OpenCL Flash Attention 二进制内核**：PR [#29046](https://github.com/ggml-org/llama.cpp/pull/29046) 实现了二进制内核的 flash attention 支持。

## 5. 稳定性与回归测试

- **安全：终端转义序列处理**：PR [#29053](https://github.com/ggml-org/llama.cpp/pull/2

9053) 在 gguf-dump 输出中转义控制字符，防止恶意 GGUF 文件通过终端剪贴板写入（OSC 52）或可点击链接（OSC 8）进行攻击。

- **HTTP 代理支持**：PR [#21752](https://github.com/ggml-org/llama.cpp/pull/21752) 添加 `HTTP_PROXY`/`HTTPS_PROXY` 环境变量支持，解决了代理环境下静默下载失败的问题。

- **投机解码批次顺序**：PR [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) 保持原始 token 顺序

跨批次分割，防止 DFlash 推理时产生错误的隐藏状态。

- **服务器系统提示词文件加载**：PR [#28053](https://github.com/ggml-org/llama.cpp/pull/28053) 为 `llama-server` 添加 `-sysf` 参数以支持从文件加载系统提示词，与 `llama-cli` 功能一致。

## 6. 应用开发者需要了解的内容

非 NVIDIA GPU 用户现在可以通过新的 OpenCL DP4A 内核获得显著的性能提升。DeepSeek V3/V4 在 AMD 硬件上也能充分利用矩阵核心加速。如果在自动化流程中使用 `gguf-dump`，需要升级以修复转义序列问题。企业部署场景现在支持通过标准代理环境变量进行模型下载。`llama-server` 现在可以直接从文件加载系统提示词，便于模板化和部署配置。</think>

# llama.cpp 每日简报

## 1. 今日要点

今日有多项后端优化 PR 合并，主要聚焦于 OpenCL 量化 GEMM 内核和 ROCm 矩阵核心支持。同时有一项安全修复解决了 gguf-dump 输出中的终端转义序列漏洞。这些改进提升了非 NVIDIA 硬件上量化推理的性能，并封堵了潜在的攻击面。

## 2. 版本更新与破坏性变更

今日未报告版本更新或破坏性变更。

## 3. 新模型与硬件支持

- **Qwen3.8-Flash-Next MTP**：PR [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) 实现了 1.3–2× 更快 的 MTP（多词元预测）支持，采用共享 MTP 模块复用 embed_tokens 以降低磁盘/显存占用。

- **Hexagon NPU 后端支持 Windows Arm64**：PR [#29052](https://github.com/ggml-org/llama.cpp/pull/29052) 新增缺失的构建目标，解决了 issue #26877。

- **fraunhofer-iis/elmod-2.7b-it 词汇预分词器**：PR [#28845](https://github.com/ggml-org/llama.cpp/pull/28845) 添加了 `escape_after_split` 支持 Metaspace 预分词器，解决了 issue #28804。

## 4. 性能与优化

- **OpenCL DP4A 二进制内核**：三项 PR 为量化 GEMM 添加了优化的乘加（DP4A）二进制内核：
  - Q4_0: [#29055](https://github.com/ggml-org/llama.cpp/pull/29055)
  - Q4_K: [#29056](https://github.com/ggml-org/llama.cpp/pull/29056)
  - Q6_K: [#29057](https://github.com/ggml-org/llama.cpp/pull/29057)

- **ROCm 矩阵核心闪电索引器（CDNA2/gfx90a）**：PR [#29050](https://github.com/ggml-org/llama.cpp/pull/29050) 为 DeepSeek-V3.2/V4 闪电索引器添加了 MFMA 路径，利用此前处于空闲状态的 CDNA 矩阵核心。

- **CUDA Kronecker FWHT 支持**：PR [#29051](https://github.com/ggml-org/llama.cpp/pull/29051) 为非 2 的幂维度（384、640、768、1280）的 `MUL_MAT_HADAMARD` 操作添加了 CUDA 支持，使用固定 H12/H20 变换的 Kronecker 积。

- **OpenCL Flash Attention 二进制内核**：PR [#29046](https://github.com/ggml-org/llama.cpp/pull/29046) 为 flash attention 添加了二进制内核支持。

## 5. 稳定性与回归测试

- **安全：终端转义序列处理** — PR [#29053](https://github.com/ggml-org/llama.cpp/pull/29053) 转义了 gguf-dump 输出中的控制字符。恶意构造的 GGUF 文件可能在存在漏洞的终端中写入剪贴板（OSC 52）或创建可点击链接（OSC 8）。与 issue #28969 相关。

- **HTTP 代理支持**：PR [#21752](https://github.com/ggml-org/llama.cpp/pull/21752) 为 HTTP 客户端添加了 `HTTP_PROXY`/`HTTPS_PROXY` 环境变量支持，解决了代理环境下静默下载失败的问题（issue #21694）。

- **投机解码批次顺序**：PR [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) 保留跨批次分割时的原始 token 顺序，防止错误的隐藏状态在 DFlash 投机解码期间出现。

- **服务器系统提示词文件加载**：PR [#28053](https://github.com/ggml-org/llama.cpp/pull/28053) 为 `llama-server` 添加了 `-sysf` 参数以支持从文件加载系统提示词，实现了与 `llama-cli` 相同的功能。

## 6. 应用开发者需要了解的内容

- **非 NVIDIA 量化推理更佳**：新的 OpenCL DP4A 内核显著提升了 Q4/Q6 量化模型在非 NVIDIA GPU 上的性能。

- **AMD 硬件上的 DeepSeek V3/V4**：ROCm 用户现在可以使用矩阵核心加速闪电索引器。

- **安全的模型加载**：如果在自动化流程中使用 `gguf-dump`，请更新以包含转义序列修复，防止来自不可信 GGUF 文件的剪贴板注入或链接攻击。

- **企业代理支持**：通过 `-hf` 或模型预设下载时现在支持标准代理环境变量——适用于企业/容器化环境。

- **服务器定制化**：`llama-server` 现在可以从文件加载系统提示词，便于模板化和部署配置。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified). Let me carefully translate this while preserving:

1. The Markdown structure exactly
2. URLs and links
3. Issue/PR references like #12345
4. Project names, repository names
5. Technical terms
6. Numbers and dates
7. The tone of a Chinese developer newsletter

Let me go through and translate this naturally:</think>

# Ollama 摘要 — 2026-09-18

## 今日要闻

Ollama 项目当日在多个方向上都有活跃开发：新提出了 `--nodraft` 标志用于禁用投机解码，MLX 后端持续增强（包括低比特量化支持），并继续推进 Windows Vulkan 和 ARM64 平台稳定性工作。许可证合规问题（附带依赖的版权声明分发）仍是长期未解决议题，社区关注度高（276 👍）。过去 24 小时内无新版本发布。

---

## 版本发布与破坏性变更

过去 24 小时内无版本发布。但以下 PR 正推进至下一版本：

- **PR #18243**："UX: reject oversized pulls by default" — 实现 MLX 独有检测，识别无法在本地运行的过大模型，提供 `--force` 绕过选项。未来可能扩展到 GGUF 模型。[[PR #18243](https://github.com/ollama/ollama/pull/18243)]
- **PR #16590**：准备移除兼容性修补程序，支持清单列表 — 在单一标签下为每个 runner 专属清单添加清单列表存储。

---

## 新模型与硬件支持

| 模型/架构 | 状态 | 备注 |
|---|---|---|
| `spark2_5` | **已添加** | 支持 Spark-X2.5-4B / 1.7B 模型（Issue #18195，已关闭）|
| Nemotron vision (MLX) | **已添加** | PR #17714 在共享 MLX 媒体流水线上实现了 RADIO 视觉编码器和投影仪 |
| Bonsai 低比特（1-bit/2-bit）| **已提议** | Issue #18515 请求 MLX 支持超低比特量化 |

**平台更新：**
- **ARM64 Vulkan**：Issue #18502 — 正在推进为 Linux ARM64 Docker 镜像添加 Vulkan 后端（当前回退到 CPU）
- **MLX nvfp4**：Issue #18505 报告持续单槽负载下预填充末尾偶发卡死；只能通过 runner SIGTERM 恢复

---

## 性能优化

| 领域 | 变更 | PR / Issue |
|---|---|---|
| 思考模型 | 结构化输出现已在单次传递中应用，消除双重预填充 | [PR #18479](https://github.com/ollama/ollama/pull/18479) |
| MLX 投机解码 | 每解码 256 个 token 释放已释放的 KV 缓冲区 | [PR #18510](https://github.com/ollama/ollama/pull/18510) |
| MLX 冷启动 | 模型加载时预热 MLX 编译路径以填充缓存 | [PR #16085](https://github.com/ollama/ollama/pull/16085) |
| MLX 加载卡死 | 实现基于进度的慢速/长时加载卡死检测 | [PR #17834](https://github.com/ollama/ollama/pull/17834) |
| 重定向处理 | 加强清单/Blob 传输重定向的验证（重新检查 scheme + DNS）| [PR #18512](https://github.com/ollama/ollama/pull/18512) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR？|
|---|---|---|---|
| **高** | **glm-ocr 无限循环** — 文字识别输出即使在简单输入上也无限循环 | 开放 | — |
| **高** | **Windows 11 托盘应用失败** — 托盘图标显示但服务始终不启动；手动 `ollama serve` 可以工作 | 开放 | — |
| **高** | **Vulkan AMD RX 6750 XT 崩溃** — Windows 上 qwen3-vl:8b 加载第二个 VL 模型后以 0xc0000005 崩溃 | 开放 | — |
| **中** | **minicpm5-2b 工具调用无法解析** — 原生 XML 工具调用返回 null，内容包含碎片化乱码 | 开放 | — |
| **中** | **glm-5.3-flash 畸形工具调用** — 通过 Ollama Cloud 间歇性发出 JSON 编码字符串而非数组 | 开放 | — |
| **中** | **DRAFT 模型内存测量失败** — /api/ps 为 4.4 GB 模型报告 315 MB | 已关闭 | — |
| **中** | **MLX nvfp4 预填充卡死** — 已接受请求在 processed=total-1 后停止，tokens 为 0 | 开放 | — |
| **低** | **许可证分发** — Ollama 未在二进制文件中分发静态链接依赖的版权声明（如 llama.cpp）| 开放（2024）| — |

---

## 这对应用开发者的意义

1. **投机解码控制**：已提议 `--nodraft` 标志（[Issue #18517](https://github.com/ollama/ollama/issues/18517)）— 适用于调试和对准确性敏感任务获取精确非投机输出。

2. **工具调用变更**： `/v1/responses` API 现拒绝 `agent_message` 输入项（[Issue #18286](https://github.com/ollama/ollama/issues/18286)，已关闭）。自定义 "tool" 角色也被拒绝（[Issue #18509](https://github.com/ollama/ollama/issues/18509)），可能破坏现有基于 qwen 的工作流。

3. **Windows 注意事项**：在 Windows 11 上使用 Vulkan AMD GPU 时，避免同时加载多个 VL 模型 — RX 6750 XT 上有崩溃报告（0xc0000005）。

4. **ARM64 Vulkan**：在 ARM64 Linux 上运行（如 Asahi 上的 Apple Silicon），Vulkan 推理当前回退到 CPU；修复待定。

5. **超大模型拉取警告**：即将推出的变更将默认阻止拉取超出硬件容量的过大模型（MLX 优先，GGUF 后续）— 使用 `--force` 覆盖。

6. **清单追踪**：正在推进在 `/api/chat` 响应中包含服务清单摘要（[Issue #18394](https://github.com/ollama/ollama/issues/18394)），有助于将评估分数绑定到确切模型产物。

---

*数据来源：GitHub — github.com/ollama/ollama | 2026-09-18*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep the Markdown structure exactly as-is
3. Keep URLs, issue/PR numbers, code identifiers, etc. in their original form
4. Use natural technical Chinese, not literal translation

Let me go through and translate this carefully while preserving the structure.

The content is:
- Title: # LiteLLM Digest — 2026-09-18
- Today's Highlights section
- Releases & Breaking Changes table
- New Model & Hardware Support table
- Performance & Optimization table
- Stability & Regressions table
- New Features table
- What This Means for Application Developers section

Let me translate each section:

Title: # LiteLLM 每日简报 — 2026-09-18

Today's Highlights: 今日要闻

A quiet day on the release front with no new versions, but significant proxy and infrastructure work landed. Several bugs affecting production deployments — particularly around Prisma reconnection and streaming usage tracking — remain open. New features include Amazon Transcribe passthrough, Microsoft Foundry A2A relay support, and improved JWT auth handling for MCP tool search.

今天没有新版本发布，但代理层和基础设施方面有重要改动上线。若干影响生产部署的bug仍待解决，特别是Prisma重连和流式用量追踪相关的问题。新功能包括Amazon Transcribe透传、Microsoft Foundry A2A中继支持，以及MCP工具搜索的JWT认证优化。

Releases & Breaking Changes: 发布与重大变更

New Model & Hardware Support: 新模型与硬件支持

Performance & Optimization: 性能与优化

Stability & Regressions: 稳定性与回归问题

New Features: 新功能

What This Means for Application Developers: 这对应用开发者的意义

Now I need to translate the tables while preserving their structure. Let me go through each one carefully.</think>

# LiteLLM 每日简报 — 2026-09-18

## 今日要闻

今天没有新版本发布，但代理层和基础设施方面有重要改动上线。若干影响生产部署的bug仍待解决，特别是Prisma重连和流式用量追踪相关的问题。新功能包括Amazon Transcribe透传、Microsoft Foundry A2A中继支持，以及MCP工具搜索的JWT认证优化。

---

## 发布与重大变更

| 状态 | 项目 | 备注 |
|------|------|------|
| 🔴 **待处理** | **无新版本** | 过去24小时内无版本标签 |

---

## 新模型与硬件支持

| Issue/PR | 模型/供应商 | 描述 |
|----------|-------------|------|
| [#16073](https://github.com/BerriAI/litellm/issues/16073) | **fal.ai 模型** | 新增fal.ai提供商支持，包括OpenAI Sora 2和Google Veo 3.1视频模型。**已关闭** — 已合并/解决。 |
| [#28083](https://github.com/BerriAI/litellm/issues/28083) | **Bedrock Claude tool-search beta** | 修复了`tool_search_tool_regex_20251119`服务端工具类型在Bedrock Invoke上的支持。**已关闭。** |
| [#41702](https://github.com/BerriAI/litellm/pull/41702) | **Bedrock Opus 4.8/5、Sonnet 5** | 将工具搜索beta头信息改为基于模型映射发送——现在正确地为新版Claude模型添加。**已关闭。** |
| [#41469](https://github.com/BerriAI/litellm/pull/41469) | **GPT-5推理模型** | 修复了Responses API在`drop_params`设置时丢弃`top_p`参数的问题。 |

---

## 性能与优化

| PR | 改进 | 影响 |
|----|------|------|
| [#41711](https://github.com/BerriAI/litellm/pull/41711) | **网页搜索拦截** — 继承父请求的会话和追踪 | 更好的可观测性；搜索成本计入父请求 |
| [#41448](https://github.com/BerriAI/litellm/pull/41448) | **Vertex透传** — 保留目标URL查询参数 | 修复Vertex流式传输时的费用/令牌记录问题 |
| [#41443](https://github.com/BerriAI/litellm/pull/41443) | **测试依赖** — 移除固定的成本映射价格 | 减少因供应商价格同步导致的CI不稳定 |

---

## 稳定性与回归问题

| Issue | 严重程度 | 状态 | 描述 |
|-------|----------|------|------|
| [#26886](https://github.com/BerriAI/litellm/issues/26886) | **高** | 待处理 | Prisma重连失败 — 周期性LiteLLM代理Pod不稳定，Prisma查询引擎崩溃。17条评论。 |
| [#36168](https://github.com/BerriAI/litellm/issues/36168) | **高** | 待处理 | 流式传输在最终块有非空`choices`数组时丢失上游`usage`——cached_tokens丢失，费用按全输入费率计费 |
| [#41553](https://github.com/BerriAI/litellm/issues/41553) | **高** | 待处理 | CI cadence 319f427c失败 — Buildkite和CircleCI上4个新红色构建 |
| [#29764](https://github.com/BerriAI/litellm/issues/29764) | **中** | 已关闭 | Anthropic `/v1/messages/count_tokens`忽略配置的`api_base`——硬编码`api.anthropic.com`，导致vLLM后端失效 |
| [#41605](https://github.com/BerriAI/litellm/issues/41605) | **中** | 待处理 | 同步Azure部署定价偶发记录为$0 |
| [#41611](https://github.com/BerriAI/litellm/issues/41611) | **中** | 待处理 | 流式防护：跨两个SSE块拆分的内容可能绕过逐块检查 |
| [#24771](https://github.com/BerriAI/litellm/issues/24771) | **中** | 已关闭 | MCP OAuth2回调重定向到不存在的`/ui/mcp/oauth/callback`（404） |
| [#30667](https://github.com/BerriAI/litellm/issues/30667) | **低** | 待处理 | 流式透传中途失败不记录usage/cost |

---

## 新功能

| PR | 功能 | 描述 |
|----|------|------|
| [#41515](https://github.com/BerriAI/litellm/pull/41515) | **Amazon Transcribe透传** | `POST /transcribe/{Operation}` 支持按任务完成时间计费 |
| [#41511](https://github.com/BerriAI/litellm/pull/41511) | **Microsoft Foundry A2A中继** | 通过Entra认证和版本化卡片发现连接Foundry代理 |
| [#41485](https://github.com/BerriAI/litellm/pull/41485) | **RFC 8693令牌交换** | 网关令牌端点接受IdP JWT，支持Claude Code无浏览器往返 |
| [#41700](https://github.com/BerriAI/litellm/pull/41700) | **项目分配** | `/key/update` 现在允许将未分配的密钥分配给项目 |
| [#41708](https://github.com/BerriAI/litellm/pull/41708) | **UI每模型预算** | 添加至用户创建表单（与现有密钥/团队表单一致） |
| [#36741](https://github.com/BerriAI/litellm/pull/36741) | **Langfuse v4迁移** | 回调从弃用的v2 SDK迁移至v4 |

---

## 这对应用开发者的意义

1. **代理运营商**：如果使用Prisma后端运行LiteLLM，请关注Prisma重连问题（#26886）——考虑在补丁发布前调整连接池配置。

2. **流式计费**：如果依赖缓存输入的精确令牌计数，流式传输中的bug（#36168）可能导致超额计费。请在响应元数据中监控`cached_tokens`。

3. **新集成**：Amazon Transcribe用户现在可以通过LiteLLM路由并正确记录费用；Microsoft Foundry用户可使用Entra认证的A2A中继支持。

4. **JWT认证改进**：MCP工具搜索现在为JWT认证请求尊重团队/用户设置（#41710），令牌交换（#41485）支持无头密钥配置。

5. **Langfuse用户**：如果使用Langfuse v4，回调支持已上线——升级路径现已明确。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth Digest into Simplified Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers, URLs, issue numbers, version tags, code blocks as-is
3. Preserve the Markdown structure exactly
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate:

## 1. Today's Highlights
→ 今日要闻

## 2. Releases & Breaking Changes
→ 版本更新与重大变更

## 3. New Model & Hardware Support
→ 新模型与硬件支持

## 4. Performance & Optimization
→ 性能与优化

## 5. Stability & Regressions
→ 稳定性与回归问题

## 6. What This Means for Application Developers
→ 这对应用开发者意味着什么

Now I need to translate the body content while keeping technical terms, URLs, issue numbers, etc. as-is.

Let me do this carefully:

"Today we released v0.1.810-beta with a major Docker refresh featuring multi-user accounts, RDNA1+2/FP8/INT8 diffusion support, ARM64 CUDA Windows compatibility, and GRPO/inference improvements. The team is simultaneously pushing performance work on Qwen3.5-9B LoRA SFT (0.84s → 0.77s per step) and hardening Studio with OS sandboxing for Python/Terminal tools on Linux and macOS."

→ Unsloth发布了v0.1.810-beta，Docker镜像迎来重大更新，新增多用户账户、RDNA1+2/FP8/INT8扩散模型支持、ARM64 CUDA Windows兼容性，以及GRPO/推理优化。同时团队持续推进Qwen3.5-9B LoRA SFT的性能优化（从0.84s降至0.77s每步），并在Linux和macOS上为Studio的Python/Terminal工具强化了系统沙箱。

Now I'll translate the tables and remaining content, preserving all identifiers, URLs, and formatting.</think>

# Unsloth 速报 — 2026-09-18

## 1. 今日要闻

Unsloth发布了**v0.1.810-beta**，Docker镜像迎来重大更新，新增多用户账户、RDNA1+2/FP8/INT8扩散模型支持、ARM64 CUDA Windows兼容性，以及GRPO/推理优化。同时团队持续推进Qwen3.5-9B LoRA SFT的性能优化（从0.84s降至0.77s每步），并在Linux和macOS上为Studio的Python/Terminal工具强化了系统沙箱。

---

## 2. 版本更新与重大变更

| 版本 | 关键变更 | 链接 |
|------|---------|------|
| **v0.1.810-beta** | Docker镜像刷新 — 多用户账户、RDNA1+2/FP8/INT8扩散模型支持、ARM64 CUDA Windows、训练/GRPO/推理优化 | [Release](https://github.com/unslothai/unsloth/releases) |

**迁移注意：** 新Docker镜像现默认包含Studio（此前ROCm镜像仅包含训练功能）。从多用户功能之前的版本升级的用户可能需要重新配置认证。

---

## 3. 新模型与硬件支持

- **AMD RDNA1+2 GPU** — Docker镜像新增完整FP8/INT8扩散模型支持
- **ARM64 CUDA Windows** — Windows ARM64平台新增支持路径
- **Qwen3.8-Flash-Next MTP** — 初始支持（详见[Issue #11143](https://github.com/unslothai/unsloth/issues/11143)，存在已知加载中止问题）
- **Nemotron 30B** — 新增`NemotronHTopkRouter`的LoRA支持（[Issue #4476](https://github.com/unslothai/unsloth/issues/4476)已关闭）
- **Docker ROCm镜像** — 现与训练专用ROCm镜像一起提供Unsloth Studio（[PR #11218](https://github.com/unslothai/unsloth/pull/11218)）
- **ModelScope集成** — 新增下载源支持的功能请求（[Issue #9117](https://github.com/unslothai/unsloth/issues/9117)、[Issue #2969](https://github.com/unslothai/unsloth/issues/2969)）

---

## 4. 性能与优化

| PR | 变更 | 影响 |
|----|------|------|
| **[#11238](https://github.com/unslothai/unsloth/pull/11238)** | `_utils.py`中与模型无关的CPU开销修复 | Qwen3.5-9B LoRA SFT: **0.84s → 0.77s** 每步（1 GPU，B200） |
| **[#10744](https://github.com/unslothai/unsloth/pull/10744)** | 四个补丁减少每步约2万次内核调用 | Qwen3.5-9B LoRA SFT: **0.83s → 0.66s** 每步（1 GPU，B200） |
| **[#11237](https://github.com/unslothai/unsloth/pull/11237)** | 停止macOS更新时重复探测llama.cpp二进制文件 | macOS更新: **~60s → <5s**（llama.cpp已是最新时） |

GPU利用率仍是瓶颈：实际计算约270ms，总步时850ms，表明CPU端调度仍有优化空间。

---

## 5. 稳定性与回归问题

### 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| **[#11143](https://github.com/unslothai/unsloth/issues/11143)** | Qwen3.8-Flash-Next MTP加载时中止 — 重构后`hc_head_norm`维度不匹配 | **OPEN** — 4条评论 |
| **[#11219](https://github.com/unslothai/unsloth/issues/11219)** | MTP drafter在图构建时因`GGML_ASSERT(ggml_can_repeat(b, a))`崩溃（RTX 5080，b11007-mix） | **OPEN** — 1条评论 |
| **[#8246](https://github.com/unslothai/unsloth/issues/8246)** | 无法在RTX 5060 TI 16GB上加载NVFP4 | **CLOSED** — 6条评论 |

### 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| **[#2613](https://github.com/unslothai/unsloth/issues/2613)** | 全参数微调：浮点类型张量可能需要梯度 | **OPEN** — 6条评论 |
| **[#11012](https://github.com/unslothai/unsloth/issues/11012)** | Windows安装失败： Unexpected '['（退出码2） | **CLOSED** — 4条评论 |
| **[#9697](https://github.com/unslothai/unsloth/issues/9697)** | 开启TP时KV缓存量化未反映在上下文长度上 | **CLOSED** — 3条评论 |

### 正在修复的基础设施问题

- **[#11172](https://github.com/unslothai/unsloth/pull/11172)** — Python工具的网络调用现遵循主机白名单（此前间接调用会绕过）
- **[#11209](https://github.com/unslothai/unsloth/pull/11209)** — 为Python/Terminal工具添加系统沙箱（Linux用bubblewrap，macOS用Seatbelt）— 回滚后重新开放
- **[#11220](https://github.com/unslothai/unsloth/pull/11220)** — 修复Windows上被拒绝的llama.cpp缓存恢复导致的文件残留

---

## 6. 这对应用开发者意味着什么

1. **Docker部署应升级到v0.1.810-beta** — 新镜像包含多用户支持及最新版llama.cpp。如果在AMD（ROCm）上运行，Studio现已可在容器中使用。

2. **Qwen3.5-9B微调现在快约9%** — 每步延迟下降（0.84s → 0.77s）在大型训练任务中会显著累积。这对CLI工作流尤为相关。

3. **Studio安全态势已改善** — Python工具的网络调用现统一遵循主机白名单。macOS用户更新速度大幅提升。这些变更降低了暴露Studio实例的攻击面。

4. **关注MTP相关崩溃** — 如使用Qwen3.8-Flash-Next的多Token预测功能，请关注[Issue #11143](https://github.com/unslothai/unsloth/issues/11143) — 该架构正在演进，近期构建可能出现加载时失败。

5. **Windows ARM64现已可用** — Surface Pro X等设备上的开发者现可通过新的ARM64 CUDA Windows支持原生运行Unsloth。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*