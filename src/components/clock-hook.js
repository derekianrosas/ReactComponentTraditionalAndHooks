import React, { useState, useEffect } from "react";

export default function ClockHook() {
  const [clockTime, setClockTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      setClockTime(new Date().toLocaleString());
    }, 1000);
  });

  return (
    <div>
      <p>Current Time : {clockTime}</p>
    </div>
  );
}
