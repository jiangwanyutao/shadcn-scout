# shadcn scout

一个给编程 Agent（Claude Code、Codex、Cursor 等）用的 Skill：在 React / Vue 项目里写布局和动效时，先用 shadcn CLI 到 shadcn 生态的第三方 registry 里搜现成实现，装好后统一成项目的主题，而不是从头手写。

- React（shadcn/ui）和 Vue（shadcn-vue）都支持
- 布局：后台骨架、侧边栏、登录注册、营销区块、图表，页面类型判断、响应式和压力测试
- 动效：带动画的组件、过渡原语、文字特效、背景、动画图标，运行时选择、时长参考和 reduced motion
- 智能体组件：录音 / 语音输入、思考中、推理过程、工具调用、流式回复、审批，React 和 Vue 各有对应；表里没有的教 AI 到官方目录里按关键词找
- 收录 animate-ui、shadcn-studio、inspira-ui、nxui、GodUI、moumenlab、AI Elements 等 30 多个站点，每个站点都写明了搜索和安装方式
- 只有 Markdown，没有脚本

## 安装

```bash
npx skills add jiangwanyutao/ui-component --skill shadcn-scout
```

加 `--agent claude-code`（或 `codex`、`cursor`）可以指定 Agent，加 `--global` 可以对所有项目生效。也可以手动把 `skills/shadcn-scout` 整个目录复制到 Agent 的 skills 目录里。

推荐同时安装官方 shadcn skill：它负责组件的正确写法和 CLI 用法，本 skill 负责去哪找组件，以及布局和动效。本 skill 运行时如果发现项目没装官方 skill，会提示你安装。

```bash
npx skills add shadcn/ui --skill shadcn               # React
npx skills add unovue/shadcn-vue --skill shadcn-vue   # Vue
```

## 用法

```text
用 shadcn-scout 给这个 Vue 项目搭一个后台首页：左侧可折叠菜单，顶部面包屑，内容区放统计卡片和图表。
```

```text
用 shadcn-scout 给这个 React 项目的智能体对话加一个录音按钮和“思考中”折叠块。
```

```text
用 shadcn-scout 给设置页的 tabs 加切换动画，项目已经在用 motion，不要引入新的动效库。
```

## 目录

```text
skills/shadcn-scout/
├── SKILL.md                 # 入口：看项目 → 去哪找 → 搜索/预览/安装 → 统一主题 → 跨框架 → 验收
└── references/
    ├── sources.md           # 站点清单：框架、搜索方式、擅长、注意事项、已知问题
    ├── layout.md            # 布局
    └── motion.md            # 动效
```

## 致谢

站点清单和部分设计原则参考了 [UI Sift](https://github.com/Ciao1019/ui-sift)（MIT）。收录的各站点组件保留各自的许可证。
