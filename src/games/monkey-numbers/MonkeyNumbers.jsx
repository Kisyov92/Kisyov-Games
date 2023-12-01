import { useCallback, useState } from "react";
import StartModal from "./StartModal";
import Stats from "./Stats";
import GameOverModal from "./GameOverModal";
import GameNumbers from "./GameNumbers";
import Controls from "./Controls";

const INITIAL_LIVES = 3;
const TIME = 3;

function MonkeyNumbers() {
  const [isPlaying, setIsPlaying] = useState(null);
  const [level, setLevel] = useState(null);
  const [lives, setLives] = useState(0);
  const [restart, setRestart] = useState(0);

  const [timeLeft, setTimeLeft] = useState(TIME - (level % 10));

  const gameOver = lives === 0;
  const timerRunning = timeLeft !== 0;

  function handleGameStart(diff) {
    let initialLevel = 1;
    if (diff === "medium") initialLevel = 10;
    else if (diff === "hard") initialLevel = 20;

    setIsPlaying(diff);
    setLevel(initialLevel);
    setLives(INITIAL_LIVES);
  }

  function handlePlayAgain() {
    setIsPlaying(null);
    setLevel(null);
    setLives(INITIAL_LIVES);
  }

  function handleRestart() {
    setRestart((r) => r + 1);
    setTimeLeft(TIME - (level % 10));
  }

  const handlePassingSec = useCallback(() => {
    setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
  }, []);

  return (
    <>
      {!isPlaying && <StartModal onGameStart={handleGameStart} />}
      {!gameOver && isPlaying && (
        <>
          <Stats
            level={level}
            lives={lives}
            timeLeft={timeLeft}
            onPassingSec={handlePassingSec}
          />
          <GameNumbers
            level={level}
            key={restart}
            timerRunning={timerRunning}
          />
          <Controls onPlayAgain={handlePlayAgain} onRestart={handleRestart} />
        </>
      )}
      {gameOver && isPlaying && <GameOverModal onPlayAgain={handlePlayAgain} />}
      {/* <button onClick={() => setRestart((prev) => prev + 1)}>asdasdasd</button> */}
    </>
  );
}

export default MonkeyNumbers;
