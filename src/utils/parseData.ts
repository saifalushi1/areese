export type Slide = {
  number: number;
  title: string;
  body: string;
};

export type SlideshowData = {
  title: string;
  slides: Slide[];
};

const SLIDE_START = /^\s*(\d+)\.\s+(.+)$/;

export function parseDataMd(raw: string): SlideshowData {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  const slides: Slide[] = [];
  let current: Slide | null = null;
  const bodyLines: string[] = [];

  const flushBody = () => {
    if (!current) return;
    current.body = bodyLines.join("\n").trim();
    bodyLines.length = 0;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed === "Here is the full 10-point list:") continue;

    if (!title && /^Title\s+/i.test(trimmed)) {
      title = trimmed.replace(/^Title\s+/i, "").trim();
      continue;
    }

    const slideMatch = line.match(SLIDE_START);
    if (slideMatch) {
      flushBody();
      if (current) slides.push(current);
      current = {
        number: Number(slideMatch[1]),
        title: slideMatch[2].trim(),
        body: "",
      };
      continue;
    }

    if (current) bodyLines.push(line);
  }

  flushBody();
  if (current) slides.push(current);

  return { title, slides };
}
