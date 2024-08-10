import React from "react";
import MiniMap from "./MiniMap";
import "./HUD.scss";

const HUD = () => {
  return (
    <div className="hud">
      <MiniMap />
      {/* Add other HUD elements like health bar, status effects, etc. */}
    </div>
  );
};

export default HUD;
