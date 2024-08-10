import React from "react";
import HUD from "../../HUD/HUD";
import Map from "../../Components/GameWorld/Map";
import CharacterStats from "../../Components/Character/CharacterStats";
import Combat from "../../Components/Combat/Battle";
import Inventory from "../../Components/Inventory/Inventory";
import QuestLog from "../../Components/Quest/QuestLog";
import BackButton from "../CommonComponents/BackButton";

const MainArena = ({ goBack }) => {
  return (
    <div>
      <BackButton goBack={() => goBack()} />
      <HUD />
      <Map />
      <CharacterStats />
      <Combat />
      <Inventory />
      <QuestLog />
    </div>
  );
};

export default MainArena;
