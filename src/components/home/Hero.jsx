import { useEffect, useRef } from "react";
import SectionContainer from "@/components/common/SectionContainer.jsx";
import LimitContainer from "@/components/common/LimitContainer.jsx";
import Button from "@/components/ui/Button.jsx";
import { fadeUp } from "@/lib/animations.js";

export default function HeroBasic() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    fadeUp(headingRef.current, { delay: 0.1 });
    fadeUp(subRef.current, { delay: 0.3 });
    fadeUp(ctaRef.current, { delay: 0.5 });
  }, []);

  return (
    <>
      <SectionContainer>
        <LimitContainer></LimitContainer>
      </SectionContainer>
    </>
  );
}