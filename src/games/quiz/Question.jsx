/* eslint-disable react/prop-types */

import { useRef } from "react";
import classes from "./Question.module.css";

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

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
  onCorrectAnswer,
}) {
  const answers = useRef(
    shuffle([...question.incorrect_answers, question.correct_answer])
  );

  function handleAnswer(e) {
    if (e.target.value) onCorrectAnswer();
  }

  return (
    <div className={classes.modal}>
      <div className={classes.info}>
        <p>Category: {question.category}</p>
        <p>Difficulty: {question.difficulty}</p>
      </div>
      <p>{question.question}</p>
      <div className={classes.options}>
        {answers.current.map((answer, i) => (
          <button
            key={i}
            value={answer === question.correct_answer ? true : false}
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
        <button onClick={onNextQuestion}>Skip Question</button>
      </div>
    </div>
  );
}

export default Question;
