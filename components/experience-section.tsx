"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Building2, Calendar } from "lucide-react"

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  const responsibilities = [
    "Developed full stack features for enterprise healthcare systems using Java/Spring backend and modern frontend technologies",
    "Built and optimized RESTful APIs and microservice components for large-scale applications",
    "Worked across the entire stack: database design, backend services, API integration, and frontend components",
    "Collaborated in an Agile/Scrum environment with cross-functional development teams",
    "Utilized Git for version control and participated in code reviews, testing, and CI/CD workflows",
    "Wrote unit and integration tests to ensure software quality, reliability, and maintainability",
  ]

  return (
    <section
      id="experience"
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
            title="Experience"
            subtitle="Professional work experience and internships."
          />
        </div>

        <div
          className={`rounded-xl border border-border bg-card p-8 transition-all delay-200 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Software Engineer Intern
              </h3>
              <div className="mt-1 flex items-center gap-2 text-primary">
                <Building2 className="h-4 w-4" />
                <span className="font-medium">Cambio Software Engineering</span>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>June 2024 - June 2025</span>
            </div>
          </div>

          <ul className="mt-6 space-y-3">
            {responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Java", "Spring Framework", "React", "REST APIs", "Databases", "Full Stack", "Agile/Scrum", "Git"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
