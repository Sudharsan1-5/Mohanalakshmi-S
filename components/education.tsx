import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, CheckCircle2 } from "lucide-react"

export function Education() {
  const certifications = [
    { title: "Google Cloud Platform (GCP)", issuer: "Google" },
    { title: "Power BI", issuer: "GUVI" },
    { title: "Data Science", issuer: "GUVI", status: "Ongoing" }
  ]

  return (
    <section id="education" className="py-12 md:py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Education & Certifications</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Education Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">Academic Background</h3>
          </div>
          <Card className="p-5 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-lg md:text-xl font-bold leading-tight">B.Tech – Information Technology</h3>
                <p className="text-primary font-semibold text-sm md:text-base">JJ College of Engineering and Technology</p>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 text-[12px] md:text-sm text-muted-foreground bg-muted/50 sm:bg-transparent p-2 sm:p-0 rounded-md">
                <span className="font-medium text-foreground">2018 – 2022</span>
                <span className="hidden sm:block text-xs">Tiruchirappalli, India</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">Certifications</h3>
          </div>

          {/* Forced 2-column grid on mobile to match your Skills section style */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <Card key={cert.title} className="p-3 md:p-4 flex flex-col justify-between hover:shadow-md transition-all border-border/60">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-1" />
                    {cert.status && (
                      <Badge variant="outline" className="text-[9px] px-1 py-0 border-primary/30 text-primary">
                        {cert.status}
                      </Badge>
                    )}
                  </div>
                  <div>
                    <p className="text-[11px] md:text-sm font-bold leading-tight line-clamp-2">
                      {cert.title}
                    </p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
  )
}
