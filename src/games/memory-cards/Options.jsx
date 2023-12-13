import { useDispatch, useSelector } from "react-redux";
import { gameAction } from "./store/game";

import classes from "./Options.module.css";

function Options() {
  const level = useSelector((state) => state.level);
  const numberCards = useSelector((state) => state.numberCards);
  const showMistakes = useSelector((state) => state.showMistakes);
  const showMoves = useSelector((state) => state.showMoves);
  const dispatch = useDispatch();

  function handleLevels(payload) {
    if (level === payload.lvl) return;
    dispatch(gameAction.changeLevel(payload));
  }

  return (
    <div className={classes.options}>
      <h2>Options</h2>
      <div className={classes.level}>
        <p>Difficulty:</p>
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
      <div className={classes.bool}>
        <p>Numbered cards:</p>
        <button
          className={numberCards ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleCardNumbers(true))}
        >
          ON
        </button>
        <button
          className={!numberCards ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleCardNumbers(false))}
        >
          OFF
        </button>
      </div>
      <div className={classes.bool}>
        <p>Hide the moves:</p>
        <button
          className={showMoves ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleShowMoves(true))}
        >
          ON
        </button>
        <button
          className={!showMoves ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleShowMoves(false))}
        >
          OFF
        </button>
      </div>
      <div className={classes.bool}>
        <p>Hide the mistakes:</p>
        <button
          className={showMistakes ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleShowMistakes(true))}
        >
          ON
        </button>
        <button
          className={!showMistakes ? classes.active : ""}
          onClick={() => dispatch(gameAction.handleShowMistakes(false))}
        >
          OFF
        </button>
      </div>
    </div>
  );
}

export default Options;
