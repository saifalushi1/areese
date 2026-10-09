import { motion } from "framer-motion";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

export function CostComparison({
  budget,
  simple,
}: {
  budget: number;
  simple: number;
}) {
  const saved = Math.max(0, budget - simple);
  const spentCoins = Math.round(Math.min(simple / budget, 1) * 50);
  return (
    <div className="cost-comparison">
      <motion.article
        className="coin-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">THE BIG WEDDING</p>
        <h3>One evening.</h3>
        <div className="coin-board" aria-hidden="true">
          {Array.from({ length: 50 }, (_, i) => (
            <span
              key={i}
              className="coin coin-spent"
              style={{ animationDelay: `${i * 15}ms` }}
            />
          ))}
        </div>
        <p className="coin-total">
          {money(budget)} <span>spent on the celebration</span>
        </p>
        <p className="small-note">The full budget goes into one day.</p>
      </motion.article>
      <motion.article
        className="coin-card coin-card-future"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">THE SIMPLE WALIMAH</p>
        <h3>A future together.</h3>
        <div className="coin-board" aria-hidden="true">
          {Array.from({ length: 50 }, (_, i) => (
            <span
              key={i}
              className={`coin ${i < spentCoins ? "coin-celebration" : "coin-future"}`}
              style={{ animationDelay: `${i * 15}ms` }}
            />
          ))}
        </div>
        <p className="coin-total">
          {money(saved)} <span>kept for your future</span>
        </p>
        <div className="coin-key">
          <span>
            <i />
            {money(Math.min(simple, budget))} celebration
          </span>
          <span>
            <i />
            {money(saved)} possibilities
          </span>
        </div>
      </motion.article>
      <p className="coin-explanation">
        Each coin represents {money(budget / 50)} — 2% of your wedding budget.
        The colours show rounded proportions; the amounts are exact.
      </p>
    </div>
  );
}
