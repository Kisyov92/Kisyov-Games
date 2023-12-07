/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function QuizSummery({ onPlayAgain, correctAnswersPercentage }) {
  return (
    <Modal>
      <h2>
        You answerd {correctAnswersPercentage}% of the questions correctly
      </h2>
      <button onClick={onPlayAgain}>Take another test</button>
    </Modal>
  );
}

export default QuizSummery;
