import React, { useState } from "react";

export default function HideMeHook() {
  const [visible, updateVisible] = useState(true);
  const [buttonText, updateButtonText] = useState("Hide");

  const handleToggle = () => {
    updateVisible(!visible);
    updateButtonText(buttonText == "Hide" ? "visible" : "hidden");
  };

  return (
    <div>
      <h3 style={{ visibility: visible ? "visible" : "hidden" }}>Hello!</h3>
      <button onClick={handleToggle}>{visible ? "Hide" : "Show"}</button>
    </div>
  );
}
