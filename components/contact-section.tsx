"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "chandupamarapana@gmail.com",
    href: "mailto:chandupamarapana@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Chandupa Marapana",
    href: "https://www.linkedin.com/in/chandupamarapana/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "chandupamarapana",
    href: "https://github.com/chandupamarapana",
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:chandupamarapana@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink, "_blank")
  }

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a question or want to work together? Feel free to reach out."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact links */}
          <div
            className={`space-y-4 transition-all delay-200 duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <link.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium text-foreground">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 rounded-xl border border-border bg-card p-6 transition-all delay-300 duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
