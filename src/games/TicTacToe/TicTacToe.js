import React, { useState } from "react";
import "./TicTacToe.scss";

const TicTacToe = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    checkWinner(newBoard);
  };

  const checkWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes(null)) {
      setWinner("It's a draw!");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderSquare = (index) => (
    <button
      key={index}
      className={`square ${winner ? "disabled" : ""}`}
      onClick={() => handleClick(index)}
      disabled={winner}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="tic-tac-toe">
      <div className="instructions">
        <h2>How to Play</h2>
        <p>Click on any empty square to place your X or O.</p>
        <p>
          The first player to get three of their marks in a row (horizontally,
          vertically, or diagonally) wins the game.
        </p>
        <p>Have fun!</p>
      </div>
      <div className="game-board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => renderSquare(row * 3 + col))}
          </div>
        ))}
        <div>{winner ? `Winner: ${winner}` : null}</div>
        {winner && (
          <button className="reset-button" onClick={resetGame}>
            Reset Game
          </button>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
