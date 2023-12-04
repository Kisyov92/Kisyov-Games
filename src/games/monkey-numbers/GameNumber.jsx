/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

function timeout(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function GameNumber({ timerRunning, num, click, onMistake }) {
  const [clicked, setClicked] = useState(false);
  const [colored, setColored] = useState(false);

  async function handleClick() {
    if (num < click) return;
    setClicked(true);
    if (click !== num) setColored(true);
    await timeout(0.5);
    if (click !== num) {
      setColored(false);
      setClicked(false);
      onMistake();
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={timerRunning && num !== 0}
      style={{ backgroundColor: colored ? "red" : "" }}
      id={num}
    >
      {timerRunning || clicked ? num : ""}
    </button>
  );
}

export default GameNumber;
