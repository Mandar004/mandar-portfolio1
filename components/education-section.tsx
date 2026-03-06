import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Game Design & Development",
    institution: "Anibrain School of Media Design",
  },
  {
    degree: "BE - Electronics & Telecommunication",
    institution: "Savitribai Phule Pune University",
  },
  {
    degree: "Diploma - Electronics & Telecommunication",
    institution: "Satara Polytechnic",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">
            Education
          </p>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Academic background
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <GraduationCap size={24} />
              </div>
              <h3 className="mb-2 text-sm font-bold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
