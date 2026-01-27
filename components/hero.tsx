"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Download, ChevronDown, Binary, Terminal } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      
      {/* 1. Background "Data" Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 opacity-[0.03] rotate-12 hidden md:block">
          <Binary size={120} />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-[0.03] -rotate-12 hidden md:block">
          <Terminal size={120} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        
        {/* 2. Profile Image with Animated Ring */}
        <div className="relative w-40 h-40 mx-auto group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-600 animate-spin-slow opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative w-36 h-36 mx-auto mt-2 rounded-full overflow-hidden border-4 border-white dark:border-zinc-950 shadow-2xl">
            <Image 
              src="/Mohanalakshmi photo.jpeg" 
              alt="Mohanalakshmi S" 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              priority 
            />
          </div>
        </div>

        {/* 3. Name & Dynamic Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for New Opportunities
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-foreground font-sans italic">
            MOHANALAKSHMI S.
          </h1>
          
          <p className="text-xl sm:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-primary animate-gradient-x">
            Data Scientist & Analyst
          </p>
        </div>

        {/* 4. Refined Value Statement */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance font-medium">
          Transforming complex datasets into <span className="text-foreground border-b-2 border-primary/30">actionable intelligence</span> through Machine Learning and Statistical Engineering.
        </p>

        {/* 5. High-Impact CTA Buttons */}
<div className="flex flex-wrap items-center justify-center gap-4 pt-6">
  <Button asChild size="xl" className="rounded-full px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
    <a href="#projects">Explore Projects</a>
  </Button>
  
  <Button
    asChild
    size="xl"
    variant="outline"
    className="rounded-full px-8 bg-background/50 backdrop-blur-sm border-2 hover:bg-primary/5 transition-all"
  >
    <a
      href="/resume/Mohanalakshmi-S.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Download className="w-4 h-4 mr-2" />
      View Resume
    </a>
  </Button>

  {/* Social Icons with Tooltips */}
  <div className="flex gap-2 ml-2">
    {[
      { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/mohanalakshmi-s-09m" },
      { icon: <Github className="w-5 h-5" />, href: "https://github.com/Monikakuti" }
    ].map((social, i) => (
      <Button key={i} asChild variant="ghost" size="icon" className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary transition-colors">
        <a href={social.href} target="_blank" rel="noopener noreferrer">{social.icon}</a>
      </Button>
    ))}
  </div>
</div>


        {/* 6. Professional Scroll Indicator */}
        <div className="absolute bottom-[-10vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  )
}