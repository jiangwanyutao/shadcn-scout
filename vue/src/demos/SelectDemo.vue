<script setup lang="ts">
import { ref } from 'vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const status = ref('')
</script>

<template>
  <Select v-model="status">
    <SelectTrigger class="w-48">
      <SelectValue placeholder="请选择状态" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="done">已完成</SelectItem>
      <SelectItem value="pending">待审核</SelectItem>
      <SelectItem value="closed" disabled>已关闭</SelectItem>
    </SelectContent>
  </Select>
</template>
