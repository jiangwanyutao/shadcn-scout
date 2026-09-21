<script setup lang="ts">
import { toast } from 'vue-sonner'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <Toaster />
  <div class="flex flex-wrap gap-2">
    <Button variant="outline" @click="toast('这是一条消息')">默认</Button>
    <Button variant="outline" @click="toast.success('保存成功')">成功</Button>
    <Button variant="outline" @click="toast.warning('库存不足')">警告</Button>
    <Button variant="outline" @click="toast.error('提交失败')">错误</Button>
  </div>
</template>
