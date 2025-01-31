import React from "react";

function InputTimer({handleInput,handleStart}) {
  return (
    <div className="input-container">
      <div className="input-box">
        <input id="hours" placeholder="HH" onChange={handleInput} />
        <input id="min" placeholder="MM" onChange={handleInput} />
        <input id="sec" placeholder="SS" onChange={handleInput} />
      </div>
      <button className="timer-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
}

export default InputTimer;
