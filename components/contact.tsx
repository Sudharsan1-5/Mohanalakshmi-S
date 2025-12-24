import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mohanalakshmi@email.com",
    href: "mailto:mohanalakshmi@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohanalakshmi",
    href: "https://linkedin.com/in/mohanalakshmi",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mohanalakshmi",
    href: "https://github.com/mohanalakshmi",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking entry-level Data Scientist and Data Analyst positions. Let's connect to discuss how I
            can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.label} className="p-5 hover:shadow-md transition-shadow">
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-medium text-foreground break-all group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="mailto:mohanalakshmi@email.com">
              <Mail className="w-4 h-4" />
              Send Email
            </a>
          </Button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mohanalakshmi S — Data Science Portfolio</p>
        </footer>
      </div>
    </section>
  )
}
