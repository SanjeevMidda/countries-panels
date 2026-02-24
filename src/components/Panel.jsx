import React, { useState } from "react";

const Panel = ({ title, area, colors }) => {
  const [position, setPosition] = useState(true);

  const togglePosition = () => setPosition((prev) => !prev);
  return (
    <div
      className={`panel ${position ? "movePanel" : ""}`}
      onClick={togglePosition}
    >
      <div className="textContent">
        <h3>{title}</h3>
        <h5>{area}</h5>
      </div>
      <div
        className="circle"
        role="button"
        style={{ "--color1": colors[0], "--color2": colors[1] }}
      ></div>
    </div>
  );
};

export default Panel;
