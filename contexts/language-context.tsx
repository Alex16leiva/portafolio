"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",

    // Hero
    fullStackDev: "Full Stack Developer",
    heroDescription:
      "Building scalable solutions with ASP.NET Core, React, and SQL Server. Focused on clean architecture, performance optimization, and delivering professional experiences.",
    viewProjects: "View Projects",
    getInTouch: "Get in Touch",

    // About
    aboutMe: "About Me",
    aboutP1:
      "I'm a Full Stack Developer from Honduras 🇭🇳 with a passion for building scalable, high-performance web applications. I specialize in creating robust backend systems with ASP.NET Core and intuitive frontend experiences with React.",
    aboutP2:
      "My approach centers around clean architecture, writing maintainable code, and optimizing every layer of the stack. I believe in the power of well-structured applications that scale effortlessly and deliver exceptional user experiences.",
    aboutP3:
      "Beyond coding, I focus on team collaboration, creating bilingual documentation, and streamlining workflows to help teams work more efficiently. I'm always exploring new technologies and best practices to stay at the forefront of modern development.",

    // Skills
    technicalExpertise: "Technical Expertise",
    backend: "Backend",
    frontend: "Frontend",
    toolsPractices: "Tools & Practices",

    // Projects
    featuredWork: "Featured Work",
    projectsSubtitle: "A selection of projects showcasing my expertise in full-stack development",
    helpdeskTitle: "Helpdesk System",
    helpdeskDesc:
      "Full-stack helpdesk application with comprehensive ticket management, JWT authentication, and SQL Server integration. Built with ASP.NET Core backend and React frontend.",
    reactTemplateTitle: "React Template",
    reactTemplateDesc:
      "Modular React template with Redux integration and custom hooks. A solid foundation for building scalable React applications with best practices built-in.",
    aspnetTemplateTitle: "ASP.NET Core Template",
    aspnetTemplateDesc:
      "Reusable foundation for ASP.NET Core projects featuring clean architecture, security best practices, and modular design. Perfect starting point for enterprise applications.",
    viewCode: "View Code",
    backend2: "Backend",
    frontend2: "Frontend",

    // Contact
    letsConnect: "Let's Connect",
    contactSubtitle: "I'm always open to discussing new projects, opportunities, or collaborations",
    contactDescription:
      "Whether you're looking for a developer, have a question, or just want to connect, I'd love to hear from you. Feel free to reach out through any of the channels below.",
    connectWithMe: "Connect with me",
    basedIn: "Based in Honduras 🇭🇳 • Open to remote opportunities",
  },
  es: {
    // Header
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",

    // Hero
    fullStackDev: "Desarrollador Full Stack",
    heroDescription:
      "Construyendo soluciones escalables con ASP.NET Core, React y SQL Server. Enfocado en arquitectura limpia, optimización de rendimiento y experiencias profesionales.",
    viewProjects: "Ver Proyectos",
    getInTouch: "Contactar",

    // About
    aboutMe: "Sobre Mí",
    aboutP1:
      "Soy un Desarrollador Full Stack de Honduras 🇭🇳 con pasión por construir aplicaciones web escalables y de alto rendimiento. Me especializo en crear sistemas backend robustos con ASP.NET Core y experiencias frontend intuitivas con React.",
    aboutP2:
      "Mi enfoque se centra en arquitectura limpia, escribir código mantenible y optimizar cada capa del stack. Creo en el poder de aplicaciones bien estructuradas que escalan sin esfuerzo y entregan experiencias de usuario excepcionales.",
    aboutP3:
      "Más allá del código, me enfoco en la colaboración en equipo, creación de documentación bilingüe y optimización de flujos de trabajo para ayudar a los equipos a trabajar más eficientemente. Siempre estoy explorando nuevas tecnologías y mejores prácticas para estar a la vanguardia del desarrollo moderno.",

    // Skills
    technicalExpertise: "Experiencia Técnica",
    backend: "Backend",
    frontend: "Frontend",
    toolsPractices: "Herramientas y Prácticas",

    // Projects
    featuredWork: "Proyectos Destacados",
    projectsSubtitle: "Una selección de proyectos que muestran mi experiencia en desarrollo full-stack",
    helpdeskTitle: "Sistema Helpdesk",
    helpdeskDesc:
      "Aplicación full-stack de helpdesk con gestión integral de tickets, autenticación JWT e integración con SQL Server. Construida con backend en ASP.NET Core y frontend en React.",
    reactTemplateTitle: "Plantilla React",
    reactTemplateDesc:
      "Plantilla React modular con integración Redux y hooks personalizados. Una base sólida para construir aplicaciones React escalables con mejores prácticas incorporadas.",
    aspnetTemplateTitle: "Plantilla ASP.NET Core",
    aspnetTemplateDesc:
      "Base reutilizable para proyectos ASP.NET Core con arquitectura limpia, mejores prácticas de seguridad y diseño modular. Punto de partida perfecto para aplicaciones empresariales.",
    viewCode: "Ver Código",
    backend2: "Backend",
    frontend2: "Frontend",

    // Contact
    letsConnect: "Conectemos",
    contactSubtitle: "Siempre estoy abierto a discutir nuevos proyectos, oportunidades o colaboraciones",
    contactDescription:
      "Ya sea que busques un desarrollador, tengas una pregunta o simplemente quieras conectar, me encantaría saber de ti. No dudes en comunicarte a través de cualquiera de los canales a continuación.",
    connectWithMe: "Conecta conmigo",
    basedIn: "Basado en Honduras 🇭🇳 • Abierto a oportunidades remotas",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["en"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
