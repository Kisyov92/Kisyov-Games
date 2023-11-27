import { useCallback, useEffect, useState } from "react";
import StartModal from "./StartModal";
import Stats from "./Stats";
import Modal from "../../UI/Modal";
import Target from "./Target";

const initialTime = 10;

function Darts() {
  const [difficulty, setDifficulty] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(initialTime);

  function handleDifficultyChoice(diff) {
    setDifficulty(diff);
  }

  const handleTargetClick = useCallback(
    function (points) {
      setPoints((prevPoints) => prevPoints + points);
      if (points === 3) {
        setTime((prevTime) => prevTime + 1);
      }
    },
    [points]
  );

  function handleRestartGame() {
    setTime(initialTime);
    setPoints(0);
    setIsPlaying(false);
  }

  function handleChangeDifficulty() {
    setDifficulty(null);
    setIsPlaying(false);
    setPoints(0);
    setTime(initialTime);
  }

  useEffect(() => {
    if (!isPlaying) return;

    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, [time, isPlaying]);

  return (
    <>
      {!difficulty && <StartModal onChoice={handleDifficultyChoice} />}
      {difficulty && time > 0 && (
        <Stats difficulty={difficulty} time={time.toFixed()} points={points} />
      )}
      {difficulty && !isPlaying && time > 0 && (
        <Modal>
          <h2>Click on the target!</h2>
          <button onClick={() => setIsPlaying(true)}>START GAME</button>
        </Modal>
      )}
      {difficulty && isPlaying && time > 0 && (
        <Target onTargetClick={handleTargetClick} difficulty={difficulty} />
      )}
      {isPlaying && time <= 0 && (
        <Modal>
          <h2>Time is up!</h2>
          <p>
            Your scored {points} points on {difficulty} mode
          </p>
          <p>Give it another go!</p>
          <button onClick={handleRestartGame}>RESTART GAME</button>
          <button onClick={handleChangeDifficulty}>Change difficulty</button>
        </Modal>
      )}
    </>
  );
}

export default Darts;
