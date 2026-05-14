import { serviceCards } from "@/content/services";

const homeContent = {
  nav: {
    brand: "Rupture Technologies",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Metodología", href: "#arquitectura" },
      { label: "IA y Futuro", href: "#capacidades" },
      { label: "Cómo lo hacemos", href: "#como-lo-hacemos" },
      { label: "Casos de Éxito", href: "#contacto" },
    ],
    cta: { label: "Agendar consultoría", href: "#contacto" },
  },
  hero: {
    highlight1: "Automatiza ",
    title1: "tus procesos. ",
    highlight2: "Reduce ",
    title2: "errores. ",
    highlight3: "Toma  ",
    title3: "mejores decisiones. ",
    description:
      "Automatizamos procesos críticos con tecnología para reducir costos, errores y riesgos de negocio.",
    primaryCta: { label: "Agendar Consulta", href: "#contacto" },
    secondaryCta: { label: "Explorar Servicios", href: "#servicios" },
    video: {
      src: "/videos/hero-enterprise.mp4",
      alt: "Visualización abstracta de una red digital con nodos y geometría en tonos azules.",
    },
  },
  theProblem: {
    kicker: "El problema ",
    title:
      "Muchas empresas crecen, pero su operación se vuelve frágil y pierden control.",
    painPoints: [
      "Procesos manuales",
      "Información dispersa",
      "Retrabajo constante",
      "Riesgos de negocio (fiscal, operativo, financiero, etc.)",
    ],
    signals: [
      {
        value: "3x",
        label: "Más retrabajo cuando los procesos no están integrados.",
      },
      {
        value: "-28%",
        label:
          "Menos velocidad de respuesta al cliente en operaciones no integradas.",
      },
      {
        value: "+41%",
        label: "Incremento de errores por captura y validación manual.",
      },
    ],
  },
  architecture: {
    title: "La arquitectura de tu éxito",
    description:
      "Unimos visión estratégica con ejecución técnica impecable para construir ecosistemas digitales resilientes.",
    pillars: [
      {
        number: "01",
        title: "Consultoría estratégica",
        description:
          "Análisis profundo del modelo de negocio para identificar palancas de crecimiento exponencial.",
      },
      {
        number: "02",
        title: "Soluciones a Medida",
        description:
          "Desarrollo de ecosistemas digitales diseñados específicamente para resolver retos operativos complejos.",
      },
      {
        number: "03",
        title: "Enfoque de Negocios",
        description:
          "Nuestra tecnología no es el fin, sino el medio para alcanzar resultados financieros medibles.",
      },
    ],
  },
  howWeDoIt: {
    kicker: "La solución",
    title: "¿Cómo lo hacemos?",
    description:
      "Proporcionamos soluciones de valor agregado utilizando la tecnología como catalizador. Analizamos las necesidades de cada cliente, su mercado y sus objetivos para construir la mejor propuesta y llevar su operación hacia una transformación digital sostenible.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico estratégico",
        description:
          "Evaluamos contexto, procesos y oportunidades para definir una hoja de ruta clara y medible.",
      },
      {
        number: "02",
        title: "Propuesta de Alto Impacto",
        description:
          "Diseñamos una solución personalizada que equilibra visión de negocio, tecnología y ejecución.",
      },
      {
        number: "03",
        title: "Implementación y evolución",
        description:
          "Ejecutamos con acompañamiento continuo para asegurar adopción, resultados y mejora permanente.",
      },
    ],
  },
  about: {
    title: "¿Quiénes somos?",
    description:
      "Rupture Technologies es una empresa dedicada a la innovación digital, combinando estrategia y tecnología para impulsar el crecimiento de nuestros clientes.",
    subDescription:
      "Con un enfoque boutique, ofrecemos soluciones personalizadas que transforman organizaciones y generan valor real en el mercado.",
  },
  capabilities: {
    title: "Nuestros Servicios",
    items: serviceCards,
  },
  valueProposition: {
    title: "Conectamos estrategia, tecnología y ejecución.",
    description:
      "Nuestra metodología propietaria permite acortar la brecha entre la idea y el valor real de mercado, garantizando que cada inversión tecnológica tenga un retorno estratégico claro.",
    stats: [
      { value: "94%", label: "Retención de clientes" },
      { value: "120+", label: "Proyectos Ejecutados" },
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbI2QMEqyFGj2g0SYg90zyHfiWwDaK-LqOdRbPXw8KYP3WPTJhETtl1jkVnfvx51LQsFzFc3GosmZHz1FusWiNJlrFS2qdrBDgTD3-jb9-opT6eXB5brrilya0rUQZvQSj-5HmW4a3Yd4gjwHaRNh1sL6dAvTmashewUP-GMsJkoaaJHVsGlDvuok5NdVW1e9SJibBVniT3CdIU-N9KoBVA5p8TJtw--orP8u1cI9bn4AAWnHr10faVbpCOUoRDnwadONkNqRRnnk",
      alt: "Centro de datos con racks de servidores iluminados en azul.",
    },
  },
  trust: {
    logos: [
      {
        src: "/images/aliados/sforce.png",
        alt: "Logo de Smart Force",
        href: "https://smart-force.com/",
      },
      {
        src: "/images/aliados/cincel.png",
        alt: "Logo de Cincel",
        href: "https://www.cincel.digital/",
      },
      {
        src: "/images/aliados/buzone.png",
        alt: "Logo de Buzón E",
        href: "https://mibuzonreceptor.buzone.com.mx/cuentareceptora/portal/login.html#!/",
      },
      {
        src: "/images/aliados/s4b.png",
        alt: "Logo de Silent 4 Business",
        href: "https://silent4business.com/",
      },
    ],
  },
  masters: {
    kicker: "Equipo Directivo",
    title: "Liderazgo que ejecuta visión",
    description:
      "Dos perfiles complementarios dirigen cada iniciativa: estrategia de negocio y ejecución tecnológica de alto impacto.",
    items: [
      {
        name: "Mariana Rios",
        role: "Directora General",
        bio: "Lidera la visión comercial y la relación con clientes para convertir objetivos de negocio en hojas de ruta accionables.",
        focus: "Estrategia, crecimiento y alianzas.",
        urlImage: "/images/master-1.png",
      },
      {
        name: "Andres Velasco",
        role: "Director de Tecnología",
        bio: "Orquesta la arquitectura técnica y la implementación de soluciones digitales con enfoque en escalabilidad y resultados.",
        focus: "Arquitectura, automatización e innovación aplicada.",
        urlImage: "/images/master-2.png",
      },
    ],
  },
  footer: {
    brand: "Rupture Technologies",
    social: [
      { icon: "in", href: "#", label: "LinkedIn" },
      { icon: "ig", href: "#", label: "Instagram" },
      { icon: "fb", href: "#", label: "Facebook" },
    ],
    columns: [
      {
        title: "Compañía",
        links: [
          { label: "Cómo lo hacemos", href: "#como-lo-hacemos" },
          { label: "Servicios", href: "#servicios" },
          { label: "Metodología", href: "#arquitectura" },
          { label: "Casos", href: "#contacto" },
        ],
      },
      {
        title: "Estrategia",
        links: [
          { label: "IA Aplicada", href: "#capacidades" },
          { label: "Estructura IT", href: "#servicios" },
          { label: "Cómo lo hacemos", href: "#como-lo-hacemos" },
        ],
      },
    ],
    contact: {
      title: "Contacto Global",
      address: "HQ: Av. de la Innovación 450, Distrito Tecnológico.",
      email: "elizabeth@rupture-tech.com",
      phone: "+52 990 309 7476",
    },
    legalLinks: [
      { label: "Aviso de privacidad", href: "/legal/privacy" },
      { label: "Términos y Condiciones", href: "/legal/terms" },
      { label: "Política de Cookies", href: "/legal/cookies" },
    ],
  },
};

export default homeContent;
