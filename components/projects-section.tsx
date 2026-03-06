import Image from "next/image"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AmulVerse",
    description:
      "Developed an interactive Metaverse platform in 3D with integrated 2D games for user engagement. The experience was built for both WebGL and mobile platforms, focusing on performance, interaction, and immersive storytelling.",
    image: "/images/Amulverse.jpg",
    tech: ["Unity", "C#", "Android", "IOS", "WebGL", "Metaverse", "Photon PUN", "Multiplayer"],
    link: "https://amulverse.com/signin/",
  },
  {
    title: "Kitchen On Wheels",
    description:
      "Kitchen On Wheels – The Ultimate Chef Game & Cooking Adventure! Step into the world of Kitchen On Wheels, the most exciting chef game for kids, teens, and cooking fans of all ages! This isn’t just another cooking game",
    image: "/images/kitchen.png",
    tech: ["Unity", "C#", "Android", "Mobile Optimization"],
    link: "https://play.google.com/store/apps/details?id=com.dnsgaming.kitchenonwheels",
  },
  {
    title: "SBiVerse",
    description:
      "Developed an engaging Metaverse experience for SBI Life, featuring multiplayer interactions and a 3D character customization (RPM) system. Integrated demo video modules for life insurance policy walkthroughs to enhance user understanding. Focused on immersive engagement and seamless user flow across virtual environments and interactive media.",
    image: "/images/sbi.png",
    tech: ["Unity", "C#", "Android", "IOS", "WebGL", "Metaverse", "Photon Fusion", "Multiplayer"],
    link: "https://lifeverse.sbilife.co.in/v1/",
  },
  {
    title: "CPR VR Training",
    description:
      "Developed a VR training module for CPR (Cardiopulmonary Resuscitation) certification, featuring realistic scenarios and interactive training exercises to improve skills in emergency response situations.",
    image: "/images/CPR.jpg",
    tech: ["Unity", "C#" , "VR", "Android"],
    link: "https://drive.google.com/file/d/1yFz6yfTQyvaRGgwVDLiBIvSM5489ZdJt/view?usp=drive_link",
  },
  {
    title: "AwwwKids AR Game",
    description:
      "Developed AR-powered flashcard games for kids, bringing stories like Ramayana, Hanuman, and Space exploration to life. Created interactive learning experiences with visual storytelling and audio narration to boost engagement and curiosity.",
    image: "/images/Awwkids.jpeg",
    tech: ["Unity", "Agora SDK", "WebRTC", "C#"],
    link: "#",
  },
  {
    title: "Pizza Rush World",
    description:
      "Welcome to Pizza Rush World, the ultimate food cooking & restaurant tycoon simulator where you take charge of your very own fast food empire! In this addictive offline cooking game, you’re not just a chef – you’re the manager, entrepreneur, and strategist who will turn a small pizza shop into a global fast food kingdom.",
    image: "/images/Pizza.png",
    tech: ["Unity", "C#", "Android", "Mobile Optimization"],
    link: "https://play.google.com/store/apps/details?id=com.dnsgaming.pizzarushworld",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <p className="font-mono text-sm tracking-widest text-primary uppercase">Projects</p>
        </div>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
          Featured work
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary/90 px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary"
                    aria-label={`View ${project.title}`}
                  >
                    View
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
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
    </section>
  )
}
