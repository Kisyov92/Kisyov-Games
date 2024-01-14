/* eslint-disable react/prop-types */

import classes from "./Story.module.css";

function createStory(textArr, wordsArr) {
  const finalTextArr = [];

  for (let i = 0; i <= textArr.length; i++) {
    finalTextArr.push(textArr[i], wordsArr[i]);
  }
  return finalTextArr.join(" ");
}

function Story({ story, playerWords, onNewStory }) {
  const text = createStory(story.text, playerWords);
  return (
    <div className={classes.story}>
      <h2>{story.title}</h2>
      <p>{text}</p>
      <button onClick={onNewStory}>Create a new story</button>
    </div>
  );
}

export default Story;
