/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { memo, useState } from "react";
import classes from "./GameNumbers.module.css";
import GameNumber from "./GameNumber";

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function GameNumbers({ level, timerRunning }) {
  const [gameArr, setGameArr] = useState([]);
  const numsArr = [0, 1, 2, 3];
  if (level >= 30) numsArr.push(4, 5, 6, 7, 8, 9);
  else if (level >= 20) numsArr.push(4, 5, 6, 7);
  else if (level >= 10) numsArr.push(4, 5);

  if (!gameArr.length) setGameArr(shuffle(numsArr));
  console.log(timerRunning);

  return (
    <div
      className={classes.board}
      style={{ gridTemplateColumns: `repeat(${gameArr.length / 2}, 1fr)` }}
    >
      {gameArr.map((num) => (
        <GameNumber key={num} timerRunning={timerRunning} num={num} />
      ))}
    </div>
  );
}

export default memo(GameNumbers);
