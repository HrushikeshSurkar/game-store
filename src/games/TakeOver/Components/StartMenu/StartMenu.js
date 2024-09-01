// StartMenu.js
import React from "react";
import "./StartMenu.scss";

const StartMenu = ({ setCurrentScreen }) => {
  return (
    <div className="start-menu-wrapper">
      <div className="start-menu-container">
        <div className="start-menu">
          <div
            className="start-game"
            onClick={() => setCurrentScreen("main-arena")} // Update screen to main-arena
          >
            Start Game
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
