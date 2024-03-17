"use client";

import { useState, useRef } from "react";

const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current!);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current!);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (milliseconds: number): string => {
    const pad = (num: number, size: number) => ("000" + num).slice(size * -1);
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(centiseconds, 2)}`;
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        onClick={startStopwatch}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <h1>Stopwatch</h1>
      <p>{formatTime(time)}</p>

      <button
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none"
        onClick={resetStopwatch}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
