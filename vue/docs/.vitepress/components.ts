// 组件清单：侧边栏和组件页都从这里生成。新增组件时在这里加一行，并补齐两份示例：
// vue/src/demos/<Pascal>Demo.vue 与 react/src/demos/<name>-demo.tsx；同时更新 skills/ui-kit/SKILL.md 的对照表
export type ComponentDoc = {
  name: string
  title: string
  group: string
  element: string
  install: string
  desc: string
}

export const COMPONENTS: ComponentDoc[] = [
  { name: 'button', title: 'Button 按钮', group: '基础', element: 'el-button', install: 'button', desc: '常用的操作按钮。状态色按钮用 bg-success / bg-warning 等语义 class。' },
  { name: 'badge', title: 'Badge 标签', group: '基础', element: 'el-tag', install: 'badge', desc: '用于标记状态，表格里的状态列统一用它。' },
  { name: 'avatar', title: 'Avatar 头像', group: '基础', element: 'el-avatar', install: 'avatar', desc: '图片加载失败时显示 Fallback 文字。' },
  { name: 'separator', title: 'Separator 分割线', group: '基础', element: 'el-divider', install: 'separator', desc: '水平或垂直分割内容。' },
  { name: 'card', title: 'Card 卡片', group: '基础', element: 'el-card', install: 'card', desc: '承载一块独立内容，统计数字、表单分组都可以用。' },
  { name: 'input', title: 'Input 输入框', group: '表单', element: 'el-input', install: 'input label', desc: '校验失败时加 aria-invalid="true"，会自动显示错误样式。' },
  { name: 'textarea', title: 'Textarea 多行输入', group: '表单', element: 'el-input type="textarea"', install: 'textarea label', desc: '多行文本输入。' },
  { name: 'select', title: 'Select 选择器', group: '表单', element: 'el-select', install: 'select', desc: '下拉单选。需要搜索时改用 combobox。' },
  { name: 'checkbox', title: 'Checkbox 多选框', group: '表单', element: 'el-checkbox', install: 'checkbox label', desc: '多选或勾选确认。' },
  { name: 'radio-group', title: 'RadioGroup 单选框', group: '表单', element: 'el-radio-group', install: 'radio-group label', desc: '互斥选项。' },
  { name: 'switch', title: 'Switch 开关', group: '表单', element: 'el-switch', install: 'switch label', desc: '即时生效的开关。' },
  { name: 'date-picker', title: 'DatePicker 日期选择', group: '表单', element: 'el-date-picker', install: 'button popover calendar', desc: '由 popover + calendar 组合而成。范围选择：React 用 mode="range"，Vue 用 range-calendar。' },
  { name: 'table', title: 'Table 表格', group: '数据展示', element: 'el-table', install: 'table badge', desc: '基础表格。排序、筛选、分页等需求用 TanStack Table 组合（data-table）。' },
  { name: 'pagination', title: 'Pagination 分页', group: '数据展示', element: 'el-pagination', install: 'pagination', desc: 'Vue 版自带页码计算；React 版是纯展示组件，页码需要自己计算。' },
  { name: 'progress', title: 'Progress 进度条', group: '数据展示', element: 'el-progress', install: 'progress', desc: '线形进度条。' },
  { name: 'skeleton', title: 'Skeleton 骨架屏', group: '数据展示', element: 'el-skeleton', install: 'skeleton', desc: '数据加载中的占位。' },
  { name: 'tabs', title: 'Tabs 标签页', group: '导航', element: 'el-tabs', install: 'tabs', desc: '同一页面内切换内容。' },
  { name: 'breadcrumb', title: 'Breadcrumb 面包屑', group: '导航', element: 'el-breadcrumb', install: 'breadcrumb', desc: '显示当前页面层级，后台布局顶栏已内置。' },
  { name: 'dropdown-menu', title: 'DropdownMenu 下拉菜单', group: '导航', element: 'el-dropdown', install: 'dropdown-menu button', desc: '表格行的“更多操作”等场景。' },
  { name: 'dialog', title: 'Dialog 对话框', group: '反馈', element: 'el-dialog', install: 'dialog button input label', desc: '弹窗表单、详情。' },
  { name: 'alert-dialog', title: 'AlertDialog 确认框', group: '反馈', element: 'ElMessageBox.confirm', install: 'alert-dialog button', desc: '删除等危险操作前的二次确认。' },
  { name: 'sheet', title: 'Sheet 抽屉', group: '反馈', element: 'el-drawer', install: 'sheet button', desc: '从侧边滑出的面板。' },
  { name: 'tooltip', title: 'Tooltip 文字提示', group: '反馈', element: 'el-tooltip', install: 'tooltip button', desc: '需要包在 TooltipProvider 内；后台布局已提供。' },
  { name: 'popover', title: 'Popover 弹出框', group: '反馈', element: 'el-popover', install: 'popover button', desc: '点击弹出任意内容。' },
  { name: 'sonner', title: 'Sonner 消息提示', group: '反馈', element: 'ElMessage / ElNotification', install: 'sonner button', desc: '全局消息。`<Toaster />` 在应用根部放一次，之后任意位置调用 toast()。' },
]

export const toPascal = (name: string) => name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('')
