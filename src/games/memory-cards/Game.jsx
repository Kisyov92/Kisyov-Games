import classes from "./Game.module.css";
import MemoryCards from "./MemoryCards";
import Options from "./Options";

function Game() {
  return (
    <div className={classes.game}>
      <MemoryCards />
      <Options />
    </div>
  );
}

export default Game;
