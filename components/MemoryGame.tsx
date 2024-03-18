"use client";
import Image from "next/image";

import React from "react";
import { useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { useState } from "react";

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
export default function MemoryGame() {
  const [cards, setCards] = React.useState<string[]>(generateDeck());
  const [flipped, setFlipped] = React.useState<number[]>([]);
  const [solved, setSolved] = React.useState<number[]>([]);

  useEffect(() => {
    const checkForMatch = () => {
      const [first, second] = flipped;
      if (cards[first] === cards[second]) {
        setSolved([...solved, ...flipped]);
      }
      setFlipped([]);
    };

    if (flipped.length === 2) {
      setTimeout(() => checkForMatch(), 1000);
    }
  }, [cards, flipped, solved]);

  const handleClick = (index: number) => {
    if (!flipped.includes(index) && flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
  };
  const startGame = () => {
    const allIndices = Array.from(Array(cards.length).keys());
    setFlipped(allIndices);
    setTimeout(() => {
      setFlipped([]);
    }, 1500);
  };
  const gameOver = solved.length === cards.length;
  const resetGame = () => {
    setCards(generateDeck());
    setFlipped([]);
    setSolved([]);
  };

  return (
    <div className="text-center ">
      <h1>
        Memory Game
        {/* <Stopwatch /> */}
      </h1>
      {gameOver && <h2 className="p-5">You WON!</h2>}
      <div className="grid grid-cols-4 gap-5 mt-5 bg-gray-300 p-5">
        {cards.map((card, index) => (
          <div
            className={`flex justify-center items-center text-4xl font-bold text-black bg-white w-28 h-28 transform cursor-pointer transition-transform duration-300 ${
              flipped.includes(index) || solved.includes(index)
                ? "rotate-180"
                : ""
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {flipped.includes(index) || solved.includes(index) ? (
              <Image
                className="rotate-180"
                src={`/memory_card/${card}.png`}
                fill
                alt="Memory Card"
              />
            ) : (
              " "
            )}
          </div>
        ))}
      </div>
      <button
        onClick={resetGame}
        className="p-2 bg-slate-200 rounded-md mt-5 mr-5"
      >
        Restart
      </button>
      <button onClick={startGame} className="p-2 bg-slate-200 rounded-md mt-5">
        Start Game
      </button>
    </div>
  );
}