// Roads/Road.js
import React from "react";
import "./Roads.scss"; // Import the CSS for styling

const Road = ({ start, end }) => {
  return (
    <div
      className="road"
      style={{
        left: `${start.x}px`,
        top: `${start.y}px`,
        width: `${end.x - start.x}px`,
        height: "4px", // Thickness of the road
        transform: "translateY(-50%)", // Center the road vertically
      }}
    />
  );
};

export default Road;
