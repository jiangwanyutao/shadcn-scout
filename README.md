# ui-component

基于 shadcn 的 React / Vue 统一组件规范：一套主题、一套后台布局、一个类似 element-ui 的文档站，外加一份给 AI 用的 Skill。

文档站：https://jiangwanyutao.github.io/ui-component/ （push 到 main 后由 GitHub Actions 自动部署）

Registry：`https://jiangwanyutao.github.io/ui-component/r`

```
vue/                      Vue 项目，同时也是文档站（VitePress）
  docs/                   文档站页面
    .vitepress/components.ts   组件清单（侧边栏和组件页都从这里生成）
    public/r/             registry，随文档站一起发布
      theme.json          统一主题（React / Vue 共用）
      react/ vue/         admin-layout（后台布局）
  src/demos/              Vue 示例（文档站实时预览）
  src/layout/             Vue 后台布局源码
react/                    React 项目
  src/demos/              React 示例（文档站展示代码；dev 下打开 /demos.html 预览全部）
  src/layout/             React 后台布局源码
skills/ui-kit/SKILL.md    给 AI 的规范，文档站“AI Skill”页可一键复制
```

## 常用命令

```bash
cd vue && pnpm docs:dev          # 本地文档站
cd vue && pnpm docs:build        # 构建文档站，产物在 vue/docs/.vitepress/dist（含 /r registry）
cd react && pnpm registry:build  # 改了 React 布局后，重新生成 react/admin-layout.json
cd vue && pnpm registry:build    # 改了 Vue 布局后，重新生成 vue/admin-layout.json
```

Vue 的 shadcn-vue CLI 在设置了 `HTTPS_PROXY` 时会请求失败，执行前先去掉代理变量。

## 新增一个组件

1. 在 `react/` 和 `vue/` 里分别用 CLI 添加组件。
2. 写两份示例：`vue/src/demos/XxxDemo.vue`、`react/src/demos/xxx-demo.tsx`。
3. 在 `vue/docs/.vitepress/components.ts` 加一行。
4. 同步更新 `skills/ui-kit/SKILL.md` 里的对照表。

## 验证情况

- React / Vue 的后台布局页面在 1280×800 下逐元素比对（颜色、圆角、字号、位置尺寸），90 个元素完全一致。
- 在全新的 React、Vue 项目中按 SKILL 的命令安装主题和布局，都能正常构建。
- 文档站 32 个页面在生产构建下无报错；对话框、选择器、日期选择、消息提示、AI 对话都实际点击测试过。
