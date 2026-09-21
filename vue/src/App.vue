<script setup lang="ts">
import AdminLayout from "@/layout/AdminLayout.vue"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const ORDERS = [
  { id: 'A001', user: '张三', status: '已完成', tone: 'bg-success text-success-foreground' },
  { id: 'A002', user: '李四', status: '待审核', tone: 'bg-warning text-warning-foreground' },
  { id: 'A003', user: '王五', status: '处理中', tone: 'bg-info text-info-foreground' },
]
</script>

<template>
  <AdminLayout :breadcrumb="['业务中心', '订单管理']">
    <div class="space-y-6">
    <div class="flex flex-wrap gap-2">
      <Button>主要</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="outline">描边</Button>
      <Button variant="destructive">删除</Button>
      <Button class="bg-success text-success-foreground hover:bg-success/90">成功</Button>
      <Button class="bg-warning text-warning-foreground hover:bg-warning/90">警告</Button>
    </div>
    <Card>
      <CardHeader>
        <CardTitle>订单列表</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <Input placeholder="搜索订单号" />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>订单号</TableHead>
              <TableHead>用户</TableHead>
              <TableHead>状态</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="o in ORDERS" :key="o.id">
              <TableCell>{{ o.id }}</TableCell>
              <TableCell>{{ o.user }}</TableCell>
              <TableCell><Badge :class="o.tone">{{ o.status }}</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
    </AdminLayout>
</template>
