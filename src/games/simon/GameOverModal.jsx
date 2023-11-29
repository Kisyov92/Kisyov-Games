/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function GameOverModal({ onGameRestart, level, difficulty }) {
  return (
    <Modal>
      <h2>Game Over!</h2>
      <p>
        You reached level {level} on {difficulty} mode
      </p>
      <p>Give it another go</p>
      <button onClick={onGameRestart}>PLAY AGAIN</button>
    </Modal>
  );
}

export default GameOverModal;
