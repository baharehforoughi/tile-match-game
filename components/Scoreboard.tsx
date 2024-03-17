//ScoreBoard.tsx - Created as a placeholder for design layout | TODO: Implement the Scoreboard component
function Scoreboard() {
  // Dummy scores data
  const dummyScores = [
    { playerName: "Player name", score: 100 },
    { playerName: "Player name", score: 200 },
    { playerName: "Player name", score: 300 },
    { playerName: "Player name", score: 400 },
    { playerName: "Player name", score: 500 },
    { playerName: "Player name", score: 600 },
    { playerName: "Player name", score: 700 },
    { playerName: "Player name", score: 800 },
    { playerName: "Player name", score: 900 },
    { playerName: "Player name", score: 1000 },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Tile Match Game</h1>
      <div className="rounded-lg border-2 border-black p-4">
        <h2 className="text-xl font-bold underline mb-2">Scoreboard</h2>
        <div className="space-y-2">
          {dummyScores.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>
                {index + 1} {item.playerName}
              </span>
              <span>{item.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
