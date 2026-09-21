<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">打开抽屉</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>订单详情</SheetTitle>
        <SheetDescription>订单号 A001</SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
