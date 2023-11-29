import { useState } from "react";
import DeviceSimon from "./DeviceSimon";
import Stats from "./Stats";
import StartModal from "./StartModal";

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

  function handleMathingSequences() {
    setIsPlaying(false);
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
            onMatchingSeqs={handleMathingSequences}
          />
          {gameOver && <h2>GAME OVER</h2>}
        </>
      )}
    </>
  );
}

export default Simon;
