import { useState } from "react"

import { Conversation, ConversationContent } from "@/components/ai-elements/conversation"
import { Message, MessageContent } from "@/components/ai-elements/message"
import {
  PromptInput,
  PromptInputBody,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputMessage,
} from "@/components/ai-elements/prompt-input"

type ChatMessage = { id: number; from: "user" | "assistant"; text: string }

export function AiChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, from: "assistant", text: "你好，我是 AI 助手，有什么可以帮你？" },
  ])

  // 示例没有接后端，直接回显；实际项目里在这里调用 AI SDK
  const handleSubmit = ({ text }: PromptInputMessage) => {
    if (!text.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "user", text },
      { id: prev.length + 2, from: "assistant", text: `收到：${text}` },
    ])
  }

  return (
    <div className="flex h-96 flex-col gap-4">
      <Conversation className="flex-1">
        <ConversationContent>
          {messages.map((m) => (
            <Message key={m.id} from={m.from}>
              <MessageContent>{m.text}</MessageContent>
            </Message>
          ))}
        </ConversationContent>
      </Conversation>
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputBody>
          <PromptInputTextarea placeholder="输入消息，回车发送" />
        </PromptInputBody>
        <PromptInputFooter>
          <PromptInputTools />
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
    </div>
  )
}
