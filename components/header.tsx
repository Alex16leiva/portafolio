"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          {"AC"}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t("about")}
          </a>
          <a href="#skills" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t("skills")}
          </a>
          <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t("projects")}
          </a>
          <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/Alex16leiva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/alexander-castellanos-21684494"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
