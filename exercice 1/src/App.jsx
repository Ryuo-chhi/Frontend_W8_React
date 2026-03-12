import React, { useState } from "react";

export default function App() {
  const [progress, setProgress] = useState(0);

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${progress * 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if(progress < 5) scoreColor = `#f3bc47`;
    else if (progress >= 5 && progress < 8) scoreColor = `#9cc54b`
    else scoreColor = `#00ff00`
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  function handleChange(e){
    console.log(e.target.value);
    setProgress(e.target.value);
  }

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={handleChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
