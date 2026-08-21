import { useEffect } from "react";

export function CelestialMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("main > section, main > .not-found"));
    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      root.style.setProperty("--hero-parallax", `${Math.min(window.scrollY * 0.06, 110)}px`);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    root.classList.add("motion-ready");
    targets.forEach((target) => target.classList.add("reveal-on-scroll"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-in-view");
      }),
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      targets.forEach((target) => target.classList.remove("reveal-on-scroll", "is-in-view"));
    };
  }, []);

  return null;
}
