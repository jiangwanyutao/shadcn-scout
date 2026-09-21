<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="flex gap-3">
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>张</AvatarFallback>
    </Avatar>
  </div>
</template>
