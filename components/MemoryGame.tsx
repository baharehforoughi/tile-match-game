import React from "react";
import "app/globals.css";

const MemoryGame = () => {
  return (
    <div className="game-container">
      <header className="game-header"></header>

      {/* TODO - Correct logic for tile flips */}
      <div className="game-board">
        {Array.from({ length: 16 }).map((_, index) => (
          <div
            key={index}
            className={`tile ${
              index === 0 || index === 5 || index === 10 || index === 15
                ? "flipped"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
