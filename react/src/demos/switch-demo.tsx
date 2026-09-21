import { useState } from "react"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  const [enabled, setEnabled] = useState(true)

  return (
    <div className="flex items-center gap-2">
      <Switch id="notify" checked={enabled} onCheckedChange={setEnabled} />
      <Label htmlFor="notify">开启消息通知</Label>
    </div>
  )
}
