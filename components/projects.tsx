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
    <section id="projects" className="py-12 md:py-24 px-4 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Projects
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
            Swipe to explore my work — demonstrating capability through measurable outcomes
          </p>
        </div>

        {/* CAROUSEL LOGIC:
            - Mobile: flex-nowrap + overflow-x-auto (Carousel)
            - Desktop: lg:grid (Standard Grid)
        */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-8 snap-x snap-mandatory hide-scrollbar lg:grid lg:grid-cols-2 lg:gap-8 lg:pb-0 lg:overflow-visible">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="flex flex-col flex-none w-[85vw] sm:w-[60vw] lg:w-full snap-center h-full p-5 md:p-6 hover:shadow-md transition-shadow duration-300 border-border/50"
            >
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-3 leading-tight min-h-[3rem]">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="secondary" 
                      className="text-[10px] md:text-xs font-medium px-2 py-0"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.description.map((item, index) => (
                    <li key={index} className="flex gap-2 items-start leading-snug">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-6 mt-4 border-t border-border/40">
                <Button asChild size="sm" variant="outline" className="h-9 text-xs md:text-sm gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                
                {project.demo && project.demo !== "#" && (
                  <Button asChild size="sm" variant="outline" className="h-9 text-xs md:text-sm gap-2">
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

        {/* Mobile Swipe Indicator */}
        <div className="flex justify-center gap-1.5 mt-2 lg:hidden">
            {projects.map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
            ))}
        </div>
      </div>
    </section>
  )
}
