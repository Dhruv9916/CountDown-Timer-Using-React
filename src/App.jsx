import { useEffect, useState } from "react";
import "./App.css";
import InputTimer from "./InputTimer";
import ShowTimer from "./ShowTimer";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || min < 0 || sec <= 0) {
      alert("Invalid Input");
    } else {
      setIsStart(true);
    }
  };

  const handleResume = () => {
    setIsPaused(false);
    runTimer(sec, min, hours);
  };

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHours(0);
    setMin(0);
    setSec(0);

    clearInterval(timerId);
  };

  const handleInput = (e) => {
    //console.log(e.target.id, e.target.value);
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHours(value);
    } else if (id === "min") {
      setMin(value);
    } else {
      setSec(value);
    }
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSec((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMin((m) => m - 1);
      setSec(59);
    } else {
      setHours((h) => h - 1);
      setMin(59);
      setSec(59);
    }

    if (sec === 0 && min === 0 && hours === 0) {
      //resetTimer();
      handleReset();
      alert("Timer is Finishted");
      clearInterval(tid);
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(sec, min, hours, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, min, sec]);

  //console.log(hours, min, sec);
  return (
    <div className="App">
      <h1>CountDown Timer</h1>

      {!isStart && 
        <InputTimer handleInput={handleInput} handleStart={handleStart} />
      }

      {isStart && (
        <ShowTimer
          hours={hours}
          min={min}
          sec={sec}
          isPaused={isPaused}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
        />
      )}
    </div>
  );
}

export default App;
