import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  let words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word != "");
  let charsCount = text.length;
  let wordsCount = words.length;
  let charsExclSpaces = text.replace(/\s/g, "").length;
  return (
    <div>
      <div>
        Words: {wordsCount}
      </div>
      <div>
        Letters: {charsCount}
      </div>
      <div>
        Paragraph: {charsExclSpaces}
      </div>
      <textarea
        placeholder="Type or paste your text"
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
