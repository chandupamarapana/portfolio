"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Server, Monitor, Database, Wrench } from "lucide-react"

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    skills: ["Java", "Spring Boot", "Spring MVC", "REST APIs", "Apache Tomcat", "Python", "Node.js"],
  },
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "JDBC"],
  },
  {
    icon: Wrench,
    title: "Tools & Concepts",
    skills: [
      "Git",
      "GitHub",
      "Agile/Scrum",
      "OOP",
      "Design Patterns",
      "CI/CD",
      "Docker",
      "Linux",
    ],
  },
]

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="skills"
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
            title="Skills"
            subtitle="Technologies and tools I work with."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border bg-secondary px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
