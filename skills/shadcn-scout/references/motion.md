# 动效

动效用来解释状态变化：按下、展开、切换、成功、内容到达。先想清楚“这个动画在告诉用户什么”，说不出来就不加。

## 1. 按类型去哪找

| 类型 | React | Vue | 搜索词 |
|---|---|---|---|
| 带动画的基础组件 | `@animate-ui` 的 `components-radix-*` / `components-base-*`（选和项目 base 一致的） | nxui；inspira-ui | tabs、accordion、dialog、popover、tooltip、switch、checkbox |
| 过渡原语（高亮滑块、布局动画、数字滚动） | `@animate-ui` 的 `primitives-*` | nxui（count up、TOC） | highlight、sliding、counter、number |
| 流程型交互 | `@moumenlab`；GodUI | nxui | upload、command、reorder、otp、mention |
| 文字特效 | `@animate-ui` 的 `primitives-texts-*`；GodUI | `@inspira-ui`；nxui | text、typing、shimmer、blur、gradient |
| 背景、光效 | `@animate-ui` 的 `components-backgrounds-*` | `@inspira-ui`（aurora、particles、grid…）；nxui | background、beam、spotlight、grid |
| 动画图标 | `@animate-ui` icons；`@heroicons-animated`；`@iconiq` | 现有图标加 CSS 过渡 | 图标名，如 copy、check、bell |
| 等待和生成中 | Beam（`border-beam`、`thinking-orbs`）；`@agentui` | inspira-ui、nxui 的 border beam | beam、loader、shimmer、thinking |

```bash
npx shadcn@latest search @animate-ui -q tabs
npx shadcn@latest search https://godui.design/r/registry.json -q segmented
npx shadcn-vue@latest search https://nxui.geoql.in/r/registry.json -q reorder
```

## 2. 一个项目只用一套运行时

- React 用 `motion`（`motion/react`）。已经在用 `framer-motion` 的项目继续用它，不要两套混用。
- Vue 用 `motion-v`；简单的进出场用自带的 `<Transition>` / `<TransitionGroup>` 就够了。
- 能用 CSS（`transition`、`@keyframes`、Tailwind 的 `animate-*`）实现的，不要为此引入动效库。
- add 之前先 `view`，确认组件依赖的运行时和项目里已有的一致。

## 3. 时长参考

| 行为 | 时长 | 验收重点 |
|---|---|---|
| 按钮 hover / 按下 / 焦点 | 100–180ms，只变颜色或很小的位移 | 操作立即响应，焦点始终可见 |
| Tab 指示器、小区域切换 | 160–240ms | 指示器对准真实选中项，快速连点时动画不排队 |
| Popover、Dialog、折叠面板 | 180–280ms，轻微 opacity 加 transform | Esc 能关闭，关闭后焦点回到触发处 |
| 内容插入、完成提示 | 一次短反馈 | 不要让列表里每一行都依次延迟出现 |
| 长任务 | 低强度的持续提示 | 任务完成、取消或离开页面时停止 |

缓动：进入用 ease-out，离开用 ease-in，位置变化用弹簧，但要控制回弹幅度。

## 4. 页面和路由过渡

- React：用 `AnimatePresence` 包住路由出口，以 `key={location.pathname}` 做淡入加小位移（≤ 8px，≤ 200ms）。
- Vue：`<RouterView v-slot="{ Component }">` 里用 `<Transition mode="out-in">` 包住 `<component :is="Component" />`。
- 后台类页面的路由切换越快越好，淡入就够了；不要做整页滑动。
- 列表增删用布局动画（React 用 motion 的 `layout`，Vue 用 `<TransitionGroup>`），让其他项平滑移到新位置。

## 5. 克制

- 一个区域同一时间最多只有一个持续运行的动画（光束、流光、粒子）。输入框、消息和侧栏不要同时循环播放。
- 背景特效、粒子、3D 倾斜、液态、磁吸只用于品牌页或落地页。后台、表单和设置页默认不用。
- 动画不能拖慢操作：用户点完就能继续下一步，不需要等动画播完。
- 长列表里不要给每一项都加持续运行的 filter、阴影或布局动画。

## 6. 无障碍

- 尊重 `prefers-reduced-motion`：去掉位移、弹性、视差和循环效果，保留颜色和透明度上的状态差异。motion 用 `useReducedMotion()`，CSS 用 `motion-safe:` / `motion-reduce:` 前缀。
- 去掉所有动画后，展开、选中、失败、完成这些状态仍然要能看出来。
- 触摸和键盘操作不能依赖 hover。
- 默认不播放音效。
