/* eslint-disable react/prop-types */
import classes from "./Controls.module.css";

function Controls({ onPlayAgain, onRestart }) {
  return (
    <div className={classes.controls}>
      <button onClick={onPlayAgain}>START NEW GAME</button>
      <button onClick={onRestart}>RESTART LEVEL</button>
    </div>
  );
}

export default Controls;
