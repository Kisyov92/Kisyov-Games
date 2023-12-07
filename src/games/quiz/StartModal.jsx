/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";
import FormQuiz from "./FormQuiz";

function StartModal({ onReceiveQuestionsData }) {
  return (
    <Modal>
      <h2>Test your knowledge</h2>
      <p>Create your custom test</p>
      <FormQuiz onReceiveQuestionsData={onReceiveQuestionsData} />
    </Modal>
  );
}

export default StartModal;
