<script setup lang="ts">
import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

const props = defineProps<{ name: string }>()

const demos = import.meta.glob<Component>('../../../src/demos/*.vue', { import: 'default' })
const loader = demos[`../../../src/demos/${props.name}.vue`]
const DemoComponent = loader ? defineAsyncComponent(loader) : undefined
</script>

<template>
  <div class="vp-raw my-4 rounded-lg border bg-background p-6 text-foreground">
    <ClientOnly>
      <component :is="DemoComponent" v-if="DemoComponent" />
      <p v-else class="text-sm text-destructive">找不到示例：{{ name }}</p>
    </ClientOnly>
  </div>
</template>
