import { useState } from "react";
import StartModal from "./StartModal";
import Game from "./Game";

function MemoryApp() {
  const [isPlaying, setIsPlaying] = useState(null);

  function handlePlay() {
    setIsPlaying(true);
  }

  return (
    <>
      {!isPlaying && <StartModal onPlay={handlePlay} />}
      {isPlaying && <Game />}
    </>
  );
}

export default MemoryApp;
