import React from "react";
import { useState } from "react";
import "./GameControls.scss";

const GameControls = () => {
  const [storedFunctions, setStoredFunctions] = useState([]);

  const handleStoredFunctions = () => {
    const newFunction = "function() { return 'Hello, World!'; }";
    setStoredFunctions([...storedFunctions, newFunction]);
  };
  return (
    <div className="game-controls-container">
      <div className="stored-functions">
        <h2>Your Controls</h2>
        <div className="functions-list">
          <div>
            {storedFunctions.map((func, index) => (
              <div key={index}>
                {func}
                <button
                  onClick={() => {
                    setStoredFunctions(
                      storedFunctions.filter((_, i) => i !== index)
                    );
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="code-editor">
        <h3>Create your Controls</h3>
        <textarea placeholder="Write your code here..." rows={10}></textarea>
        <button
          onClick={() => {
            handleStoredFunctions();
          }}
        >
          Generate Function
        </button>
      </div>
    </div>
  );
};

export default GameControls;
