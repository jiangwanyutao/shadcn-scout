<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import { getLocalTimeZone } from '@internationalized/date'
import { CalendarIcon } from '@lucide/vue'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const date = ref<DateValue>()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" class="w-56 justify-start font-normal" :class="!date && 'text-muted-foreground'">
        <CalendarIcon />
        {{ date ? date.toDate(getLocalTimeZone()).toLocaleDateString('zh-CN') : '请选择日期' }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <Calendar v-model="date" locale="zh-CN" />
    </PopoverContent>
  </Popover>
</template>
