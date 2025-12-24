import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "monikasundar09@gmail.com",
    href: "mailto:monikasundar09@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8248931923",
    href: "tel:+918248931923",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohanalakshmi-s-09mi",
    href: "https://linkedin.com/in/mohanalakshmi-s-09m",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Monikakuti",
    href: "https://github.com/Monikakuti",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header - Tightened for mobile */}
        <div className="text-center space-y-3 mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto text-balance pt-2">
            I'm actively seeking entry-level Data Scientist and Analyst roles. 
            Let's discuss how my data expertise can help your team.
          </p>
        </div>

        {/* 2x2 Grid for Mobile, remains 2x2 for Tablet/Desktop */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-10">
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.label} className="p-4 md:p-6 hover:border-primary/50 transition-all group shadow-sm">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="text-[11px] md:text-sm font-medium text-foreground truncate md:whitespace-normal break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>

        {/* Main CTA - Full width on mobile */}
        <div className="text-center px-4">
          <Button asChild size="lg" className="w-full sm:w-auto gap-2 shadow-lg">
            <a href="mailto:mohanalakshmi@email.com">
              <Mail className="w-4 h-4" />
              Send a Direct Email
            </a>
          </Button>
        </div>

        {/* Footer - Consistent spacing */}
        <footer className="mt-20 pt-8 border-t border-border/60 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mohanalakshmi S
          </p>
          <p className="text-[10px] md:text-xs text-muted-foreground/60 mt-1 uppercase tracking-tighter">
            Data Science Portfolio • Built with Next.js & Tailwind
          </p>
        </footer>
      </div>
    </section>
  )
}
