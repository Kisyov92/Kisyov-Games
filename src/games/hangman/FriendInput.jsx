/* eslint-disable react/prop-types */
import { useRef } from "react";
import Modal from "../../UI/Modal";

function FriendInput({ onOponentWordInput }) {
  const word = useRef();

  return (
    <Modal>
      <form
        onSubmit={(e) => onOponentWordInput(e, word.current.value)}
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "3.2rem",
        }}
      >
        <label style={{ marginBottom: "2rem", width: "100%" }} htmlFor="word">
          Wright a word for your oponent to guess
        </label>
        <input
          style={{
            border: "none",
            fontSize: "inherit",
            padding: "1rem 2rem",
            marginBottom: "2rem",
            width: "100%",
          }}
          type="text"
          id="word"
          ref={word}
        />

        <button style={{ width: "100%" }}>Submit</button>
      </form>
    </Modal>
  );
}

export default FriendInput;
