<script setup lang="ts">
import { Progress } from '@/components/ui/progress'
</script>

<template>
  <div class="grid max-w-sm gap-4">
    <Progress :model-value="30" />
    <Progress :model-value="70" />
  </div>
</template>
