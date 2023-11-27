/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";
import classes from "./StartModal.module.css";

function StartModal({ onChoice }) {
  return (
    <Modal className={classes.startModal}>
      <h2>Ready to play some darts?</h2>
      <p>Choose difficulty:</p>
      <button
        onClick={() => {
          onChoice("easy");
        }}
      >
        Easy
      </button>
      <button
        onClick={() => {
          onChoice("medium");
        }}
      >
        Medium
      </button>
      <button
        onClick={() => {
          onChoice("hard");
        }}
      >
        Hard
      </button>
    </Modal>
  );
}

export default StartModal;
