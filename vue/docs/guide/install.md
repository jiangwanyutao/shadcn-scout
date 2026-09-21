# 安装

下面的 `<REGISTRY_URL>` 是本站地址加 `/r`，即 `https://jiangwanyutao.github.io/ui-component/r`。

## 1. 初始化 shadcn

::: code-group
```bash [Vue]
npx shadcn-vue@latest init -p nova -b neutral
```
```bash [React]
npx shadcn@latest init -b radix -p nova
```
:::

## 2. 安装主题

::: code-group
```bash [Vue]
npx shadcn-vue@latest add <REGISTRY_URL>/theme.json
```
```bash [React]
npx shadcn@latest add <REGISTRY_URL>/theme.json
```
:::

主题会写入项目的全局 CSS（React 是 `src/index.css`，Vue 是 `src/style.css`）。以后主题有更新，重新执行这条命令并加上 `--overwrite` 即可。

## 3. 安装后台布局（可选）

::: code-group
```bash [Vue]
npx shadcn-vue@latest add <REGISTRY_URL>/vue/admin-layout.json
```
```bash [React]
npx shadcn@latest add <REGISTRY_URL>/react/admin-layout.json
```
:::

用法见 [AdminLayout 后台布局](/layout/)。

## 4. 添加组件

在各组件页复制安装命令，例如：

::: code-group
```bash [Vue]
npx shadcn-vue@latest add button table dialog
```
```bash [React]
npx shadcn@latest add button table dialog
```
:::

## 常见问题

- **Vue CLI 报 `Failed to fetch from registry`**：本机设置了 `HTTPS_PROXY` / `HTTP_PROXY` 时会出现，去掉这两个环境变量再执行。
- **CLI 询问是否覆盖已有文件**：选 N，保留项目里现有的组件。
