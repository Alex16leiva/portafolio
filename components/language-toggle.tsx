"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-medium">
      {language === "en" ? "ES" : "EN"}
    </Button>
  )
}
