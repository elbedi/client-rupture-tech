import LimitContainer from "@/components/common/LimitContainer.jsx";
import ServiceCapabilityCard from "@/components/common/ServiceCapabilityCard.jsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeCapabilitiesSection({ capabilities }) {
  const sectionRef = useRef(null);
  const titleWrapRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    window.ScrollTrigger = ScrollTrigger;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: titleWrapRef.current,
        start: "top 100px",
        endTrigger: sectionRef.current,
        end: "bottom 0",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    const cards = gsap.context(() => {
      cardRefs.current.forEach((cardEl) => {
        if (!cardEl) return;

        gsap.set(cardEl, { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)" });

        const cardTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: cardEl,
            start: "top 200px",
            end: () => `+=${Math.round(window.innerHeight * 1)}`,
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        cardTimeline
          .to(cardEl, {
            autoAlpha: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "none",
          })
          .to(cardEl, {
            autoAlpha: 0,
            y: -50,
            x: 50,
            scale: 0.92,
            filter: "blur(10px)",
            duration: 4,
            scrub: false,
            ease: "none",
          });
      });
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      cards.revert();
    };
  }, []);

  return (
    <section id="servicios" ref={sectionRef}>
      <div className="bg-surface-container pt-32 pb-50">
        <LimitContainer className="px-6 lg:px-8">
          <div ref={titleWrapRef} className="mb-20 text-center md:text-left">
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-primary uppercase">
              {capabilities.title}
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {capabilities.items.map((item, index) => (
              <div
                key={item.slug || item.title}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}>
                <ServiceCapabilityCard
                  slug={item.slug}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  urlImage={item.urlImage}
                />
              </div>
            ))}
          </div>
        </LimitContainer>
      </div>
    </section>
  );
}
