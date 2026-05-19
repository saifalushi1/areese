import styles from "./Header.module.css";

type HeaderProps = {
  siteTitle: string;
  current: number;
  total: number;
  label?: string;
};

export function Header({ siteTitle, current, total, label = "Slide" }: HeaderProps) {
  const shortTitle = siteTitle.length > 42 ? `${siteTitle.slice(0, 40)}…` : siteTitle;

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.monogram} aria-hidden="true">
          A
        </span>
        <span className={styles.name}>Areese</span>
      </div>
      <p className={styles.meta}>
        <span className={styles.label}>{label}</span>
        <span className={styles.count}>
          {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </p>
      <p className={styles.title} title={siteTitle}>
        {shortTitle}
      </p>
    </header>
  );
}
