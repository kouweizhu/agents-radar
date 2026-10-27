# AI 基础设施日报 2026-10-27

> 生成时间: 2026-10-27 01:35 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report into Chinese (Simplified Chinese, as indicated by the system context mentioning Chinese users and "简体中文" in the rules). I need to translate the report while:

1. Keeping all Markdown structure (headings, tables, lists, bold, horizontal rules, emoji)
2. Keeping all technical identifiers, project names, version numbers, issue numbers, URLs as-is
3. Using natural technical Chinese register
4. Outputting ONLY the translation with no preamble or explanation
5. No markdown fences around the entire output

Let me translate:</think>

# 跨项目对比报告 — 2026-10-27

## 1. 生态概览

今日活动反映了推理栈正沿着两条清晰的技术轴线成熟：**生产级Serving**（vLLM、SGLang、LiteLLM）追求更好的多租户隔离、分布式服务和硬件利用率，而**本地/边缘运行时**（llama.cpp、Ollama、Unsloth）则专注量化、内核跨后端移植和开发者体验。交汇点很明确——每个项目都在Blackwell、AMD RDNA3、Apple Silicon和新兴NPU上最大化吞吐量/成本比。

---

## 2. 活跃度对比

| 项目 | Issue（开放） | PR（开放） | 发布（24h） |
|---------|---------------|------------|----------------|
| **vLLM** | 98 | 500+ | 无 |
| **SGLang** | 465 | 600+ | 无 |
| **llama.cpp** | ~10,900（总计） | ~200 | 10 次提交 |
| **Ollama** | 21 | 19 | v0.40.12 |
| **LiteLLM** | ~50 | ~15 | 无 |
| **Unsloth** | 31 | 14 | v0.1.911-beta |

**要点**：vLLM和SGLang在开发活跃度上领先。llama.cpp的提交频率（10次）显示内核层面的工作仍在持续。Ollama和Unsloth保持较小但稳定的发布节奏。

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1-Flash** | ✅ | ✅（优化中） | ✅（转换） | ❌ | ❌ |
| **GLM-5.3-Flash** | ✅（KDA融合） | ✅（进行中） | ❌ | ❌ | ❌ |
| **MiniMax-M3.1-Flash** | ❌ | ❌ | ❌ | ❌ | ✅ |
| **GigaChat 3.5** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Decision 3.0** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Laguna MoE** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Qwen3 YaRN** | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Apple Silicon DFlash2** | ❌ | ❌ | ❌ | ✅ | ❌ |
| **Cohere Transcribe** | ❌ | ❌ | ❌ | ❌ | ✅ |

**谁领先**：SGLang在多模态/vision和Blackwell优化上领先。vLLM在结构化输出和分布式服务功能上领先。llama.cpp在量化广度（IQ4、MXFP4、NVFP4）和跨后端覆盖上领先。Ollama在Apple Silicon MLX上领先。Unsloth在微调工作流集成上领先。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 |
|-------------------|-----------------|
| **KV Cache 布局 / 分块** | vLLM（DiffKV预填充分块 3×），SGLang（NPU HiCache） |
| **权重缓存 / 卸载** | SGLang（权重缓存守护进程：306s→<1s加载），Unsloth（原生缓存写入） |
| **量化** | llama.cpp（IQ4、MXFP4、NVFP4），Unsloth（W8A8 Linear），vLLM（NVFP4修复） |
| **MoE / 专家并行** | SGLang（NCCL EP、串行共享专家），llama.cpp（Laguna amax重缩放） |
| **投机解码** | SGLang（DFlash2分块draft），Ollama（DFlash2），vLLM（spec + 结构化输出 RFC） |
| **分布式服务** | vLLM（流水线并行插件），LiteLLM（速率限制优化） |
| **内核调优** | llama.cpp（Hexagon、Vulkan RMS、SYCL），SGLang（AMD AITER FlyDSL），vLLM（Triton top-k） |

**前沿聚焦**：当下最高影响力的优化是**权重卸载**（SGLang守护进程将冷启动缩短300倍）和**投机解码**（SGLang/Ollama/Unsloth上的DFlash2变体）。KV-cache分块在Blackwell上实现了3倍收益。量化工作正日益针对特定硬件进行专业化。

---

## 5. 层级定位

| 项目 | 层级 | 主要角色 |
|---------|-------|--------------|
| **vLLM** | Serving 引擎 | 生产级推理服务器，支持P/D分解、流水线并行、结构化输出 |
| **SGLang** | Serving 引擎 + 运行时 | LLM/Diffusion统一前端、张量并行推理、Agent工具调用 |
| **llama.cpp** | 本地运行时 | 独立GGUF推理、最大硬件移植性（CPU/GPU/NPU/移动端） |
| **Ollama** | 本地运行时 + 开发体验 | 开发者友好的本地模型部署、单命令服务 |
| **LiteLLM** | 网关 / 抽象层 | 多提供商LLM代理、速率限制、成本追踪、统一API |
| **Unsloth** | 训练 / 微调 | GPU加速微调（带量化）、训练到推理流水线 |

**澄清**：vLLM和SGLang在Serving层竞争。llama.cpp、Ollama和Unsloth占据本地运行时空间但取舍不同：llama.cpp = 移植性，Ollama = 简单性，Unsloth = 训练。LiteLLM作为网关层位于所有项目之上。

---

## 6. 趋势信号

### Agent/应用开发者应关注

