# 站点清单

核验日期：2026-09-23。“搜索方式”一列都用 CLI 实际跑通过；其他说明来自各站官网，采用前以官网当前内容为准。站点说明参考了 [UI Sift](https://github.com/Ciao1019/ui-sift)（MIT）的资源目录。

`@xxx` 表示 shadcn 官方目录里的命名空间，可以直接用 `search @xxx -q ...` 和 `add @xxx/<name>`。

## 布局与区块

| 站点 | 框架 | 搜索方式 | 擅长 | 注意 |
|---|---|---|---|---|
| [shadcn/ui](https://ui.shadcn.com/blocks) | React | `@shadcn`，`-t block` | dashboard-01、sidebar-01~16、login / signup-01~05，以及几十个图表区块 | 页面骨架首选 |
| [shadcn-vue](https://www.shadcn-vue.com/blocks) | Vue | `@shadcn` | 同名的 sidebar / login / dashboard 区块，图表名字是大驼峰 | Vue 页面骨架首选 |
| [Shadcn Studio](https://shadcnstudio.com/) | React | `@shadcn-studio`，`-t block` | 57 个免费区块（about、blog、pricing、integration…），694 个组件变体 | 另有 Pro 内容；Studio MCP 需要账号，和 shadcn 官方 MCP 是两套 |
| [Ruixen UI](https://ruixen.com/) | React | 没有 registry 索引；用 [llms.txt](https://ruixen.com/llms.txt) 找组件，按页面给出的地址 add | 营销区块：hero、feature、navbar、pricing、footer | 按 Tailwind v3/v4、Radix/Base 分成不同路径（`/r/`、`/r/tw3/`、`/r/baseui/`），选和项目一致的那个 |
| [Variant](https://variant.com/community) | — | 不可安装 | 找页面方向的灵感 | 需要登录；只作参考，不当作源码 |

## 动效与交互

| 站点 | 框架 | 搜索方式 | 擅长 | 注意 |
|---|---|---|---|---|
| [Animate UI](https://animate-ui.com/) | React | `@animate-ui` | 580 项：带动画的 radix / base 组件、primitives（texts、effects）、backgrounds、动画图标 | 名字前缀区分体系：`components-radix-*`、`components-base-*` 按项目的 base 选；`demo-*` 是演示，不要装。许可证是 MIT + Commons Clause |
| [GodUI](https://godui.design/docs/components) | React | `search https://godui.design/r/registry.json -q ...` | segmented control、filter bar、command palette、morphing dialog、按钮特效 | 自带 `godui-theme`，不要装主题；液态、磁吸类效果只在品牌需要时用 |
| [moumenlab](https://lab.moumen.dev/components) | React | `@moumenlab` | 14 个完整交互：上传队列、权限弹层、命令面板、拖拽排序、OTP、@ 提及 | 依赖 `motion/react`；`lab-theme` 不要装 |
| [UI TripleD](https://ui.tripled.work/) | React | `@uitripled`（目前 search 会报错）；改用 [llms.txt](https://ui.tripled.work/llms.txt) 里的组件页找 add 地址 | nested list、tabs、hover card、卡片动效 | 组件名后缀区分 shadcnui / baseui / carbon，不要混用 |
| [Heroicons Animated](https://www.heroicons-animated.com/) | React | `@heroicons-animated` | 316 个带动画的 Heroicons | 项目图标库不是 Heroicons 时，不要为了几个动画图标换掉整套 |
| [Iconiq](https://iconiqui.com/) | React | `@iconiq` | 动画图标、AI 输入框等 | `@iconiq/ai-input` 直接 add 会报 `b-switch.json was not found`，处理方法见下方“已知问题” |
| [Libraries.dev Beam](https://libraries.dev/beam) | React | npm 包 `border-beam`、`thinking-orbs` | 边框流光、思考中光球，适合“正在生成” | 只在任务运行时开启；高级参数属于 Pro |
| [Inspira UI](https://inspira-ui.com/) | Vue | `@inspira-ui`（search 不可用，从 [llms.txt](https://inspira-ui.com/llms.txt) 找名字） | 背景、文字特效、卡片、光标等，多数是 Aceternity / Magic UI 效果的 Vue 版 | 依赖 `motion-v`；部分背景用 three / ogl，体积较大 |
| [nxui](https://nxui.geoql.in/docs) | Vue | `search https://nxui.geoql.in/r/registry.json -q ...` | 240 多个动效组件：文字、command menu、animated TOC、drag reorder、stepper | shader 类背景不适合作为普通业务页的默认样式 |

## AI 界面

| 站点 | 框架 | 搜索方式 | 擅长 |
|---|---|---|---|
| [AI Elements](https://elements.ai-sdk.dev/) | React | `@ai-elements` | conversation、message、prompt-input、reasoning、tool、sources |
| [AI Elements Vue](https://www.ai-elements-vue.com/) | Vue | `@ai-elements` | 同上的 Vue 版 |
| [assistant-ui](https://www.assistant-ui.com/) | React | `@assistant-ui` | 完整对话 runtime、Thread / Composer、代码高亮 |
| [prompt-kit](https://www.prompt-kit.com/) | React | `@prompt-kit` | 轻量对话界面：输入框、消息、滚动按钮 |
| [Tool UI](https://www.tool-ui.com/) | React | `@tool-ui` | 工具结果：引用、数据表、计划、进度、确认卡片 |
| [AgentUI](https://www.agentui.pro/) | React | `@agentui` | Agent 执行过程：步骤、工具调用、推理 |
| [Lobe UI](https://ui.lobehub.com/components/markdown) | React | npm 包 `@lobehub/ui` | 只读 Markdown、数学公式、Mermaid |
| [Scrim UI](https://scrimui.dev/) | React | `@scrimui` | 60 多个 AI 界面组件：思考指示、推理步骤、流式 Markdown、工具调用、审批、语音通话控制 |

### 语音

| 站点 | 框架 | 搜索方式 | 擅长 | 注意 |
|---|---|---|---|---|
| AI Elements | React / Vue | `@ai-elements` | `speech-input`、`mic-selector`、`voice-selector`、`audio-player` | `speech-input` 优先用 Web Speech API（Chrome、Edge、Safari 支持），Firefox 下退回 MediaRecorder 录音，转写要自己在 `onAudioRecorded` 里调接口 |
| [ElevenLabs UI](https://ui.elevenlabs.io/) | Vue 已验证；React 未验证 | Vue：`@elevenlabs-ui`（shadcn-vue 目录里）；React：`@elevenlabs-ui` | voice-button、speech-input、orb、live-waveform、bar-visualizer、transcript-viewer，区块 voice-chat-01~03 | React 版在官方目录里的状态是 `unavailable`，核验时请求返回 429，暂时不要依赖。会话类组件需要 ElevenLabs 账号，波形、光球等纯展示组件可以单独用 |
| [assistant-ui](https://www.assistant-ui.com/) | React | `@assistant-ui` | `voice`、`elements-voice`（光球）、`voice-conversation`、`elements-read-aloud` | 依赖 assistant-ui 的 runtime |
| [LiveKit Agents UI](https://livekit.com/ui) | React | `@agents-ui` | 音频可视化（bar / radial / grid / wave / aura）、麦克风和摄像头控制、会话区块 | 需要 LiveKit 会话；项目没用 LiveKit 时只取可视化组件的写法 |
| [Pipecat UI](https://ui.pipecat.ai/) | React | `@pipecat` | 麦克风控制（切换 / 按住说话）、设备选择、音频可视化、字幕 | 需要 Pipecat 后端 |

一个项目只用一套对话 runtime：已经在用 assistant-ui 时，不要再为输入框引入 prompt-kit 的消息状态。

## 专项业务组件

| 站点 | 框架 | 搜索方式 | 擅长 |
|---|---|---|---|
| [Kibo UI](https://www.kibo-ui.com/) | React | `@kibo-ui` | tree、table、dropzone、gantt、kanban、color picker |
| [Astryx](https://astryx.atmeta.com/components) | React 19+ | npm 包 `@astryxdesign/core` | 信息密集的应用组件、App Shell；是一整套设计系统，接入成本高 |
| [Extend UI](https://www.extend.ai/ui/docs) | React | `@extend` | PDF / DOCX / Excel 预览、bounding box 标注、文档审核 |
| [Plate](https://platejs.org/) | React | `@plate` | 富文本编辑器，按插件安装 |
| [mindmapcn](https://mindmapcn.vercel.app/) | React | 见官网安装文档 | 思维导图（基于 Mind Elixir），容器必须有明确高度 |
| [DayFlow](https://calendar.dayflow.studio/) | React / Vue / Angular / Svelte | npm 包，见官网 | 日 / 周 / 月视图、拖拽排程；只选日期时用 shadcn 的 Calendar 就够了 |
| [Cuicui](https://cuicui.day/application-ui/signature) | React | 复制官网源码 | 手写签名 |
| [shadcn-templ](https://shadcn-templ.com/) | Go templ | 自己的 CLI | 仅限 Go templ 项目，和 React 的 shadcn/ui 不是一回事 |

## 已知问题（在全新 React 项目里实测过）

- `@animate-ui/components-radix-preview-link-card`：预览图由 `api.microlink.io` 生成，会把链接发给第三方，内网或敏感链接不要用。`PreviewLinkCardContent` 里必须放 `PreviewLinkCardImage`。文件首行的 `import * as React` 没有被使用，开启 `noUnusedLocals` 时要删掉。
- `@agentui/agent-activity`：安装后把 `components/motion/text-shimmer.tsx` 里的 `from "@/components/motion/text-shimmer"` 改为 `from "@/lib/text-shimmer"`。
- `@iconiq/ai-input`：上游依赖名写错，改为从本地文件安装：

  ```bash
  curl -s https://iconiqui.com/r/ai-input.json | sed 's/"b-switch"/"@iconiq\/b-switch"/' > ai-input.json
  npx shadcn@latest add ./ai-input.json
  ```

- AI Elements 的 Vue 版（prompt-input）在 vue-tsc 下会报 TS6133，这是上游代码的问题。只 exclude `src/components/ai-elements` 不够，引用它的页面也要一起 exclude，或者问用户要不要关掉 `noUnusedLocals`。
- React 的 Tooltip 必须包在 `TooltipProvider` 里。
- Vue 组件内部用的是 `data-[orientation=vertical]:` 这种写法，覆盖时也要用同样的写法；写成 `data-vertical:` 会因为优先级更低而不生效。
