import { useState } from "react";

import StartModal from "./StartModal";
import Question from "./Question";

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function Quiz() {
  const [questionsData, setQuestionsData] = useState([]);
  const [isTakingTest, setIsTakingTest] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  let questions;
  if (questionsData.length > 0) {
    questions = questionsData.map((questionData) => ({
      category: decodeHtml(questionData.category),
      difficulty: questionData.difficulty,
      question: decodeHtml(questionData.question),
      correct_answer: questionData.correct_answer,
      incorrect_answers: questionData.incorrect_answers,
    }));
  }

  function handleReceiveQuestionsData(questionArr) {
    setQuestionsData(questionArr);
    setIsTakingTest(true);
  }

  function handleNextQuestion() {
    setQuestionCounter((prev) => prev + 1);
  }

  function handleCorrectAnswer() {
    setCorrectAnswers((prevState) => prevState + 1);
  }

  return (
    <>
      {!isTakingTest && (
        <StartModal onReceiveQuestionsData={handleReceiveQuestionsData} />
      )}
      {isTakingTest && (
        <Question
          question={questions[questionCounter]}
          onNextQuestion={handleNextQuestion}
          questionCounter={questionCounter + 1}
          questionsAmount={questionsData.length}
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}
    </>
  );
}

export default Quiz;
