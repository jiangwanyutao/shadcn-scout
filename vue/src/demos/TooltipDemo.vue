<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">悬停查看</Button>
      </TooltipTrigger>
      <TooltipContent>这是提示文字</TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
