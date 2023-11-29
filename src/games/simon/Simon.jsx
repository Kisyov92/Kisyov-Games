import { useState } from "react";
import DeviceSimon from "./DeviceSimon";
import Stats from "./Stats";
import StartModal from "./StartModal";
import GameOverModal from "./GameOverModal";

function Simon() {
  const [gameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [level, setLevel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function handleSetDifficulty(diff) {
    setDifficulty(diff);
  }

  function handleLevelUp() {
    setLevel((prevLvl) => prevLvl + 1);
    setIsPlaying(true);
  }

  function handleEndPlay() {
    setIsPlaying(false);
  }

  function handleEndGame() {
    setGameOver(true);
  }

  function handleGameRestart() {
    setGameOver(false);
    setDifficulty(null);
    setLevel(0);
  }

  return (
    <>
      {!difficulty && !gameOver && (
        <StartModal onSetDifficulty={handleSetDifficulty} />
      )}
      {difficulty && !gameOver && (
        <>
          <Stats level={level} difficulty={difficulty} />
          <DeviceSimon
            level={level}
            onLevelUp={handleLevelUp}
            isPlaying={isPlaying}
            difficulty={difficulty}
            onEndPlay={handleEndPlay}
            onEndGame={handleEndGame}
          />
        </>
      )}
      {gameOver && (
        <GameOverModal
          onGameRestart={handleGameRestart}
          level={level}
          difficulty={difficulty}
        />
      )}
    </>
  );
}

export default Simon;
