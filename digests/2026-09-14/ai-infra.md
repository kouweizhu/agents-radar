# AI 基础设施日报 2026-09-14

> 生成时间: 2026-09-14 00:22 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

**跨项目AI基础设施生态报告 — 2026-09-14**

---

### **1. 生态概览**

2026年中期的AI推理基础设施格局呈现出高度专业化与碎片化特征：vLLM 和 SGLang 主导高吞吐、分布式LLM服务，聚焦于推测解码与混合KV缓存；llama.cpp 和 Ollama 在轻量级、本地优先的边缘与桌面部署场景中居于领先地位；LiteLLM 作为通用网关，提供多提供商路由与安全加固的API抽象；而 Unsloth 则崛起为领先的微调与智能体工具平台，其生产级工具链正快速成熟。然而，跨项目互操作性依然有限，硬件支持（Blackwell、ROCm、XPU）与量化标准（MXFP8、IQ3_S、GGUF）虽并行演进，却步调不一，导致多平台部署摩擦极高。

---

### **2. 活动对比**

| 项目         | 开放议题 | 开放PR | 最近发布（24小时内） | 破坏性变更 | 备注 |
|--------------|----------|----------|-----------------------|------------------|-------|
| **vLLM**     | 12+ 严重 | 8+       | v0.29.0（稳定版）     | 无               | 合并多项高影响力修复；未发布新版本；推测解码存在严重Bug |
| **SGLang**   | 50+（30+ 严重） | 15+      | 无（dev-dsv41 镜像）   | 无               | PR 提交速度极快；系统性CUDA核心转储与客户端崩溃未解决 |
| **llama.cpp**| 20+（7 严重） | 12       | 构建 b10948（补丁）   | 无               | 无正式发布；基于构建的补丁；专注后端稳定性 |
| **Ollama**   | 25+（5 严重） | 9        | 无                   | 无               | 模型/量化Bug激增；存储泄漏及Windows/ARM回归问题 |
| **LiteLLM**  | 15+（5 严重） | 6        | v1.102.0-rc.1         | 无               | 首次签名Docker镜像；Rust迁移进行中；修复关键流式传输问题 |
| **Unsloth**  | 22+（3 严重） | 198*     | 无                   | 有（`max_seq_length` → `max_length`） | PR 数量极高；配置已弃用；存在关键安全绕过 |

> *注：Unsloth 的 198 个 PR 反映了大规模内部重构与 CI/UX 全面升级——并非全部面向用户。*

---

### **3. 模型支持竞赛**

| 模型 / 架构             | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1**       | ✅ KV扩展验证（PR #56539） | ✅ 完整原生支持（PR #38798） | ✅ 转换支持（PR #28696） | ❌ | ✅ 定价/数据（PR #29922） | ✅ 微调已验证（Issue #10806） |
| **DeepSeek-V4.1-Flash** | ✅ 推测解码修复 | ✅ 部分支持（CUDA-graph失败） | ❌ | ❌ | ❌ | ✅ 在 B200 上支持 LoRA 训练 |
| **Qwen3.8 / Qwen3-Coder** | ✅ 前缀缓存修复 | ✅ 工具解析 | ✅ Schema解析 + `\n</think>`终止 | ❌（IQ3_S静默失败） | ✅ 工具调用修复 | ✅ 微调 + 智能体工具 |
| **Gemma-4**             | ✅ Draft/Target组合支持 | ✅ 通过OpenAI API支持多模态 | ❌ | ❌（Windows镜像损坏） | ✅ 定价/数据 | ✅ 智能体工具支持 |
| **Phi3.5 / Nemotron**   | ❌ | ❌ | ✅ 注意力处理 | ❌ | ❌ | ✅ 损失异常已修复 |
| **Ling-3.0-flash-VL**   | ❌ | ✅ 原生多模态（PR #38526） | ❌ | ❌ | ❌ | ❌ |
| **Intel Arc Pro B70**   | ✅ 融合Triton内核（PR #53989） | ✅ 内核优化 | ✅ SYCL/图重放 | ✅ Vulkan I/O修复 | ✅ 后端路由 | ✅ 安装器修复（PR #10626） |
| **AMD ROCm MI355X**     | ✅ 性能分析（PR #56506） | ✅ 温度采样修复 | ✅ BF16回退 | ❌ | ❌ | ✅ LUID检测（PR #9316） |
| **Blackwell (SM120)**   | ✅ Bug追踪（5+项） | ✅ 分片KV池（PR #37615） | ❌ | ❌ | ✅ 路由支持 | ✅ 在 B200（Hopper）上训练 |

**领先者**：**SGLang** 在模型集成速度上领先（DeepSeek-V4.1、Ling-3.0、EAGLE），**llama.cpp** 与 **vLLM** 在硬件后端覆盖上最强，**Unsloth** 在新模型微调支持上独树一帜，**Ollama** 尽管用户需求旺盛，但在模型支持上明显滞后。

---

### **4. 性能前沿**

优化工作集中于四大领域：

- **KV缓存与前缀缓存**：  
  - *vLLM*：修复DP推测解码中的数据损坏（#56734）、静默误报（#56640）和混合卸载（#56733）等关键问题。  
  - *SGLang*：引入统一Radix缓存与模糊匹配（#31057）、每Rank HiCache指标（#39280）及SWA/Mamba混合池。  
  - *llama.cpp*：修复RDNA4量化KV性能下降（#27796），强制使用 `\n</think>` 以实现缓存复用。  
  → **胜者**：**SGLang** — 缓存复用语义最复杂；**vLLM** — 正在处理最多关键修复。

