import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function Education() {
  const certifications = ["Google Cloud Platform (GCP) – Google", "Power BI – GUVI", "Data Science – GUVI (Ongoing)"]

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-balance">Education & Certifications</h2>

        {/* Education */}
        <Card className="p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-xl font-semibold">B.Tech – Information Technology</h3>
              <p className="text-lg text-primary font-medium">JJ College of Engineering and Technology</p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>2018 – 2022</span>
                <span>•</span>
                <span>Tiruchirappalli, India</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Certifications */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <Card key={cert} className="p-4 hover:shadow-md transition-shadow">
                <p className="text-sm leading-relaxed">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
