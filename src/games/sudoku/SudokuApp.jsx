import { useCallback, useState } from "react";
import Sudoku from "./Sudoku";
import { useEffect } from "react";
import classes from "./SudokuApp.module.css";
import Controls from "./Controls";
import { produce } from "immer";
import SolvedModal from "./SolvedModal";

function compareArr(arr1, arr2) {
  return arr1?.toString() === arr2.toString();
}

function SudokuApp() {
  const [unsolvedSudoku, setUnsolvedSudoku] = useState([]);
  const [solvedSudoku, setSolvedSudoku] = useState([]);
  const [sudokuDifficulty, setSudokuDifficulty] = useState(null);
  const [activeSqare, setActiveSquare] = useState(null);
  const [wrongNumbers, setWrongNumbers] = useState([]);
  const [sudokuCounter, setSudokuCounter] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const sudokuSolved = compareArr(unsolvedSudoku.flat(), solvedSudoku.flat());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!activeSqare) return;
    const [row, col] = activeSqare;

    if (unsolvedSudoku[row][col] !== solvedSudoku[row][col]) {
      setMistakes((m) => m + 1);
      if (!wrongNumbers.find((wrongNum) => compareArr(wrongNum, [row, col])))
        setWrongNumbers((n) => [...n, [row, col]]);
    }

    if (unsolvedSudoku[row][col] === solvedSudoku[row][col]) {
      const correctedSqareIndex = wrongNumbers.findIndex((sqare) =>
        compareArr(sqare, [row, col])
      );

      setWrongNumbers((prev) =>
        wrongNumbers
          .slice(0, correctedSqareIndex)
          .concat(wrongNumbers.slice(correctedSqareIndex + 1))
      );
    }
  }, [unsolvedSudoku]);

  useEffect(() => {
    async function fetchSudoku() {
      setIsLoading(true);
      const res = await fetch("https://sudoku-api.vercel.app/api/dosuku");
      const data = await res.json();
      const sudokuData = data.newboard.grids[0];
      setUnsolvedSudoku(sudokuData.value);
      setSolvedSudoku(sudokuData.solution);
      setSudokuDifficulty(sudokuData.difficulty);
      setIsLoading(false);
    }
    fetchSudoku();
  }, [sudokuCounter]);

  const handlePlayerGuess = useCallback(
    function (num) {
      if (!activeSqare) return;
      const [row, col] = activeSqare;

      setUnsolvedSudoku(
        produce((draft) => {
          draft[row][col] = num;
        })
      );
    },
    [activeSqare]
  );

  useEffect(() => {
    const fn = (e) => {
      if (
        (e.keyCode >= 49 && e.keyCode <= 57) ||
        (e.keyCode >= 97 && e.keyCode <= 105)
      ) {
        handlePlayerGuess(+e.key);
      }
    };
    const listener = document.addEventListener("keydown", fn);

    return () => document.removeEventListener("keydown", fn);
  }, [handlePlayerGuess]);

  function handleSetActiveSqare(sqareArr) {
    const [row, col] = sqareArr;
    if (
      unsolvedSudoku[row][col] &&
      !wrongNumbers.some((sqare) => compareArr(sqare, sqareArr))
    )
      return;

    setActiveSquare(sqareArr);
  }

  function handleNewSudoku() {
    setActiveSquare(null);
    setWrongNumbers([]);
    setSudokuCounter((c) => c + 1);
    setMistakes(0);
  }

  return (
    <>
      <div className={classes.app}>
        {isLoading && (
          <h2 style={{ textAlign: "center", width: "64rem" }}>Loading...</h2>
        )}
        {!sudokuSolved && (
          <>
            {!isLoading && (
              <Sudoku
                unsolvedSudoku={unsolvedSudoku}
                solvedSudoku={solvedSudoku}
                onSetActiveSqare={handleSetActiveSqare}
                activeSqare={activeSqare}
                wrongNumbers={wrongNumbers}
              />
            )}
            <Controls
              onPlayerGuess={handlePlayerGuess}
              onNewSudoku={handleNewSudoku}
              difficulty={sudokuDifficulty}
              mistakes={mistakes}
            />
          </>
        )}
        {sudokuSolved && !isLoading && (
          <SolvedModal
            difficulty={sudokuDifficulty}
            mistakes={mistakes}
            onNewSudoku={handleNewSudoku}
          />
        )}
      </div>
    </>
  );
}

export default SudokuApp;
