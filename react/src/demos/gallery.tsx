import { StrictMode, type ComponentType } from "react"
import { createRoot } from "react-dom/client"

import "@/index.css"

// 所有 React 示例的总览页，用于在浏览器里检查运行时是否正常
const demos = import.meta.glob<Record<string, ComponentType>>("./*-demo.tsx", { eager: true })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="mx-auto grid max-w-4xl gap-8 p-8">
      {Object.entries(demos).map(([path, mod]) =>
        Object.entries(mod).map(([name, Demo]) => (
          <section key={path} id={name} className="grid gap-3">
            <h2 className="text-sm font-medium text-muted-foreground">{name}</h2>
            <Demo />
          </section>
        )),
      )}
    </main>
  </StrictMode>,
)
