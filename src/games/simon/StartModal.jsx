import Modal from "../../UI/Modal";

import classes from "./StartModal.module.css";

function StartModal() {
  return (
    <Modal className={classes.start}>
      <h2>TEST YOUR MOMORY</h2>
      <p>It&rsquo;s simple. A pattern is shown and you have to repeat it.</p>
      <p>
        Easy mode: the whole sequence is shown at the beginning of every level
      </p>
      <p>Hard mode: only the added part is shown.</p>
      <div>
        <button>Easy</button>
        <button>Hard</button>
      </div>
    </Modal>
  );
}

export default StartModal;
