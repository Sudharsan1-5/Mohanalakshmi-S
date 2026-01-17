import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, Send, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "monikasundar09@gmail.com",
    href: "mailto:monikasundar09@gmail.com",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mohanalakshmi-s-09m",
    href: "https://linkedin.com/in/mohanalakshmi-s-09m",
    color: "bg-sky-500/10 text-sky-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Monikakuti",
    href: "https://github.com/Monikakuti",
    color: "bg-slate-500/10 text-slate-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 82489 31923",
    href: "tel:8248931923",
    color: "bg-emerald-500/10 text-emerald-600",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-zinc-950/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side: Copywriting */}
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Hire
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Let's build <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">something data-driven.</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm looking for entry-level roles where I can apply my Python, SQL, and ML skills to solve real business problems.
            </p>

            <div className="pt-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-primary/20 transition-all gap-2">
                <a href="mailto:monikasundar09@gmail.com">
                  <Send className="w-5 h-5" /> Say Hello
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side: Contact Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.label} className="group p-1 border-none bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300">
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4"
                  >
                    <div className={`p-3 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Minimalist Footer */}
        <footer className="mt-32 pt-10 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl font-sans tracking-tighter">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-sm">M</div>
            Mohanalakshmi S.
          </div>
          
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </p>
          
          <div className="flex gap-6">
            <a href="#projects" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Resume</a>
          </div>
        </footer>
      </div>
    </section>
  )
}