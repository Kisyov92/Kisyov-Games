/* eslint-disable react/prop-types */
import Modal from "../../UI/Modal";

function StartModal({ onFetchStory }) {
  return (
    <Modal>
      <h2>Blank stories</h2>
      <p>Write your on story with just a few words</p>
      <p>Press start to filling the missing words</p>
      <p>Be creative</p>
      <button onClick={onFetchStory}>Start</button>
      <p>
        To play the game you need{" "}
        <a
          href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
          target="_blank"
          rel="noreferrer"
        >
          this
        </a>{" "}
        extension
      </p>
    </Modal>
  );
}

export default StartModal;
