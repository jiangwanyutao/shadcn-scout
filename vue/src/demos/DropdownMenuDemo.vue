<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">更多操作</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-40">
      <DropdownMenuLabel>订单 A001</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>编辑</DropdownMenuItem>
      <DropdownMenuItem>复制</DropdownMenuItem>
      <DropdownMenuItem variant="destructive">删除</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
