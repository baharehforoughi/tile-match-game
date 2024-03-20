import React from "react";

interface ScoreboardProps {
  scores: { name: string; score: number }[];
}

const Scoreboard: React.FC<ScoreboardProps> = ({ scores }) => {
  // Sort the scores in descending order
  const sortedScores = scores.sort((a, b) => b.score - a.score);

  return (
    <div className="scoreboard">
      <h3>Scoreboard</h3>
      <ol>
        {sortedScores.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Scoreboard;
