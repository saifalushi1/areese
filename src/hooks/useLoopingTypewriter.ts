import { useEffect, useState } from "react";

type TypewriterPhase = "typing" | "holding";

type Options = {
  speed?: number;
  holdMs?: number;
};

export function useLoopingTypewriter(
  text: string,
  { speed = 42, holdMs = 10_000 }: Options = {},
) {
  const [phase, setPhase] = useState<TypewriterPhase>("typing");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    setPhase("typing");
    setCharIndex(0);
  }, [text]);

  useEffect(() => {
    if (!text) return;

    if (phase === "typing") {
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        setCharIndex(i);
        if (i >= text.length) {
          window.clearInterval(id);
          setPhase("holding");
        }
      }, speed);

      return () => window.clearInterval(id);
    }

    if (phase === "holding") {
      const id = window.setTimeout(() => {
        setCharIndex(0);
        setPhase("typing");
      }, holdMs);

      return () => window.clearTimeout(id);
    }
  }, [phase, text, speed, holdMs]);

  const displayed = phase === "holding" ? text : text.slice(0, charIndex);
  const isTyping = phase === "typing";

  return { displayed, isTyping, phase };
}
