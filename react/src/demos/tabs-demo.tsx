import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="basic" className="max-w-md">
      <TabsList>
        <TabsTrigger value="basic">基本信息</TabsTrigger>
        <TabsTrigger value="security">安全设置</TabsTrigger>
      </TabsList>
      <TabsContent value="basic" className="text-sm text-muted-foreground">这里是基本信息内容。</TabsContent>
      <TabsContent value="security" className="text-sm text-muted-foreground">这里是安全设置内容。</TabsContent>
    </Tabs>
  )
}
