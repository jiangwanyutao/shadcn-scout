import { useState } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  const [gender, setGender] = useState("male")

  return (
    <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem id="male" value="male" />
        <Label htmlFor="male">男</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem id="female" value="female" />
        <Label htmlFor="female">女</Label>
      </div>
    </RadioGroup>
  )
}
