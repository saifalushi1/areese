import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const reflections = [
  {
    title: "Marriage is worth celebrating. Waste is worth questioning.",
    paragraphs: [
      "A wedding is not automatically haram. The Prophet ﷺ encouraged a walimah — a wedding meal. The concern is what we bring into it: waste, months of stress, pressure to impress, music, and not following the sunna.",
      "A big bill doesn’t make a marriage better. A modest celebration can honour your faith, bring people together, and leave room for the life you actually want.",
    ],
    links: [
      [
        "Read about the walimah · Bukhari 5167",
        "https://sunnah.com/bukhari:5167",
      ],
    ],
  },
  {
    title: "The Prophet ﷺ Explicitly Praised Simple Weddings",
    paragraphs: [
      "The Prophet Muhammad (ﷺ) said: “The most blessed nikah is the one with the least expenses.” This narration is attributed to al-Bayhaqi; scholars differ over the grading of its chains. In Sunan Abu Dawood (2117), he said: “The best marriage is the one that is most easy.”",
      "Reports about Fatima (RA) describe simple household furnishings, including a water skin and a pillow. These were wedding gifts, rather than a list of her mahr. Her example invites us to ask: why should a new marriage depend on a banquet hall, a designer gown, or elaborate floral arrangements?",
    ],
    links: [
      ["Abu Dawood 2117", "https://sunnah.com/abudawud:2117"],
      [
        "Bayhaqi narration & grading",
        "https://islamqa.org/hanafi/hadithanswers/120195/",
      ],
      ["Fatima’s wedding gifts", "https://sunnah.com/nasai:3384"],
    ],
  },
  {
    title: "Extravagance (Israf) is a Major Sin in Islam",
    paragraphs: [
      "The Quran tells us to eat and drink without extravagance, and says Allah does not love the extravagant (Surah Al-A’raf 7:31). The Prophet ﷺ also warned against gossip, excessive questioning, and wasting wealth (Sahih al-Bukhari 2408).",
      "A $36,000–$52,000 celebration for a single evening deserves serious reflection. Are we spending within our means, or paying for appearances while neglecting responsibilities? That range is an example, not a current wedding-cost estimate. A price alone does not establish israf; wastefulness depends on the circumstances.",
    ],
    links: [
      ["Quran 7:31", "https://quran.com/7/31"],
      ["Bukhari 2408", "https://sunnah.com/bukhari:2408"],
    ],
  },
  {
    title: "Haram Has No Place at a Wedding",
    paragraphs: [
      "Celebrating a wedding should not involve prohibited practices. Neither should it involve indecent entertainment, obscene songs, or conduct that crosses Islamic boundaries. Instrumental music, backbiting, extravagance, and riyah are all common within weddings and explicitly forbidden. It’s not fair to yourself and your husband to create an environment that enables this.",
    ],
    links: [
      ["Avoid backbiting · Quran 49:12", "https://quran.com/49/12"],
      ["Avoid wastefulness · Quran 17:26–27", "https://quran.com/17/26-27"],
    ],
  },
  {
    title: "Riya (Showing Off) Threatens the Barakah",
    paragraphs: [
      "In Sahih Muslim 1905, the Prophet ﷺ described a man who appeared to have died as a martyr, but had fought to be called courageous. He was condemned because his outwardly noble act was done for people’s praise.",
      "If showing off can corrupt such a serious act, it should make us examine our intentions at a wedding. “You’re only a bride once” should not become a reason to chase approval, strain our finances, or turn a sacred commitment into a performance for Instagram. Aim for sincerity and a celebration within your means. A venue or price tag cannot tell us how much blessing a marriage has.",
    ],
    links: [["Muslim 1905a", "https://sunnah.com/muslim:1905a"]],
  },
  {
    title: "The Nikah Itself is the Ibadah — Not the Party",
    paragraphs: [
      "Marriage should not be measured by the size of its party. The nikah, its religious requirements, the mahr, and the responsibilities spouses accept matter more than the catering. A simple celebration can honour the commitment without making it harder to begin married life.",
      "A narration attributed to the Prophet ﷺ says that marriage completes half of a person’s religion, and calls them to fear Allah regarding the remaining half. Scholars differ over the grading of these reports; al-Albani accepted supporting narrations. The practical reminder is clear: invest in the marriage and the life you will share, rather than treating an expensive party as a religious requirement.",
    ],
    links: [
      [
        "The half-of-religion narration",
        "https://islamqa.info/en/answers/11586/is-marriage-half-of-the-religion",
      ],
      [
        "The encouraged walimah · Bukhari 5167",
        "https://sunnah.com/bukhari:5167",
      ],
    ],
  },
];

