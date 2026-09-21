<script setup lang="ts">
import type { PromptInputMessage } from '@/components/ai-elements/prompt-input'
import { ref } from 'vue'
import { Conversation, ConversationContent } from '@/components/ai-elements/conversation'
import { Message, MessageContent } from '@/components/ai-elements/message'
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input'

type ChatMessage = { id: number, from: 'user' | 'assistant', text: string }

const messages = ref<ChatMessage[]>([
  { id: 1, from: 'assistant', text: '你好，我是 AI 助手，有什么可以帮你？' },
])

// 示例没有接后端，直接回显；实际项目里在这里调用 AI SDK
function handleSubmit({ text }: PromptInputMessage) {
  if (!text.trim())
    return
  const id = messages.value.length
  messages.value = [
    ...messages.value,
    { id: id + 1, from: 'user', text },
    { id: id + 2, from: 'assistant', text: `收到：${text}` },
  ]
}
</script>

<template>
  <div class="flex h-96 flex-col gap-4">
    <Conversation class="flex-1">
      <ConversationContent>
        <Message v-for="m in messages" :key="m.id" :from="m.from">
          <MessageContent>{{ m.text }}</MessageContent>
        </Message>
      </ConversationContent>
    </Conversation>
    <PromptInput @submit="handleSubmit">
      <PromptInputBody>
        <PromptInputTextarea placeholder="输入消息，回车发送" />
      </PromptInputBody>
      <PromptInputFooter>
        <PromptInputTools />
        <PromptInputSubmit />
      </PromptInputFooter>
    </PromptInput>
  </div>
</template>
