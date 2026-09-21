<script setup>
// 2026-09-21 逐个请求两边 registry 实测，48 个组件 React / Vue 均可安装
const GROUPS = [
  { title: '对话', path: 'chatbot', items: ['attachments', 'chain-of-thought', 'checkpoint', 'confirmation', 'context', 'conversation', 'inline-citation', 'message', 'model-selector', 'plan', 'prompt-input', 'queue', 'reasoning', 'shimmer', 'sources', 'suggestion', 'task', 'tool'] },
  { title: '代码', path: 'code', items: ['agent', 'artifact', 'code-block', 'commit', 'environment-variables', 'file-tree', 'jsx-preview', 'package-info', 'sandbox', 'schema-display', 'snippet', 'stack-trace', 'terminal', 'test-results', 'web-preview'] },
  { title: '语音', path: 'voice', items: ['audio-player', 'mic-selector', 'persona', 'speech-input', 'transcription', 'voice-selector'] },
  { title: '工作流', path: 'workflow', items: ['canvas', 'connection', 'controls', 'edge', 'node', 'panel', 'toolbar'] },
  { title: '工具', path: 'utilities', items: ['image', 'open-in-chat'] },
]
// Vue 官网没有这些组件的文档页（registry 里有），链接改指向 registry
const VUE_DOC_MISSING = ['jsx-preview']
const vueLink = (path, name) => VUE_DOC_MISSING.includes(name)
  ? `https://registry.ai-elements-vue.com/${name}.json`
  : `https://www.ai-elements-vue.com/components/${path}/${name}`
</script>

# AI Elements

[AI Elements](https://elements.ai-sdk.dev/) 是 Vercel 出品的 AI 界面组件库（对话、推理过程、工具调用、代码块、工作流画布等），基于 shadcn 构建，会直接读取本组件库的主题变量，不需要额外处理配色。Vue 版由社区维护：[AI Elements Vue](https://www.ai-elements-vue.com/)。

## 注册

在项目的 `components.json` 里加上 registry，之后就能用 `@ai-elements/<name>` 安装：

::: code-group
```json [Vue]
{
  "registries": {
    "@ai-elements": "https://registry.ai-elements-vue.com/{name}.json"
  }
}
```
```json [React]
{
  "registries": {
    "@ai-elements": "https://elements.ai-sdk.dev/api/registry/{name}.json"
  }
}
```
:::

::: code-group
```bash [Vue]
npx shadcn-vue@latest add @ai-elements/conversation
```
```bash [React]
npx shadcn@latest add @ai-elements/conversation
```
:::

## 示例：对话界面

`conversation` + `message` + `prompt-input` 组合，示例没有接后端，输入后直接回显。

<Demo name="AiChatDemo" />

::: code-group
<<< @/../src/demos/AiChatDemo.vue [Vue]
<<< @/../../react/src/demos/ai-chat-demo.tsx [React]
:::

## 组件列表

<div class="vp-raw my-4 grid gap-6">
  <section v-for="g in GROUPS" :key="g.title" class="grid gap-2">
    <h3 class="text-base font-semibold">{{ g.title }}</h3>
    <div class="flex flex-wrap gap-2">
      <div v-for="name in g.items" :key="name" class="flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm">
        <code>{{ name }}</code>
        <a :href="`https://elements.ai-sdk.dev/components/${name}`" target="_blank" rel="noreferrer" class="text-primary hover:underline">React</a>
        <a :href="vueLink(g.path, name)" target="_blank" rel="noreferrer" class="text-primary hover:underline">Vue</a>
      </div>
    </div>
  </section>
</div>
