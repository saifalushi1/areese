type Theme = "travel" | "home" | "give" | "hajj";
const dollars = (amount: number) => `$${amount.toLocaleString("en-US")}`;

function Symbol({ kind }: { kind: Theme }) {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      aria-hidden="true"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "travel" && (
        <>
          <path d="M9 25L27 20L24 7L29 5L39 18L53 15Q60 15 56 21L40 27L33 43L28 44L29 30L16 33Z" />
          <path d="M8 40H19M43 7H53" opacity=".45" />
        </>
      )}
      {kind === "home" && (
        <>
          <circle cx="23" cy="18" r="11" />
          <circle cx="23" cy="18" r="4" />
          <path d="M31 26L49 44L54 39L49 34L45 38L41 34L45 30L40 25" />
        </>
      )}
      {kind === "give" && (
        <>
          <path d="M8 25H56Q52 43 32 43Q12 43 8 25Z" />
          <path d="M13 30H51M22 19Q16 13 22 7M32 19Q26 13 32 7M42 19Q36 13 42 7" />
        </>
      )}
      {kind === "hajj" && (
        <>
          <path d="M13 15L32 7L52 15V41L32 46L13 40ZM32 7V46M13 15L32 22L52 15" />
          <path d="M13 23L32 30L52 23M13 28L32 35L52 28" strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

export function SavingsVisual({
  kind,
  saved,
  mealCost,
}: {
  kind: Theme;
  saved: number;
  mealCost: number;
}) {
  const trips = Math.floor(saved / 6000);
  const meals = Math.floor(saved / mealCost);
  const goal = kind === "home" ? 60000 : 30000;
  const unit = goal / 6;
  const count = kind === "travel" ? Math.max(1, trips) : 6;
  const reserve =
    kind === "travel"
      ? saved % 6000
      : kind === "give"
        ? saved % mealCost
        : Math.max(0, saved - goal);
  const title =
    kind === "travel"
      ? "Our passport stamps"
      : kind === "home"
        ? "Keys to our home"
        : kind === "give"
          ? "Bowls of care"
          : "Our Hajj fund";
  const note =
    kind === "travel"
      ? `${trips} trips for two · $6,000 per trip`
      : kind === "home"
        ? `${dollars(Math.min(saved, goal))} toward a $60,000 home fund`
        : kind === "give"
          ? `${meals.toLocaleString()} meals · ${dollars(mealCost)} per meal`
          : `${dollars(Math.min(saved, goal))} toward Hajj for two`;
  return (
    <div
      className={`savings-visual savings-${kind}`}
      role="group"
      aria-label={title}
    >
      <p className="savings-title">{title}</p>
      <div className="savings-tokens">
        {Array.from({ length: count }, (_, i) => {
          const bowlMeals = Math.floor(meals / 6) + Number(i < meals % 6);
          const funded =
            kind === "travel"
              ? Number(trips > 0)
              : kind === "give"
                ? Number(bowlMeals > 0)
                : Math.min(1, Math.max(0, (saved - i * unit) / unit));
          const label =
            kind === "travel"
              ? trips === 0
                ? "Next trip"
                : (["Tanzania", "Japan"][i] ?? `Trip ${i + 1}`)
              : kind === "give"
                ? `${bowlMeals.toLocaleString()} meals`
                : dollars(unit);
          return (
            <div
              key={`${kind}-${i}`}
              className={`savings-token ${funded === 0 ? "unfunded" : ""}`}
              data-funded={funded}
            >
              <svg
                className="token-progress"
                viewBox="0 0 100 100"
                aria-hidden="true"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  fill="none"
                  stroke="currentColor"
                  opacity=".2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="47"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  pathLength="100"
                  strokeDasharray={`${funded * 100} 100`}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <Symbol kind={kind} />
              <span>
                {kind === "give" ? (
                  <>
                    <b>{bowlMeals.toLocaleString()}</b>
                    <small>meals</small>
                  </>
                ) : (
                  label
                )}
              </span>
            </div>
          );
        })}
        <div className="savings-reserve">
          <strong>{dollars(reserve)}</strong>
          <span>reserve</span>
        </div>
      </div>
      <p className="savings-caption">{note}</p>
    </div>
  );
}
