import React from "react";
import { useState } from "react";

function Output({ output, paragraphs, copied, setCopied }) {
  
  function handleCopy() {
    navigator.clipboard.writeText(output.join(" "));
    setCopied(true);
  }

  return (
    <main className="output-container">
      {paragraphs ? (
        <>
          <p className="output-text">
            {output.slice(0, output.length / 3).join(" ")}
          </p>

          <p className="output-text">
            {output.slice(output.length / 3, output.length / 1.5).join(" ")}
          </p>

          <p className="output-text">
            {output.slice(output.length / 1.5, output.length).join(" ")}
          </p>
        </>
      ) : (
        <p className="output-text">{output.join(" ")}</p>
      )}

      <div className="copy-button-container">
        {output.length > 0 ? (
          <button className="copy-button" onClick={handleCopy}>
            Copy to clipboard
          </button>
        ) : null}

        {copied ? <p className="copied-text">Copied!</p> : null}
      </div>
    </main>
  );
}

export default Output;
