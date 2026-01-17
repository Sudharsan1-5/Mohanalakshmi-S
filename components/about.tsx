import { Card } from "@/components/ui/card"
import { Quote, Sparkles, Target, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: The "Story" */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight font-sans inline-flex items-center gap-3">
                Profile <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full" />
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="relative">
                <Quote className="absolute -left-8 -top-4 w-8 h-8 opacity-10 text-primary" />
                I am an <span className="text-foreground font-bold">Entry-level Data Scientist</span> driven by the challenge of turning raw, chaotic data into structured, actionable business intelligence. My approach combines rigorous statistical modeling with a deep understanding of production environments.
              </p>

              <p>
                Having navigated the high-pressure world of <span className="text-foreground font-bold text-primary/80">IT Production Support at HCL Tech</span>, I developed a unique "data-first" mindset. I don't just build models; I ensure they are robust, validated, and aligned with real-world system constraints.
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
                <div className="flex -space-x-2">
                  {['Python', 'SQL', 'ML'].map((tag) => (
                    <div key={tag} className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-[10px] font-bold">
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium italic">Focused on end-to-end data lifecycles.</p>
              </div>
            </div>
          </div>

          {/* Right Side: "Fast Facts" Grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  icon: <Target className="w-5 h-5 text-blue-500" />, 
                  title: "Objective", 
                  desc: "Bridging the gap between raw data and business decisions." 
                },
                { 
                  icon: <Zap className="w-5 h-5 text-amber-500" />, 
                  title: "Mindset", 
                  desc: "Predictive modeling with production-level reliability." 
                }
              ].map((fact, i) => (
                <Card key={i} className="p-6 border-none bg-slate-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 shadow-sm hover:shadow-xl group">
                  <div className="flex gap-4">
                    <div className="mt-1 group-hover:scale-110 transition-transform">
                      {fact.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{fact.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{fact.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
              
              {/* Specialized Badge */}
              <div className="mt-4 p-6 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 flex items-center justify-between overflow-hidden relative">
                <div className="relative z-10">
                  <p className="text-xs uppercase font-black tracking-widest opacity-70">Current Focus</p>
                  <p className="text-lg font-bold">Scalable Analytics</p>
                </div>
                <Sparkles className="w-12 h-12 opacity-20 absolute -right-2 -bottom-2" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}