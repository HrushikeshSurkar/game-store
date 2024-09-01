import React, { useState, useEffect } from "react";
import "./GameArena.scss";

const GameArena = () => {
  const [playerPopulation, setPlayerPopulation] = useState(10);
  const [computerPopulation, setComputerPopulation] = useState(10);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [message, setMessage] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Interval to increase populations
  useEffect(() => {
    const interval = setInterval(() => {
      setComputerPopulation((prev) => Math.max(prev, 0) + 2); // Increase computer population

      // Check for loss condition
      if (playerPopulation > 0) {
        setPlayerPopulation((prev) => Math.max(prev, 0) + 1); // Increase player population
      } else {
        setIsGameOver(true);
        clearInterval(interval);
      }
    }, 1000); // Every second

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [isGameOver]);

  const handleAddPath = () => {
    if (!isGameOver) {
      if (playerPopulation > 0) {
        setPlayerPopulation((prev) => prev - 1); // Decrease player population
        setComputerPopulation((prev) => Math.max(prev - 1, 0)); // Decrease computer population
        if (computerPopulation <= 1) {
          setIsWinner(true);
          setMessage("You win!");
          clearInterval(intervalId); // Stop everything on win
        }
      }
    }
  };

  const handleNextLevel = () => {
    if (isWinner) {
      setBonusPoints((prev) => prev + 5); // Increase bonus points
      setComputerPopulation((prev) => prev + 5); // Increase computer population for next level
      setLevel((prev) => prev + 1); // Increase level
      setIsWinner(false);
      setMessage(`Level ${level + 1}!`);
    }
  };

  const handleRestart = () => {
    setPlayerPopulation(10);
    setComputerPopulation(10);
    setBonusPoints(0);
    setLevel(1);
    setMessage("");
    setIsGameOver(false);
    setIsWinner(false);
    clearInterval(intervalId); // Clear interval on restart
  };

  return (
    <div className="game-arena">
      <div className="tower player-1">
        <span>Player 1</span>
        <span>Population: {playerPopulation}</span>
      </div>
      <div className="tower computer">
        <span>Computer</span>
        <span>Population: {computerPopulation}</span>
      </div>
      <div className="buttons">
        <button
          onClick={handleAddPath}
          className="action-button"
          disabled={isGameOver}
        >
          Add Path
        </button>
        {isWinner && (
          <button onClick={handleNextLevel} className="action-button">
            Next Level
          </button>
        )}
      </div>
      {message && <div className="message">{message}</div>}
      {isGameOver && (
        <div className="popup">
          <div className="popup-content">
            <p>You lost! Your population reached zero.</p>
            <button onClick={handleRestart} className="action-button">
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameArena;
