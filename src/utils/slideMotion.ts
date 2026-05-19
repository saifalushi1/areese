export const slideEase = [0.22, 1, 0.36, 1] as const;

export const slideTransition = {
  duration: 0.4,
  ease: slideEase,
};

/** direction 1 = next (swipe left), -1 = previous (swipe right) */
export function slideMotion(direction: number) {
  const enterX = direction >= 0 ? "8%" : "-8%";
  const exitX = direction >= 0 ? "-8%" : "8%";

  return {
    initial: { opacity: 0, x: enterX },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: exitX },
  };
}
