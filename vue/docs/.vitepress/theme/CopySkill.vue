<script setup lang="ts">
import { CheckIcon, CopyIcon } from '@lucide/vue'
import { withBase } from 'vitepress'
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import skillSource from '../../../../skills/ui-kit/SKILL.md?raw'

const COPIED_RESET_MS = 2000
const copied = ref(false)
const failed = ref(false)

// registry 与文档站一起部署在 /r 下，复制时填入真实地址
function skillText() {
  const registryUrl = `${location.origin}${withBase('/r')}`
  return skillSource.replaceAll('<REGISTRY_URL>', registryUrl)
}

async function copy() {
  try {
    await navigator.clipboard.writeText(skillText())
    copied.value = true
    failed.value = false
    setTimeout(() => (copied.value = false), COPIED_RESET_MS)
  }
  catch (error) {
    console.error('复制 SKILL.md 失败', error)
    failed.value = true
  }
}
</script>

<template>
  <div class="vp-raw my-4 flex flex-wrap items-center gap-3">
    <Button @click="copy">
      <CheckIcon v-if="copied" />
      <CopyIcon v-else />
      {{ copied ? '已复制' : '复制 SKILL.md' }}
    </Button>
    <span v-if="failed" class="text-sm text-destructive">复制失败，请直接复制下方内容。</span>
  </div>
</template>
