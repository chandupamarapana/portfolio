"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { GraduationCap, BookOpen } from "lucide-react"

const modules = [
  "Algorithms & Data Structures",
  "Object-Oriented Programming",
  "Concurrent Programming",
  "Database Systems",
  "Software Development Group Project",
  "Machine Learning & AI",
  "Web Design & Development",
  "Software Architecture",
]

export function EducationSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="education"
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
            title="Education"
            subtitle="Academic background and key coursework."
          />
        </div>

        <div
          className={`rounded-xl border border-border bg-card p-8 transition-all delay-200 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                BEng (Hons) Software Engineering
              </h3>
              <p className="mt-1 text-primary font-medium">
                Informatics Institute of Technology (IIT)
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Affiliated with the University of Westminster, UK
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                  Second Class Honours (Upper Division)
                </span>
                <span className="rounded-md bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                  2022 - 2026
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-foreground">
              <BookOpen className="h-4 w-4 text-primary" />
              <h4 className="font-semibold">Key Modules</h4>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {modules.map((mod, index) => (
                <div
                  key={mod}
                  className={`flex items-center gap-3 rounded-lg bg-secondary px-4 py-2.5 text-sm text-foreground transition-all duration-500 ${
                    isInView
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${300 + index * 75}ms` }}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {mod}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
