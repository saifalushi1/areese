import { useState } from "react";
import { PerspectiveScene } from "./PerspectiveScenes";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const reflections = [
  {
    title: "Marriage is worth celebrating. Waste is worth questioning.",
    paragraphs: [
      "A wedding is not automatically haram. The Prophet ﷺ encouraged a walimah — a wedding meal. The concern is what we bring into it: waste, months of stress, pressure to impress, music, and not following the sunna.",
      "A big bill doesn’t make a marriage better. A modest celebration can honour our faith, bring people together, and leave room for the life we actually want.",
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
      "The Prophet Muhammad (ﷺ) said: “The most blessed nikah is the one with the least expenses.” This narration is attributed to al-Bayhaqi. In Sunan Abu Dawood (2117), he said: “The best marriage is the one that is most easy.”",
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
      "A $36,000–$52,000 celebration for a single evening deserves serious reflection. Are we spending within our means, or paying for appearances while neglecting responsibilities?",
    ],
    links: [
      ["Quran 7:31", "https://quran.com/7/31"],
      ["Bukhari 2408", "https://sunnah.com/bukhari:2408"],
    ],
  },
  {
    title: "Haram Has No Place at a Wedding",
    paragraphs: [
      "Celebrating a wedding should not involve prohibited practices. Neither should it involve indecent entertainment, obscene songs, or conduct that crosses Islamic boundaries. Instrumental music, backbiting, extravagance, and riyah are all common within weddings and explicitly forbidden. It’s not fair to ourselves or each other to create an environment that enables this.",
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
      "If showing off can corrupt such a serious act, it should make us examine our intentions at a wedding. “You’re only a bride once” should not become a reason to chase approval, strain our finances, or turn a sacred commitment into a performance for Instagram. Aim for sincerity and a celebration within our means. A venue or price tag cannot tell us how much blessing a marriage has.",
    ],
    links: [["Muslim 1905a", "https://sunnah.com/muslim:1905a"]],
  },
  {
    title: "The Nikah Itself is the Ibadah — Not the Party",
    paragraphs: [
      "Marriage should not be measured by the size of its party. The nikah, its religious requirements, the mahr, and the responsibilities spouses accept matter more than the catering. A simple celebration can honour the commitment without making it harder to begin married life.",
      "A narration attributed to the Prophet ﷺ says that marriage completes half of a person’s religion, and calls them to fear Allah regarding the remaining half. Invest in the marriage and the life we will share, rather than treating an expensive party as a religious requirement.",
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
    "The spotlight and the question mark: a warm wedding table beneath a gentle question mark made of light",
    "The humble tent: a small gathering and glowing lanterns beneath a vast starry sky",
    "The scale: a towering cake outweighs a modest meal, cracking the ground below the heavy pan",
    "The clean table: white linens, dates, flowers and simple dishes within warm light, holding smoky music notes and a goblet outside",
    "The leaking vessel: an ornate jar fills with golden light, then loses it through cracks beneath a spotlight",
    "The small circle, the wide horizon: a gathering on a rug, joined hands beneath a lantern, and an open road toward sunrise",
  ];
  return (
    <svg
      className="faith-visual"
      viewBox={index === 2 ? "0 0 400 270" : "0 0 400 240"}
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
        {index === 0 && <PerspectiveScene index={index} />}
        {index === 1 && <PerspectiveScene index={index} />}
        {index === 2 && <PerspectiveScene index={index} />}
        {index === 3 && <PerspectiveScene index={index} />}
        {index === 4 && <PerspectiveScene index={index} />}
        {index === 5 && <PerspectiveScene index={index} />}
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
