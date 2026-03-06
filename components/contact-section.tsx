import { Mail, Phone, Linkedin } from "lucide-react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mandar.kaware.3@gmail.com",
    href: "mailto:mandar.kaware.3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7030170707",
    href: "tel:+917030170707",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mandar Kaware",
    href: "https://www.linkedin.com/in/mandar-kaware-60a370187",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Contact</p>
        </div>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          {"Let's work together"}
        </h2>
        <p className="mb-16 max-w-lg text-lg leading-relaxed text-muted-foreground">
          {"Have a project in mind or want to discuss a collaboration? I'm always open to new opportunities and interesting challenges."}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <contact.icon size={20} />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">{contact.label}</p>
                <p className="text-sm font-semibold text-foreground">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Resume Download */}
        <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-foreground">Download My Resume</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Get a detailed overview of my experience, skills, and projects.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
