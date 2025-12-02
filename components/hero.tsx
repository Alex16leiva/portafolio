"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        <div className="flex-1">
          <div className="mb-6 inline-block">
            <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {t("fullStackDev")}
            </span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Alexander Castellanos
          </h1>

          <p className="mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {t("heroDescription")}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                {t("viewProjects")} <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">{t("getInTouch")}</a>
            </Button>
          </div>
        </div>

        <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden border-2 border-border shadow-2xl flex-shrink-0">
          <Image
            src="/portafolio/images/alex1.jpg"
            alt="Alexander Castellanos - Full Stack Developer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
