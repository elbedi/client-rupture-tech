import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const revealGroups = [
  { selector: "[data-reveal='architecture-title'], [data-reveal='architecture-copy']", y: 24, stagger: 0.1 },
  { selector: "[data-reveal='pillar']", y: 36, stagger: 0.14 },
  { selector: "[data-reveal='philosophy-intro']", y: 24, stagger: 0 },
  { selector: "[data-reveal='step']", y: 32, stagger: 0.14 },
  { selector: "[data-reveal='masters-intro']", y: 24, stagger: 0 },
  { selector: "[data-reveal='master-card']", y: 36, stagger: 0.16 },
];

export default function HomeKeyAnimationsClient() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const heroElements = gsap.utils.toArray("[data-hero-load]");
      gsap.set(heroElements, { autoAlpha: 1, y: 0 });

      revealGroups.forEach((group) => {
        const elements = gsap.utils.toArray(group.selector);
        gsap.set(elements, { autoAlpha: 1, y: 0 });
      });
      return undefined;
    }

    const heroElements = gsap.utils.toArray("[data-hero-load]");
    let heroAnimated = false;

    const animateHeroOnLoad = () => {
      if (!heroElements.length || heroAnimated) {
        return;
      }

      heroAnimated = true;

      gsap.set(heroElements, { autoAlpha: 0, y: 24 });
      gsap.to(heroElements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.76,
        stagger: 0.16,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    if (document.readyState === "complete") {
      animateHeroOnLoad();
    } else {
      window.addEventListener("load", animateHeroOnLoad, { once: true });
    }

    const ctx = gsap.context(() => {
      revealGroups.forEach((group) => {
        const elements = gsap.utils.toArray(group.selector);
        if (!elements.length) return;

        gsap.set(elements, { autoAlpha: 0, y: group.y });

        ScrollTrigger.batch(elements, {
          start: "top 86%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              stagger: group.stagger,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener("load", animateHeroOnLoad);
      ctx.revert();
    };
  }, []);

  return null;
}
