import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-10 pb-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 py-10 animate-in fade-in duration-700">
        
        {/* Profile Image - Slightly smaller on mobile to save space */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
          <Image 
            src="/professional-headshot-woman-data-scientist.jpg" 
            alt="Mohanalakshmi S" 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Name and Title - Adjusted font sizes for mobile */}
        <div className="space-y-2 md:space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
            Mohanalakshmi S
          </h1>
          <p className="text-lg sm:text-2xl text-primary font-semibold tracking-tight">
            Entry-Level Data Scientist <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> Data Analyst
          </p>
        </div>

        {/* Value Statement - Tightened line height and width */}
        <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance px-2">
          Applying machine learning, data analysis, and visualization to deliver actionable business insights.
        </p>

        {/* CTA Buttons - Strategic stacking for mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 px-6 sm:px-0">
          {/* Main Action - Full width on mobile */}
          <Button asChild size="lg" className="w-full sm:w-auto gap-2 shadow-md">
            <a href="#projects">View Projects</a>
          </Button>

          {/* Secondary Action - Full width on mobile */}
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto gap-2 bg-background/50">
            <a href="/Mohanalakshmi-S.pdf" download>
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>

          {/* Social Icons - Grouped row on mobile */}
          <div className="flex gap-3 mt-2 sm:mt-0">
            <Button asChild size="icon" variant="outline" className="h-11 w-11 rounded-full">
              <a href="https://linkedin.com/in/mohanalakshmi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="outline" className="h-11 w-11 rounded-full">
              <a href="https://github.com/mohanalakshmi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on very small screens to avoid overlap */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </div>
    </section>
  )
}
