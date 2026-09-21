import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>新增用户</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>新增用户</DialogTitle>
          <DialogDescription>填写用户信息后点击保存。</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="username">用户名</Label>
          <Input id="username" placeholder="请输入用户名" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">取消</Button>
          </DialogClose>
          <Button>保存</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
