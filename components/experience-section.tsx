const experiences = [
  {
    period: "Sept 2025 - Present",
    role: "Unity Developer",
    company: "Exosphere Interactive, Mumbai",
    description: [
      "Developing a multiplayer game product from scratch",
      "Implementing scalable networking systems for real-time multiplayer environments",
      "Designing gameplay mechanics and player interactions",
      "Building modular and maintainable architecture for live operations",
      "Optimizing performance for real-time multiplayer environments",
    ],
    tech: ["Unity", "C#", "Multiplayer", "Networking", "Live Ops"],
  },
  {
    period: "Sept 2024 - June 2025",
    role: "Unity Developer",
    company: "Ibentos",
    description: [
      "Worked on Metaverse platforms and VR interaction systems",
      "Developed multiplayer experiences with real-time 3D interactivity",
      "Optimized applications for WebGL and mobile devices",
      "Implemented real-time 3D interactive gameplay systems",
    ],
    tech: ["Unity", "WebGL", "VR", "Metaverse", "Mobile"],
  },
  {
    period: "Feb 2022 - Sept 2024",
    role: "Associate Game Developer L1",
    company: "Awww",
    description: [
      "Developed gameplay systems and production-level game logic",
      "Implemented UI systems and game interaction patterns",
      "Worked on production-level Unity game development pipelines",
    ],
    tech: ["Unity", "C#", "Gameplay", "UI Systems"],
  },
  {
    period: "June 2021 - Jan 2022",
    role: "Game Developer",
    company: "MT Software Solutions",
    description: [
      "Developed casual mobile games including Ludo, Carrom, and runner games",
      "Implemented gameplay logic and UI systems",
      "Optimized mobile performance for a variety of devices",
    ],
    tech: ["Unity", "C#", "Android", "Mobile Games"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Experience</p>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Professional journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[140px] md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col gap-4 md:flex-row md:gap-0">
                {/* Period */}
                <div className="shrink-0 md:w-[140px] md:pr-8 md:text-right">
                  <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                </div>

                {/* Timeline dot */}
                <div className="relative hidden shrink-0 md:flex md:w-0">
                  <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
                </div>

                {/* Content */}
                <div className="rounded-xl border border-border bg-card p-6 md:ml-8 md:flex-1 transition-all hover:border-primary/40">
                  <h3 className="mb-1 text-lg font-bold text-foreground">{exp.role}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{exp.company}</p>
                  <ul className="mb-4 flex flex-col gap-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
