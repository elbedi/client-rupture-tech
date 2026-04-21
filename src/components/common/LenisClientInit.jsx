import { useEffect } from "react";
import { initLenis } from "@/lib/lenis.js";

export default function LenisClientInit() {
  useEffect(() => {
    initLenis();
  }, []);

  return null;
}