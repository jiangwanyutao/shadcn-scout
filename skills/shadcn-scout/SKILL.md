---
name: shadcn-scout
description: 在 React（shadcn/ui）或 Vue（shadcn-vue）项目里写页面布局、区块、动效、动画组件时使用。先用 shadcn CLI 到官方目录收录的第三方 registry（animate-ui、shadcn-studio、inspira-ui、nxui 等）搜现成实现，安装后统一成项目的主题与交互规范，而不是从头手写。纯后端、只改业务逻辑或机械改字时不使用。
---

# shadcn scout

布局和动效的原则：**先找、再装、再统一，找不到才手写**。shadcn 生态里有几百个兼容 registry，大多数常见布局和动效已经有人做好，用 CLI 就能搜索和安装。

## 1. 先看项目

- **React 还是 Vue**：`components.json` 的 `$schema` 含 `shadcn-vue.com` 就是 Vue。下文 `<cli>` 在 React 项目里指 `npx shadcn@latest`，在 Vue 项目里指 `npx shadcn-vue@latest`。
- 没有 `components.json` 时先 `<cli> init`。
- 记下这些约束，选组件时要对上：base（radix / base）、Tailwind v3 还是 v4、已有的动效库（`motion`、`motion-v`、`framer-motion`）、图标库、`components/ui` 里已经有的组件。React 项目可用 `npx shadcn@latest info` 一次看全。
- 项目里已经有的组件优先复用，不要再装一个同类的。

### 检查官方 shadcn skill

官方 skill 负责“怎么正确使用 shadcn”（项目配置、组件组合规则、表单写法、CLI 参数）；本 skill 负责“去哪找”和布局、动效。两者配合使用。

1. 看当前可用的 skill 里有没有 `shadcn`（React）或 `shadcn-vue`（Vue）；不确定时运行 `npx skills ls --json`，全局安装的用 `npx skills ls -g --json` 查。
2. 没有装：告诉用户推荐安装及原因，给出命令，**用户同意后再执行**（安装会在项目里新增 `.agents/`、`.claude/` 等目录和 `skills-lock.json`）：
   - React：`npx skills add shadcn/ui --skill shadcn`
   - Vue：`npx skills add unovue/shadcn-vue --skill shadcn-vue`
3. 刚装的 skill 通常要等下次会话才会自动加载。本次会话里先手动读一遍它的 `SKILL.md`，用 `npx skills ls --json` 的 `path` 字段找到位置。
4. 已经装了：组件写法、表单、CLI 参数以官方 skill 为准，本 skill 只补充来源选择和布局、动效。

## 2. 按需求去哪找

| 需求 | React | Vue |
|---|---|---|
| 后台骨架、侧边栏、登录注册 | `@shadcn` 区块（dashboard-01、sidebar-01~16、login-01~05、signup-01~05） | 同名 `@shadcn` 区块 |
| 营销页区块（hero、定价、博客、关于我们） | `@shadcn-studio` 区块；Ruixen | inspira-ui 的背景与特效 + 自己按区块组合 |
| 带动画的基础组件（tabs、accordion、dialog…） | `@animate-ui`（components-radix / components-base）；GodUI；UI TripleD | nxui；inspira-ui |
| 精细交互流程（上传、权限弹层、命令面板、拖拽排序） | `@moumenlab`；GodUI | nxui（command menu、drag reorder、stepper） |
| 文字特效、背景、光效 | `@animate-ui`（primitives-texts、components-backgrounds）；GodUI | `@inspira-ui`；nxui |
| 动画图标 | `@animate-ui` icons；`@heroicons-animated`；`@iconiq` | 用现有图标 + CSS 过渡 |
| 图表 | `@shadcn` chart-*（area / bar / line / pie / radar / radial） | `@shadcn` 图表区块，名字是大驼峰（如 `ChartAreaInteractive`） |
| AI / 智能体组件 | 见下面的“智能体组件” | 同左 |
| 文件树、看板、甘特、复杂业务组件 | `@kibo-ui`；Astryx | 暂无对应，参见第 5 节 |
| 文档预览审核、富文本、导图、日程、签名 | `@extend`、`@plate`、mindmapcn、DayFlow、Cuicui | DayFlow（有 Vue 版） |

### 智能体组件

表里的名字都可以直接 `view` / `add`，已用 CLI 核实存在。

