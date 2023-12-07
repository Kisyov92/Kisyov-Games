/* eslint-disable react/prop-types */

import { useState } from "react";
import classes from "./Question.module.css";

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function Question({
  question,
  onNextQuestion,
  questionCounter,
  questionsAmount,
  answers,
  correctAnswerId,
  onCorrectAnswer,
}) {
  const [playerAnswerId, setPlayerAnswerId] = useState(null);

  function handleAnswer(e) {
    if (playerAnswerId === null) setPlayerAnswerId(+e.target.id);
    if (+e.target.id === correctAnswerId) onCorrectAnswer();
  }

  return (
    <div className={classes.modal}>
      <div className={classes.info}>
        <p>Category: {question.category}</p>
        <p>Difficulty: {question.difficulty}</p>
      </div>
      <p>{question.question}</p>
      <div className={classes.options}>
        {answers?.map((answer, i) => (
          <button
            key={answer}
            id={i}
            className={
              playerAnswerId !== null && correctAnswerId === i
                ? classes.correct
                : playerAnswerId === i
                ? classes.wrong
                : ""
            }
            onClick={handleAnswer}
          >
            {decodeHtml(answer)}
          </button>
        ))}
      </div>
      <div className={classes.progress}>
        <div>
          <label htmlFor="progress">Quiz progress:</label>
          <progress id="progress" max={questionsAmount} value={questionCounter}>
            asd
          </progress>
        </div>
        <button onClick={onNextQuestion}>
          {playerAnswerId ? "Next" : "Skip"} Question
        </button>
      </div>
    </div>
  );
}

export default Question;
