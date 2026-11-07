"use client"

import React from "react"

import { ArrowDown, FileText, Mail } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 font-mono text-sm tracking-wider text-primary">
            {"Hello, I'm"}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="text-balance">Chandupa Marapana</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Software Engineer | Backend Java Developer
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Software Engineering graduate building backend systems for fintech at FortunaGlobal.
            Passionate about building complete end-to-end solutions across frontend and backend systems.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all delay-300 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            download = "chandupa-marapana-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <FileText className="h-4 w-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
