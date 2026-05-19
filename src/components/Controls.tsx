import styles from "./Controls.module.css";

type ControlsProps = {
  total: number;
  currentIndex: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  nextLabel?: string;
  hideNext?: boolean;
  locked?: boolean;
};

export function Controls({
  total,
  currentIndex,
  onSelect,
  onPrev,
  onNext,
  canPrev,
  canNext,
  nextLabel = "Next",
  hideNext = false,
  locked = false,
}: ControlsProps) {
  return (
    <footer className={styles.footer} data-locked={locked}>
      <nav className={styles.dots} aria-label="Slide navigation">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            className={styles.dot}
            data-active={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentIndex ? "step" : undefined}
            disabled={locked}
            onClick={() => onSelect(i)}
          />
        ))}
      </nav>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.ghost}
          onClick={onPrev}
          disabled={!canPrev}
          aria-label="Previous slide"
        >
          Prev
        </button>
        {!hideNext && (
          <button
            type="button"
            className={styles.ghost}
            onClick={onNext}
            disabled={!canNext}
            aria-label={nextLabel === "Complete" ? "Complete and view thank you" : "Next slide"}
          >
            {nextLabel}
          </button>
        )}
      </div>
    </footer>
  );
}
