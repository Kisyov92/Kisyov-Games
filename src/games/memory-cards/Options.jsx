import { useDispatch } from "react-redux";
import { optionsAction } from "./store/options";

import classes from "./Options.module.css";

function Options() {
  const dispatch = useDispatch();

  function handleLevels(payload) {
    dispatch(optionsAction.changeLevel(payload));
  }

  return (
    <div className={classes.options}>
      <h2>Options</h2>
      <div className={classes.level}>
        <p>Level:</p>
        <div onClick={() => handleLevels({ cols: 4, cards: 6 })}>4x3</div>
        <div onClick={() => handleLevels({ cols: 4, cards: 8 })}>4x4</div>
        <div onClick={() => handleLevels({ cols: 5, cards: 10 })}>5x4</div>
        <div onClick={() => handleLevels({ cols: 6, cards: 15 })}>6x5</div>
        <div onClick={() => handleLevels({ cols: 6, cards: 18 })}>6x6</div>
      </div>
    </div>
  );
}

export default Options;
