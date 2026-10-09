import { motion } from "framer-motion";

const reflections = [
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

export function FaithPerspective() {
  return (
    <div className="faith-reflections">
      {reflections.map(({ title, paragraphs, links }) => (
        <motion.article
          className="faith-point"
          key={title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h3>{title}</h3>
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
      ))}
    </div>
  );
}
