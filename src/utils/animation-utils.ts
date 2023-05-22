import { useEffect } from "react";

export function useScrollRevealEffect() {
  useEffect(() => {
    async function effect() {
      const ScrollReveal = (await import("scrollreveal")).default;
      ScrollReveal().reveal(".__scrollreveal", {
        delay: 200,
        distance: "100px",
      });
    }
    effect();
  });
}
