<h2 align="center">shadcn-scout: A Skill That Teaches AI to Find Components in the shadcn Ecosystem</h2>

<p align="center">
  <b>English</b> | <a href="./README.md">中文</a>
</p>

<p align="center">
  <a href="https://github.com/jiangwanyutao/shadcn-scout"><img src="https://img.shields.io/badge/Project%20Page-GitHub-blue" alt="Project Page"></a>
  <a href="https://skills.sh"><img src="https://img.shields.io/badge/Agent-Skill-D97757" alt="Agent Skill"></a>
  <a href="https://ui.shadcn.com"><img src="https://img.shields.io/badge/shadcn-React%20%7C%20Vue-18181b" alt="shadcn React | Vue"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green" alt="License"></a>
  <a href="https://github.com/jiangwanyutao/shadcn-scout/stargazers"><img src="https://img.shields.io/github/stars/jiangwanyutao/shadcn-scout?style=flat" alt="Stars"></a>
</p>

shadcn-scout is a **Skill** for coding agents (Claude Code, Codex, Cursor, and more). When writing layouts, motion, or agent components in a React / Vue project, it makes the AI **search the shadcn ecosystem's third-party registries with the shadcn CLI first**, preview the source, install it, and then **align it with the project's own theme**. Hand-writing is the last resort.

The skill guidance is written in Simplified Chinese; agents that read Chinese can use it with English prompts.

### ✨ Key Features

- ⚛️ **React and Vue alike** — Reads `components.json` to detect the framework (`shadcn` for React, `shadcn-vue` for Vue) and lists sources for both sides for every need
- 🧱 **Layout** — Admin shells, sidebars, login / signup, marketing sections, charts; pick the page type first, then install a skeleton; includes responsive and edge-content stress tests
- 🎞️ **Motion** — Animated components, transition primitives, text effects, backgrounds, animated icons; one motion runtime per project, duration references, and reduced-motion rules
- 🤖 **Agent components** — Voice input / recording, thinking, reasoning, tool calls, streaming replies, approvals; every component name was checked with the CLI
- 🔭 **Directory search** — For needs not in the table, the AI searches the descriptions of the hundreds of registries in the official shadcn directory by keyword, then searches several at once
- 🎨 **Theme alignment** — Raw colors in third-party source become semantic tokens, component-bundled themes are skipped, and dark mode relies on tokens only
- 🔁 **Cross-framework** — When only a React version exists, the AI reads the source and rewrites it with Vue + motion-v (and vice versa) instead of forcing one framework's component into another
- 🤝 **Works with the official skill** — Checks whether the official shadcn skill is installed and suggests installing it if not (with your approval)
- 📄 **Markdown only** — No scripts, no extra runtime

### News

* **[2026.09]** 🔥 Detects the official shadcn skill and suggests installing it; clarifies who picks the registry
* **[2026.09]** 🔥 Added the agent component table (voice, thinking, reasoning, tool calls…) and keyword search over the official directory
* **[2026.09]** 🎉 First release: turned the unified component library into the shadcn-scout Skill, covering 30+ sites

---

## Contents

