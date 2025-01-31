import React from "react";

function ShowTimer({hours,min,sec,isPaused,handlePause,handleResume,handleReset}) {
  return (
    <div className="show-container">
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{min < 10 ? `0${min}` : min}</div>
        <span>:</span>
        <div>{sec < 10 ? `0${sec}` : sec}</div>
      </div>

      <div className="action-box">
        {!isPaused && (
          <button className="timer-button" onClick={handlePause}>
            Pause
          </button>
        )}
        {isPaused && (
          <button className="timer-button" onClick={handleResume}>
            Resume
          </button>
        )}

        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ShowTimer;
