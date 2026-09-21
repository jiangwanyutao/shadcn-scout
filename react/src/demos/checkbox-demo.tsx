import { useState } from "react"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  const [agreed, setAgreed] = useState(true)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
        <Label htmlFor="agree">我已阅读并同意协议</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">禁用</Label>
      </div>
    </div>
  )
}
