import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 py-12 animate-in fade-in duration-700">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <Image src="/professional-headshot-woman-data-scientist.jpg" alt="Mohanalakshmi S" fill className="object-cover" priority />
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">Mohanalakshmi S</h1>
          <p className="text-xl sm:text-2xl text-primary font-medium">Entry-Level Data Scientist | Data Analyst</p>
        </div>

        {/* Value Statement */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Applying machine learning, data analysis, and visualization to deliver actionable business insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent">
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://linkedin.com/in/mohanalakshmi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/mohanalakshmi" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
