<script setup>
const COLORS = [
  { token: 'primary', cls: 'bg-primary text-primary-foreground', use: '主要操作、选中态、链接' },
  { token: 'secondary', cls: 'bg-secondary text-secondary-foreground', use: '次要操作' },
  { token: 'muted', cls: 'bg-muted text-muted-foreground', use: '次要文字、禁用、占位背景' },
  { token: 'accent', cls: 'bg-accent text-accent-foreground', use: '悬停、高亮背景' },
  { token: 'destructive', cls: 'bg-destructive text-white', use: '失败、删除、错误' },
  { token: 'success', cls: 'bg-success text-success-foreground', use: '成功、已完成' },
  { token: 'warning', cls: 'bg-warning text-warning-foreground', use: '警告、待处理' },
  { token: 'info', cls: 'bg-info text-info-foreground', use: '信息、进行中' },
]
</script>

# 主题与颜色

主题只有一份：`docs/public/r/theme.json`（shadcn 的 `registry:theme` 格式）。React 和 Vue 的 CLI 都能直接安装它，装完后两边的 CSS 变量完全一致。

## 颜色 token

右上角切换暗色模式，可以看到每个颜色在暗色下的效果。

<div class="vp-raw my-4 grid gap-2">
  <div v-for="c in COLORS" :key="c.token" class="flex items-center gap-4 text-sm">
    <div :class="c.cls" class="flex h-10 w-40 shrink-0 items-center rounded-md px-3 font-medium">{{ c.token }}</div>
    <code>bg-{{ c.token }}</code>
    <span class="text-muted-foreground">{{ c.use }}</span>
  </div>
</div>

## 使用规则

- 只用语义 class，例如 `bg-primary`、`text-muted-foreground`、`border-border`。
- 不写原始色值，例如 `bg-blue-500`、`text-[#409EFF]`、`style="color: ..."`。
- 不写 `dark:` 颜色覆盖。暗色模式由 `<html class="dark">` 统一切换，所有 token 会自动变化。
- 圆角只用 `rounded-sm / md / lg / xl`，基准值是 `--radius: 0.5rem`。

## 和 shadcn 默认主题的区别

| 项目 | 说明 |
|---|---|
| 主色 | 蓝色 `oklch(0.546 0.245 262.881)`，暗色下稍亮 |
| 状态色 | 新增 `success`、`warning`、`info` 三组，每组都有 `-foreground` 文字色 |
| 圆角刻度 | 固定为乘法公式；React 和 Vue 的 CLI 默认公式不同，不固定的话会差 1px 左右 |

## 修改主题

改 `docs/public/r/theme.json`，然后在各个项目里执行：

::: code-group
```bash [Vue]
npx shadcn-vue@latest add <REGISTRY_URL>/theme.json --overwrite
```
```bash [React]
npx shadcn@latest add <REGISTRY_URL>/theme.json --overwrite
```
:::
