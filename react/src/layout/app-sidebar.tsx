"use client"

import * as React from "react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, CommandIcon, Settings2Icon, LayoutDashboardIcon, PieChartIcon, BookOpenIcon, FrameIcon, MapIcon } from "lucide-react"

// 示例数据：按实际业务修改菜单
const data = {
  user: { name: "管理员", email: "admin@example.com", avatar: "" },
  teams: [
    { name: "管理后台", logo: <GalleryVerticalEndIcon />, plan: "企业版" },
    { name: "测试环境", logo: <CommandIcon />, plan: "测试" },
  ],
  navMain: [
    {
      title: "系统管理",
      url: "#",
      icon: <Settings2Icon />,
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
      icon: <LayoutDashboardIcon />,
      items: [
        { title: "订单管理", url: "#" },
        { title: "商品管理", url: "#" },
        { title: "客户管理", url: "#" },
      ],
    },
    {
      title: "数据统计",
      url: "#",
      icon: <PieChartIcon />,
      items: [
        { title: "销售报表", url: "#" },
        { title: "访问分析", url: "#" },
      ],
    },
    {
      title: "帮助文档",
      url: "#",
      icon: <BookOpenIcon />,
      items: [
        { title: "使用指南", url: "#" },
        { title: "更新日志", url: "#" },
      ],
    },
  ],
  projects: [
    { name: "工作台", url: "#", icon: <FrameIcon /> },
    { name: "站点地图", url: "#", icon: <MapIcon /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
