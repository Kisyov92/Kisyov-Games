import { useRef, useState } from "react";

import StartModal from "./StartModal";
import Question from "./Question";
import QuizSummery from "./QuizSummery";

function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

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

function Quiz() {
  const [questionsData, setQuestionsData] = useState([]);
  const [isTakingTest, setIsTakingTest] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const correctAnswers = useRef(0);
  const noMoreQuestions = questionCounter === questionsData.length;
  const correctAnswersPercentage =
    (correctAnswers.current / questionsData.length) * 100;
  let questions;
  let answers;

  if (isTakingTest && !noMoreQuestions) {
    questions = questionsData.map((questionData) => ({
      category: decodeHtml(questionData.category),
      difficulty: questionData.difficulty,
      question: decodeHtml(questionData.question),
      correct_answer: questionData.correct_answer,
      incorrect_answers: questionData.incorrect_answers,
    }));

    answers = shuffle([
      ...questions[questionCounter].incorrect_answers,
      questions[questionCounter].correct_answer,
    ]);
  }
  let correctAnswerId = answers?.findIndex(
    (ans) => ans === questions[questionCounter].correct_answer
  );

  function handleReceiveQuestionsData(questionArr) {
    setQuestionsData(questionArr);
    setIsTakingTest(true);
  }

  function handleNextQuestion() {
    setQuestionCounter((prev) => prev + 1);
  }

  function handlePlayAgain() {
    setIsTakingTest(false);
    setQuestionCounter(0);
    correctAnswers.current = 0;
  }

  function handleCorrectAnswer() {
    correctAnswers.current = ++correctAnswers.current;
  }

  return (
    <>
      {!isTakingTest && (
        <StartModal onReceiveQuestionsData={handleReceiveQuestionsData} />
      )}
      {isTakingTest && !noMoreQuestions && (
        <Question
          key={questionCounter}
          question={questions[questionCounter]}
          onNextQuestion={handleNextQuestion}
          questionCounter={questionCounter + 1}
          questionsAmount={questionsData.length}
          answers={answers}
          correctAnswerId={correctAnswerId}
          onCorrectAnswer={handleCorrectAnswer}
        />
      )}
      {isTakingTest && noMoreQuestions && (
        <QuizSummery
          correctAnswersPercentage={correctAnswersPercentage}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </>
  );
}

export default Quiz;
