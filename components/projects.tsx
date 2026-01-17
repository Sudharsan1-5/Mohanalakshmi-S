import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, BarChart3, BrainCircuit, Database, LineChart } from "lucide-react"

const projects = [
  {
    title: "Root Cause & Impact Analysis",
    tools: ["Python", "SQL", "Power BI"],
    metric: "SLA Reduction",
    icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
    description: "Multi-dimensional analysis of 5k+ tickets. Engineered boolean flags for SLA breaches and performed temporal trend analysis to optimize resource allocation.",
    github: "https://github.com/mohanalakshmi/root-cause-analysis",
    demo: "#",
  },
  {
    title: "House Price Prediction",
    tools: ["Python", "scikit-learn", "Pandas"],
    metric: "0.85 R² Score",
    icon: <LineChart className="w-5 h-5 text-emerald-500" />,
    description: "Applied OLS regression and feature scaling. Conducted multicollinearity checks (VIF) and residual analysis to ensure model robustness and interpretability.",
    github: "https://github.com/mohanalakshmi/house-price-prediction",
  },
  {
    title: "Wine Quality Classification",
    tools: ["Python", "KNN", "Seaborn"],
    metric: "78% Accuracy",
    icon: <BrainCircuit className="w-5 h-5 text-purple-500" />,
    description: "Implemented K-Nearest Neighbors with Min-Max normalization. Used Elbow Method for optimal K-selection and analyzed feature importance for quality variance.",
    github: "https://github.com/mohanalakshmi/wine-quality-prediction",
  },
  {
    title: "Retail Order Analysis",
    tools: ["Python", "SQL", "Streamlit"],
    metric: "20+ Insights",
    icon: <Database className="w-5 h-5 text-orange-500" />,
    description: "ETL pipeline development for retail datasets. Derived seasonal decomposition and cohort analysis to drive inventory planning and customer retention.",
    github: "https://github.com/mohanalakshmi/retail-analysis",
    demo: "#",
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-start gap-2">
          <Badge variant="outline" className="border-primary/30 text-primary">Portfolio</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-sans">Featured Projects</h2>
          <p className="text-muted-foreground hidden md:block">Swipe or scroll to explore my analytical work.</p>
          <p className="text-sm text-primary font-medium md:hidden animate-pulse">← Swipe to view projects →</p>
        </div>

        {/* Carousel Container */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="min-w-[85%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(50%-12px)] snap-center"
            >
              <Card className="h-full flex flex-col border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white dark:bg-zinc-900 overflow-hidden relative group">
                {/* Visual Highlight */}
                <div className="h-1.5 w-full bg-muted group-hover:bg-primary transition-colors duration-500" />
                
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2.5 bg-slate-100 dark:bg-zinc-800 rounded-xl">
                      {project.icon}
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-tighter">
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 pt-2 border-t border-slate-100 dark:border-zinc-800">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                      {project.demo && (
                        <a 
                          href={project.demo} 
                          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" /> Insights
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}