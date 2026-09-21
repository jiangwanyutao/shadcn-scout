import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  const [remark, setRemark] = useState("")

  return (
    <div className="grid max-w-sm gap-2">
      <Label htmlFor="remark">备注</Label>
      <Textarea id="remark" value={remark} onChange={(e) => setRemark(e.target.value)} placeholder="请输入备注" />
    </div>
  )
}
