import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Database, BarChart3, Cloud, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Machine Learning",
    icon: Database,
    skills: ["scikit-learn", "Regression", "KNN"],
  },
  {
    title: "Visualization",
    icon: BarChart3,
    skills: ["Power BI", "Seaborn", "Streamlit"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["GCP", "Git", "Excel"],
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Analytical Thinking", "Problem Solving", "Collaboration", "Communication"],
    isFullWidth: true,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-6 md:py-20 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">Technical Skills</h2>
          <div className="h-1 w-10 bg-primary mx-auto rounded-full" />
        </div>

        {/* FORCED 2x2 GRID:
            - Changed 'grid-cols-1' to 'grid-cols-2' to force 2 columns on mobile.
            - Reduced 'gap-4' to 'gap-2' to save vertical space.
        */}
        <div className="grid grid-cols-2 gap-2 md:gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card 
                key={category.title} 
                className={`p-3 md:p-6 flex flex-col transition-all border-border/60
                  ${category.isFullWidth 
                    ? "col-span-2 bg-secondary/20 border-dashed mt-2" 
                    : "col-span-1 hover:border-primary/40"
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <div className={`p-1.5 rounded-md ${category.isFullWidth ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                    <Icon className="w-3.5 h-3.5 md:w-4 h-4" />
                  </div>
                  {/* Smaller font on mobile (text-xs) to prevent title wrapping */}
                  <h3 className="font-bold text-[11px] sm:text-sm md:text-base leading-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant={category.isFullWidth ? "secondary" : "outline"} 
                      className="text-[9px] md:text-[11px] font-medium px-1.5 py-0 leading-tight"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