| 需求 | React | Vue |
|---|---|---|
| 录音、语音输入（转文字） | `@ai-elements/speech-input`（浏览器支持时用 Web Speech API，否则用 MediaRecorder 录音后交给 `onAudioRecorded`） | `@ai-elements/speech-input`；`@elevenlabs-ui/speech-input`、`voice-button` |
| 麦克风选择、录音波形 | `@ai-elements/mic-selector`；`@agents-ui/agent-audio-visualizer-*` | `@ai-elements/mic-selector`；`@elevenlabs-ui/live-waveform`、`bar-visualizer`、`waveform` |
| 实时语音通话（通话控制、光球） | `@assistant-ui/voice`、`elements-voice`；`@scrimui/voice-call-controls` | `@elevenlabs-ui/orb`、`conversation-bar`、区块 `voice-chat-01~03` |
| 语音播放、朗读 | `@ai-elements/audio-player`；`@assistant-ui/elements-read-aloud` | `@ai-elements/audio-player`；`@elevenlabs-ui/audio-player`、`transcript-viewer` |
| 思考中（首个 token 到达前） | `@ai-elements/shimmer`；`@prompt-kit/thinking-bar`；`@agentui/thinking-shimmer`；`@scrimui/thinking-indicator` | `@ai-elements/shimmer`、`loader`；`@elevenlabs-ui/shimmering-text` |
| 推理过程（可折叠） | `@ai-elements/reasoning`、`chain-of-thought`；`@prompt-kit/reasoning`；`@agentui/reasoning-text` | `@ai-elements/reasoning`、`chain-of-thought` |
| 工具调用、执行步骤 | `@ai-elements/tool`；`@prompt-kit/tool`、`steps`；`@agentui/agent-activity`；`@tool-ui` | `@ai-elements/tool` |
| 流式回复 | `@ai-elements/message`；`@agentui/streaming-response`；`@scrimui/streaming-markdown` | `@ai-elements/message`；`@elevenlabs-ui/response` |
| 审批、人工确认 | `@ai-elements/confirmation`；`@agentui/approval-card`、`tool-approval`；`@scrimui/approval-request` | `@ai-elements/confirmation` |
| 输入框、完整对话页 | `@ai-elements/prompt-input`、`conversation`；`@assistant-ui`；`@prompt-kit/prompt-input` | `@ai-elements/prompt-input`、`conversation` |

选择规则：

- **先看项目已经在用哪套**：用 Vercel AI SDK（`ai`、`@ai-sdk/*`）时优先 `@ai-elements`；用 assistant-ui 时继续用 `@assistant-ui`。同一个对话界面里不要混用两套消息状态。
- **看后端绑定**：`@agents-ui` 只能配合 LiveKit，`@pipecat` 只能配合 Pipecat，ElevenLabs 的会话组件需要 ElevenLabs 账号。项目没有用这些服务时，只借用其中的纯展示组件（波形、光球），或者选择不绑定服务的组件。
- 同类组件有多个时，`view` 两三个比较依赖和写法，挑依赖最少、和项目 base 一致的。

### 表里没有时：到官方目录里找

官方目录收录了几百个 registry，表里只是其中一小部分。遇到表里没有的需求：

```bash
# 1. 在目录的描述里按关键词找 registry（关键词用英文：voice、audio、agent、chart、calendar…）
curl -s https://ui.shadcn.com/r/registries.json | grep -oiE '"name":"@[^"]+","homepage":"[^"]*","url":"[^"]*","description":"[^"]*voice[^"]*"'

# 2. 一次搜索多个 registry
npx shadcn@latest search @ai-elements @prompt-kit @agentui @scrimui -q thinking

# 3. 看源码再决定
npx shadcn@latest view @scrimui/thinking-indicator
```

- `search` 是模糊匹配，结果里会混进不相关的条目，要看描述判断，不要只看名字。
- 目录里每个 registry 都有 `health.status` 字段，`unavailable` 的先跳过。
- Vue 项目的目录是 https://shadcn-vue.com/r/registries.json，目前只有 5 个。找不到时按第 5 节处理。

每个站点的擅长点、安装方式和已知坑：[references/sources.md](references/sources.md)。
写布局前读 [references/layout.md](references/layout.md)，写动效前读 [references/motion.md](references/motion.md)。

## 3. 搜索 → 预览 → 安装

### React

```bash
npx shadcn@latest search @animate-ui -q tabs             # 按关键词搜，结果名字就是 add 用的名字
npx shadcn@latest search @shadcn -t block -q sidebar      # 只看区块
npx shadcn@latest view @animate-ui/components-animate-tabs  # 看源码和依赖，不写入项目
npx shadcn@latest add @animate-ui/components-animate-tabs
```