- **推测解码**：  
  - *vLLM*：在TP/DCP下提升DFlash/DSpark稳定性（#56723），重启n-gram CPU解码（#56732）。  
  - *SGLang*：在ROCm上支持EAGLE验证（#39253），但CUDA-graph捕获失败（#39173）。  
  → **领先者**：**vLLM** — 更成熟且部署广泛，但在Blackwell/ROCm上仍不稳定。

- **量化与内存效率**：  
  - *SGLang*：MXFP8 KV缓存、静态FP8 MXFP4 MoE（PR #31235）。  
  - *llama.cpp*：统一 q4_K/q5_K/q8_0 的行对齐（#28575）。  
  - *Ollama*：IQ3_S量化已损坏（Issue #18297）。  
  → **领先者**：**SGLang** — 推动新型FP8格式；**llama.cpp** — GGUF实现最稳健。

- **分布式服务与批处理**：  
  - *vLLM*：跨Worker KV同步（#56646）、TP可整除性修复（#56723）。  
  - *SGLang*：路由器队列限制（#39168–#39170）、缓存亲和流量控制。  
  - *LiteLLM*：流式合并修复（#31332）、支出日志回退（#41026）。  
  → **领先者**：**SGLang** — 路由器可扩展性最佳；**vLLM** — 负载下核心引擎最稳健。

- **内核与后端优化**：  
  - *vLLM*：在XPU上融合Triton QK-norm + RoPE。  
  - *llama.cpp*：SYCL图重放、Vulkan互斥锁、Metal终止保护。  
  - *SGLang*：集成FlashInfer支持DeepSeek-V4.1。  
  → **领先者**：**llama.cpp** — 后端多样性与底层修复最丰富；**SGLang** — CUDA/FlashInfer优化最优。

---

### **5. 层级定位**

| 项目         | 主要层级 | 次要层级 | 角色 |
|--------------|----------|----------|------|
| **vLLM**     | 推理引擎 | 模型服务 | 面向云端/企业级的高吞吐、多GPU、数据并行推理引擎。 |
| **SGLang**   | 推理引擎 | 分布式服务 | 高级推测解码 + 路由器 + 混合缓存；面向LLM平台构建者。 |
| **llama.cpp**| 本地运行时 | 边缘服务 | 轻量级、单节点、原生CPU/GPU推理；主导桌面、边缘与嵌入式场景。 |
| **Ollama**   | 本地运行时 | 开发者工具 | CLI优先、模型打包与本地智能体部署；聚焦消费端与边缘。 |
| **LiteLLM**  | 网关/代理 | API抽象 | 支持100+提供商的通用路由层；安全、成本与合规网关。 |
| **Unsloth**  | 微调/智能体工具 | 训练框架 | 端到端微调、RAG与智能体工作流平台；非推理引擎。 |

**关键洞察**：技术栈正出现分化——**vLLM/SGLang** 在 *云推理引擎* 层竞争；**llama.cpp/Ollama** 主导 *本地运行时* 层；**LiteLLM** 控制 *网关* 层；**Unsloth** 则在 *微调 + 智能体工具* 层独树一帜。目前无单一项目能覆盖全部层级。

---

### **6. 趋势信号**

**今日活动反映的行业趋势**：

1. **推测解码已成为生产级刚需——但极不稳定**：vLLM 与 SGLang 均已上线，但均存在严重正确性缺陷（KV损坏、CUDA核心转储）。*密切关注 vLLM v0.29.1 与 SGLang 的 CUDA-graph 修复。*

2. **硬件碎片化真实存在**：Blackwell、ROCm、XPU、NPU 均有部分支持，但各自存在独特回归问题。*在 vLLM 0.29.1 发布前，避免在 Blackwell/ROCm 上启用推测解码；若稳定性优先于吞吐量，优先选择 llama.cpp 处理 XPU/ROCm。*

3. **量化正成为负担**：IQ3_S（Ollama）与 MXFP8（SGLang）仍属实验性；GGUF（llama.cpp）仍是唯一可靠选择。*生产级边缘部署请坚持使用 GGUF；除非标准化，否则避免厂商专有量化方案。*

4. **安全正向网关层迁移**：LiteLLM 的 Cosign 签名 Docker 镜像标志着新标准的确立：*企业AI的供应链完整性已不可妥协。* 预计所有网关都将跟进。

5. **智能体工具正在催生新基础设施**：Unsloth 的安全绕过（#10835）与 Ollama 的工具调用解析Bug（#18421）揭示，智能体系统正将推理引擎推向 *安全、结构化、工具感知型运行时*。*对沙箱化、模式感知、数值安全的工具执行器需求将爆发。*

6. **本地优先正在胜出**：Ollama 的 Jetson OOM 与 llama.cpp 的 Metal/SYCL 修复表明，桌面/边缘场景正驱动低延迟、低内存创新——即便云端引擎持续扩容。

**开发者建议**：

- **云端LLM API**：使用 **vLLM v0.29.0**，多节点环境下**禁用推测解码**；待 v0.29.1 发布后升级。  
- **RAG/长上下文**：使用 **SGLang** 搭配 HiCache + 统一Radix；避免 SQLite <3.41。  
- **边缘/本地部署**：使用 **llama.cpp b10930**（RDNA3/Vulkan）或 **Ollama CLI**（避开Windows镜像处理）。  
- **多提供商路由**：使用 **LiteLLM v1.102.0-rc.1** — 验证Docker签名，并启用Rust Beta以获取未来性能。  
- **微调与智能体**：使用 **Unsloth** 并自建沙箱——**在 #10835 修复前，切勿部署未经审计的工具调用**。  
- **通用建议**：始终监控 **KV缓存完整性** 与 **推测解码正确性** —— 它们已成为输出静默损坏的首要原因。

