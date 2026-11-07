"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Rocket } from "lucide-react"

const currentWork = [
  {
    title: "Backend Development at FortunaGlobal",
    description:
      "Building and maintaining backend features for financial systems with Java, Spring MVC, and MySQL, and learning fintech workflows like transaction processing and reconciliation.",
  },
  {
    title: "Expanding Full-Stack Skills",
    description:
      "Learning modern frontend frameworks and cloud deployment to become a more well-rounded software engineer.",
  },
  {
    title: "Open Source Contributions",
    description:
      "Contributing to open-source projects and building personal projects to strengthen my portfolio.",
  },
]

export function CurrentlyWorkingSection() {
  const { ref, isInView } = useInView()

  return (
    <section
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
            title="Currently Working On"
            subtitle="What I'm focused on right now."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {currentWork.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Rocket className="h-4 w-4" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
