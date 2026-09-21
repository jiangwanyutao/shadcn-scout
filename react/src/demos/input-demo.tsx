import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  const [keyword, setKeyword] = useState("")

  return (
    <div className="grid max-w-sm gap-4">
      <div className="grid gap-2">
        <Label htmlFor="keyword">关键词</Label>
        <Input id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="请输入关键词" />
      </div>
      <Input placeholder="禁用状态" disabled />
      <Input placeholder="校验失败" aria-invalid="true" />
    </div>
  )
}
