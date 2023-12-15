/* eslint-disable react/prop-types */
import classes from "./Controls.module.css";

function Controls({ onPlayerGuess, onNewSudoku, difficulty, mistakes }) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classes.controls}>
      <div className={classes.info}>
        <p>Mistakes: {mistakes}</p>
        <p>Difficulty: {difficulty}</p>
      </div>
      <div className={classes.numbers}>
        {numbers.map((num) => (
          <button key={num} onClick={() => onPlayerGuess(num)}>
            {num}
          </button>
        ))}
      </div>
      <button onClick={onNewSudoku}>New Sudoku</button>
    </div>
  );
}

export default Controls;
