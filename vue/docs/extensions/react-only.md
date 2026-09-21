# 其他扩展（仅 React）

下面三个组件都来自 shadcn 官方目录里的第三方 registry，**只有 React 版**。命名空间 CLI 能自动识别，不需要改 `components.json`。

以下用法都在全新的 React 项目（nova 风格 + 本站主题）里实际安装、构建并在浏览器中验证过。每个组件都有上游问题，按“已知问题”处理后才能在默认的严格 TypeScript 配置下通过构建。

安装后 CLI 如果没有输出 `Created ...`、也没生成文件，重跑一次即可。

## PreviewLinkCard 链接预览卡片

鼠标悬停在链接上时，弹出该网页的截图预览。来源：[Animate UI](https://animate-ui.com/docs/components/radix/preview-link-card)。

```bash
npx shadcn@latest add @animate-ui/components-radix-preview-link-card
```

```tsx
import {
  PreviewLinkCard,
  PreviewLinkCardContent,
  PreviewLinkCardImage,
  PreviewLinkCardTrigger,
} from "@/components/animate-ui/components/radix/preview-link-card"

<PreviewLinkCard href="https://ui.shadcn.com">
  <PreviewLinkCardTrigger>shadcn/ui</PreviewLinkCardTrigger>
  <PreviewLinkCardContent>
    <PreviewLinkCardImage alt="shadcn/ui 预览" />
  </PreviewLinkCardContent>
</PreviewLinkCard>
```

::: warning 注意
- **会把链接地址发给第三方**：预览图由外部服务 `api.microlink.io` 生成。内网系统、敏感链接不要使用。
- `PreviewLinkCardContent` 里必须放 `PreviewLinkCardImage`，否则悬停时不会出现卡片。
- 已知问题：文件第一行的 `import * as React from 'react'` 没被使用，开启 `noUnusedLocals` 时构建会报错，删除这一行即可。悬停时控制台会出现 `asChild` 属性警告，不影响功能。
- 许可证是 MIT + Commons Clause：可以在自己的应用中使用（包括商用），但不能把组件本身原样转售或再分发。
:::

## AgentActivity AI 执行过程

展示 AI 代理的执行过程：步骤、搜索、工具调用、推理文字，执行完成后可以折叠。来源：[AgentUI](https://www.agentui.pro/components/agents/agent-activity)。

```bash
npx shadcn@latest add @agentui/agent-activity
```

```tsx
import { AgentActivity, type AgentActivityItem } from "@/components/agents/agent-activity"

const ITEMS: AgentActivityItem[] = [
  { id: "1", type: "step", label: "读取订单数据", status: "complete" },
  { id: "2", type: "tool", action: "read", target: "orders.csv" },
  { id: "3", type: "step", label: "生成统计报表", status: "active" },
]

<AgentActivity items={ITEMS} status="working" defaultOpen />
```

::: warning 已知问题（必须处理）
安装时 CLI 会把 `components/motion/text-shimmer.tsx` 里的 import 改错，改成了引用它自己，导致构建失败。安装后把该文件里的

```ts
} from "@/components/motion/text-shimmer";
```

改回

```ts
} from "@/lib/text-shimmer";
```

原因是这个组件里同时有 `text-shimmer.tsx` 和 `lib/text-shimmer.ts` 两个同名文件，CLI 改写路径时混淆了。许可证未明确，官网标注为免费。
:::

## AIInput AI 输入框

带模型选择、设置菜单和发送动画的 AI 对话输入框。来源：[Iconiq](https://iconiqui.com/blocks/ai-input)，MIT 许可证。

上游 registry 的依赖写成了不带命名空间的 `b-switch`，直接 `add @iconiq/ai-input` 会报 `b-switch.json was not found`。需要先下载、修正依赖名，再从本地文件安装：

```bash
curl -s https://iconiqui.com/r/ai-input.json | sed 's/"b-switch"/"@iconiq\/b-switch"/' > ai-input.json
npx shadcn@latest add ./ai-input.json
```

```tsx
import { AIInput } from "@/components/ui/ai-input"

<AIInput placeholder="输入问题" onSend={(message, { agent, settings }) => console.log(message, agent, settings)} />
```

它还支持 `agents`（左侧代理选择）、`settingGroups`（模型等设置）、`menuItems`（加号菜单）、`showMessages`（在输入框上方显示已发送消息）等参数，完整说明见组件源码里的 `AIInputProps`。
