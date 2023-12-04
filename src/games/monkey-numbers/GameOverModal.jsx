/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function GameOverModal({ onPlayAgain, level }) {
  return (
    <Modal>
      <h2>GAME OVER!</h2>
      <p>You reached level {level}</p>
      <button onClick={onPlayAgain}>PLAY AGAIN</button>
    </Modal>
  );
}

export default GameOverModal;
