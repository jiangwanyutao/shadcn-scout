<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const gender = ref('male')
</script>

<template>
  <RadioGroup v-model="gender" class="flex gap-4">
    <div class="flex items-center gap-2">
      <RadioGroupItem id="male" value="male" />
      <Label for="male">男</Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem id="female" value="female" />
      <Label for="female">女</Label>
    </div>
  </RadioGroup>
</template>
