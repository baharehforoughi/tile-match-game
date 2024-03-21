//game.tsx
import React, { useState, useCallback } from "react";
import MemoryGame from "@/components/MemoryGame";
import Scoreboard from "@/components/Scoreboard";
import GameWinPopup from "@/components/GameWinPopup";

const GamePage = () => {
  const [isGameActive, setIsGameActive] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [scores, setScores] = useState<Array<{ name: string; score: number }>>(
    []
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  const handleGameWin = useCallback(() => {
    const endTime = new Date();
    if (startTime) {
      const durationInSeconds =
        (endTime.getTime() - startTime.getTime()) / 1000;
      const pointsDeductedPerSecond = 5;
      const calculatedScore = Math.max(
        0,
        Math.round(10000 - durationInSeconds * pointsDeductedPerSecond)
      );

      setIsGameActive(false);
      setScore(calculatedScore);
      setShowPopup(true);
    }
  }, [startTime]);

  const handleNameSubmit = useCallback((name: string, score: number) => {
    const newScoreEntry = { name, score };
    setScores((prevScores) =>
      [...prevScores, newScoreEntry].sort((a, b) => b.score - a.score)
    );
    setShowPopup(false); // hides the popup
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4 user-select-none select-none">
      <div className="flex justify-between container mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-start space-y-4">
          <div className="container">
            <MemoryGame onGameWin={handleGameWin} setStartTime={setStartTime} />
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <Scoreboard scores={scores} setStartTime={setStartTime} />
          {showPopup && (
            <GameWinPopup
              score={score}
              onNameSubmit={handleNameSubmit}
              onHide={() => setShowPopup(false)} // Direct control for hiding
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default GamePage;
