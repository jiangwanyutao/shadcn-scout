<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const keyword = ref('')
</script>

<template>
  <div class="grid max-w-sm gap-4">
    <div class="grid gap-2">
      <Label for="keyword">关键词</Label>
      <Input id="keyword" v-model="keyword" placeholder="请输入关键词" />
    </div>
    <Input placeholder="禁用状态" disabled />
    <Input placeholder="校验失败" aria-invalid="true" />
  </div>
</template>
