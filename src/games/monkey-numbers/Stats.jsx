/* eslint-disable react/prop-types */
import { useEffect } from "react";
import classes from "./Stats.module.css";

function Stats({ level, lives, timeLeft, onPassingSec }) {
  let livesLeft = "💗 ".repeat(lives);
  if (lives > 3) {
    livesLeft = `${"💗 ".repeat(3)} +${lives - 3}`;
  }

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      onPassingSec();
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onPassingSec]);

  return (
    <div className={classes.stats}>
      <p>Level: {level}</p>
      {timeLeft > 0 && <p>{timeLeft}</p>}
      <p>{livesLeft}</p>
    </div>
  );
}

export default Stats;
