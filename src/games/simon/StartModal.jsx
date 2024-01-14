/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

import classes from "./StartModal.module.css";

function StartModal({ onSetDifficulty }) {
  return (
    <Modal className={classes.start}>
      <h2>TEST YOUR MOMORY</h2>
      <p>It&rsquo;s simple. A pattern is shown and you have to repeat it.</p>
      <p>
        Easy mode: the whole sequence is shown at the beginning of every level
      </p>
      <p>Hard mode: only the new addition to the sequence is shown.</p>
      <div>
        <button onClick={() => onSetDifficulty("easy")}>Easy</button>
        <button onClick={() => onSetDifficulty("hard")}>Hard</button>
      </div>
    </Modal>
  );
}

export default StartModal;
