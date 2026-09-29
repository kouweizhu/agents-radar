# AI 基础设施日报 2026-09-29

> 生成时间: 2026-09-29 02:15 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the provided English report into Chinese. Let me analyze the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

This is a straightforward translation task. I'll translate the content while preserving all formatting, links, code references, and technical terms as required.

Let me translate section by section:</think>

# 跨项目对比：AI 基础设施摘要 — 2026-09-29

## 1. 生态系统概览

AI 基础设施层正在经历快速的专业化分工。从今天的活动来看，出现了明显的分化：**SGLang** 和 **Ollama** 推动着Serving性能的前沿（KV Cache分片、PD分离、MLX），而 **LiteLLM** 则专注于网关能力（多提供商路由、Guardrails、成本控制）。所有项目的共同重点是**生产环境加固**——不仅仅是功能迭代速度，更是为了企业部署的稳定性。模型支持持续扩展到各类架构（T-Head PPU、AMD MI30X、K2 Horizon），但大量工程工作也投入到修复回归问题和加固边缘场景（Windows CUDA崩溃、Redis SSL回归、Budget持久化Bug）。

---

## 2. 活动对比

| 项目 | Issues（过去24小时） | PRs（过去24小时） | Release |
|---------|-------------------|------------------|----------|
| **SGLang** | 14+（7个Bug，7个路线图/功能） | 16+ | 无 |
| **Ollama** | 14 | 26 | v0.35.0（决策模型） |
| **LiteLLM** | ~20+（严重：Redis SSL、Budget、Tool Schema） | 30+ | v1.103.0 + v1.104.0-rc.1 |
| **Unsloth** | — | — | — |

**观察：** LiteLLM 和 Ollama 在发布频率上领先；SGLang 侧重于PR吞吐量而未打标签发布。Unsloth 数据不可用。

---

## 3. 模型支持竞赛

