import { Gamepad2, Users, Glasses, Zap } from "lucide-react"

const highlights = [
  {
    icon: Gamepad2,
    title: "Gameplay Systems",
    description: "Player controllers, combat mechanics, ability systems, AI behaviors, and UI/UX gameplay integration.",
  },
  {
    icon: Users,
    title: "Multiplayer Networking",
    description: "Photon PUN, Photon Fusion, authoritative server architecture, lag compensation, and rollback systems.",
  },
  {
    icon: Glasses,
    title: "XR Development",
    description: "Building immersive VR/AR experiences across XR SDKs and Metaverse platforms.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "CPU/GPU profiling, memory optimization, asset streaming, draw call batching, and mobile/WebGL optimization.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">About Me</p>
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Passionate about building immersive experiences
        </h2>
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Unity Game Developer with 4.7+ years of hands-on experience designing and implementing
          gameplay systems, multiplayer features, and performance-critical code. Experienced in
          building immersive experiences across PC, mobile, WebGL, and XR platforms. Strong focus
          on gameplay feel, networking systems, and scalable architecture.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="mb-2 text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
