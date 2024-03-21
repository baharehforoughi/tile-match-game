import React, { useEffect, useState } from "react";

interface StopwatchProps {
  isRunning: boolean;
  resetSignal: number;
}

const StopWatch: React.FC<StopwatchProps> = ({ isRunning, resetSignal }) => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    if (!isRunning) {
      setTime(0); // Reset time when not running
    }
  }, [isRunning]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      const startTime = Date.now() - time;
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, time]);

  const formatTime = (milliseconds: number): string => {
    const pad = (num: number, size: number) => ("000" + num).slice(size * -1);
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);
    return `${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(centiseconds, 2)}`;
  };

  return (
    <div className="flex items-center space-x-4">
      <p>{formatTime(time)}</p>
    </div>
  );
};

export default StopWatch;
