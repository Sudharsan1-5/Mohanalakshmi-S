import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Database, Activity, FileCheck } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-50/50 dark:bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">Professional Experience</h2>
          <div className="h-1.5 w-12 bg-primary rounded-full" />
        </div>

        <div className="relative">
          {/* Subtle Vertical Timeline Line */}
          <div className="absolute left-0 sm:left-[-20px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden sm:block" />

          <Card className="relative overflow-hidden border-none shadow-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
            
            <div className="p-6 sm:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                
                {/* Brand & Role */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    <Activity className="w-3 h-3" /> System Operations
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Graduate Engineer Trainee</h3>
                    <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">HCL Tech</p>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Sep 2022 – Jan 2025</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>Madurai, India</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack used in this job */}
                <div className="flex flex-wrap md:flex-col gap-2 min-w-[120px]">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase mb-1 hidden md:block">Tooling</span>
                  {["Control-M", "SQL", "L1.5 Support", "Production"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-100 dark:bg-zinc-800 text-[10px] py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Impact Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-muted-foreground">
                    <Database className="w-4 h-4" /> Data & Monitoring
                  </div>
                  <ul className="space-y-3">
                    <li className="text-sm leading-relaxed text-foreground/80 flex gap-2">
                      <span className="text-primary font-bold">→</span>
                      Managed mission-critical batch operations via Control-M, ensuring data pipeline integrity.
                    </li>
                    <li className="text-sm leading-relaxed text-foreground/80 flex gap-2">
                      <span className="text-primary font-bold">→</span>
                      Executed SQL-based validation to maintain 100% data accuracy for regulatory reporting.
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-muted-foreground">
                    <FileCheck className="w-4 h-4" /> Stability & Growth
                  </div>
                  <ul className="space-y-3">
                    <li className="text-sm leading-relaxed text-foreground/80 flex gap-2">
                      <span className="text-primary font-bold">→</span>
                      Sustained 24/7 system availability through L1.5 support and rapid incident analysis.
                    </li>
                    <li className="text-sm leading-relaxed text-foreground/80 flex gap-2">
                      <span className="text-primary font-bold">→</span>
                      Collaborated with L2/L3 teams to bridge the gap between raw data issues and business solutions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}