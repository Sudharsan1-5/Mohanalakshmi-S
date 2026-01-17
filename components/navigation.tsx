"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Database } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Effect to handle glassmorphism on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-lg border-b border-border py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Professional Logo Icon */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-lg group-hover:rotate-12 transition-transform">
              <Database className="w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter font-sans">
              MS<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                asChild
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-transparent transition-all"
              >
                <a href={link.href}>{link.label}</a>
              </Button>
            ))}
            <div className="h-4 w-[1px] bg-border mx-2" />
            <Button size="sm" className="rounded-full px-5 font-bold text-xs uppercase tracking-widest">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full hover:bg-primary/10" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-background border-b border-border p-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full rounded-xl py-6 font-bold uppercase tracking-widest">
              <a href="#contact" onClick={() => setIsOpen(false)}>Hire Me</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}