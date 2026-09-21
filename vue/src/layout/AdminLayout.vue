<script setup lang="ts">
import AppSidebar from "./AppSidebar.vue"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

defineProps<{ breadcrumb: string[] }>()
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-auto" />
          <Breadcrumb>
            <BreadcrumbList>
              <template v-for="(item, i) in breadcrumb" :key="item">
                <BreadcrumbSeparator v-if="i > 0" />
                <BreadcrumbItem>
                  <BreadcrumbPage :class="i < breadcrumb.length - 1 ? 'text-muted-foreground' : undefined">
                    {{ item }}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </template>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <slot />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
