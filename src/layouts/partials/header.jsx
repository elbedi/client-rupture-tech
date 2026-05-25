import LimitContainer from "@/components/common/LimitContainer.jsx";
import { useEffect, useState } from "react";

const defaultLinks = [
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header({
  brand = "ELBEDI",
  brandHref = "/",
  links = defaultLinks,
  ctaLabel = "Agendar consultoría",
  ctaHref = "#contacto",
}) {
  const [activeHref, setActiveHref] = useState("");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHeaderPinnedTop, setIsHeaderPinnedTop] = useState(true);
  const [enableScrollHide, setEnableScrollHide] = useState(false);

  useEffect(() => {
    const sectionIds = links
      .map((item) => item.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));

    const sectionRatios = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        let nextSectionId = "";
        let maxRatio = 0;

        sectionRatios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            nextSectionId = id;
          }
        });

        setActiveHref(nextSectionId ? `#${nextSectionId}` : "");
      },
      {
        root: null,
        rootMargin: "-18% 0px -52% 0px",
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target) {
        sectionRatios.set(id, 0);
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 1023px)");
    let removeScrollListener = () => {};

    const bindMobileScroll = () => {
      let lastScrollY = window.scrollY;
      let ticking = false;
      const minDelta = 10;
      const topSafeZone = 48;

      const updateHeader = () => {
        const currentY = window.scrollY;
        const delta = currentY - lastScrollY;

        if (currentY <= topSafeZone) {
          setIsHeaderVisible(true);
          setIsHeaderPinnedTop(true);
          lastScrollY = currentY;
          ticking = false;
          return;
        }

        setIsHeaderPinnedTop(false);

        if (Math.abs(delta) >= minDelta) {
          setIsHeaderVisible(delta < 0);
          lastScrollY = currentY;
        }

        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateHeader);
          ticking = true;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    };

    const syncScrollMode = () => {
      removeScrollListener();
      setIsHeaderVisible(true);
      setIsHeaderPinnedTop(true);

      if (mobileMedia.matches) {
        setEnableScrollHide(true);
        removeScrollListener = bindMobileScroll();
        return;
      }

      setEnableScrollHide(false);
      removeScrollListener = () => {};
    };

    syncScrollMode();

    if (mobileMedia.addEventListener) {
      mobileMedia.addEventListener("change", syncScrollMode);
    } else {
      mobileMedia.addListener(syncScrollMode);
    }

    return () => {
      removeScrollListener();

      if (mobileMedia.removeEventListener) {
        mobileMedia.removeEventListener("change", syncScrollMode);
      } else {
        mobileMedia.removeListener(syncScrollMode);
      }
    };
  }, []);

  return (
    <div
      className={[
        "fixed top-2 z-50 w-full transform-gpu transition-transform duration-300 ease-out will-change-transform",
        enableScrollHide && !(isHeaderVisible || isHeaderPinnedTop)
          ? "translate-y-[-140%]"
          : "translate-y-0",
      ].join(" ")}>
      <LimitContainer>
        <header className="border-0 backdrop-blur-sm bg-slate-950/80 py-3 px-6 rounded-2xl shadow-xl">
          <nav>
            <div className="flex items-center justify-between">
              <a
                href={brandHref}
                title={`Ir al inicio de ${brand}`}
                className="flex gap-6 items-center text-slate-900 uppercase">
                <img
                  src="/images/isotipo.png"
                  alt="Rupture Technologies Isotipo"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-8 grayscale brightness-500"
                />
                <img
                  src="/images/text-logo.png"
                  alt="Rupture Technologies Logotipo"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-6 grayscale brightness-500 opacity-80 max-md:hidden"
                />
              </a>

              <div className="flex items-center gap-15">
                <ul
                  className=" items-center gap-10 flex max-lg:hidden"
                  aria-label="Navegación principal">
                  {links.map((item) => (
                    <li key={`${item.href}-${item.label}`}>
                      <a
                        href={item.href}
                        title={`Ir a ${item.label}`}
                        className={[
                          "font-headline text-sm font-bold tracking-tighter uppercase transition-colors duration-200",
                          activeHref === item.href
                            ? "border-b-2 border-sky-600 pb-1 text-sky-600"
                            : "text-slate-300 hover:text-slate-100",
                        ].join(" ")}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 lg:gap-6">
                  <a
                    title={ctaLabel}
                    data-open-contact-modal="true"
                    className="inline-flex items-center justify-center bg-sky-700 px-6 py-3 font-headline text-xs font-bold tracking-widest text-white uppercase transition-transform duration-300 hover:scale-95 cursor-pointer">
                    {ctaLabel}
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </LimitContainer>
    </div>
  );
}
