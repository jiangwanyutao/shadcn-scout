import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { zhCN } from "react-day-picker/locale"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className={cn("w-56 justify-start font-normal", !date && "text-muted-foreground")}>
          <CalendarIcon />
          {date ? date.toLocaleDateString("zh-CN") : "请选择日期"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} locale={zhCN} />
      </PopoverContent>
    </Popover>
  )
}
