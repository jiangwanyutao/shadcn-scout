import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">点击弹出</Button>
      </PopoverTrigger>
      <PopoverContent className="text-sm">这里可以放任意内容。</PopoverContent>
    </Popover>
  )
}