| 架构 / 模型 | SGLang | Ollama | LiteLLM |
|----------------------|--------|--------|---------|
| **Decision / SystemOne 模型** | — | ✅ `/v1/systemone` API | — |
| **T-Head PPU（ZW810）** | ✅ 路线图 [#37519](https://github.com/sgl-project/sglang/issues/37519) | — | — |
| **AMD MI30X（gfx942）** | ✅ ROCm 10 CI + 夜间构建 [#41605](https://github.com/sgl-project/sglang/pull/41605) | — | — |
| **GLM-5.3 Flash FP8/MXFP4（gfx950）** | ✅ Triton稀疏注意力 [#41615](https://github.com/sgl-project/sglang/pull/41615)，PTPC [#33602](https://github.com/sgl-project/sglang/pull/33602) | — | — |
| **NPU（DSA）** | ✅ 解码上下文并行 [#37787](https://github.com/sgl-project/sglang/pull/37787) | — | — |
| **K2 Horizon（MBZUAI IFM）** | — | ✅ 请求中 [#18698](https://github.com/ollama/ollama/issues/18698) | — |
| **MLX（Apple Silicon）** | — | ✅ SystemOne + 缓存复用 | — |
| **llmman（OpenAI兼容）** | — | — | ✅ 新提供商 [#38925](https://github.com/BerriAI/litellm/pull/38925) |
| **DashScope 实时（WS）** | — | — | ✅ WebSocket支持 [#40579](https://github.com/BerriAI/litellm/pull/40579) |
| **OpenAI Live（gpt-live-1）** | — | — | ✅ `/v1/live/sessions` 代理 [#43621](https://github.com/BerriAI/litellm/pull/43621) |

**排行榜：** SGLang在硬件启用上领先（T-Head、AMD、NPU）。Ollama在模型类别扩展上领先（Decision、MLX）。LiteLLM在提供商/路由多样性上领先。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|-------------------|-----------------|----------|
| **KV Cache 分片** | SGLang | 池级别分片用于MTP（[#40929](https://github.com/sgl-project/sglang/pull/40929)）和DSA索引器（[#40925](https://github.com/sgl-project/sglang/pull/40925)） |
| **PD 分离** | SGLang | 面向Agent工作负载优化的路线图（[#21846](https://github.com/sgl-project/sglang/issues/21846)） |
| **Prefill 上下文并行** | SGLang | Allreduce融合，MLA/SWA支持（[#21788](https://github.com/sgl-project/sglang/issues/21788)） |
| **稀疏注意力** | SGLang | HiSparse路线图用于1M+Token（[#28874](https://github.com/sgl-project/sglang/issues/28874)） |
| **MLX 内存优化** | Ollama | 非思考轮次间缓存复用（[#17496](https://github.com/ollama/ollama/pull/17496)），精确VRAM报告（[#14382](https://github.com/ollama/ollert/pull/14382)） |
| **Flash Attention 自动启用** | Ollama | 带CPU回退保护的自动启用（[#13448](https://github.com/ollama/ollama/pull/13448)） |
| **每秒计费** | LiteLLM | 修复Bedrock承诺行的2倍账单问题（[#43614](https://github.com/BerriAI/litert/pull/43614)） |
| **Guardrail 超时** | LiteLLM | 有界执行防止挂起（[#43648](https://github.com/BerriAI/litert/pull/43648)） |

**前沿分析：** SGLang掌控**分布式/长上下文性能**前沿（KV分片、PD分离、稀疏注意力）。Ollama优化**本地/移动端Serving**（MLX、Flash Attention）。LiteLLM聚焦**运营/成本性能**（计费、限流、Guardrails）。

---

## 5. 层级定位

| 层级 | 主要项目 | 描述 |
|-------|-----------------|-------------|
| **Serving 引擎** | **SGLang** | 基于vLLM的高性能LLM Serving，支持分布式KV Cache、上下文并行、投机解码 |
| **本地运行时** | **Ollama** | 桌面/边缘LLM执行（MLX、CUDA、CPU），提供CLI和聊天UI；强调易用性 |
| **训练 / 微调** | **Unsloth** | （数据不可用——历史上定位于此） |
| **网关 / 代理** | **LiteLLM** | 多提供商聚合、成本控制、可观测性、Guardrails、OpenAI兼容代理 |
| **Agent/无服务器** | SGLang（+新兴） | SGLang的PD分离路线图面向Agent工作负载；Ollama的Decision模型面向分类/路由工作流 |

**战略区分：** SGLang = *规模化Serving基础设施*。Ollama = *开发者友好的本地推理*。LiteLLM = *多云LLM运维的基础设施粘合剂*。Unsloth = *训练加速*（根据历史定位推断）。

---

## 6. 趋势信号

### 来自今日活动的行业趋势

1. **PD 分离走向主流**：SGLang的路线图（[#21846](https://github.com/sgl-project/sglang/issues/21846)）面向Agent工作负载分离Prefill和Decode——这对于KV跨轮复用效率低下的长对话至关重要。预计这一模式将在12-18个月内在生产LLM堆栈中成为标准。

2. **硬件多样化加速**：单日内出现三个新硬件目标（T-Head PPU、AMD MI30X、NPU DSA）。推理栈不再CUDA一家独大——基础设施工程师需要为多供应商路线图做好准备。

3. **网关功能与Serving看齐**：LiteLLM的Guardrail超时边界（[#43648](https://github.com/BerriAI/litert/pull/43648)）和每秒计费修复（[#43614](https://github.com/BerriAI/litert/pull/43614)）表明网关逻辑正从简单代理走向生产级策略执行。

4. **决策模型作为一类新类型出现**：Ollama v0.35.0发布了`/v1/systemone`——这是一个面向结构化分类/路由（选项+概率）的专用API，而非自由形式文本。这标志着模型类型专业化的开始，超越了chat/completion。

5. **Budget执行栈中仍属薄弱环节**：LiteLLM和SGLang中出现了三个独立的Budget相关Bug（终端用户Budget持久化、Agent间共享Budget）——表明运营层仍不成熟——企业成本控制需要自定义实现。

### 应用与Agent开发者应关注什么

| 信号 | 影响 |
|----------|-------------|
| **MTP的KV Cache分片**登陆SGLang | 多Token预测模型在生产中变得可行——关注与主流MoE模型的集成 |
| **通过SystemOne API的Decision模型** | 考虑用于分类、路由、分类工作流——用学习到的分类器取代启发式规则 |
| **Guardrails现在有超时边界** | 在LiteLLM代理中启用供应商Guardrails更安全，不会有无限挂起的风险 |
| **Windows GPU稳定性问题**（Ollama RTX 5090、SGLang CUDA） | 在修复发布前避免Windows GPU生产工作负载；Linux是稳定路径 |
| **Redis SSL回归** in LiteLLM v1.93.0 | 如果LiteLLM代理使用Redis缓存，升级前验证SSL配置 |
| **AMD FP8 on gfx950**生产就绪 | 对于成本敏感部署是NVIDIA的可行替代方案；SGLang支持GLM-5.3-Flash FP8 on AMD |

---

*跨项目摘要编于2026-09-29。数据来源：SGLang、Ollama、LiteLLM和Unsloth GitHub活动。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese. I need to:
1. Keep all Markdown structure exactly (headings, tables, lists, etc.)
2. Keep URLs, issue/PR references (#12345), code paths, version numbers as-is
3. Use natural technical Chinese - the register of a Chinese developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me translate while maintaining the structure and technical accuracy:

Key points to translate:
- "Digest" → "SGLang 每日简报"
- Keep issue numbers and URLs exactly as they are
- Translate the content into natural technical Chinese
- Maintain the table structure
- Use Chinese punctuation for Chinese text, English punctuation for code/URLs

Let me go through it section by section:

## 1. Today's Highlights
→ 今日要闻

## 2. Releases & Breaking Changes
→ 版本更新与重大变更

## 3. New Model & Hardware Support
→ 新模型与硬件支持

## 4. Performance & Optimization
→ 性能优化

## 5. Stability & Regressions
→ 稳定性与回归问题

## 6. What This Means for Application Developers
→ 这对应用开发者意味着什么

Now let me translate the content while keeping technical terms, URLs, issue numbers in their original form.</think>

# SGLang 每日简报 — 2026-09-29

## 1. 今日要闻

SGLang 持续深耕分布式服务基础设施，在 MTP 和 DSA indexer 的 KV 缓存分片方面取得新进展（#40929, #40925），同时针对 agentic 工作负载瓶颈推出了新的 PD 分离架构路线图（#21846）。AMD 方面，GLM-5.3 在 gfx950 上的 FP8/MXFP4 支持日趋成熟（#39273），同时报告了多个影响 GLM-5.3 和 MiMo-V2 推理的关键 bug。

---

## 2. 版本更新与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

- **T-Head PPU 支持**：针对 T-Head PPU 设备（ZW810、ZW810E、ZW-M890P 加速卡）的一级支持路线图 issue 已开启 — [#37519](https://github.com/sgl-project/sglang/issues/37519)
- **AMD MI30X ROCm 10**：新增 CI 镜像和 miles ROCm 10 在 MI30X（gfx942）上的夜间测试覆盖 — [#41605](https://github.com/sgl-project/sglang/pull/41605)
- **NPU 上下文并行**：为 DSA 模型添加解码上下文并行支持 — [#37787](https://github.com/sgl-project/sglang/pull/37787)
- **GLM-5.3 on gfx950**：GLM-5.3 在 gfx950 上的 Triton 稀疏注意力内核 — [#41615](https://github.com/sgl-project/sglang/pull/41615)
- **AMD PTPC FP8**：GLM-5.2 在 gfx950 上的可选 PTPC FP8 投影 — [#33602](https://github.com/sgl-project/sglang/pull/33602)

---

## 4. 性能优化

- **MTP 的 KV 缓存分片**：Multi-Token Prediction 的池级 KV 缓存分片 — [#40929](https://github.com/sgl-project/sglang/pull/40929)
- **DSA 的 KV 缓存分片**：DSA indexer KV 分片支持 — [#40925](https://github.com/sgl-project/sglang/pull/40925)
- **Control Plane C**：为分布式服务启用 Control Plane C — [#40102](https://github.com/sgl-project/sglang/pull/40102)
- **Prefill CP 进展**：路线图项目化 — allreduce 融合、注意力 CP != moe_dp 规模、MLA 模型（Dpsi v3/Kimi-K2.5）、SWA 模型均已完成 — [#21788](https://github.com/sgl-project/sglang/issues/21788)
- **DFlash Eager 回退**：超过图批处理限制时回退到 eager DFlash sampler — [#37531](https://github.com/sgl-project/sglang/pull/37531)
- **PTX KDA 修复**：修复无门控下界时的 prefill NaN 和工作空间增长问题 — [#41572](https://github.com/sgl-project/sglang/pull/41572)
- **SGL-Router 发现**：排除无端口 prefill 并重试 bootstrap 发现 — [#41610](https://github.com/sgl-project/sglang/pull/41610)

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 详情 |
|----------|-------|---------|
| **高** | [#41609](https://github.com/sgl-project/sglang/issues/41609) | GLM-5.3-Flash-NVFP4 teacher-forced logprobs 在 SM100 上与 v0.5.20 产生漂移（2026-09-18..09-21 后，疑似 KDA 融合门控问题） |
| **高** | [#40843](https://github.com/sgl-project/sglang/issues/40843) | GLM-5.3 使用 DFLASH 投机解码时出现严重重复和退化循环 |
| **中** | [#41569](https://github.com/sgl-project/sglang/issues/41569) | MiMo-V2 为 packed MXFP8 experts 错误选择了 FP8 MoE runner |
| **中** | [#41372](https://github.com/sgl-project/sglang/issues/41372) | scheduler Req.decoded_text 从未被写入 — 死 stop-string 回退 |
| **中** | [#41539](https://github.com/sgl-project/sglang/issues/41539) | 已终止的 launcher 所在 worker 向 PID 1 发送 SIGQUIT |
| **低** | [#41211](https://github.com/sgl-project/sglang/issues/41211) | MLX return_logprob 在无 --mlx-enable-sampling 时静默返回空 logprobs |
| **低** | [#41466](https://github.com/sgl-project/sglang/issues/41466) | /generate 未做类型检查 — 错误类型字段导致服务器崩溃 |

---

## 6. 这对应用开发者意味着什么

- **Agentic 服务**：新的分布式 KVCache 路线图（#21846）针对 agentic 工作负载 — 预计下季度将推出 KV 存储/传输方面的改进
- **长上下文稀疏**：HiSparse（#28874）持续推进 1M+ token 上下文的 GPU 显存优化
- **GLM-5.3 用户**：注意 NVFP4 上的 logprobs 漂移回归（#41609）和 DFLASH 重复问题（#40843）— 可能影响精度敏感的部署
- **AMD 部署**：MI355X（gfx950）上的 FP8/MXFP4 服务现已启用（#39273）— GLM-5.3-Flash 可投入生产
- **输入验证**：多个 /generate 端点 bug 允许单个畸形请求导致服务器崩溃（#41466, #41467, #41482）— 升级前建议添加客户端验证

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, code references, issue/PR numbers verbatim
4. Keep project names, API identifiers, version tags in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the technical accuracy and the newsletter style.

Key terms to translate appropriately:
- Decision models → 决策模型
- Flash attention → 闪存注意力机制 (or keep as flash attention since it's a technical term)
- Pull requests → PR
- Issues → Issue
- Breaking changes → 重大变更
- Regression → 回归问题
- CUDA → CUDA (keep as is)
- MLX → MLX (keep as is)
- VRAM → 显存
- llama-server → llama-server
- Modelfile → Modelfile
- API → API
- top_p → top_p (keep parameter names as-is)

Let me translate section by section:</think>

# Ollama 速报 — 2026-09-29

## 1. 今日要闻

Ollama v0.35.0 推出**决策模型**，通过全新的 `/v1/systemone` API 实现结构化输出（选项、概率、分数），可用于工单分类、内容审核等场景。该版本还为 MLX 后端添加了 SystemOne 模型支持，并为兼容硬件默认启用闪存注意力机制。多个稳定性问题已修复，包括 RTX 5090 上的关键 CUDA 崩溃以及 `OLLAMA_GPU_OVERHEAD` 被 llama-server 后端忽略的回归问题。

---

## 2. 版本更新与重大变更

| 版本 | 变更 | 说明 |
|------|------|------|
| **v0.35.0** | 通过 `/v1/systemone` 支持决策模型 | 基于 TypeSafe 的 Jev API；返回选项/概率/分数而非文本 |
| — | OpenAI 兼容层在省略 `top_p` 时默认设为 `1.0` | **可能破坏现有功能**：静默覆盖 Modelfile 中的 `PARAMETER top_p` — 见 [Issue #18690](https://github.com/ollama/ollama/issues/18690) |
| — | CLI 在 zh-CN 语言环境下默认使用简体中文 | 可选双语模式；见 [PR #18684](https://github.com/ollama/ollama/pull/18684) |

---

## 3. 新模型与硬件支持

- **决策模型** — 通过 System One API 支持新型"决策"模型（Nimble/Tev 模型）
- **K2 Horizon 模型** — 功能请求已提交，支持 MBZUAI IFM 架构（"k2-horizon"），参数规模 0.9B–36B，含 MoE 变体；见 [Issue #18698](https://github.com/ollama/ollama/issues/18698)
- **GraniteForCausalLM** — MLX 后端支持 IBM Granite 4.1/4.2 模型；见 [PR #17972](https://github.com/ollama/ollama/pull/17972)
- **MLX** — 版本更新以支持 SystemOne；见 [PR #18701](https://github.com/ollama/ollama/pull/18701)

---

## 4. 性能优化

| 领域 | 变更 | PR/Issue |
|------|------|----------|
| **闪存注意力** | 支持时自动启用，不会触发 CPU 后备 | [#13448](https://github.com/ollama/ollama/pull/13448) |
| **MLX 显存报告** | 现在报告实际显存使用（含 KV 缓存、计算图），而非静态估算 | [#14382](https://github.com/ollama/ollama/pull/14382) |
| **MLX 缓存** | 在 MTP 模型非推理轮次中复用缓存 | [#17496](https://github.com/ollama/ollama/pull/17496) |
| **图内存** | 预留时使用最大图内存分配 | [#13244](https://github.com/ollama/ollama/pull/13244) |
| **采样** | 切换到稳定的 llama.cpp 采样接口（减少变更） | [#7368](https://github.com/ollama/ollama/pull/7368) |
| **网页搜索** | 每轮响应限制从 3 次提升至 10 次 | [#18602](https://github.com/ollama/ollama/pull/18602) |
| **拉取重试** | 修复 MLX 拉取卡顿处理；添加看门狗中断与有限重试 | [#18625](https://github.com/ollama/ollama/pull/18625) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复？ |
|----------|------|------|--------|
| **严重** | RTX 5090 上 Cohere MoE 触发 CUDA 非法内存访问（MUL_MAT）— llama-server 崩溃（退出码 0xc0000409） | 待处理 | — |
| **高** | `OLLAMA_GPU_OVERHEAD` 被 llama-server 忽略；未预留显存 | 待处理 | — |
| **高** | `/v1/chat/completions` 强制使用 `top_p: 1.0`，覆盖 Modelfile 设置 | 待处理 | — |
| **高** | `n_threads` 忽略 cgroup CPU 配额 — CPU 受限容器中吞吐量下降约 45 倍 | 待处理 | 见 [Issue #17916](https://github.com/ollama/ollama/issues/17916) |
| **中** | gemma4 在 Windows 上无法处理图片（JPEG/OCR） | 待处理（53 条评论） | — |
| **中** | Windows 11 上 Ollama GUI 在 API 请求时弹出 | 待处理 | — |
| **低** | CLI 补全缺少模型名称补全 | 待处理 | — |
| **低** | Shell 自动补全尚未集成 | 待处理 | — |

---

## 6. 应用开发者须知

1. **决策模型现已可用于生产** — 使用 `/v1/systemone` 进行分类、路由和评分工作流。文档见 [PR #18702](https://github.com/ollama/ollama/pull/18702)。

2. **检查你的 `top_p` 配置** — 若你依赖 Modelfile 中通过 OpenAI 兼容层定义的 `top_p` 值，请确认你的请求显式传递了 `top_p`，或检查你的配置。默认的 `1.0` 可能会改变生成行为。

3. **自动闪存注意力** — 大多数用户将看到吞吐量提升；无需配置，除非你想强制启用/禁用。

4. **MLX 用户受益** — 更准确的显存报告和缓存复用应能改善 Apple Silicon 上的多轮对话体验。

5. **Windows GPU 用户：谨慎使用** — RTX 5090 CUDA 崩溃和 gima4 图片问题表明 Windows 上针对前沿硬件存在活跃的不稳定性。在修复发布前，生产环境 GPU 工作负载建议使用 Linux。

6. **容器部署** — 若在 cgroup 限制环境中运行，请监控线程数；当前行为可能导致严重的吞吐量下降。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this English digest about LiteLLM into Chinese. They want me to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, issue/PR references, version tags, etc. as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while preserving the structure and technical accuracy.

I'll translate:
- "Daily Digest" → "每日动态"
- "Today's Highlights" → "今日要点"
- "Releases & Breaking Changes" → "版本发布与破坏性变更"
- "New Model & Hardware Support" → "新增模型与硬件支持"
- "Performance & Optimization" → "性能与优化"
- "Stability & Regressions" → "稳定性与回归问题"
- "What This Means for Application Developers" → "对应用开发者的意义"

Let me go through the entire document and translate it naturally.</think>

# LiteLLM 每日动态 — 2026-09-29

## 今日要点

LiteLLM 发布 v1.103.0 及 v1.104.0 rc.1 版本，Docker 镜像已通过签名验证。项目在代理功能方面有重要更新：支持通过 WebSocket 代理 OpenAI Live 会话、聊天模型按秒计费功能、可选的 Oso 授权以及 Airia 防护集成。多个预算管理问题仍在处理中，包括项目级预算和终端用户预算持久化缺陷。

---

## 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.104.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.1) | 发布候选版 | Docker 镜像使用 cosign 签名（密钥：commit `0112e53`） |
| [v1.103.0](https://github.com/BerriAI/litellm/releases/tag/v1.103.0) | 稳定版 | Docker 镜像使用 cosign 签名 |

**迁移注意：** 生产环境拉取镜像时需配置 cosign 验证。

---

## 新增模型与硬件支持

- **llmman provider** — 新增 OpenAI 兼容 provider（[#38925](https://github.com/BerriAI/litellm/pull/38925)），API 位于 `/v1`，端口 17434，提供 Ollama 风格端点
- **Fireworks AI 路由** — `fireworks_ai/auto`、`fireworks_ai/auto-instant` 和 `firerouter` 现已正确路由并在列表中显示（[#43641](https://github.com/BerriAI/litellm/pull/43641)）
- **DashScope 实时** — DashScope 实时模型新增 WebSocket 支持（[#40579](https://github.com/BerriAI/litellm/pull/40579)）
- **Bedrock Mantle** — 为 Claude Opus 5.5 和 Sonnet 5.5 从 Bedrock runtime 行派生成本映射条目（[#43647](https://github.com/BerriAI/litellm/pull/43647)、[#43654](https://github.com/BerriAI/litellm/pull/43654)）

---

## 性能与优化

| PR | 变更 | 影响 |
|----|--------|--------|
| [#43614](https://github.com/BerriAI/litellm/pull/43614) | 为聊天模型新增 `cost_per_second` 按秒计费 | 修复 Bedrock 预留行计费翻倍问题（之前 input 和 output 费率被相加） |
| [#43656](https://github.com/BerriAI/litellm/pull/43656) | 优化哈希密钥名查询 | 通过仅探测每个密钥的最旧/最新命名行，将使用 API 超时从 >5s 降至可接受范围 |
| [#43632](https://github.com/BerriAI/litellm/pull/43632) | 限制批量文件记录数、每日上传数、单次下载大小 | 防止资源耗尽：新增 `max_batch_file_records`、`max_batch_files_per_day`、`max_batch_file_download_size` 配置项 |

---

## 稳定性与回归问题

### 严重
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#34614](https://github.com/BerriAI/litellm/issues/34614) | Redis 缓存在 v1.93.0 中因 `ssl_check_hostname` 报 TypeError 错误 | 待处理 — 6 条评论 |
| [#43190](https://github.com/BerriAI/litellm/issues/43190) | `max_iterations` 和 `max_budget_per_session` 在同一 trace 的所有 agent 间共享（仅按 session_id 区分） | 待处理 — 3 条评论 |
| [#43157](https://github.com/BerriAI/litellm/issues/43157) | `sanitize_input_schema_for_anthropic` 丢弃根级 `anyOf`/`$ref`，导致 union 工具失效 | 待处理 — 8 条评论 |

### 高优先级
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#25386](https://github.com/BerriAI/litellm/issues/25386) | `max_end_user_budget_id` 未持久化到数据库 — 预算重置任务跳过自动创建的用户 | 待处理 — 6 条评论 |
| [#43155](https://github.com/BerriAI/litellm/issues/43155) | `_handle_invalid_parallel_tool_calls` off-by-one 偏移导致残留 `multi_tool_use.parallel` 条目 | 待处理 — 2 条评论 |
| [#43156](https://github.com/BerriAI/litellm/issues/43156) | Gemini 工具翻译将空 `arguments: ""` 映射为 `args: {"type": "object"}` 而非 `{}` | 待处理 — 2 条评论 |

### 中等优先级（已修复的值得关注问题）
- [#37631](https://github.com/BerriAI/litellm/issues/37631) — `azure/gpt-5.6*` 缺少 `cache_creation_input_token_cost`（已关闭）
- [#30135](https://github.com/BerriAI/litellm/issues/30135) — 分层计费字段（`*_above_200k_tokens`）在成本计算中被忽略（已关闭）
- [#31606](https://github.com/BerriAI/litellm/issues/31606) — 支持按时段/峰谷定价（已关闭）

---

## 对应用开发者的意义

1. **代理用户**：预算管理存在边缘情况 — `max_end_user_budget_id` 不会在重启后保留，项目级预算仍是功能请求（#28750）。如需严格控制，请自行实现预算强制逻辑。

2. **防护用户**：所有防护检查现已在 `litellm_params.timeout` 时间内绑定（[#43648](https://github.com/BerriAI/litellm/pull/43648)）。防护服务提供商响应超时时将触发 408 错误，而非无限阻塞。

3. **实时/WebSocket 用户**：OpenAI Live 模型（`gpt-live-1`）现可通过 `/v1/live/sessions`、`/live/sessions` 和 `/openai/v1/live/sessions` 代理（[#43621](https://github.com/BerriAI/litellm/pull/43621)）。

4. **MCP 用户**：预调用 hook 现可接收工具描述和输入 schema（[#41162](https://github.com/BerriAI/litellm/pull/41162)），使内容防护能够在执行前检查工具定义。

5. **批量 API 用户**：新增限制防止批量上传失控 — 超过 `max_batch_file_records` 或 `max_batch_files_per_day` 时将返回 413 错误。

6. **可观测性**：管理 UI 新增模型排行榜页面（[#43649](https://github.com/BerriAI/litellm/pull/43649)），用于网关使用分析。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*