> **核心结论**：基础设施正在成熟——但稳定性滞后于创新。优先选择 *可验证的正确性*，而非 *峰值吞吐量*。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 — 2026-09-14**

---

### **1. 今日重点**  
今日工作聚焦于 Model Runner V2 下推测解码（DFlash/DSpark）与前缀缓存的关键修复，以及 KV 缓存完整性和跨工作节点同步的重大改进。最紧急的问题包括数据并行推测解码中的 KV 缓存损坏，以及在 Blackwell 和 ROCm 硬件上出现的静默输出退化，多个高影响 PR 已合并或正在审查中以解决这些问题。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新版本或破坏性 API/配置变更发布。最新稳定版仍为 **v0.29.0**，无任何弃用或迁移通知。

---

### **3. 新模型与硬件支持**  
- **AMD ROCm (MI355X/MI325X)**：PR #56506 为 MI355X 上的 DeepSeek-V4.1-Flash 添加性能剖析，揭示利用率不足问题；尚未新增支持，但正在进行优化跟踪。  
- **Intel XPU (Arc Pro B70)**：PR #53989 在 XPU 上启用融合的 QK-norm + RoPE + gate Triton 内核，消除未融合操作链，提升 Qwen3NextAttention 效率。  
- **Blackwell (SM120)**：多个问题（#54094、#56370、#53436）确认 RTX PRO 6000 Blackwell 上持续存在正确性与性能异常，暂无新支持，仅在途修复。  
- **Gemma-4 MTP**：PR #56539 为推测解码添加 KV 缩放参数验证，支持非量化草稿模型与量化目标模型的稳定组合部署。

---

### **4. 性能与优化**  
- **推测解码**：  
  - PR #56723 通过对齐 TP/DCP 可整除约束，修复 PCP+DCP 下 DFlash/DSpark 的崩溃问题。  
  - PR #56734 防止在虚拟草稿步骤中数据并行（DP）节点的 KV 缓存损坏 —— 对多节点扩展至关重要。  
  - PR #56732 重启 **Tensor Parallel Ngram-CPU 解码**，减少 TP 节点间重复的 n-gram 查找（此前浪费高达 8 倍）。  
- **JIT 预热**：PR #56683 并行化 mHC 预归一化内核编译，使大型 MoE 模型冷启动延迟降低达 40%。  
- **前缀缓存**：PR #56640 修复 NIXL 连接器中前缀缓存命中率误报问题，确保缓存指标准确。  
- **KV 卸载**：PR #56733 引入在 KV 加载失败时主动驱逐混合请求，防止文件系统分层缓存中的卡死状态。

---

### **5. 稳定性与回归问题**  
**关键问题（PR 中修复）**：  
- **#56734**：数据并行下 Model Runner V2 推测解码中的 KV 缓存损坏 —— **高严重性**，修复 PR 已合并。  
- **#56646**：2 节点 TP + 前缀缓存下跨工作节点 KV 推测断言失败 —— **关键**，修复 PR 已提交（标记为 #56646 的重复项）。  
- **#54094**：DFlash + YaRN 在 1.04M 提示下前缀缓存复用率为零 —— **高严重性**，尚无 PR，疑似块分配逻辑根因。  
- **#56605**：GLM-5.3-Flash 在多轮代理中退化为标记重复 —— **关键**，尚无修复 PR，可能为注意力掩码或缓存状态问题。  

**高优先级（正在跟踪）**：  
- **#17676**：vLLM 启动时无限挂起 —— 43 条评论，仍未解决。  
- **#56251**：multiproc_executor 和 shm_broadcast 中确认存在 6 个并发缺陷 —— 尚无修复，阻碍生产使用。  
- **#56696**：OTLP 追踪已初始化但从未发送 span —— 低级配置错误，修复 PR 待审。  

**中等优先级**：  
- **#55534**：H800 上 CUTLASS 3.x 步长错误 —— 影响量化 MoE 推理。  
- **#54691**：DFlash 在 185k 上下文下转为净减速 —— 需要按序列禁用钩子。

---

### **6. 对应用开发者的意义**  
- **在 PR #56734 和 #56723 合并至 v0.29.1 前，避免在 Blackwell/ROCm 上使用推测解码** —— 输出损坏与挂起问题非 trivial。  
- **仅在单节点或经验证的 TP 部署中启用前缀缓存**；多节点混合 KV 缓存（#56646）仍不稳定。  
- **Gemma-4 工具调用**：使用 vLLM ≥0.29.0 并应用 PR #56539，避免非量化草稿与量化目标组合时的初始化崩溃。  
- **在 Intel XPU 上**：融合内核显著提升 Qwen3NextAttention 性能 —— 升级至最新 main 分支可获得 15–20% 吞吐量增益。  
- **监控 OTLP 追踪**：追踪缺陷（#56696）导致可观测性失效 —— 若指标关键，请手动埋点。  

> **建议**：在 v0.29.1 发布前，暂停 DFlash/DSpark + 前缀缓存的生产部署。多节点环境中请使用急切模式或禁用推测解码，直至修复合并并验证。

---

