import { useState } from "react";
import Modal from "../../UI/Modal";

function BlankStories() {
  const [story, setStory] = useState("");

  async function fetchStory() {
    const res = await fetch("https://madlibs-api.vercel.app/api/random");
    console.log(res);
    const data = await res.json();

    if (!res.ok) {
      // handle error
    }

    setStory(data);
  }

  console.log(story);

  return (
    <Modal>
      <h2>Blank stories</h2>
      <p>Wright your on story with just a few words</p>
      <p>Press start to fill the missing words</p>
      <p>Be creative</p>
      <button onClick={fetchStory}>Start</button>
    </Modal>
  );
}

export default BlankStories;
