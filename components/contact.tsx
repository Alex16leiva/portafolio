"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="container mx-auto px-4 py-20 pb-32">
      <div className="max-w-4xl">
        <div className="mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">{t("contact")}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t("letsConnect")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("contactSubtitle")}</p>
        </div>

        <Card className="border-border bg-card p-8">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold">{t("getInTouch")}</h3>
              <p className="leading-relaxed text-muted-foreground">{t("contactDescription")}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a href="https://github.com/Alex16leiva" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="text-sm font-medium">GitHub</div>
                    <div className="text-xs text-muted-foreground">@Alex16leiva</div>
                  </div>
                </a>
              </Button>

              <Button variant="outline" className="justify-start bg-transparent" asChild>
                <a
                  href="https://linkedin.com/in/alexander-castellanos-21684494"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="text-sm font-medium">LinkedIn</div>
                    <div className="text-xs text-muted-foreground">{t("connectWithMe")}</div>
                  </div>
                </a>
              </Button>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                <Mail className="mr-2 inline h-4 w-4" />
                {t("basedIn")}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
