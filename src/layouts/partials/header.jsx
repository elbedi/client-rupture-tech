import LimitContainer from "@/components/common/LimitContainer.jsx";

const defaultLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({
  brand = "ELBEDI",
  brandHref = "#inicio",
  links = defaultLinks,
  ctaLabel = "Agendar Consultoria",
  ctaHref = "#contacto",
}) {
  return (
    <div className="fixed top-2 z-50 w-full">
      <LimitContainer>
        <header className="border-0 bg-slate-50/90 backdrop-blur-sm dark:bg-slate-950/80 py-4 px-8 rounded-2xl">
          <nav>
            <div className="flex items-center justify-between">
              <a
                href={brandHref}
                className="font-headline text-xl font-black tracking-tighter text-slate-900 uppercase dark:text-slate-50">
                <img
                  src="/images/isotipo.png"
                  alt="Rupture Technologies"
                  className="h-8 grayscale brightness-500"
                />
              </a>

              <ul
                className="hidden items-center gap-10 md:flex"
                aria-label="Navegacion principal">
                {links.map((item, index) => (
                  <li key={`${item.href}-${item.label}`}>
                    <a
                      href={item.href}
                      className={[
                        "font-headline text-sm font-bold tracking-tighter uppercase transition-colors duration-200",
                        index === 0
                          ? "border-b-2 border-sky-600 pb-1 text-sky-600 dark:border-sky-400 dark:text-sky-400"
                          : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
                      ].join(" ")}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 lg:gap-6">
                <span
                  className="material-symbols-outlined cursor-pointer text-slate-600 dark:text-slate-400"
                  aria-hidden="true">
                  language
                </span>
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center bg-sky-700 px-6 py-3 font-headline text-xs font-bold tracking-widest text-white uppercase transition-transform duration-300 hover:scale-95">
                  {ctaLabel}
                </a>
              </div>
            </div>
          </nav>
        </header>
      </LimitContainer>
    </div>
  );
}
