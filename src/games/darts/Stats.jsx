/* eslint-disable react/prop-types */
import classes from "./Stats.module.css";

function Stats({ difficulty, time, points }) {
  return (
    <div className={classes.stats}>
      <p>Points: {points}</p>
      <p>Time left: {time} sec</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}

export default Stats;
