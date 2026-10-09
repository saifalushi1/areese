import { FaithPerspective } from "./components/FaithPerspective";
import { CostComparison } from "./components/CostComparison";
import { FarmScene } from "./components/FarmScene";
import { GazaAidScene } from "./components/GazaAidScene";
import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const money = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
const choices = [
  {
    name: "See the world",
    kind: "travel",
    title: "More places. More memories.",
    text: "Trade a few hours in a ballroom for time discovering the world together. Keep the celebration small. Make the adventure big.",
    quote:
      "tanzania, japan, and the rest of our dream vacations dont have to wait",
    unit: 6000,
    suffix: "trips for two",
    note: "Example: $6,000 per overseas trip for two, including flights and accommodation. Destination, dates and travel style change the cost.",
  },
  {
    name: "Build a home",
    kind: "home",
    title: "A beginning you can build on.",
    text: "That money can become part of a home fund. A place for everyday life, long after the flowers have wilted.",
    quote: "movie nights and yapping are waiting for us",
    unit: 60000,
    suffix: "of a home fund",
    note: "Example goal: $60,000 (20% down payment) of a $300,000 home.",
  },
  {
    name: "Feed orphans",
    kind: "give",
    title: "Let your joy reach someone else.",
    text: "An evening of luxury can become many days of meals. Choose a trusted charity supporting orphaned children and let your new beginning help theirs.",
    unit: 3,
    suffix: "meals funded",
    note: "Example: $3 per meal. This is a planning assumption, not a charity quote. Check your chosen programme’s costs, including delivery.",
  },
  {
    name: "Hajj together",
    kind: "hajj",
    title: "Our first year. A sacred journey.",
    text: "A simple walimah can leave room for something extraordinary: planning to complete Hajj together within our first year of marriage. Imagine beginning our life together with worship, gratitude, and a journey to the Kaaba.",
    unit: 30000,
    suffix: "of a $30,000 Hajj fund for two",
    note: "Example goal: $30,000 for two people. This is a planning target, not a package quote. Costs vary by departure country, provider, and year. Completing Hajj in our first year depends on the Hajj dates, eligibility, permits, and package availability.",
  },
] as const;
type Kind = "wedding" | "travel" | "home" | "give" | "hajj";

