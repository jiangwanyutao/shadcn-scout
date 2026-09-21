<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Badge>默认</Badge>
    <Badge variant="secondary">次要</Badge>
    <Badge variant="outline">描边</Badge>
    <Badge variant="destructive">失败</Badge>
    <Badge class="bg-success text-success-foreground">已完成</Badge>
    <Badge class="bg-warning text-warning-foreground">待审核</Badge>
    <Badge class="bg-info text-info-foreground">处理中</Badge>
  </div>
</template>
