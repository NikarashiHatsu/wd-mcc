import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "~/hooks/useReducedMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
}

function isInViewport(el: HTMLElement, threshold = 0.92) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * threshold && rect.bottom > 0;
}

export function Reveal({ children, className, delay = 0, y = 40, stagger }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !ref.current) return;

      const el = ref.current;
      const targets = el.children.length ? el.children : el;
      const staggerValue = stagger ?? 0.1;

      gsap.set(targets, { opacity: 1, y: 0 });

      if (isInViewport(el)) {
        gsap.fromTo(
          targets,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay,
            stagger: staggerValue,
            ease: "power3.out",
          },
        );
        return;
      }

      gsap.set(targets, { opacity: 0, y });

      const tween = gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        stagger: staggerValue,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      if (tween.scrollTrigger?.isActive) {
        tween.progress(1);
      }
    },
    { scope: ref, dependencies: [reducedMotion, delay, y, stagger], revertOnUpdate: true },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
