// src/components/games/TheWarrior/TheWarrior.js
import React from "react";
import HUD from "./HUD/HUD";
import Map from "./Components/GameWorld/Map";
import CharacterStats from "./Components/Character/CharacterStats";
import Combat from "./Components/Combat/Battle";
import Inventory from "./Components/Inventory/Inventory";
import QuestLog from "./Components/Quest/QuestLog";
import "./TheWarrior.scss";
import { IoChevronBackSharp } from "react-icons/io5";

const TheWarrior = () => {
  return (
    <div className="the-warrior">
      <button className="btn btn-light" onClick={() => window.history.back()}>
        <IoChevronBackSharp className="mb-1" />
        Back
      </button>
      <HUD />
      <Map />
      <CharacterStats />
      <Combat />
      <Inventory />
      <QuestLog />
    </div>
  );
};

export default TheWarrior;