| 趋势 | 证据 | 影响 |
|-------|----------|--------------|
| **Blackwell（SM120）优化竞赛** | vLLM ViT CUDA图RFC；SGLang DeepSeek-V4 on SM120；llama.cpp head sizes 40/72 CUDA fattn | Blackwell上生产级多模态视觉模型接近就绪；预计2027年Q1吞吐量提升2–3倍 |
| **投机解码走向成熟** | SGLang/Ollama/Unsloth上的DFlash2；vLLM spec + 结构化输出RFC | Draft-target配对正成为标准；严格延迟SLA的Agent应采用 |
| **P/D分解遭遇关键Bug** | vLLM跨请求污染（#61160）；LiteLLM团队成员竞态条件 | 生产多租户推理部署应审计P/D设置；修复将在2–4周内发布 |
| **NPU后端崛起** | SGLang NPU HiCache（#46604）；Ollama HarmonyOS请求；llama.cpp XDNA请求 | NPU正成为本地推理的可行选择；预计2027年H1带来更广泛支持 |
| **量化碎片化** | 多种每VRAM格式Bug（NVFP4、MXFP4、IQ4、RDNA上的AWQ） | 别假设量化能普遍工作；在生产前于目标硬件上测试 |
| **网关抽象压力** | LiteLLM消费日志模式守卫、速率限制Redis优化 | LiteLLM正成为标准LLM代理层；基础设施团队应评估多提供商部署 |

### 总结

推理生态系统正围绕**Blackwell优化**和**投机解码**两大最高杠杆改进向2027年演进。如果你正在构建Agent，优先采用投机解码（SGLang或Ollama）以应对延迟敏感的业务流。如果你运营多租户推理，在P/D分解的污染Bug修复之前暂缓部署。对于本地部署，llama.cpp仍是最具移植性的选择，但Ollama/Unsloth为优先考虑迭代速度而非后端灵活性的团队提供了更好的开发者体验。

---

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical accuracy.

Key terms to translate appropriately:
- "Daily Digest" → "每日简报"
- "Full CUDA Graph" → "完整 CUDA 图"
- "Vision Transformers (ViT)" → "视觉 Transformer (ViT)"
- "prefix caching" → "前缀缓存"
- "PD disaggregation" → "PD 分离"
- "speculative decoding" → "投机解码"
- "structured output" → "结构化输出"
- "KV cache" → "KV 缓存" (standard term)
- "disaggregation" → "分离"
- "pipeline parallelism" → "流水线并行"
- "model serving" → "模型服务"
- "throughput" → "吞吐量"
- "decode" → "解码"
- "prefill" → "预填充"
- "quantization" → "量化"

Let me translate section by section:</think>

# vLLM 每日简报 — 2026-10-27

## 今日要闻

vLLM 项目正在推进多模态推理能力，一个新的 RFC 提议为视觉 Transformer (ViT) 提供完整的 CUDA 图支持，这对于 Qwen3-VL 和 Kimi K2.5 等模型的生产部署至关重要。同时，Q4 2026 路线图已发布，概述了 SIG 在量化、KV 缓存管理和分布式服务方面的优先事项。一项重要的 PR 引入了流水线并行的插件架构，支持自定义 PP 组协调。

---

## 版本发布与重大变更

- **近期无新版本**发布。

---