function TopicVisual({ index }: { index: number }) {
  const labels = [
    "A softly illuminated wedding arch",
    "A simple shared meal with a flickering candle",
    "Coins falling into a savings jar",
    "A shield protecting a celebration",
    "A sincere heart beyond the spotlight",
    "A marriage contract with two wedding rings",
  ];
  return (
    <svg
      className="faith-visual"
      viewBox="0 0 400 240"
      fill="none"
      role="img"
      aria-label={labels[index]}
    >
      <ellipse
        cx="200"
        cy="212"
        rx="125"
        ry="10"
        fill="#ceb787"
        opacity=".08"
      />
      <g
        stroke="#ceb787"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {index === 0 && (
          <g>
            <path
              className="faith-draw"
              d="M110 211V112C110 12 290 12 290 112V211M127 211V113C127 35 273 35 273 113V211"
            />
            <path d="M128 117Q200 153 272 117" opacity=".5" />
            <g className="faith-float" fill="#8eaa79" stroke="none">
              <ellipse
                cx="112"
                cy="95"
                rx="12"
                ry="6"
                transform="rotate(-30 112 95)"
              />
              <ellipse
                cx="283"
                cy="91"
                rx="12"
                ry="6"
                transform="rotate(30 283 91)"
              />
            </g>
            <path d="M200 69V99M181 88H219" />
            <circle className="flame" cx="200" cy="88" r="4" fill="#e1cca0" />
          </g>
        )}
        {index === 1 && (
          <g>
            <ellipse cx="200" cy="176" rx="115" ry="30" />
            <ellipse cx="200" cy="176" rx="80" ry="17" opacity=".4" />
            <path
              d="M123 170Q129 129 173 154Q186 174 123 170Z"
              fill="#8c9b6c"
            />
            <path
              d="M229 159Q256 131 278 165Q267 181 229 159Z"
              fill="#8c9b6c"
            />
            <path d="M195 160V108H208V160M201 106V91" />
            <ellipse
              className="flame"
              cx="201"
              cy="84"
              rx="5"
              ry="9"
              fill="#e4cf9e"
            />
            <path d="M58 131V201M68 131V153H48V131M342 129V201M335 130Q319 154 342 159" />
          </g>
        )}
        {index === 2 && (
          <g>
            <path d="M145 100V72H255V100L272 117V205H128V117Z" fill="#263829" />
            <path d="M155 72H245M150 133H250M157 160H243" opacity=".5" />
            <g className="faith-coin">
              <circle cx="200" cy="38" r="17" fill="#bda171" />
              <text
                x="200"
                y="39"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="Arial, sans-serif"
                fontSize="24"
                fill="#263829"
                stroke="none"
              >
                $
              </text>
            </g>
            {[166, 198, 230].map((x) => (
              <g key={x}>
                <circle cx={x} cy="187" r="13" />
                <text
                  x={x}
                  y="188"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="Arial, sans-serif"
                  fontSize="19"
                  fill="#ceb787"
                  stroke="none"
                >
                  $
                </text>
              </g>
            ))}
          </g>
        )}
        {index === 3 && (
          <g>
            <path
              className="faith-draw"
              d="M200 37L279 68V132Q276 185 200 212Q124 185 121 132V68Z"
              fill="#23382b"
            />
            <path
              d="M166 127L190 152L238 99"
              stroke="#a8bf8e"
              strokeWidth="6"
            />
            <g className="faith-float" opacity=".65">
              <path d="M71 73L80 88M322 75L332 62M65 174L80 169M321 172L336 181" />
            </g>
          </g>
        )}
        {index === 4 && (
          <g>
            <path d="M82 47L175 183M318 47L225 183" opacity=".25" />
            <path
              className="faith-heart"
              d="M200 172C126 126 143 76 178 90Q200 99 200 111Q200 99 222 90C257 76 274 126 200 172Z"
              fill="#65825e"
            />
            <path d="M137 212H263" />
            <g className="faith-float">
              <path d="M87 89V105M79 97H95M307 124V140M299 132H315" />
            </g>
          </g>
        )}
        {index === 5 && (
          <g>
            <path
              className="faith-draw"
              d="M104 47H260L285 73V198H104ZM260 47V73H285"
              fill="#233329"
            />
            <path
              d="M129 87H227M129 109H246M129 131H224M129 153H193"
              opacity=".6"
            />
            <g className="faith-rings">
              <circle cx="252" cy="175" r="27" />
              <circle cx="285" cy="175" r="27" stroke="#9cba85" />
            </g>
          </g>
        )}
      </g>
    </svg>
  );
}

export function FaithPerspective() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = useReducedMotion();
  const { title, paragraphs, links } = reflections[index];
  const goTo = (next: number) => {
    if (next < 0 || next >= reflections.length || next === index) return;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };
  return (
    <div
      className="faith-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Faith and a simple walimah"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") {
          e.preventDefault();
          goTo(index + 1);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          goTo(index - 1);
        }
      }}
    >
      <div
        className="faith-stage"
        id="faith-stage"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.article
            className="faith-slide"
            key={index}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: reduced ? 0 : d * 32 }),
              visible: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: reduced ? 0 : -d * 32 }),
            }}
            initial="enter"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${reflections.length}`}
          >
            <div className="faith-slide-heading">
              <h3>{title}</h3>
              <TopicVisual index={index} />
            </div>
            <div className="faith-body">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <div className="faith-sources">
                {links.map(([label, url]) => (
                  <a
                    className="text-link"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    key={url}
                  >
                    {label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
      <div className="faith-controls">
        <button
          className="faith-arrow"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          aria-label="Previous perspective slide"
          aria-controls="faith-stage"
        >
          ←
        </button>
        <div className="faith-position">
          <span>
            {index + 1} / {reflections.length}
          </span>
          <div
            className="faith-dots"
            role="group"
            aria-label="Choose a perspective slide"
          >
            {reflections.map((r, i) => (
              <button
                key={r.title}
                aria-label={`Slide ${i + 1}: ${r.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
        <button
          className="faith-arrow"
          onClick={() => goTo(index + 1)}
          disabled={index === reflections.length - 1}
          aria-label="Next perspective slide"
          aria-controls="faith-stage"
        >
          →
        </button>
      </div>
    </div>
  );
}
