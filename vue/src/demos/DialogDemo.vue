<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>新增用户</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>新增用户</DialogTitle>
        <DialogDescription>填写用户信息后点击保存。</DialogDescription>
      </DialogHeader>
      <div class="grid gap-2">
        <Label for="username">用户名</Label>
        <Input id="username" placeholder="请输入用户名" />
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline">取消</Button>
        </DialogClose>
        <Button>保存</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
