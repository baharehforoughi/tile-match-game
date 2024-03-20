import React, { useState, useEffect } from "react";
import MemoryGame from "@/components/MemoryGame";
import Scoreboard from "@/components/Scoreboard";
import Stopwatch from "@/components/Stopwatch";
import GameWinPopup from "@/components/GameWinPopup";

const elapsedTime = 120;

const GamePage = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [scores, setScores] = useState<Array<{ name: string; score: number }>>(
    []
  );

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const calculateScore = (startTime: Date, endTime: Date) => {
    const timeDiff = endTime.getTime() - startTime.getTime(); // Time difference in milliseconds
    const timeInSeconds = timeDiff / 1000; // Convert to seconds
    const baseScore = 1000;
    const score = baseScore - timeInSeconds; // Subtract from base score
    return Math.max(score, 0); // Ensures score is not negative
  };

  const startGame = () => {
    setIsGameActive(true);
    setStartTime(new Date());
  };

  const resetGame = () => {
    setIsGameActive(false);
    // Reset game logic
  };

  const handleNameSubmit = (name: string) => {
    console.log(`Name: ${name}, Score: ${score}`);
    // To hide the popup after submitting
    setShowPopup(false);
  };

  // Function that gets called when the game is won
  const handleGameWin = () => {
    console.log("Game won!"); // Debugging line
    setShowPopup(true); // Show the popup when the game is won
    if (startTime) {
      const endTime = new Date();
      const finalScore = calculateScore(startTime, endTime);
      setScore(finalScore); // Update the score for the GameWinPopup
    } else {
      console.error("Start time is null."); // Error if startTime wasn't set
    }
  };

  const updateScores = (name: string, newScore: number) => {
    console.log(`Updating scores with: ${name} - ${newScore}`); // Debugging line
    setScores((prevScores) =>
      [...prevScores, { name, score: newScore }].sort(
        (a, b) => b.score - a.score
      )
    );
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4 user-select-none select-none">
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center space-y-4">
        <div className="flex justify-start space-x-2">
          <Scoreboard scores={scores} />
        </div>
        <div className="container">
          <MemoryGame onGameWin={handleGameWin} />
        </div>
        <div>
          {showPopup && (
            <GameWinPopup
              score={score}
              onNameSubmit={(name) => updateScores(name, score)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
