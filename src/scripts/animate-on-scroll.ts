/**
 * Scroll reveal orchestrator.
 * Uses a single Intersection Observer to toggle `.is-visible` on
 * `.reveal` and `.reveal-child` elements.
 */

function initScrollReveal(): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const targets = document.querySelectorAll('.reveal, .reveal-child');

  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const revealIndex = el.dataset.revealIndex;
          if (revealIndex !== undefined) {
            el.style.setProperty('--reveal-index', revealIndex);
          }
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}
