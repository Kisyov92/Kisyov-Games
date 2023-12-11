import { useState } from "react";
import StartModal from "./StartModal";
import GameModal from "./GameModal";
import FriendInput from "./FriendInput";

function Hangman() {
  const [isPlaying, setIsPlaying] = useState({
    playing: false,
    players: null,
    needsWord: null,
    oponentWord: null,
    key: 1,
  });

  function handleSinglePlayer() {
    setIsPlaying((prev) => ({
      ...prev,
      playing: true,
      players: 1,
      needsWord: false,
    }));
  }

  function handleMultyPlayer() {
    setIsPlaying((prev) => ({
      ...prev,
      playing: true,
      players: 2,
      needsWord: true,
    }));
  }

  function handleOponentWordInput(e, word) {
    e.preventDefault();
    setIsPlaying((prev) => ({ ...prev, needsWord: false, oponentWord: word }));
  }

  function handleNewWord() {
    if (isPlaying.players === 2) {
      setIsPlaying((prev) => ({ ...prev, needsWord: true }));
    }
    setIsPlaying((prev) => ({ ...prev, key: isPlaying.key + 1 }));
  }

  return (
    <>
      {!isPlaying.playing && (
        <StartModal
          onSinglePlayer={handleSinglePlayer}
          onMultyPlayer={handleMultyPlayer}
        />
      )}
      {isPlaying.playing && isPlaying.needsWord && (
        <FriendInput onOponentWordInput={handleOponentWordInput} />
      )}
      {isPlaying.playing && !isPlaying.needsWord && (
        <GameModal
          key={isPlaying.key}
          oponentWord={isPlaying.oponentWord}
          onNewWord={handleNewWord}
        />
      )}
    </>
  );
}

export default Hangman;
