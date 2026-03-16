// ============================================================
// ANIMATION PRESETS — GSAP reusable configs
// ============================================================

export const fadeInUp = {
  from: { y: 20, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
}

export const fadeInLeft = {
  from: { x: -20, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
}

export const fadeInRight = {
  from: { x: 40, opacity: 0 },
  to: { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
}

export const scaleIn = {
  from: { scale: 0.95, opacity: 0 },
  to: { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' },
}

export const timelineLineReveal = {
  from: { scaleY: 0, transformOrigin: 'top center' },
  to: {
    scaleY: 1,
    duration: 1,
    ease: 'none',
  },
}

export const staggerChildren = {
  stagger: 0.06,
}

export const scrollTriggerDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
}
