import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const ORDERS = [
  { id: "A001", user: "张三", amount: "¥ 320.00", status: "已完成", tone: "bg-success text-success-foreground" },
  { id: "A002", user: "李四", amount: "¥ 99.00", status: "待审核", tone: "bg-warning text-warning-foreground" },
  { id: "A003", user: "王五", amount: "¥ 1,280.00", status: "处理中", tone: "bg-info text-info-foreground" },
]

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>订单号</TableHead>
          <TableHead>用户</TableHead>
          <TableHead className="text-right">金额</TableHead>
          <TableHead>状态</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ORDERS.map((o) => (
          <TableRow key={o.id}>
            <TableCell>{o.id}</TableCell>
            <TableCell>{o.user}</TableCell>
            <TableCell className="text-right">{o.amount}</TableCell>
            <TableCell><Badge className={o.tone}>{o.status}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
