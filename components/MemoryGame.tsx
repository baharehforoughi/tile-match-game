"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch"; // Assuming you have a Stopwatch component

const generateDeck = () => {
  const memoryCards = [
    "aquamarine",
    "lavenderpink",
    "mintgreen",
    "paleyellow",
    "peach",
    "periwinkle",
    "salmonpink",
    "skyblue",
  ];
  const deck = [...memoryCards, ...memoryCards];
  return deck.sort(() => Math.random() - 0.5);
};

interface MemoryGameProps {
  onGameWin: () => void;
  setStartTime: (date: Date | null) => void; // Function to set the start time in the parent component
}

export default function MemoryGame({
  onGameWin,
  setStartTime,
}: MemoryGameProps) {
  const [cards, setCards] = useState<string[]>(generateDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [resetStopwatchCounter, setResetStopwatchCounter] = useState(0);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      onGameWin();
      setStopwatchRunning(false);
    }
  }, [solved, cards.length, onGameWin]);

  const handleClick = (index: number) => {
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
  };

  const startGame = () => {
    setFlipped(Array.from(Array(cards.length).keys()));
    setTimeout(() => {
      setFlipped([]);
      setStopwatchRunning(true);
      setStartTime(new Date()); // Sets the start time in the parent component (game.tsx)
    }, 2000);
    setGameStarted(true);
  };

  const resetGame = () => {
    setCards(generateDeck());
    setFlipped([]);
    setSolved([]);
    setGameStarted(false);
    setStopwatchRunning(false);
    setStartTime(null);
    setResetStopwatchCounter((prev) => prev + 1); // Increment the reset counter to signal a reset
  };

  useEffect(() => {
    const checkForMatch = () => {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setSolved((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlipped([]), 1000);
    };

    if (flipped.length === 2) {
      checkForMatch();
    }
  }, [flipped, cards]);

  return (
    <div className="text-center user-select-none select-none">
      <Stopwatch
        isRunning={stopwatchRunning}
        resetSignal={resetStopwatchCounter}
      />
      <div className="grid grid-cols-4 gap-5 mt-5 bg-gray-300 p-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center items-center text-4xl font-bold text-black bg-white w-28 h-28 transform cursor-pointer ${
              flipped.includes(index) || solved.includes(index)
                ? "rotate-180"
                : ""
            } transition-transform duration-300`}
            onClick={() => handleClick(index)}
          >
            {flipped.includes(index) || solved.includes(index) ? (
              <Image
                src={`/memory_card/${card}.png`}
                alt="Memory Card"
                layout="fill"
              />
            ) : (
              " "
            )}
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={resetGame}
          className="p-2 bg-slate-200 rounded-md mr-4"
        >
          Restart
        </button>
        <button
          onClick={startGame}
          className={`p-2 bg-slate-200 rounded-md ${
            gameStarted ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={gameStarted}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
