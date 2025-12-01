"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      titleKey: "helpdeskTitle",
      descriptionKey: "helpdeskDesc",
      tags: ["ASP.NET Core", "React", "SQL Server", "JWT"],
      links: [
        { labelKey: "backend2", url: "https://github.com/Alex16leiva/helpdesk-backend", icon: Github },
        { labelKey: "frontend2", url: "https://github.com/Alex16leiva/helpdesk-frontend", icon: Github },
      ],
    },
    {
      titleKey: "reactTemplateTitle",
      descriptionKey: "reactTemplateDesc",
      tags: ["React", "Redux", "JavaScript", "Hooks"],
      links: [{ labelKey: "viewCode", url: "https://github.com/Alex16leiva/react-template", icon: Github }],
    },
    {
      titleKey: "aspnetTemplateTitle",
      descriptionKey: "aspnetTemplateDesc",
      tags: ["ASP.NET Core", "C#", "Clean Architecture", "Security"],
      links: [{ labelKey: "viewCode", url: "https://github.com/Alex16leiva/aspnet-template", icon: Github }],
    },
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl">
        <div className="mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">{t("projects")}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t("featuredWork")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("projectsSubtitle")}</p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.titleKey} className="border-border bg-card p-6 transition-colors hover:bg-secondary/50">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold">{t(project.titleKey)}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t(project.descriptionKey)}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => {
                    const Icon = link.icon
                    return (
                      <Button key={link.labelKey} variant="outline" size="sm" asChild>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-4 w-4" />
                          {t(link.labelKey)}
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
