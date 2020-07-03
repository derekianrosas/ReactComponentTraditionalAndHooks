import React, { useState } from "react";

export default function alignment() {
  const [alignment, updateAlignment] = useState("left");

  const changeAlignment = (newAlignment) => {
    updateAlignment(newAlignment);
  };

  return (
    <div>
      <h2 style={{ textAlign: alignment }}>Align me!</h2>
      <button onClick={() => changeAlignment("left")}>Left</button>
      <button onClick={() => changeAlignment("center")}>Center</button>
      <button onClick={() => changeAlignment("right")}>Right</button>
    </div>
  );
}
