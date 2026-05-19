import { useState } from "react";
import dataMd from "../data.md?raw";
import { Intro } from "./components/Intro";
import { Slideshow } from "./components/Slideshow";
import { parseDataMd } from "./utils/parseData";

const data = parseDataMd(dataMd);

export default function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Intro title={data.title} onStart={() => setStarted(true)} />;
  }

  return <Slideshow title={data.title} slides={data.slides} />;
}
