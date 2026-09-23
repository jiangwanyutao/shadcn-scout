<h2 align="center">shadcn-scout：教 AI 去 shadcn 生态里找组件的 Skill</h2>

<p align="center">
  <a href="./README_en.md">English</a> | <b>中文</b>
</p>

<p align="center">
  <a href="https://github.com/jiangwanyutao/ui-component"><img src="https://img.shields.io/badge/Project%20Page-GitHub-blue" alt="Project Page"></a>
  <a href="https://skills.sh"><img src="https://img.shields.io/badge/Agent-Skill-D97757" alt="Agent Skill"></a>
  <a href="https://ui.shadcn.com"><img src="https://img.shields.io/badge/shadcn-React%20%7C%20Vue-18181b" alt="shadcn React | Vue"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green" alt="License"></a>
  <a href="https://github.com/jiangwanyutao/ui-component/stargazers"><img src="https://img.shields.io/github/stars/jiangwanyutao/ui-component?style=flat" alt="Stars"></a>
</p>

shadcn-scout 是一个给编程 Agent（Claude Code、Codex、Cursor 等）用的 **Skill**：在 React / Vue 项目里写布局、动效、智能体组件时，它让 AI **先用 shadcn CLI 到 shadcn 生态的第三方 registry 里搜现成实现**，预览源码后再安装，最后**统一成项目自己的主题**，找不到才手写。

### ✨ 核心特性

- ⚛️ **React / Vue 并重** — 读 `components.json` 判断框架，React 用 `shadcn`，Vue 用 `shadcn-vue`，每类需求两边都给出对应来源
- 🧱 **布局** — 后台骨架、侧边栏、登录注册、营销区块、图表；先判断页面类型再装骨架，附响应式与极端内容压力测试
- 🎞️ **动效** — 带动画的组件、过渡原语、文字特效、背景、动画图标；一个项目只用一套运行时，给出时长参考和 reduced motion 规则
- 🤖 **智能体组件** — 录音 / 语音输入、思考中、推理过程、工具调用、流式回复、审批，组件名都用 CLI 核实过
- 🔭 **官方目录检索** — 对照表里没有的需求，教 AI 在 shadcn 官方目录的几百个 registry 里按关键词找站点，再一次搜索多个
- 🎨 **主题统一** — 第三方源码里的原始色值换成语义 token，不装组件自带的主题，暗色模式只靠 token
- 🔁 **跨框架处理** — 只有 React 版时，读懂源码后用 Vue + motion-v 重写，反之亦然，不把一个框架的组件硬塞进另一个
- 🤝 **配合官方 skill** — 检测项目有没有装 shadcn 官方 skill，没装时提示安装（需你同意）
- 📄 **只有 Markdown** — 没有脚本，不需要额外运行环境

### 最新动态

* **[2026.09]** 🔥 检测官方 shadcn skill，没装时提示安装；明确选 registry 的授权规则
* **[2026.09]** 🔥 新增智能体组件对照表（录音、思考中、推理、工具调用……）和官方目录关键词检索
* **[2026.09]** 🎉 首次发布：从统一组件库改为 shadcn-scout Skill，收录 30 多个站点

---

## 目录

