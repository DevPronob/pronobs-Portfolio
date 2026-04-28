import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (element: HTMLElement, animation?: () => void) => {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      end: "top 20%",
      onEnter: () => {
        element.classList.add("animate-in");
        if (animation) animation();
      },
    },
  });
};

export const fadeInUp = (element: HTMLElement, delay = 0) => {
  gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay,
    ease: "power3.out",
  });
};

export const staggerAnimation = (elements: HTMLElement[], delay = 0.1) => {
  gsap.from(elements, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: delay,
    ease: "power2.out",
  });
};

export const scaleOnHover = (element: HTMLElement) => {
  if (!element) return;

  element.addEventListener("mouseenter", () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
};
