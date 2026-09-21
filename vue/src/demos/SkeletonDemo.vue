<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-center gap-4">
    <Skeleton class="size-12 rounded-full" />
    <div class="grid gap-2">
      <Skeleton class="h-4 w-60" />
      <Skeleton class="h-4 w-40" />
    </div>
  </div>
</template>
