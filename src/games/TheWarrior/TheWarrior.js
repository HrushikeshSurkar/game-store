import React, { useState } from "react";
import "./TheWarrior.scss";
import StartMenu from "./pages/StartMenu/StartMenu";
import MainArena from "./pages/MainArena/MainArena";

const TheWarrior = () => {
  const [currentScreen, setCurrentScreen] = useState("start-menu");

  const handleBack = () => {
    if (currentScreen === "main-arena") {
      setCurrentScreen("start-menu");
    }
  };

  return (
    <div className="the-warrior">
      {currentScreen === "start-menu" && (
        <StartMenu setCurrentScreen={setCurrentScreen} />
      )}
      {currentScreen === "main-arena" && <MainArena goBack={handleBack} />}
    </div>
  );
};

export default TheWarrior;
