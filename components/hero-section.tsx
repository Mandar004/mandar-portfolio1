import Image from "next/image"
import { ArrowDown, FileText, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-full bg-primary/30 blur-md" />
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-primary/40 lg:h-64 lg:w-64">
            <Image
              src="/images/profile.png"
              alt="Mandar Kaware - Senior Unity Game Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center lg:text-left">
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Unity Game Developer
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Mandar Kaware
          </h1>
          <p className="mb-3 max-w-xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
            Multiplayer | Gameplay & AI Systems | C# | Metaverse | XR SDKs
          </p>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            4.7+ years of hands-on experience designing gameplay systems, multiplayer features, and performance-critical code across PC, mobile, WebGL, and XR platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <FileText size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { value: "4.7+", label: "Years Exp." },
              { value: "8+", label: "Games Published" },
              { value: "4+", label: "Platforms" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}