🔗 **值得关注的关键 PR**：  
- [修复 DP 推测解码中的 KV 损坏](https://github.com/vllm-project/vllm/pull/56734)  
- [防止 DFlash/DCP 配置崩溃](https://github.com/vllm-project/vllm/pull/56723)  
- [修复 GLM-5.3 标记重复](https://github.com/vllm-project/vllm/issues/56605)  
- [修复跨工作节点 KV 推测断言](https://github.com/vllm-project/vllm/issues/56646)  
- [并行化 JIT 预热](https://github.com/vllm-project/vllm/pull/56683)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 摘要 — 2026-09-14**

---

### **1. 今日重点**  
SGLang 基础设施团队全力推进对 DeepSeek-V4.1 和混合 KV 缓存的支持，过去 24 小时内有 12+ 个 PR 合并或推进，重点集中在模型集成、路由器可扩展性与 HiCache 可观测性。同时，CUDA 核心转储、请求取消崩溃和推测解码失败等关键稳定性问题仍为最高优先级，CUDA 核心转储追踪项已累积超 300 条评论。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布任何新版本或破坏性 API/配置变更。  
*注：`sglang:dev-dsv41` Docker 镜像（sha256:4a5d132...）正用于测试，但尚未正式发布。*

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1**：通过 PR #38798 完整原生支持（含编码修复、FlashInfer 集成与 EAGLE 验证支持）。  
- **DeepSeek-V4.1-Flash + Engram**：部分支持中；PR #39173 揭示在混合缓存下 CUDA 图捕获失败。  
- **Ling-3.0-flash-VL**：通过 PR #38526 添加原生多模态支持（通过 OpenAI 兼容 API 支持文本/图像/视频）。  
- **Intel CPU**：Q2 2026 路线图确认支持非聚合 CPU 生产级服务（Issue #24921）。  
- **NPU（Ascend）**：DeepSeek V4 支持正在评估中（Issue #29599）；GLM-Image 质量差距仍存（Issue #29359）。  
- **AMD（ROCm）**：修复了 DeepSeek-V4 基准测试中 EAGLE 验证的温度采样问题，提升精度（PR #39253）。  
- **Blackwell（SM120）**：分片 KV 池与统一内存优化正在进行中（PR #37615、#37507）。

---

### **4. 性能与优化**  
- **统一 Radix 缓存**：通过模糊匹配实现语义 KV 复用，已在 PR #31057 中实现，支持 paraphrased RAG 提示复用。  
- **HiCache L2/L3**：指标现按 Rank 统计（PR #39280），预取范围绑定请求尝试次数（PR #39318），并扩展支持 SWA/Mamba 混合池（PR #37507）。  
- **路由器可扩展性**：新增 `--worker-queue-limit N`（PR #39168）与 `--saturation-queue-floor N`（PR #39169）防止缓存亲和流量过载；`--min-load-choices K`（PR #39170）改善负载均衡。  
- **内存效率**：跳过 CUDA 图填充槽的写入（PR #35351）；统一 SWA 混合池的字节预算（PR #36729）。  
- **量化**：提出 MXFP8 KV 缓存优化方案，以及基于 FlashInfer 后端的序列化静态 FP8 MXFP4 MoE（PR #31235）。

---

### **5. 稳定性与回归问题**  
*按严重性排序（CRITICAL > HIGH > MEDIUM）*

- **CRITICAL**：  
  - 请求活跃期间客户端断开导致引擎崩溃（未捕获 `asyncio.CancelledError`）—— **PR #39216**（开放，尚未修复）。  
  - `/health` 处理器超时泄漏请求 → 分页预填充批处理崩溃 —— **Issue #35884**（开放）。  
  - 超过 299 次 CI 运行中自动收集到 CUDA 核心转储事件 —— **Issue #26340**（开放，系统性问题）。  

- **HIGH**：  
  - `sgl-router` PD：开路断路器仍向解码阶段分发请求 → 伪造的预填充死锁 —— **Issue #31206**（开放）。  
  - DeepSeek-V4.1 拒绝包含 `<｜deepseek_image｜>` token 的用户文本 —— **Issue #39274**（开放）。  
  - SWA 分支将后续 Mamba 检查点错误附加到早期前缀 —— **Issue #38815**（开放，高优先级）。  
  - `HiCacheFile` 混合前缀错误报告可恢复性 —— **Issue #39147**（开放）。  

- **MEDIUM**：  
  - GLM-5.2 NVFP4 + EAGLE：图捕获期间发生 CUDA 非法内存访问 —— **Issue #31093**（已关闭，无活动）。  
  - Qwen3-VL 在设置 `fps` 时视频帧被重复采样 —— **Issue #31200**（已关闭，无活动）。  
  - 并发 CUDA 流下自定义 all-reduce 死锁 —— **Issue #31117**（已关闭，无活动）。  

*注：多个关键 Bug（如 #39216、#35884）目前尚无活跃修复 PR。*

---

### **6. 对应用开发者的意义**  
- **LLM 应用构建者**：DeepSeek-V4.1 现已在 SGLang 上具备生产就绪能力，全面支持多模态与推测解码。建议使用 `sglang:dev-dsv41` 进行早期测试。  
- **分布式部署**：新路由器策略（`--worker-queue-limit`、`--saturation-queue-floor`）可智能管理缓存亲和性，避免负载下的级联故障。  
- **成本敏感型运维**：统一 KV 内存预算与 HiCache 增强显著减少内存浪费，尤其适用于 RAG 和长上下文场景。  
- **高可靠性系统**：在修复断路器与 CUDA 图问题前，避免在 GLM-5.2 或 DeepSeek-V4 上使用 `--pd-disaggregation`。监控 `/metrics` 中的缓存局部性趋势（PR #39325–#39327）。  
- **多 GPU/ROCm/NPU 用户**：AMD 与 Ascend 支持正在成熟，但仍属实验阶段——请验证模型输出质量，未解决的 Issue 闭合前请勿用于生产环境。  

> 🔗 **关键链接**：  
> - [DeepSeek-V4.1 支持 PR #38798](https://github.com/sgl-project/sglang/pull/38798)  
> - [CUDA 核心转储追踪 #26340](https://github.com/sgl-project/sglang/issues/26340)  
> - [客户端崩溃 Bug #39216](https://github.com/sgl-project/sglang/issues/39216)  
> - [路由器可扩展性栈（#39168、#39169、#39170）](https://github.com/sgl-project/sglang/pulls?q=is%3Apr+author%3AKangyan-Zhou+is%3Aopen+router)  
> - [HiCache 可观测性栈（#39280、#39318）](https://github.com/sgl-project/sglang/pulls?q=is%3Apr+author%3Axiezhq-hermann+is%3Aopen+hicache)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 — 2026-09-14**

---

### **今日重点**  
今日更新聚焦于 SYCL、Vulkan 和 Metal 后端的关键稳定性修复，同时针对 Qwen3-Coder 的推理格式化和结构化日志进行了定向优化。今日共开启 12 个 PR，反映出在模型解析正确性、后端兼容性及 CI 稳定性方面的高强度活动，尤其关注 AMD/Intel GPU 和多 GPU 边缘场景。

---

### **发布与破坏性变更**  
过去 24 小时内未发布新版本。但构建版本 `b10948` 至 `b10935` 包含非破坏性补丁：  
- `b10948`：从 WebGPU 测试套件中排除 `HY_V4`（#28855）  
- `b10947`：为 Nemotron-H 专家 FFN 回退路径添加除零保护（#28779）  
- `b10946`：为 s390x CPU 路径添加 VXE 保护（#28775）  
- `b10944`：修复 SYCL 内存检测并移除未使用头文件（#28227）  
- `b10938`：为 Vulkan 队列提交添加互斥锁，以绕过 NVIDIA 驱动 Bug（#28830）  
- `b10937`：将无打乱行对齐扩展至 `q4_K`、`q5_K`、`q8_0`（此前仅适用于 `q6_K`）（#28575）  
- `b10936`：增强 Qwen3-Coder 对复杂工具调用的 Schema 解析（#28742）  
- `b10935`：引入 `LOG_JSON` 宏用于结构化日志（#28586）  

> **注意**：无 API 破坏性变更，所有更新均向后兼容。  
> 🔗 [发布说明](https://github.com/ggml-org/llama.cpp/releases)

---

### **新模型与硬件支持**  
- **新模型**：  
  - 为 `fraunhofer-iis/elmod-2.7b-it` 添加预分词器（#28845）  
  - 添加对 `DeepSeek-V4.1-Flash`（`DeepseekV41ForCausalLM`）的转换支持（#28696）  
- **硬件后端**：  
  - SYCL：移植 CUDA 的图记录/重放支持（#28725）  
  - CUDA：在缺乏 BF16 硬件的预 CDNA/rdna3 AMD GPU 上回退至 F32（#28846）  
  - Metal：强制 Qwen3-Coder 推理以 `\n</think>` 结尾，以启用 Prompt 缓存复用（#28869）  
- **量化**：  
  - `q4_K`、`q5_K`、`q8_0` 现在一致应用此前仅限 `q6_K` 的行对齐规则（#28575）  

> 🔗 [DeepSeek-V4.1 支持](https://github.com/ggml-org/llama.cpp/pull/28696) | [ELMOD 预分词器](https://github.com/ggml-org/llama.cpp/pull/28845)

---

### **性能与优化**  
- **SYCL**：在 `ggml-cpu` 中引入每线程共享缓冲区隔离，消除伪共享 — 预计提升 Intel Xe 和 s390x 上的多线程吞吐量（#28861）  
- **语法解析**：单次查找优化将语法评估开销降低 1.2–1.3 倍（#26885）  
- **KV 缓存**：修复 RDNA4（gfx1201）上量化 KV 缓存的错误行为 — 量化格式解码速度慢于 f16，属关键回退（#27796）  
- **Flash Attention**：减小 FA 测试规模以提升 CI 稳定性（#28842）  
- **WebGPU**：因兼容性问题排除 `HY_V4` 测试（#28855）  

> 🔗 [每线程缓冲区 PR](https://github.com/ggml-org/llama.cpp/pull/28861) | [语法加速](https://github.com/ggml-org/llama.cpp/pull/26885)

---

### **稳定性与回退**  
按严重性排序的最高报告回退与崩溃：  

1. **严重**：SYCL + Intel Arc Pro B70 双 GPU 在 DFlash2 草案模型上触发 **GPU TDR 重置**（VIDEO_TDR_TIMEOUT_DETECTED）（#28778）— 尚无修复 PR。  
2. **高**：**Metal 初始化时 OOM** 导致服务绑定端口并返回 500 错误（#27309）— 仍开放，影响 M 系列 Mac。  
3. **高**：**RDNA3 上的 Vulkan** 在 `b10780` 后出现严重提示处理 slowdown（#28752）— 正在调查。  
4. **高**：**Metal 上的 Qwen4exp** 在长上下文下仅输出 1 个 token 即 EOS — 随机性，与 KV 量化/n_ctx 相关（#28805）。  
5. **中**：**Windows 上 HIP/ROCm gfx1201** 的 logits/top-1 与 Vulkan 不一致（#28768）— 潜在正确性问题。  
6. **中**：**SYCL 上的 Qwen3.6 35B A3B** 输出乱码（#28728）— 可复现，尚无修复。  
7. **修复中**：  
   - `ggml_backend_sched_alloc_splits: unexpected graph reallocation` 崩溃（#28753）— 可能与调度器状态相关，尚无 PR。  
   - 多个模型（Nemotron、MiMo2）中的 `get_key_or_arr` 误用已在 #28868 和 #28865 中修复。  

> 🔗 [TDR 重置问题](https://github.com/ggml-org/llama.cpp/issues/28778) | [Metal OOM](https://github.com/ggml-org/llama.cpp/issues/27309) | [RDNA3 回退](https://github.com/ggml-org/llama.cpp/issues/28752)

---

### **对应用开发者的意义**  
- **生产推理**：  
  - 若提示吞吐量至关重要，请避免在 AMD RDNA3/Vulkan 上使用 `b10780+` — 关注 #28752。  
  - 在 macOS 上，若遇到静默 500 错误，请使用 `--n-gpu-layers 0` — 很可能是 Metal OOM（#27309）。  
  - Qwen3-Coder 工具调用需以 `\n</think>` 结尾才能复用缓存 — 请更新模板。  
- **模型部署者**：  
  - DeepSeek-V4.1 和 ELMO-D 现已通过 `convert.py` 正式支持 — 请使用最新 `main` 分支。  
  - RDNA4（R9700）上的量化 KV 缓存 *慢于* f16 — 性能敏感场景建议使用 `f16` KV 缓存。  
- **可观测性**：  
  - 使用 `LOG_JSON` 捕获结构化推理日志（如 token 延迟、后端使用情况）— `b10935+` 已启用。  
  - SYCL 用户：现在支持图重放 — 可降低高吞吐场景开销（#28725）。  
- **需关注**：  
  - SYCL TDR 重置（#28778）和 HIP logits 偏移（#28768）可能破坏多 GPU 或 Windows 部署。  
  - RPC 模型加载仍为串行（#25890）— 超过 500GB 的加载请避免，除非使用并行化变通方案。  

> 🛠️ **行动项**：在生产环境中使用 RDNA3/Vulkan 或 Qwen3-Coder 时，请锁定至 `b10930`，直至修复上线。关注 #28868 和 #28865 获取模型加载修复。  

---  
**来源**：[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | [最新提交](https://github.com/ggml-org/llama.cpp/commits/main)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 — 2026-09-14**

---

### **今日重点**  
Ollama 生态系统近期收到大量关于模型行为、工具解析和多模态推理的关键 Bug 报告与功能请求，尤其集中于 Qwen3.8、Gemma4 和云端点。过去 24 小时内新增 9 个 PR 和 18 个新问题，反映出生产环境使用量激增，主要关注点为提示缓存、JSON Schema 合规性，以及 Jetson 和 Windows 平台上的硬件特定回归问题。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本发布，也未合并或宣布任何 API 或配置破坏性变更。

---

### **新模型与硬件支持**  
- **新模型请求**：`SARVAM-30b/105b`（#14319）、`Gnani Evon-v3.3`（#18427）——均为 Hugging Face 上待集成的 30B+ 参数模型。  
- **量化支持**：`Qwen3.8-27B-GSQ-RCO-GGUF` 的 `IQ3_S` 量化当前失效，返回空响应（#18297）。  
- **硬件**：在 **Jetson Orin Nano 8GB** 上，Gemma4 E4B 的多模态投影器即使启用 CPU 回退仍出现严重 OOM 问题（#18396）。  
- **Windows**：Gemma4 的图像处理仍存在故障（#16532）；图像生成功能虽已合并（#13806），但存在未解决的边缘情况。

---

### **性能与优化**  
- **提示缓存**：两个新问题揭示了因工具 Schema 序列化非确定性（#18430）及 Anthropic 兼容模式下 system 消息上提（#18431）导致的缓存失效，严重影响有状态代理的吞吐量。  
- **内存清理**：PR #18424 修复了 `ollama create --quantize` 每模型遗留 50–80GB 未追踪 F16 数据块的严重存储泄漏问题，对 CI/CD 和边缘部署影响巨大。  
- **Vulkan I/O**：PR #18124（已关闭）恢复了集成 Vulkan GPU 的直接 I/O，解决了基于 VM 的部署（如 Virtio-GPU）超时问题。

---

### **稳定性与回归问题**  
按严重性排序（关键 > 高 > 中）：

1. **关键**：`kimi-k3:cloud` 在工具角色消息中包含图像内容时崩溃并返回 HTTP 500 —— 从正常工作的 `kimi-k2.6` 回归（#18426）。  
2. **关键**：`qwen3.8` 在 `IQ3_S` 量化下虽完成推理，但返回空 `content`（#18297）。  
3. **高**：Qwen3-Coder 工具解析器错误处理超出 `int64` 范围的 `number` 值（如 `1e20` → `9223372036854775807`）（#18421）—— **修复中，PR #18422**。  
4. **高**：Windows 上的 `gemma4` 无法处理图像（#16532）；EXIF 方向检测失效（#18418）。  
5. **高**：Anthropic 兼容端点将 `system` 消息上提至顶层块，破坏 Claude Code 的前缀缓存（#18431）。  
6. **中**：`qwen3.6` 偶发违反工具调用模板，引发 500 错误（#16383）。  
7. **中**：Windows 上超过 10 个省略号的目录表触发“取消任务”（#18387）。

> **修复进行中**：PR #18422（工具数字解析）、#18424（数据块清理）和 #18124（Vulkan）正在积极审查中。

---

### **对应用开发者的建议**  
- **暂勿在 Qwen3.8 上使用 IQ3_S**，直到 #18297 修复——该问题静默失败。  
- **基于工具的代理**必须验证数值输入，并预期 Schema 序列化的非确定性（#18430、#18421）——建议对大数使用 `string` 类型作为临时方案。  
- **云用户**：Anthropic 兼容端点（#18431）和 Kimi 云（#18426）目前在多模态工具调用中不可靠，如可能请回退至本地模型。  
- **Windows 开发者**：图像处理仍不稳定——避免使用高 EXIF 依赖的工作流，直至 #16532 和 #18418 被修复。  
- **存储卫生**：`ollama create --quantize` 是磁盘炸弹——请监控 `~/.ollama/models` 中的未引用数据块；PR #18424 对 CI/CD 流水线至关重要。  
- **生态增长**：**Genie**、**Clips Kitty** 和 **SlopShield** 等新集成表明其在桌面生产力领域广泛采用——可考虑将 Ollama 作为本地优先代理工具的后端。

🔗 **关键链接**：  
- [IQ3_S Bug #18297](https://github.com/ollama/ollama/issues/18297)  
- [工具数字错误 #18421](https://github.com/ollama/ollama/issues/18421) | [修复 PR #18422](https://github.com/ollama/ollama/pull/18422)  
- [Jetson 上 Gemma4 OOM #18396](https://github.com/ollama/ollama/issues/18396)  
- [Anthropic System 消息上提 #18431](https://github.com/ollama/ollama/issues/18431)  
- [数据块清理 PR #18424](https://github.com/ollama/ollama/pull/18424)  
- [Windows 图像支持回归 #16532](https://github.com/ollama/ollama/issues/16532)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

LiteLLM 摘要 — 2026-09-14

---

### **今日亮点**  
LiteLLM 在 v1.102.0-rc.1 中发布了首个经签名的 Docker 镜像，通过 Cosign 验证增强供应链安全。项目正加速 Rust 迁移（Issue #31263），并修复了 Anthropic、Vertex AI 和流式 Responses API 的多项关键兼容性问题，填补了模型转换与防护策略执行的长期空白。

---

### **发布与破坏性变更**  
- **v1.102.0-rc.1** 引入了使用 [Cosign](https://docs.sigstore.dev/cosign/overview/) 签名的 Docker 镜像，密钥源自 [commit 0112e53](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)。  
  → *无 API 破坏性变更；仅增强安全性。*  
  🔗 [发布说明](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.1)

---

### **新增模型与硬件支持**  
- **Vertex AI Claude Haiku 4.5+**：修复模型映射，支持 64K 上下文（此前被限制为 8K）。  
- **DashScope Qwen 3.6/3.7**：通过社区 PR（Issue #29922）添加了定价数据。  
- **Nanobridge**：新增为 OpenAI 兼容提供商（PR #29591）。  
- **Kimik2.7-Code（Azure）**：全面支持（关闭 Issue #32613）。  
- **AssemblyAI 欧洲区域**：现可正确从透传路径中识别（PR #28748）。

---

### **性能与优化**  
- **Rust 迁移（Issue #31263）**：目标将推理网关开销降至亚毫秒级；早期测试版已开放注册。  
  🔗 [Rust 发布博客](https://docs.litellm.ai/blog/litellm-rust-launch)  
- **流式优化**：PR #31332 从流式 `output_item.done` 事件中回填 `response.completed.output` —— 对 Codex CLI 兼容至关重要。  
- **缓存效率**：PR #41025 在提供商边界移除内部 `optional_params`，减少 Bedrock/Anthropic 的 HTTP 400 错误，提升请求吞吐量。  
- **消费日志**：PR #41026 在提供商返回 `id=null` 时回退至 `call_id`，消除高吞吐场景下的消费日志丢失问题。

---

### **稳定性与回归问题**  
**报告的前五大关键 Bug（已修复）**：  
1. **Anthropic MCP 工具被防护策略拦截**（Issue #40583）：预调用防护无法检查 `/v1/messages` 中的 MCP 工具 —— *修复见 PR #29594*。  
2. **Vertex AI Claude 最大令牌数静默截断**（Issue #40363）：默认 4096 与 8K 输出上限覆盖 64K 上下文 —— *未修复*。  
3. **流式使用量合并保留过期缓存令牌**（Issue #40736）：缓存命中后令牌计数错误 —— *修复中*。  
4. **Ollama 自定义提示模板 KeyError**（Issue #39759）：省略 `initial_prompt_value`/`final_prompt_value` 时崩溃 —— *待修复*。  
5. **Responses→Chat 桥接转发 `reasoning_effort` 字典**（Issue #39354）：导致 OpenAI 兼容提供商拒绝请求 —— *PR #41025 部分解决*。

> **注意**：12+ 已关闭的问题被重新打开或标记为陈旧，表明缓存、预算与代理日志中仍存在系统性问题。

---

### **对应用开发者的意义**  
- **安全**：Docker 镜像现可验证 —— 合规部署的必备条件。  
- **可靠性**：若你使用 Anthropic 的 `/v1/messages`、Claude Haiku 或 OpenAI 的 Responses API（如 Codex CLI），**请升级至 v1.102.0-rc.1** —— 关键的流式与工具调用 Bug 已修复。  
- **成本准确性**：消费日志现在能正确处理 `id=null` 与缓存命中 —— 请审查你的遥测链路。  
- **面向未来**：Rust 迁移（Issue #31263）预示重大性能跃升 —— 建议加入测试版，影响 API 设计。  
- **需关注**：Vertex AI Claude 上下文窗口配置错误与 DashScope 缺失定价 —— 上游修复前请手动覆盖。

🔗 **关键链接**：  
- [Rust 迁移测试版注册](https://docs.google.com/forms/d/e/1FAIpQLSecWdOjkzjEson2UiZpD...)  
- [Cosign 验证指南](https://docs.sigstore.dev/cosign/overview/)  
- [v1.102.0-rc.1 中的所有修复](https://github.com/BerriAI/litellm/releases/tag/v1.102.0-rc.1)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 摘要 — 2026-09-14**

---

### **1. 今日重点**  
Unsloth 生态系统在 RAG、代理工具和安装器稳定性方面活动密集，24 小时内新增 22 个问题、更新 198 个 PR，主要聚焦于修复 Windows ARM64/XPU 安装中的静默失败问题，并优化 Studio 的代理工作流体验。值得注意的是，基于 SQLite 的向量检索（#10861）和工具调用截断（#10135）的关键缺陷已进入紧急修复流程，同时线程管理与模型库导航的 UI 改进表明产品界面正趋于成熟。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新版本发布。  
但通过已关闭的问题可推断出**破坏性配置变更**：  
- `SFTConfig` 中的 `max_seq_length` 已被弃用，改用 `max_length`（问题 #10785），用户需更新训练脚本。  
- 安装器现在避免在 Intel XPU 系统上遮蔽 `triton-windows`（PR #10073，问题 #10018），但 #10844 仍存在回归问题 —— Windows 上使用 XPU 硬件的用户需手动验证 Triton 绑定。

---

### **3. 新模型与硬件支持**  
- **新增模型支持**：  
  - 明确修复了 **Phi3.5** 微调损失异常（问题 #946）和 **Nemotron** 注意力处理（问题 #7527），表明兼容性验证正在积极进行。  
  - **Qwen3.5-9B** 在 NVIDIA B200 上的 LoRA 训练已获报告（问题 #10806），确认支持 Hopper 架构。  
- **硬件**：  
  - **Intel XPU (Arc)**：安装器问题持续存在（问题 #10018、#10844），但 PR #10626 修复了此前破坏 XPU 设置的 UV 缓存选择逻辑。  
  - **Windows ARM64**：安装器在 `pyarrow` 上静默失败（问题 #10875），而 CLI 可正常运行，表明存在打包差异。  
  - **AMD ROCm**：Windows 上 LUID 检测优化（PR #9316），提升了基于 HIP 的推理 VRAM 监控能力。  
- **量化**：未公布新格式，但通过外部 llama.cpp 服务器加载 GGUF 模型现已自动识别推理能力（PR #9661、#9664）。

---

### **4. 性能与优化**  
- **内存与 KV 缓存**：  
  - 移除了 KV VRAM 估算器中未使用的 `ctx_checkpoints` 项（PR #8994），降低了多模型路由场景下的过估问题。  
- **延迟与吞吐量**：  
  - PR #10648 消除了 `studio update` 过程中对 llama.cpp/whisper.cpp/node 安装的冗余校验，每次更新节省 5–63 秒。  
  - PR #6739 在沙盒验证期间阻止原生二进制启动，提升了 Linux 上的启动安全性和延迟表现。  
- **自动调优**：  
  - 每次在 B200 上启动训练时都会重建 FLA 自动调优键（问题 #10806），暗示缓存机制不佳 —— 此已知性能瓶颈正处于审查中。

---

### **5. 稳定性与回归问题**  
*按严重性排序（严重 > 高 > 中）*  

- **严重**：  
  - **安全绕过**：可通过工具调用执行 `rm`、`reboot` 命令（问题 #10835）—— **未修复**，存在严重安全风险。  
  - **静默 XPU 失败**：安装器忽略所选路径，默认写入 `~/.unsloth`（问题 #10859）；XPU 的 Triton 替换仍失效（问题 #10844）。  
  - **训练数据损坏**：CSV 中的空白单元格被训练为字面量 `"None"` 字符串（PR #10813 — *修复中*）。  

- **高**：  
  - 使用 SQLite <3.41 时，RAG 密集检索因 KNN 查询缺少 `LIMIT` 而失败（问题 #8854，PR #10861 — *已合并*）。  
  - 多 GPU 推理时 `--tensor-split` 被忽略（问题 #10355）—— 影响大模型分片。  
  - Windows ARM64 桌面安装器在 `pyarrow` 上失败（问题 #10875）—— 阻碍在 Apple Silicon/Windows ARM 上的采用。  

- **中**：  
  - Studio 日志缺乏调试上下文（问题 #10793）—— *改进日志的 PR 正在审查中*。  
  - 工具调用防护块在文件编辑后阻止重执行（问题 #10792）—— 影响开发迭代循环。  

*PR 中已修复*：#10861（SQLite）、#10813（CSV None）、#10626（UV 缓存）、#10648（安装校验）——均已合并或待审。

---

### **6. 对应用开发者的影响**  
- **代理与工具**：工具调用安全性存在漏洞 —— **在问题 #10835 修复前，切勿在生产环境部署 Unsloth Studio 代理，除非自行实施沙盒隔离**。  
- **RAG 系统**：若在旧版 SQLite（如嵌入式部署）中使用向量搜索，请升级至 SQLite ≥3.41，或通过 PR #10861 打补丁。  
- **模型部署**：外部 llama.cpp 服务器现已自动识别推理模板 —— 启用 `--models-dir`，让 Studio 自动配置推测解码。  
- **基础设施**：  
  - 避免使用 Windows ARM64 桌面安装器，当前推荐 CLI 或 Docker。  
  - 在 Intel XPU 上，安装后请手动验证 `triton` 绑定。  
  - 在 B200 上训练：预期自动调优较慢，建议预热模型以避免每步开销。  
- **UI/工作流**：基于文件夹的项目（#10873）、多盘模型库（#10872）和可复用代理配置（#10773）等新功能，标志着产品正向 DevOps 级别的模型管理演进 —— 特别适合管理数十个微调变体的团队。

🔗 **需关注的关键 PR**：  
- [#10861](https://github.com/unslothai/unsloth/pull/10861) —— SQLite RAG 修复  
- [#10813](https://github.com/unslothai/unsloth/pull/10813) —— CSV “None” 损坏修复  
- [#10844](https://github.com/unslothai/unsloth/issues/10844) —— XPU Triton 回归  
- [#10835](https://github.com/unslothai/unsloth/issues/10835) —— 安全绕过（严重）  

> *建议*：为保证稳定，暂锁定 `unsloth==2026.9.2`，直至关键修复发布。密切关注上述 PR，以获取即将发布的热修复版本。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*