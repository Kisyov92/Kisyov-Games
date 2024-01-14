/* eslint-disable react/prop-types */
import { useRef } from "react";
import Modal from "../../UI/Modal";

import classes from "./FriendInput.module.css";

function FriendInput({ onOponentWordInput }) {
  const word = useRef();

  return (
    <Modal>
      <form
        className={classes.form}
        onSubmit={(e) => onOponentWordInput(e, word.current.value)}
      >
        <label htmlFor="word">Wright a word for your oponent to guess</label>
        <input type="text" id="word" ref={word} />
        <button>Submit</button>
      </form>
    </Modal>
  );
}

export default FriendInput;
