//GameWinPopup.tsx
import React, { useState } from "react";

interface GameWinPopupProps {
  score: number;
  onNameSubmit: (name: string, endTime: Date) => void; // Adjust this line
  isVisible: boolean;
  onHide: () => void;
}

const GameWinPopup: React.FC<GameWinPopupProps> = ({
  score,
  onNameSubmit,
  isVisible,
  onHide,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onNameSubmit(name, new Date()); // Pass new Date() as endTime
    onHide();
  };

  if (!isVisible) return null;

  return (
    // Backdrop
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      {/* For the popup Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-10">
        <h3 className="text-xl font-bold text-center mb-4">
          Congratulations! 🏆 You have won!
        </h3>
        <p className="text-center mb-4">Your Score is: {score}</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-2"
        >
          <input
            type="text"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-300 rounded p-2 text-lg"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default GameWinPopup;
