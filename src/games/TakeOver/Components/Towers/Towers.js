// Towers/Towers.js
import React, { useState } from "react";
import "./Towers.scss";

const Towers = ({
  playerName,
  population,
  onDragStart,
  onDrop,
  isDragging,
}) => {
  const handleMouseDown = () => {
    onDragStart(playerName);
  };

  return (
    <div
      className={`tower ${isDragging ? "dragging" : ""}`}
      onMouseDown={handleMouseDown}
      style={{ cursor: isDragging ? "grabbing" : "pointer" }}
    >
      <h2>{playerName}</h2>
      <p>Population: {population}</p>
    </div>
  );
};

export default Towers;
