/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

import classes from "./StartModal.module.css";

function StartModal({ onGameStart }) {
  return (
    <Modal className={classes.modal}>
      <h2>Are you ready to test your memory?</h2>
      <p>
        Remember the position of the numbers and click them in sequence from the
        smallest to the biggest number
      </p>
      <p>Choose a difficulty level that you want to start at!</p>

      <div onClick={(e) => onGameStart(e.target.id)}>
        <button id="easy">EASY</button>
        <button id="medium">MEDIUM</button>
        <button id="hard">HARD</button>
      </div>
      <p>
        If you are ready befor the time is up, clicking on 0 to start the level
      </p>
    </Modal>
  );
}

export default StartModal;
