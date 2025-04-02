import React from "react";
import useCharacterCount from "../hooks/useCharacterCount";
import "./styles.css";

const CharacterCounter = () => {
  const { state, handleTextChange, copyToClipboard, copied, warning, maxLimit } =
    useCharacterCount(200);

  return (
    <div className="container">
      <h2>Real-Time Character Counter</h2>
      <textarea value={state.text} onChange={handleTextChange} />
      
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${(state.count / maxLimit) * 100}%`,
            backgroundColor: warning ? "red" : "blue",
          }}
        ></div>
      </div>

      <p className={warning ? "warning" : ""}>
        {state.count} / {maxLimit} characters
      </p>

      <button onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CharacterCounter;
