import { motion } from "framer-motion";
import type { Slide } from "../utils/parseData";
import { slideMotion, slideTransition } from "../utils/slideMotion";
import styles from "./ThankYouView.module.css";

type ThankYouViewProps = {
  slide: Slide;
  direction: number;
};

function stripEmoji(text: string) {
  return text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\u200D]+\s*/u, "");
}

export function ThankYouView({ slide, direction }: ThankYouViewProps) {
  const title = stripEmoji(slide.title);
  const parts = slide.body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const arabic = parts[0] ?? "";
  let english = parts[1] ?? "";
  let citation = parts[2] ?? "";

  if (!citation && english.includes("\n")) {
    const breakAt = english.indexOf("\n");
    citation = english.slice(breakAt + 1).trim();
    english = english.slice(0, breakAt).trim();
  }

  return (
    <motion.article
      key={slide.number}
      className={styles.slide}
      {...slideMotion(direction)}
      transition={slideTransition}
    >
      <h1 className={styles.heading}>{title}</h1>

      <div className={styles.body}>
        {arabic && (
          <p className={styles.arabic} dir="rtl" lang="ar">
            {arabic}
          </p>
        )}
        {english && <p className={styles.english}>{english}</p>}
        {citation && <p className={styles.citation}>{citation}</p>}
      </div>
    </motion.article>
  );
}
