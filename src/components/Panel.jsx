import React, { useState } from "react";

const Panel = ({ title, area, colors }) => {
  const [position, setPosition] = useState(false);

  return (
    <div
      className="panel"
      style={{ transform: `translateY(${position ? "-100px" : "0px"})` }}
    >
      <div className="textContent">
        <h3>{title}</h3>
        <h5>{area}</h5>
      </div>
      <div
        className="circle"
        style={{
          background: `linear-gradient(${colors[0]}, ${colors[1]})`,
        }}
      ></div>
    </div>
  );
};

export default Panel;
