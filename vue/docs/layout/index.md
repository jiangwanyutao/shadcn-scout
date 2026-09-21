# AdminLayout 后台布局

可折叠侧边菜单 + 顶栏面包屑 + 内容区，对应 element-ui 后台常见的 Container + Menu 组合。React 和 Vue 两版渲染结果一致（已逐个元素比对计算样式）。

## 预览

点击左上角按钮可以折叠侧边栏；侧边栏右边缘也可以点击切换。下方是桌面宽度按 50% 缩放后的效果，<a :href="withBase('/layout/preview.html')" target="_blank">在新窗口打开</a>可以看原尺寸。

<!-- 按 2 倍宽度渲染再缩小一半，保证宽度超过 768px 断点，显示桌面版侧边栏 -->
<div class="vp-raw my-4 h-[400px] overflow-hidden rounded-lg border">
  <iframe :src="withBase('/layout/preview.html')" class="h-[800px] w-[200%] origin-top-left scale-50" title="后台布局预览" />
</div>

<script setup>
import { withBase } from 'vitepress'
</script>

## 安装

::: code-group
```bash [Vue]
npx shadcn-vue@latest add <REGISTRY_URL>/vue/admin-layout.json
```
```bash [React]
npx shadcn@latest add <REGISTRY_URL>/react/admin-layout.json
```
:::

## 用法

`breadcrumb` 传当前页面的层级，页面内容放在默认插槽（React 为 children）里。

::: code-group
```vue [Vue]
<script setup lang="ts">
import AdminLayout from '@/components/layout/AdminLayout.vue'
</script>

<template>
  <AdminLayout :breadcrumb="['业务中心', '订单管理']">
    <!-- 页面内容 -->
  </AdminLayout>
</template>
```
```tsx [React]
import { AdminLayout } from "@/components/admin-layout"

export default function OrdersPage() {
  return (
    <AdminLayout breadcrumb={["业务中心", "订单管理"]}>
      {/* 页面内容 */}
    </AdminLayout>
  )
}
```
:::

## 修改菜单

菜单、顶部的系统切换、底部用户信息都在侧边栏组件顶部的 `data` 常量里，按业务修改即可。

::: code-group
<<< @/../src/layout/AppSidebar.vue [Vue AppSidebar.vue]
<<< @/../../react/src/layout/app-sidebar.tsx [React app-sidebar.tsx]
:::

## 布局源码

::: code-group
<<< @/../src/layout/AdminLayout.vue [Vue AdminLayout.vue]
<<< @/../../react/src/layout/admin-layout.tsx [React admin-layout.tsx]
:::
