import { url } from "astro:schema";

const homeContent = {
  nav: {
    brand: "Rupture Technologies",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Metodologia", href: "#arquitectura" },
      { label: "IA y Futuro", href: "#capacidades" },
      { label: "Como lo hacemos", href: "#como-lo-hacemos" },
      { label: "Casos de Exito", href: "#contacto" },
    ],
    cta: { label: "Agendar Consultoria", href: "#contacto" },
  },
  hero: {
    badge: "Estrategia Digital 2024",
    highlight: "Tecnología",
    title: "que mueve empresas hacia adelante.",
    description:
      "Soluciones de alto valor utilizando la tecnologia como catalizador para redefinir el futuro de su organizacion.",
    primaryCta: { label: "Agendar Consulta", href: "#contacto" },
    secondaryCta: { label: "Explorar Servicios", href: "#servicios" },
    video: {
      src: "/videos/hero-enterprise.mp4",
      alt: "Visualizacion abstracta de red digital con nodos y geometria en tonos azules.",
    },
  },
  architecture: {
    title: "La Arquitectura de su Exito",
    description:
      "Unimos vision estrategica con ejecucion tecnica impecable para construir ecosistemas digitales resilientes.",
    pillars: [
      {
        number: "01",
        title: "Consultoria Estrategica",
        description:
          "Analisis profundo del modelo de negocio para identificar palancas de crecimiento exponencial.",
      },
      {
        number: "02",
        title: "Soluciones a Medida",
        description:
          "Desarrollo de ecosistemas digitales disenados especificamente para resolver retos operativos complejos.",
      },
      {
        number: "03",
        title: "Enfoque de Negocios",
        description:
          "Nuestra tecnologia no es el fin, sino el medio para alcanzar resultados financieros medibles.",
      },
    ],
  },
  about: {
    title: "¿Quienes Somos?",
    description:
      "Rupture Technologies es una empresa dedicada a la innovación digital, combinando estrategia y tecnología para impulsar el crecimiento de nuestros clientes.",
    subDescription:
      "Con un enfoque boutique, ofrecemos soluciones personalizadas que transforman organizaciones y generan valor real en el mercado.",
  },
  capabilities: {
    title: "Nuestros Servicios",
    items: [
      {
        icon: "link",
        title: "Konektor",
        description:
          "Implementamos tecnologías emergentes como Inteligencia Artificial, Realidad Virtual y Aumentada, etc.",
        urlImage: "/images/services/vr.webp",
      },
      {
        icon: "campaign",
        title: "Marketing Digital",
        description:
          "Estrategias digitales para potenciar la presencia online y maximizar el alcance de su marca.",
        urlImage: "/images/services/marketing.webp",
      },
      {
        icon: "transform",
        title: "Transformacion Digital",
        description:
          "Modernizamos su legado tecnologico con arquitecturas escalables y procesos optimizados.",
        urlImage: "/images/services/digital-transform.webp",
      },
      {
        icon: "hub",
        title: "Integracion Tecnologica",
        description:
          "Conectamos sus sistemas dispersos en una infraestructura unica y coherente.",
        urlImage: "/images/services/digital-integration.webp",
      },
      {
        icon: "settings_suggest",
        title: "Automatizacion de Procesos",
        description:
          "Eliminamos fricciones operativas mediante flujos de trabajo inteligentes y automatizados.",
        urlImage: "/images/services/process-automatizacion.webp",
      },
      {
        icon: "psychology",
        title: "IA e Innovacion",
        description:
          "Implementacion de inteligencia artificial aplicada a la toma de decisiones criticas.",
        urlImage: "/images/services/ia.webp",
      },
      {
        icon: "query_stats",
        title: "Consultoria de Negocios",
        description:
          "Acompanamiento ejecutivo para alinear la hoja de ruta tecnologica con los KPI financieros.",
        urlImage: "/images/services/business.webp",
      },
    ],
  },
  valueProposition: {
    title: "Conectamos estrategia, tecnologia y ejecucion.",
    description:
      "Nuestra metodologia propietaria permite acortar la brecha entre la idea y el valor real de mercado, garantizando que cada inversion tecnologica tenga un retorno estrategico claro.",
    stats: [
      { value: "94%", label: "Retencion de Clientes" },
      { value: "120+", label: "Proyectos Ejecutados" },
    ],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbI2QMEqyFGj2g0SYg90zyHfiWwDaK-LqOdRbPXw8KYP3WPTJhETtl1jkVnfvx51LQsFzFc3GosmZHz1FusWiNJlrFS2qdrBDgTD3-jb9-opT6eXB5brrilya0rUQZvQSj-5HmW4a3Yd4gjwHaRNh1sL6dAvTmashewUP-GMsJkoaaJHVsGlDvuok5NdVW1e9SJibBVniT3CdIU-N9KoBVA5p8TJtw--orP8u1cI9bn4AAWnHr10faVbpCOUoRDnwadONkNqRRnnk",
      alt: "Centro de datos con racks de servidores iluminados en azul.",
    },
  },
  howWeDoIt: {
    kicker: "Metodo Rupture",
    title: "¿Como lo hacemos?",
    description:
      "Proporcionamos soluciones de valor agregado utilizando la tecnologia como catalizador. Analizamos las necesidades de cada cliente, su mercado y sus objetivos para construir la mejor propuesta y llevar su operacion hacia una transformacion digital sostenible.",
    steps: [
      {
        number: "01",
        title: "Diagnostico Estrategico",
        description:
          "Evaluamos contexto, procesos y oportunidades para definir una hoja de ruta clara y medible.",
      },
      {
        number: "02",
        title: "Propuesta de Alto Impacto",
        description:
          "Disenamos una solucion personalizada que equilibra vision de negocio, tecnologia y ejecucion.",
      },
      {
        number: "03",
        title: "Implementacion y Evolucion",
        description:
          "Ejecutamos con acompanamiento continuo para asegurar adopcion, resultados y mejora permanente.",
      },
    ],
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
        alt: "Logo de Buzon e",
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
    title: "Liderazgo que ejecuta vision",
    description:
      "Dos perfiles complementarios dirigen cada iniciativa: estrategia de negocio y ejecucion tecnologica de alto impacto.",
    items: [
      {
        name: "Mariana Rios",
        role: "Directora General",
        bio: "Lidera la vision comercial y la relacion con clientes para convertir objetivos de negocio en hojas de ruta accionables.",
        focus: "Estrategia, crecimiento y alianzas.",
        urlImage: "/images/master-1.png",
      },
      {
        name: "Andres Velasco",
        role: "Director de Tecnologia",
        bio: "Orquesta la arquitectura tecnica y la implementacion de soluciones digitales con enfoque en escalabilidad y resultados.",
        focus: "Arquitectura, automatizacion e innovacion aplicada.",
        urlImage: "/images/master-2.png",
      },
    ],
  },
  footer: {
    brand: "Rupture Technologies",
    description:
      "Arquitectura estrategica para la era digital. Transformamos organizaciones mediante la precision tecnica y la vision ejecutiva.",
    social: [
      { icon: "share", href: "#", label: "Compartir" },
      { icon: "alternate_email", href: "#", label: "Correo" },
    ],
    columns: [
      {
        title: "Compania",
        links: [
          { label: "Como lo hacemos", href: "#como-lo-hacemos" },
          { label: "Servicios", href: "#servicios" },
          { label: "Metodologia", href: "#arquitectura" },
          { label: "Casos", href: "#contacto" },
        ],
      },
      {
        title: "Estrategia",
        links: [
          { label: "IA Aplicada", href: "#capacidades" },
          { label: "Estructura IT", href: "#servicios" },
          { label: "Como lo hacemos", href: "#como-lo-hacemos" },
        ],
      },
    ],
    contact: {
      title: "Contacto Global",
      address: "HQ: Av. de la Innovacion 450, Distrito Tecnologico.",
      email: "hello@rupture.tech",
      phone: "+34 900 123 456",
    },
    legalLinks: [
      { label: "Aviso Legal", href: "#" },
      { label: "Privacidad", href: "#" },
      { label: "Cookies", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
};

export default homeContent;
