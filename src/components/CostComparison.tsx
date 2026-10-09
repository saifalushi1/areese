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
  const scale = Math.max(budget, simple, 1);
  return (
    <div
      className="cost-comparison"
      aria-label="Celebration costs on the same scale"
    >
      {[
        { name: "The big wedding", cost: budget, kind: "wedding" },
        { name: "The simple walimah", cost: simple, kind: "walimah" },
      ].map(({ name, cost, kind }) => (
        <div className="cost-bar-row" key={kind}>
          <div className="cost-bar-label">
            <span>{name}</span>
            <strong>{money(cost)}</strong>
          </div>
          <div className="cost-bar-space">
            <motion.div
              className={`cost-bar cost-bar-${kind}`}
              initial={{ width: 0 }}
              whileInView={{ width: `${(cost / scale) * 100}%` }}
              transition={{ duration: 0.8 }}
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
      <p className="cost-savings">
        {money(Math.max(0, budget - simple))} left for our future.
      </p>
    </div>
  );
}
