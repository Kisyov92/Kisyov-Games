import { useState } from "react";
import Modal from "../../UI/Modal";
import StartModal from "./StartModal";
import WordsInput from "./WordsInput";
import Story from "./Story";

function BlankStories() {
  const [story, setStory] = useState(null);
  const [playerWords, setPlayerWords] = useState([]);
  const storyIsReady = story?.blanks.length === playerWords.length;

  async function handlefetchStory() {
    const res = await fetch("https://madlibs-api.vercel.app/api/random");
    const data = await res.json();

    if (!res.ok) {
      // handle error
    }

    setStory(data);
  }

  function handleAddPlayerWord(newWord) {
    if (newWord.trim() === "") return;
    setPlayerWords((prev) => [...prev, newWord]);
  }

  function handleNewStory() {
    setStory(null);
    setPlayerWords([]);
  }

  return (
    <>
      {!story && <StartModal onFetchStory={handlefetchStory} />}
      {story && !storyIsReady && (
        <WordsInput
          story={story}
          playerWords={playerWords}
          onAddPlayerWord={handleAddPlayerWord}
        />
      )}
      {story && storyIsReady && (
        <Story
          story={story}
          playerWords={playerWords}
          onNewStory={handleNewStory}
        />
      )}
    </>
  );
}

export default BlankStories;
