/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

import classes from "./StartModal.module.css";

function StartModal({ onGameStart }) {
  return (
    <Modal className={classes.modal}>
      <h2>Are you ready to test your memory?</h2>
      <p>Choose a difficulty level that you want to start at!</p>
      <div onClick={(e) => onGameStart(e.target.id)}>
        <button id="easy">EASY</button>
        <button id="medium">MEDIUM</button>
        <button id="hard">HARD</button>
      </div>
      <p>
        If you are ready befor the time is up, clicking on 0 just click on 0
      </p>
    </Modal>
  );
}

export default StartModal;