function Scene({ kind }: { kind: Kind }) {
  return (
    <svg
      className={`scene scene-${kind}`}
      viewBox="0 0 800 520"
      fill="none"
      role="img"
      aria-label={
        {
          wedding: "An illuminated wedding arch and banquet tables",
          travel: "A plane crossing mountains under a golden moon",
          home: "A farm with a barn, fenced pasture, and two animated horses",
          give: "Food and aid boxes being transported by truck toward Gaza",
          hajj: "The Kaaba with its gold band, surrounded by a softly moving courtyard of pilgrims",
        }[kind]
      }
    >
      <defs>
        <radialGradient id={`glow-${kind}`}>
          <stop stopColor="#c7ab73" stopOpacity=".24" />
          <stop offset="1" stopColor="#c7ab73" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse
        cx="400"
        cy="290"
        rx="330"
        ry="220"
        fill={`url(#glow-${kind})`}
      />
      {Array.from({ length: 24 }, (_, i) => (
        <circle
          className="star"
          key={i}
          cx={60 + ((i * 97) % 690)}
          cy={30 + ((i * 43) % 340)}
          r={i % 3 === 0 ? 2 : 1}
          fill="#d9c79b"
          style={{ animationDelay: `${i * 0.21}s` }}
        />
      ))}
      <path d="M70 448H730" stroke="#ceb789" strokeOpacity=".3" />
      {kind === "wedding" && (
        <g stroke="#c6ad7b" strokeWidth="2">
          <path
            className="draw"
            d="M230 430V220C230 10 570 10 570 220V430M251 430V220C251 39 549 39 549 220V430"
          />
          <path
            d="M251 220Q400 290 549 220M251 220Q275 360 265 430M549 220Q525 360 535 430"
            strokeOpacity=".45"
          />
          <path d="M400 103V175M360 160H440M375 150V180M400 145V188M425 150V180" />
          {[375, 400, 425].map((x) => (
            <ellipse
              className="flame"
              key={x}
              cx={x}
              cy="144"
              rx="3"
              ry="7"
              fill="#edd7a9"
              stroke="none"
            />
          ))}
          {[150, 650].map((x) => (
            <g key={x}>
              <ellipse cx={x} cy="356" rx="95" ry="24" fill="#141a18" />
              <path
                d={`M${x - 95} 356V386Q${x} 411 ${x + 95} 386V356M${x - 55} 393L${x - 65} 440M${x + 55} 393L${x + 65} 440`}
              />
              {[-32, 0, 32].map((o) => (
                <g key={o}>
                  <path d={`M${x + o} 335V355`} />
                  <circle cx={x + o} cy="330" r="5" fill="#d4bc89" />
                </g>
              ))}
            </g>
          ))}
          {Array.from({ length: 15 }, (_, i) => (
            <circle
              key={i}
              cx={239 + ((i * 41) % 320)}
              cy={118 + ((i * 67) % 133)}
              r="5"
              fill="#8c9a72"
              stroke="none"
            />
          ))}
          <path
            d="M345 430V378H455V430M359 378V349H441V378M375 349V327H425V349"
            fill="#253027"
          />
          <ellipse
            cx="400"
            cy="459"
            rx="170"
            ry="10"
            fill="#c6ad7b"
            opacity=".08"
            stroke="none"
          />
        </g>
      )}
      {kind === "travel" && (
        <g>
          <circle cx="570" cy="130" r="57" fill="#d5bd88" opacity=".75" />
          <path
            d="M50 445L224 191L414 445M217 445L431 150L673 445M464 445L633 247L780 445"
            fill="#182b29"
            stroke="#79978a"
          />
          <path
            d="M187 244L224 191L267 249L226 229ZM387 210L431 150L481 213L435 191Z"
            fill="#98ad9a"
            opacity=".7"
          />
          <path
            className="flight-path"
            d="M90 270Q360 30 688 230"
            stroke="#d4bb88"
            strokeDasharray="6 10"
          />
          <g className="plane" fill="#e5d1a6">
            <path d="M355 108L391 117L450 77L463 81L422 127L464 146L462 154L403 144L379 161L370 159L380 136L351 116Z" />
          </g>
          <path
            d="M120 466Q400 414 705 466M190 487Q430 450 620 487"
            stroke="#9cbbad"
            opacity=".4"
          />
        </g>
      )}
      {kind === "home" && <FarmScene />}
      {kind === "give" && <GazaAidScene />}
      {kind === "hajj" && (
        <g>
          <ellipse
            cx="400"
            cy="430"
            rx="310"
            ry="63"
            fill="#c7cbb1"
            opacity=".06"
          />
          <g stroke="#a89972" strokeWidth="2" opacity=".5">
            <path d="M75 329V235Q105 184 135 235V329M135 329V235Q165 184 195 235V329M195 329V235Q225 184 255 235V329M545 329V235Q575 184 605 235V329M605 329V235Q635 184 665 235V329M665 329V235Q695 184 725 235V329" />
            <path d="M112 201V120H134V201M666 201V120H688V201M108 120H138M662 120H692M123 120V91M677 120V91" />
            <path d="M108 105Q123 78 138 105M662 105Q677 78 692 105" />
          </g>
          <g className="pilgrim-orbit" fill="#e2dfc6">
            {Array.from({ length: 36 }, (_, i) => {
              const angle = (i * Math.PI * 2) / 36;
              return (
                <circle
                  key={i}
                  cx={400 + 275 * Math.cos(angle)}
                  cy={414 + 57 * Math.sin(angle)}
                  r={i % 3 === 0 ? 4 : 3}
                  opacity=".65"
                />
              );
            })}
          </g>
          <path
            d="M272 215L445 173L545 221L373 265Z"
            fill="#242825"
            stroke="#8a8061"
          />
          <path
            d="M272 215L373 265V439L272 388Z"
            fill="#0d100f"
            stroke="#8a8061"
          />
          <path
            d="M373 265L545 221V391L373 439Z"
            fill="#171a16"
            stroke="#8a8061"
          />
          <path
            className="kaaba-band"
            d="M272 248L373 298L545 254V273L373 317L272 267Z"
            fill="#cbb16f"
          />
          <path
            d="M281 255L369 299M384 301L533 264"
            stroke="#715d34"
            strokeWidth="3"
            strokeDasharray="8 7"
          />
          <path
            d="M475 313L511 304V368L475 377Z"
            fill="#cbb16f"
            stroke="#e1cf97"
          />
          <path d="M483 323L503 318V359L483 364Z" stroke="#756039" />
          <path
            d="M373 265V439M290 280V392M351 314V424M394 326V428M529 291V395"
            stroke="#b6af8e"
            opacity=".14"
          />
          <ellipse
            cx="400"
            cy="471"
            rx="170"
            ry="9"
            fill="#cbb16f"
            opacity=".1"
          />
        </g>
      )}
    </svg>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [budget, setBudget] = useState(50000);
  const [simple, setSimple] = useState(10000);
  const [selected, setSelected] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [mealCost, setMealCost] = useState(3);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, reduced ? 0 : 100]);
  const saved = Math.max(0, budget - simple);
  const hajjFund = Math.min(saved, choices[3].unit);
  const afterHajj = saved - hajjFund;
  const planOptions = [
    {
      name: "Hajj first",
      note: "Put up to $30,000 toward Hajj for two, then split the remainder: 25% travel · 60% home · 15% giving.",
      rows: [
        ["Hajj together", hajjFund, "hajj"],
        ["Travel together", Math.floor(afterHajj * 0.25), "travel"],
        ["Build your home fund", Math.floor(afterHajj * 0.6), "home"],
        ["Support orphan meals", Math.floor(afterHajj * 0.15), "give"],
      ],
    },
    {
      name: "Home first",
      note: "60% home · 20% Hajj · 10% travel · 10% giving.",
      rows: [
        ["Build your home fund", Math.floor(saved * 0.6), "home"],
        ["Hajj together", Math.floor(saved * 0.2), "hajj"],
        ["Travel together", Math.floor(saved * 0.1), "travel"],
        ["Support orphan meals", Math.floor(saved * 0.1), "give"],
      ],
    },
    {
      name: "Travel first",
      note: "50% travel · 30% home · 15% Hajj · 5% giving.",
      rows: [
        ["Travel together", Math.floor(saved * 0.5), "travel"],
        ["Build your home fund", Math.floor(saved * 0.3), "home"],
        ["Hajj together", Math.floor(saved * 0.15), "hajj"],
        ["Support orphan meals", Math.floor(saved * 0.05), "give"],
      ],
    },
    {
      name: "Giving first",
      note: "50% giving · 25% home · 15% Hajj · 10% travel.",
      rows: [
        ["Support orphan meals", Math.floor(saved * 0.5), "give"],
        ["Build your home fund", Math.floor(saved * 0.25), "home"],
        ["Hajj together", Math.floor(saved * 0.15), "hajj"],
        ["Travel together", Math.floor(saved * 0.1), "travel"],
      ],
    },
  ] as const;
  const plan = planOptions[selectedPlan];
  const choice = choices[selected];
  const result =
    selected === 1 || selected === 3
      ? `${Math.round((saved / choice.unit) * 100)}%`
      : Math.floor(
          saved / (selected === 2 ? mealCost : choice.unit),
        ).toLocaleString();
  return (
    <MotionConfig reducedMotion="user">
      <div className="experience">
        <motion.div
          className="reading-progress"
          style={{ scaleX: scrollYProgress }}
        />
        <a className="skip-link" href="#main">
          Skip to the story
        </a>
        <header>
          <a className="brand" href="#top">
            areese<span> / a different beginning</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#perspective">The perspective</a>
            <a href="#possibilities">The possibilities</a>
          </nav>
        </header>
        <main id="main">
          <section id="top" className="hero">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="tiny-star">✦</span> ONE EVENING. A THOUSAND
                POSSIBILITIES.
              </p>
              <h1>
                A beautiful marriage.
                <br />
                <em>A simple walimah.</em>
              </h1>
              <p className="lead">
                What if your biggest day didn’t cost
                <br /> your dreams for tomorrow?
              </p>
              <p className="hero-note">
                An invitation to celebrate simply. And live fully.
              </p>
            </div>
            <motion.div className="hero-art" style={{ y: heroY }}>
              <div className="orbital orbital-one" />
              <div className="orbital orbital-two" />
              <Scene kind="wedding" />
              <div className="scene-caption">
                <span>THE CELEBRATION</span>
                <span>A few hours. Then what?</span>
              </div>
            </motion.div>
            <div className="hero-bottom">
              <span>A LITTLE LESS SHOW. A LOT MORE LIFE.</span>
              <a href="#perspective">
                Scroll to reconsider <span>↓</span>
              </a>
              <span>01 — 04</span>
            </div>
          </section>
          <section id="perspective" className="perspective section-wrap">
            <Reveal>
              <p className="eyebrow">01 / THE PERSPECTIVE</p>
              <h2>
                Keep the blessing.
                <br />
                <em>Leave the excess.</em>
              </h2>
            </Reveal>
            <FaithPerspective />
          </section>
          <section id="possibilities" className="possibilities section-wrap">
            <Reveal className="section-heading">
              <div>
                <p className="eyebrow">02 / THE POSSIBILITIES</p>
                <h2>
                  Same money.
                  <br />
                  <em>A different story.</em>
                </h2>
              </div>
              <p>
                Move the slider. Choose a possibility.
                <br />
                Watch one evening become something more.
              </p>
            </Reveal>
            <div className="budget-panel">
              <div className="budget-control">
                <div className="range-heading">
                  <label htmlFor="budget">Your big-wedding budget</label>
                  <output htmlFor="budget">{money(budget)}</output>
                </div>
                <input
                  id="budget"
                  type="range"
                  min="5000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  style={
                    {
                      "--fill": `${((budget - 5000) / 95000) * 100}%`,
                    } as CSSProperties
                  }
                />
                <div className="range-limits">
                  <span>$5,000</span>
                  <span>$100,000</span>
                </div>
              </div>
              <div className="simple-control">
                <label htmlFor="simple">Keep for a simple celebration</label>
                <div className="currency-input">
                  <span>$</span>
                  <input
                    id="simple"
                    type="number"
                    min="0"
                    max="100000"
                    step="500"
                    value={simple}
                    onChange={(e) =>
                      setSimple(
                        Math.min(100000, Math.max(0, Number(e.target.value))),
                      )
                    }
                  />
                </div>
              </div>
              <div className="saved">
                <span>Room for your future</span>
                <strong>{money(saved)}</strong>
              </div>
            </div>
            {simple > budget && (
              <p className="small-note" role="status">
                Your celebration allowance exceeds this budget. Lower the
                allowance to free up money.
              </p>
            )}
            <CostComparison budget={budget} simple={simple} />
            <div
              className="choice-tabs"
              role="group"
              aria-label="Choose an alternative"
            >
              {choices.map((c, i) => (
                <button
                  key={c.kind}
                  onClick={() => setSelected(i)}
                  aria-pressed={selected === i}
                  className={selected === i ? "active" : ""}
                >
                  <span>0{i + 1}</span>
                  {c.name}
                  <span>↗</span>
                </button>
              ))}
            </div>
            <div className="alternative">
              <div className="alternative-art">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={choice.kind}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <Scene kind={choice.kind} />
                  </motion.div>
                </AnimatePresence>
                <div className="allocation" aria-hidden="true">
                  {Array.from({ length: 50 }, (_, i) => (
                    <span
                      key={`${selected}-${i}`}
                      className={saved > 0 ? "allocated" : ""}
                      style={{
                        animationDelay: reduced ? "0ms" : `${i * 20}ms`,
                      }}
                    />
                  ))}
                </div>
                <p className="art-note">
                  Each dot is 1/50 of your savings → {choice.name.toLowerCase()}
                </p>
              </div>
              <div className="alternative-copy">
                <p className="eyebrow">IMAGINE INSTEAD</p>
                <h3>{choice.title}</h3>
                <p>{choice.text}</p>
                {"quote" in choice && (
                  <p className="possibility-quote">“{choice.quote}”</p>
                )}
                <div className="result" aria-live="polite" aria-atomic="true">
                  <AnimatePresence mode="wait">
                    <motion.strong
                      key={`${selected}-${result}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {result}
                    </motion.strong>
                  </AnimatePresence>
                  <span>{choice.suffix}</span>
                </div>
                {selected === 0 && (
                  <p className="remainder">
                    With {money(saved % choice.unit)} left for other goals.
                  </p>
                )}
                {selected === 2 && (
                  <div className="meal-control">
                    <label htmlFor="meal">
                      Try your charity’s cost per meal ($)
                    </label>
                    <input
                      id="meal"
                      type="number"
                      min="1"
                      max="100"
                      value={mealCost}
                      onChange={(e) =>
                        setMealCost(
                          Math.max(1, Math.min(100, Number(e.target.value))),
                        )
                      }
                    />
                  </div>
                )}
                {selected !== 3 && <p className="assumption">{choice.note}</p>}
                {selected === 3 && (
                  <>
                    <p className="remainder">
                      {saved >= choice.unit
                        ? `${money(choice.unit)} for the example Hajj goal, with ${money(saved - choice.unit)} left for other goals.`
                        : `${money(choice.unit - saved)} more to reach the example Hajj goal.`}
                    </p>
                    <a
                      className="text-link"
                      href="https://hajj.nusuk.sa/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Explore official Hajj packages · Nusuk ↗
                    </a>
                  </>
                )}
              </div>
            </div>
          </section>
          <section className="split-section section-wrap">
            <Reveal>
              <p className="eyebrow">03 / YOU CAN HAVE BOTH</p>
              <h2>
                A little celebration.
                <br />
                <em>A bigger life.</em>
              </h2>
              <p className="lead">
                You don’t have to put everything into one choice.
              </p>
            </Reveal>
            <Reveal className="split-plan">
              <div
                className="plan-options"
                role="group"
                aria-label="Choose a savings plan"
              >
                {planOptions.map((option, i) => (
                  <button
                    key={option.name}
                    className={selectedPlan === i ? "active" : ""}
                    aria-pressed={selectedPlan === i}
                    onClick={() => setSelectedPlan(i)}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
              <p className="plan-label">
                {plan.name.toUpperCase()} · YOUR {money(saved)}
              </p>
              <div
                className="plan-allocations"
                aria-live="polite"
                aria-atomic="true"
              >
                {plan.rows.map(([label, amount, goal]) => (
                  <div className="plan-row" key={label} data-goal={goal}>
                    <div>
                      <span>{label}</span>
                      <strong>{money(amount)}</strong>
                    </div>
                    <div className="plan-track">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${saved > 0 ? (amount / saved) * 100 : 0}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="small-note">
                Example plan: {plan.note} Whole-dollar figures are rounded down;
                any remainder stays in savings.
              </p>
            </Reveal>
          </section>
          <section className="ending section-wrap">
            <Reveal>
              <p className="eyebrow">04 / A DIFFERENT BEGINNING</p>
              <span className="ending-star">✦</span>
              <h2>
                Make the marriage rich.
                <br />
                <em>Keep the wedding simple.</em>
              </h2>
              <p>
                Gather your people. Share a meal. Honour your commitments.
                <br />
                Save something for all the days that follow. And begin your
                marriage with barakah
              </p>
              <a className="button" href="#possibilities">
                Explore your own numbers <span>↑</span>
              </a>
            </Reveal>
          </section>
        </main>
        <footer>
          <a className="brand" href="#top">
            areese
          </a>
          <p>Celebrate with intention.</p>
          <a href="#perspective">Sources & perspective ↑</a>
        </footer>
      </div>
    </MotionConfig>
  );
}