## 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **Decision 3.0 (d3-turbo)** | 新增前缀双向注意力支持，用于 vllm-sr/d3-turbo 模型 | [#62584](https://github.com/vllm-project/vllm/pull/62584) |
| **Qwen3.8-Flash-Next CPU 后端** | 支持 MRV2 的 x86 原生 CPU 后端，用于 Qwen4Exp 模型 | [#57294](https://github.com/vllm-project/vllm/pull/57294) |
| **语音活动检测 (VAD)** | 集成 ASR VAD 以减少长音频段的幻听问题 | [#46126](https://github.com/vllm-project/vllm/pull/46126) |
| **GLM-5.3 KDA 优化** | 将 q\|k\|v 卷积融合为单个 conv1d 参数，用于 GLM-5.3 | [#60991](https://github.com/vllm-project/vllm/pull/60991) |

---

## 性能与优化

| 类别 | 详情 | 链接 |
|----------|---------|------|
| **DiffKV 预填充分块** | BLOCK_M=128 + KV tile 64 在 200K 上下文块上实现 3.0x 加速 (SM80) | [#61095](https://github.com/vllm-project/vllm/issues/61095) |
| **Triton top-k 内核** | 修复导致回退到全词表搜索的异常值 gather 遗漏问题 | [#61998](https://github.com/vllm-project/vllm/issues/61998) |
| **KV 传输校验和** | 连接器无关的校验和，用于 P/D 分离的数据完整性 | [#62211](https://github.com/vllm-project/vllm/pull/62211) |
| **Rust 前端优化** | 跳过无文本输出的 gRPC 请求的解码工作 | [#63789](https://github.com/vllm-project/vllm/pull/63789) |
| **MoE 显式行布局** | 支持路由专家捕获的显式行布局 | [#62441](https://github.com/vllm-project/vllm/pull/62441) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **跨请求上下文污染** PD 分离模式下启用自动前缀缓存时，响应包含其他请求的内容 | 待解决 — [#61160](https://github.com/vllm-project/vllm/issues/61160) |
| **高** | **DeepSeek-V4.1-Flash 在 SM120 上**：使用 `--enforce-eager` 时解码吞吐量极低；CUDA 图不可用 | 待解决 — [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **中** | **ROCm AWQ Bug**：AutoAWQ 检查点从未使用 RDNA W4A16 内核；AWQ 在 gfx1151 上解码比 BF16 慢 2.5x | 待解决 — [#63455](https://github.com/vllm-project/vllm/issues/63455) |
| **中** | **ROCm 注意力 Bug**：RDNA 上 KV 块大小 ≠16 且 MHA 头大小为 192/256 时注意力输出错误 | 待解决 — [#62697](https://github.com/vllm-project/vllm/issues/62697) |
| **中** | **logprobs IndexError**：top_logprobs 短于 token_ids 导致 500 错误 | 待解决 — [#63751](https://github.com/vllm-project/vllm/issues/63751) |
| **中** | **NVFP4 垃圾输出**：torch.compile 下当每 rank K 未 32 对齐时 (TP8 on SM120) | 待解决 — [#48898](https://github.com/vllm-project/vllm/issues/48898) |
| **低** | **P2P KV 卸载** 在对端故障时未快速失败 | 待解决 — [#63602](https://github.com/vllm-project/vllm/issues/63602) |

---

## 这对应用开发者的意义

1. **多模态生产就绪**：ViT CUDA 图 RFC (#38175) 解决了生产环境中视觉语言模型的关键瓶颈。如果被采用，Qwen3-VL、GLM-V 和 Kimi K2.5 部署的吞吐量将显著提升。

2. **流水线并行可扩展性**：新的 `--pp-group-cls` 和 `--pipeline-stage-per-instance` 标志 (#63898, #63897) 支持自定义传输层——适用于专业化的分布式部署或混合 GPU/CPU 推理场景。

3. **结构化输出 + 投机解码**：一项新 RFC (#62818) 解决了将结构化输出与投机解码结合时保持输出分布的问题——对于需要保证 JSON/语法有效响应的加速推理的代理系统很重要。

4. **AMD ROCm 用户**：多个 ROCm 问题仍未解决，特别是 RDNA 上的 AWQ 量化 (#63455) 和注意力正确性 (#62697)。如果在 AMD GPU 上部署，目前考虑使用 BF16 或 FP8。

5. **跨请求污染**：PD 分离模式下前缀缓存 bug (#61160) 严重——如果使用 NIXL 预填充/解码分离配合自动前缀缓存，在修复前请通过 `--no-enable-prefix-caching` 禁用它。

6. **思考 token 预算**：Responses API 现已正确支持 `thinking_token_budget` (#63896)，可在聊天补全中明确控制推理 token 限制。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest to Chinese while preserving the exact Markdown structure and following all the rules provided. Let me translate this carefully.

Key points:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references as-is
4. Don't translate technical terms, project names, issue/PR references
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

Title: # SGLang Digest — 2026-10-27

Today's Highlights:
- Translate naturally while keeping technical terms
- SGLang在Blackwell（SM120）优化和NPU后端工作方面展现出强劲势头，多项PR推进DeepSeek V4.1和GLM-5.3支持。权重缓存守护进程（第一阶段）已上线，将Qwen3-235B FP8上的权重加载时间从~306-327s缩短到<1s。不过，报告了一个关键的投机解码bug，影响非贪婪采样时的pip安装包，此外还发现了DeepSeek-V4在SM120上的性能差距。

Releases & Breaking Changes:
- 过去24小时内无新版本发布。

New Model & Hardware Support:
- Translate table content naturally while keeping URLs and references

Performance & Optimization:
- Translate descriptions naturally

Stability & Regressions:
- Translate severity levels (Critical, High, Medium, Low) to Chinese

What This Means for Application Developers:
- Translate the 5 points naturally

Let me produce the final output now.</think>

# SGLang 速报 — 2026-10-27

## 今日要闻

SGLang 在 Blackwell（SM120）优化和 NPU 后端工作方面展现出强劲势头，多项 PR 推进 DeepSeek V4.1 和 GLM-5.3 支持。权重缓存守护进程（第一阶段）已上线，将 Qwen3-235B FP8 上的权重加载时间从 ~306–327s 缩短到 <1s。不过，报告了一个关键的投机解码 bug，影响非贪婪采样时的 pip 安装包，此外还发现了 DeepSeek-V4 在 SM120 上的性能差距。

---

## 版本发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **DeepSeek V4.1** | 优化进行中：mHC SP + engram 融合，fused Q-norm ROPE | [#42170](https://github.com/sgl-project/sglang/issues/42170) |
| **GLM-5.3-Flash on SM120** | 需跟踪修复：2× RTX PRO 6000（TP2，W4A16 路由 expert，FP8 KV，视觉，原生 MTP）| [#37813](https://github.com/sgl-project/sglang/issues/37813) |
| **NPU HiCache** | MLA 和 DeepSeek V4 的层级优先分离主机传输 | [#46604](https://github.com/sgl-project/sglang/pull/46604) |
| **Apple Silicon** | Q2 2026 路线图进行中 — 欢迎贡献 | [#19137](https://github.com/sgl-project/sglang/issues/19137) |
| **NPU 路线图 2026 下半年** | 特性兼容性与可靠性：P/D 拆解、并行化、投机解码、分层缓存、负载均衡 | [#25598](https://github.com/sgl-project/sglang/issues/25598) |
| **SGLang-Diffusion Q4** | MiniMax-H3 压力测试；无损（TP/Ulysses 重叠、fuse kernel）和有损"high"层级针对 Blackwell | [#43313](https://github.com/sgl-project/sglang/issues/43313) |

---

## 性能优化

| 优化项 | 描述 | 参考 |
|--------------|-------------|-----------|
| **权重缓存守护进程** | 每 rank 守护进程通过 CUDA IPC 持有后量化权重；Qwen3-235B FP8 加载时间 306–327s → <1s | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **AMD Qwen3.8 QSA decode** | AITER fused FlyDSL 稀疏解码，gfx950 | [#45196](https://github.com/sgl-project/sglang/pull/45196) |
| **AMD Qwen3.8 hyper-connections** | AITER FlyDSL hc_mix 针对 gfx950 上的 Qwen3.8 | [#41880](https://github.com/sgl-project/sglang/pull/41880) |
| **Muse Spark FP32 residuals** | FP32 residual 的 fused RMSNorm | [#46622](https://github.com/sgl-project/sglang/pull/46622) |
| **Async NaN 验证** | 融合为单次只读 Triton kernel | [#43720](https://github.com/sgl-project/sglang/pull/43720) |
| **NCCL EP MoE** | 串行共享 expert，FP8 计算支持，单计算流 TBO 解码 | [#38888](https://github.com/sgl-project/sglang/pull/38888), [#38886](https://github.com/sgl-project/sglang/pull/38886), [#39546](https://github.com/sgl-project/sglang/pull/39546) |
| **Diffusion 量化** | 修复 11 个正确性 bug（MXFP4、FP8、KitchenW4A4、Nunchaku）| [#46319](https://github.com/sgl-project/sglang/pull/46319) |

*性能差距：* DeepSeek-V4 dsv4 prefill 在 SM120（4× RTX PRO 6000，TP=4）上达到约 2–7K tok/s vs 报道的约 12.5K（vLLm/marlin）— 调查进行中（[#33422](https://github.com/sgl-project/sglang/issues/33422)）

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **严重** | 投机解码在首次非贪婪请求时崩溃 — FlashInfer verify-sampling op JIT 失败（bundled CCCL vs pip cu13 toolkit）；SIGKILL 进程树 | Open — [#43412](https://github.com/sgl-project/sglang/issues/43412) |
| **高** | FlashInfer autotune 缓存在 MoE EP>1 时每次启动都被丢弃 — 每次冷启动从零开始调优 | Open — [#40320](https://github.com/sgl-project/sglang/issues/40320) |
| **高** | DFlash2 并发请求时状态损坏 | Closed — [#36548](https://github.com/sgl-project/sglang/issues/36548) |
| **中** | DeepSeek-V4-Flash FP8 在 MI300X（gfx942）：输出随上下文长度退化 — <100 token 正常，约 300 时开始乱码，NIAH 0/3 | Closed — [#36390](https://github.com/sgl-project/sglang/issues/36390) |
| **中** | DSpark draft query width 在 FA3/FA4 上 `sample_from_anchor=False` 时不正确 | Open — [#46476](https://github.com/sgl-project/sglang/issues/46476) |
| **中** | Kimi-K3 在 SM90 上：`flashinfer_mxfp4` 静默计算 GPT-OSS SwiGLU 而非 SiTU | Open — [#45755](https://github.com/sgl-project/sglang/issues/45755) |
| **中** | Prefill 可中断 CUDA graph 跨 bucket 重用弱引用 break 输入 → 贪婪输出错误 | Open — [#37606](https://github.com/sgl-project/sglang/issues/37606) |
| **低** | Qwen3.8 DSpark 强制拒绝非无损：累积 GDN 状态漂移 | Closed — [#35150](https://github.com/sgl-project/sglang/issues/35150) |

---

## 对应用开发者的意义

1. **Blackwell（SM120）用户：** DeepSeek-V4 吞吐量低于 vLLM 基准 — 需监控回归；GLM-5.3-Flash 支持正在推进，但生产使用前仍需修复。

2. **投机解码用户：** 在 `temperature > 0` 且无 CUDA toolkit 的系统上避免使用 pip 安装的 SGLang — bundled CCCL 导致 JIT 失败。使用系统 CUDA 安装或等待修复。

3. **MoE + Expert 并行：** 若使用 EP > 1，由于每次启动都会丢弃 autotune 缓存并从零开始调优，冷启动时间较长 — 修复在进行中。

4. **NPU 路线图：** 2026 下半年聚焦生产级 NPU 支持 — 拆解、并行化策略和投机解码是重点。Apple Silicon 支持也将于 2026 年 Q2 到来。

5. **Diffusion 模型：** Q4 路线图以 MiniMax-H3 为压力测试目标；如果你部署图像生成，无损优化和 Blackwell 配方即将推出。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest about llama.cpp into Chinese, following specific rules about preservation and natural technical Chinese register.

Let me translate while:
1. Keeping all formatting (headings, tables, lists, etc.)
2. Keeping URLs, code references, issue numbers as-is
3. Using natural technical Chinese register
4. Preserving the meaning accurately</think>

# llama.cpp 动态 — 2026-10-27

## 1. 今日要闻

过去 24 小时内，项目在 Hexagon、Vulkan 和 SYCL 后端上完成了大量优化工作，同时新增了 Laguna MoE 模型的 Metal 溢出修复。项目持续活跃于多后端开发，聚焦量化性能和内核效率。

---

## 2. 发布与破坏性变更

| Commit | 变更 | 说明 |
|--------|------|------|
| [b11908](https://github.com/ggml-org/llama.cpp/commit/b11908) | `llama : 将 no_alloc 移出 llama_hparams` | 内部重构，可能影响自定义模型加载器 |
| [b11907](https://github.com/ggml-org/llama.cpp/commit/b11907) | `models : 用 output 结构体替换 ggml_tensor** 出参` | 破坏性变更，使用超连接/DSA 模式的图构建器需适配 |
| [b11900](https://github.com/ggml-org/llama.cpp/commit/b11900) | `llama : 移除 memory 实例中的废弃 n_pad` | 清理未使用的填充参数 |

---

## 3. 新模型与硬件支持

- **Laguna MoE** — 新增 LLM_ARCH_LAGUNA 支持 MoE amax 重缩放，修复 Metal 溢出问题 ([#31147](https://github.com/ggml-org/llama.cpp/pull/31147)，commit b11912)
- **GigaChat 3.5** — 432B 总参数 / 28B 活跃 MoE 模型（DeepSeek-V3 风格骨干）支持开发中 ([#25342](https://github.com/ggml-org/llama.cpp/pull/25342))
- **DeepSeek-V4.1-Flash** — 转换支持已合并 ([#31086](https://github.com/ggml-org/llama.cpp/pull/31086)，commit b11906)
- **Hexagon 后端** — 新增 GGML_HEXAGON_VTCM_SIZE 配置参数用于 VTCM 内存管理 ([#31221](https://github.com/ggml-org/llama.cpp/pull/31221))
- **Intel XDNA** — 功能需求跟踪 ([#21725](https://github.com/ggml-org/llama.cpp/issues/21725)，35 条评论)

---

## 4. 性能优化

### 已合并
| 领域 | 变更 | 影响 |
|------|------|------|
| **Hexagon MUL_MAT_ID** | 向量化行清零 + 融合 MM_ID_NX 跳过支持 | 行跳过优化 ([#31169](https://github.com/ggml-org/llama.cpp/pull/31169)，commit b11909) |
| **Vulkan RMS Norm** | 子组归约优化 | AMD 上 FP16/RMS 性能提升 ([#29882](https://github.com/ggml-org/llama.cpp/pull/29882)，commit b11905) |
| **CPU concat** | 单行内核重写，支持所有类型 | 密集 + 量化路径统一 ([#31179](https://github.com/ggml-org/llama.cpp/pull/31179)，commit b11906) |
| **SYCL tensor** | 快速 `ggml_sycl_comm_exchange()` | Intel Arc Pro B70 提示词评估 +19% ([#30956](https://github.com/ggml-org/llama.cpp/pull/30956)) |
| **SYCL 内存** | 重新排序临时内存限制为 32 MiB | 内存效率 ([#31062](https://github.com/ggml-org/llama.cpp/pull/31062)，commit b11901) |
| **IQ4 量化** | 预计算中点 | IQ4_NL / IQ4_XS 创建加速 ([#31201](https://github.com/ggml-org/llama.cpp/pull/31201)) |

### 进行中
- **Vulkan Q4_0 KV 缓存** — 闪存注意力去量化+转置快速路径 ([#30738](https://github.com/ggml-org/llama.cpp/pull/30738))
- **CM1 attention** — 行主序 P 存储 + V 块片段复用 ([#31197](https://github.com/ggml-org/llama.cpp/pull/31197))
- **CUDA fattn** — 头大小 40 和 72 支持（此前回退到 tile 内核）([#30285](https://github.com/ggml-org/llama.cpp/pull/30285))
- **Intel FA prefill** — 预填充阶段新 Vulkan 内核 ([#29357](https://github.com/ggml-org/llama.cpp/pull/29357))

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 说明 |
|------|----------|------|------|
| [#10982](https://github.com/ggml-org/llama.cpp/issues/10982) — Vulkan 与 Metal 在 Apple Silicon 上的性能差距 | **高** | 进行中 | 54 条评论；Asahi Linux 驱动开发者在排查 |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) — Vulkan/RDNA3 上 b10780 后提示词处理速度严重下降 | **高** | 进行中 | 20 条评论；严重回归 |
| [#29183](https://github.com/ggml-org/llama.cpp/issues/29183) — SYCL DeltaNet 长提示词 token 混乱 | **中** | 进行中 | Qwen3.6/3.8、Nemotron 受影响 |
| [#28778](https://github.com/ggml-org/llama.cpp/issues/28778) — 双 Arc Pro B70 SYCL DFlash2 触发 GPU TDR | **中** | 进行中 | 驱动重置，非崩溃 |
| [#28495](https://github.com/ggml-org/llama.cpp/issues/28495) — 统一 KV 导致 `-np 2` 时提示词吞吐量下降 42-54% | **中** | 进行中 | CUDA/HIP 闪存注意力掩码限制 |
| [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) — 双 Intel B70 SYCL `-sm tensor` 内存泄漏 | **中** | 已关闭 | — |
| [#31189](https://github.com/ggml-org/llama.cpp/issues/31189) — qwen4exp 合并张量断言 | **低** | 进行中 | AMD Ryzen AI Max+ 395 Vulkan |

---

## 6. 应用开发者需要关注的事项

1. **Intel Arc SYCL 用户** — [#30956](https://github.com/ggml-org/llama.cpp/pull/30956) 的提示词评估 +19% 提速对多 GPU 张量并行部署意义重大，请更新到最新构建版本。

2. **Metal 上的 Laguna MoE 用户** — 如果运行 Mistral4/Mellum/Flint 风格 MoE 模型，b11912 中的 amx 重缩放修复可解决 prefetch 批次 ≥32 tokens 时的溢出问题。

3. **AMD Vulkan 用户** — RMS norm 子组优化应改善 RDNA2/3 上的解码阶段延迟，请在旧驱动上留意回归。

4. **WebUI / Server 运维者** — 正在添加模型管理 API（[#21779](https://github.com/ggml-org/llama.cpp/issues/21779)），MCP 服务器持久化功能也在跟踪中（[#25349](https://github.com/ggml-org/llama.cpp/issues/25349)）。

5. **关注事项** — Metal 与 Vulkan 性能差距问题（[#10982](https://github.com/ggml-org/llama.cpp/issues/10982））正在积极排查。如果你在 Asahi Linux Vulkan 上运行，预计后续版本会有改进。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content while keeping the structure
2. Keep technical terms, code, URLs, issue numbers, version numbers in their original form
3. Preserve all markdown formatting (headings, tables, lists, etc.)
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate section by section, keeping everything in place.

Key things to remember:
- Keep #numbers, URLs, version tags as-is
- Keep markdown structure
- Translate but keep technical register
- No preamble or explanation
- No markdown fences around the output</think>

# Ollama 速报 — 2026-10-27

## 1. 今日要闻

Ollama 团队发布了 **v0.40.12**，带来了重要的 MLX 改进，包括为 Apple Silicon 加速推理新增 DFlash2 支持，以及针对 Gemma、Flint 和 Laguna 模型的提示词处理优化。社区贡献持续扩展启动集成功能，有两个活跃的 PR 正在修复 OpenCode v2 兼容性（#19310、#19298）。同时，在 Vulkan/AMD 后端和 Windows 环境方面报告了多个值得关注的缺陷，包括提示词缓存启用后 ~30× 的吞吐量骤降。

---

## 2. 版本发布与重大变更

| 版本 | 变更内容 | 链接 |
|------|----------|------|
| **v0.40.12** | MLX：新增 DFlash2 支持用于 Apple Silicon；为紧凑型 Gemma 4 视觉模型保留小图像细节；MLX/MLX-C 版本升级，为 gemma/flint/laguna 带来提示词加速 | [Release](https://github.com/ollama/ollama/pull/19291) |

*本期版本未发现破坏性 API 变更。*

---

## 3. 新模型与硬件支持

| 类别 | 详情 |
|------|------|
| **MLX (Apple Silicon)** | 新增 DFlash2 块级草稿扩展，支持动态卷积和候选选择器，用于改进推测解码 |
| **视觉模型** | Gemma 4 紧凑型视觉模型现在可保留小图像细节 |
| **RoPE 缩放** | 为 MLX 后端中的 Qwen3 和 Qwen3.5 添加了 YaRN 缩放支持（#19231）|

**已记录的功能请求：**
- TTS phonon 模型支持韩语（#19295）
- 原生 HarmonyOS PC 支持与 CPU 推理（#19294）
- 为 Intel Mac 用户提供 macOS 12/13 社区构建版支持（#19308）

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **MLX 提示词处理** | 版本升级，利用新的 window_size 特性 | gemma/flint/laguna 模型提速 |
| **DFlash2** | 块级局部动态卷积 + 候选选择器 | Apple Silicon 上推测解码效果提升 |
| **Qwen3 YaRN** | 遵循显式 RoPE 缩放元数据以支持更长上下文 | 支持更长上下文窗口 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | **#19201** — AMD RADV (RX 6600 XT) 启用提示词缓存后，首次请求后出现约 30× 生成减速。可复现的 29.7× 吞吐量下降。 | 待处理 |
| **高** | **#19060** — AMD Radeon Pro 5700 XT (16 GB) 通过 Vulkan 运行 GPT-OSS 20B 返回空响应；CPU 推理正常 | 待处理，需更多信息 |
| **高** | **#19293** — macOS 上长回复流式输出后 `/api/chat` 间歇性返回 500，报错 "broken pipe" | 待处理 |
| **高** | **#19139** — Windows 上大提示词（约 15 秒后）`/api/chat` 连接重置（Qwen3.8-27B）| 待处理 |
| **中** | **#19278** — macOS Metal 崩溃，XML 文件分析时报错（METAL command buffer execution failed）| 待处理 |
| **中** | **#17958** — AMD Strix Halo (Radeon 8060S 集显) 加载 ≥2 个模型后锁定在最高频率（约 25W），无法进入节能状态 | 待处理 |
| **中** | **#10128** — 大上下文窗口（262k ctx）的 VRAM 估算不准确 | 待处理 |
| **低** | **#19313** — shieldgemma 模板在提示词分类时措辞不当 | 待处理 |
| **低** | **#19303 / #19296** — `ollama launch opencode` 在 OpenCode v2 上启动失败（flag 解析 + 配置结构）| 修复中：#19310、#19298 |

---

## 6. 这对应用开发者意味着什么

1. **Apple Silicon 用户** — v0.40.12 配合 DFlash2 应能在 M 系列 Mac 上带来显著推理提速，特别是使用推测解码的工作流程。

2. **Windows + 大提示词** — 如果你在大上下文窗口场景下遇到 `/api/chat` 超时，请注意 #19139 中记录的回归问题；考虑拆分请求或实现带退避的重试逻辑。

3. **AMD GPU 用户** — 在 #19201 修复前，请避免在 RADV (AMD Vulkan) 上使用提示词缓存；约 30× 的减速会使缓存适得其反。

4. **OpenCode 集成** — 如果你依赖 `ollama launch`，v2 兼容性修复将在下一个补丁版本中推送；更新后请测试你的工作流程。

5. **工具调用** — 修复无法识别的工具调用被保留为内容的问题（#19240）提高了动态工具定义代理工作流程的稳定性。

6. **社区集成** — 新增集成：Oleafly（LaTeX/Typst 写作）、Turno（定时编码代理）、NeuronDump（GGUF 检查）、My_AI（带网页搜索的桌面助手）

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English digest about LiteLLM into Chinese. I need to:

1. Translate all the content while keeping the Markdown structure exactly
2. Preserve all technical identifiers (issue numbers, PR numbers, URLs, code, paths, etc.)
3. Use natural technical Chinese register
4. Keep the tables, headings, lists, etc. exactly as they are

Let me translate this carefully:

## 1. Today's Highlights

Today's activity centers on infrastructure hardening and cleanup work. Several PRs address long-standing edge cases: the MCP server and client are being promoted out of experimental paths, the Admin UI bundle is being reorganized, and spend-log schema changes now require explicit approval to prevent accidental breaking changes. On the bug front, a critical race condition in team member addition was closed, and the timeout error messaging bug showing "None seconds" was resolved.

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate each section:

---

# LiteLLM 每日简报 — 2026-10-27

## 1. 今日要点

今日工作主要集中在基础设施加固和清理工作上。多个 PR 解决了长期存在的边界情况：MCP 服务器和客户端正在从实验路径中移出，Admin UI 包正在进行重组，而 spend-log schema 的变更现在需要明确审批以防止意外的破坏性变更。在 bug 修复方面，团队成员添加中的关键竞态条件已关闭，超时错误消息显示 "None 秒"的 bug 也已解决。

## 2. 版本发布与破坏性变更


MCP 网关和客户端已移至 `litellm/proxy/mcp_server` 和 `litellm/mcp_client`，旧包保留为弃用兼容层。构建的 UI 包从 `_experimental` 移至 `litellm/proxy/ui/out/`。Anthropic 模块重命名为 `llms/anthropic/messages` 以更清晰地表明其用途。修改 `LiteLLM_SpendLogs` 的 PR 现需获得 `kerry-berri` 批准。

## 3. 新模型与硬件支持

DashScope 实时模型现已支持 WebSocket 连接，Claude Opus 4.7 的 `get_supported_openai_params()` 仍然错误地将 `temperature` 列为支持参数。

## 4. 性能与优化

速率限制方面，仅在存在活跃限制时才写入令牌计数器，减少了仅设置 RPM 限制时的 5 次冗余 Redis 操作。冷启动计数器现在升级到缓存值而非增量计算，防止多个请求在计数器冷却时导致 422 错误。

统一媒体配额计算：模型感知的图像估算和基于时长的音频估算在 chat 和 responses 端点间共享。新的 `context_window` 字段独立于 `prompt_limit` 和 `output_limit`，解决了提供商对输出是否共享提示窗口的分歧。

## 5. 稳定性与回归

高严重性问题包括 `/team/member_add` 中的竞态条件导致成员丢失、超时错误显示 "None 秒"、请求超时在首个字节沉默时从不触发。

中等问题方面，防护栏头部列出所有管道步骤而非仅运行过的步骤，VLLM 的 cached_tokens 数据未在成本计算器中处理，Scaleway 提供商在 `/embedding` 端点未被路由导致 `LiteLLMUnknownProvider` 错误。

低严重性问题是 Responses 流式错误处理器崩溃并掩盖原始错误。

## 6. 这对应用开发者意味着什么

使用 MCP 工具时应更新导入到新位置 `litellm.mcp_client`，因为实验路径将在未来版本中移除。团队管理中的竞态条件已修复，并发成员添加现在能正确持久化。Claude Opus 4.7 应避免显式传递 `temperature`，因为 LiteLLM 仍将其报告为支持但 Anthropic 会拒绝。DashScope 实时模型现在通过 WebSocket 支持，适合低延迟语音和聊天场景。速率限制的优化减少了高流量部署使用 key/user/team 级别限制时的 Redis 操作。

防护栏的 applied-guardrails 头部现在仅列出实际运行的步骤，符合文档语义。</think>

# LiteLLM 每日简报 — 2026-10-27

## 1. 今日要点

今日工作主要集中在基础设施加固和清理上。多个 PR 解决了长期存在的边界情况：MCP 服务器和客户端正在从实验路径中移出，Admin UI 包正在进行重组，而 spend-log schema 的变更现在需要明确审批以防止意外的破坏性变更。在 bug 修复方面，团队成员添加中的关键竞态条件已关闭，超时错误消息显示 "None seconds" 的 bug 也已解决。

## 2. 版本发布与破坏性变更

| 变更 | 描述 | PR |
|--------|-------------|-----|
| **MCP 路径重组** | MCP 网关和客户端从实验路径移至 `litellm/proxy/mcp_server` 和 `litellm/mcp_client`。旧包保留为弃用兼容层。 | [#48513](https://github.com/BerriAI/litellm/pull/48513) |
| **Admin UI 包迁移** | 构建的 UI 包从 `_experimental` 移至 `litellm/proxy/ui/out/`。 | [#48512](https://github.com/BerriAI/litellm/pull/48512) |
| **Anthropic 模块重命名** | `llms/anthropic/pass_through` → `llms/anthropic/messages`，以明确其用途。 | [#48510](https://github.com/BerriAI/litellm/pull/48510) |
| **Spend logs schema 保护** | 修改 schema.prisma 副本中 `LiteLLM_SpendLogs` 的 PR 现在需要 `kerry-berri` 审批。 | [#48518](https://github.com/BerriAI/litellm/pull/48518) |

## 3. 新模型与硬件支持

| 模型/提供商 | 更新 | PR |
|----------------|--------|-----|
| **DashScope 实时模型** | 为 DashScope 实时模型添加了 WebSocket 支持（与 OpenAI 不同的线格式）。 | [#40579](https://github.com/BerriAI/litellm/pull/40579) |
| **Claude Opus 4.7** | `get_supported_openai_params()` 现在仍然错误地将 `temperature` 列为支持参数 — 但 Anthropic 会拒绝它。 | [#26444](https://github.com/BerriAI/litellm/issues/26444) |

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **速率限制** | 仅在作用域有活跃限制时才写入令牌计数器，消除了仅设置 RPM 限制时每请求 5 次冗余 Redis 写入。 | 减少 Redis 操作，高并发下延迟更低。 |
| **消费计数器** | 冷启动的消费计数器现在升级到缓存值而非累加 — 防止计数器冷却后多个请求同时到达时出现 422 错误。 | 修复预算锁定竞态条件。 |
| **多模态配额** | 统一配额准入的媒体计量：模型感知的图像估算和基于时长的音频估算在 chat 和 responses 端点间共享。 | 图像/音频请求的 TPM 准入更精准。 |
| **上下文窗口** | 成本映射新增 `context_window` 字段（独立于 `prompt_limit` 和 `output_limit`），从 `/model/info` 返回。解决了提供商对输出是否共享提示窗口的分歧。 | 长上下文模型的 token 规划更优。 |

## 5. 稳定性与回归

| 严重性 | 问题 | 状态 | 修复 |
|----------|-------|--------|-----|
| **高** | `/team/member_add` 中的竞态条件 — 并发请求静默丢失团队成员。 | 已关闭 | [#25951](https://github.com/BerriAI/litellm/issues/25951) |
| **高** | 超时错误显示 "None seconds" — 超时测量 bug。 | 已关闭 | [#14635](https://github.com/BerriAI/litellm/issues/14635) |
| **高** | 当上游从第一个字节开始沉默时，`request_timeout` 永不触发。 | 已关闭 | [#38358](https://github.com/BerriAI/litellm/issues/38358) |
| **中** | Guardrails 头部列出所有管道步骤，即使未运行的步骤也包含。 | 进行中 | [#48472](https://github.com/BerriAI/litellm/pull/48472) (修复 PR) |
| **中** | VLLM `cached_tokens` 用量数据未在成本计算器中处理。 | 进行中 | [#22984](https://github.com/BerriAI/litellm/issues/22984) |
| **中** | Scaleway 提供商在 `/embedding` 端点未被路由 — 抛出 `LiteLLMUnknownProvider`。 | 进行中 | [#34503](https://github.com/BerriAI/litellm/issues/34503) |
| **中** | 价格数据重新加载时，当配置 `model_list` 为空会清除 DB 部署的成本映射注册。 | 进行中 | [#43444](https://github.com/BerriAI/litellm/issues/43444) |
| **低** | Responses 流式错误处理器因 `AttributeError` 崩溃，掩盖原始错误。 | 进行中 | [#38511](https://github.com/BerriAI/litellm/issues/38511) |

## 6. 这对应用开发者意味着什么

- **如果你使用 MCP 工具**：MCP 路径现已稳定。请在移除实验路径兼容层之前，将导入更新为新位置（`litellm.mcp_client`）。
- **如果你使用团队管理**：`/team/member_add` 中的竞态条件已修复 — 并发成员添加现在应该能正确持久化。
- **如果你使用 Claude Opus 4.7**：避免显式传递 `temperature`；LiteLLM 仍将其报告为支持，但 Anthropic 会拒绝它。
- **如果你使用 DashScope**：实时模型现在通过 WebSocket 支持 — 适用于低延迟语音/聊天用例。
- **如果你依赖速率限制**：优化意味着高流量部署使用 key/user/team 级别限制时，Redis 操作更少，应该能提高吞吐量。
- **如果你使用 guardrails**：applied-guardrails 头部现在仅列出实际运行的步骤，符合文档语义。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Chinese. Let me go through the content and translate it while preserving the exact structure and format.

Key things to preserve:
- Markdown structure (headings, tables, lists, etc.)
- URLs and links
- Issue/PR references (#12345)
- Code/technical terms
- Version numbers
- Project names like "Unsloth", "MiniMax-M3.1-Flash", etc.

Let me translate section by section:

## 1. Today's Highlights
翻译：今日要闻

## 2. Releases & Breaking Changes
翻译：版本发布与重大变更

## 3. New Model & Hardware Support
翻译：新模型与硬件支持

## 4. Performance & Optimization
翻译：性能与优化

## 5. Stability & Regressions
翻译：稳定性与回归问题

## 6. What This Means for Application Developers
翻译：这意味着什么——应用开发者须知

Let me translate the full content now:</think>

# Unsloth 动态 —— 2026-10-27

## 1. 今日要闻

Unsloth 发布 **v0.1.911-beta**，带来定时任务（Scheduled Tasks）功能，可自动运行提示词（支持本地模型或 API），新增 MiniMax-M3.1-Flash 支持，FLUX-3 图像编辑增强（人像修图），同时为 Mac 用户带来性能提升。PR 方面，多项内存管理优化已合并——包括视频编码时原生缓存写入以回收 VRAM，以及 VAE 解码路由一致性修复。

---

## 2. 版本发布与重大变更

| 版本 | 关键变更 | 链接 |
|---------|-------------|------|
| **v0.1.911-beta** | 定时任务（可使用本地模型或 API 按计划运行提示词）；MiniMax-M3.1-Flash；FLUX-3 编辑支持（含人像修图）；Mac 性能提升 | [Release](https://github.com/unslothai/unsloth/releases) |

无重大变更报告。

---

## 3. 新模型与硬件支持

- **MiniMax-M3.1-Flash**：作为新模型变体加入，推理性能更佳。
- **Cohere Transcribe 03-2026**：模型支持已添加（已关闭 issue #5789）。
- **DeepSeek-V4.1-Flash-1018 GGUF**：聊天模板修复，解决图像标记被拒绝的问题（#15285）。
- **混合 Nvidia-AMD Linux 系统**：AMD GPU 在此类系统上无法检测的问题仍处于 Open 状态（#15444）。
- **Apple Silicon NVFP4**：MiniMax-M3.1 GGUF 出现 CPU 回退问题，尽管已启用 GPU 卸载（#15409）。

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **VRAM 回收** | 原生缓存写入在写入时读取权重，使卸载（offload）可在视频构建期间回收 VRAM | [#15461](https://github.com/unslothai/unsloth/pull/15461) |
| **视频 VAE** | 修复潜在空间形状 VAE 解码路由，确保空闲内存状态下的输出一致性 | [#15462](https://github.com/unslothai/unsloth/pull/15462) |
| **Diffusion 内存** | 主机固定（Host pinning）现按目标设备而非当前 GPU 分类 | [#15463](https://github.com/unslothai/unsloth/pull/15463) |
| **W8A8 Linear 内存** | 编译后的 int8 linear 保持在或低于 eager 峰值内存，遵守 force-eager | [#15456](https://github.com/unslothai/unsloth/pull/15456) |
| **Qwen-Image-2.1** | 固定 reduction-config 过滤器，确保多进程间输出一致 | [#15455](https://github.com/unslothai/unsloth/pull/15455) |
| **Node.js** | 托管 Node 更新至 24.22.1，新设置固定版本 | [#15423](https://github.com/unslothai/unsloth/pull/15423) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **中** | 优化前的 `enforce_kwargs_spacing.py` 对 pre-commit CI 造成严重压力 | v0.1.911 中已修复 |
| **中** | FLUX 图像生成期间，在 Instructions 框中输入文字极其缓慢（#15221） | 已关闭 |
| **中** | MiniCPM-V-4.7-1K Vulkan 后端文本生成失败（#14987） | 已关闭 |
| **中** | 自动压缩忽略本地 GGUF 聊天中的图像令牌，导致上下文溢出循环（#14968） | 已关闭 |
| **中** | T4 驻留提升后 SDXL ControlNet 失败（#15446） | Open |
| **低** | KV 缓存速率格式显示 KiB 而实际应为 MiB（#15460） | Open |
| **低** | Anthropic 直通在上下文溢出时失败，未应用自动压缩（#15417） | Open |

---

## 6. 这意味着什么——应用开发者须知

1. **原生定时自动化**：现在可以直接在 Unsloth 内按计划运行提示词（使用本地模型或 API）——这对无需外部 cron 任务的周期性推理任务很有用。

2. **VRAM 管理改进**：原生缓存写入优化（#15461）意味着视频生成等多阶段流水线将能更好地回收 GPU 内存，减少显存不足（OOM）失败。

3. **微调工作流修复**：微调后的模型名称现可正确解析为训练后的模型，而非回退到基础模型（#15449）——确保在训练后调用 chat completions 时使用任务返回的名称。

4. **HF-Mirror 支持**：现已原生支持从中国 HuggingFace 镜像并行下载模型（#15274），为 HF 访问受限地区的用户提升模型获取速度。

5. **监控注意**：KV 缓存格式化 bug（#15460）会导致接近 1 MiB 时显示错误的内存读数——在生产环境中请双重确认实际内存使用量，直至补丁发布。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*