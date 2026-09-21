import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">悬停查看</Button>
        </TooltipTrigger>
        <TooltipContent>这是提示文字</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
