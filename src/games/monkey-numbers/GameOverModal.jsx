/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function GameOverModal({ onPlayAgain }) {
  return (
    <Modal>
      <h2>GAME OVER!</h2>
      <p>You reached LEVEL</p>
      <button onClick={onPlayAgain}>PLAY AGAIN</button>
    </Modal>
  );
}

export default GameOverModal;
