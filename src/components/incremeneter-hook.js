import React, { useState } from "react";

export default function IncrementerHook() {
  const [clicks, updateClicks] = useState(0);

  const numberBigger = () => {
    updateClicks(clicks + 1);
  };

  const numberSmaller = () => {
    updateClicks(clicks - 1);
  };

  return (
    <div>
      <h2>{clicks}</h2>
      <button onClick={numberBigger}>Up</button>
      <button onClick={numberSmaller}>Down</button>
    </div>
  );
}
