import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="max-w-sm text-sm">
      <p className="font-medium">基本信息</p>
      <Separator className="my-3" />
      <div className="flex h-5 items-center gap-3">
        <span>编辑</span>
        <Separator orientation="vertical" />
        <span>删除</span>
        <Separator orientation="vertical" />
        <span>更多</span>
      </div>
    </div>
  )
}
