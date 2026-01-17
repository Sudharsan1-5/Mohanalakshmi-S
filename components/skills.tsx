import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Code, Database, BarChart3, Cloud, Lightbulb, Terminal, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming & Data",
    icon: Code,
    skills: ["Python", "SQL", "Pandas", "NumPy"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    skills: ["scikit-learn", "Linear/Logistic Regression", "KNN", "Clustering", "EDA"],
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    skills: ["Power BI", "Matplotlib", "Seaborn", "Streamlit"],
    color: "from-orange-500 to-amber-400",
  },
  {
    title: "Cloud & DevTools",
    icon: Cloud,
    skills: ["GCP", "Git", "Control-M", "Jupyter", "Excel"],
    color: "from-emerald-500 to-teal-400",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5">
            Technical Proficiency
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight font-sans">Tech Stack & Methodology</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities in data extraction, modeling, and visualization.
          </p>
        </div>

        {/* Main Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.title} className="group relative p-8 overflow-hidden border-none bg-slate-50 dark:bg-zinc-900/50 hover:shadow-2xl transition-all duration-500">
                {/* Decorative Gradient Blob */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${category.color} opacity-[0.05] group-hover:opacity-10 rounded-full transition-opacity duration-500`} />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl tracking-tight">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 text-sm font-semibold border border-slate-200 dark:border-zinc-700 shadow-sm group-hover:border-primary/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Soft Skills "Insight" Bar */}
        <div className="p-8 rounded-3xl bg-primary/[0.03] border border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary rounded-full text-white">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Analytical Mindset</h4>
                <p className="text-sm text-muted-foreground">Core competencies that drive my technical work.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Analytical Thinking", "Problem Solving", "Collaboration", "Business Insights"].map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm font-bold text-primary/80 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                  <Terminal className="w-3 h-3" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}