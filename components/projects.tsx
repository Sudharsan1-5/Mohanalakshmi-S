import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Root Cause & Impact Analysis Dashboard",
    tools: ["Python", "SQL", "Power BI"],
    description: [
      "Built an interactive Power BI dashboard analyzing 5,000+ IT support tickets",
      "Engineered features such as resolution time and SLA breach indicators",
      "Identified trends that supported process optimization and SLA reduction",
    ],
    github: "https://github.com/mohanalakshmi/root-cause-analysis",
    demo: "#",
  },
  {
    title: "Retail Order Data Analysis",
    tools: ["Python", "SQL", "Streamlit"],
    description: [
      "Developed a retail sales analysis dashboard",
      "Extracted 20+ actionable business insights",
      "Identified seasonal demand patterns to support inventory planning",
    ],
    github: "https://github.com/mohanalakshmi/retail-analysis",
    demo: "#",
  },
  {
    title: "House Price Prediction (Linear Regression)",
    tools: ["Python", "scikit-learn"],
    description: [
      "Built a regression model with ~85% R²",
      "Performed data cleaning, EDA, and evaluation using MSE & RMSE",
      "Translated model results into pricing trend insights",
    ],
    github: "https://github.com/mohanalakshmi/house-price-prediction",
  },
  {
    title: "Wine Quality Prediction (KNN Regression)",
    tools: ["Python", "scikit-learn"],
    description: [
      "Implemented KNN regression with ~78% R²",
      "Applied preprocessing and normalization",
      "Delivered insights for quality control and feature influence",
    ],
    github: "https://github.com/mohanalakshmi/wine-quality-prediction",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Demonstrating capability through measurable outcomes
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 space-y-4 hover:shadow-lg transition-all">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-balance">{project.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.description.map((item, index) => (
                  <li key={index} className="flex gap-2 leading-relaxed">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2 pt-2">
                <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" variant="outline" className="gap-2 bg-transparent">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