- 官方目录（https://ui.shadcn.com/r/registries.json）里的命名空间可以直接使用，不用改 `components.json`。目录收录了几百个 registry，上表之外的也可以用，先 `search` 看看有什么。
- 不在目录里的站点，用它的 `registry.json` 地址搜索，结果里给出的 URL 可以直接 add：
  `npx shadcn@latest search https://godui.design/r/registry.json -q button`

### Vue

```bash
npx shadcn-vue@latest search @shadcn -q sidebar
npx shadcn-vue@latest search https://nxui.geoql.in/r/registry.json -q text
npx shadcn-vue@latest view @inspira-ui/text-generate-effect
npx shadcn-vue@latest add @inspira-ui/text-generate-effect
```

- shadcn-vue 只认识它自己目录里的命名空间：`@shadcn`、`@inspira-ui`、`@ai-elements`、`@mapcn`、`@elevenlabs-ui`。其他站点用 URL，或者在 `components.json` 的 `registries` 里登记。
- 搜索结果是 JSON，`-t` 过滤不稳定，用 `-q` 就行。
- inspira-ui 没有提供索引，`search @inspira-ui` 会失败。先到 https://inspira-ui.com/llms.txt 找到组件名（路径最后一段），再 `view` / `add @inspira-ui/<name>`。
- 设置了 `HTTPS_PROXY` / `HTTP_PROXY` 时 shadcn-vue 会请求失败，执行前去掉这两个变量。

### 安装规则

- **选 registry 的授权**：官方 shadcn skill 要求用户没指定 registry 时先问。用户调用本 skill 就视为授权按第 2 节的对照表选择 registry，不必再问；选定后在回复里说明用了哪个站点的哪个组件。用户已经指定了 registry 时，以用户指定的为准。

- add 前先 `view`：看它会引入哪些依赖，会不会带进第二套动效库、图标库或自己的主题（`registry:theme`）。项目已经有 `motion` 就不要再装 `framer-motion`，反过来也一样。
- 一次 add 一个。CLI 问是否覆盖已有文件时选 N（非交互环境用 `yes n | <cli> add ...`）。
- add 完确认文件确实生成了；CLI 偶尔什么都不输出也不生成文件，重跑一次即可。
- 装完看 diff：删掉演示数据，把 props、事件接到真实数据上。

## 4. 统一成项目的样子

装进来的组件要看起来像项目自己写的：

- **颜色只用语义 class**：`bg-background` `text-foreground` `bg-muted` `text-muted-foreground` `bg-primary` `text-primary-foreground` `border-border` `ring-ring` `bg-destructive`，项目里定义了 `success` / `warning` / `info` 时也用它们。
- **第三方源码里的原始色值要替换**：`bg-blue-500`、`text-[#409EFF]`、`from-purple-500`、行内 `style="color:..."` 这类写法都换成语义 token；渐变、光效用 token 加透明度（如 `from-primary/40 to-transparent`）。
- **暗色模式只靠 token**：删掉组件里写死的 `dark:bg-zinc-900` 这类样式，语义 token 在 `.dark` 下会自动切换。
- **不要新增或修改 CSS 变量**。确实缺颜色时，停下来告诉用户去改主题。
- 圆角、阴影、字体跟随项目，不要跟着组件改；自带主题的库（GodUI theme、moumenlab lab-theme、Astryx）不要安装它的主题，只取组件。
- 页面上的差异通过 `class` 传入，不要为了某一个页面改 `components/ui` 里的源码。

## 5. 只有另一种框架的版本时

组件源码不能跨框架使用，不要把 React 组件包进 Vue，反过来也一样。

1. 先在本框架的站点里找同类效果。inspira-ui 里有很多 Aceternity / Magic UI 效果的 Vue 移植，nxui 以动效为主。
2. 找不到时，用 `npx shadcn@latest view <item>` 拿到源码，读懂结构和动画参数（时长、缓动、触发条件），用本框架重写成本地组件：Vue 用 `motion-v` 或 `<Transition>`，React 用 `motion`。在文件顶部注明来源链接。
3. 效果本身是纯 CSS / Tailwind 的（keyframes、transition class），直接把 class 和 keyframes 搬过来。

## 6. 验收

- 跑项目的 typecheck / lint / build。
- 实际打开页面，分别检查桌面宽度和约 390px 的窄屏、明暗两种主题、开启 `prefers-reduced-motion` 后的表现，以及键盘操作。
- 交付时说明：用了哪个站点的哪个组件，做了哪些调整，哪些地方没有验证。
