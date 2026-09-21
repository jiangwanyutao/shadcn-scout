<script setup lang="ts">
import { ref } from 'vue'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const enabled = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Switch id="notify" v-model="enabled" />
    <Label for="notify">开启消息通知</Label>
  </div>
</template>
