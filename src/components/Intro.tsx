import { useLoopingTypewriter } from "../hooks/useLoopingTypewriter";
import { TypewriterText } from "./TypewriterText";
import styles from "./Intro.module.css";

type IntroProps = {
  title: string;
  onStart: () => void;
};

export function Intro({ title, onStart }: IntroProps) {
  const { displayed, isTyping } = useLoopingTypewriter(title, {
    speed: 42,
    holdMs: 10_000,
  });

  return (
    <div
      className={styles.shell}
      onClick={onStart}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onStart();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Skip intro and open slideshow"
    >
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.monogram} aria-hidden="true">
            A
          </span>
          <span className={styles.name}>Areese</span>
        </div>
      </header>

      <main className={styles.hero}>
        <TypewriterText
          as="h1"
          className={styles.title}
          text={displayed}
          active={isTyping}
          done={false}
        />
      </main>

      <p className={styles.tapHint}>Tap to skip typing</p>
    </div>
  );
}
