import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return (
    <div className="grid max-w-sm gap-4">
      <Progress value={30} />
      <Progress value={70} />
    </div>
  )
}
