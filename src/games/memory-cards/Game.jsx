import { useDispatch, useSelector } from "react-redux";
import classes from "./Game.module.css";
import MemoryCards from "./MemoryCards";
import Options from "./Options";
import WinModal from "./WinModal";
import { useEffect } from "react";
import { gameAction } from "./store/game";

function Game() {
  const solved = useSelector((state) => state.solved);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(gameAction.restartGame());
  }, []);

  return (
    <>
      {solved && <WinModal />}
      {!solved && (
        <div className={classes.game}>
          <MemoryCards />
          <Options />
        </div>
      )}
    </>
  );
}

export default Game;
