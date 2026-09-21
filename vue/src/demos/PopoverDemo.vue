<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">点击弹出</Button>
    </PopoverTrigger>
    <PopoverContent class="text-sm">这里可以放任意内容。</PopoverContent>
  </Popover>
</template>
