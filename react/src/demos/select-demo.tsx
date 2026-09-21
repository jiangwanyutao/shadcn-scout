import { useState } from "react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SelectDemo() {
  const [status, setStatus] = useState("")

  return (
    <Select value={status} onValueChange={setStatus}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="请选择状态" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="done">已完成</SelectItem>
        <SelectItem value="pending">待审核</SelectItem>
        <SelectItem value="closed" disabled>已关闭</SelectItem>
      </SelectContent>
    </Select>
  )
}
