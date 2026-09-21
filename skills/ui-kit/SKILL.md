---
name: ui-kit
description: 在 React 或 Vue 项目里写、改任何界面时使用（页面、表单、表格、弹窗、后台布局、AI 对话界面）。统一使用 shadcn + 本组件库的主题与后台布局，保证配色一致；包含 element-ui 到 shadcn 的组件对照。
---

# UI Kit 使用规范

界面一律使用 shadcn：React 项目用 shadcn/ui（`npx shadcn@latest`），Vue 项目用 shadcn-vue（`npx shadcn-vue@latest`）。
主题、后台布局来自本组件库的 registry，下文用 `<REGISTRY_URL>` 表示它的地址。

## 1. 初始化（新项目只做一次，已有 components.json 就跳过）

React：

```bash
npx shadcn@latest init -b radix -p nova
npx shadcn@latest add <REGISTRY_URL>/theme.json
npx shadcn@latest add <REGISTRY_URL>/react/admin-layout.json
```

Vue：

```bash
npx shadcn-vue@latest init -p nova -b neutral
npx shadcn-vue@latest add <REGISTRY_URL>/theme.json
npx shadcn-vue@latest add <REGISTRY_URL>/vue/admin-layout.json
```

然后在 `components.json` 里注册 AI Elements（需要 AI 对话类组件时才用）：

- React：`"registries": { "@ai-elements": "https://elements.ai-sdk.dev/api/registry/{name}.json" }`
- Vue：`"registries": { "@ai-elements": "https://registry.ai-elements-vue.com/{name}.json" }`

## 2. 颜色（必须遵守）

- 只用语义 class：`bg-primary` `text-primary-foreground` `bg-muted` `text-muted-foreground` `border-border` `bg-destructive` `bg-success` `bg-warning` `bg-info` 等。
- 禁止原始色值：`bg-blue-500`、`text-[#409EFF]`、`style="color: ..."`、`dark:bg-xxx` 一律不写。
- 状态色约定：成功 `success`，警告 `warning`，信息/进行中 `info`，失败/删除 `destructive`，次要/禁用 `muted`。
  例：`<Badge class="bg-success text-success-foreground">已完成</Badge>`
- 不要在业务代码里新增或修改 CSS 变量。确实需要新颜色时，停下来告诉用户去改 `theme.json`。
- 暗色模式只在 `<html>` 上切换 `dark` class。
- 圆角只用 `rounded-sm / md / lg / xl`。

## 3. 组件

- 先看 `components/ui` 里有没有；没有就用 CLI 添加，不要手写同类组件。
- 不要为了单个页面去改 `components/ui` 里的源码，差异通过 `class` 传入。
- 一次 add 一个组件更稳妥；CLI 询问是否覆盖已有文件时选 N（非交互环境用 `yes n | npx ...`），add 之后确认文件确实生成了。

| element-ui | shadcn（add 名称） |
|---|---|
| el-button | button |
| el-tag | badge |
| el-avatar / el-divider / el-card | avatar / separator / card |
| el-input / textarea | input / textarea（配合 label） |
| el-select | select；需要搜索用 combobox |
| el-checkbox / el-radio / el-switch | checkbox / radio-group / switch |
| el-date-picker | popover + calendar；范围选择 React 用 `mode="range"`，Vue 用 range-calendar |
| el-form + 校验 | field + input 等；校验 React 用 react-hook-form + zod，Vue 用 vee-validate + zod |
| el-table | table；排序/筛选/分页用 TanStack Table 组合（data-table） |
| el-pagination / el-progress / el-skeleton | pagination / progress / skeleton |
| el-tabs / el-breadcrumb / el-dropdown | tabs / breadcrumb / dropdown-menu |
| el-dialog / ElMessageBox.confirm / el-drawer | dialog / alert-dialog / sheet |
| el-tooltip / el-popover | tooltip / popover |
| ElMessage / ElNotification | sonner：根组件放一次 `<Toaster />`，之后调用 `toast.success(...)` |
| el-menu（侧边栏） | 用下面的 AdminLayout，不要自己拼 |

没有对应实现的：Tree、Upload、Cascader、TreeSelect、Transfer。遇到时先停下来问用户，不要自行实现。

## 4. 后台布局 AdminLayout

所有后台页面都包在 AdminLayout 里：可折叠侧边菜单 + 顶栏面包屑 + 内容区。

React（`@/components/admin-layout`）：

```tsx
<AdminLayout breadcrumb={["业务中心", "订单管理"]}>
  {/* 页面内容 */}
</AdminLayout>
```

Vue（`@/components/layout/AdminLayout.vue`）：

```vue
<AdminLayout :breadcrumb="['业务中心', '订单管理']">
  <!-- 页面内容 -->
</AdminLayout>
```

菜单、团队、用户信息在 `app-sidebar.tsx` / `AppSidebar.vue` 顶部的 `data` 常量里，按业务修改这里即可。

## 5. AI 对话组件（AI Elements）

用 `npx shadcn@latest add @ai-elements/<name>`（Vue 用 `npx shadcn-vue@latest add @ai-elements/<name>`）添加。
常用：`conversation`（消息列表）、`message`（单条消息）、`prompt-input`（输入框）、`reasoning`、`tool`、`code-block`、`sources`。
组件会装到 `components/ai-elements/` 下，它们同样读取主题变量，不需要额外处理配色。

## 6. 已知问题

- Vue CLI 报 `Failed to fetch from registry` 时，去掉 `HTTPS_PROXY` / `HTTP_PROXY` 环境变量再执行。
- React 的 Tooltip 必须包在 `TooltipProvider` 内（AdminLayout 已经包了）。
- Vue 组件内部用 `data-[orientation=vertical]:` 这种写法；覆盖它时也要用同样的写法，写成 `data-vertical:` 会因为选择器优先级更低而不生效。
- AI Elements 的 Vue 版（prompt-input）在 vue-tsc 下会报 TS6133（上游代码问题，不要改它的源码）。只 exclude `src/components/ai-elements` 不够，因为引用它的页面会把它连带检查；需要同时 exclude 引用它的文件，或者询问用户是否关闭 `noUnusedLocals`。
