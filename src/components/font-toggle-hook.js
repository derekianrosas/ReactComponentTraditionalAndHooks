import React, { useState } from "react";

export default function FontToggleHook() {
  const [clicks, updateClicks] = useState(0);
  const [show, updateShow] = useState(true);

  const fontBigger = () => {
    updateClicks(clicks + 1);
  };

  const fontSmaller = () => {
    updateClicks(clicks - 1);
  };

  return (
    <div>
      <h2 style={{ fontSize: `${clicks}px` }}>{clicks}px</h2>
      <input
        type="text"
        name="clicks"
        value={clicks}
        placeholder="number"
        onChange={(e) => updateClicks(e.target.value)}
      ></input>
      <button onClick={fontBigger}>Bigger</button>
      <button onClick={fontSmaller}>Smaller</button>
    </div>
  );
}
