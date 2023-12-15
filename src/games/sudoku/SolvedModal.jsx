/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function SolvedModal({ mistakes, difficulty, onNewSudoku }) {
  const term = mistakes < 5 ? "just" : mistakes < 10 ? "only" : "";

  return (
    <Modal>
      <h2>Congratulatons!</h2>
      <p>
        You solved a sudoku of {difficulty?.toLowerCase()} difficulty with{" "}
        {term} {mistakes} mistakes
      </p>
      <button onClick={onNewSudoku}>Play again</button>
    </Modal>
  );
}

export default SolvedModal;
