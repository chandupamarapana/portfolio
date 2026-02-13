"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Real-time Plywood Defect Detection",
    description:
      "AI-powered system for detecting and reasoning about defects in plywood surfaces in real-time using computer vision and deep learning techniques.",
    tech: ["Python", "Deep Learning", "Computer Vision", "TensorFlow"],
    github: "https://github.com/chandupamarapana",
  },
  {
    title: "GestureSway",
    description:
      "A hand gesture-based Snake game that uses computer vision to detect hand movements, allowing players to control the snake through gestures.",
    tech: ["Python", "OpenCV", "MediaPipe", "Pygame"],
    github: "https://github.com/chandupamarapana",
  },
  {
    title: "Thread-safe Exam Submission System",
    description:
      "A concurrent exam submission system built in Java, featuring thread-safe operations, proper synchronization, and reliable data handling.",
    tech: ["Java", "Multithreading", "Concurrency", "OOP"],
    github: "https://github.com/chandupamarapana",
  },
  {
    title: "Shopping Manager Console",
    description:
      "A desktop shopping management application with a graphical user interface built using Java Swing, featuring product management and user cart functionality.",
    tech: ["Java", "Swing", "OOP", "File I/O"],
    github: "https://github.com/chandupamarapana",
  },
  {
    title: "CricZone Website",
    description:
      "A cricket information and statistics website providing live scores, player stats, team rankings, and match schedules for cricket enthusiasts.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/chandupamarapana",
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      id="projects"
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
            title="Projects"
            subtitle="A selection of projects I've built and contributed to."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-md ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ExternalLink className="h-4 w-4" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
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
