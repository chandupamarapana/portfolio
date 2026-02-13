"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { Award, Users, Trophy } from "lucide-react"

const achievements = [
  {
    icon: Users,
    title: "IEEE Student Member",
    description:
      "Active member of the IEEE student branch, participating in technical events, workshops, and networking opportunities.",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    description:
      "Participated in multiple hackathons, developing innovative solutions under time constraints and collaborating with diverse teams.",
  },
  {
    icon: Award,
    title: "Leadership Roles",
    description:
      "Taken on leadership responsibilities in university clubs and project teams, coordinating efforts and mentoring peers.",
  },
]

export function AchievementsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="achievements"
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
            title="Achievements & Activities"
            subtitle="Extracurricular involvement and recognitions."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 ${
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
      </div>
    </section>
  )
}
