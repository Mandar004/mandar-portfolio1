import {
  Gamepad2,
  Wifi,
  Gauge,
  Wrench,
} from "lucide-react"

const techGroups = [
  {
    icon: Gamepad2,
    category: "Gameplay Systems",
    items: [
      "Player Controllers",
      "Combat Mechanics",
      "Ability Systems",
      "AI Behaviors",
      "UI/UX Integration",
    ],
  },
  {
    icon: Wifi,
    category: "Multiplayer Networking",
    items: [
      "Photon PUN",
      "Photon Fusion",
      "Authoritative Server",
      "Lag Compensation",
      "Rollback Systems",
    ],
  },
  {
    icon: Gauge,
    category: "Performance Optimization",
    items: [
      "CPU/GPU Profiling",
      "Memory Optimization",
      "Asset Streaming",
      "Draw Call Batching",
      "Mobile/WebGL Optimization",
    ],
  },
  {
    icon: Wrench,
    category: "Tools & Technologies",
    items: [
      "Unity (URP/HDRP)",
      "C#",
      "XR SDKs",
      "Git",
      "Custom Inspectors",
      "Build Automation",
    ],
  },
]

export function TechnologiesSection() {
  return (
    <section id="technologies" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Technologies
          </p>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Core expertise at a glance
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group) => (
            <div
              key={group.category}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <group.icon size={24} />
              </div>
              <h3 className="mb-4 text-sm font-bold text-foreground">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
