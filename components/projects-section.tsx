"use client"

import React from "react"

import { useInView } from "@/hooks/use-in-view"
import { SectionHeading } from "@/components/section-heading"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ExternalLink, FileText, Github, Globe, Lock, PlayCircle } from "lucide-react"

type Project = {
  title: string
  badge?: { label: string; tone: "live" | "development" | "neutral" }
  description: string
  tech: string[]
  live?: { url: string; tooltip: string }
  video?: { url: string; tooltip: string }
  github?: string
  thesis?: string
  privateRepo?: boolean
}

const badgeDotClass = {
  live: "bg-emerald-500",
  development: "bg-amber-500",
  neutral: "bg-primary",
}

const projects: Project[] = [
  {
    title: "Plywood Factory Inventory Management System",
    badge: { label: "Live · In production", tone: "live" },
    description:
      "A multi-tenant inventory system built for and used daily by Sri Lankan plywood factories. Tracks consumable stock such as gum bags and chemicals, with supplier logging and end-of-day usage, and manages engineering tools through a borrow/return system that records who has what. Includes JWT-secured login, company-isolated data, Excel cost reports with date-range filtering, and low-stock alerts.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "Tailwind CSS", "MySQL"],
    live: { url: "https://plywood-inventory.vercel.app/login", tooltip: "Web app (client login)" },
    video: { url: "https://youtu.be/FbKYL7-cURU", tooltip: "Watch video demo" },
    privateRepo: true,
  },
  {
    title: "LogMaster - Log Delivery Billing System",
    badge: { label: "Live · Client project", tone: "live" },
    description:
      "Replaces pen-and-paper log delivery billing for a Sri Lankan timber business, cutting a 1-2 hour manual process per delivery down to minutes. Buyers enter each log's circumference on a calculator-style Android app, and the system calculates cubic feet (C² × L / 2304), sorts logs into size categories, applies per-category pricing, and generates a PDF invoice. Office staff review deliveries and download invoices from a React web dashboard. All billing math uses BigDecimal to avoid rounding errors.",
    tech: ["Java", "Spring Boot", "JWT", "MySQL", "React Native", "Expo", "React", "iText", "Docker"],
    live: { url: "https://logmaster.vercel.app", tooltip: "Web dashboard (client login)" },
    privateRepo: true,
  },
  {
    title: "Payroll & Attendance System",
    badge: { label: "In development · Client project", tone: "development" },
    description:
      "An offline-first payroll and attendance platform for two Sri Lankan plywood factories, replacing paper sign-in sheets and manual Excel payroll. Employees clock in with RFID cards at a gate terminal, and a rules engine classifies each day as a full day, half day, absence, or overtime (counted in 15-minute steps) before calculating salary, EPF/ETF, advances, and take-home pay. Role-based access keeps sensitive pay data visible only to the owner, every manual override is logged with a reason, and approved months can be locked. Built as a team; I led client requirements and specification.",
    tech: ["Java", "JavaFX", "Spring Boot", "PostgreSQL", "React", "TypeScript", "Hibernate", "JUnit"],
    privateRepo: true,
  },
  {
    title: "Pearl Gro - Agri-Investment Platform Website",
    badge: { label: "Live · Client project", tone: "live" },
    description:
      "A team project building the official website for Pearl Gro, a controlled-environment greenhouse farming venture in Sri Lanka. The site presents the company's vision, project sites, export crops, and investment opportunities, and includes a live investor slot tracker, a crop catalogue, an embedded project video, an FAQ, and an investor interest registration flow. Built with Next.js using optimised images and a multi-page layout covering investment, products, education, careers, and partners.",
    tech: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Team Project"],
    live: { url: "https://pearlgro.com", tooltip: "Visit live site" },
  },
  {
    title: "Wild Cafe Ella - Restaurant Website",
    badge: { label: "Live · Client project", tone: "live" },
    description:
      "A responsive website for Wild Cafe Ella, a jungle-style café in Ella, Sri Lanka, rated 4.9 on Google with 400+ reviews. The site showcases the café's Sri Lankan dishes, full menu, story, and contact details, with click-to-call, social media links, and opening hours so tourists can quickly find and reach the café. Built to load fast and look good on mobile, since most visitors browse while travelling.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    live: { url: "https://wildcafesl.com", tooltip: "Visit live site" },
  },
  {
    title: "DefectIQ - Real-time Plywood Defect Detection",
    badge: { label: "Final year thesis", tone: "neutral" },
    description:
      "Final year thesis. A real-time dual-view computer vision system that detects post-manufacturing plywood defects (bubbling, delamination, warping, surface imprints, missing face). YOLOv8-seg isolates the board, an EfficientNet-B2 + AlexNet ensemble classifies top and side views, and a knowledge base maps each defect to its manufacturing cause and a corrective recommendation. Achieved 96.3% Top-2 accuracy on a 619-image factory dataset I published on Kaggle.",
    tech: ["Python", "PyTorch", "YOLOv8", "EfficientNet-B2", "Flask", "React"],
    github: "https://github.com/chandupamarapana",
    thesis: "/defectiq-thesis.pdf",
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
  // {
  //   title: "Shopping Manager Console",
  //   description:
  //     "A desktop shopping management application with a graphical user interface built using Java Swing, featuring product management and user cart functionality.",
  //   tech: ["Java", "Swing", "OOP", "File I/O"],
  //   github: "https://github.com/chandupamarapana",
  // },
  // {
  //   title: "CricZone Website",
  //   description:
  //     "A cricket information and statistics website providing live scores, player stats, team rankings, and match schedules for cricket enthusiasts.",
  //   tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  //   github: "https://github.com/chandupamarapana",
  // },
]

function IconLink({
  href,
  label,
  tooltip,
  children,
}: {
  href: string
  label: string
  tooltip: string
  children: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={label}
        >
          {children}
        </a>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

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

        <TooltipProvider delayDuration={150}>
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
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-3">
                    {project.live && (
                      <IconLink
                        href={project.live.url}
                        label={`${project.title}: ${project.live.tooltip} (opens in a new tab)`}
                        tooltip={project.live.tooltip}
                      >
                        <Globe className="h-5 w-5" />
                      </IconLink>
                    )}
                    {project.video && (
                      <IconLink
                        href={project.video.url}
                        label={`${project.title}: ${project.video.tooltip} (opens in a new tab)`}
                        tooltip={project.video.tooltip}
                      >
                        <PlayCircle className="h-5 w-5" />
                      </IconLink>
                    )}
                    {project.thesis && (
                      <IconLink
                        href={project.thesis}
                        label={`Read the ${project.title} thesis (PDF, opens in a new tab)`}
                        tooltip="Read thesis"
                      >
                        <FileText className="h-5 w-5" />
                      </IconLink>
                    )}
                    {project.privateRepo ? (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                        Private client repo
                      </span>
                    ) : (
                      project.github && (
                        <IconLink
                          href={project.github}
                          label={`View ${project.title} on GitHub (opens in a new tab)`}
                          tooltip="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </IconLink>
                      )
                    )}
                  </div>
                </div>

                {project.badge && (
                  <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${badgeDotClass[project.badge.tone]}`}
                      aria-hidden="true"
                    />
                    {project.badge.label}
                  </span>
                )}
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
        </TooltipProvider>
      </div>
    </section>
  )
}
