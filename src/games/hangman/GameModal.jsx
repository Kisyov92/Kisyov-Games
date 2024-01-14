/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "../../UI/Modal";

import classes from "./GameModal.module.css";

import hangmanImg0 from "../../../public/hangsman/hangman-0.png";
import hangmanImg1 from "../../../public/hangsman/hangman-1.png";
import hangmanImg2 from "../../../public/hangsman/hangman-2.png";
import hangmanImg3 from "../../../public/hangsman/hangman-3.png";
import hangmanImg4 from "../../../public/hangsman/hangman-4.png";
import hangmanImg5 from "../../../public/hangsman/hangman-5.png";
import hangmanImg6 from "../../../public/hangsman/hangman-6.png";

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function GameModal({ oponentWord, onNewWord }) {
  const [word, setWord] = useState(oponentWord);
  const [definition, setDefinition] = useState([]);
  const [attemptedLetters, setAttemptedLetters] = useState([]);
  const [lives, setLives] = useState(6);
  const [gaveUp, setGaveUp] = useState(false);
  const [definitionCounter, setDefinitionCounter] = useState(0);

  const guessed = word
    ?.toLowerCase()
    .split("")
    .every((letter) => attemptedLetters.includes(letter));

  useEffect(() => {
    if (
      word
        ?.toLowerCase()
        .includes(attemptedLetters[attemptedLetters.length - 1]) ||
      attemptedLetters.length === 0 ||
      !lives
    )
      return;

    setLives((l) => l - 1);
  }, [attemptedLetters]);

  let hangmanLives;
  switch (lives) {
    case 0:
      hangmanLives = hangmanImg0;
      break;
    case 1:
      hangmanLives = hangmanImg1;
      break;
    case 2:
      hangmanLives = hangmanImg2;
      break;
    case 3:
      hangmanLives = hangmanImg3;
      break;
    case 4:
      hangmanLives = hangmanImg4;
      break;
    case 5:
      hangmanLives = hangmanImg5;
      break;
    case 6:
      hangmanLives = hangmanImg6;
      break;
    default:
      hangmanLives = hangmanImg0;
  }

  useEffect(() => {
    if (word) {
      setWord(word.toUpperCase());
      return;
    }

    async function fetchRandomWord() {
      const res = await fetch("https://random-word-api.vercel.app/api?words=1");
      const data = await res.json();
      setWord(data[0].toUpperCase());
    }

    fetchRandomWord();
  }, []);

  useEffect(() => {
    if (!word) return;

    async function fetchDefinition() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();

      setDefinition(
        data[0].meanings
          .map((def) => def.definitions.map((d) => d.definition))
          .flat()
      );
    }

    fetchDefinition();
  }, [word]);

  function handleLetterAttempt(e) {
    if (!lives || guessed) return;
    setAttemptedLetters((prevLetters) => [...prevLetters, e.target.value]);
  }

  function handleKeyDown(e) {
    const key = e.key.toLowerCase();
    if (
      attemptedLetters.includes(key) ||
      !ALPHABET.includes(key.toUpperCase()) ||
      !lives ||
      guessed
    )
      return;

    setAttemptedLetters((prevLetters) => [...prevLetters, key]);
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [attemptedLetters]);

  function handleGiveUp() {
    setGaveUp(true);
    setAttemptedLetters((prev) => [...prev, ...word.toLowerCase().split("")]);
  }

  function handleDefinitions() {
    if (definition.length - 1 === definitionCounter) {
      setDefinitionCounter(0);
      return;
    }

    setDefinitionCounter((d) => d + 1);
  }

  return (
    <>
      <Modal className={classes.mod}>
        <button className={classes.definition} onClick={handleDefinitions}>
          Another definition
        </button>
        <h2>Hangman</h2>
        <p>Definition: {definition[definitionCounter]}</p>
        <div className={classes.board}>
          <div onKeyDown={handleKeyDown} className={classes.letters}>
            <p>
              {word?.split("").map((letter, i) => (
                <span key={`${letter}${i}`}>
                  {attemptedLetters.includes(letter.toLowerCase())
                    ? letter
                    : "_"}{" "}
                </span>
              ))}
            </p>
            <p className={classes.alphabet}>
              {ALPHABET.map((letter) => (
                <button
                  key={letter}
                  onClick={handleLetterAttempt}
                  value={letter.toLowerCase()}
                  disabled={attemptedLetters.includes(letter.toLowerCase())}
                >
                  {letter}
                </button>
              ))}
            </p>
          </div>
          <img src={hangmanLives} alt="hangman" />
        </div>
        <div className={classes.controls}>
          <button onClick={handleGiveUp}>I GIVE UP</button>
          <button onClick={onNewWord}>NEW WORD</button>
        </div>
      </Modal>
      {(guessed || !lives) && (
        <Modal>
          {guessed ? (
            !gaveUp ? (
              <h2>CONGRATS!</h2>
            ) : (
              <h2>Don&rsquo;t give up so easly</h2>
            )
          ) : (
            <h2>The word was {word}</h2>
          )}
          <p>
            {lives
              ? gaveUp
                ? "Better luck next time"
                : "You guessed it"
              : "That was a hard one. You'll get it next time"}
          </p>
          <button onClick={onNewWord}>{lives ? "NEXT" : "NEW"} WORD</button>
        </Modal>
      )}
    </>
  );
}

export default GameModal;
