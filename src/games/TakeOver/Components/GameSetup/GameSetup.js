// GameSetup.js
import React from "react";

const GameSetup = ({ selectedMap, startGame }) => {
  return (
    <div className="game-setup">
      <h1>Game Setup</h1>
      <p>You have selected: {selectedMap}</p>
      <button onClick={startGame}>Start Game</button>
      {/* Additional settings can be added here */}
    </div>
  );
};

export default GameSetup;
