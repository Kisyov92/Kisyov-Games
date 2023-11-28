import classes from "./DeviceSimon.module.css";

function DeviceSimon() {
  return (
    <>
      <div className={classes.device}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>Start Next Level</button>
      </div>
      <button className={classes.repeat}>Repeat Sequence</button>
    </>
  );
}

export default DeviceSimon;
