export type Slide = {
  number: number;
  title: string;
  body: string;
  isThankYou?: boolean;
};

export type SlideshowData = {
  title: string;
  slides: Slide[];
};

const SLIDE_START = /^\s*(\d+)\.\s*(.*)$/;

function markThankYou(slide: Slide) {
  slide.isThankYou = /thank you/i.test(slide.title);
}

export function parseDataMd(raw: string): SlideshowData {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  const slides: Slide[] = [];
  let current: Slide | null = null;
  let awaitingTitle = false;
  const bodyLines: string[] = [];

  const flushBody = () => {
    if (!current) return;
    current.body = bodyLines.join("\n").trim();
    bodyLines.length = 0;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "Here is the full 10-point list:") continue;
    if (!trimmed) {
      if (current && !awaitingTitle) bodyLines.push("");
      continue;
    }

    if (!title && /^Title\s+/i.test(trimmed)) {
      title = trimmed.replace(/^Title\s+/i, "").trim();
      continue;
    }

    const slideMatch = line.match(SLIDE_START);
    if (slideMatch) {
      flushBody();
      if (current) slides.push(current);

      const slideTitle = slideMatch[2].trim();
      current = {
        number: Number(slideMatch[1]),
        title: slideTitle,
        body: "",
      };
      awaitingTitle = !slideTitle;
      if (slideTitle) markThankYou(current);
      continue;
    }

    if (awaitingTitle && current) {
      current.title = trimmed;
      markThankYou(current);
      awaitingTitle = false;
      continue;
    }

    if (current) bodyLines.push(line);
  }

  flushBody();
  if (current) slides.push(current);

  for (const slide of slides) {
    if (slide.number === 11) markThankYou(slide);
  }

  return { title, slides };
}
