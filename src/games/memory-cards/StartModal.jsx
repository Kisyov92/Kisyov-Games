/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function StartModal({ onPlay }) {
  return (
    <Modal>
      <h2>Welcome to memory cards</h2>
      <p>
        By trying to find the matching cards you can test and improve your
        memory
      </p>
      <button onClick={onPlay}>TRAIN YOUR BRAIN</button>
    </Modal>
  );
}

export default StartModal;
