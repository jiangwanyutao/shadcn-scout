import { fileURLToPath } from 'node:url'
import type { Plugin } from 'postcss'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'
import { COMPONENTS } from './components'

const GROUPS = [...new Set(COMPONENTS.map(c => c.group))]

// VitePress 默认主题的全局样式（如 button { padding: 0 }）没有分层，会盖过 Tailwind utilities。
// 把它包进 @layer vp，层顺序见 theme/layers.css：高于 preflight、低于 utilities。
const wrapVitepressStylesInLayer: Plugin = {
  postcssPlugin: 'wrap-vitepress-styles-in-layer',
  Once(root, { AtRule }) {
    const file = root.source?.input.file?.replaceAll('\\', '/') ?? ''
    if (!file.includes('/theme-default/styles/'))
      return
    const layer = new AtRule({ name: 'layer', params: 'vp' })
    layer.append(root.nodes)
    root.append(layer)
  },
}

export default defineConfig({
  // 部署在 GitHub Pages：https://jiangwanyutao.github.io/ui-component/
  base: '/ui-component/',
  lang: 'zh-CN',
  title: 'UI Kit',
  description: '基于 shadcn 的 React / Vue 统一组件规范',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/install' },
      { text: '组件', link: '/components/button' },
      { text: '布局', link: '/layout/' },
      { text: '扩展组件', link: '/extensions/ai-elements' },
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '安装', link: '/guide/install' },
          { text: '主题与颜色', link: '/guide/theme' },
          { text: 'AI Skill', link: '/guide/skill' },
        ],
      },
      { text: '布局', items: [{ text: 'AdminLayout 后台布局', link: '/layout/' }] },
      ...GROUPS.map(group => ({
        text: group,
        items: COMPONENTS.filter(c => c.group === group).map(c => ({ text: c.title, link: `/components/${c.name}` })),
      })),
      {
        text: '扩展组件',
        items: [
          { text: 'AI Elements', link: '/extensions/ai-elements' },
          { text: '其他扩展（仅 React）', link: '/extensions/react-only' },
        ],
      },
    ],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    search: { provider: 'local' },
  },
  vite: {
    plugins: [tailwindcss()],
    css: { postcss: { plugins: [wrapVitepressStylesInLayer] } },
    resolve: { alias: { '@': fileURLToPath(new URL('../../src', import.meta.url)) } },
    // SKILL.md 在仓库根目录的 skills/ 下
    server: { fs: { allow: [fileURLToPath(new URL('../../..', import.meta.url))] } },
  },
})
