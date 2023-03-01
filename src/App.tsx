import "./App.css";
import Header from "./components/Header";
import Generator from "./components/Generator";
import Output from "./components/Output";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [output, setOutput] = useState([]);
  const [paragraphs, setParagraphs] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="content-wrap">
      <Header />
      <Generator setOutput={setOutput} setParagraphs={setParagraphs} setCopied={setCopied} />
      <Output output={output} paragraphs={paragraphs} copied={copied} setCopied={setCopied} />
      <Footer />
    </div>
  );
}

export default App;