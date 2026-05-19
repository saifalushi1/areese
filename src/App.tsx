import dataMd from "../data.md?raw";
import { Slideshow } from "./components/Slideshow";
import { parseDataMd } from "./utils/parseData";

const data = parseDataMd(dataMd);

export default function App() {
  return <Slideshow title={data.title} slides={data.slides} />;
}