- [Quick Start](#-quick-start)
  - [Installation](#installation)
  - [Usage](#usage)
- [Sources](#-sources)
- [How It Works](#-how-it-works)
- [Verification](#-verification)
- [Related Projects](#-related-projects)
- [Limitations](#%EF%B8%8F-limitations)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

---

## 🚀 Quick Start

### Installation

```bash
npx skills add jiangwanyutao/shadcn-scout
```

Add `--agent claude-code` (or `codex`, `cursor`) to target an agent, and `--global` to install for all projects. You can also copy the whole `skills/shadcn-scout` directory into your agent's skills directory.

**Also install the official shadcn skill (recommended).** It covers correct component usage and the CLI; this skill covers where to find components, plus layout and motion. If the official skill is missing, this skill will suggest installing it.

```bash
npx skills add shadcn/ui --skill shadcn               # React
npx skills add unovue/shadcn-vue --skill shadcn-vue   # Vue
```

> **Requirements:** Node.js (for `npx`) + a project already initialized with shadcn (has `components.json`); if it isn't, the skill has the AI run `init` first.

### Usage

```text
Use shadcn-scout to build an admin home page for this Vue project: collapsible side menu, breadcrumb header, stats cards and charts in the content area.
Use shadcn-scout to add a record button and a collapsible "thinking" block to this React project's agent chat.
Use shadcn-scout to animate the settings page tabs; the project already uses motion, don't add another motion library.
```

#### 🗣️ Typical Flow

Request: `add a record button and a collapsible "thinking" block to this React project's agent chat`

```text
1. Inspect: components.json → React; uses ai (Vercel AI SDK) → prefer @ai-elements
2. Look up the table: recording → @ai-elements/speech-input; reasoning → @ai-elements/reasoning
3. Preview: npx shadcn@latest view @ai-elements/speech-input
   → depends on lucide-react, button, spinner; uses the Web Speech API, falls back to MediaRecorder
4. Install: npx shadcn@latest add @ai-elements/speech-input
5. Align: raw colors → semantic tokens, wire up the real onTranscriptionChange
6. Verify: typecheck / build, desktop and narrow screens, light and dark, keyboard
```

---

## 📚 Sources

The full list (framework, how to search, strengths, caveats, known issues) is in [`references/sources.md`](skills/shadcn-scout/references/sources.md).

| Category | React | Vue |
|---|---|---|
| Layout & blocks | shadcn/ui blocks, Shadcn Studio, Ruixen UI | shadcn-vue blocks |
| Motion & interaction | Animate UI, GodUI, moumenlab, UI TripleD, Heroicons Animated, Iconiq, Beam | Inspira UI, nxui |
| AI interfaces | AI Elements, assistant-ui, prompt-kit, Tool UI, AgentUI, Scrim UI, Lobe UI | AI Elements Vue |
| Voice | AI Elements, assistant-ui, LiveKit Agents UI, Pipecat UI | AI Elements Vue, ElevenLabs UI |
| Specialized | Kibo UI, Astryx, Extend UI, Plate, mindmapcn, DayFlow, Cuicui | DayFlow |

---

## 📖 How It Works

```text
request ─→ inspect project (components.json → React / Vue, base, Tailwind, motion lib, icon lib)
             │        └─ official shadcn skill missing → suggest installing
             ↓
           look up the table (layout / motion / agent components)
             ├─ found ─────────────────────────────────┐
             └─ not found → keyword search the directory │
                                ↓                       ↓
                      search → view (source & deps) → add
                                ↓
           align: semantic tokens, project icons, one motion runtime, real data
             ↓
           verify: typecheck / build, narrow screens, light / dark, reduced motion, keyboard
```

- `SKILL.md` is the entry point; layout and motion details live in `references/` and are read only when needed.
- When only another framework's version exists, the AI rewrites it in the target framework after reading the source and animation parameters, and credits the source.

```text
skills/shadcn-scout/
├── SKILL.md                 # entry: inspect → where to look → search/view/add → theme → cross-framework → verify
└── references/
    ├── sources.md           # sites: framework, how to search, strengths, caveats, known issues
    ├── layout.md            # layout
    └── motion.md            # motion
```

---

## 📊 Verification

<details>
<summary><b>Registry availability (click to expand)</b></summary>

Checked on 2026-09-23 with shadcn CLI 4.21.0 and shadcn-vue CLI 2.8.2. Item counts come from `search`.

| Namespace | Framework | Items | Result |
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
| GodUI (URL) | React | — | ✅ |
| `@uitripled` | React | — | ❌ search fails, use llms.txt |
| `@elevenlabs-ui` | React | — | ❌ 429, unverified |
| `@shadcn` / `@ai-elements` / `@elevenlabs-ui` | Vue | — | ✅ |
| nxui (URL) | Vue | — | ✅ |
| `@inspira-ui` | Vue | — | ⚠️ no index, search fails; view / add work |

</details>

<details>
<summary><b>Known pitfalls (click to expand)</b></summary>

| Problem | Fix |
|---|---|
| `@iconiq/ai-input` has a wrong dependency name: `b-switch.json was not found` | Download it, fix the dependency name, install from the local file |
| `@agentui/agent-activity` gets a broken import rewritten by the CLI | Change the path in `text-shimmer.tsx` back to `@/lib/text-shimmer` |
| shadcn-vue requests fail when `HTTPS_PROXY` is set | Unset the proxy variables first |
| The official skill says "ask the user if no registry is given", conflicting with this skill | Invoking this skill counts as permission to pick from its table; the reply names the source |

</details>

---

## 🌟 Related Projects

| Project | Description |
|---|---|
| [**UI Sift**](https://github.com/Ciao1019/ui-sift) | React-first UI skill; source of this project's site list and some design principles |
| [**shadcn/ui Skills**](https://ui.shadcn.com/docs/skills) | Official shadcn skill for component usage and the CLI; recommended alongside this one |
| [**shadcn-vue Skills**](https://shadcn-vue.com/docs/skills) | Official shadcn-vue skill |
| [**skills.sh**](https://skills.sh) | The `npx skills` installer |

---

## ⚠️ Limitations

- Verification only confirms components exist (`search` / `view`); not every component was installed into a real project.
- Registries change; sites may go offline or rename items, so check the official site before adopting.
- `search` is fuzzy and returns unrelated items; the AI has to judge by description.
- Vue has far fewer sources than React; some effects must be rewritten per the cross-framework rules.
- ElevenLabs UI (React) and UI TripleD search are currently unavailable.

---

## 📄 License

Released under the [MIT](LICENSE) License. The site list and some design guidance come from UI Sift (MIT, Copyright (c) 2026 Ciao1019).

## 🙏 Acknowledgements

- [UI Sift](https://github.com/Ciao1019/ui-sift) (MIT) for the site list and some design principles
- Components from the listed sites keep their own licenses

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jiangwanyutao/shadcn-scout&type=Date)](https://star-history.com/#jiangwanyutao/shadcn-scout&Date)
