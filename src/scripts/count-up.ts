/**
 * Count-up animation helper.
 * Animates a numeric element from 0 to target using requestAnimationFrame.
 */

export function animateCountUp(
  element: HTMLElement,
  target: number,
  duration = 1500,
  suffix = ''
): void {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    element.textContent = `${target}${suffix}`;
    return;
  }

  const startTime = performance.now();

  const update = (currentTime: number): void => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(eased * target);

    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  };

  requestAnimationFrame(update);
}
