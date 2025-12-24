import { Card } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Professional Experience</h2>

        <Card className="p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold">Graduate Engineer Trainee</h3>
                </div>
                <p className="text-lg font-medium text-primary">HCL Tech</p>
              </div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Sep 2022 – Jan 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Madurai, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Contributions</h4>
              <ul className="space-y-3 text-foreground/90">
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Delivered L1.5 production support ensuring 24/7 system availability</span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Managed batch operations using Control-M</span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Performed SQL-based data validation and incident analysis</span>
                </li>
                <li className="flex gap-3 leading-relaxed">
                  <span className="text-primary mt-1.5">•</span>
                  <span>Prepared regulatory reports and collaborated with L2/L3 teams</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
