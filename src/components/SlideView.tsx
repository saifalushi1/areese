import { motion } from "framer-motion";
import type { Slide } from "../utils/parseData";
import styles from "./SlideView.module.css";

type SlideViewProps = {
  slide: Slide;
  direction: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function SlideView({ slide, direction }: SlideViewProps) {
  const displayTitle = slide.title.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\u200D]+\s*/u, "");

  return (
    <motion.article
      key={slide.number}
      className={styles.slide}
      initial={{ opacity: 0, y: direction >= 0 ? 28 : -28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: direction >= 0 ? -20 : 20 }}
      transition={{ duration: 0.55, ease }}
    >
      <p className={styles.eyebrow}>
        Reason {String(slide.number).padStart(2, "0")}
      </p>
      <h1 className={styles.heading}>{displayTitle}</h1>
      <div className={styles.body}>
        {slide.body.split(/\n\n+/).map((paragraph, i) => (
          <p key={i}>{paragraph.trim()}</p>
        ))}
      </div>
    </motion.article>
  );
}
