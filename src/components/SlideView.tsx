import { motion } from "framer-motion";
import type { Slide } from "../utils/parseData";
import { slideMotion, slideTransition } from "../utils/slideMotion";
import styles from "./SlideView.module.css";

type SlideViewProps = {
  slide: Slide;
  direction: number;
};

function stripEmoji(text: string) {
  return text.replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\uFE0F\u200D]+\s*/u, "");
}

export function SlideView({ slide, direction }: SlideViewProps) {
  const displayTitle = stripEmoji(slide.title);
  const paragraphs = slide.body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <motion.article
      key={slide.number}
      className={styles.slide}
      {...slideMotion(direction)}
      transition={slideTransition}
    >
      <p className={styles.eyebrow}>
        Reason {String(slide.number).padStart(2, "0")}
      </p>

      <h1 className={styles.heading}>{displayTitle}</h1>

      <div className={styles.body}>
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        ) : (
          <p>{slide.body.trim()}</p>
        )}
      </div>
    </motion.article>
  );
}
