/* eslint-disable react/prop-types */
import { useState } from "react";

function GameNumber({ timerRunning, num }) {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => setClicked(true)}
      disabled={timerRunning && num !== 0}
    >
      {timerRunning || clicked ? num : ""}
    </button>
  );
}

export default GameNumber;
