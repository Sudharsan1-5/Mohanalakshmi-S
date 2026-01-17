import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, CheckCircle2, BookOpen } from "lucide-react"

const certifications = [
  { name: "Google Cloud Platform (GCP)", issuer: "Google", status: "Completed" },
  { name: "Power BI Data Analysis", issuer: "GUVI", status: "Completed" },
  { name: "Data Science Professional", issuer: "GUVI", status: "In Progress" },
]

export function Education() {
  return (
    <section id="education" className="py-24 px-4 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Academic Foundation</h2>
          <p className="text-muted-foreground">Formal education and specialized industry certifications</p>
        </div>

        {/* Education Item */}
        <div className="relative">
           {/* Decorative corner element */}
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl hidden sm:block" />
          
          <Card className="p-8 border-none bg-slate-50 dark:bg-zinc-900/50 shadow-sm overflow-hidden relative group">
            <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
              <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">B.Tech in Information Technology</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold">JJ College of Engineering and Technology</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> 2018 – 2022</span>
                  <span className="hidden sm:block text-slate-300">|</span>
                  <span>Tiruchirappalli, India</span>
                </div>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4">
               <GraduationCap className="w-64 h-64" />
            </div>
          </Card>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold tracking-tight">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="relative p-5 border-slate-100 dark:border-zinc-800 hover:border-primary/50 transition-all group overflow-hidden">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge variant={cert.status === "In Progress" ? "outline" : "secondary"} className="text-[10px] uppercase font-bold tracking-tighter">
                      {cert.status}
                    </Badge>
                    {cert.status === "Completed" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-xs text-muted-foreground font-medium mt-1">— {cert.issuer}</p>
                  </div>
                </div>
                {/* Hover progress bar for "In Progress" item */}
                {cert.status === "In Progress" && (
                  <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full">
                    <div className="h-full bg-primary w-2/3 animate-pulse" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}