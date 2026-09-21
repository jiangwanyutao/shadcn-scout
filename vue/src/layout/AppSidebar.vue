<script setup lang="ts">
import type { SidebarProps } from "@/components/ui/sidebar"

import { GalleryVerticalEnd, Command, Settings2, LayoutDashboard, PieChart, BookOpen, Frame, Map } from "@lucide/vue"
import NavMain from "./NavMain.vue"
import NavProjects from "./NavProjects.vue"
import NavUser from "./NavUser.vue"
import TeamSwitcher from "./TeamSwitcher.vue"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
})

// 示例数据：按实际业务修改菜单
const data = {
  user: { name: "管理员", email: "admin@example.com", avatar: "" },
  teams: [
    { name: "管理后台", logo: GalleryVerticalEnd, plan: "企业版" },
    { name: "测试环境", logo: Command, plan: "测试" },
  ],
  navMain: [
    {
      title: "系统管理",
      url: "#",
      icon: Settings2,
      isActive: true,
      items: [
        { title: "用户管理", url: "#" },
        { title: "角色管理", url: "#" },
        { title: "菜单管理", url: "#" },
      ],
    },
    {
      title: "业务中心",
      url: "#",
      icon: LayoutDashboard,
      items: [
        { title: "订单管理", url: "#" },
        { title: "商品管理", url: "#" },
        { title: "客户管理", url: "#" },
      ],
    },
    {
      title: "数据统计",
      url: "#",
      icon: PieChart,
      items: [
        { title: "销售报表", url: "#" },
        { title: "访问分析", url: "#" },
      ],
    },
    {
      title: "帮助文档",
      url: "#",
      icon: BookOpen,
      items: [
        { title: "使用指南", url: "#" },
        { title: "更新日志", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "工作台", url: "#", icon: Frame },
    { name: "站点地图", url: "#", icon: Map },
  ],
}
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
      <NavProjects :projects="data.projects" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
