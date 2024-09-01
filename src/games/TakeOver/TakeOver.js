import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartMenu from "./Components/StartMenu/StartMenu";
import BackButton from "./Components/CommonComponents/BackButton/BackButton";
import Maps from "./Components/Maps/Maps";
import GameSetup from "./Components/GameSetup/GameSetup";
import GameArena from "./Components/GameArena/GameArena";
import "./TakeOver.scss";

const TakeOver = () => {
  const [currentScreen, setCurrentScreen] = useState("start-menu");
  const [selectedMap, setSelectedMap] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    switch (currentScreen) {
      case "game-arena":
        setCurrentScreen("game-setup"); // Go back to game setup
        break;
      case "game-setup":
        setCurrentScreen("main-arena"); // Go back to map selection
        break;
      case "main-arena":
        setCurrentScreen("start-menu"); // Go back to start menu
        break;
      default:
        navigate(-1); // For other cases, navigate back in history
        break;
    }
  };

  const handleMapSelection = (mapName) => {
    setSelectedMap(mapName);
    setCurrentScreen("game-setup");
  };

  const startGame = () => {
    setCurrentScreen("game-arena");
  };

  return (
    <div className="take-over">
      <BackButton className="back-button" goBack={handleBack} />
      {currentScreen === "start-menu" && (
        <StartMenu setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === "main-arena" && (
        <Maps goBack={handleBack} selectMap={handleMapSelection} />
      )}
      {currentScreen === "game-setup" && (
        <GameSetup selectedMap={selectedMap} startGame={startGame} />
      )}
      {currentScreen === "game-arena" && (
        <GameArena selectedMap={selectedMap} />
      )}
    </div>
  );
};

export default TakeOver;
