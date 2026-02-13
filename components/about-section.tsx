"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Code2, Server, Briefcase } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView()

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Expertise across the entire stack—frontend frameworks like React, backend services with Java/Spring, databases, and everything in between.",
    },
    {
      icon: Server,
      title: "Backend & APIs",
      description:
        "Building scalable, reliable backend services, REST APIs, microservices, and enterprise systems with modern architectural patterns.",
    },
    {
      icon: Briefcase,
      title: "Industry Experience",
      description:
        "Real-world experience as a Software Engineer Intern at Cambio Software Engineering, working on production healthcare systems.",
    },
  ]

  return (
    <section
      id="about"
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
            title="About Me"
            subtitle="A quick overview of who I am and what I do."
          />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-md ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-10 rounded-xl border border-border bg-card p-8 transition-all delay-500 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="leading-relaxed text-muted-foreground">
            {"I'm a Software Engineering undergraduate at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster. I'm a full stack developer who enjoys building complete solutions—from responsive frontends to robust backend systems. I'm passionate about solving complex problems and creating applications that are user-friendly, maintainable, and scalable. Through my internship at Cambio Software Engineering, I've gained hands-on experience working on production enterprise healthcare systems in an Agile environment."}
          </p>
        </div>
      </div>
    </section>
  )
}
