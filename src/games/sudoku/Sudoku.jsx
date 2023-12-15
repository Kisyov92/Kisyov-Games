/* eslint-disable react/prop-types */
import classes from "./Sudoku.module.css";

function compareArr(arr1, arr2) {
  return arr1?.toString() === arr2.toString();
}

function Sudoku({
  unsolvedSudoku,
  onSetActiveSqare,
  activeSqare,
  wrongNumbers,
}) {
  return (
    <div className={classes.board}>
      {unsolvedSudoku.map((row, i) => (
        <div key={i}>
          {row.map((num, j) => (
            <div
              className={`${classes.num}
                 ${compareArr(activeSqare, [i, j]) ? classes.active : ""} ${
                wrongNumbers.some((sqare) => {
                  return compareArr(sqare, [i, j]);
                })
                  ? classes.wrong
                  : ""
              }
               `}
              key={j}
              onClick={() => onSetActiveSqare([i, j])}
            >
              {num !== 0 && num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sudoku;
