import { useDispatch, useSelector } from "react-redux";
import classes from "./Game.module.css";
import MemoryCards from "./MemoryCards";
import Options from "./Options";
import WinModal from "./WinModal";
import { useEffect } from "react";
import { gameAction } from "./store/game";
import Turns from "./Turns";
import Mistakes from "./Mistakes";

function Game() {
  const solved = useSelector((state) => state.solved);
  const showMoves = useSelector((state) => state.showMoves);
  const showMistakes = useSelector((state) => state.showMistakes);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(gameAction.restartGame());
  }, []);

  return (
    <>
      {solved && <WinModal />}
      {!solved && (
        <div className={classes.game}>
          <div className={classes.gameInfo}>
            {showMoves && <Turns />}
            {showMistakes && <Mistakes />}
          </div>
          <MemoryCards />
          <Options />
        </div>
      )}
    </>
  );
}

export default Game;
