<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const remark = ref('')
</script>

<template>
  <div class="grid max-w-sm gap-2">
    <Label for="remark">备注</Label>
    <Textarea id="remark" v-model="remark" placeholder="请输入备注" />
  </div>
</template>
