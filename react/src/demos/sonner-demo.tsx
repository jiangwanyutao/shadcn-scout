import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"

export function SonnerDemo() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast("这是一条消息")}>默认</Button>
        <Button variant="outline" onClick={() => toast.success("保存成功")}>成功</Button>
        <Button variant="outline" onClick={() => toast.warning("库存不足")}>警告</Button>
        <Button variant="outline" onClick={() => toast.error("提交失败")}>错误</Button>
      </div>
    </>
  )
}
