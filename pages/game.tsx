import React, { useState } from "react";
import MemoryGame from "@/components/MemoryGame";
import Scoreboard from "@/components/Scoreboard";
import Stopwatch from "@/components/Stopwatch";

const GamePage = () => {
  const [isGameActive, setIsGameActive] = useState(false);

  const startGame = () => {
    setIsGameActive(true);
    // Initialize game logic
  };

  const resetGame = () => {
    setIsGameActive(false);
    // Reset game logic
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center space-y-4">
        <div className="flex justify-start space-x-2">
          <Stopwatch />
        </div>
        <div className="container">
          <MemoryGame />
          <Scoreboard />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
