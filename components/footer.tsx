import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/chandupamarapana",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/chandupamarapana/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:chandupamarapana@gmail.com",
    label: "Email",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {"Designed & Built by Chandupa Marapana"}
          </p>
          <p className="mt-1 text-xs text-muted-foreground/60">
            {`\u00A9 ${new Date().getFullYear()} All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
