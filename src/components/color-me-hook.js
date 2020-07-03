import React, { useState } from "react";

export default function ColorMeHook() {
  const [meColor, updateMeColor] = useState("");
  const [userText, updateUserText] = useState("Color Me!");

  return (
    <div>
      <h2 style={{ color: `${meColor}` }}>{userText}</h2>
      <form>
        <input
          type="text"
          name="meColor"
          value={meColor}
          placeholder="Color"
          onChange={(e) => updateMeColor(e.target.value)}
        ></input>
        <input
          type="text"
          name="userText"
          value={userText}
          onChange={(e) => updateUserText(e.target.value)}
          placeholder="colored text"
        ></input>
      </form>
    </div>
  );
}
