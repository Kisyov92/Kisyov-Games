import { useDispatch, useSelector } from "react-redux";
import { gameAction } from "./store/game";

import classes from "./Options.module.css";

function Options() {
  const level = useSelector((state) => state.level);
  const dispatch = useDispatch();

  function handleLevels(payload) {
    if (level === payload.lvl) return;
    dispatch(gameAction.changeLevel(payload));
  }

  return (
    <div className={classes.options}>
      <h2>Options</h2>
      <div className={classes.level}>
        <p>Level:</p>
        <div
          onClick={() => handleLevels({ cols: 4, cards: 6, lvl: 1 })}
          className={level === 1 ? classes.active : ""}
        >
          4x3
        </div>
        <div
          onClick={() => handleLevels({ cols: 4, cards: 8, lvl: 2 })}
          className={level === 2 ? classes.active : ""}
        >
          4x4
        </div>
        <div
          onClick={() => handleLevels({ cols: 5, cards: 10, lvl: 3 })}
          className={level === 3 ? classes.active : ""}
        >
          5x4
        </div>
        <div
          onClick={() => handleLevels({ cols: 6, cards: 15, lvl: 4 })}
          className={level === 4 ? classes.active : ""}
        >
          6x5
        </div>
        <div
          onClick={() => handleLevels({ cols: 6, cards: 18, lvl: 5 })}
          className={level === 5 ? classes.active : ""}
        >
          6x6
        </div>
      </div>
    </div>
  );
}

export default Options;
