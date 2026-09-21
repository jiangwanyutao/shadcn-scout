import { COMPONENTS, toPascal } from '../.vitepress/components'

export default {
  paths() {
    return COMPONENTS.map((c) => {
      const pascal = toPascal(c.name)
      return {
        params: { name: c.name, title: c.title },
        content: `# ${c.title}

${c.desc}

对应 element-ui：\`${c.element}\`

## 安装

::: code-group
\`\`\`bash [Vue]
npx shadcn-vue@latest add ${c.install}
\`\`\`
\`\`\`bash [React]
npx shadcn@latest add ${c.install}
\`\`\`
:::

## 示例

<Demo name="${pascal}Demo" />

::: code-group
<<< @/../src/demos/${pascal}Demo.vue [Vue]
<<< @/../../react/src/demos/${c.name}-demo.tsx [React]
:::
`,
      }
    })
  },
}
