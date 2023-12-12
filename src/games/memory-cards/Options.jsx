import classes from "./Options.module.css";

function Options() {
  return (
    <div className={classes.options}>
      <h2>Options</h2>
      <div className={classes.level}>
        <p>Level:</p>
        <div>4x3</div>
        <div>4x4</div>
        <div>5x4</div>
        <div>6x5</div>
        <div>6x6</div>
      </div>
    </div>
  );
}

export default Options;
