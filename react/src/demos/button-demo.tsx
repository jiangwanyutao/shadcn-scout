import { Loader2Icon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>主要按钮</Button>
      <Button variant="secondary">次要按钮</Button>
      <Button variant="outline">描边按钮</Button>
      <Button variant="ghost">幽灵按钮</Button>
      <Button variant="link">链接按钮</Button>
      <Button variant="destructive">删除</Button>
      <Button className="bg-success text-success-foreground hover:bg-success/90">成功</Button>
      <Button className="bg-warning text-warning-foreground hover:bg-warning/90">警告</Button>
      <Button size="sm">小按钮</Button>
      <Button size="icon" aria-label="新增"><PlusIcon /></Button>
      <Button disabled><Loader2Icon className="animate-spin" />加载中</Button>
    </div>
  )
}
