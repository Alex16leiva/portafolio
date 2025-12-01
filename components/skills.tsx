"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

const skillCategories = [
  {
    titleKey: "backend",
    skills: ["ASP.NET Core", "C#", "Entity Framework", "SQL Server", "RESTful APIs"],
  },
  {
    titleKey: "frontend",
    skills: ["React", "Redux", "JavaScript", "HTML", "CSS", "Responsive Design"],
  },
  {
    titleKey: "toolsPractices",
    skills: ["Git", "Clean Architecture", "Prompt Engineering", "Workflow Optimization", "Team Collaboration"],
  },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="container mx-auto px-4 py-20">
      <div className="max-w-6xl">
        <div className="mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">{t("skills")}</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t("technicalExpertise")}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.titleKey} className="border-border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">{t(category.titleKey)}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
