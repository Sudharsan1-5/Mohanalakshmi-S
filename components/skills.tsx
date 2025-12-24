import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Database, BarChart3, Cloud, Lightbulb } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Data",
    icon: Code,
    skills: ["Python", "SQL", "Pandas", "NumPy"],
  },
  {
    title: "Machine Learning & Modeling",
    icon: Database,
    skills: ["scikit-learn", "Linear Regression", "Logistic Regression", "KNN", "Clustering", "EDA"],
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    skills: ["Power BI", "Matplotlib", "Seaborn", "Streamlit"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: ["GCP (Basics)", "Git", "Jupyter Notebook", "Control-M", "Excel"],
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: ["Analytical Thinking", "Problem Solving", "Collaboration"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="p-6 space-y-4 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
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
