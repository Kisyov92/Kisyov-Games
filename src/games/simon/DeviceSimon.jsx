/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import classes from "./DeviceSimon.module.css";

function wait(secs) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("anything");
    }, secs * 1000);
  });
}

function randomChoice() {
  return Math.floor(Math.random() * 4 + 1);
}

function sequenceMatch(seq, playerSeq) {
  return playerSeq.every((el, i) => el === seq[i]);
}

function DeviceSimon({
  level,
  onLevelUp,
  isPlaying,
  onEndPlay,
  onEndGame,
  difficulty,
}) {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [activeBtn, setActiveBtn] = useState([]);
  const [allowClicks, setAllowClicks] = useState(false);

  useEffect(() => {
    if (
      sequenceMatch(sequence, playerSequence) &&
      playerSequence.length === sequence.length - 1 &&
      playerSequence.length !== 0
    ) {
      onEndPlay();
    }

    if (!sequenceMatch(sequence, playerSequence)) {
      onEndGame();
      onEndPlay();
    }
  });

  if (level >= sequence.length) {
    setSequence((prevSeq) => [...prevSeq, randomChoice()]);
  }

  async function handleShowSequence() {
    setAllowClicks(false);
    if (difficulty === "easy") {
      for (const num of sequence) {
        await wait(0.5);
        setActiveBtn(num);
        await wait(0.5);
        setActiveBtn(null);
      }
    } else if (difficulty === "hard") {
      await wait(0.5);
      setActiveBtn(sequence[sequence.length - 1]);
      await wait(0.5);
      setActiveBtn(null);
    }

    setAllowClicks(true);
  }

  function handleNextLevel() {
    onLevelUp();
    handleShowSequence();
    setPlayerSequence([]);
  }

  async function handleBtnClick(btn) {
    if (!allowClicks) return;
    setActiveBtn(+btn);
    await wait(0.3);
    setActiveBtn(null);

    setPlayerSequence((prev) => [...prev, +btn]);
  }

  return (
    <>
      <div className={classes.device}>
        <button
          onClick={(e) => handleBtnClick(e.target.id)}
          className={activeBtn === 1 ? classes.active : ""}
          id="1"
        ></button>
        <button
          onClick={(e) => handleBtnClick(e.target.id)}
          className={activeBtn === 2 ? classes.active : ""}
          id="2"
        ></button>
        <button
          onClick={(e) => handleBtnClick(e.target.id)}
          className={activeBtn === 3 ? classes.active : ""}
          id="3"
        ></button>
        <button
          onClick={(e) => handleBtnClick(e.target.id)}
          className={activeBtn === 4 ? classes.active : ""}
          id="4"
        ></button>
        {!isPlaying && (
          <button onClick={handleNextLevel}>Start Next Level</button>
        )}
      </div>
      <button
        className={classes.repeat}
        onClick={handleShowSequence}
        disabled={!allowClicks || !isPlaying}
      >
        Repeat Sequence
      </button>
    </>
  );
}

export default DeviceSimon;
