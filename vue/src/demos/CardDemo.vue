<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
  <Card class="max-w-sm">
    <CardHeader>
      <CardTitle>本月销售额</CardTitle>
      <CardDescription>截至今日 18:00</CardDescription>
    </CardHeader>
    <CardContent>
      <p class="text-3xl font-semibold">¥ 128,430</p>
    </CardContent>
    <CardFooter>
      <Button size="sm" variant="outline">查看明细</Button>
    </CardFooter>
  </Card>
</template>
