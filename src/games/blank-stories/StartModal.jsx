/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function StartModal({ onFetchStory }) {
  return (
    <Modal>
      <h2>Blank stories</h2>
      <p>Wright your on story with just a few words</p>
      <p>Press start to fill the missing words</p>
      <p>Be creative</p>
      <button onClick={onFetchStory}>Start</button>
    </Modal>
  );
}

export default StartModal;
