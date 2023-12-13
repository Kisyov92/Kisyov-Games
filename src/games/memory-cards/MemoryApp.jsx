import { useState } from "react";
import StartModal from "./StartModal";
import Game from "./Game";
import { Provider } from "react-redux";
import store from "./store";

function MemoryApp() {
  const [isPlaying, setIsPlaying] = useState(null);

  function handlePlay() {
    setIsPlaying(true);
  }

  return (
    <Provider store={store}>
      {!isPlaying && <StartModal onPlay={handlePlay} />}
      {isPlaying && <Game />}
    </Provider>
  );
}

export default MemoryApp;
