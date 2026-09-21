<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const agreed = ref(true)
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-2">
      <Checkbox id="agree" v-model="agreed" />
      <Label for="agree">我已阅读并同意协议</Label>
    </div>
    <div class="flex items-center gap-2">
      <Checkbox id="disabled" disabled />
      <Label for="disabled">禁用</Label>
    </div>
  </div>
</template>
