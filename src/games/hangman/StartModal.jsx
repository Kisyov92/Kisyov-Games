/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function StartModal({ onSinglePlayer, onMultyPlayer }) {
  return (
    <Modal>
      <h2>Hangman</h2>
      <p>By guessing the words you can hang around for longer</p>
      <div>
        <button style={{ marginRight: "2rem" }} onClick={onSinglePlayer}>
          Single Player
        </button>
        <button onClick={onMultyPlayer}>Play with a friend</button>
      </div>
    </Modal>
  );
}

export default StartModal;