- [快速开始](#-快速开始)
  - [安装](#安装)
  - [使用](#使用)
- [收录站点](#-收录站点)
- [工作原理](#-工作原理)
- [核验记录](#-核验记录)
- [相关项目](#-相关项目)
- [局限性](#%EF%B8%8F-局限性)
- [许可证](#-许可证)
- [致谢](#-致谢)

---

## 🚀 快速开始

### 安装

```bash
npx skills add jiangwanyutao/ui-component --skill shadcn-scout
```

加 `--agent claude-code`（或 `codex`、`cursor`）可以指定 Agent，加 `--global` 可以对所有项目生效。也可以手动把 `skills/shadcn-scout` 整个目录复制到 Agent 的 skills 目录里。

**推荐同时安装官方 shadcn skill**：它负责组件的正确写法和 CLI 用法，本 skill 负责去哪找组件，以及布局和动效。本 skill 运行时如果发现项目没装官方 skill，会提示你安装。

```bash
npx skills add shadcn/ui --skill shadcn               # React
npx skills add unovue/shadcn-vue --skill shadcn-vue   # Vue
```

> **环境要求：** Node.js（运行 `npx`）+ 已经 `init` 过 shadcn 的项目（有 `components.json`）；没有时 Skill 会先让 AI 执行 `init`。

### 使用

```text
用 shadcn-scout 给这个 Vue 项目搭一个后台首页：左侧可折叠菜单，顶部面包屑，内容区放统计卡片和图表。
用 shadcn-scout 给这个 React 项目的智能体对话加一个录音按钮和“思考中”折叠块。
用 shadcn-scout 给设置页的 tabs 加切换动画，项目已经在用 motion，不要引入新的动效库。
```

#### 🗣️ 典型流程

需求：`给这个 React 项目的智能体对话加一个录音按钮和“思考中”折叠块`

```text
1. 看项目：components.json → React；已装 ai（Vercel AI SDK）→ 优先 @ai-elements
2. 查对照表：录音 → @ai-elements/speech-input；推理折叠 → @ai-elements/reasoning
3. 预览：npx shadcn@latest view @ai-elements/speech-input
   → 依赖 lucide-react、button、spinner；支持 Web Speech API，不支持时退回 MediaRecorder
4. 安装：npx shadcn@latest add @ai-elements/speech-input
5. 统一：原始色值换成语义 token，接上真实的 onTranscriptionChange
6. 验收：typecheck / build，桌面和窄屏、明暗主题、键盘操作
```

---

## 📚 收录站点

完整清单（框架、搜索方式、擅长、注意事项、已知问题）见 [`references/sources.md`](skills/shadcn-scout/references/sources.md)。

| 分类 | React | Vue |
|---|---|---|
| 布局与区块 | shadcn/ui blocks、Shadcn Studio、Ruixen UI | shadcn-vue blocks |
| 动效与交互 | Animate UI、GodUI、moumenlab、UI TripleD、Heroicons Animated、Iconiq、Beam | Inspira UI、nxui |
| AI 界面 | AI Elements、assistant-ui、prompt-kit、Tool UI、AgentUI、Scrim UI、Lobe UI | AI Elements Vue |
| 语音 | AI Elements、assistant-ui、LiveKit Agents UI、Pipecat UI | AI Elements Vue、ElevenLabs UI |
| 专项业务 | Kibo UI、Astryx、Extend UI、Plate、mindmapcn、DayFlow、Cuicui | DayFlow |

---

## 📖 工作原理

```text
需求 ─→ 看项目（components.json → React / Vue、base、Tailwind、动效库、图标库）
          │        └─ 检查官方 shadcn skill，没装 → 提示安装
          ↓
        查对照表（布局 / 动效 / 智能体组件）
          ├─ 有 ───────────────────────────────┐
          └─ 没有 → 官方目录按关键词找 registry    │
                          ↓                     ↓
                   search → view（看源码和依赖）→ add
                          ↓
        统一：语义 token、项目图标、同一套动效运行时、接真实数据
          ↓
        验收：typecheck / build、窄屏、明暗、reduced motion、键盘
```

- `SKILL.md` 是入口，布局和动效的细则放在 `references/`，用到时才读。
- 只有另一种框架的版本时，读懂源码和动画参数后用本框架重写，并注明来源。

```text
skills/shadcn-scout/
├── SKILL.md                 # 入口：看项目 → 去哪找 → 搜索/预览/安装 → 统一主题 → 跨框架 → 验收
└── references/
    ├── sources.md           # 站点清单：框架、搜索方式、擅长、注意事项、已知问题
    ├── layout.md            # 布局
    └── motion.md            # 动效
```

---

## 📊 核验记录

<details>
<summary><b>registry 可用性（点击展开）</b></summary>

核验日期：2026-09-23，shadcn CLI 4.21.0，shadcn-vue CLI 2.8.2。条目数来自 `search` 的返回结果。

| 命名空间 | 框架 | 条目数 | 结果 |
|---|---|---|---|
| `@shadcn` | React | 471 | ✅ |
| `@animate-ui` | React | 580 | ✅ |
| `@shadcn-studio` | React | 694 | ✅ |
| `@ai-elements` | React | 136 | ✅ |
| `@assistant-ui` | React | 156 | ✅ |
| `@plate` | React | 324 | ✅ |
| `@heroicons-animated` | React | 316 | ✅ |
| `@iconiq` | React | 120 | ✅ |
| `@scrimui` | React | 68 | ✅ |
| `@extend` | React | 67 | ✅ |
| `@kibo-ui` | React | 41 | ✅ |
| `@tool-ui` | React | 27 | ✅ |
| `@prompt-kit` | React | 23 | ✅ |
| `@pipecat` | React | 21 | ✅ |
| `@agentui` | React | 19 | ✅ |
| `@agents-ui` | React | 18 | ✅ |
| `@moumenlab` | React | 14 | ✅ |
| GodUI（URL） | React | — | ✅ |
| `@uitripled` | React | — | ❌ search 报错，改用 llms.txt |
| `@elevenlabs-ui` | React | — | ❌ 429，未验证 |
| `@shadcn` / `@ai-elements` / `@elevenlabs-ui` | Vue | — | ✅ |
| nxui（URL） | Vue | — | ✅ |
| `@inspira-ui` | Vue | — | ⚠️ 无索引，search 失败；view / add 正常 |

</details>

<details>
<summary><b>实测踩过的坑（点击展开）</b></summary>

| 问题 | 处理 |
|---|---|
| `@iconiq/ai-input` 依赖名写错，报 `b-switch.json was not found` | 下载后修正依赖名，再从本地文件安装 |
| `@agentui/agent-activity` 安装后 import 被 CLI 改错 | 把 `text-shimmer.tsx` 里的路径改回 `@/lib/text-shimmer` |
| 设置了 `HTTPS_PROXY` 时 shadcn-vue 请求失败 | 执行前去掉代理变量 |
| 官方 skill 要求“没指定 registry 先问用户”，和本 skill 冲突 | 调用本 skill 视为授权按对照表选择，回复里说明来源 |

</details>

---

## 🌟 相关项目

| 项目 | 说明 |
|---|---|
| [**UI Sift**](https://github.com/Ciao1019/ui-sift) | React 为主的界面 Skill，本项目站点清单和部分设计原则的来源 |
| [**shadcn/ui Skills**](https://ui.shadcn.com/docs/skills) | shadcn 官方 skill，负责组件写法与 CLI 用法，推荐一起安装 |
| [**shadcn-vue Skills**](https://shadcn-vue.com/docs/skills) | shadcn-vue 官方 skill |
| [**skills.sh**](https://skills.sh) | `npx skills` 安装工具 |

---

## ⚠️ 局限性

- 核验只确认了组件存在（`search` / `view`），没有把每个组件都装进真实项目跑一遍。
- registry 内容会变化，站点可能下线或改名，采用前以官网当前内容为准。
- `search` 是模糊匹配，结果会混进不相关条目，需要 AI 看描述判断。
- Vue 的来源明显少于 React，部分效果需要按“跨框架处理”自己重写。
- ElevenLabs UI 的 React 版、UI TripleD 的 search 目前不可用。

---

## 📄 许可证

本项目基于 [MIT](LICENSE) 协议发布。站点清单和部分设计原则来自 UI Sift（MIT，Copyright (c) 2026 Ciao1019）。

## 🙏 致谢

- [UI Sift](https://github.com/Ciao1019/ui-sift)（MIT）提供了站点清单和部分设计原则
- 收录的各站点组件保留各自的许可证

## ⭐ Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=jiangwanyutao/ui-component&type=Date)](https://star-history.com/#jiangwanyutao/ui-component&Date)
