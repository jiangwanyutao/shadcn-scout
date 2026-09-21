<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <div class="max-w-sm text-sm">
    <p class="font-medium">基本信息</p>
    <Separator class="my-3" />
    <div class="flex h-5 items-center gap-3">
      <span>编辑</span>
      <Separator orientation="vertical" />
      <span>删除</span>
      <Separator orientation="vertical" />
      <span>更多</span>
    </div>
  </div>
</template>
