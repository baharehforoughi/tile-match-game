//Scoreboard.tsx
import React, { Dispatch, SetStateAction } from "react";

interface ScoreboardProps {
  scores: { name: string; score: number }[];
  setStartTime: Dispatch<SetStateAction<Date | null>>;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scores, setStartTime }) => {
  const topScores = scores.sort((a, b) => b.score - a.score).slice(0, 10);

  return (
    <div className="max-w-xs my-0 mr-0 ml-32 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-4">Tile Match Game</h1>
      <div className="border-t-2 border-b-2 border-gray-200 py-2">
        <h3 className="text-center text-2xl font-bold mb-2 underline">
          Scoreboard
        </h3>
        {topScores.map((player, index) => (
          <div key={index} className="flex justify-between mb-5">
            <span>{`${index + 1}. ${player.name}`}</span>
            <span>{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;
