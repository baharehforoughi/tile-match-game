//GameWinPopup.tsx
import React, { useState } from "react";

interface GameWinPopupProps {
  score: number;
  onNameSubmit: (name: string) => void;
}

const GameWinPopup: React.FC<GameWinPopupProps> = ({ score, onNameSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onNameSubmit(name);
  };

  return (
    <div className="game-win-popup">
      <h2>Congratulations! 🏆 You have won!</h2>
      <p>Your Score is: {score}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GameWinPopup;
