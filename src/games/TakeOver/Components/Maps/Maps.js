import React from "react";
import "./Maps.scss";

const Maps = ({ goBack, selectMap }) => {
  const handleMapSelection = (mapName) => {
    selectMap(mapName); // Pass the selected map back to the TakeOver component
  };

  return (
    <div className="maps-container">
      <h1 className="maps-title">Select Your Map</h1>
      <div className="map-grid">
        {/* Example of map slots */}
        {["Map 1", "Map 2", "Map 3", "Map 4"].map((map) => (
          <div
            key={map}
            className="map-slot"
            onClick={() => handleMapSelection(map)}
          >
            {map}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
