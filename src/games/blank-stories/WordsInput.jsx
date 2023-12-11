/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal from "../../UI/Modal";

import classes from "./WordsInput.module.css";

function WordsInput({ story, playerWords, onAddPlayerWord }) {
  const [word, setWord] = useState("");

  const lastWord = story.blanks.length - 1 === playerWords.length;

  function handleNewWord(e) {
    e.preventDefault();

    onAddPlayerWord(word);
    setWord("");
  }
  return (
    <Modal>
      <h2>Title: {story.title}</h2>
      <p>
        Please enter a{story.blanks[playerWords.length][0] === "a" ? "n " : " "}
        {story.blanks[playerWords.length]}
      </p>
      <form onSubmit={handleNewWord} className={classes.form}>
        <input
          type="text"
          className={classes.input}
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button>{lastWord ? "Read your story" : "Next Word"} </button>
      </form>
      <progress max={story.blanks.length} value={playerWords.length}></progress>
    </Modal>
  );
}

export default WordsInput;
