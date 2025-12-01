"use client"

import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="max-w-4xl">
        <div className="mb-12">
          <span className="text-sm font-medium uppercase tracking-wider text-primary">{t("aboutMe")}</span>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>{t("aboutP1")}</p>
          <p>{t("aboutP2")}</p>
          <p>{t("aboutP3")}</p>
        </div>
      </div>
    </section>
  )
}
