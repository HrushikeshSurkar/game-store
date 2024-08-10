import React from "react";
import "./StartMenu.scss";
import BackButton from "../CommonComponents/BackButton";

const StartMenu = ({ setCurrentScreen }) => {
  return (
    <div className="start-menu-wrapper">
      <BackButton goBack={() => window.history.back()} />
      <div className="start-menu-container">
        <div className="start-menu">
          <button
            className="btn btn-primary"
            id="start-game"
            onClick={() => setCurrentScreen("main-arena")}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
