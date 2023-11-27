/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo, useState } from "react";
import classes from "./Target.module.css";

function randomPercent() {
  return `${Math.floor(Math.random() * 100 + 1)}%`;
}

function Target({ onTargetClick, difficulty }) {
  const top = randomPercent();
  const left = randomPercent();

  const [size, setSize] = useState(200);
  console.log(difficulty);

  function handleHit(e) {
    onTargetClick(+e.target.id);
    if (difficulty === "easy") return;
    if (difficulty === "medium" && size === 150) return;
    if (difficulty === "hard" && size === 80) return;
    setSize((prevSize) => prevSize - 10);
  }

  return (
    <div
      className={classes.target}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        transform: `translate(-${left}, -${top})`,
      }}
      onClick={(e) => handleHit(e)}
    >
      <div className={classes.outer} id="1">
        <div className={classes.middle} id="2">
          <div className={classes.inner} id="3"></div>
        </div>
      </div>
    </div>
  );
}

export default memo(Target);
