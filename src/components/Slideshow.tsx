import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Slide } from "../utils/parseData";
import { Controls } from "./Controls";
import { Header } from "./Header";
import { SlideView } from "./SlideView";
import { ThankYouView } from "./ThankYouView";
import styles from "./Slideshow.module.css";

type SlideshowProps = {
  title: string;
  slides: Slide[];
};

export function Slideshow({ title, slides }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const thankYouIndex = useMemo(
    () => slides.findIndex((s) => s.isThankYou),
    [slides],
  );
  const hasThankYou = thankYouIndex >= 0;
  const lastReasonIndex = hasThankYou ? thankYouIndex - 1 : slides.length - 1;

  const total = slides.length;
  const current = slides[index];
  const isThankYou = current?.isThankYou ?? false;
  const isLastReason = hasThankYou && index === lastReasonIndex;

  const goTo = useCallback(
    (next: number) => {
      if (next === index || next < 0 || next >= total) return;
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index, total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  const tryAdvance = useCallback(() => {
    if (isThankYou) return;
    goNext();
  }, [goNext, isThankYou]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isThankYou) {
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          goPrev();
        }
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        tryAdvance();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, tryAdvance, isThankYou]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) tryAdvance();
    else if (!isThankYou || index > 0) goPrev();
  };

  if (!current) {
    return (
      <div className={styles.shell}>
        <p className={styles.empty}>No slides found in data.md</p>
      </div>
    );
  }

  return (
    <div
      className={styles.shell}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <Header
        siteTitle={title}
        current={index + 1}
        total={total}
        label={isThankYou ? "Thank you" : "Slide"}
      />

      <main className={styles.stage} aria-live="polite">
        <AnimatePresence mode="wait" custom={direction}>
          {isThankYou ? (
            <ThankYouView
              key={current.number}
              slide={current}
              direction={direction}
            />
          ) : (
            <SlideView
              key={current.number}
              slide={current}
              direction={direction}
            />
          )}
        </AnimatePresence>
      </main>

      <Controls
        total={total}
        currentIndex={index}
        onSelect={goTo}
        onPrev={goPrev}
        onNext={goNext}
        canPrev={index > 0}
        canNext={!isThankYou && index < total - 1}
        nextLabel={isLastReason ? "Complete" : "Next"}
        hideNext={isThankYou}
      />

      <p className={styles.hint} aria-hidden="true">
        {isThankYou ? "Swipe back to revisit" : "Swipe or use arrow keys"}
      </p>
    </div>
  );
}
