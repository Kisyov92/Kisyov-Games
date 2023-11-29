/* eslint-disable react/prop-types */
import classes from "./Stats.module.css";

function Stats({ difficulty, level }) {
  return (
    <div className={classes.stats}>
      <p>Level: {level}</p>
      <p>Difficulty: {difficulty}</p>
    </div>
  );
}

export default Stats;
