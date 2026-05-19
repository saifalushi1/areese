import styles from "./TypewriterText.module.css";

type TypewriterTextProps = {
  text: string;
  active: boolean;
  done: boolean;
  className?: string;
  as?: "span" | "p" | "h1";
};

export function TypewriterText({
  text,
  active,
  done,
  className,
  as: Tag = "span",
}: TypewriterTextProps) {
  const showCursor = active && !done && text.length > 0;

  return (
    <Tag className={className}>
      {text}
      {showCursor && <span className={styles.cursor} aria-hidden="true" />}
    </Tag>
  );
}
