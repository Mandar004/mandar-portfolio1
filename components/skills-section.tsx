const skillCategories = [
  {
    title: "Gameplay Systems",
    skills: [
      { name: "Player Controllers", level: 95 },
      { name: "Combat Mechanics", level: 90 },
      { name: "Ability Systems", level: 88 },
      { name: "AI Behaviors", level: 85 },
      { name: "UI/UX Integration", level: 90 },
    ],
  },
  {
    title: "Multiplayer Networking",
    skills: [
      { name: "Photon PUN", level: 92 },
      { name: "Photon Fusion", level: 88 },
      { name: "Authoritative Server", level: 85 },
      { name: "Lag Compensation", level: 82 },
      { name: "Rollback Systems", level: 80 },
    ],
  },
  {
    title: "Performance Optimization",
    skills: [
      { name: "CPU/GPU Profiling", level: 90 },
      { name: "Memory Optimization", level: 88 },
      { name: "Asset Streaming", level: 85 },
      { name: "Draw Call Batching", level: 87 },
      { name: "Mobile/WebGL Optimization", level: 90 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Unity (URP/HDRP)", level: 95 },
      { name: "C#", level: 92 },
      { name: "XR SDKs", level: 85 },
      { name: "Git & Build Automation", level: 88 },
      { name: "Custom Editor Tools", level: 82 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Skills</p>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Technologies & expertise
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-6 font-mono text-sm font-bold tracking-widest text-primary uppercase">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
