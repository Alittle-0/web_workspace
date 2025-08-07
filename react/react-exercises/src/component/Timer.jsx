import React, { useState, useEffect } from 'react'
import './Timer.css';

function Timer() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds])

  const startTimer = () => {
    setIsRunning(true);
  }

  const pauseTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  }

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="timer">
      <h2>Timer</h2>
      <div className="timer-display">
        {formatTime(seconds)}
      </div>
      <div className="timer-buttons">
        <button 
          onClick={startTimer} 
          className="start-btn"
          disabled={isRunning}
        >
          Start
        </button>
        <button 
          onClick={pauseTimer} 
          className="pause-btn"
          disabled={!isRunning}
        >
          Pause
        </button>
        <button 
          onClick={resetTimer} 
          className="reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
