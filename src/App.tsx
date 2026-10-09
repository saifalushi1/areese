import { FaithPerspective } from "./components/FaithPerspective";
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
    unit: 6000,
    suffix: "trips for two",
    note: "Example: $6,000 per overseas trip for two, including flights and accommodation. Destination, dates and travel style change the cost.",
  },
  {
    name: "Build a home",
    kind: "home",
    title: "A beginning you can build on.",
    text: "That money can become part of a home fund. A place for everyday life, long after the flowers have wilted.",
    unit: 60000,
    suffix: "of a home fund",
    note: "Example goal: $60,000 toward a home. This is a savings target, not a house price or a mortgage recommendation.",
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
] as const;
type Kind = "wedding" | "travel" | "home" | "give";

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
          home: "A house with warm windows and a growing garden",
          give: "Bowls of food underneath an olive tree",
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
      {kind === "home" && (
        <g stroke="#bba578" strokeWidth="2">
          <path
            className="draw"
            d="M210 271L399 113L590 271M240 246V437H560V246M278 215V154H316V184"
          />
          <path
            d="M220 272L400 126L580 272"
            strokeWidth="10"
            stroke="#617a65"
          />
          <path d="M370 437V328H431V437" fill="#273d32" />
          {[285, 467].map((x) => (
            <g key={x}>
              <rect
                className="window-glow"
                x={x}
                y="287"
                width="48"
                height="62"
                fill="#cbb47b"
              />
              <path
                d={`M${x + 24} 287V349M${x} 318H${x + 48}`}
                stroke="#24392e"
              />
            </g>
          ))}
          <circle cx="400" cy="239" r="24" fill="#cbb47b" opacity=".6" />
          <path d="M358 478L370 437M443 478L431 437M160 437V331M638 437V313" />
          <g className="leaves" fill="#637d58" stroke="none">
            <ellipse cx="160" cy="318" rx="42" ry="61" />
            <ellipse cx="638" cy="305" rx="52" ry="72" />
          </g>
          <path
            d="M70 454Q165 426 275 454M510 454Q630 424 730 454"
            stroke="#5e7c60"
          />
        </g>
      )}
      {kind === "give" && (
        <g>
          <path
            d="M400 357V179M400 271L327 208M400 237L472 173M400 303L476 247M400 213L369 153"
            stroke="#bba578"
            strokeWidth="8"
          />
          <g className="leaves" fill="#75936a">
            {[
              [327, 198],
              [366, 147],
              [410, 159],
              [470, 166],
              [480, 236],
              [317, 260],
              [420, 286],
            ].map(([x, y], i) => (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="39"
                ry="20"
                transform={`rotate(${i % 2 ? -35 : 35} ${x} ${y})`}
              />
            ))}
          </g>
          {[200, 400, 600].map((x, i) => (
            <g
              className="bowl"
              key={x}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <ellipse cx={x} cy="384" rx="75" ry="21" fill="#ad9466" />
              <path
                d={`M${x - 75} 384Q${x - 65} 458 ${x} 458Q${x + 65} 458 ${x + 75} 384`}
                fill="#233c32"
                stroke="#a8b98a"
              />
              {Array.from({ length: 9 }, (_, j) => (
                <circle
                  key={j}
                  cx={x - 45 + j * 11}
                  cy={380 - (j % 3) * 5}
                  r="7"
                  fill={j % 2 ? "#d9c390" : "#8b9b65"}
                />
              ))}
            </g>
          ))}
          <path d="M130 474H670" stroke="#c6ad7b" opacity=".3" />
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
  const [budget, setBudget] = useState(35000);
  const [simple, setSimple] = useState(3000);
  const [selected, setSelected] = useState(0);
  const [mealCost, setMealCost] = useState(3);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, reduced || paused ? 0 : 100],
  );
  const saved = Math.max(0, budget - simple);
  const choice = choices[selected];
  const result =
    selected === 1
      ? `${Math.round((saved / choice.unit) * 100)}%`
      : Math.floor(
          saved / (selected === 2 ? mealCost : choice.unit),
        ).toLocaleString();
  return (
    <MotionConfig reducedMotion={paused ? "always" : "user"}>
      <div className={paused ? "experience paused" : "experience"}>
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
            <button
              className="motion-toggle"
              onClick={() => setPaused(!paused)}
              aria-pressed={paused}
            >
              {paused ? "Resume motion" : "Pause motion"}
            </button>
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
                <em>A smaller wedding.</em>
              </h1>
              <p className="lead">
                What if your biggest day didn’t cost
                <br /> your dreams for tomorrow?
              </p>
              <a className="button" href="#possibilities">
                See what your money could become <span>↗</span>
              </a>
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
            <Reveal className="perspective-text">
              <p className="big-copy">
                Marriage is worth celebrating.
                <br />
                Waste is worth questioning.
              </p>
              <p>
                A wedding is not automatically haram. The Prophet ﷺ encouraged a
                walimah — a wedding meal. The concern is what we bring into it:
                waste, interest-based borrowing, alcohol, or pressure to
                impress.
              </p>
              <p>
                A big bill doesn’t make a marriage better. A modest celebration
                can honour your faith, bring people together, and leave room for
                the life you actually want.
              </p>
              <a
                className="text-link"
                href="https://sunnah.com/bukhari:5167"
                target="_blank"
                rel="noreferrer"
              >
                Read about the walimah · Bukhari 5167 ↗
              </a>
            </Reveal>
            <FaithPerspective />
            <p className="small-note">
              Expense alone does not establish a religious ruling. Details of
              entertainment and etiquette have differing scholarly views; speak
              to a qualified scholar about your plans.
            </p>
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
            <Reveal className="tradeoff">
              <div className="tradeoff-row">
                <div className="tradeoff-label">
                  <span>The big wedding</span>
                  <span>{money(budget)} spent on the celebration</span>
                </div>
                <div className="tradeoff-track">
                  <motion.div
                    className="spent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
              <div className="tradeoff-row">
                <div className="tradeoff-label">
                  <span>The smaller wedding</span>
                  <span>{money(saved)} stays with you</span>
                </div>
                <div className="tradeoff-track">
                  <motion.div
                    className="spent"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.min(simple / budget, 1) * 100}%`,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="kept"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(saved / budget) * 100}%` }}
                    transition={{ duration: 0.7 }}
                  />
                </div>
              </div>
              <div className="tradeoff-key">
                <span>
                  <i />
                  Celebration
                </span>
                <span>
                  <i />
                  Travel, a home, or giving
                </span>
              </div>
            </Reveal>
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
                        animationDelay:
                          paused || reduced ? "0ms" : `${i * 20}ms`,
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
                <p className="assumption">{choice.note}</p>
                <p className="small-note">
                  Each option uses the same savings separately. They cannot all
                  be funded in full at once.
                </p>
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
              <p className="plan-label">
                ONE POSSIBLE PLAN FOR YOUR {money(saved)}
              </p>
              {[
                ["Travel together", 0.25],
                ["Build your home fund", 0.6],
                ["Support orphan meals", 0.15],
              ].map(([label, share]) => (
                <div className="plan-row" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{money(Math.floor(saved * Number(share)))}</strong>
                  </div>
                  <div className="plan-track">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Number(share) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                </div>
              ))}
              <p className="small-note">
                Example split: 25% travel · 60% home · 15% giving. Whole-dollar
                figures are rounded down; any remainder stays in savings.
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
                Then save something for all the days that follow.
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
